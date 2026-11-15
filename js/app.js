/* TouristsGuide — single-page app (no build step, works from file:// and any static host). */
(function () {
  'use strict';

  const CFG = window.TG_CONFIG;
  const store = { countries: {}, media: {}, loading: {} };
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (n, d = 0) => Number(n).toLocaleString(state.lang === 'en' ? 'en-US' : state.lang, { maximumFractionDigits: d, minimumFractionDigits: d });

  /* ---------------- State & i18n ---------------- */
  const state = {
    lang: (() => { try { return localStorage.getItem('tg-lang') || CFG.defaultLang; } catch (e) { return CFG.defaultLang; } })(),
    filters: { q: '', region: 'all', cat: 'all', sort: 'featured', view: 'grid' }
  };
  if (!CFG.languages.some((l) => l.code === state.lang)) state.lang = CFG.defaultLang;

  function t(path) {
    const get = (lang) => path.split('.').reduce((o, k) => (o ? o[k] : undefined), window.TG_I18N[lang]);
    const v = get(state.lang);
    return v !== undefined ? v : (get('en') !== undefined ? get('en') : path);
  }

  /* ---------------- Public registration API (used by data files) ---------------- */
  window.TG = {
    registerCountry(id, lang, data) { store.countries[id + ':' + lang] = data; },
    registerMedia(id, data) { store.media[id] = data; }
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = src; s.onload = () => resolve(true); s.onerror = () => resolve(false);
      document.head.appendChild(s);
    });
  }

  async function loadCountry(id) {
    const key = id + ':' + state.lang;
    if (store.countries[key]) return store.countries[key];
    if (!store.loading[key]) {
      store.loading[key] = (async () => {
        const jobs = [loadScript(`data/${id}/${state.lang}.js`)];
        if (!store.media[id]) jobs.push(loadScript(`data/${id}/media.js`));
        await Promise.all(jobs);
        if (!store.countries[key] && state.lang !== 'en') await loadScript(`data/${id}/en.js`);
      })();
    }
    await store.loading[key];
    return store.countries[key] || store.countries[id + ':en'];
  }

  const media = (cid, sid) => ((store.media[cid] || {}).spots || {})[sid] || [];
  const cover = (cid, sid) => (media(cid, sid)[0] || {}).src || '';

  /* ---------------- Small UI helpers ---------------- */
  // Wikimedia thumbnails: request a smaller width for cards; fall back to the full URL, then a placeholder.
  window.TG_imgErr = function (el) {
    if (el.dataset.full && el.src !== el.dataset.full) { el.src = el.dataset.full; el.removeAttribute('data-full'); return; }
    const d = document.createElement('div'); d.className = 'ph ' + el.className; el.replaceWith(d);
  };
  function img(src, alt, cls = '', attrs = '', width) {
    if (!src) return `<div class="ph ${cls}" aria-hidden="true"></div>`;
    // Local photos have a small version: name.jpg -> name-sm.jpg (used for cards, popups, search).
    const small = width && width <= 960 && /^assets\/photos\/.+\.jpg$/.test(src) && !/-sm\.jpg$/.test(src) ? src.replace(/\.jpg$/, '-sm.jpg') : src;
    return `<img class="${cls}" src="${esc(small)}" ${small !== src ? `data-full="${esc(src)}"` : ''} alt="${esc(alt)}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="TG_imgErr(this)" ${attrs}>`;
  }
  const mapsUrl = (c) => `https://www.google.com/maps/search/?api=1&query=${c[0]},${c[1]}`;
  const ticketLabel = (r) => r === true ? t('common.required') : r === 'partial' ? t('common.partly') : t('common.notRequired');
  const ticketClass = (r) => r === true ? 'warn' : r === 'partial' ? 'info' : 'ok';
  const icon = {
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9a3 3 0 0 0 0 6v3h18v-3a3 3 0 0 1 0-6V6H3z"/><path d="M13 6v12" stroke-dasharray="2 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    hour: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h12M6 22h12M7 2c0 6 10 6 10 10S7 16 7 22M17 2c0 6-10 6-10 10s10 4 10 10"/></svg>',
    plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.5 13.5 3 11l1.5-1.5 7.5 1 4-4.5c1-1 3-1.5 3.5-1s0 2.5-1 3.5l-4.5 4 1 7.5L17.5 21 15 13.5"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17h14v-5l-2-5H7l-2 5z"/><circle cx="7.5" cy="17" r="1.8"/><circle cx="16.5" cy="17" r="1.8"/></svg>',
    bus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="15" rx="2"/><path d="M4 11h16M8 21v-3M16 21v-3"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>'
  };

  /* ---------------- Chrome: nav, footer, language, theme ---------------- */
  function renderChrome(country) {
    const links = [`<a href="#/" data-nav="home">${t('nav.home')}</a>`];
    CFG.countries.filter((c) => c.status === 'live').forEach((c) => links.push(`<a href="#/c/${c.id}" data-nav="${c.id}">${c.flag} ${esc(c.name)}</a>`));
    if (country) {
      links.push(`<a href="#/c/${country}" data-jump="spots">${t('nav.spots')}</a>`);
      links.push(`<a href="#/c/${country}" data-jump="map">${t('nav.map')}</a>`);
    }
    $('#navLinks').innerHTML = links.join('');

    const cur = CFG.languages.find((l) => l.code === state.lang);
    $('#langSwitcher').innerHTML = `
      <button class="lang__btn" aria-haspopup="listbox" aria-expanded="false">🌐 <span>${cur.short}</span></button>
      <ul class="lang__menu" role="listbox">${CFG.languages.map((l) => `<li><button data-lang="${l.code}" class="${l.code === state.lang ? 'active' : ''}">${esc(l.label)}</button></li>`).join('')}
        <li class="lang__soon">More languages coming soon</li></ul>`;
    document.documentElement.lang = state.lang;
    document.documentElement.dir = cur.dir || 'ltr';
    $('#searchInput').placeholder = t('common.searchPlaceholder');

    $('#footer').innerHTML = `
      <div class="footer__brand">
        <a href="#/" class="brand"><span class="brand__text">Tourists<b>Guide</b></span></a>
        <p>${esc(t('footer.about'))}</p>
      </div>
      <div class="footer__col"><h4>${t('nav.countries')}</h4>${CFG.countries.map((c) => c.status === 'live' ? `<a href="#/c/${c.id}">${c.flag} ${esc(c.name)}</a>` : `<span class="muted">${c.flag} ${esc(c.name)} · ${t('common.comingSoon')}</span>`).join('')}</div>
      <div class="footer__col"><h4>Useful</h4><a href="https://www.visitsaudi.com" target="_blank" rel="noopener">VisitSaudi</a><a href="https://www.nusuk.sa" target="_blank" rel="noopener">Nusuk</a><a href="https://visa.visitsaudi.com" target="_blank" rel="noopener">Saudi eVisa</a></div>
      <div class="footer__bottom"><span>© ${new Date().getFullYear()} TouristsGuide · ${esc(t('footer.made'))}</span><span class="muted">${esc(t('common.photoCredit'))}</span></div>`;
  }

  /* ---------------- HOME ---------------- */
  function renderHome() {
    document.title = 'TouristsGuide — Explore Countries, Spot by Spot';
    const live = CFG.countries.find((c) => c.status === 'live');
    return `
      <section class="hero hero--home">
        <div class="hero__bg">${img(live.cover, '', 'hero__img', 'loading="eager" fetchpriority="high"')}</div>
        <div class="hero__shade"></div>
        <div class="hero__orbs"><i></i><i></i><i></i></div>
        <div class="container hero__content">
          <span class="eyebrow reveal">${esc(t('home.eyebrow'))}</span>
          <h1 class="hero__title reveal">${esc(t('home.title')).replace('remarkable', '<em>remarkable</em>')}</h1>
          <p class="hero__sub reveal">${esc(t('home.subtitle'))}</p>
          <div class="hero__cta reveal">
            <a class="btn btn--primary" href="#/c/${live.id}">${live.flag} ${esc(t('home.cta'))} ${icon.arrow}</a>
            <button class="btn btn--glass" data-open-search>${t('common.searchPlaceholder')}</button>
          </div>
        </div>
        <div class="scroll-hint" aria-hidden="true"><span></span></div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section__head reveal"><h2>${t('home.countriesTitle')}</h2><p>${t('home.countriesSub')}</p></div>
          <div class="country-grid">
            ${CFG.countries.map((c, i) => c.status === 'live' ? `
              <a class="country-card country-card--live reveal" style="--d:${i * 60}ms" href="#/c/${c.id}">
                ${img(c.cover, c.name, 'country-card__img', '', 1280)}
                <div class="country-card__body">
                  <span class="chip chip--live">● Live</span>
                  <h3>${c.flag} ${esc(c.name)}</h3><p>${esc(c.tagline)}</p>
                  <span class="link">${t('common.exploreCountry')} ${icon.arrow}</span>
                </div>
              </a>` : `
              <div class="country-card reveal" style="--d:${i * 60}ms">
                <div class="country-card__flag">${c.flag}</div>
                <div class="country-card__body"><span class="chip">${t('common.comingSoon')}</span><h3>${esc(c.name)}</h3><p>${esc(c.tagline)}</p></div>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <section class="section section--alt">
        <div class="container">
          <div class="section__head reveal"><h2>${t('home.featureTitle')}</h2></div>
          <div class="feature-grid">${t('home.features').map((f, i) => `
            <div class="feature reveal" style="--d:${i * 70}ms"><span class="feature__icon">${f[0]}</span><h3>${esc(f[1])}</h3><p>${esc(f[2])}</p></div>`).join('')}
          </div>
        </div>
      </section>`;
  }

  /* ---------------- COUNTRY ---------------- */
  function spotCard(cid, data, s, i = 0) {
    const r = data.regions.find((x) => x.id === s.region) || {};
    const cats = s.categories.map((c) => data.categories[c]).filter(Boolean);
    return `
      <a class="spot-card reveal" style="--d:${(i % 6) * 50}ms" href="#/c/${cid}/spot/${s.id}" data-id="${s.id}">
        <div class="spot-card__media">
          ${img(cover(cid, s.id), s.name, 'spot-card__img', '', 960)}
          <div class="spot-card__badges">
            ${s.unesco ? `<span class="badge badge--unesco">${t('common.unesco')}</span>` : ''}
            ${s.muslimsOnly ? `<span class="badge badge--muslim">${t('common.muslimsOnly')}</span>` : ''}
            ${s.status === 'closed' ? `<span class="badge badge--closed">⛔ ${t('common.closed')}</span>` : ''}
            ${s.status === 'check' ? `<span class="badge badge--check">⚠️ ${t('common.checkStatus')}</span>` : ''}
          </div>
          <span class="spot-card__cat">${cats.map((c) => c.icon).join(' ')}</span>
        </div>
        <div class="spot-card__body">
          <span class="spot-card__loc">${icon.pin} ${esc(s.city)} · ${esc(r.name || '')}</span>
          <h3>${esc(s.name)}</h3>
          <p>${esc(s.tagline)}</p>
          <div class="spot-card__meta">
            <span title="${t('spot.hours')}">${icon.clock} ${esc(s.hours.summary.split(';')[0].split('(')[0].trim().slice(0, 34))}</span>
            <span class="pill pill--${ticketClass(s.tickets.required)}">${icon.ticket} ${esc(s.tickets.price.split('(')[0].split('·')[0].trim().slice(0, 22))}</span>
          </div>
        </div>
      </a>`;
  }

  function renderCountry(cid, data) {
    document.title = `${data.name} Travel Guide — TouristsGuide`;
    const govTotal = data.regions.reduce((a, r) => a + r.governorates.length, 0);
    const countBy = (rid) => data.spots.filter((s) => s.region === rid).length;
    const stats = data.stats.map((s) => (s.label === 'Governorates' ? { ...s, value: govTotal } : s));
    const heroImg = data.heroImage || cover(cid, data.spots[0].id);
    const featured = data.spots.filter((s) => s.featured);

    return `
      <section class="hero hero--country">
        <div class="hero__bg">${img(heroImg, data.name, 'hero__img', 'loading="eager" fetchpriority="high"')}</div>
        <div class="hero__shade"></div>
        <div class="container hero__content">
          <nav class="crumbs reveal"><a href="#/">${t('nav.home')}</a><span>/</span><span>${esc(data.name)}</span></nav>
          <span class="eyebrow reveal">${data.flag} ${esc(data.officialName)} · <bdi lang="ar">${esc(data.nativeName)}</bdi></span>
          <h1 class="hero__title reveal">${esc(data.name)}</h1>
          <p class="hero__sub reveal">${esc(data.tagline)}</p>
          <div class="hero__cta reveal">
            <button class="btn btn--primary" data-jump="spots">${data.spots.length} ${t('nav.spots')} ${icon.arrow}</button>
            <button class="btn btn--glass" data-jump="map">${t('nav.map')}</button>
          </div>
        </div>
        <div class="stats container">
          ${stats.map((s, i) => `<div class="stat reveal" style="--d:${i * 80}ms"><b data-count="${s.value}" data-dec="${s.decimals || 0}" data-fmt="${s.format || ''}">0</b><span>${esc(s.label)}</span></div>`).join('')}
          <div class="stat reveal" style="--d:400ms"><b data-count="${data.spots.length}">0</b><span>${t('nav.spots')}</span></div>
        </div>
      </section>

      <nav class="subnav" id="subnav">
        <div class="container subnav__inner">
          ${[['overview', t('nav.overview')], ['facts', t('country.factsTitle')], ['divisions', t('nav.divisions')], ['spots', t('nav.spots')], ['map', t('nav.map')], ['travel', t('nav.travel')]]
            .map(([id, l]) => `<button data-jump="${id}">${esc(l)}</button>`).join('')}
        </div>
      </nav>

      <section class="section" id="sec-overview">
        <div class="container">
          <div class="intro">
            <div class="intro__text reveal">
              <span class="eyebrow">${t('country.overviewTitle')}</span>
              <h2>${t('country.atAGlance')}</h2>
              ${data.intro.map((p) => `<p class="lead">${esc(p)}</p>`).join('')}
            </div>
            <div class="intro__mosaic reveal">
              ${featured.slice(0, 3).map((s) => `<a href="#/c/${cid}/spot/${s.id}" class="mosaic__item">${img(cover(cid, s.id), s.name, '', '', 960)}<span>${esc(s.name.split('(')[0])}</span></a>`).join('')}
            </div>
          </div>
          <div class="overview-grid">
            ${data.overview.map((o, i) => `<article class="glass-card reveal" style="--d:${i * 60}ms"><span class="glass-card__icon">${o.icon}</span><h3>${esc(o.title)}</h3><p>${esc(o.text)}</p></article>`).join('')}
          </div>
        </div>
      </section>

      <section class="section section--alt" id="sec-facts">
        <div class="container">
          <div class="section__head reveal"><h2>${t('country.factsTitle')}</h2></div>
          <div class="facts">${data.facts.map((f, i) => `<div class="fact reveal" style="--d:${(i % 8) * 40}ms"><span>${f.icon}</span><div><small>${esc(f.label)}</small><b>${esc(f.value)}</b></div></div>`).join('')}</div>

          <div class="unesco reveal">
            <h3>🏛️ ${t('country.unescoTitle')} <span class="muted">(${data.unesco.length})</span></h3>
            <ol class="timeline">${data.unesco.map((u) => `<li><span class="timeline__year">${u.year}</span>${u.spot ? `<a href="#/c/${cid}/spot/${u.spot}">${esc(u.name)}</a>` : `<span>${esc(u.name)}</span>`}</li>`).join('')}</ol>
          </div>
        </div>
      </section>

      <section class="section" id="sec-divisions">
        <div class="container">
          <div class="section__head reveal">
            <h2>${t('country.divisionsTitle')}</h2>
            <p>${t('country.divisionsSub')}</p>
          </div>
          <div class="div-summary reveal">
            <div><b>${data.regions.length}</b><span>${t('country.provinces')}</span></div>
            <div><b>${govTotal}</b><span>${t('country.governoratesTotal')}</span></div>
            <div><b>${data.spots.length}</b><span>${t('nav.spots')}</span></div>
          </div>
          <div class="region-grid">
            ${data.regions.map((r, i) => `
              <article class="region reveal" style="--d:${(i % 6) * 50}ms">
                <header>
                  <span class="region__num">${String(i + 1).padStart(2, '0')}</span>
                  <div><h3>${esc(r.name)}</h3><small><bdi lang="ar">${esc(r.nativeName)}</bdi></small></div>
                </header>
                <p>${esc(r.description)}</p>
                <dl class="region__stats">
                  <div><dt>${t('common.capital')}</dt><dd>${esc(r.capital)}</dd></div>
                  <div><dt>${t('common.area')}</dt><dd>${fmt(r.area)} ${t('common.km2')}</dd></div>
                  <div><dt>${t('common.population')}</dt><dd>≈ ${fmt(r.population, r.population < 1 ? 2 : 1)} M</dd></div>
                  <div><dt>${t('common.governorates')}</dt><dd>${r.governorates.length}</dd></div>
                </dl>
                <details class="region__govs"><summary>${t('country.seeGovernorates')} (${r.governorates.length})</summary>
                  <div class="chips"><span class="chip chip--capital" title="${t('country.regionalCapital')}">★ ${esc(r.capital)}</span>${r.governorates.map((g) => `<span class="chip">${esc(g)}</span>`).join('')}</div>
                </details>
                <button class="region__spots" data-region="${r.id}">${countBy(r.id)} ${t('country.inThisProvince')} ${icon.arrow}</button>
              </article>`).join('')}
          </div>
          <p class="note">Population figures are approximate (2022 census). Each province is also administered from its regional capital, which is not counted as a separate governorate.</p>
        </div>
      </section>

      <section class="section section--alt" id="sec-spots">
        <div class="container">
          <div class="section__head reveal"><h2>${t('country.spotsTitle')}</h2><p>${t('country.spotsSub')}</p></div>
          <div class="toolbar">
            <label class="field field--search">${'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'}
              <input type="search" id="spotQ" placeholder="${t('common.searchPlaceholder')}" value="${esc(state.filters.q)}"></label>
            <label class="field"><select id="spotRegion"><option value="all">${t('common.allRegions')}</option>${data.regions.map((r) => `<option value="${r.id}" ${state.filters.region === r.id ? 'selected' : ''}>${esc(r.name)} (${countBy(r.id)})</option>`).join('')}</select></label>
            <label class="field"><select id="spotSort">
              <option value="featured">${t('common.sortBy')}: ${t('common.sortFeatured')}</option>
              <option value="az">${t('common.sortBy')}: ${t('common.sortAZ')}</option>
              <option value="region">${t('common.sortBy')}: ${t('common.sortRegion')}</option></select></label>
          </div>
          <div class="cats" id="spotCats">
            <button data-cat="all" class="${state.filters.cat === 'all' ? 'active' : ''}">${t('common.allCategories')}</button>
            ${Object.entries(data.categories).map(([k, c]) => `<button data-cat="${k}" class="${state.filters.cat === k ? 'active' : ''}">${c.icon} ${esc(c.label)}</button>`).join('')}
            <button data-cat="unesco" class="${state.filters.cat === 'unesco' ? 'active' : ''}">🏛️ ${t('common.unesco')}</button>
          </div>
          <p class="count" id="spotCount"></p>
          <div class="spot-grid" id="spotGrid"></div>
        </div>
      </section>

      <section class="section" id="sec-map">
        <div class="container">
          <div class="section__head reveal"><h2>${t('country.mapTitle')}</h2></div>
          <div class="map reveal" id="countryMap"></div>
        </div>
      </section>

      <section class="section section--alt" id="sec-travel">
        <div class="container">
          <div class="section__head reveal"><h2>${t('country.travelTitle')}</h2></div>
          <div class="travel-grid">${data.travel.map((x, i) => `
            <article class="glass-card reveal" style="--d:${(i % 4) * 60}ms">
              <span class="glass-card__icon">${x.icon}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p>
              ${x.link ? `<a class="link" href="${esc(x.link.url)}" target="_blank" rel="noopener">${esc(x.link.label)} ${icon.ext}</a>` : ''}
            </article>`).join('')}
          </div>
          <p class="note">⚠️ ${esc(t('common.disclaimer'))} · ${t('common.lastReviewed')}: ${esc(data.meta.lastReviewed)}</p>
        </div>
      </section>`;
  }

  function filterSpots(data) {
    const f = state.filters;
    const q = f.q.trim().toLowerCase();
    let list = data.spots.filter((s) => {
      if (f.region !== 'all' && s.region !== f.region) return false;
      if (f.cat === 'unesco' && !s.unesco) return false;
      if (f.cat !== 'all' && f.cat !== 'unesco' && !s.categories.includes(f.cat)) return false;
      if (q) {
        const r = data.regions.find((x) => x.id === s.region) || {};
        const hay = [s.name, s.nativeName, s.city, s.tagline, r.name, ...(s.highlights || [])].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    if (f.sort === 'az') list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
    else if (f.sort === 'region') list = list.slice().sort((a, b) => a.region.localeCompare(b.region) || a.name.localeCompare(b.name));
    else list = list.slice().sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return list;
  }

  function drawSpots(cid, data) {
    const list = filterSpots(data);
    $('#spotGrid').innerHTML = list.length ? list.map((s, i) => spotCard(cid, data, s, i)).join('') : `<div class="empty">🔍 ${t('common.noResults')}</div>`;
    $('#spotCount').textContent = `${list.length} / ${data.spots.length} ${t('common.spots')}`;
    observeReveal();
  }

  function bindCountry(cid, data) {
    drawSpots(cid, data);
    $('#spotQ').addEventListener('input', (e) => { state.filters.q = e.target.value; drawSpots(cid, data); });
    $('#spotRegion').addEventListener('change', (e) => { state.filters.region = e.target.value; drawSpots(cid, data); });
    $('#spotSort').value = state.filters.sort;
    $('#spotSort').addEventListener('change', (e) => { state.filters.sort = e.target.value; drawSpots(cid, data); });
    $('#spotCats').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      state.filters.cat = b.dataset.cat;
      $$('#spotCats button').forEach((x) => x.classList.toggle('active', x === b));
      drawSpots(cid, data);
    });
    $$('.region__spots').forEach((b) => b.addEventListener('click', () => {
      state.filters.region = b.dataset.region; state.filters.cat = 'all'; state.filters.q = '';
      $('#spotRegion').value = b.dataset.region; $('#spotQ').value = '';
      $$('#spotCats button').forEach((x) => x.classList.toggle('active', x.dataset.cat === 'all'));
      drawSpots(cid, data); jump('spots');
    }));
    initMap('countryMap', cid, data, data.spots);
    initCounters();
    initSubnav();
  }

  /* ---------------- SPOT ---------------- */
  function renderSpot(cid, data, s) {
    document.title = `${s.name} — ${data.name} — TouristsGuide`;
    const r = data.regions.find((x) => x.id === s.region) || {};
    const gal = media(cid, s.id);
    const idx = data.spots.findIndex((x) => x.id === s.id);
    const prev = data.spots[(idx - 1 + data.spots.length) % data.spots.length];
    const next = data.spots[(idx + 1) % data.spots.length];
    const related = data.spots.filter((x) => x.region === s.region && x.id !== s.id).slice(0, 3);
    const more = related.length < 3 ? data.spots.filter((x) => x.region !== s.region && x.featured && x.id !== s.id).slice(0, 3 - related.length) : [];
    const T = s.tickets;
    const sec = (id, title, body, cls = '') => body ? `<section class="block ${cls} reveal" id="b-${id}"><h2>${title}</h2>${body}</section>` : '';
    const paras = (arr) => (arr && arr.length ? arr.map((p) => `<p>${esc(p)}</p>`).join('') : '');
    const toc = [['overview', t('spot.overview')], ['history', t('spot.history')], s.religious && ['religious', t('spot.religious')], ['highlights', t('spot.highlights')], gal.length && ['gallery', t('spot.gallery')], ['visiting', t('spot.visiting')], ['getting', t('spot.gettingThere')], ['tips', t('spot.tips')]].filter(Boolean);

    return `
      <section class="hero hero--spot">
        <div class="hero__bg">${img(gal[0] && gal[0].src, s.name, 'hero__img', 'loading="eager" fetchpriority="high"')}</div>
        <div class="hero__shade"></div>
        <div class="container hero__content">
          <nav class="crumbs reveal"><a href="#/">${t('nav.home')}</a><span>/</span><a href="#/c/${cid}">${esc(data.name)}</a><span>/</span><span>${esc(r.name)}</span></nav>
          <div class="badges reveal">
            ${s.categories.map((c) => data.categories[c] ? `<span class="badge">${data.categories[c].icon} ${esc(data.categories[c].label)}</span>` : '').join('')}
            ${s.unesco ? `<span class="badge badge--unesco">🏛️ ${t('common.unesco')}</span>` : ''}
            ${s.muslimsOnly ? `<span class="badge badge--muslim">☪️ ${t('common.muslimsOnly')}</span>` : ''}
            ${s.status === 'closed' ? `<span class="badge badge--closed">⛔ ${t('common.closed')}</span>` : ''}
            ${s.status === 'check' ? `<span class="badge badge--check">⚠️ ${t('common.checkStatus')}</span>` : ''}
          </div>
          <h1 class="hero__title reveal">${esc(s.name)}</h1>
          ${s.nativeName ? `<p class="hero__native reveal"><bdi lang="ar">${esc(s.nativeName)}</bdi></p>` : ''}
          <p class="hero__sub reveal">${esc(s.tagline)}</p>
          <p class="hero__loc reveal">${icon.pin} ${esc(s.city)}, ${esc(r.name)}</p>
        </div>
      </section>

      <div class="container spot-layout">
        <aside class="spot-aside">
          <div class="quick glass-card">
            <h3>${t('spot.quickInfo')}</h3>
            <ul class="quick__list">
              <li>${icon.clock}<div><small>${t('spot.hours')}</small><b>${esc(s.hours.summary)}</b></div></li>
              <li>${icon.ticket}<div><small>${t('spot.ticketRequired')}</small><b><span class="pill pill--${ticketClass(T.required)}">${ticketLabel(T.required)}</span> ${esc(T.price)}</b></div></li>
              <li>${icon.hour}<div><small>${t('spot.duration')}</small><b>${esc(s.duration)}</b></div></li>
              <li>${icon.cal}<div><small>${t('spot.bestTime')}</small><b>${esc(s.bestTime)}</b></div></li>
              <li>${icon.pin}<div><small>${t('spot.location')}</small><b>${esc(s.city)}, ${esc(r.name)}</b>${s.approx ? `<em class="approx">${t('spot.approxLocation')}</em>` : ''}</div></li>
            </ul>
            ${T.links && T.links[0] ? `<a class="btn btn--primary btn--block" href="${esc(T.links[0].url)}" target="_blank" rel="noopener">${icon.ticket} ${T.required ? t('common.bookNow') : esc(T.links[0].label)}</a>` : ''}
            <a class="btn btn--ghost btn--block" href="${mapsUrl(s.coords)}" target="_blank" rel="noopener">${icon.pin} ${t('common.openMap')}</a>
            <button class="btn btn--ghost btn--block" data-share>${icon.share} ${t('common.copyLink')}</button>
          </div>
          <nav class="toc glass-card" aria-label="On this page">
            ${toc.map(([id, l]) => `<button data-to="b-${id}">${esc(l)}</button>`).join('')}
          </nav>
        </aside>

        <article class="spot-main">
          ${s.notice ? `<div class="callout ${s.status === 'check' ? 'callout--check' : 'callout--closed'} reveal" role="alert"><b>${s.status === 'check' ? '⚠️' : '⛔'} ${t('spot.noticeTitle')}:</b> ${esc(s.notice)}</div>` : ''}
          ${s.access ? `<div class="callout callout--warn reveal"><b>☪️ ${t('spot.nonMuslimNote')}:</b> ${esc(s.access)}</div>` : ''}
          ${sec('overview', t('spot.overview'), paras(s.overview))}
          ${sec('history', t('spot.history'), paras(s.history))}
          ${s.religious ? sec('religious', '🕌 ' + t('spot.religious'), paras(s.religious), 'block--faith') : ''}
          ${sec('highlights', t('spot.highlights'), `<ul class="ticks">${(s.highlights || []).map((h) => `<li>${esc(h)}</li>`).join('')}</ul>`)}
          ${gal.length ? sec('gallery', `${t('spot.gallery')} <small class="muted">${gal.length} ${t('common.photos')}</small>`, `
            <div class="gallery">${gal.map((g, i) => `<button class="gallery__item ${i === 0 ? 'gallery__item--wide' : ''}" data-lb-index="${i}" aria-label="Open photo ${i + 1}">${img(g.src, s.name, '', '', i === 0 ? 1280 : 500)}</button>`).join('')}</div>
            <p class="note">${esc(t('common.photoCredit'))}</p>`) : ''}

          ${sec('visiting', t('spot.visiting'), `
            <div class="visit">
              <div class="visit__card">
                <h3>${icon.clock} ${t('spot.hours')}</h3>
                <p class="visit__big">${esc(s.hours.summary)}</p>
                ${s.hours.details && s.hours.details.length ? `<ul class="dots">${s.hours.details.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>` : ''}
                ${s.hours.note ? `<p class="muted small">ℹ️ ${esc(s.hours.note)}</p>` : ''}
              </div>
              <div class="visit__card">
                <h3>${icon.ticket} ${t('spot.tickets')}</h3>
                <div class="visit__row"><span>${t('spot.ticketRequired')}</span><span class="pill pill--${ticketClass(T.required)}">${ticketLabel(T.required)}</span></div>
                <div class="visit__row"><span>${t('spot.price')}</span><b>${esc(T.price)}</b></div>
                <h4>${t('spot.howToBook')}</h4>
                <ol class="steps">${T.how.map((h) => `<li>${esc(h)}</li>`).join('')}</ol>
                ${T.links && T.links.length ? `<div class="btn-row">${T.links.map((l) => `<a class="btn btn--primary btn--sm" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ${icon.ext}</a>`).join('')}</div>` : ''}
              </div>
            </div>
            <p class="note">⚠️ ${esc(t('common.disclaimer'))}</p>`)}

          ${sec('getting', t('spot.gettingThere'), `
            <div class="route">
              <div>${icon.plane}<div><small>${t('spot.nearestAirport')}</small><p>${esc(s.gettingThere.airport)}</p></div></div>
              <div>${icon.car}<div><small>${t('spot.byRoad')}</small><p>${esc(s.gettingThere.road)}</p></div></div>
              <div>${icon.bus}<div><small>${t('spot.publicTransport')}</small><p>${esc(s.gettingThere.transport)}</p></div></div>
            </div>
            <div class="map map--sm" id="spotMap"></div>`)}

          ${sec('tips', t('spot.tips'), `
            ${s.dress ? `<div class="callout"><b>👗 ${t('spot.dressCode')}:</b> ${esc(s.dress)}</div>` : ''}
            <ul class="ticks ticks--tips">${(s.tips || []).map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
            ${s.wiki ? `<p><a class="link" href="${esc(s.wiki)}" target="_blank" rel="noopener">${t('common.readMore')} (Wikipedia) ${icon.ext}</a></p>` : ''}`)}

          <nav class="pager reveal">
            <a href="#/c/${cid}/spot/${prev.id}"><small>← ${t('common.prev')}</small><b>${esc(prev.name)}</b></a>
            <a href="#/c/${cid}/spot/${next.id}" class="pager__next"><small>${t('common.next')} →</small><b>${esc(next.name)}</b></a>
          </nav>
        </article>
      </div>

      <section class="section section--alt">
        <div class="container">
          <div class="section__head reveal"><h2>${related.length ? `${t('spot.morePlaces')} ${esc(r.name)}` : t('spot.related')}</h2></div>
          <div class="spot-grid">${related.concat(more).map((x, i) => spotCard(cid, data, x, i)).join('')}</div>
        </div>
      </section>`;
  }

  function bindSpot(cid, data, s) {
    initMap('spotMap', cid, data, [s], 9);
    const gal = media(cid, s.id);
    $$('[data-lb-index]').forEach((b) => b.addEventListener('click', () => openLightbox(gal, +b.dataset.lbIndex, s.name)));
    $$('.toc [data-to]').forEach((b) => b.addEventListener('click', () => {
      const el = document.getElementById(b.dataset.to); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 90, behavior: 'smooth' });
    }));
    const tocBtns = $$('.toc [data-to]');
    const io = new IntersectionObserver((ents) => ents.forEach((e) => {
      if (e.isIntersecting) tocBtns.forEach((b) => b.classList.toggle('active', b.dataset.to === e.target.id));
    }), { rootMargin: '-40% 0px -55% 0px' });
    tocBtns.forEach((b) => { const el = document.getElementById(b.dataset.to); if (el) io.observe(el); });
    cleanup.push(() => io.disconnect());
  }

  /* ---------------- Map (Leaflet) ---------------- */
  let maps = [];
  function initMap(elId, cid, data, spots, zoom) {
    const el = document.getElementById(elId);
    if (!el || !window.L) { if (el) el.innerHTML = '<div class="empty">Map unavailable offline.</div>'; return; }
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    const map = L.map(el, { scrollWheelZoom: false, attributionControl: true });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
      className: 'tiles'
    }).addTo(map);
    const bounds = [];
    spots.forEach((s) => {
      const cat = data.categories[s.categories[0]] || { icon: '📍' };
      const m = L.marker(s.coords, { icon: L.divIcon({ className: 'pin', html: `<span><i>${cat.icon}</i></span>`, iconSize: [36, 36], iconAnchor: [18, 34] }) }).addTo(map);
      m.bindPopup(`<div class="popup">${img(cover(cid, s.id), s.name, '', '', 500)}<b>${esc(s.name)}</b><small>${esc(s.city)}</small>${spots.length > 1 ? `<a href="#/c/${cid}/spot/${s.id}">${t('common.viewDetails')} →</a>` : `<a href="${mapsUrl(s.coords)}" target="_blank" rel="noopener">${t('common.openMap')} →</a>`}</div>`);
      bounds.push(s.coords);
    });
    if (spots.length === 1) map.setView(spots[0].coords, zoom || 10);
    else map.fitBounds(bounds, { padding: [30, 30] });
    el.addEventListener('click', () => map.scrollWheelZoom.enable(), { once: true });
    maps.push(map);
  }

  /* ---------------- Effects ---------------- */
  let revealIO;
  function observeReveal() {
    if (!revealIO) revealIO = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); } }), { threshold: 0.08 });
    $$('.reveal:not(.in)').forEach((el) => revealIO.observe(el));
  }

  function initCounters() {
    const io = new IntersectionObserver((ents) => ents.forEach((e) => {
      if (!e.isIntersecting) return; io.unobserve(e.target);
      const el = e.target, end = +el.dataset.count, dec = +el.dataset.dec || 0, compact = el.dataset.fmt === 'compact';
      const show = (v) => { el.textContent = compact ? (v >= 1e6 ? fmt(v / 1e6, 2) + 'M' : fmt(Math.round(v))) : fmt(v, dec); };
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return show(end);
      const t0 = performance.now(), dur = 1600;
      const step = (now) => { const p = Math.min(1, (now - t0) / dur); show(end * (1 - Math.pow(1 - p, 4))); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }), { threshold: 0.4 });
    $$('[data-count]').forEach((el) => io.observe(el));
    cleanup.push(() => io.disconnect());
  }

  function initSubnav() {
    const btns = $$('#subnav [data-jump]');
    const io = new IntersectionObserver((ents) => ents.forEach((e) => {
      if (e.isIntersecting) btns.forEach((b) => b.classList.toggle('active', 'sec-' + b.dataset.jump === e.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    btns.forEach((b) => { const el = document.getElementById('sec-' + b.dataset.jump); if (el) io.observe(el); });
    cleanup.push(() => io.disconnect());
  }

  function jump(id) {
    const el = document.getElementById('sec-' + id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 110, behavior: 'smooth' });
  }

  /* ---------------- Lightbox ---------------- */
  const lb = { list: [], i: 0, title: '' };
  function openLightbox(list, i, title) { Object.assign(lb, { list, i, title }); $('#lightbox').hidden = false; document.body.classList.add('locked'); showLb(); }
  function showLb() {
    const g = lb.list[lb.i]; if (!g) return;
    $('#lbImg').src = g.src; $('#lbImg').alt = lb.title;
    $('#lbImg').onerror = function () { this.onerror = null; this.src = g.src; };
    $('#lbCap').innerHTML = `<span>${lb.i + 1} / ${lb.list.length}</span> ${g.credit ? esc(g.credit) + ' · ' : ''}${g.license ? esc(g.license) + ' · ' : ''}${g.page ? `<a href="${esc(g.page)}" target="_blank" rel="noopener">Source</a>` : ''}`;
  }
  function closeLb() { $('#lightbox').hidden = true; document.body.classList.remove('locked'); }
  $('#lightbox').addEventListener('click', (e) => {
    const a = e.target.closest('[data-lb]');
    if (a) { const k = a.dataset.lb; if (k === 'close') closeLb(); if (k === 'prev') { lb.i = (lb.i - 1 + lb.list.length) % lb.list.length; showLb(); } if (k === 'next') { lb.i = (lb.i + 1) % lb.list.length; showLb(); } }
    else if (e.target.id === 'lightbox') closeLb();
  });

  /* ---------------- Search palette ---------------- */
  async function openSearch() {
    $('#searchModal').hidden = false; document.body.classList.add('locked');
    const inp = $('#searchInput'); inp.value = ''; setTimeout(() => inp.focus(), 30);
    await Promise.all(CFG.countries.filter((c) => c.status === 'live').map((c) => loadCountry(c.id)));
    runSearch('');
  }
  function closeSearch() { $('#searchModal').hidden = true; document.body.classList.remove('locked'); }
  function runSearch(q) {
    q = q.trim().toLowerCase();
    const out = [];
    CFG.countries.filter((c) => c.status === 'live').forEach((c) => {
      const d = store.countries[c.id + ':' + state.lang] || store.countries[c.id + ':en']; if (!d) return;
      d.spots.forEach((s) => {
        const r = d.regions.find((x) => x.id === s.region) || {};
        const hay = [s.name, s.nativeName, s.city, r.name, s.tagline, d.name].join(' ').toLowerCase();
        if (!q || hay.includes(q)) out.push({ c, d, s, r });
      });
      d.regions.forEach((r) => { if (q && (r.name + ' ' + r.capital).toLowerCase().includes(q)) out.unshift({ c, d, region: r }); });
    });
    $('#searchResults').innerHTML = out.slice(0, 40).map((o, i) => o.region
      ? `<li><a href="#/c/${o.c.id}" data-region-jump="${o.region.id}" class="${i === 0 ? 'hl' : ''}"><span class="sr__thumb">🗺️</span><span><b>${esc(o.region.name)}</b><small>${t('common.province')} · ${esc(o.d.name)}</small></span></a></li>`
      : `<li><a href="#/c/${o.c.id}/spot/${o.s.id}" class="${i === 0 ? 'hl' : ''}"><span class="sr__thumb">${img(cover(o.c.id, o.s.id), '', '', '', 330)}</span><span><b>${esc(o.s.name)}</b><small>${esc(o.s.city)} · ${esc(o.r.name)} · ${o.c.flag}</small></span></a></li>`).join('')
      || `<li class="empty">${t('common.noResults')}</li>`;
  }
  $('#searchInput').addEventListener('input', (e) => runSearch(e.target.value));
  $('#searchInput').addEventListener('keydown', (e) => {
    const items = $$('#searchResults a'); let i = items.findIndex((a) => a.classList.contains('hl'));
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault(); if (i >= 0) items[i].classList.remove('hl');
      i = e.key === 'ArrowDown' ? Math.min(items.length - 1, i + 1) : Math.max(0, i - 1);
      if (items[i]) { items[i].classList.add('hl'); items[i].scrollIntoView({ block: 'nearest' }); }
    } else if (e.key === 'Enter' && items[i]) { items[i].click(); }
  });
  $('#searchResults').addEventListener('click', (e) => {
    const a = e.target.closest('a'); if (!a) return;
    if (a.dataset.regionJump) { state.filters = { ...state.filters, region: a.dataset.regionJump, q: '', cat: 'all' }; pendingJump = 'spots'; }
    closeSearch();
  });
  $('#searchModal').addEventListener('click', (e) => { if (e.target.dataset.close !== undefined) closeSearch(); });

  /* ---------------- Global events ---------------- */
  let pendingJump = null;
  document.addEventListener('click', (e) => {
    const j = e.target.closest('[data-jump]');
    if (j) {
      e.preventDefault();
      const target = j.getAttribute('href');
      if (target && location.hash !== target) { pendingJump = j.dataset.jump; location.hash = target; } else jump(j.dataset.jump);
      document.body.classList.remove('menu-open');
    }
    if (e.target.closest('[data-open-search]')) openSearch();
    const lang = e.target.closest('[data-lang]');
    if (lang) { state.lang = lang.dataset.lang; try { localStorage.setItem('tg-lang', state.lang); } catch (_) {} route(); }
    const lb2 = e.target.closest('.lang__btn');
    if (lb2) { const open = $('#langSwitcher').classList.toggle('open'); lb2.setAttribute('aria-expanded', open); }
    else if (!e.target.closest('.lang')) $('#langSwitcher').classList.remove('open');
    if (e.target.closest('[data-share]')) {
      const done = () => toast(t('common.copied'));
      if (navigator.share) navigator.share({ title: document.title, url: location.href }).catch(() => {});
      else if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(done, done);
    }
    if (e.target.closest('#navLinks a')) document.body.classList.remove('menu-open');
  });
  $('#searchBtn').addEventListener('click', openSearch);
  $('#burgerBtn').addEventListener('click', () => document.body.classList.toggle('menu-open'));
  $('#themeBtn').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('tg-theme', next); } catch (_) {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = next === 'dark' ? '#0b1220' : '#f7f3ec';
    $('#themeBtn').blur();
  });
  $('#toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeSearch(); closeLb(); }
    if (!$('#lightbox').hidden) { if (e.key === 'ArrowRight') $('[data-lb="next"]').click(); if (e.key === 'ArrowLeft') $('[data-lb="prev"]').click(); }
    if ((e.key === '/' || (e.key === 'k' && (e.ctrlKey || e.metaKey))) && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
  });
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const h = document.documentElement.scrollHeight - innerHeight;
      $('#scrollProgress').style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
      $('#nav').classList.toggle('nav--solid', scrollY > 40);
      $('#toTop').classList.toggle('show', scrollY > 800);
      const bg = $('.hero__img'); if (bg && scrollY < innerHeight) bg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.08)`;
      ticking = false;
    });
  }, { passive: true });

  function toast(msg) {
    const el = document.createElement('div'); el.className = 'toast'; el.textContent = msg;
    document.body.appendChild(el); setTimeout(() => el.classList.add('show'), 10);
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 1800);
  }

  /* ---------------- Router ---------------- */
  let cleanup = [];
  let lastCountry = null;
  async function route() {
    cleanup.forEach((f) => f()); cleanup = [];
    maps.forEach((m) => m.remove()); maps = [];
    const app = $('#app');
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    try {
      if (parts[0] === 'c' && parts[1]) {
        const cid = parts[1];
        const cfg = CFG.countries.find((c) => c.id === cid && c.status === 'live');
        if (!cfg) throw new Error('notfound');
        renderChrome(cid);
        if (!store.countries[cid + ':' + state.lang]) app.innerHTML = '<div class="loader"><span></span></div>';
        const data = await loadCountry(cid);
        if (!data) throw new Error('notfound');
        if (cid !== lastCountry && !pendingJump) state.filters = { q: '', region: 'all', cat: 'all', sort: 'featured', view: 'grid' };
        lastCountry = cid;
        if (parts[2] === 'spot' && parts[3]) {
          const s = data.spots.find((x) => x.id === parts[3]); if (!s) throw new Error('notfound');
          app.innerHTML = renderSpot(cid, data, s); window.scrollTo(0, 0); bindSpot(cid, data, s);
        } else {
          app.innerHTML = renderCountry(cid, data); window.scrollTo(0, 0); bindCountry(cid, data);
        }
      } else {
        renderChrome(null);
        app.innerHTML = renderHome(); window.scrollTo(0, 0);
      }
    } catch (err) {
      console.error(err);
      app.innerHTML = `<section class="section notfound"><div class="container"><h1>404</h1><p>Page not found.</p><a class="btn btn--primary" href="#/">${t('nav.home')}</a></div></section>`;
    }
    $$('#navLinks a').forEach((a) => a.classList.toggle('active', !a.dataset.jump && ('#' + location.hash.replace(/^#/, '')).startsWith(a.getAttribute('href')) && (a.getAttribute('href') !== '#/' || parts.length === 0)));
    observeReveal();
    if (pendingJump) { const j = pendingJump; pendingJump = null; setTimeout(() => jump(j), 120); }
  }

  window.addEventListener('hashchange', route);
  route();
})();
