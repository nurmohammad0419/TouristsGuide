/* TouristsGuide — Tour Planner
 * A step-by-step wizard that turns the country's spot data into a day-by-day itinerary.
 * Loaded by app.js; data comes from data/<country>/plan.js (TG.registerPlanner).
 */
(function () {
  'use strict';

  const DAY = 86400000;
  const STRENUOUS = new Set(['jabal-al-nour', 'jabal-thawr', 'edge-of-the-world', 'umm-jarsan', 'dahl-heet', 'wadi-lajab', 'habala', 'jabal-aja', 'uruq-bani-maarid', 'al-faw', 'hisma-desert', 'jabal-al-lawz']);
  const PACE = { solo: 3, couple: 3, family: 2, friends: 3 };

  function haversine(a, b) {
    const R = 6371, r = Math.PI / 180;
    const h = Math.sin((b[0] - a[0]) * r / 2) ** 2 + Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin((b[1] - a[1]) * r / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }

  function readState() {
    const q = (location.hash.split('?')[1] || '');
    const p = new URLSearchParams(q);
    const s = {
      origin: p.get('o') || '', nat: p.get('n') || '', res: p.get('r') || '', visaHolder: p.get('vh') === '1',
      religion: p.get('f') || '', from: p.get('from') || '', to: p.get('to') || '', group: p.get('g') || '',
      transport: p.get('tr') || '', idp: p.get('idp') === '1', airport: p.get('a') || '',
      extras: (p.get('x') || '').split(',').filter(Boolean),
      curProv: p.get('cp') || '', dest: (p.get('dp') || '').split(',').filter(Boolean), car: p.get('car') || ''
    };
    return s;
  }
  function writeState(s) {
    const p = new URLSearchParams();
    const put = (k, v) => { if (v) p.set(k, v); };
    put('o', s.origin); put('n', s.nat); put('r', s.res); if (s.visaHolder) p.set('vh', '1');
    put('f', s.religion); put('from', s.from); put('to', s.to); put('g', s.group); put('tr', s.transport); if (s.idp) p.set('idp', '1');
    put('a', s.airport); put('x', s.extras.join(',')); put('cp', s.curProv); put('dp', s.dest.join(',')); put('car', s.car);
    const base = location.hash.split('?')[0];
    history.replaceState(null, '', base + '?' + p.toString());
  }

  /* ---------------- Visa logic ---------------- */
  function visaVerdict(P, s) {
    const V = P.visa;
    if (!s.nat) return null;
    if (s.nat === 'SA') return { level: 'ok', title: 'No visa needed', text: 'Saudi citizens enter freely.' };
    if (V.gcc.includes(s.nat)) return { level: 'ok', title: 'No visa needed — GCC citizen', text: 'Citizens of GCC countries can enter with a valid passport or national ID.' };
    if (V.evisa.includes(s.nat)) return { level: 'ok', title: 'Eligible for the tourist eVisa / visa on arrival', text: 'Apply online before you fly (recommended) or get a visa on arrival at major airports. The tourist visa is valid for 1 year, multiple entry, up to 90 days per stay, and allows Umrah outside the Hajj season.', link: V.portal };
    if (s.res && s.res !== s.nat && V.residentOf.includes(s.res)) return { level: 'ok', title: 'Eligible for the tourist eVisa as a resident', text: 'Holders of a valid residence permit in your country of residence can apply for the Saudi tourist eVisa online. Carry your residence permit and passport (valid 6+ months).', link: V.portal };
    if (s.visaHolder) return { level: 'ok', title: 'Eligible for the eVisa / visa on arrival as a visa holder', text: 'Holders of ' + V.visaHolderOf + ' can apply for the tourist eVisa online or get a visa on arrival. Bring the passport containing that visa.', link: V.portal };
    return { level: 'warn', title: 'Visa required in advance', text: 'Your nationality is not currently on the eVisa list. Apply for a visit visa through the Saudi embassy or an authorised agent before travelling. Muslims can apply for an Umrah visa through the Nusuk platform or a licensed Umrah agent, which also allows tourism in most of the Kingdom.', link: V.nusuk, link2: V.portal };
  }

  /* ---------------- Transport between provinces ---------------- */
  function corridor(P, a, b) {
    if (a === b) return null;
    const c = P.corridors.find((x) => (x.between[0] === a && x.between[1] === b) || (x.between[0] === b && x.between[1] === a));
    const ha = P.hubs[a], hb = P.hubs[b];
    const km = Math.round(haversine(ha.coords, hb.coords) * 1.25);
    const driveH = Math.round((km / 95 + 0.5) * 2) / 2;
    const modes = (c && c.modes.length ? c.modes : []).map((m) => ({ ...m }));
    if (!modes.some((m) => m.type === 'drive')) modes.push({ type: 'drive', hours: driveH });
    modes.forEach((m) => { if (m.type === 'drive' && !m.label) m.label = `Drive ${ha.city} → ${hb.city} (about ${m.hours} h, ~${km} km)`; });
    if (!modes.some((m) => m.type === 'flight') && driveH > 5 && ha.airport && hb.airport) modes.push({ type: 'flight', label: `Domestic flight ${ha.airport} → ${hb.airport}` });
    modes.push({ type: 'bus', label: `SAPTCO intercity bus ${ha.city} → ${hb.city}`, url: 'https://www.saptco.com.sa' });
    return { from: ha, to: hb, km, driveH, modes };
  }
  function pickTransport(cor, s) {
    const hasCar = s.origin === 'inside' ? s.car === 'yes' : (s.transport === 'car' && s.idp);
    const order = hasCar ? ['drive', 'train', 'flight', 'bus'] : s.transport === 'train' ? ['train', 'flight', 'bus', 'drive'] : ['train', 'flight', 'bus', 'drive'];
    const sorted = cor.modes.slice().sort((x, y) => order.indexOf(x.type) - order.indexOf(y.type));
    if (!hasCar) sorted.forEach((m) => { if (m.type === 'drive') m.label = m.label.replace('Drive', 'Taxi / rental car'); });
    return sorted;
  }

  /* ---------------- Itinerary builder ---------------- */
  function buildBlocks(P, data, s) {
    const muslim = s.religion === 'muslim';
    const clusters = P.clusters;
    const ok = (id) => {
      const sp = data.spots.find((x) => x.id === id);
      if (!sp) return false;
      if (!muslim && sp.muslimsOnly) return false;
      if (s.group === 'family' && STRENUOUS.has(id)) return false;
      if (sp.status === 'closed') return false;
      return true;
    };
    const block = (key, prov) => {
      const c = clusters[key]; if (!c || (c.muslimsOnly && !muslim)) return null;
      const spots = c.spots.filter(ok);
      return spots.length ? { key, title: c.title, city: c.city, prov, spots } : null;
    };
    let seq = [];
    if (s.origin === 'outside') {
      const days = s.days;
      if (muslim) {
        const startMadinah = s.airport === 'MED';
        const makkah = [block('makkah_umrah', 'makkah'), block('makkah_ziyarat', 'makkah')];
        const madinah = [block('madinah_core', 'madinah'), block('madinah_ziyarat', 'madinah')];
        seq = startMadinah ? [...madinah, ...makkah] : [...makkah, ...madinah];
        const x = new Set(s.extras);
        if (x.has('jeddah')) seq.splice(startMadinah ? seq.length : 2, 0, block('jeddah', 'makkah'));
        if (x.has('taif')) seq.push(block('taif', 'makkah'));
        if (x.has('alula')) seq.push(block('alula', 'madinah'));
        if (x.has('riyadh')) seq.push(block('riyadh', 'riyadh'));
        if (x.has('eastern')) seq.push(block('eastern_metro', 'eastern'), block('alahsa', 'eastern'));
        if (x.has('asir')) seq.push(block('asir', 'asir'));
      } else {
        const x = new Set(s.extras);
        const fromRiyadh = s.airport === 'RUH';
        const west = [block('jeddah', 'makkah'), x.has('taif') ? block('taif', 'makkah') : null, x.has('alula') ? block('alula', 'madinah') : null];
        const centre = [block('riyadh', 'riyadh'), x.has('riyadh_day') ? block('riyadh_day', 'riyadh') : null];
        seq = fromRiyadh ? [...centre, ...(x.has('alula') ? [block('alula', 'madinah')] : []), ...(x.has('jeddah') ? [block('jeddah', 'makkah')] : [])] : [...west, ...(x.has('riyadh') ? centre : [])];
        if (x.has('eastern')) seq.push(block('eastern_metro', 'eastern'), block('alahsa', 'eastern'));
        if (x.has('asir')) seq.push(block('asir', 'asir'));
      }
    } else {
      s.dest.forEach((prov) => (P.provinceClusters[prov] || []).forEach((k) => seq.push(block(k, prov))));
    }
    return seq.filter(Boolean);
  }

  // Simulate the itinerary; if it does not fit the trip, trim one spot (longest / most optional cluster first) and retry
  function allocate(P, data, s, blocks) {
    blocks = blocks.map((b) => ({ ...b, spots: b.spots.slice() }));
    const minLen = (b) => (['makkah_umrah', 'madinah_core'].includes(b.key) ? 1 : 2);
    const want = () => blocks.reduce((n, b) => n + b.spots.length, 0);
    const trimmed = [];
    let guard = 400, res;
    while (guard--) {
      res = allocateRaw(P, data, s, blocks);
      if (res.placed >= want()) break;
      let best = -1, bestScore = -1;
      blocks.forEach((b, i) => { if (b.spots.length > minLen(b)) { const sc = b.spots.length + i * 0.6; if (sc > bestScore) { bestScore = sc; best = i; } } });
      if (best < 0) { if (blocks.length > 1) blocks.pop(); else break; continue; }
      trimmed.push({ b: blocks[best], id: blocks[best].spots.pop() });
    }
    // Refill: put trimmed spots back (most recently trimmed first) wherever they still fit
    for (const tr of trimmed.reverse()) {
      tr.b.spots.push(tr.id);
      const r2 = allocateRaw(P, data, s, blocks);
      if (r2.placed >= want()) res = r2; else tr.b.spots.pop();
    }
    return res.days;
  }

  function allocateRaw(P, data, s, blocks) {
    const pace = PACE[s.group] || 3;
    const days = [];
    const total = s.days;
    let placed = 0;
    const newDay = (city, prov, note) => { const d = { n: days.length + 1, date: new Date(s.fromDate.getTime() + days.length * DAY), city, prov, items: [], note }; days.push(d); return d; };
    const isDayTrip = (b) => !!(P.clusters[b.key] && P.clusters[b.key].dayTrip);
    const firstProv = blocks[0] ? blocks[0].prov : (s.dest[0] || 'riyadh');
    let cur = null;
    if (s.origin === 'outside') {
      const ap = P.airports[s.airport] || P.airports.JED;
      cur = newDay(blocks[0] ? blocks[0].city : P.hubs[firstProv].city, firstProv, 'arrival');
      cur.items.push({ type: 'travel', text: `Arrive at ${ap.name} (${s.airport}). ${airportTransfer(s)}` });
      cur.capacity = 1;
    } else {
      const from = s.curProv, to = firstProv;
      cur = newDay(blocks[0] ? blocks[0].city : P.hubs[to].city, to, 'arrival');
      if (from !== to) {
        const c = corridor(P, from, to);
        const modes = pickTransport(c, s);
        cur.items.push({ type: 'travel', text: `Travel from ${P.hubs[from].city} to ${P.hubs[to].city}: ${modes[0].label}.`, alt: modes.slice(1, 3).map((m) => m.label), url: modes[0].url });
        cur.capacity = c.driveH >= 4 ? 1 : 2;
      } else cur.capacity = pace;
    }
    let lastProv = firstProv, lastCity = cur.city;
    outer: for (const b of blocks) {
      if (b.prov !== lastProv) {
        if (days.length >= total) break;
        const c = corridor(P, lastProv, b.prov);
        const modes = pickTransport(c, s);
        cur = newDay(b.city, b.prov, 'travel');
        cur.items.push({ type: 'travel', text: `Travel from ${P.hubs[lastProv].city} area to ${b.city}: ${modes[0].label}.`, alt: modes.slice(1, 3).map((m) => m.label), url: modes[0].url });
        cur.capacity = c.driveH >= 4 ? 1 : Math.max(1, pace - 1);
      } else if (b.city !== lastCity) {
        const dKm = cityDistance(data, lastCity, b.city);
        if (cur.items.some((i) => i.type === 'spot')) { if (days.length >= total) break; cur = newDay(b.city, b.prov, dKm > 150 ? 'travel' : undefined); cur.capacity = dKm > 150 ? Math.max(1, pace - 1) : pace; }
        else cur.city = b.city;
        if (dKm > 150) cur.items.push({ type: 'travel', text: `Transfer ${lastCity} → ${b.city}: about ${Math.round(dKm)} km (${Math.round((dKm / 90 + 0.5) * 2) / 2} h by road${b.city === 'AlUla' ? '; flights to AlUla (ULH) also available' : ''}).` });
        else if (dKm > 40) cur.items.push({ type: 'travel', text: `Day trip / transfer to ${b.city} (about ${Math.round(dKm)} km each way).` });
      } else if (isDayTrip(b) && cur.items.some((i) => i.type === 'spot')) {
        if (days.length >= total) break;
        cur = newDay(b.city, b.prov); cur.capacity = Math.min(pace, 2);
        cur.items.push({ type: 'travel', text: `${b.title} — longer drives; start early.` });
      }
      lastProv = b.prov; lastCity = b.city;
      for (const id of b.spots) {
        const cap = (days.length === total && total > 1) ? 1 : (cur.capacity ?? pace);
        if (cur.items.filter((i) => i.type === 'spot').length >= cap) {
          if (days.length >= total) break outer;
          cur = newDay(b.city, b.prov); cur.capacity = isDayTrip(b) ? Math.min(pace, 2) : pace;
          if (isDayTrip(b)) cur.items.push({ type: 'travel', text: `${b.title} — longer drives; start early.` });
        }
        cur.items.push({ type: 'spot', id, cluster: b.title }); placed++;
      }
    }
    while (days.length > total) days.pop();
    if (days.length < total) {
      const free = total - days.length;
      for (let i = 0; i < free; i++) { const d = newDay(lastCity, lastProv, 'free'); d.items.push({ type: 'free', text: 'Free day — rest, shopping, or repeat a favourite spot. Families often need this buffer.' }); }
    }
    const last = days[days.length - 1];
    if (last) last.items.push({ type: 'travel', text: s.origin === 'outside' ? `Departure day — allow 3 hours before an international flight${last.prov !== (P.airports[s.airport] || {}).serves?.[0] ? ' and plan the transfer back to your departure airport' : ''}.` : `Return to ${P.hubs[s.curProv] ? P.hubs[s.curProv].city : 'home'}.` });
    return { days, placed };
  }

  function cityDistance(data, a, b) {
    const ca = data.spots.find((x) => x.city === a), cb = data.spots.find((x) => x.city === b);
    return ca && cb ? haversine(ca.coords, cb.coords) : 0;
  }

  function airportTransfer(s) {
    const m = s.religion === 'muslim';
    const car = s.transport === 'car' && s.idp;
    switch (s.airport) {
      case 'JED': return m ? (car ? 'Collect your rental car and drive to Makkah (about 1 h 15 min via Highway 40); non-residents must park at the edge of the city and use the Haram buses.' : 'Take the Haramain High Speed Railway from the airport station straight to Makkah (about 1 h) or a taxi / ride-hailing (about 1 h 15 min). Enter ihram at the airport or on the plane before the miqat.') : (car ? 'Collect your rental car — Jeddah city centre is about 30 minutes away.' : 'Taxi or ride-hailing to Jeddah city centre (about 30 minutes).');
      case 'MED': return car ? 'Collect your rental car — central Madinah is about 20 minutes away.' : 'Taxi or ride-hailing to the Prophet\'s Mosque area (about 20 minutes).';
      case 'RUH': return car ? 'Collect your rental car — central Riyadh is about 35 minutes away.' : 'Riyadh Metro (airport line) or taxi / ride-hailing to the city (about 35 minutes).';
      case 'DMM': return car ? 'Collect your rental car — Dammam is about 40 minutes, Khobar about 50 minutes.' : 'Taxi or ride-hailing to Dammam / Khobar (40–50 minutes).';
      case 'AHB': return car ? 'Collect your rental car — Abha city is about 20 minutes away.' : 'Taxi to Abha city (about 20 minutes).';
      case 'GIZ': return 'Taxi to Jazan city (about 15 minutes).';
      default: return 'Taxi or rental car into the city.';
    }
  }

  /* ---------------- Rendering ---------------- */
  function render(ctx) {
    const { P, data, t, esc } = ctx;
    const s = readState();
    s.fromDate = s.from ? new Date(s.from + 'T00:00:00') : null;
    s.toDate = s.to ? new Date(s.to + 'T00:00:00') : null;
    s.days = s.fromDate && s.toDate && s.toDate >= s.fromDate ? Math.min(30, Math.round((s.toDate - s.fromDate) / DAY) + 1) : 0;
    ctx.state = s;

    const opt = (v, label, cur) => `<option value="${v}" ${cur === v ? 'selected' : ''}>${esc(label)}</option>`;
    const choice = (name, v, label, icon, cur, extra = '') => `<label class="choice ${cur === v ? 'on' : ''}"><input type="radio" name="${name}" value="${v}" ${cur === v ? 'checked' : ''}><span class="choice__icon">${icon}</span><span><b>${esc(label)}</b>${extra ? `<small>${esc(extra)}</small>` : ''}</span></label>`;
    const check = (name, v, label, on) => `<label class="choice choice--sm ${on ? 'on' : ''}"><input type="checkbox" name="${name}" value="${v}" ${on ? 'checked' : ''}><span><b>${esc(label)}</b></span></label>`;
    const step = (n, title, body, done) => `<section class="pstep ${done ? 'pstep--done' : ''}"><div class="pstep__num">${n}</div><div class="pstep__body"><h3>${title}</h3>${body}</div></section>`;
    const countries = P.countries.map((c) => opt(c[0], c[1], null));
    const provs = data.regions;
    const out = [];
    let n = 1;

    out.push(step(n++, t('plan.q.origin'), `<div class="choices">
      ${choice('origin', 'outside', t('plan.outside'), '✈️', s.origin, t('plan.outsideSub'))}
      ${choice('origin', 'inside', t('plan.inside'), '🏠', s.origin, t('plan.insideSub'))}</div>`, !!s.origin));

    if (s.origin === 'outside') {
      const v = visaVerdict(P, s);
      out.push(step(n++, t('plan.q.visa'), `
        <div class="pgrid">
          <label class="field field--sel"><span>${t('plan.nationality')}</span><select name="nat"><option value="">—</option>${P.countries.map((c) => opt(c[0], c[1], s.nat)).join('')}</select></label>
          <label class="field field--sel"><span>${t('plan.residence')}</span><select name="res"><option value="">${t('plan.sameAsNat')}</option>${P.countries.map((c) => opt(c[0], c[1], s.res)).join('')}</select></label>
        </div>
        <label class="choice choice--sm ${s.visaHolder ? 'on' : ''}"><input type="checkbox" name="visaHolder" ${s.visaHolder ? 'checked' : ''}><span><b>${t('plan.visaHolder')}</b></span></label>
        ${v ? `<div class="verdict verdict--${v.level}"><b>${v.level === 'ok' ? '✅' : '⚠️'} ${esc(v.title)}</b><p>${esc(v.text)}</p>
          ${v.link ? `<a class="btn btn--sm btn--primary" href="${v.link}" target="_blank" rel="noopener">${v.level === 'ok' ? t('plan.applyEvisa') : t('plan.nusukUmrah')}</a>` : ''}
          ${v.link2 ? `<a class="btn btn--sm btn--ghost" href="${v.link2}" target="_blank" rel="noopener">${t('plan.checkPortal')}</a>` : ''}
          <small class="muted">${t('plan.visaDisclaimer')} (${esc(P.reviewed)})</small></div>` : ''}`, !!s.nat));
      if (s.nat) out.push(step(n++, t('plan.q.religion'), `<div class="choices">
        ${choice('religion', 'muslim', t('plan.muslim'), '🕋', s.religion, t('plan.muslimSub'))}
        ${choice('religion', 'other', t('plan.nonMuslim'), '🧭', s.religion, t('plan.nonMuslimSub'))}</div>`, !!s.religion));
    } else if (s.origin === 'inside') {
      out.push(step(n++, t('plan.q.current'), `<label class="field field--sel"><span>${t('plan.currentProv')}</span><select name="curProv"><option value="">—</option>${provs.map((r) => opt(r.id, r.name, s.curProv)).join('')}</select></label>`, !!s.curProv));
      if (s.curProv) out.push(step(n++, t('plan.q.dest'), `<div class="choices choices--wrap">${provs.map((r) => check('dest', r.id, r.name + ' (' + data.spots.filter((x) => x.region === r.id).length + ')', s.dest.includes(r.id))).join('')}</div><small class="muted">${t('plan.destHint')}</small>`, s.dest.length > 0));
      if (s.dest.length) out.push(step(n++, t('plan.q.religion'), `<div class="choices">
        ${choice('religion', 'muslim', t('plan.muslim'), '🕋', s.religion, t('plan.muslimSub'))}
        ${choice('religion', 'other', t('plan.nonMuslim'), '🧭', s.religion, t('plan.nonMuslimSub'))}</div>`, !!s.religion));
    }

    const ready1 = s.origin === 'outside' ? !!s.religion : (s.origin === 'inside' && s.dest.length && s.religion);
    if (ready1) {
      out.push(step(n++, t('plan.q.dates'), `<div class="pgrid">
        <label class="field field--sel"><span>${t('plan.from')}</span><input type="date" name="from" value="${esc(s.from)}" min="${new Date().toISOString().slice(0, 10)}"></label>
        <label class="field field--sel"><span>${t('plan.to')}</span><input type="date" name="to" value="${esc(s.to)}" min="${esc(s.from || new Date().toISOString().slice(0, 10))}"></label></div>
        ${s.days ? `<p class="pinfo">📅 ${s.days} ${t('plan.daysTrip')}${s.days >= 30 ? ' (' + t('plan.maxDays') + ')' : ''}</p>` : (s.from && s.to ? `<p class="pinfo pinfo--warn">${t('plan.dateError')}</p>` : '')}`, s.days > 0));
    }
    if (ready1 && s.days) {
      out.push(step(n++, t('plan.q.group'), `<div class="choices choices--4">
        ${choice('group', 'solo', t('plan.solo'), '🧍', s.group)}
        ${choice('group', 'couple', t('plan.couple'), '👫', s.group)}
        ${choice('group', 'family', t('plan.family'), '👨‍👩‍👧‍👦', s.group, t('plan.familySub'))}
        ${choice('group', 'friends', t('plan.friends'), '🧑‍🤝‍🧑', s.group)}</div>`, !!s.group));
    }
    if (ready1 && s.days && s.group) {
      if (s.origin === 'outside') {
        out.push(step(n++, t('plan.q.transport'), `<div class="choices">
          ${choice('transport', 'taxi', t('plan.taxi'), '🚕', s.transport, t('plan.taxiSub'))}
          ${choice('transport', 'train', t('plan.train'), '🚄', s.transport, t('plan.trainSub'))}
          ${choice('transport', 'car', t('plan.rentCar'), '🚗', s.transport, t('plan.rentCarSub'))}</div>
          ${s.transport === 'car' ? `<label class="choice choice--sm ${s.idp ? 'on' : ''}"><input type="checkbox" name="idp" ${s.idp ? 'checked' : ''}><span><b>${t('plan.idp')}</b></span></label>${!s.idp ? `<p class="pinfo pinfo--warn">${t('plan.idpWarn')}</p>` : ''}` : ''}`, !!s.transport));
        if (s.transport) {
          const intl = Object.entries(P.airports).filter(([, a]) => a.intl);
          const rec = s.religion === 'muslim' ? 'JED' : 'RUH';
          out.push(step(n++, t('plan.q.airport'), `<div class="choices choices--wrap">${intl.map(([code, a]) => choice('airport', code, `${code} — ${a.name}`, '🛬', s.airport, code === rec ? t('plan.recommended') : (code === 'MED' && s.religion === 'muslim' ? t('plan.medAlt') : ''))).join('')}</div>`, !!s.airport));
        }
        if (s.airport) {
          const m = s.religion === 'muslim';
          const opts = m ? [['jeddah', 'Jeddah (Al-Balad, corniche)'], ['taif', 'Taif mountains & roses'], ['alula', 'AlUla & Hegra'], ['riyadh', 'Riyadh & Diriyah'], ['eastern', 'Eastern Province (Al-Ahsa, Khobar)'], ['asir', 'Asir mountains (Abha)']]
            : (s.airport === 'RUH' ? [['riyadh_day', 'Day trips from Riyadh'], ['alula', 'AlUla & Hegra'], ['jeddah', 'Jeddah (Al-Balad, Red Sea)'], ['eastern', 'Eastern Province'], ['asir', 'Asir mountains']] : [['taif', 'Taif mountains & roses'], ['alula', 'AlUla & Hegra'], ['riyadh', 'Riyadh & Diriyah'], ['eastern', 'Eastern Province'], ['asir', 'Asir mountains']]);
          const sugg = suggestExtras(s, m);
          out.push(step(n++, t('plan.q.extras'), `<p class="muted small">${t('plan.extrasHint')} ${m ? t('plan.extrasCoreMuslim') : t('plan.extrasCoreOther')}</p><div class="choices choices--wrap">${opts.map(([k, l]) => check('extras', k, l + (sugg.includes(k) ? ' ★' : ''), s.extras.includes(k))).join('')}</div>`, true));
        }
      } else {
        out.push(step(n++, t('plan.q.car'), `<div class="choices">
          ${choice('car', 'yes', t('plan.ownCar'), '🚗', s.car, t('plan.ownCarSub'))}
          ${choice('car', 'no', t('plan.noCar'), '🚄', s.car, t('plan.noCarSub'))}</div>`, !!s.car));
      }
    }

    const ready = s.origin === 'outside' ? (ready1 && s.days && s.group && s.transport && s.airport) : (ready1 && s.days && s.group && s.car);
    let result = '';
    if (ready) {
      const blocks = buildBlocks(P, data, s);
      const days = allocate(P, data, s, blocks);
      ctx.days = days;
      result = renderResult(ctx, s, days, visaVerdict(P, s));
    }
    return `<div class="planner">${out.join('')}</div>${result}`;
  }

  function suggestExtras(s, muslim) {
    const d = s.days, x = [];
    if (muslim) { if (d >= 7) x.push('jeddah'); if (d >= 9) x.push('alula'); if (d >= 12) x.push('riyadh'); if (d >= 10) x.push('taif'); }
    else { if (s.airport === 'RUH') { if (d >= 4) x.push('riyadh_day'); if (d >= 6) x.push('alula'); if (d >= 9) x.push('jeddah'); } else { if (d >= 4) x.push('taif'); if (d >= 6) x.push('alula'); if (d >= 9) x.push('riyadh'); } }
    return x;
  }

  function renderResult(ctx, s, days, verdict) {
    const { P, data, t, esc, cover, img, icon, cid } = ctx;
    const spot = (id) => data.spots.find((x) => x.id === id);
    const fmtDate = (d) => d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
    const muslim = s.religion === 'muslim';
    const allSpots = days.flatMap((d) => d.items.filter((i) => i.type === 'spot').map((i) => spot(i.id)));
    const bookings = [];
    if (s.origin === 'outside' && verdict && verdict.level === 'ok' && s.nat !== 'SA' && !P.visa.gcc.includes(s.nat)) bookings.push({ label: 'Tourist eVisa (apply online before departure)', url: P.visa.portal });
    if (s.origin === 'outside' && verdict && verdict.level === 'warn') bookings.push({ label: muslim ? 'Umrah / visit visa via Nusuk or an authorised agent' : 'Visit visa via the Saudi embassy', url: muslim ? P.visa.nusuk : P.visa.portal });
    if (muslim && allSpots.some((x) => x.id === 'masjid-al-haram')) bookings.push({ label: 'Free Umrah permit — book a time slot in the Nusuk app', url: P.visa.nusuk });
    if (muslim && allSpots.some((x) => x.id === 'masjid-an-nabawi')) bookings.push({ label: 'Free Al-Rawdah permit (Prophet\'s Mosque) — Nusuk app', url: P.visa.nusuk });
    if (days.some((d) => d.items.some((i) => i.type === 'travel' && /Haramain/.test(i.text)))) bookings.push({ label: 'Haramain High Speed Railway tickets (book ahead on busy days)', url: 'https://sar.hhr.sa' });
    if (days.some((d) => d.items.some((i) => i.type === 'travel' && /SAR /.test(i.text)))) bookings.push({ label: 'SAR train tickets', url: 'https://www.sar.com.sa' });
    allSpots.forEach((x) => { if (x.tickets && (x.tickets.required === true || x.tickets.required === 'partial') && x.tickets.links && x.tickets.links[0] && !/nusuk\.sa/.test(x.tickets.links[0].url) && !bookings.some((b) => b.url === x.tickets.links[0].url && b.label.includes(x.name.split('(')[0].trim()))) bookings.push({ label: `${x.name.split(' — ')[0]} — ${x.tickets.required === true ? 'advance booking required' : 'some parts need booking'}`, url: x.tickets.links[0].url, spot: x.id }); });

    const docs = [];
    if (s.origin === 'outside') { docs.push('Passport valid for at least 6 months'); docs.push(verdict && verdict.level === 'ok' ? 'Printed / saved eVisa or visa-on-arrival eligibility proof' : 'Visa stamped in passport'); if (s.res && s.res !== s.nat) docs.push('Residence permit of your country of residence'); if (s.visaHolder) docs.push('Passport with the valid US / UK / Schengen visa'); docs.push('Travel insurance (included with the eVisa fee)'); if (s.transport === 'car') docs.push('National driving licence + International Driving Permit'); docs.push('Hotel booking confirmations'); }
    else { docs.push('National ID / Iqama'); if (s.car === 'yes') docs.push('Driving licence, vehicle registration and insurance'); }
    if (muslim) docs.push('Nusuk app installed and account created', 'Ihram clothing (men) / loose modest clothing (women)');
    if (s.group === 'family') docs.push('Children\'s passports / IDs, stroller, snacks and sun protection');

    const dayHtml = days.map((d) => `
      <article class="pday reveal">
        <header class="pday__head"><span class="pday__n">${t('plan.day')} ${d.n}</span><b>${fmtDate(d.date)}</b><span class="pday__city">${icon.pin} ${esc(d.city)}</span>${d.note === 'arrival' ? `<span class="badge">${t('plan.arrival')}</span>` : d.note === 'travel' ? `<span class="badge">${t('plan.travelDay')}</span>` : d.note === 'free' ? `<span class="badge">${t('plan.freeDay')}</span>` : ''}</header>
        <ol class="pday__items">${d.items.map((it) => {
          if (it.type === 'spot') {
            const x = spot(it.id); const r = data.regions.find((z) => z.id === x.region) || {};
            const tk = x.tickets || {}; const cls = tk.required === true ? 'warn' : tk.required === 'partial' ? 'info' : 'ok';
            return `<li class="pitem"><a href="#/c/${cid}/spot/${x.id}" class="pitem__thumb">${img(cover(cid, x.id), x.name, '', '', 330)}</a>
              <div class="pitem__body"><a href="#/c/${cid}/spot/${x.id}"><b>${esc(x.name)}</b></a><small>${esc(x.city)} · ${esc(r.name || '')}${x.muslimsOnly ? ' · ☪️ ' + t('common.muslimsOnly') : ''}${x.status === 'check' ? ' · ⚠️ ' + t('common.checkStatus') : ''}</small>
              <div class="pitem__meta"><span>${icon.clock} ${esc((x.hours && x.hours.summary) || '')}</span><span class="pill pill--${cls}">${icon.ticket} ${tk.required === true ? t('common.required') : tk.required === 'partial' ? t('common.partly') : t('common.notRequired')}${tk.price ? ' · ' + esc(tk.price.split('(')[0].trim().slice(0, 40)) : ''}</span>${tk.links && tk.links[0] && tk.required ? `<a class="link" href="${esc(tk.links[0].url)}" target="_blank" rel="noopener">${t('common.bookNow')} ${icon.ext}</a>` : ''}</div>
              ${x.duration ? `<small class="muted">⏱ ${esc(x.duration)}</small>` : ''}</div></li>`;
          }
          return `<li class="pitem pitem--${it.type}"><span class="pitem__icon">${it.type === 'free' ? '🌴' : '🧭'}</span><div><p>${esc(it.text)}</p>${it.url ? `<a class="link" href="${esc(it.url)}" target="_blank" rel="noopener">${t('plan.bookTransport')} ${icon.ext}</a>` : ''}${it.alt && it.alt.length ? `<small class="muted">${t('plan.alternatives')}: ${it.alt.map(esc).join(' · ')}</small>` : ''}</div></li>`;
        }).join('')}</ol>
      </article>`).join('');

    const tips = [];
    if (muslim && s.origin === 'outside') tips.push(t('plan.tip.umrahFirst'));
    if (!muslim) tips.push(t('plan.tip.nonMuslim'));
    if (s.group === 'family') tips.push(t('plan.tip.family'));
    if (s.transport === 'car' && s.idp) tips.push(t('plan.tip.rentCar'));
    if (s.transport === 'taxi') tips.push(t('plan.tip.taxi'));
    if (s.origin === 'inside' && s.car === 'no') tips.push(t('plan.tip.noCar'));
    tips.push(t('plan.tip.prayer'), t('plan.tip.weather'));

    return `
      <section class="presult" id="planResult">
        <div class="presult__head reveal">
          <div><span class="eyebrow">${t('plan.yourPlan')}</span><h2>${s.days} ${t('plan.daysIn')} ${esc(data.name)}</h2>
            <p class="muted">${fmtDate(s.fromDate)} → ${fmtDate(s.toDate)} · ${t('plan.' + s.group)} · ${allSpots.length} ${t('common.spots')}</p></div>
          <div class="btn-row"><button class="btn btn--ghost btn--sm" data-plan-copy>${icon.share} ${t('common.copyLink')}</button><button class="btn btn--primary btn--sm" data-plan-print>🖨️ ${t('plan.print')}</button></div>
        </div>
        <div class="presult__grid">
          <div class="presult__days">${dayHtml}</div>
          <aside class="presult__side">
            ${verdict ? `<div class="glass-card verdict verdict--${verdict.level}"><h3>${t('plan.visaStatus')}</h3><b>${verdict.level === 'ok' ? '✅' : '⚠️'} ${esc(verdict.title)}</b></div>` : ''}
            <div class="glass-card"><h3>📋 ${t('plan.bookings')}</h3>${bookings.length ? `<ul class="plist">${bookings.map((b) => `<li><a href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.label)} ${icon.ext}</a></li>`).join('')}</ul>` : `<p class="muted">${t('plan.noBookings')}</p>`}</div>
            <div class="glass-card"><h3>🧳 ${t('plan.documents')}</h3><ul class="plist plist--check">${docs.map((d) => `<li>${esc(d)}</li>`).join('')}</ul></div>
            <div class="glass-card"><h3>💡 ${t('plan.tips')}</h3><ul class="plist">${tips.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
            <p class="note">⚠️ ${esc(t('common.disclaimer'))}</p>
          </aside>
        </div>
      </section>`;
  }

  function bind(ctx, root) {
    const s = ctx.state;
    const rerender = () => { writeState(s); root.innerHTML = render(ctx); bind(ctx, root); if (ctx.onRender) ctx.onRender(); };
    root.querySelectorAll('input[type=radio]').forEach((el) => el.addEventListener('change', () => {
      const k = el.name; s[k] = el.value;
      if (k === 'origin') { s.religion = s.group = s.transport = s.airport = s.car = ''; s.extras = []; s.dest = []; }
      if (k === 'religion' && s.origin === 'outside') { s.airport = ''; s.extras = []; }
      if (k === 'airport') s.extras = suggestExtras(s, s.religion === 'muslim');
      const keepY = scrollY; rerender(); scrollTo(0, keepY);
      if (k !== 'origin') { const r = document.getElementById('planResult'); if (r) setTimeout(() => r.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }
    }));
    root.querySelectorAll('select, input[type=date]').forEach((el) => el.addEventListener('change', () => {
      s[el.name] = el.value;
      if (el.name === 'from' && s.to && s.to < s.from) s.to = '';
      const keepY = scrollY; rerender(); scrollTo(0, keepY);
    }));
    root.querySelectorAll('input[type=checkbox]').forEach((el) => el.addEventListener('change', () => {
      if (el.name === 'visaHolder' || el.name === 'idp') s[el.name] = el.checked;
      else { const arr = s[el.name]; const i = arr.indexOf(el.value); if (el.checked && i < 0) arr.push(el.value); if (!el.checked && i >= 0) arr.splice(i, 1); }
      const keepY = scrollY; rerender(); scrollTo(0, keepY);
    }));
    const copy = root.querySelector('[data-plan-copy]');
    if (copy) copy.addEventListener('click', () => { const u = location.href; (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.resolve()).then(() => ctx.toast(ctx.t('common.copied'))); });
    const pr = root.querySelector('[data-plan-print]');
    if (pr) pr.addEventListener('click', () => window.print());
  }

  window.TG_PLANNER = { render, bind };
})();
