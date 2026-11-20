const fs = require('fs');
const { execFileSync } = require('child_process');
function render(cid, query) {
  global.window = global; global.history = { replaceState(){} };
  global.document = { getElementById: () => null, createElement: () => ({ style:{} }) };
  const store = { countries:{}, planner:{} };
  global.TG = { registerCountry:(id,l,d)=>{store.countries[id]=d;}, registerMedia:()=>{}, registerPlanner:(id,p)=>{store.planner[id]=p;} };
  new Function(fs.readFileSync(`data/${cid}/en.js`,'utf8'))();
  new Function(fs.readFileSync(`data/${cid}/plan.js`,'utf8'))();
  global.location = { hash: `#/c/${cid}/plan?${query}` };
  new Function(fs.readFileSync('js/planner.js','utf8'))();
  const ctx = { cid, data: store.countries[cid], P: store.planner[cid], t:(k)=>k, esc:(x)=>String(x==null?'':x),
    icon: new Proxy({}, { get: () => '' }), img: () => '', cover: () => '', coverThumb: () => '', toast(){} };
  return global.TG_PLANNER.render(ctx);
}
let fails = 0;
function check(label, cid, q, asserts) {
  const h = render(cid, q);
  const probs = [];
  for (const [desc, fn] of Object.entries(asserts)) { if (!fn(h)) probs.push(desc); }
  if (probs.length) { fails++; console.log('FAIL ' + label + ' -> ' + probs.join('; ')); }
  else console.log('OK   ' + label);
}
const has = (re) => (h) => re.test(h);
const no  = (re) => (h) => !re.test(h);

check('TR: no religion step, EUR, no Nusuk/ihram', 'turkey',
  'o=outside&n=GB&from=2027-04-10&to=2027-04-20&g=couple&st=balanced&tr=train&a=IST&x=cappadocia&bl=comfort', {
  'has result': has(/planResult/), 'EUR budget': has(/EUR [\d,]+/), 'no SAR': no(/SAR [\d,]/),
  'no Nusuk': no(/Nusuk/i), 'no ihram': no(/ihram/i), 'no Umrah': no(/Umrah/i),
  'no religion step': no(/name="religion"/), 'visa-free verdict': has(/No visa needed/),
  'museum pass tip': has(/Museum Pass/), 'bus is not SAPTCO': no(/SAPTCO/),
});
check('TR: e-Visa nationality', 'turkey',
  'o=outside&n=BD&from=2027-05-01&to=2027-05-12&g=family&st=relaxed&tr=car&idp=1&a=IST&x=cappadocia&bl=eco', {
  'conditional e-Visa, not met': has(/only with a qualifying document/), 'names the Gulf exclusion': has(/Gulf states, does not qualify/),
  'no Nusuk': no(/Nusuk/i),
});
check('TR: visa required fallback', 'turkey',
  'o=outside&n=SO&from=2027-05-01&to=2027-05-10&g=solo&st=balanced&tr=taxi&a=IST&bl=eco', {
  'embassy verdict': has(/Visa required from a Turkish embassy/), 'embassy wording': has(/embassy or consulate/),
});
check('TR: Istanbul arrival advice', 'turkey',
  'o=outside&n=GB&from=2027-04-10&to=2027-04-16&g=solo&st=balanced&tr=taxi&a=IST&bl=comfort', {
  'M11 metro text': has(/M11 metro/), 'Istanbulkart': has(/Istanbulkart/),
});
check('TR: family plan drops strenuous spots', 'turkey',
  'o=outside&n=GB&from=2027-04-10&to=2027-04-24&g=family&st=balanced&tr=taxi&a=IST&x=cappadocia,antalya,lycia&bl=comfort', {
  'no Termessos': no(/Termessos/), 'no Saklıkent': no(/Saklıkent/), 'has result': has(/planResult/),
});

