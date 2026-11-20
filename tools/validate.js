// Validate a country data file: node validate.js <path-to-en.js> [media.js]
const fs = require('fs');
const path = process.argv[2];
let DATA = null, MEDIA = null;
global.TG = {
  registerCountry: (id, lang, d) => { DATA = d; DATA._id = id; },
  registerMedia: (id, m) => { MEDIA = m; }
};
global.window = global;
new Function(fs.readFileSync(path, 'utf8'))();
if (process.argv[3]) new Function(fs.readFileSync(process.argv[3], 'utf8'))();

const errs = [], warn = [];
const regions = new Set(DATA.regions.map((r) => r.id));
const cats = new Set(Object.keys(DATA.categories));
const ids = new Set();
DATA.spots.forEach((s, i) => {
  const at = `spot[${i}] ${s.id || '(no id)'}`;
  if (!s.id) errs.push(`${at}: missing id`);
  if (ids.has(s.id)) errs.push(`${at}: duplicate id`);
  ids.add(s.id);
  if (!regions.has(s.region)) errs.push(`${at}: unknown region '${s.region}'`);
  (s.categories || []).forEach((c) => { if (!cats.has(c)) errs.push(`${at}: unknown category '${c}'`); });
  if (!Array.isArray(s.coords) || s.coords.length !== 2 || !isFinite(s.coords[0]) || !isFinite(s.coords[1])) errs.push(`${at}: bad coords`);
  else {
    const [la, ln] = s.coords;
    if (la < -90 || la > 90 || ln < -180 || ln > 180) errs.push(`${at}: coords out of range`);
  }
  ['name', 'city', 'tagline', 'bestTime', 'duration', 'dress'].forEach((k) => { if (!s[k]) errs.push(`${at}: missing ${k}`); });
  ['overview', 'history', 'highlights', 'tips'].forEach((k) => { if (!Array.isArray(s[k]) || !s[k].length) errs.push(`${at}: ${k} empty`); });
  if (!s.hours || !s.hours.summary) errs.push(`${at}: missing hours.summary`);
  if (!s.tickets || s.tickets.required === undefined) errs.push(`${at}: missing tickets.required`);
  if (s.tickets && ![true, false, 'partial'].includes(s.tickets.required)) errs.push(`${at}: tickets.required must be true/false/'partial'`);
  if (!s.gettingThere || !s.gettingThere.road) errs.push(`${at}: missing gettingThere.road`);
  if (s.status && !['closed', 'check'].includes(s.status)) errs.push(`${at}: bad status '${s.status}'`);
  if (s.status && !s.notice) errs.push(`${at}: status set but no notice`);
  (s.tickets && s.tickets.links || []).forEach((l) => { if (!l.url || !/^https?:\/\//.test(l.url)) errs.push(`${at}: bad ticket link`); });
  if (s.wiki && !/^https?:\/\//.test(s.wiki)) errs.push(`${at}: bad wiki url`);
});
(DATA.unesco || []).forEach((u) => { if (u.spot && !ids.has(u.spot)) errs.push(`unesco '${u.name}': spot '${u.spot}' not found`); });
const unescoSpots = DATA.spots.filter((s) => s.unesco).length;
if (MEDIA) Object.keys(MEDIA.spots || {}).forEach((k) => { if (!ids.has(k)) errs.push(`media: unknown spot id '${k}'`); });

const byRegion = {};
DATA.spots.forEach((s) => { byRegion[s.region] = (byRegion[s.region] || 0) + 1; });
regions.forEach((r) => { if (!byRegion[r]) warn.push(`region '${r}' has no spots`); });
const noPhotos = MEDIA ? DATA.spots.filter((s) => !(MEDIA.spots || {})[s.id]).map((s) => s.id) : [];

console.log(`spots: ${DATA.spots.length}  unesco-flagged: ${unescoSpots}  unesco-list: ${(DATA.unesco || []).length}`);
console.log('per region:', byRegion);
if (MEDIA) console.log(`spots without photos (${noPhotos.length}):`, noPhotos.join(', ') || 'none');
warn.forEach((w) => console.log('WARN  ' + w));
errs.forEach((e) => console.log('ERROR ' + e));
console.log(errs.length ? `\n${errs.length} ERROR(S)` : '\nOK — no errors');
process.exit(errs.length ? 1 : 0);
