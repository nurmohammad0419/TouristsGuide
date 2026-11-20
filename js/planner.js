/* TouristsGuide — Tour Planner
 * A step-by-step wizard that turns the country's spot data into a day-by-day itinerary.
 * Loaded by app.js; data comes from data/<country>/plan.js (TG.registerPlanner).
 */
(function () {
  'use strict';

  const DAY = 86400000;
  // Country-specific settings all come from data/<country>/plan.js; these are the fallbacks.
  const strenuousSet = (P) => new Set(P.strenuous || []);
  const faithOf = (P) => P.faith || null;            // null = no religion step for this country
  const money = (P) => (P.currency || 'SAR');
  // The booking partner is only used while plan.js has it switched on.
  const partnerOf = (P) => (P.partner && P.partner.enabled !== false && P.partner.name ? P.partner : null);
  const rlabel = (d, plural) => (plural ? (d && d.regionLabelPlural) || 'Provinces' : (d && d.regionLabel) || 'Province');
  const PACE = { solo: 3, couple: 3, family: 2, friends: 3 };
  const STYLE_ADJ = { relaxed: -1, balanced: 0, packed: 1 };
  const paceFor = (s) => Math.max(1, Math.min(4, (PACE[s.group] || 3) + (STYLE_ADJ[s.style] || 0)));

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
      transport: p.get('tr') || '', idp: p.get('idp') === '1', airport: p.get('a') || '', style: p.get('st') || '', ex: (p.get('ex') || '').split(',').filter(Boolean), bl: p.get('bl') || '', fr: p.get('fr') || '', ppl: p.get('ppl') || '', ord: (p.get('ord') || '').split(',').filter(Boolean),
      mv: Object.fromEntries((p.get('mv') || '').split(',').filter(Boolean).map((x) => { const i = x.lastIndexOf(':'); return [x.slice(0, i), parseInt(x.slice(i + 1), 10)]; })), ad: (p.get('ad') || '').split(',').filter(Boolean),
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
    put('a', s.airport); put('st', s.style); put('ex', s.ex.join(',')); put('bl', s.bl); put('fr', s.fr); put('ppl', s.ppl); put('ord', s.ord.join(',')); put('mv', Object.entries(s.mv).map(([k, v]) => k + ':' + v).join(',')); put('ad', s.ad.join(',')); put('x', s.extras.join(',')); put('cp', s.curProv); put('dp', s.dest.join(',')); put('car', s.car);
    const base = location.hash.split('?')[0];
    history.replaceState(null, '', base + '?' + p.toString());
  }

  /* ---------------- Visa logic ---------------- */
  // Does the traveller hold the document a conditional e-Visa requires?
  // Either a residence permit from a qualifying country, or they ticked the box.
  function holdsQualifyingDoc(P, s) {
    const q = (P.visa || {}).qualifyingDocs || {};
    if (s.visaHolder) return true;
    return !!s.res && (q.countries || []).includes(s.res);
  }

  // Ordered rules from data/<country>/plan.js; the first whose `match` contains the
  // nationality wins ('*' is the catch-all). Conditional rules resolve to a clear
  // yes or no rather than a vague "you may be eligible".
  function visaVerdict(P, s) {
    const V = P.visa;
    if (!s.nat || !V) return null;
    const q = V.qualifyingDocs || {};
    const rules = V.rules || [];
    const hit = rules.find((r) => r.match === '*' || (r.match || []).includes(s.nat));
    if (!hit) return null;
    const base = { kind: hit.kind, link: hit.link || V.portal, nusukLink: (P.faith || {}).permitUrl, docLabel: q.label };
    if (hit.kind === 'cond') {
      const met = holdsQualifyingDoc(P, s);
      const how = s.visaHolder ? (q.viaVisa || 'the visa you ticked above')
        : (s.res ? (q.viaResidence || 'your residence permit') : '');
      return met
        ? { ...base, level: 'ok', met: true, title: hit.titleOk || hit.title,
            text: (hit.textOk || hit.text || '').replace('{how}', how).replace('{doc}', q.label || '') }
        : { ...base, level: 'warn', met: false, title: hit.titleNo || hit.title,
            text: (hit.textNo || hit.text || '').replace('{doc}', q.label || ''),
            link: hit.linkNo || V.embassyFinder || V.portal };
    }
    return { ...base, level: hit.level || (hit.kind === 'embassy' ? 'warn' : 'ok'), title: hit.title, text: hit.text };
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
    const bus = P.bus || { label: 'Intercity bus' };
    modes.push({ type: 'bus', label: `${bus.label} ${ha.city} → ${hb.city}`, url: bus.url });
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
    const F = faithOf(P);
    const muslim = !!F && s.religion === 'muslim';
    const hard = strenuousSet(P);
    const clusters = P.clusters;
    const ok = (id) => {
      const sp = data.spots.find((x) => x.id === id);
      if (!sp) return false;
      if (!muslim && sp.muslimsOnly) return false;
      if (s.group === 'family' && hard.has(id)) return false;
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
      const T = P.tour || { core: {}, extras: [] };
      const chosen = new Set(s.extras);
      // Faith-first routing (pilgrimage countries): the sacred-city clusters lead the trip
      if (muslim && F.route) {
        const flip = (F.route.startWhenAirport || []).includes(s.airport);
        const a = F.route.a.map(([k, p]) => block(k, p));
        const bq = F.route.b.map(([k, p]) => block(k, p));
        seq = flip ? [...bq, ...a] : [...a, ...bq];
        (F.route.insert || []).forEach((ins) => {
          if (chosen.has(ins.id)) seq.splice(flip ? seq.length : (ins.at || seq.length), 0, block(ins.cluster[0], ins.cluster[1]));
        });
      } else {
        const core = T.core[s.airport] || T.core['*'] || [];
        seq = core.map(([k, p]) => block(k, p));
      }
      // Optional regions the traveller ticked, in the order plan.js lists them
      (T.extras || []).forEach((x) => {
        if (!chosen.has(x.id)) return;
        if (muslim && F && F.route && (F.route.insert || []).some((i) => i.id === x.id)) return; // already placed
        x.clusters.forEach(([k, p]) => seq.push(block(k, p)));
      });
    } else {
      s.dest.forEach((prov) => (P.provinceClusters[prov] || []).forEach((k) => seq.push(block(k, prov))));
    }
    let result = seq.filter(Boolean).map((b) => ({ ...b, spots: b.spots.slice() }));
    const ex = new Set(s.ex);
    result.forEach((b) => { b.spots = b.spots.filter((id) => !ex.has(id)); });
    result = result.filter((b) => b.spots.length);
    // Spots the traveller added manually
    s.ad.forEach((id) => {
      if (ex.has(id) || !ok(id)) return;
      if (result.some((b) => b.spots.includes(id))) return;
      const key = Object.keys(clusters).find((k) => clusters[k].spots.includes(id) && !(clusters[k].muslimsOnly && !muslim));
      if (!key) return;
      const prov = Object.keys(P.provinceClusters).find((p) => P.provinceClusters[p].includes(key)) || (data.spots.find((x) => x.id === id) || {}).region;
      const same = result.find((b) => b.key === key);
      if (same) { same.spots.push(id); return; }
      let at = -1; result.forEach((b, i) => { if (b.prov === prov) at = i; });
      const nb = { key, title: clusters[key].title, city: clusters[key].city, prov, spots: [id] };
      if (at >= 0) result.splice(at + 1, 0, nb); else result.push(nb);
    });
    return result;
  }

  // Simulate the itinerary; if it does not fit the trip, trim one spot (longest / most optional cluster first) and retry
  function allocate(P, data, s, blocks) {
    blocks = blocks.map((b) => ({ ...b, spots: b.spots.slice() }));
    const minLen = (b) => ((P.clusters[b.key] || {}).minSpots ?? 2);
    const want = () => blocks.reduce((n, b) => n + b.spots.length, 0);
    const trimmed = [];
    const pins = new Set(s.ad);
    let guard = 400, res;
    while (guard--) {
      res = allocateRaw(P, data, s, blocks);
      if (res.placed >= want()) break;
      let best = -1, bestScore = -1;
      blocks.forEach((b, i) => { if (b.spots.some((id) => !pins.has(id)) && b.spots.length > minLen(b)) { const sc = b.spots.length + i * 0.6; if (sc > bestScore) { bestScore = sc; best = i; } } });
      if (best < 0) {
        if (blocks.length <= 1) break;
        let drop = -1; blocks.forEach((b, i) => { if (!b.spots.some((id) => pins.has(id))) drop = i; });
        blocks.splice(drop >= 0 ? drop : blocks.length - 1, 1); continue;
      }
      const bl = blocks[best]; let k = bl.spots.length - 1; while (k >= 0 && pins.has(bl.spots[k])) k--;
      trimmed.push({ b: bl, id: bl.spots.splice(k, 1)[0] });
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
    const pace = paceFor(s);
    const days = [];
    const total = s.days;
    let placed = 0;
    const newDay = (city, prov, note) => { const d = { n: days.length + 1, date: new Date(s.fromDate.getTime() + days.length * DAY), city, prov, items: [], note }; days.push(d); return d; };
    const isDayTrip = (b) => !!(P.clusters[b.key] && P.clusters[b.key].dayTrip);
    const firstProv = blocks[0] ? blocks[0].prov : (s.dest[0] || 'riyadh');
    let cur = null;
    if (s.origin === 'outside') {
      const ap = P.airports[s.airport] || Object.values(P.airports)[0] || { name: 'the airport' };
      cur = newDay(blocks[0] ? blocks[0].city : P.hubs[firstProv].city, firstProv, 'arrival');
      cur.items.push({ type: 'travel', text: `Arrive at ${ap.name} (${s.airport}). ${airportTransfer(P, s)}` });
      cur.capacity = 1;
    } else {
      const from = s.curProv, to = firstProv;
      cur = newDay(blocks[0] ? blocks[0].city : P.hubs[to].city, to, 'arrival');
      if (from !== to) {
        const c = corridor(P, from, to);
        const modes = pickTransport(c, s);
        cur.items.push({ type: 'travel', text: `Travel from ${P.hubs[from].city} to ${P.hubs[to].city}: ${modes[0].label}.`, alt: modes.slice(1, 3).map((m) => m.label), url: modes[0].url, flight: modes[0].type === 'flight' ? { from: P.hubs[from].airport, to: P.hubs[to].airport } : null });
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
        const FR = faithOf(P);
        const ihramNote = (s.umrah && FR && FR.ihramNote && b.key === FR.ritualCluster && lastProv === FR.ihramFromProv) ? ' ' + FR.ihramNote : '';
        cur.items.push({ type: 'travel', text: `Travel from ${P.hubs[lastProv].city} area to ${b.city}: ${modes[0].label}.${ihramNote}`, alt: modes.slice(1, 3).map((m) => m.label), url: modes[0].url, flight: modes[0].type === 'flight' ? { from: P.hubs[lastProv].airport, to: P.hubs[b.prov].airport } : null });
        cur.capacity = c.driveH >= 4 ? 1 : Math.max(1, pace - 1);
      } else if (b.city !== lastCity) {
        const dKm = cityDistance(data, lastCity, b.city);
        if (cur.items.some((i) => i.type === 'spot')) { if (days.length >= total) break; cur = newDay(b.city, b.prov, dKm > 150 ? 'travel' : undefined); cur.capacity = dKm > 150 ? Math.max(1, pace - 1) : pace; }
        else cur.city = b.city;
        if (dKm > 150) cur.items.push({ type: 'travel', text: `Transfer ${lastCity} → ${b.city}: about ${Math.round(dKm)} km (${Math.round((dKm / 90 + 0.5) * 2) / 2} h by road${(P.cityFlightHint || {})[b.city] ? '; ' + P.cityFlightHint[b.city] : ''}).` });
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

  // Apply the traveller's manual moves: a spot pinned to another day, and a custom order inside a day
  function applyEdits(days, s) {
    const hasSpot = (d) => d.items.some((i) => i.type === 'spot');
    Object.entries(s.mv).forEach(([id, n]) => {
      const src = days.find((d) => d.items.some((i) => i.type === 'spot' && i.id === id));
      const dst = days[n - 1];
      if (!src || !dst || src === dst) return;
      const item = src.items.splice(src.items.findIndex((i) => i.type === 'spot' && i.id === id), 1)[0];
      dst.items = dst.items.filter((i) => i.type !== 'free');
      if (dst.note === 'free') { dst.note = undefined; }
      let at = -1; dst.items.forEach((i, k) => { if (i.type === 'spot') at = k; });
      if (at < 0) { dst.items.forEach((i, k) => { if (i.type === 'travel' && k === 0) at = k; }); }
      dst.items.splice(at + 1, 0, item);
      if (!hasSpot(src) && !src.items.some((i) => i.type === 'free') && src.note !== 'arrival' && src.note !== 'travel') { src.items.unshift({ type: 'free', text: 'Free day — rest, shopping, or repeat a favourite spot.' }); src.note = 'free'; }
    });
    if (s.ord.length) days.forEach((d) => {
      const idx = []; d.items.forEach((i, k) => { if (i.type === 'spot') idx.push(k); });
      const spots = idx.map((k) => d.items[k]);
      if (spots.length < 2 || !spots.every((x) => s.ord.includes(x.id))) return;
      spots.sort((a, b) => s.ord.indexOf(a.id) - s.ord.indexOf(b.id));
      idx.forEach((k, j) => { d.items[k] = spots[j]; });
    });
    return days;
  }

  /* ---------------- Budget & lodging ---------------- */
  // Fill {tokens} in a partner URL template and drop empty query parameters
  function fillUrl(tpl, vars) {
    const u = String(tpl || '').replace(/\{(\w+)\}/g, (m, k) => encodeURIComponent(vars[k] == null ? '' : vars[k]));
    return u.replace(/([?&])[^=&]+=(?=&|$)/g, '$1').replace(/\?&+/g, '?').replace(/&&+/g, '&').replace(/[?&]$/, '');
  }
  const ymd = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  // Default departure airport: first airport in the traveller's country of residence (or nationality)
  function defFrom(P, s) {
    const list = (partnerOf(P) || {}).airports || [];
    const hit = list.find((a) => a[2] === (s.res || s.nat)) || list.find((a) => a[2] === s.nat);
    return hit ? hit[0] : '';
  }
  function fromCode(P, s) { return s.fr || defFrom(P, s); }
  function airportOk(P, code) { return !!code && (((partnerOf(P) || {}).airports) || []).some((a) => a[0] === code); }
  function people(s) { return Math.max(1, Math.min(12, parseInt(s.ppl, 10) || ({ solo: 1, couple: 2, family: 4, friends: 3 }[s.group] || 2))); }
  function tierIdx(s) { return { eco: 0, comfort: 1, lux: 2 }[s.bl || 'comfort']; }
  function lodgingRate(P, city, tier) { const L = P.costs.lodging; return (L[city] || L.default)[tier]; }
  function stays(P, s, days) {
    // consecutive nights per city (the last day has no night)
    const out = [];
    days.slice(0, -1).forEach((d) => {
      const last = out[out.length - 1];
      if (last && last.city === d.city) last.nights++; else out.push({ city: d.city, prov: d.prov, nights: 1, from: d.date });
    });
    const ppl = people(s);
    const rooms = s.group === 'family' ? Math.ceil(ppl / 4) : Math.ceil(ppl / 2);
    out.forEach((st) => { st.rooms = rooms; const r = lodgingRate(P, st.city, tierIdx(s)); st.lo = r[0] * st.nights * rooms; st.hi = r[1] * st.nights * rooms; st.rate = r; st.to = new Date(st.from.getTime() + st.nights * DAY); });
    return out;
  }
  function budget(P, data, s, days, stayList) {
    const C = P.costs, ti = tierIdx(s), ppl = people(s), rows = [];
    const add = (label, lo, hi, note) => rows.push({ label, lo: Math.round(lo), hi: Math.round(hi), note });
    add('Accommodation', stayList.reduce((a, x) => a + x.lo, 0), stayList.reduce((a, x) => a + x.hi, 0), `${stayList.reduce((a, x) => a + x.nights, 0)} nights · ${stayList[0] ? stayList[0].rooms : 1} room(s)`);
    add('Food & drinks', C.food[ti][0] * ppl * s.days, C.food[ti][1] * ppl * s.days, `${ppl} traveller(s) × ${s.days} days`);
    // intercity legs (city to city; same-province hops over 40 km count too)
    const seq = []; if (s.origin === 'inside' && s.curProv && P.hubs[s.curProv]) seq.push({ city: P.hubs[s.curProv].city, prov: s.curProv, home: true });
    days.forEach((d) => { if (!seq.length || seq[seq.length - 1].city !== d.city) seq.push({ city: d.city, prov: d.prov }); });
    if (s.origin === 'inside' && s.curProv && P.hubs[s.curProv]) seq.push({ city: P.hubs[s.curProv].city, prov: s.curProv, home: true });
    const ownCar = s.origin === 'inside' ? s.car === 'yes' : (s.transport === 'car' && s.idp);
    let lo = 0, hi = 0, n = 0, km = 0;
    for (let i = 0; i < seq.length - 1; i++) {
      const A = seq[i], B = seq[i + 1];
      if (A.prov !== B.prov && P.hubs[A.prov] && P.hubs[B.prov]) {
        const cor = corridor(P, A.prov, B.prov); const m = pickTransport(cor, s)[0]; n++;
        if (m.type === 'drive') km += cor.km; else { const r = C.legs[m.type] || C.legs.bus; lo += r[0] * ppl; hi += r[1] * ppl; }
      } else if (A.prov === B.prov && A.city !== B.city) {
        const dKm = cityDistance(data, A.city, B.city) * 1.25;
        if (dKm > 40) { km += dKm; n++; }
      }
    }
    const fuelLo = km * C.fuelPerKm[0], fuelHi = km * C.fuelPerKm[1];
    if (n) add('Travel between cities', lo + (ownCar ? fuelLo : km * 0.9), hi + (ownCar ? fuelHi : km * 1.6), `${n} transfer(s) between cities — ${ownCar ? 'own car / ' : ''}train, flight, bus or taxi`);
    // local transport
    if (ownCar) add('Car hire & fuel in cities', s.origin === 'outside' ? C.rentalPerDay[ti][0] * s.days : 40 * s.days, s.origin === 'outside' ? C.rentalPerDay[ti][1] * s.days : 110 * s.days, s.origin === 'outside' ? 'Rental car (IDP needed) + fuel' : 'Fuel & parking');
    else add('Taxis & ride-hailing', C.taxiPerDay[0] * s.days * Math.ceil(ppl / 4), C.taxiPerDay[1] * s.days * Math.ceil(ppl / 4), P.rideHailing || 'Taxis and ride-hailing apps');
    // tickets
    const sp = days.flatMap((d) => d.items.filter((i) => i.type === 'spot').map((i) => data.spots.find((x) => x.id === i.id))).filter(Boolean);
    const req = sp.filter((x) => x.tickets && x.tickets.required === true).length, par = sp.filter((x) => x.tickets && x.tickets.required === 'partial').length;
    add('Tickets & activities', (req * C.tickets.required[0] + par * C.tickets.partial[0]) * ppl, (req * C.tickets.required[1] + par * C.tickets.partial[1]) * ppl, `${req} ticketed + ${par} partly ticketed spots`);
    const totLo = rows.reduce((a, r) => a + r.lo, 0), totHi = rows.reduce((a, r) => a + r.hi, 0);
    return { rows, totLo, totHi, ppl };
  }

  function cityDistance(data, a, b) {
    const ca = data.spots.find((x) => x.city === a), cb = data.spots.find((x) => x.city === b);
    return ca && cb ? haversine(ca.coords, cb.coords) : 0;
  }

  // Arrival advice per airport, from plan.js: { car, public, pilgrim? } or a plain string.
  function airportTransfer(P, s) {
    const car = s.transport === 'car' && s.idp;
    const a = (P.arrival || {})[s.airport];
    if (!a) return car ? 'Collect your rental car at the airport.' : 'Taxi, airport bus or rail into the city.';
    if (typeof a === 'string') return a;
    if (s.umrah && a.pilgrim) return car ? (a.pilgrimCar || a.pilgrim) : a.pilgrim;
    return (car ? a.car : a.public) || a.public || a.car || '';
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
    let doneCount = 0;
    const step = (n, title, body, done) => { if (done) doneCount++; return `<section class="pstep ${done ? 'pstep--done' : ''}"><div class="pstep__num">${done ? '✓' : n}</div><div class="pstep__body"><h3>${title}</h3>${body}</div></section>`; };
    const countries = P.countries.map((c) => opt(c[0], c[1], null));
    const provs = data.regions;
    const out = [];
    let n = 1;

    out.push(step(n++, t('plan.q.origin'), `<div class="choices">
      ${choice('origin', 'outside', t('plan.outside', { country: data.name }), '✈️', s.origin, t('plan.outsideSub'))}
      ${choice('origin', 'inside', t('plan.inside', { country: data.name }), '🏠', s.origin, t('plan.insideSub', { region: rlabel(data).toLowerCase() }))}</div>`, !!s.origin));

    if (s.origin === 'outside') {
      const v = visaVerdict(P, s);
      out.push(step(n++, t('plan.q.visa'), `
        <div class="pgrid">
          <label class="field field--sel"><span>${t('plan.nationality')}</span><select name="nat"><option value="">—</option>${P.countries.map((c) => opt(c[0], c[1], s.nat)).join('')}</select></label>
          <label class="field field--sel"><span>${t('plan.residence')}</span><select name="res"><option value="">${t('plan.sameAsNat')}</option>${P.countries.map((c) => opt(c[0], c[1], s.res)).join('')}</select></label>
        </div>
        ${((P.visa || {}).qualifyingDocs || {}).label ? `<label class="choice choice--sm ${s.visaHolder ? 'on' : ''}"><input type="checkbox" name="visaHolder" ${s.visaHolder ? 'checked' : ''}><span><b>${esc(t('plan.visaHolderHave', { doc: P.visa.qualifyingDocs.label }))}</b></span></label>` : ''}
        ${v ? `<div class="verdict verdict--${v.level}"><b>${v.level === 'ok' ? '✅' : '⚠️'} ${esc(v.title)}</b><p>${esc(v.text)}</p>
          ${v.link ? `<a class="btn btn--sm btn--primary" href="${v.link}" target="_blank" rel="noopener">${v.kind === 'exempt' ? t('plan.checkPortal') : v.level === 'ok' ? t('plan.applyEvisa') : t('plan.checkPortal')}</a>` : ''}
          ${v.nusukLink && s.religion === 'muslim' ? `<a class="btn btn--sm btn--ghost" href="${v.nusukLink}" target="_blank" rel="noopener">${esc((faithOf(P) || {}).permitLabel || t('plan.nusukUmrah'))}</a>` : ''}
          <small class="muted">${t('plan.visaDisclaimer')} (${esc(P.reviewed)}${(P.visa || {}).source ? ' · ' + esc(P.visa.source) : ''})</small></div>` : ''}`, !!s.nat));
      if (s.nat && faithOf(P)) out.push(step(n++, t('plan.q.religion'), `<div class="choices">
        ${choice('religion', 'muslim', t('plan.muslim'), '🕋', s.religion, esc((faithOf(P) || {}).muslimSub || ''))}
        ${choice('religion', 'other', t('plan.nonMuslim'), '🧭', s.religion, esc((faithOf(P) || {}).nonMuslimSub || ''))}</div>`, !!s.religion));
    } else if (s.origin === 'inside') {
      out.push(step(n++, t('plan.q.current'), `<label class="field field--sel"><span>${t('plan.currentProv')}</span><select name="curProv"><option value="">—</option>${provs.map((r) => opt(r.id, r.name, s.curProv)).join('')}</select></label>`, !!s.curProv));
      if (s.curProv) out.push(step(n++, t('plan.q.dest'), `<div class="choices choices--wrap">${provs.map((r) => check('dest', r.id, r.name + ' (' + data.spots.filter((x) => x.region === r.id).length + ')', s.dest.includes(r.id))).join('')}</div><small class="muted">${t('plan.destHint', { regions: rlabel(data, true).toLowerCase() })}</small>`, s.dest.length > 0));
      if (s.dest.length && faithOf(P)) out.push(step(n++, t('plan.q.religion'), `<div class="choices">
        ${choice('religion', 'muslim', t('plan.muslim'), '🕋', s.religion, esc((faithOf(P) || {}).muslimSub || ''))}
        ${choice('religion', 'other', t('plan.nonMuslim'), '🧭', s.religion, esc((faithOf(P) || {}).nonMuslimSub || ''))}</div>`, !!s.religion));
    }

    const needFaith = !!faithOf(P);
    const ready1 = s.origin === 'outside' ? (!!s.nat && (!needFaith || !!s.religion)) : (s.origin === 'inside' && s.dest.length && (!needFaith || !!s.religion));
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
      out.push(step(n++, t('plan.q.style'), `<div class="choices">
        ${choice('style', 'relaxed', t('plan.relaxed'), '🌿', s.style, t('plan.relaxedSub'))}
        ${choice('style', 'balanced', t('plan.balanced'), '⚖️', s.style, t('plan.balancedSub'))}
        ${choice('style', 'packed', t('plan.packed'), '⚡', s.style, t('plan.packedSub'))}</div>`, !!s.style));
    }
    if (ready1 && s.days && s.group && s.style) {
      const bl = s.bl || 'comfort';
      out.push(step(n++, t('plan.q.budget'), `<div class="choices">
        ${choice('bl', 'eco', t('plan.eco'), '🎒', bl, t('plan.ecoSub'))}
        ${choice('bl', 'comfort', t('plan.comfort'), '🛏️', bl, t('plan.comfortSub'))}
        ${choice('bl', 'lux', t('plan.lux'), '💎', bl, t('plan.luxSub'))}</div>
        <label class="field field--sel field--narrow"><span>${t('plan.travellers')}</span><input type="number" name="ppl" min="1" max="12" value="${people(s)}"></label>`, true));
    }
    if (ready1 && s.days && s.group && s.style) {
      if (s.origin === 'outside') {
        const TS = P.transportSub || {};
        out.push(step(n++, t('plan.q.transport'), `<div class="choices">
          ${choice('transport', 'taxi', t('plan.taxi'), '🚕', s.transport, esc(TS.taxi || ''))}
          ${choice('transport', 'train', t('plan.train'), '🚄', s.transport, esc(TS.train || ''))}
          ${choice('transport', 'car', t('plan.rentCar'), '🚗', s.transport, esc(TS.car || ''))}</div>
          ${s.transport === 'car' ? `<label class="choice choice--sm ${s.idp ? 'on' : ''}"><input type="checkbox" name="idp" ${s.idp ? 'checked' : ''}><span><b>${t('plan.idp')}</b></span></label>${!s.idp ? `<p class="pinfo pinfo--warn">${t('plan.idpWarn')}</p>` : ''}` : ''}`, !!s.transport));
        if (s.transport) {
          const intl = Object.entries(P.airports).filter(([, a]) => a.intl);
          const F = faithOf(P);
          const rec = (F && s.religion === 'muslim' && F.recommendAirport) || P.defaultAirport || (intl[0] || [])[0];
          const alt = F && s.religion === 'muslim' ? F.altAirport : '';
          out.push(step(n++, t('plan.q.airport'), `<div class="choices choices--wrap">${intl.map(([code, a]) => choice('airport', code, `${code} — ${a.name}`, '🛬', s.airport, code === rec ? t('plan.recommended') : (code === alt ? esc(F.altAirportNote || '') : ''))).join('')}</div>`, !!s.airport));
        }
        if (s.airport && partnerOf(P) && partnerOf(P).flights) {
          const cur = fromCode(P, s);
          const names = Object.fromEntries(P.countries);
          const sorted = partnerOf(P).airports.filter((a) => a[2] !== P.country).slice().sort((a, b) => (names[a[2]] || a[2]).localeCompare(names[b[2]] || b[2]) || a[1].localeCompare(b[1]));
          out.push(step(n++, t('plan.q.from'), `<label class="field field--sel"><span>${t('plan.flyingFrom')}</span><select name="fr">${sorted.map((a) => opt(a[0], `${a[1]} (${a[0]}) — ${names[a[2]] || a[2]}`, cur)).join('')}</select></label><p class="muted small">${t('plan.flyingFromHint')}</p>`, true));
        }
      if (s.airport) {
          const F = faithOf(P), m = !!F && s.religion === 'muslim';
          const opts = (P.tour && P.tour.extras || []).filter((x) => !x.airports || x.airports.includes(s.airport));
          const sugg = suggestExtras(P, s, m);
          const core = m && F && F.extrasCoreNote ? F.extrasCoreNote : ((P.tour && P.tour.coreNote) || '');
          if (opts.length) out.push(step(n++, t('plan.q.extras'), `<p class="muted small">${t('plan.extrasHint')} ${esc(core)}</p><div class="choices choices--wrap">${opts.map((x) => check('extras', x.id, esc(x.label) + (sugg.includes(x.id) ? ' ★' : ''), s.extras.includes(x.id))).join('')}</div>`, true));
        }
      } else {
        out.push(step(n++, t('plan.q.car'), `<div class="choices">
          ${choice('car', 'yes', t('plan.ownCar'), '🚗', s.car, t('plan.ownCarSub'))}
          ${choice('car', 'no', t('plan.noCar'), '🚄', s.car, t('plan.noCarSub'))}</div>`, !!s.car));
      }
    }

    const ready = s.origin === 'outside' ? (ready1 && s.days && s.group && s.style && s.transport && s.airport) : (ready1 && s.days && s.group && s.style && s.car);
    let result = '';
    if (ready) {
      const blocks = buildBlocks(P, data, s);
      s.umrah = !!faithOf(P) && blocks.some((b) => b.key === faithOf(P).ritualCluster);
      s.pins = new Set(s.ad);
      const days = allocate(P, data, s, blocks);
      applyEdits(days, s);
      ctx.days = days;
      result = renderResult(ctx, s, days, visaVerdict(P, s));
    }
    const faithStep = faithOf(P) ? 1 : 0;
    const total = s.origin === 'outside' ? 9 + faithStep + (partnerOf(P) && partnerOf(P).flights ? 1 : 0) : s.origin === 'inside' ? 8 + faithStep : 1;
    const pct = Math.min(100, Math.round((doneCount / total) * 100));
    const prog = s.origin ? `<div class="pprog"><div class="pprog__bar"><i style="width:${pct}%"></i></div><span>${pct >= 100 ? '🎉 ' + t('plan.planReady') : Math.min(doneCount, total) + ' / ' + total}</span></div>` : '';
    return `<div class="planner">${prog}${out.join('')}</div>${result}`;
  }

  // Star the extras that comfortably fit the trip length the traveller picked.
  function suggestExtras(P, s, muslim) {
    return (P.tour && P.tour.extras || [])
      .filter((x) => !x.airports || x.airports.includes(s.airport))
      .filter((x) => s.days >= ((muslim && x.minDaysFaith) || x.minDays || 4))
      .map((x) => x.id);
  }

  function renderResult(ctx, s, days, verdict) {
    const { P, data, t, esc, cover, img, icon, cid } = ctx;
    const spot = (id) => data.spots.find((x) => x.id === id);
    const fmtDate = (d) => d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
    const F = faithOf(P);
    const muslim = !!F && s.religion === 'muslim';
    const umrah = muslim && !!F.ritualSpot && days.some((d) => d.items.some((i) => i.type === 'spot' && i.id === F.ritualSpot));
    const allSpots = days.flatMap((d) => d.items.filter((i) => i.type === 'spot').map((i) => spot(i.id)));
    const bookings = [];
    if (s.origin === 'outside' && verdict) {
      if (verdict.level === 'ok' && (verdict.kind === 'evisa' || verdict.kind === 'cond') && P.visa.evisaBooking) bookings.push({ label: P.visa.evisaBooking, url: P.visa.portal });
      else if (verdict.level === 'ok' && verdict.kind === 'arrival' && P.visa.arrivalBooking) bookings.push({ label: P.visa.arrivalBooking, url: P.visa.portal });
      else if (verdict.level === 'warn') bookings.push(umrah && F && F.visaBooking ? { label: F.visaBooking, url: F.permitUrl } : { label: P.visa.visaBooking || 'Visa — apply before travelling', url: verdict.link || P.visa.portal });
    }
    const PT = partnerOf(P);
    if (PT && PT.flights) {
      const domestic = [];
      days.forEach((d) => d.items.forEach((it) => { if (it.flight && airportOk(P, it.flight.from) && airportOk(P, it.flight.to)) domestic.push({ label: `Flight ${it.flight.from} → ${it.flight.to} on ${fmtDate(d.date)} — search on ${PT.name}`, url: fillUrl(PT.flights, { from: it.flight.from, to: it.flight.to, depart: ymd(d.date), adults: people(s) }) }); }));
      bookings.unshift(...domestic);
      if (s.origin === 'outside') bookings.unshift({ label: `Flights ${fromCode(P, s) || '…'} → ${s.airport} (${s.from} → ${s.to}) — search on ${PT.name}`, url: fillUrl(PT.flights, { from: fromCode(P, s), to: s.airport, depart: s.from, return: s.to, adults: people(s) }) });
    }
    if (muslim) (F.permits || []).forEach((pm) => { if (allSpots.some((x) => x.id === pm.spot)) bookings.push({ label: pm.label, url: pm.url || F.permitUrl }); });
    (P.railBookings || []).forEach((rb) => { if (days.some((d) => d.items.some((i) => i.type === 'travel' && new RegExp(rb.match).test(i.text)))) bookings.push({ label: rb.label, url: rb.url }); });
    const permitHost = F && F.permitUrl ? F.permitUrl.replace(/^https?:\/\//, '').split('/')[0] : null;
    allSpots.forEach((x) => { if (x.tickets && (x.tickets.required === true || x.tickets.required === 'partial') && x.tickets.links && x.tickets.links[0] && !(permitHost && x.tickets.links[0].url.includes(permitHost)) && !bookings.some((b) => b.url === x.tickets.links[0].url && b.label.includes(x.name.split('(')[0].trim()))) bookings.push({ label: `${x.name.split(' — ')[0]} — ${x.tickets.required === true ? 'advance booking required' : 'some parts need booking'}`, url: x.tickets.links[0].url, spot: x.id }); });

    const docs = [];
    if (s.origin === 'outside') {
      docs.push(P.passportNote || 'Passport valid for at least 6 months');
      docs.push(verdict && verdict.kind === 'exempt' ? 'No visa needed — carry proof of onward travel and accommodation'
        : verdict && verdict.level === 'ok' ? 'Printed / saved visa approval'
        : 'Visa stamped in passport (apply before you travel)');
      if (verdict && verdict.kind === 'cond' && verdict.met && verdict.docLabel) docs.push('The document your e-Visa depends on: ' + verdict.docLabel + ' — carry the original, it is checked at boarding');
      if (s.res && s.res !== s.nat) docs.push('Residence permit of your country of residence');
      docs.push(P.insuranceNote || 'Travel insurance');
      if (s.transport === 'car') docs.push('National driving licence + International Driving Permit');
      docs.push('Hotel booking confirmations');
    } else {
      docs.push(P.localIdNote || 'National ID');
      if (s.car === 'yes') docs.push('Driving licence, vehicle registration and insurance');
    }
    if (muslim && F) (F.docs || []).forEach((d) => {
      if (d.when === 'ritual' && !umrah) return;
      if (d.when === 'spot' && !allSpots.some((x) => x.id === d.spot)) return;
      if (d.when === 'notRitual' && umrah) return;
      docs.push(d.text);
    });
    if (s.group === 'family') docs.push('Children\'s passports / IDs, stroller, snacks and sun protection');

    const stayList = stays(P, s, days);
    const bud = budget(P, data, s, days, stayList);
    const sar = (n) => money(P) + ' ' + n.toLocaleString('en-US');
    const range = (lo, hi) => `${sar(lo)} – ${sar(hi)}`;
    const ctrl = (id, d) => {
      const ids = d.items.filter((i) => i.type === 'spot').map((i) => i.id); const k = ids.indexOf(id);
      return `<div class="pitem__ctrl"><button data-up="${id}" ${k === 0 ? 'disabled' : ''} aria-label="${esc(t('plan.moveUp'))}" title="${esc(t('plan.moveUp'))}">↑</button><button data-down="${id}" ${k === ids.length - 1 ? 'disabled' : ''} aria-label="${esc(t('plan.moveDown'))}" title="${esc(t('plan.moveDown'))}">↓</button>
        <select class="pitem__mv" data-mv="${id}" aria-label="${esc(t('plan.moveToDay'))}"><option value="">⇄ ${t('plan.moveToDay')}</option>${days.map((dd) => `<option value="${dd.n}" ${dd.n === d.n ? 'disabled' : ''}>${t('plan.day')} ${dd.n} · ${esc(dd.city)}</option>`).join('')}</select></div>`;
    };
    const thumbOf = (id) => (ctx.coverThumb ? ctx.coverThumb(cid, id) : cover(cid, id));
    const cities = []; days.forEach((d) => { if (!cities.length || cities[cities.length - 1] !== d.city) cities.push(d.city); });
    const travelDays = days.filter((d) => d.items.some((i) => i.type === 'travel' && d.note === 'travel')).length;
    const dayHtml = days.map((d) => {
      const first = d.items.find((i) => i.type === 'spot');
      const bgRaw = first ? thumbOf(first.id) : '';
      const bg = bgRaw ? new URL(bgRaw, location.href.split('#')[0]).href : '';
      return `
      <article class="pday reveal">
        <header class="pday__hero ${bg ? 'has-img' : ''}" ${bg ? `style="--bg:url('${esc(bg)}')"` : ''}>
          <div class="pday__num"><small>${t('plan.day')}</small><b>${d.n}</b></div>
          <div class="pday__info"><b>${fmtDate(d.date)}</b><span>${icon.pin} ${esc(d.city)}</span></div>
          ${d.note === 'arrival' ? `<span class="badge">✈️ ${t('plan.arrival')}</span>` : d.note === 'travel' ? `<span class="badge">🧭 ${t('plan.travelDay')}</span>` : d.note === 'free' ? `<span class="badge">🌴 ${t('plan.freeDay')}</span>` : ''}
        </header>
        <ol class="pday__items">${d.items.map((it) => {
          if (it.type === 'spot') {
            const x = spot(it.id); const r = data.regions.find((z) => z.id === x.region) || {};
            const tk = x.tickets || {}; const cls = tk.required === true ? 'warn' : tk.required === 'partial' ? 'info' : 'ok';
            return `<li class="pitem pitem--spot"><a href="#/c/${cid}/spot/${x.id}" class="pitem__thumb">${img(cover(cid, x.id), x.name, '', '', 330)}</a>
              <div class="pitem__body"><div class="pitem__top"><a href="#/c/${cid}/spot/${x.id}"><b>${esc(x.name)}</b></a>
                <button class="pitem__rm" data-rm="${x.id}" title="${esc(t('plan.removeHint'))}" aria-label="${esc(t('plan.remove'))}">✕ <span>${t('plan.remove')}</span></button></div>
              <small>${esc(x.city)} · ${esc(r.name || '')}</small>
              <div class="tags">${x.muslimsOnly ? `<span class="tag tag--g">☪️ ${t('common.muslimsOnly')}</span>` : ''}${x.muslimSite && !x.muslimsOnly ? `<span class="tag tag--s">🕌 ${t('common.muslimSite')}</span>` : ''}${x.unesco ? `<span class="tag tag--b">🏛️ ${t('common.unesco')}</span>` : ''}${x.status === 'check' ? `<span class="tag tag--o">⚠️ ${t('common.checkStatus')}</span>` : ''}${s.ad.includes(x.id) ? `<span class="tag tag--p">➕ ${t('plan.addedByYou')}</span>` : ''}</div>
              <div class="pitem__meta"><span>${icon.clock} ${esc((x.hours && x.hours.summary) || '')}</span></div>
              <div class="pitem__meta"><span class="pill pill--${cls}">${icon.ticket} ${tk.required === true ? t('common.required') : tk.required === 'partial' ? t('common.partly') : t('common.notRequired')}${tk.price ? ' · ' + esc(tk.price.split('(')[0].trim().slice(0, 40)) : ''}</span>${tk.links && tk.links[0] && tk.required ? `<a class="link" href="${esc(tk.links[0].url)}" target="_blank" rel="noopener">${t('common.bookNow')} ${icon.ext}</a>` : ''}${x.duration ? `<span>⏱ ${esc(x.duration)}</span>` : ''}</div>${ctrl(x.id, d)}</div></li>`;
          }
          return `<li class="pitem pitem--${it.type}"><span class="pitem__icon">${it.type === 'free' ? '🌴' : '🧭'}</span><div><p>${esc(it.text)}</p>${it.url ? `<a class="link" href="${esc(it.url)}" target="_blank" rel="noopener">${t('plan.bookTransport')} ${icon.ext}</a>` : ''}${it.alt && it.alt.length ? `<small class="muted">${t('plan.alternatives')}: ${it.alt.map(esc).join(' · ')}</small>` : ''}</div></li>`;
        }).join('')}</ol>
      </article>`;
    }).join('');

    const fmtShort = ymd;
    const stayHtml = stayList.length ? `
      <section class="pstay glass-card reveal">
        <h3>🏨 ${t('plan.stayTitle')}</h3><p class="muted small">${t('plan.staySub')}</p>
        ${stayList.map((st) => `<div class="pstay__row"><div class="pstay__head"><b>${esc(st.city)}</b><span>${st.nights} ${t('plan.nights')} · ${fmtDate(st.from)} → ${fmtDate(st.to)}</span></div>
          <p>${esc(P.stay[st.city] || P.stay.default)}</p>
          <div class="pstay__foot"><span class="pill pill--info">≈ ${sar(st.rate[0])} – ${sar(st.rate[1])} ${t('plan.perRoomNight')}</span>
          ${(() => { if (!PT || !PT.hotels) return ''; const cc = (PT.cityCodes || {})[st.city] || (P.hubs[st.prov] || {}).airport || ''; return cc ? `<a class="btn btn--sm btn--primary" href="${esc(fillUrl(PT.hotels, { citycode: cc, checkin: fmtShort(st.from), checkout: fmtShort(st.to), adults: bud.ppl, rooms: st.rooms }))}" target="_blank" rel="noopener">${t('plan.bookOn')} ${esc(PT.name)} ${icon.ext}</a>` : ''; })()}
          <a class="btn btn--sm btn--ghost" href="https://www.booking.com/searchresults.html?ss=${encodeURIComponent(st.city + ', ' + data.name)}&checkin=${fmtShort(st.from)}&checkout=${fmtShort(st.to)}&group_adults=${bud.ppl}&no_rooms=${st.rooms}" target="_blank" rel="noopener">${t('plan.searchHotels')} ${icon.ext}</a>
          <a class="link" href="https://www.google.com/maps/search/hotels+in+${encodeURIComponent(st.city + ' ' + data.name)}" target="_blank" rel="noopener">${icon.pin} ${t('common.openMap')}</a></div></div>`).join('')}
        ${PT ? `<p class="note">✈️ ${t('plan.partnerNote').replace('{name}', esc(PT.name))}</p>` : ''}
      </section>` : '';
    const budgetHtml = `
      <div class="glass-card pbudget"><h3>💰 ${t('plan.budgetTitle')}</h3>
        <div class="pbudget__total"><b>${range(bud.totLo, bud.totHi)}</b><small>≈ $${Math.round(bud.totLo / P.costs.usd).toLocaleString('en-US')} – $${Math.round(bud.totHi / P.costs.usd).toLocaleString('en-US')} · ${bud.ppl} ${t('plan.travellersLower')}</small>
          <small>${t('plan.perPerson')}: ${range(Math.round(bud.totLo / bud.ppl), Math.round(bud.totHi / bud.ppl))}</small></div>
        <ul class="pbudget__rows">${bud.rows.map((r) => `<li><span><b>${esc(r.label)}</b><small>${esc(r.note)}</small></span><em>${range(r.lo, r.hi)}</em></li>`).join('')}</ul>
        <small class="muted">${esc(P.budgetNote || t('plan.budgetNote'))}</small>
      </div>`;

    // "Add a spot" panel + removed list
    const inPlan = new Set(allSpots.map((x) => x.id));
    const planProvs = new Set(allSpots.map((x) => x.region));
    const ex = new Set(s.ex);
    const candidates = data.spots.filter((x) => !inPlan.has(x.id) && !ex.has(x.id) && x.status !== 'closed' && (muslim || !x.muslimsOnly) && !(s.group === 'family' && strenuousSet(P).has(x.id)))
      .sort((a, b) => (planProvs.has(b.region) ? 1 : 0) - (planProvs.has(a.region) ? 1 : 0) || a.name.localeCompare(b.name));
    const addPanel = `
      <section class="padd glass-card reveal" id="planAdd">
        <h3>➕ ${t('plan.addTitle')}</h3><p class="muted small">${t('plan.addSub')}</p>
        <div class="padd__tools">
          <label class="field"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input type="search" id="padSearch" placeholder="${esc(t('plan.searchSpots'))}"></label>
          <label class="field"><select id="padProv"><option value="">${t('common.allRegions')}</option>${data.regions.map((r) => `<option value="${r.id}">${esc(r.name)}</option>`).join('')}</select></label>
        </div>
        <div class="padd__list" id="padList">${candidates.map((x) => { const r = data.regions.find((z) => z.id === x.region) || {}; return `<button class="padd__row" data-add="${x.id}" data-region="${x.region}" data-q="${esc((x.name + ' ' + x.city + ' ' + (r.name || '')).toLowerCase())}"><span class="padd__thumb">${img(cover(cid, x.id), '', '', '', 330)}</span><span class="padd__txt"><b>${esc(x.name)}</b><small>${esc(x.city)} · ${esc(r.name || '')}</small></span><em>＋ ${t('plan.add')}</em></button>`; }).join('')}<p class="padd__none" hidden>${t('common.noResults')}</p></div>
        ${s.ex.length ? `<div class="padd__removed"><h4>${t('plan.removedList')}</h4><div class="chips">${s.ex.map((id) => { const x = spot(id); return x ? `<button class="chip chip--rm" data-restore="${id}">↩ ${esc(x.name.split(' (')[0].slice(0, 34))}</button>` : ''; }).join('')}</div></div>` : ''}
      </section>`;

    const tips = [];
    const tx = (v) => (/^plan\./.test(v) ? t(v) : v);   // plan.js may give an i18n key or literal text
    if (muslim && umrah && F.tipRitual) tips.push(tx(F.tipRitual));
    if (F && !muslim && F.tipOther) tips.push(tx(F.tipOther));
    const MT = P.modeTips || {};
    if (s.group === 'family' && MT.family) tips.push(tx(MT.family));
    if (s.transport === 'car' && s.idp && MT.rentCar) tips.push(tx(MT.rentCar));
    if (s.transport === 'taxi' && MT.taxi) tips.push(tx(MT.taxi));
    if (s.origin === 'inside' && s.car === 'no' && MT.noCar) tips.push(tx(MT.noCar));
    (P.tips || []).forEach((x) => tips.push(tx(x)));

    return `
      <section class="presult" id="planResult">
        <div class="presult__head reveal">
          <div><span class="eyebrow">${t('plan.yourPlan')}</span><h2>${s.days} ${t('plan.daysIn')} ${esc(data.name)}</h2>
            <p class="muted">${fmtDate(s.fromDate)} → ${fmtDate(s.toDate)} · ${t('plan.' + s.group)} · ${t('plan.' + s.style)} · ${allSpots.length} ${t('common.spots')}</p></div>
          <div class="btn-row"><button class="btn btn--ghost btn--sm" data-plan-copy>${icon.share} ${t('common.copyLink')}</button><button class="btn btn--primary btn--sm" data-plan-print>🖨️ ${t('plan.print')}</button></div>
        </div>
        <div class="pstats reveal">
          <div><b>${s.days}</b><span>${t('plan.statDays')}</span></div><div><b>${allSpots.length}</b><span>${t('plan.statSpots')}</span></div><div><b>${cities.length}</b><span>${t('plan.statCities')}</span></div><div><b>${bookings.length}</b><span>${t('plan.statBookings')}</span></div>
        </div>
        <div class="proute reveal">${cities.map((c, i) => `<span class="proute__stop"><i>${i + 1}</i>${esc(c)}</span>`).join('<span class="proute__arrow">→</span>')}</div>
        <p class="pnote reveal">💡 ${t('plan.editHint')}</p>
        <div class="presult__grid">
          <div class="presult__days">${dayHtml}${stayHtml}${addPanel}</div>
          <aside class="presult__side">
            ${verdict ? `<div class="glass-card verdict verdict--${verdict.level}"><h3>${t('plan.visaStatus')}</h3><b>${verdict.level === 'ok' ? '✅' : '⚠️'} ${esc(verdict.title)}</b></div>` : ''}
            ${budgetHtml}
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
      if (k === 'origin') { s.religion = s.group = s.style = s.transport = s.airport = s.car = ''; s.extras = []; s.dest = []; s.ex = []; s.ad = []; s.mv = {}; s.ord = []; s.bl = s.ppl = s.fr = ''; }
      if (k === 'religion' && s.origin === 'outside') { s.airport = ''; s.extras = []; }
      if (k === 'airport') s.extras = suggestExtras(s, s.religion === 'muslim');
      const keepY = scrollY; rerender(); scrollTo(0, keepY);
      if (k !== 'origin') { const r = document.getElementById('planResult'); if (r) setTimeout(() => r.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }
    }));
    root.querySelectorAll('select[name], input[type=date], input[type=number]').forEach((el) => el.addEventListener('change', () => {
      s[el.name] = el.value;
      if (el.name === 'from' && s.to && s.to < s.from) s.to = '';
      const keepY = scrollY; rerender(); scrollTo(0, keepY);
    }));
    root.querySelectorAll('input[type=checkbox]').forEach((el) => el.addEventListener('change', () => {
      if (el.name === 'visaHolder' || el.name === 'idp') s[el.name] = el.checked;
      else { const arr = s[el.name]; const i = arr.indexOf(el.value); if (el.checked && i < 0) arr.push(el.value); if (!el.checked && i >= 0) arr.splice(i, 1); }
      const keepY = scrollY; rerender(); scrollTo(0, keepY);
    }));
    // Skip / add / restore a spot (the itinerary re-arranges itself)
    const act = (fn, msg) => { fn(); const keepY = scrollY; rerender(); scrollTo(0, keepY); if (msg) ctx.toast(msg); };
    root.querySelectorAll('[data-rm]').forEach((el) => el.addEventListener('click', () => act(() => { const id = el.dataset.rm; if (!s.ex.includes(id)) s.ex.push(id); s.ad = s.ad.filter((x) => x !== id); s.mv = Object.fromEntries(Object.entries(s.mv).filter(([k]) => k !== id)); s.ord = s.ord.filter((x) => x !== id); }, ctx.t('plan.removedToast'))));
    root.querySelectorAll('[data-add]').forEach((el) => el.addEventListener('click', () => act(() => { const id = el.dataset.add; if (!s.ad.includes(id)) s.ad.push(id); s.ex = s.ex.filter((x) => x !== id); }, ctx.t('plan.addedToast'))));
    root.querySelectorAll('[data-restore]').forEach((el) => el.addEventListener('click', () => act(() => { s.ex = s.ex.filter((x) => x !== el.dataset.restore); }, ctx.t('plan.restoredToast'))));
    const dayOf = (id) => (ctx.days || []).find((d) => d.items.some((i) => i.type === 'spot' && i.id === id));
    const swap = (id, dir) => act(() => {
      const d = dayOf(id); if (!d) return;
      const ids = d.items.filter((i) => i.type === 'spot').map((i) => i.id); const k = ids.indexOf(id), j = k + dir;
      if (j < 0 || j >= ids.length) return;
      [ids[k], ids[j]] = [ids[j], ids[k]];
      s.ord = s.ord.filter((x) => !ids.includes(x)).concat(ids);
    });
    root.querySelectorAll('[data-up]').forEach((el) => el.addEventListener('click', () => swap(el.dataset.up, -1)));
    root.querySelectorAll('[data-down]').forEach((el) => el.addEventListener('click', () => swap(el.dataset.down, 1)));
    root.querySelectorAll('[data-mv]').forEach((el) => el.addEventListener('change', () => { if (!el.value) return; act(() => { s.mv[el.dataset.mv] = parseInt(el.value, 10); s.ord = s.ord.filter((x) => x !== el.dataset.mv); }, ctx.t('plan.movedToast')); }));
    const q = root.querySelector('#padSearch'), pv = root.querySelector('#padProv');
    const filt = () => {
      const v = (q ? q.value : '').trim().toLowerCase(), r = pv ? pv.value : ''; let n = 0;
      root.querySelectorAll('.padd__row').forEach((row) => { const ok = (!v || row.dataset.q.includes(v)) && (!r || row.dataset.region === r); row.hidden = !ok; if (ok) n++; });
      const none = root.querySelector('.padd__none'); if (none) none.hidden = n > 0;
    };
    if (q) q.addEventListener('input', filt); if (pv) pv.addEventListener('change', filt);
    const copy = root.querySelector('[data-plan-copy]');
    if (copy) copy.addEventListener('click', () => { const u = location.href; (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.resolve()).then(() => ctx.toast(ctx.t('common.copied'))); });
    const pr = root.querySelector('[data-plan-print]');
    if (pr) pr.addEventListener('click', () => window.print());
  }

  window.TG_PLANNER = { render, bind };
})();
