# TouristsGuide

A travel guide website that covers a country spot by spot. Each country page has:

1. **A country overview**: an intro, key facts, geography, history, culture, climate and the UNESCO sites.
2. **Administrative divisions**: every province (region), with its capital, area, population and governorate list.
3. **Tourist spots**: each spot has its province, history, religious significance, highlights, a photo gallery with a full-screen viewer, opening hours, ticket and booking details with official links, how to get there, an interactive map and travel tips.

The first country is **Saudi Arabia**. It has 129 spots across all 13 provinces and lists 139 governorates.

## Features
- Dark and light themes, glass styling, parallax heroes, scroll reveal effects and animated counters
- Instant search (press `/` or `Ctrl+K`), filters by province and category, and sorting
- Interactive Leaflet/OpenStreetMap maps for each country and spot
- Layouts for phone, tablet and desktop, with RTL support ready for Arabic or Urdu
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
data/saudi-arabia/en.js all Saudi Arabia content (English)
data/saudi-arabia/media.js  photos for each spot (Wikimedia Commons)
```

## Adding content
- **Add or edit a spot:** add or edit an object in `spots` in `data/<country>/en.js`. The template comment at the top of that file lists the fields.
- **Add photos:** add `{ src, credit, license, page }` entries under the spot id in `data/<country>/media.js`.
- **Add a country:** create `data/<new-country>/en.js` (copy the Saudi file as a template) and `media.js`. Then set the country's `status: 'live'` in `js/config.js`.
- **Add a language:** copy `i18n/en.js` to `i18n/<code>.js` and translate it. Add the language to `languages` in `js/config.js` and a `<script>` tag in `index.html`. For translated content, create `data/<country>/<code>.js`. If that file is missing, the site falls back to English.

## Data notes
Opening hours, prices and booking rules change often. Each page says so and links to the official source (Nusuk, Experience AlUla, Diriyah, Ithra, VisitSaudi and others). Photos come from Wikimedia Commons, and each image links to its author and license page.

### Marking a spot as closed
Add these two fields to a spot in `data/<country>/en.js`:
```js
status: 'closed',
notice: 'This site is currently closed. We will update this page when it reopens.',
```
The card gets a red "Temporarily closed" badge and the spot page shows the notice at the top. When the spot reopens, delete both lines.

If a closure is **not confirmed**, use `status: 'check'` instead. That shows an orange "Check status before visiting" badge and notice.
