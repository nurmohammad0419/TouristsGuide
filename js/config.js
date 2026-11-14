/*
 * TouristsGuide configuration
 * ---------------------------------------------------------------
 * HOW TO ADD A NEW LANGUAGE
 *   1. Copy i18n/en.js to i18n/<code>.js and translate the strings.
 *   2. Add the language below (set dir: 'rtl' for Arabic, Urdu, ...).
 *   3. Optionally translate country content: data/<country>/<code>.js
 *      (if a country file is missing for a language, English is used).
 *
 * HOW TO ADD A NEW COUNTRY
 *   1. Create data/<country-id>/en.js (copy saudi-arabia/en.js as a template).
 *   2. Optionally create data/<country-id>/media.js for photos.
 *   3. Add an entry to TG_CONFIG.countries below with status: 'live'.
 */
window.TG_CONFIG = {
  defaultLang: 'en',

  languages: [
    { code: 'en', label: 'English', short: 'EN', dir: 'ltr' }
    // { code: 'bn', label: 'বাংলা', short: 'BN', dir: 'ltr' },
    // { code: 'ar', label: 'العربية', short: 'AR', dir: 'rtl' },
  ],

  countries: [
    {
      id: 'saudi-arabia',
      name: 'Saudi Arabia',
      flag: '🇸🇦',
      region: 'Middle East',
      status: 'live',
      tagline: 'Holy cities, Nabataean tombs, coral seas and endless dunes.',
      cover: 'assets/photos/hegra/1.jpg'
    },
    { id: 'turkey', name: 'Türkiye', flag: '🇹🇷', region: 'Europe / Asia', status: 'soon', tagline: 'Where continents meet.' },
    { id: 'egypt', name: 'Egypt', flag: '🇪🇬', region: 'Africa', status: 'soon', tagline: 'Pharaohs, the Nile and the Red Sea.' },
    { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾', region: 'Southeast Asia', status: 'soon', tagline: 'Rainforests, islands and skylines.' },
    { id: 'bangladesh', name: 'Bangladesh', flag: '🇧🇩', region: 'South Asia', status: 'soon', tagline: 'Rivers, mangroves and the longest beach.' },
    { id: 'uae', name: 'United Arab Emirates', flag: '🇦🇪', region: 'Middle East', status: 'soon', tagline: 'Desert meets the future.' }
  ]
};
