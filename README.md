# TouristsGuide

A travel guide website that covers a country spot by spot. Each country page has:

1. **A country overview**: an intro, key facts, geography, history, culture, climate and the UNESCO sites.
2. **Administrative divisions**: every province (region), with its capital, area, population and governorate list.
3. **Tourist spots**: each spot has its province, history, religious significance, highlights, a photo gallery with a full-screen viewer, opening hours, ticket and booking details with official links, how to get there, an interactive map and travel tips.

Countries live on the site:

| Country | Spots | Divisions | Tour Plan |
|---|---|---|---|
| 🇸🇦 Saudi Arabia | 306 | 13 provinces, 139 governorates | yes |
| 🇹🇷 Türkiye | 88 | 7 regions, 81 provinces | yes |

The Tour Plan wizard is per country and needs a `data/<country>/plan.js` file. Countries without one simply do not show the Tour Plan link.

## Features
- Dark and light themes, glass styling, parallax heroes, scroll reveal effects and animated counters
- Instant search (press `/` or `Ctrl+K`), filters by province and category, and sorting
- Interactive Leaflet/OpenStreetMap maps for each country and spot
- Layouts for phone, tablet and desktop, with RTL support ready for Arabic or Urdu
- **Tour Plan** wizard (`#/c/<country>/plan`): visa check by nationality/residence, dates, group type, transport and arrival airport → a day-by-day itinerary with bookings, documents, lodging areas and a budget. Generic logic lives in `js/planner.js`; every country-specific rule is in `data/<country>/plan.js`.
- Plain HTML, CSS and JS with no build step. It runs from any static host (GitHub Pages, Netlify) or straight from `index.html`.

## Run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Project structure
```
index.html              page shell
css/styles.css          design system & layout
js/config.js            languages + country registry
js/app.js               router, rendering, search, maps, lightbox
i18n/en.js              interface text (English)
data/<country>/en.js    all content for that country (English)
data/<country>/media.js photos for each spot (Wikimedia Commons)
data/<country>/plan.js  Tour Plan rules (optional)
assets/photos/<spot-id>/  downloaded photos + -sm thumbnails
```

## Adding content
- **Add or edit a spot:** add or edit an object in `spots` in `data/<country>/en.js`. The template comment at the top of that file lists the fields.
- **Add photos:** add `{ src, credit, license, page }` entries under the spot id in `data/<country>/media.js`.
- **Add a country:** create `data/<new-country>/en.js` (copy an existing file as a template) and `media.js`. Then set the country's `status: 'live'` in `js/config.js` and give it a `cover` image. Set `nativeLang` in the data file so native-script names are tagged with the right language. Add `plan.js` only if you want the Tour Plan for that country.
- **Check a data file** before committing:
  ```bash
  node tools/validate.js data/<country>/en.js data/<country>/media.js
  ```
  It checks ids, regions, categories, coordinates, required fields and UNESCO cross-references.
- **Add a language:** copy `i18n/en.js` to `i18n/<code>.js` and translate it. Add the language to `languages` in `js/config.js` and a `<script>` tag in `index.html`. For translated content, create `data/<country>/<code>.js`. If that file is missing, the site falls back to English.

### Writing a country's plan.js
`js/planner.js` contains no country-specific text. Each `data/<country>/plan.js` supplies:

| Key | What it does |
|---|---|
| `country`, `currency`, `defaultAirport` | ISO code, budget currency, pre-selected gateway |
| `visa` | ordered rules (`own`, `free`, `evisa`, `resident`, `visaHolder`, `none`), each `{codes, title, text}`; the first match wins |
| `faith` | **optional.** Adds the religion question and pilgrimage-first routing (permits, ritual documents, the ihram note). Omit it and the planner never asks about religion — Türkiye omits it, Saudi Arabia uses it. |
| `tour.core` / `tour.extras` | which clusters a trip from abroad starts with per arrival airport, and the optional regions offered |
| `clusters` | ordered spot ids per city; `dayTrip: true` for long-drive days, `minSpots` to protect a cluster when the plan is trimmed |
| `hubs`, `airports`, `corridors` | one base city per region, gateways, and how to travel between regions |
| `arrival` | what to do on landing, per airport: `{car, public, pilgrim?}` |
| `costs`, `stay` | budget bands and area advice per city |
| `bus`, `rideHailing`, `railBookings`, `strenuous`, `tips` | local operators, spots to skip for families, standing advice |

Check a planner after editing:
```bash
node tools/plan-check.js
```

## Data notes
Opening hours, prices and booking rules change often, and Türkiye raises its museum fees in euros most years. Every price on the site is indicative; each page links to the official source (Nusuk and VisitSaudi for Saudi Arabia, muze.gov.tr and GoTürkiye for Türkiye). Photos come from Wikimedia Commons, and each image links to its author and license page.

### Marking a spot as closed
Add these two fields to a spot in `data/<country>/en.js`:
```js
status: 'closed',
notice: 'This site is currently closed. We will update this page when it reopens.',
```
The card gets a red "Temporarily closed" badge and the spot page shows the notice at the top. When the spot reopens, delete both lines.

If a closure is **not confirmed**, use `status: 'check'` instead. That shows an orange "Check status before visiting" badge and notice.
