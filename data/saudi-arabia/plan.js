/*
 * Saudi Arabia — Tour Planner data
 * ---------------------------------------------------------------
 * Used by js/planner.js. Everything here is editable:
 *   visa      : entry rules by nationality / residence
 *   airports  : international gateways and the provinces they serve
 *   hubs      : one base city per province (for distances & routing)
 *   corridors : intercity rail / flight links between hubs
 *   templates : ordered spot lists the planner draws from
 * Rules change often — keep the "reviewed" date current.
 */
TG.registerPlanner('saudi-arabia', {
  reviewed: 'November 2026',

  visa: {
    portal: 'https://visa.visitsaudi.com',
    nusuk: 'https://www.nusuk.sa',
    // Citizens of GCC states: no visa required
    gcc: ['AE', 'BH', 'KW', 'OM', 'QA'],
    // Nationalities eligible for the tourist eVisa / visa on arrival
    evisa: ['AD', 'AL', 'AR', 'AT', 'AU', 'AZ', 'BA', 'BE', 'BG', 'BN', 'BR', 'CA', 'CH', 'CN', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GE', 'GR', 'HK', 'HR', 'HU', 'IE', 'IS', 'IT', 'JP', 'KG', 'KR', 'KZ', 'LI', 'LT', 'LU', 'LV', 'MC', 'MD', 'ME', 'MK', 'MO', 'MT', 'MU', 'MV', 'MY', 'NL', 'NO', 'NZ', 'PA', 'PL', 'PT', 'RO', 'RS', 'RU', 'SC', 'SE', 'SG', 'SI', 'SK', 'SM', 'TH', 'TJ', 'TR', 'TW', 'UA', 'US', 'UZ', 'VA', 'ZA'],
    // Residents of these countries (any nationality) can apply for the eVisa
    residentOf: ['AE', 'BH', 'KW', 'OM', 'QA', 'US', 'GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'CH', 'SE', 'NO', 'DK', 'FI', 'IE', 'PT', 'GR', 'PL', 'CZ', 'HU', 'LU', 'IS', 'LI', 'MT', 'SK', 'SI', 'EE', 'LV', 'LT', 'HR', 'CA', 'AU', 'NZ', 'JP', 'KR', 'SG'],
    // Holders of a valid, used US / UK / Schengen visa can apply for the eVisa or visa on arrival
    visaHolderOf: 'a valid US, UK or Schengen visa (used at least once)'
  },

  countries: [
    ['AF', 'Afghanistan'], ['AL', 'Albania'], ['DZ', 'Algeria'], ['AD', 'Andorra'], ['AR', 'Argentina'], ['AU', 'Australia'], ['AT', 'Austria'], ['AZ', 'Azerbaijan'], ['BH', 'Bahrain'], ['BD', 'Bangladesh'], ['BE', 'Belgium'], ['BA', 'Bosnia & Herzegovina'], ['BR', 'Brazil'], ['BN', 'Brunei'], ['BG', 'Bulgaria'], ['KH', 'Cambodia'], ['CM', 'Cameroon'], ['CA', 'Canada'], ['CL', 'Chile'], ['CN', 'China'], ['CO', 'Colombia'], ['HR', 'Croatia'], ['CY', 'Cyprus'], ['CZ', 'Czechia'], ['DK', 'Denmark'], ['EG', 'Egypt'], ['EE', 'Estonia'], ['ET', 'Ethiopia'], ['FI', 'Finland'], ['FR', 'France'], ['GE', 'Georgia'], ['DE', 'Germany'], ['GH', 'Ghana'], ['GR', 'Greece'], ['HK', 'Hong Kong'], ['HU', 'Hungary'], ['IS', 'Iceland'], ['IN', 'India'], ['ID', 'Indonesia'], ['IR', 'Iran'], ['IQ', 'Iraq'], ['IE', 'Ireland'], ['IT', 'Italy'], ['JP', 'Japan'], ['JO', 'Jordan'], ['KZ', 'Kazakhstan'], ['KE', 'Kenya'], ['KW', 'Kuwait'], ['KG', 'Kyrgyzstan'], ['LV', 'Latvia'], ['LB', 'Lebanon'], ['LY', 'Libya'], ['LI', 'Liechtenstein'], ['LT', 'Lithuania'], ['LU', 'Luxembourg'], ['MO', 'Macau'], ['MY', 'Malaysia'], ['MV', 'Maldives'], ['MT', 'Malta'], ['MU', 'Mauritius'], ['MX', 'Mexico'], ['MD', 'Moldova'], ['MC', 'Monaco'], ['ME', 'Montenegro'], ['MA', 'Morocco'], ['NP', 'Nepal'], ['NL', 'Netherlands'], ['NZ', 'New Zealand'], ['NG', 'Nigeria'], ['MK', 'North Macedonia'], ['NO', 'Norway'], ['OM', 'Oman'], ['PK', 'Pakistan'], ['PA', 'Panama'], ['PH', 'Philippines'], ['PL', 'Poland'], ['PT', 'Portugal'], ['QA', 'Qatar'], ['RO', 'Romania'], ['RU', 'Russia'], ['SM', 'San Marino'], ['SA', 'Saudi Arabia'], ['SN', 'Senegal'], ['RS', 'Serbia'], ['SC', 'Seychelles'], ['SG', 'Singapore'], ['SK', 'Slovakia'], ['SI', 'Slovenia'], ['SO', 'Somalia'], ['ZA', 'South Africa'], ['KR', 'South Korea'], ['ES', 'Spain'], ['LK', 'Sri Lanka'], ['SD', 'Sudan'], ['SE', 'Sweden'], ['CH', 'Switzerland'], ['SY', 'Syria'], ['TW', 'Taiwan'], ['TJ', 'Tajikistan'], ['TZ', 'Tanzania'], ['TH', 'Thailand'], ['TN', 'Tunisia'], ['TR', 'Türkiye'], ['TM', 'Turkmenistan'], ['UG', 'Uganda'], ['UA', 'Ukraine'], ['AE', 'United Arab Emirates'], ['GB', 'United Kingdom'], ['US', 'United States'], ['UZ', 'Uzbekistan'], ['VA', 'Vatican City'], ['VN', 'Vietnam'], ['YE', 'Yemen']
  ],

  // One base city per province, with coordinates for distance estimates
  hubs: {
    makkah: { city: 'Jeddah', coords: [21.5433, 39.1728], airport: 'JED' },
    madinah: { city: 'Madinah', coords: [24.4672, 39.6111], airport: 'MED' },
    riyadh: { city: 'Riyadh', coords: [24.7136, 46.6753], airport: 'RUH' },
    eastern: { city: 'Dammam', coords: [26.4207, 50.0888], airport: 'DMM' },
    asir: { city: 'Abha', coords: [18.2164, 42.5053], airport: 'AHB' },
    qassim: { city: 'Buraidah', coords: [26.3260, 43.9750], airport: 'ELQ' },
    tabuk: { city: 'Tabuk', coords: [28.3838, 36.5550], airport: 'TUU' },
    hail: { city: 'Hail', coords: [27.5219, 41.6907], airport: 'HAS' },
    jazan: { city: 'Jazan', coords: [16.8892, 42.5511], airport: 'GIZ' },
    najran: { city: 'Najran', coords: [17.4924, 44.1277], airport: 'EAM' },
    bahah: { city: 'Al-Bahah', coords: [20.0129, 41.4677], airport: 'ABT' },
    'northern-borders': { city: 'Arar', coords: [30.9753, 41.0381], airport: 'RAE' },
    jawf: { city: 'Sakaka', coords: [29.9697, 40.2064], airport: 'AJF' }
  },

  airports: {
    JED: { name: 'King Abdulaziz International Airport, Jeddah', intl: true, serves: ['makkah'] },
    MED: { name: 'Prince Mohammad bin Abdulaziz International Airport, Madinah', intl: true, serves: ['madinah'] },
    RUH: { name: 'King Khalid International Airport, Riyadh', intl: true, serves: ['riyadh', 'qassim'] },
    DMM: { name: 'King Fahd International Airport, Dammam', intl: true, serves: ['eastern'] },
    AHB: { name: 'Abha International Airport', intl: true, serves: ['asir', 'bahah'] },
    ULH: { name: 'AlUla International Airport', intl: false, serves: [] },
    ELQ: { name: 'Prince Naif bin Abdulaziz Airport, Qassim', intl: false, serves: ['qassim'] },
    TUU: { name: 'Tabuk Regional Airport', intl: false, serves: ['tabuk'] },
    HAS: { name: 'Hail Airport', intl: false, serves: ['hail'] },
    GIZ: { name: 'King Abdullah bin Abdulaziz Airport, Jazan', intl: true, serves: ['jazan'] },
    EAM: { name: 'Najran Airport', intl: false, serves: ['najran'] },
    ABT: { name: 'King Saud bin Abdulaziz Airport, Al-Bahah', intl: false, serves: ['bahah'] },
    RAE: { name: 'Arar Airport', intl: false, serves: ['northern-borders'] },
    AJF: { name: 'Al-Jouf Airport, Sakaka', intl: false, serves: ['jawf'] }
  },

  // Intercity links between provinces (both directions)
  corridors: [
    { between: ['makkah', 'madinah'], modes: [{ type: 'train', label: 'Haramain High Speed Railway (Jeddah / Makkah → Madinah, about 2–2.5 h)', url: 'https://sar.hhr.sa' }, { type: 'drive', hours: 4.5 }, { type: 'flight', label: 'Flights JED → MED (1 h)' }] },
    { between: ['riyadh', 'eastern'], modes: [{ type: 'train', label: 'SAR train Riyadh → Hofuf → Dammam (about 3–4 h)', url: 'https://www.sar.com.sa' }, { type: 'drive', hours: 4 }, { type: 'flight', label: 'Flights RUH → DMM (1 h)' }] },
    { between: ['riyadh', 'qassim'], modes: [{ type: 'train', label: 'SAR North train Riyadh → Qassim (about 3 h)', url: 'https://www.sar.com.sa' }, { type: 'drive', hours: 3.5 }] },
    { between: ['riyadh', 'hail'], modes: [{ type: 'train', label: 'SAR North train Riyadh → Hail (about 5 h)', url: 'https://www.sar.com.sa' }, { type: 'drive', hours: 6.5 }, { type: 'flight', label: 'Flights RUH → HAS (1.5 h)' }] },
    { between: ['riyadh', 'jawf'], modes: [{ type: 'train', label: 'SAR North train Riyadh → Al-Jouf (about 8 h)', url: 'https://www.sar.com.sa' }, { type: 'flight', label: 'Flights RUH → AJF (1.5 h)' }, { type: 'drive', hours: 10 }] },
    { between: ['qassim', 'hail'], modes: [{ type: 'train', label: 'SAR North train Qassim → Hail (about 2 h)', url: 'https://www.sar.com.sa' }, { type: 'drive', hours: 3 }] },
    { between: ['madinah', 'tabuk'], modes: [{ type: 'drive', hours: 7, label: 'Drive via AlUla and Tayma (about 7 h)' }, { type: 'flight', label: 'Flights MED → TUU (1.5 h)' }] },
    { between: ['makkah', 'asir'], modes: [{ type: 'flight', label: 'Flights JED → AHB (1.5 h)' }, { type: 'drive', hours: 7 }] },
    { between: ['makkah', 'bahah'], modes: [{ type: 'drive', hours: 5, label: 'Drive Jeddah / Taif → Al-Bahah (about 5 h)' }, { type: 'flight', label: 'Flights JED → ABT (1 h)' }] },
    { between: ['asir', 'jazan'], modes: [{ type: 'drive', hours: 3 }] },
    { between: ['asir', 'najran'], modes: [{ type: 'drive', hours: 4 }] },
    { between: ['asir', 'bahah'], modes: [{ type: 'drive', hours: 4, label: 'Scenic mountain road via Tanomah and Al-Namas (about 4 h)' }] },
    { between: ['tabuk', 'jawf'], modes: [{ type: 'drive', hours: 5 }] },
    { between: ['hail', 'jawf'], modes: [{ type: 'train', label: 'SAR North train Hail → Al-Jouf (about 3 h)', url: 'https://www.sar.com.sa' }, { type: 'drive', hours: 5 }] },
    { between: ['jawf', 'northern-borders'], modes: [{ type: 'drive', hours: 4 }] },
    { between: ['hail', 'northern-borders'], modes: [{ type: 'drive', hours: 5 }] },
    { between: ['eastern', 'riyadh'], modes: [] }
  ],

  // Travel hub for a few spots that are far from their province hub
  spotHubs: {
    hegra: 'AlUla', 'elephant-rock': 'AlUla', maraya: 'AlUla', 'alula-old-town': 'AlUla', 'dadan-jabal-ikmah': 'AlUla', sharaan: 'AlUla', gharameel: 'AlUla', 'harrat-viewpoint': 'AlUla', 'rainbow-rock': 'AlUla',
    'al-ahsa-oasis': 'Al-Ahsa', 'jabal-al-qarah': 'Al-Ahsa', 'ibrahim-palace': 'Al-Ahsa', 'jawatha-mosque': 'Al-Ahsa', 'qaisariya-souq': 'Al-Ahsa', 'yellow-lake': 'Al-Ahsa', uqair: 'Al-Ahsa'
  },

  // Itinerary building blocks: ordered spot ids per city cluster
  clusters: {
    makkah_umrah: { title: 'Makkah — Umrah & the Haram', city: 'Makkah', muslimsOnly: true, spots: ['masjid-al-haram', 'clock-tower-museum'] },
    makkah_ziyarat: { title: 'Makkah — Ziyarat (historic sites)', city: 'Makkah', muslimsOnly: true, spots: ['jabal-al-nour', 'jabal-thawr', 'arafat-mina', 'jannat-al-mualla', 'masjid-al-bayah', 'kiswa-complex', 'masjid-aisha', 'masjid-jiranah'] },
    madinah_core: { title: 'Madinah — The Prophet\'s Mosque & nearby', city: 'Madinah', spots: ['masjid-an-nabawi', 'al-baqi', 'masjid-ghamama', 'hejaz-railway-museum', 'dar-al-madinah'] },
    madinah_ziyarat: { title: 'Madinah — Ziyarat', city: 'Madinah', spots: ['quba-mosque', 'masjid-al-jumuah', 'masjid-qiblatain', 'seven-mosques', 'mount-uhud', 'madinah-dates-market', 'wadi-al-jinn'] },
    jeddah: { title: 'Jeddah', city: 'Jeddah', spots: ['historic-jeddah', 'king-fahd-fountain', 'tayebat-museum', 'obhur', 'fakieh-aquarium'] },
    taif: { title: 'Taif', city: 'Taif', spots: ['taif-al-hada', 'al-rudaf-park', 'shubra-palace', 'souq-okaz', 'al-wahbah-crater'] },
    riyadh: { title: 'Riyadh', city: 'Riyadh', spots: ['at-turaif', 'masmak-fort', 'souq-al-zal', 'national-museum', 'murabba-palace', 'kingdom-centre', 'al-faisaliah', 'kafd', 'boulevard-city', 'wadi-hanifa', 'wadi-namar', 'edge-of-the-world', 'red-sands', 'thumamah', 'dahl-heet'] },
    riyadh_day: { dayTrip: true, title: 'Day trips from Riyadh', city: 'Riyadh', spots: ['ushaiger', 'shaqra', 'al-ghat', 'al-faw', 'uruq-bani-maarid'] },
    alula: { title: 'AlUla', city: 'AlUla', spots: ['hegra', 'elephant-rock', 'alula-old-town', 'dadan-jabal-ikmah', 'harrat-viewpoint', 'maraya', 'gharameel', 'rainbow-rock', 'sharaan'] },
    madinah_region: { dayTrip: true, title: 'Madinah Province — further afield', city: 'Madinah', spots: ['khaybar', 'umm-jarsan', 'badr', 'yanbu-historic'] },
    eastern_metro: { title: 'Dammam – Khobar – Dhahran', city: 'Khobar', spots: ['ithra', 'khobar-corniche', 'dammam-corniche', 'king-fahd-causeway', 'half-moon-bay', 'tarout-castle', 'fanateer-beach'] },
    alahsa: { title: 'Al-Ahsa Oasis', city: 'Hofuf', spots: ['al-ahsa-oasis', 'jabal-al-qarah', 'ibrahim-palace', 'qaisariya-souq', 'jawatha-mosque', 'yellow-lake', 'uqair'] },
    asir: { title: 'Abha & Asir mountains', city: 'Abha', spots: ['abha-muftaha', 'al-soudah', 'rijal-almaa', 'habala', 'tanomah', 'al-namas', 'shada-palace'] },
    jazan: { title: 'Jazan', city: 'Jazan', spots: ['farasan-islands', 'fayfa', 'wadi-lajab', 'dosariyah-fort'] },
    najran: { title: 'Najran', city: 'Najran', spots: ['al-ukhdood', 'emara-palace', 'al-aan-palace', 'najran-dam', 'hima'] },
    bahah: { title: 'Al-Bahah', city: 'Al-Bahah', spots: ['raghadan-forest', 'thee-ain', 'al-atawlah', 'shada-al-ala'] },
    tabuk_city: { title: 'Tabuk & the north-west', city: 'Tabuk', spots: ['tabuk-castle', 'wadi-disah', 'tayma', 'hisma-desert', 'jabal-al-lawz'] },
    tabuk_coast: { dayTrip: true, title: 'Gulf of Aqaba coast', city: 'Al-Bad\'', spots: ['maghaer-shuaib', 'maqna', 'tayeb-ism', 'ras-alsheikh-hamid', 'georgios-shipwreck'] },
    red_sea: { title: 'Red Sea coast', city: 'Umluj', spots: ['umluj', 'red-sea-global'] },
    hail: { title: 'Hail', city: 'Hail', spots: ['hail-rock-art', 'qishlah-palace', 'aarif-fort', 'barzan-palace', 'jabal-aja', 'fayd'] },
    qassim: { title: 'Al-Qassim', city: 'Buraidah', spots: ['buraidah', 'buraidah-camel-market', 'unaizah', 'al-shinanah'] },
    jawf: { title: 'Al-Jawf', city: 'Sakaka', spots: ['zaabal-castle', 'al-rajajil', 'jouf-olive-festival', 'marid-castle', 'dumat-lake', 'qasr-kaf'] },
    north: { title: 'Northern Borders', city: 'Rafha', spots: ['linah', 'darb-zubaydah'] }
  },

  // Which clusters belong to which province (for domestic planning)
  provinceClusters: {
    makkah: ['makkah_umrah', 'makkah_ziyarat', 'jeddah', 'taif'],
    madinah: ['madinah_core', 'madinah_ziyarat', 'alula', 'madinah_region'],
    riyadh: ['riyadh', 'riyadh_day'],
    eastern: ['eastern_metro', 'alahsa'],
    asir: ['asir'], jazan: ['jazan'], najran: ['najran'], bahah: ['bahah'],
    tabuk: ['tabuk_city', 'tabuk_coast', 'red_sea'],
    hail: ['hail'], qassim: ['qassim'], jawf: ['jawf'], 'northern-borders': ['north']
  }
});
