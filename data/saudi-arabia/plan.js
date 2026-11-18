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

  // Travel partner: FeniTravels (flight search + hotel booking). Set name to '' to hide the buttons.
  // URL templates — {tokens} are replaced and URL-encoded; empty parameters are dropped automatically.
  //   flights: {from} {to} airport codes, {depart} {return} dates (YYYY-MM-DD), {adults}
  //   hotels : {citycode} (airport-style city code), {checkin} {checkout}, {rooms}, {adults}
  partner: {
    name: 'FeniTravels',
    home: 'https://fenitravels.com',
    flights: 'https://fenitravels.com/search/results?origin={from}&destination={to}&departureDate={depart}&returnDate={return}&cabinClass=economy&adults={adults}&children=0&infants=0',
    hotels: 'https://fenitravels.com/search/hotels?city={citycode}&checkIn={checkin}&checkOut={checkout}&rooms={rooms}&adults={adults}&children=0',
    // Planner city name -> FeniTravels city code
    cityCodes: {"Makkah": "MAK", "Madinah": "MED", "Riyadh": "RUH", "Jeddah": "JED", "Dammam": "DMM", "Khobar": "DMM", "Dhahran": "DMM", "Abha": "AHB", "AlUla": "ULH", "Taif": "TIF", "Tabuk": "TUU", "Hail": "HAS", "Jazan": "GIZ", "Najran": "EAM", "Buraidah": "ELQ", "Unaizah": "ELQ", "Sakaka": "AJF", "Hofuf": "HOF", "Yanbu": "YNB", "Umluj": "ULH"},
    // Airports FeniTravels can search: [code, city, ISO country]
    airports: [["RUH","Riyadh","SA"],["JED","Jeddah","SA"],["DMM","Dammam","SA"],["MED","Madinah","SA"],["AHB","Abha","SA"],["TUU","Tabuk","SA"],["TIF","Taif","SA"],["ELQ","Qassim","SA"],["GIZ","Jazan","SA"],["HAS","Hail","SA"],["ULH","AlUla","SA"],["YNB","Yanbu","SA"],["HOF","Al-Ahsa","SA"],["EAM","Najran","SA"],["AJF","Al Jouf","SA"],["NUM","NEOM","SA"],["DXB","Dubai","AE"],["AUH","Abu Dhabi","AE"],["SHJ","Sharjah","AE"],["DOH","Doha","QA"],["BAH","Manama","BH"],["KWI","Kuwait City","KW"],["MCT","Muscat","OM"],["SLL","Salalah","OM"],["AMM","Amman","JO"],["BEY","Beirut","LB"],["DAM","Damascus","SY"],["BGW","Baghdad","IQ"],["BSR","Basra","IQ"],["EBL","Erbil","IQ"],["ADE","Aden","YE"],["SAH","Sana'a","YE"],["CAI","Cairo","EG"],["HBE","Alexandria","EG"],["SSH","Sharm El Sheikh","EG"],["HRG","Hurghada","EG"],["LXR","Luxor","EG"],["KRT","Khartoum","SD"],["PZU","Port Sudan","SD"],["ADD","Addis Ababa","ET"],["NBO","Nairobi","KE"],["DAR","Dar es Salaam","TZ"],["MGQ","Mogadishu","SO"],["JIB","Djibouti","DJ"],["CMN","Casablanca","MA"],["RAK","Marrakesh","MA"],["TUN","Tunis","TN"],["ALG","Algiers","DZ"],["LOS","Lagos","NG"],["JNB","Johannesburg","ZA"],["IST","Istanbul","TR"],["SAW","Istanbul","TR"],["AYT","Antalya","TR"],["ESB","Ankara","TR"],["TZX","Trabzon","TR"],["GYD","Baku","AZ"],["TBS","Tbilisi","GE"],["IKA","Tehran","IR"],["KHI","Karachi","PK"],["LHE","Lahore","PK"],["ISB","Islamabad","PK"],["PEW","Peshawar","PK"],["MUX","Multan","PK"],["SKT","Sialkot","PK"],["LYP","Faisalabad","PK"],["KBL","Kabul","AF"],["DEL","Delhi","IN"],["BOM","Mumbai","IN"],["HYD","Hyderabad","IN"],["COK","Kochi","IN"],["CCJ","Kozhikode","IN"],["TRV","Thiruvananthapuram","IN"],["MAA","Chennai","IN"],["BLR","Bengaluru","IN"],["LKO","Lucknow","IN"],["AMD","Ahmedabad","IN"],["CCU","Kolkata","IN"],["DAC","Dhaka","BD"],["CGP","Chattogram","BD"],["ZYL","Sylhet","BD"],["KTM","Kathmandu","NP"],["CMB","Colombo","LK"],["MLE","Mal\\xe9","MV"],["MNL","Manila","PH"],["CEB","Cebu","PH"],["CGK","Jakarta","ID"],["SUB","Surabaya","ID"],["DPS","Bali","ID"],["KUL","Kuala Lumpur","MY"],["PEN","Penang","MY"],["SIN","Singapore","SG"],["BKK","Bangkok","TH"],["HKT","Phuket","TH"],["SGN","Ho Chi Minh City","VN"],["HAN","Hanoi","VN"],["HKG","Hong Kong","HK"],["PEK","Beijing","CN"],["PVG","Shanghai","CN"],["CAN","Guangzhou","CN"],["NRT","Tokyo","JP"],["ICN","Seoul","KR"],["TAS","Tashkent","UZ"],["ALA","Almaty","KZ"],["LHR","London","GB"],["MAN","Manchester","GB"],["CDG","Paris","FR"],["FRA","Frankfurt","DE"],["MUC","Munich","DE"],["AMS","Amsterdam","NL"],["BRU","Brussels","BE"],["MAD","Madrid","ES"],["BCN","Barcelona","ES"],["FCO","Rome","IT"],["MXP","Milan","IT"],["VIE","Vienna","AT"],["ZRH","Zurich","CH"],["GVA","Geneva","CH"],["ATH","Athens","GR"],["CPH","Copenhagen","DK"],["ARN","Stockholm","SE"],["SJJ","Sarajevo","BA"],["SVO","Moscow","RU"],["JFK","New York","US"],["IAD","Washington","US"],["ORD","Chicago","US"],["IAH","Houston","US"],["LAX","Los Angeles","US"],["YYZ","Toronto","CA"],["SYD","Sydney","AU"],["MEL","Melbourne","AU"]]
  },

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
    riyadh_day: { dayTrip: true, title: 'Day trips from Riyadh', city: 'Riyadh', spots: ['ushaiger', 'shaqra', 'thadiq-ghamra', 'al-qasab', 'al-ghat', 'al-majmaah-marqab', 'az-zulfi', 'al-faw', 'uruq-bani-maarid'] },
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
    qassim: { title: 'Al-Qassim', city: 'Buraidah', spots: ['buraidah', 'buraidah-camel-market', 'unaizah', 'al-shinanah', 'al-mithnab', 'al-bukayriyah', 'uyun-al-jiwa'] },
    jawf: { title: 'Al-Jawf', city: 'Sakaka', spots: ['zaabal-castle', 'al-rajajil', 'jouf-olive-festival', 'marid-castle', 'dumat-lake', 'qasr-kaf'] },
    north: { title: 'Northern Borders', city: 'Rafha', spots: ['linah', 'darb-zubaydah'] }
  },

  // Rough planning costs in SAR (estimates only — prices swing a lot with Ramadan, Hajj, school holidays and events)
  costs: {
    usd: 3.75,
    // per room per night: [economy, comfort, luxury] each as [low, high]
    lodging: {
      Makkah: [[200, 380], [450, 900], [1300, 4000]],
      Madinah: [[180, 320], [380, 750], [1000, 3000]],
      Jeddah: [[180, 320], [380, 700], [1000, 2500]],
      Riyadh: [[200, 350], [420, 850], [1100, 2800]],
      AlUla: [[350, 650], [800, 1600], [2200, 7000]],
      Taif: [[150, 300], [320, 650], [800, 2000]],
      Khobar: [[200, 350], [420, 750], [950, 2000]],
      Abha: [[180, 320], [360, 700], [850, 2000]],
      Umluj: [[300, 600], [700, 1400], [2300, 5500]],
      default: [[150, 280], [300, 600], [750, 1600]]
    },
    food: [[60, 110], [120, 240], [320, 650]],          // per person per day
    taxiPerDay: [40, 130],                              // per vehicle (up to 4 people)
    rentalPerDay: [[130, 220], [200, 380], [450, 900]], // car hire per day by tier (excl. fuel)
    legs: { train: [120, 320], flight: [250, 750], bus: [80, 190] }, // per person per leg
    fuelPerKm: [0.2, 0.3],
    tickets: { required: [60, 260], partial: [0, 110] } // per person per spot
  },

  // Where to stay: general area advice per city (no individual hotels are endorsed)
  stay: {
    Makkah: 'Hotels around the Haram (Ajyad, Clock Tower area) are closest but most expensive; Aziziyah and nearby districts are cheaper with a short taxi or bus ride to the Haram. Book early for Ramadan and Hajj season.',
    Madinah: 'The Markazia (central area) around the Prophet\'s Mosque is walkable; Quba and Al-Aliya are quieter and usually cheaper. Prices rise sharply in Ramadan.',
    Jeddah: 'Al-Balad suits heritage lovers; the Corniche / Al-Hamra area has sea views and restaurants; North Jeddah near Obhur has beach resorts.',
    Riyadh: 'Olaya and Al-Wurud are central; Diriyah has boutique stays beside At-Turaif; KAFD is modern and business-oriented.',
    AlUla: 'Stay in the oasis / AlUla town area or a desert resort; book months ahead for December – February.',
    Taif: 'Al-Hada and Al-Shafa mountain areas stay cool in summer; central Taif near Shubra Palace is convenient for sights.',
    Khobar: 'The Khobar Corniche area is lively with restaurants; Dhahran is close to Ithra.',
    Hofuf: 'Stay in central Hofuf near Qaisariya Souq, or in an oasis guesthouse for a quieter feel.',
    Abha: 'Near Abha Dam Lake or Al-Soudah for scenery; the city centre for convenience. Summer is the peak season.',
    Umluj: 'Beachfront resorts and guesthouses face the islands; luxury resorts on Shura Island are booked directly.',
    default: 'Choose a hotel near the main sights you will visit most, and check reviews and free-cancellation terms on the booking site.'
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