check('SA: muslim keeps Umrah/Nusuk/ihram', 'saudi-arabia',
  'o=outside&n=BD&f=muslim&from=2027-02-01&to=2027-02-12&g=couple&st=balanced&tr=taxi&a=MED&x=jeddah&bl=comfort', {
  'Nusuk present': has(/Nusuk/), 'Umrah permit': has(/Umrah permit/), 'ihram note': has(/ihram/i),
  'SAR budget': has(/SAR [\d,]+/), 'religion step existed': has(/Makkah/),
});
check('SA: non-muslim gets no Umrah/Nusuk/ihram', 'saudi-arabia',
  'o=outside&n=GB&f=other&from=2027-02-01&to=2027-02-09&g=solo&st=balanced&tr=car&idp=1&a=RUH&x=riyadh_day,alula&bl=comfort', {
  'no Nusuk': no(/Nusuk/), 'no ihram': no(/ihram/i),
  'no Umrah permit row': no(/Umrah permit/), 'no Umrah visa row': no(/Umrah visa/),
  'no Makkah-only spots': no(/Masjid al-Haram/), 'SAR budget': has(/SAR [\d,]+/),
});
check('SA: GCC citizen visa-free', 'saudi-arabia',
  'o=outside&n=AE&f=muslim&from=2027-02-01&to=2027-02-07&g=couple&st=balanced&tr=taxi&a=JED&bl=comfort', {
  'GCC verdict': has(/GCC citizen/), 'no eVisa booking row': no(/Tourist eVisa \(apply online/),
});
check('SA: eVisa nationality shows booking row', 'saudi-arabia',
  'o=outside&n=GB&f=other&from=2027-02-01&to=2027-02-07&g=couple&st=balanced&tr=taxi&a=JED&bl=comfort', {
  'eVisa verdict': has(/Eligible for the tourist eVisa/), 'eVisa booking': has(/Tourist eVisa \(apply online/),
});
check('SA: SAPTCO still used', 'saudi-arabia',
  'o=inside&cp=riyadh&dp=qassim&f=muslim&from=2027-02-01&to=2027-02-06&g=friends&st=balanced&car=no&bl=eco', {
  'has result': has(/planResult/),
});
check('TR: Bangladeshi with Saudi residence is told to use an embassy', 'turkey',
  'o=outside&n=BD&r=SA&from=2027-04-10&to=2027-04-20&g=couple&st=balanced&tr=taxi&a=IST&bl=comfort', {
  'warned': has(/only with a qualifying document/),
  'Gulf permits excluded': has(/Gulf states, does not qualify/),
  'not told it is simple': no(/apply online for the e-visa/i),
});
check('TR: Bangladeshi with German residence qualifies', 'turkey',
  'o=outside&n=BD&r=DE&from=2027-04-10&to=2027-04-20&g=couple&st=balanced&tr=taxi&a=IST&bl=comfort', {
  'qualifies': has(/you qualify/), 'tells them to carry it': has(/carry that document/),
});
check('SA: Bangladeshi with no qualifying document is not told to just apply online', 'saudi-arabia',
  'o=outside&n=BD&f=muslim&from=2027-04-10&to=2027-04-20&g=couple&st=balanced&tr=taxi&a=JED&bl=comfort', {
  'warned': has(/cannot apply for the Saudi eVisa on nationality alone/),
  'names the package route': has(/qualifying package from an approved Saudi tourism provider/),
  'names the GCC residence route': has(/residence in a GCC country/),
});
check('SA: Bangladeshi resident in the UAE qualifies online', 'saudi-arabia',
  'o=outside&n=BD&r=AE&f=muslim&from=2027-04-10&to=2027-04-20&g=couple&st=balanced&tr=taxi&a=JED&bl=comfort', {
  'qualifies': has(/qualifies you to apply online/),
  'states the used-visa condition': has(/already used it to enter that country/),
  'states the airline condition': has(/Saudi-based airline/),
});
check('SA: Mexico is on the eVisa list after the Nov 2026 addition', 'saudi-arabia',
  'o=outside&n=MX&f=other&from=2027-04-10&to=2027-04-18&g=solo&st=balanced&tr=taxi&a=JED&bl=comfort', {
  'eVisa': has(/Eligible for the tourist eVisa/),
});
console.log(fails ? `\n${fails} FAILING` : '\nall content assertions passed');
process.exit(fails?1:0);
