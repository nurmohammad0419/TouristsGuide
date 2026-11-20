/*
 * Türkiye — Tour Planner data
 * ---------------------------------------------------------------
 * Used by js/planner.js. Everything here is editable:
 *   visa      : entry rules by nationality / residence
 *   airports  : international gateways and the regions they serve
 *   hubs      : one base city per region (for distances & routing)
 *   corridors : intercity rail / flight links between hubs
 *   clusters  : ordered spot lists the planner draws from
 *   tour      : which clusters a trip from abroad starts with, and the optional add-ons
 * There is no `faith` block, so the planner never asks about religion here.
 * Rules and prices change often — keep the "reviewed" date current.
 */
TG.registerPlanner('turkey', {
  reviewed: 'November 2026',

  country: 'TR',
  // Türkiye prices museum entry for foreigners in euros and the lira moves fast,
  // so the planner budgets in euros rather than lira.
  currency: 'EUR',
  defaultAirport: 'IST',
  bus: { label: 'Intercity coach', url: 'https://www.obilet.com' },
  rideHailing: 'BiTaksi / Uber / city taxis',
  passportNote: 'Passport valid for at least 60 days beyond your stay',
  insuranceNote: 'Travel insurance',
  localIdNote: 'National ID or residence permit',
  cityFlightHint: { Göreme: 'flights to Nevşehir (NAV) or Kayseri (ASR) also serve Cappadocia', Kars: 'the Eastern Express train is the scenic alternative' },
  // Spots too demanding for a family plan (long climbs, gorges, high altitude)
  strenuous: ['termessos', 'mount-ararat', 'saklikent', 'ayder-rize', 'uludag', 'olympos-chimaera', 'sumela-monastery', 'ihlara-valley'],
  railBookings: [
    { match: 'YHT|high-speed', label: 'YHT high-speed train tickets (sell out on weekends)', url: 'https://ebilet.tcddtasimacilik.gov.tr' },
    { match: 'Eastern Express|Doğu Ekspresi', label: 'Eastern Express sleeper tickets — released about a month ahead and sell out fast', url: 'https://ebilet.tcddtasimacilik.gov.tr' }
  ],
  tips: [
    'Buy a Museum Pass if you plan more than three or four state sites: Museum Pass Türkiye countrywide, or the Istanbul, Aegean, Mediterranean and Cappadocia regional passes. Hagia Sophia is not covered by any of them.',
    'Entry fees for foreigners are set in euros and rise most years — treat every price on this site as indicative and check muze.gov.tr.',
    'Mosques are open to visitors of all faiths outside the five prayer times and Friday noon prayers. Dress modestly; women cover their hair and scarves are lent at the door.',
    'Get a transit card in each big city (Istanbulkart in Istanbul) — it works on metro, tram, bus and the ferries and is far cheaper than single tickets.',
    'Summer on the coast and in the south-east is very hot; the interior and the east get heavy snow. April–June and September–October suit almost the whole country.'
  ],

  // Entry rules. The first matching rule wins, so order matters.
  // Türkiye changes its visa policy often — always send people to the official portal.
  visa: {
    portal: 'https://www.evisa.gov.tr',
    evisaBooking: 'e-Visa — apply online at evisa.gov.tr before you fly',
    visaBooking: 'Visa via a Turkish embassy or consulate',
    own: { title: 'No visa needed', text: 'Turkish citizens enter freely.' },
    free: {
      title: 'No visa needed for a short stay',
      text: 'Your nationality can currently enter Türkiye without a visa for short tourist stays (commonly 90 days in any 180). Your passport should be valid at least 60 days beyond your stay. Confirm the current rule on the official portal before booking.',
      codes: ['AL', 'AR', 'AT', 'AZ', 'BA', 'BE', 'BG', 'BR', 'BY', 'CH', 'CL', 'CO', 'CZ', 'DE', 'DK', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GE', 'GR', 'HR', 'HU', 'ID', 'IE', 'IL', 'IR', 'IS', 'IT', 'JP', 'KG', 'KR', 'KW', 'KZ', 'LT', 'LU', 'LV', 'LI', 'MA', 'MC', 'MD', 'ME', 'MK', 'MN', 'MT', 'MY', 'NL', 'NO', 'NZ', 'PL', 'PT', 'QA', 'RO', 'RS', 'RU', 'SE', 'SG', 'SI', 'SK', 'SM', 'TH', 'TJ', 'TN', 'UA', 'US', 'UY', 'UZ', 'VA', 'ZA']
    },
    evisa: {
      title: 'Eligible for the online e-Visa',
      text: 'Apply at evisa.gov.tr before you travel — it takes a few minutes and is usually issued at once. Visa on arrival has been withdrawn for e-Visa nationalities, so do not leave it until the airport. Some e-Visas are single entry, which matters if you plan to leave and re-enter.',
      codes: ['AF', 'AM', 'AU', 'BD', 'BH', 'BT', 'CA', 'CN', 'CY', 'DZ', 'EG', 'FJ', 'IN', 'IQ', 'JM', 'KH', 'LY', 'LK', 'MV', 'MX', 'NP', 'OM', 'PK', 'PH', 'PS', 'SA', 'SN', 'SR', 'TW', 'AE', 'VN', 'YE', 'ZW']
    },
    resident: {
      title: 'Eligible for the e-Visa as a resident or visa holder',
      text: 'Some nationalities qualify for the Turkish e-Visa only if they also hold a valid visa or residence permit from a Schengen country, the USA, the UK or Ireland. Carry that document with you — airlines check it at boarding.',
      codes: ['US', 'GB', 'IE', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'CH', 'SE', 'NO', 'DK', 'FI', 'PT', 'GR', 'PL', 'CZ', 'HU', 'LU', 'IS', 'LI', 'MT', 'SK', 'SI', 'EE', 'LV', 'LT', 'HR']
    },
    visaHolder: {
      title: 'Eligible for the e-Visa as a visa holder',
      text: 'Holders of {of} can apply for the Turkish e-Visa online. Bring the passport containing that visa — it is checked at boarding and on arrival.',
      of: 'a valid Schengen, US, UK or Irish visa or residence permit'
    },
    none: {
      title: 'Visa required in advance',
      text: 'Your nationality is not on the visa-free or e-Visa list. Apply at a Turkish embassy or consulate before travelling, and allow several weeks.'
    }
  },

  // Routing for trips that start outside the country: the arrival city leads,
  // then whichever regions the traveller ticks, in the order listed here.
  tour: {
    coreNote: 'Your arrival city is already in the plan.',
    core: {
      '*': [['istanbul', 'marmara']],
      ADB: [['izmir', 'aegean'], ['ephesus', 'aegean']],
      AYT: [['antalya', 'mediterranean']],
      DLM: [['lycia', 'mediterranean']],
      BJV: [['bodrum', 'aegean']],
      ESB: [['ankara', 'central-anatolia']],
      ASR: [['cappadocia', 'central-anatolia']],
      NAV: [['cappadocia', 'central-anatolia']],
      TZX: [['trabzon', 'black-sea']],
      GZT: [['gaziantep', 'southeastern-anatolia']],
      ADA: [['antalya', 'mediterranean']]
    },
    extras: [
      { id: 'istanbul', label: 'Istanbul — the old city & Bosphorus', clusters: [['istanbul', 'marmara']], minDays: 3 },
      { id: 'cappadocia', label: 'Cappadocia (balloons, cave churches)', clusters: [['cappadocia', 'central-anatolia']], minDays: 5 },
      { id: 'ephesus', label: 'Ephesus & Şirince', clusters: [['ephesus', 'aegean']], minDays: 6 },
      { id: 'pamukkale', label: 'Pamukkale & Aphrodisias', clusters: [['pamukkale', 'aegean']], minDays: 7 },
      { id: 'antalya', label: 'Antalya & the Pamphylian ruins', clusters: [['antalya', 'mediterranean']], minDays: 8 },
      { id: 'lycia', label: 'Lycian coast (Ölüdeniz, Kaş, Patara)', clusters: [['lycia', 'mediterranean']], minDays: 9 },
      { id: 'bodrum', label: 'Bodrum & the Aegean coast', clusters: [['bodrum', 'aegean']], minDays: 9 },
      { id: 'izmir', label: 'İzmir, Pergamon & Sardis', clusters: [['izmir', 'aegean'], ['pergamon', 'aegean']], minDays: 8 },
      { id: 'bursa', label: 'Bursa, İznik & Edirne', clusters: [['bursa', 'marmara'], ['edirne', 'marmara']], minDays: 7 },
      { id: 'canakkale', label: 'Troy & Gallipoli', clusters: [['canakkale', 'marmara']], minDays: 8 },
      { id: 'ankara', label: 'Ankara, Hattusa & Gordion', clusters: [['ankara', 'central-anatolia'], ['hattusa', 'central-anatolia']], minDays: 9 },
      { id: 'konya', label: 'Konya & the whirling dervishes', clusters: [['konya', 'central-anatolia']], minDays: 9 },
      { id: 'blacksea', label: 'Safranbolu & the western Black Sea', clusters: [['blacksea_west', 'black-sea']], minDays: 10 },
      { id: 'trabzon', label: 'Trabzon, Sumela & the Kaçkars', clusters: [['trabzon', 'black-sea']], minDays: 11 },
      { id: 'southeast', label: 'Göbekli Tepe, Mardin & Nemrut', clusters: [['gaziantep', 'southeastern-anatolia'], ['sanliurfa', 'southeastern-anatolia'], ['mardin', 'southeastern-anatolia']], minDays: 11 },
      { id: 'east', label: 'The far east: Van, Ani & Ararat', clusters: [['van', 'eastern-anatolia'], ['kars', 'eastern-anatolia']], minDays: 13 }
    ]
  },

  // What to do on landing, per arrival airport
  arrival: {
    IST: { car: 'Collect your rental car — central Istanbul is 45–60 minutes away, and traffic can double that.', public: 'The M11 metro runs from the terminal to the city, or take a Havaist airport bus or a taxi (45–75 minutes). Buy an Istanbulkart in arrivals.' },
    SAW: { car: 'Collect your rental car — the European side is about 1 h 15 min away across the bridge.', public: 'M4 metro plus a connection, or a Havabüs coach to Kadıköy / Taksim (60–90 minutes).' },
    ESB: { car: 'Collect your rental car — central Ankara is about 40 minutes away.', public: 'Belko Air shuttle or a taxi to the city (about 45 minutes).' },
    ADB: { car: 'Collect your rental car — İzmir city centre is about 25 minutes away.', public: 'İZBAN commuter train straight from the terminal to the city, or on to Selçuk for Ephesus.' },
    AYT: { car: 'Collect your rental car — Antalya old town is about 20 minutes away.', public: 'Airport tram / bus or a taxi into Antalya (20–30 minutes); resort transfers go to Side, Belek and Alanya.' },
    DLM: { car: 'Collect your rental car — Fethiye is about 50 minutes, Marmaris about 1 h 20 min.', public: 'Havaş shuttles meet flights for Fethiye, Marmaris and Kalkan.' },
    BJV: { car: 'Collect your rental car — Bodrum town is about 40 minutes away.', public: 'Havaş shuttle into Bodrum (about 45 minutes).' },
    TZX: { car: 'Collect your rental car — Trabzon centre is 15 minutes; Sumela and Uzungöl need a car or a tour.', public: 'Taxi or dolmuş into Trabzon (15 minutes); tours to Sumela leave from Atatürk Square.' },
    GZT: { car: 'Collect your rental car — Gaziantep centre is about 25 minutes away.', public: 'Shuttle bus or taxi into Gaziantep (25 minutes).' },
    ADA: { car: 'Collect your rental car — Adana centre is 10 minutes; Hatay about 2 hours.', public: 'Taxi into Adana, or an intercity coach on to Gaziantep and Hatay.' },
    NAV: { car: 'Collect your rental car — Göreme is about 45 minutes away.', public: 'Pre-booked shuttles meet every flight and drop at Göreme, Ürgüp and Uçhisar hotels.' },
    ASR: { car: 'Collect your rental car — Göreme is about 1 h 15 min away.', public: 'Pre-booked shuttles run to the Cappadocia villages (about 1 h 15 min).' }
  },

  countries: [
    ['AF', 'Afghanistan'], ['AL', 'Albania'], ['DZ', 'Algeria'], ['AD', 'Andorra'], ['AR', 'Argentina'], ['AU', 'Australia'], ['AT', 'Austria'], ['AZ', 'Azerbaijan'], ['BH', 'Bahrain'], ['BD', 'Bangladesh'], ['BE', 'Belgium'], ['BA', 'Bosnia & Herzegovina'], ['BR', 'Brazil'], ['BN', 'Brunei'], ['BG', 'Bulgaria'], ['KH', 'Cambodia'], ['CM', 'Cameroon'], ['CA', 'Canada'], ['CL', 'Chile'], ['CN', 'China'], ['CO', 'Colombia'], ['HR', 'Croatia'], ['CY', 'Cyprus'], ['CZ', 'Czechia'], ['DK', 'Denmark'], ['EG', 'Egypt'], ['EE', 'Estonia'], ['ET', 'Ethiopia'], ['FI', 'Finland'], ['FR', 'France'], ['GE', 'Georgia'], ['DE', 'Germany'], ['GH', 'Ghana'], ['GR', 'Greece'], ['HK', 'Hong Kong'], ['HU', 'Hungary'], ['IS', 'Iceland'], ['IN', 'India'], ['ID', 'Indonesia'], ['IR', 'Iran'], ['IQ', 'Iraq'], ['IE', 'Ireland'], ['IT', 'Italy'], ['JP', 'Japan'], ['JO', 'Jordan'], ['KZ', 'Kazakhstan'], ['KE', 'Kenya'], ['KW', 'Kuwait'], ['KG', 'Kyrgyzstan'], ['LV', 'Latvia'], ['LB', 'Lebanon'], ['LY', 'Libya'], ['LI', 'Liechtenstein'], ['LT', 'Lithuania'], ['LU', 'Luxembourg'], ['MO', 'Macau'], ['MY', 'Malaysia'], ['MV', 'Maldives'], ['MT', 'Malta'], ['MU', 'Mauritius'], ['MX', 'Mexico'], ['MD', 'Moldova'], ['MC', 'Monaco'], ['ME', 'Montenegro'], ['MA', 'Morocco'], ['NP', 'Nepal'], ['NL', 'Netherlands'], ['NZ', 'New Zealand'], ['NG', 'Nigeria'], ['MK', 'North Macedonia'], ['NO', 'Norway'], ['OM', 'Oman'], ['PK', 'Pakistan'], ['PA', 'Panama'], ['PH', 'Philippines'], ['PL', 'Poland'], ['PT', 'Portugal'], ['QA', 'Qatar'], ['RO', 'Romania'], ['RU', 'Russia'], ['SM', 'San Marino'], ['SA', 'Saudi Arabia'], ['SN', 'Senegal'], ['RS', 'Serbia'], ['SC', 'Seychelles'], ['SG', 'Singapore'], ['SK', 'Slovakia'], ['SI', 'Slovenia'], ['SO', 'Somalia'], ['ZA', 'South Africa'], ['KR', 'South Korea'], ['ES', 'Spain'], ['LK', 'Sri Lanka'], ['SD', 'Sudan'], ['SE', 'Sweden'], ['CH', 'Switzerland'], ['SY', 'Syria'], ['TW', 'Taiwan'], ['TJ', 'Tajikistan'], ['TZ', 'Tanzania'], ['TH', 'Thailand'], ['TN', 'Tunisia'], ['TR', 'Türkiye'], ['TM', 'Turkmenistan'], ['UG', 'Uganda'], ['UA', 'Ukraine'], ['AE', 'United Arab Emirates'], ['GB', 'United Kingdom'], ['US', 'United States'], ['UZ', 'Uzbekistan'], ['VA', 'Vatican City'], ['VN', 'Vietnam'], ['YE', 'Yemen']
  ],

  // Travel partner: FeniTravels (flight search + hotel booking). Set name to '' to hide the buttons.
  // URL templates — {tokens} are replaced and URL-encoded; empty parameters are dropped automatically.
  partner: {
    name: 'FeniTravels',
    home: 'https://fenitravels.com',
    flights: 'https://fenitravels.com/search/results?origin={from}&destination={to}&departureDate={depart}&returnDate={return}&cabinClass=economy&adults={adults}&children=0&infants=0',
    hotels: 'https://fenitravels.com/search/hotels?city={citycode}&checkIn={checkin}&checkOut={checkout}&rooms={rooms}&adults={adults}&children=0',
    // Planner city name -> FeniTravels city code
    cityCodes: {"Istanbul": "IST", "Göreme": "NAV", "Antalya": "AYT", "Bodrum": "BJV", "Fethiye": "DLM", "İzmir": "ADB", "Selçuk": "ADB", "Bergama": "ADB", "Pamukkale": "DNZ", "Ankara": "ESB", "Eskişehir": "ESB", "Boğazkale": "ESB", "Şereflikoçhisar": "ESB", "Edirne": "IST", "Çanakkale": "CKZ", "Bursa": "YEI", "Konya": "KYA", "Trabzon": "TZX", "Van": "VAN", "Kars": "KSY", "Erzurum": "ERZ", "Gaziantep": "GZT", "Malatya": "MLX", "Mardin": "MQM", "Şanlıurfa": "GNY", "Kâhta": "ADF", "Burdur": "ISE", "Divriği": "VAS", "Amasya": "MZH", "Safranbolu": "ESB"},
    // Airports FeniTravels can search: [code, city, ISO country]
    airports: [["RUH","Riyadh","SA"],["JED","Jeddah","SA"],["DMM","Dammam","SA"],["MED","Madinah","SA"],["AHB","Abha","SA"],["TUU","Tabuk","SA"],["TIF","Taif","SA"],["ELQ","Qassim","SA"],["GIZ","Jazan","SA"],["HAS","Hail","SA"],["ULH","AlUla","SA"],["YNB","Yanbu","SA"],["HOF","Al-Ahsa","SA"],["EAM","Najran","SA"],["AJF","Al Jouf","SA"],["NUM","NEOM","SA"],["DXB","Dubai","AE"],["AUH","Abu Dhabi","AE"],["SHJ","Sharjah","AE"],["DOH","Doha","QA"],["BAH","Manama","BH"],["KWI","Kuwait City","KW"],["MCT","Muscat","OM"],["SLL","Salalah","OM"],["AMM","Amman","JO"],["BEY","Beirut","LB"],["DAM","Damascus","SY"],["BGW","Baghdad","IQ"],["BSR","Basra","IQ"],["EBL","Erbil","IQ"],["ADE","Aden","YE"],["SAH","Sana'a","YE"],["CAI","Cairo","EG"],["HBE","Alexandria","EG"],["SSH","Sharm El Sheikh","EG"],["HRG","Hurghada","EG"],["LXR","Luxor","EG"],["KRT","Khartoum","SD"],["PZU","Port Sudan","SD"],["ADD","Addis Ababa","ET"],["NBO","Nairobi","KE"],["DAR","Dar es Salaam","TZ"],["MGQ","Mogadishu","SO"],["JIB","Djibouti","DJ"],["CMN","Casablanca","MA"],["RAK","Marrakesh","MA"],["TUN","Tunis","TN"],["ALG","Algiers","DZ"],["LOS","Lagos","NG"],["JNB","Johannesburg","ZA"],["IST","Istanbul","TR"],["SAW","Istanbul","TR"],["AYT","Antalya","TR"],["ESB","Ankara","TR"],["TZX","Trabzon","TR"],["GYD","Baku","AZ"],["TBS","Tbilisi","GE"],["IKA","Tehran","IR"],["KHI","Karachi","PK"],["LHE","Lahore","PK"],["ISB","Islamabad","PK"],["PEW","Peshawar","PK"],["MUX","Multan","PK"],["SKT","Sialkot","PK"],["LYP","Faisalabad","PK"],["KBL","Kabul","AF"],["DEL","Delhi","IN"],["BOM","Mumbai","IN"],["HYD","Hyderabad","IN"],["COK","Kochi","IN"],["CCJ","Kozhikode","IN"],["TRV","Thiruvananthapuram","IN"],["MAA","Chennai","IN"],["BLR","Bengaluru","IN"],["LKO","Lucknow","IN"],["AMD","Ahmedabad","IN"],["CCU","Kolkata","IN"],["DAC","Dhaka","BD"],["CGP","Chattogram","BD"],["ZYL","Sylhet","BD"],["KTM","Kathmandu","NP"],["CMB","Colombo","LK"],["MLE","Mal\\xe9","MV"],["MNL","Manila","PH"],["CEB","Cebu","PH"],["CGK","Jakarta","ID"],["SUB","Surabaya","ID"],["DPS","Bali","ID"],["KUL","Kuala Lumpur","MY"],["PEN","Penang","MY"],["SIN","Singapore","SG"],["BKK","Bangkok","TH"],["HKT","Phuket","TH"],["SGN","Ho Chi Minh City","VN"],["HAN","Hanoi","VN"],["HKG","Hong Kong","HK"],["PEK","Beijing","CN"],["PVG","Shanghai","CN"],["CAN","Guangzhou","CN"],["NRT","Tokyo","JP"],["ICN","Seoul","KR"],["TAS","Tashkent","UZ"],["ALA","Almaty","KZ"],["LHR","London","GB"],["MAN","Manchester","GB"],["CDG","Paris","FR"],["FRA","Frankfurt","DE"],["MUC","Munich","DE"],["AMS","Amsterdam","NL"],["BRU","Brussels","BE"],["MAD","Madrid","ES"],["BCN","Barcelona","ES"],["FCO","Rome","IT"],["MXP","Milan","IT"],["VIE","Vienna","AT"],["ZRH","Zurich","CH"],["GVA","Geneva","CH"],["ATH","Athens","GR"],["CPH","Copenhagen","DK"],["ARN","Stockholm","SE"],["SJJ","Sarajevo","BA"],["SVO","Moscow","RU"],["JFK","New York","US"],["IAD","Washington","US"],["ORD","Chicago","US"],["IAH","Houston","US"],["LAX","Los Angeles","US"],["YYZ","Toronto","CA"],["SYD","Sydney","AU"],["MEL","Melbourne","AU"]]
  },

  // One base city per region, with coordinates for distance estimates
  hubs: {
    marmara: { city: 'Istanbul', coords: [41.0082, 28.9784], airport: 'IST' },
    aegean: { city: 'İzmir', coords: [38.4237, 27.1428], airport: 'ADB' },
    mediterranean: { city: 'Antalya', coords: [36.8969, 30.7133], airport: 'AYT' },
    'central-anatolia': { city: 'Ankara', coords: [39.9334, 32.8597], airport: 'ESB' },
    'black-sea': { city: 'Trabzon', coords: [41.0015, 39.7178], airport: 'TZX' },
    'eastern-anatolia': { city: 'Erzurum', coords: [39.9086, 41.2769], airport: 'ERZ' },
    'southeastern-anatolia': { city: 'Gaziantep', coords: [37.0662, 37.3833], airport: 'GZT' }
  },

  airports: {
    IST: { name: 'Istanbul Airport', intl: true, serves: ['marmara'] },
    SAW: { name: 'Istanbul Sabiha Gökçen Airport', intl: true, serves: ['marmara'] },
    ESB: { name: 'Ankara Esenboğa Airport', intl: true, serves: ['central-anatolia'] },
    ADB: { name: 'İzmir Adnan Menderes Airport', intl: true, serves: ['aegean'] },
    AYT: { name: 'Antalya Airport', intl: true, serves: ['mediterranean'] },
    DLM: { name: 'Dalaman Airport', intl: true, serves: ['mediterranean', 'aegean'] },
    BJV: { name: 'Milas–Bodrum Airport', intl: true, serves: ['aegean'] },
    TZX: { name: 'Trabzon Airport', intl: true, serves: ['black-sea'] },
    GZT: { name: 'Gaziantep Airport', intl: true, serves: ['southeastern-anatolia'] },
    ADA: { name: 'Adana Şakirpaşa Airport', intl: true, serves: ['mediterranean'] },
    NAV: { name: 'Nevşehir Kapadokya Airport', intl: false, serves: ['central-anatolia'] },
    ASR: { name: 'Kayseri Erkilet Airport', intl: false, serves: ['central-anatolia'] },
    DNZ: { name: 'Denizli Çardak Airport', intl: false, serves: ['aegean'] },
    ERZ: { name: 'Erzurum Airport', intl: false, serves: ['eastern-anatolia'] },
    VAN: { name: 'Van Ferit Melen Airport', intl: false, serves: ['eastern-anatolia'] },
    KSY: { name: 'Kars Harakani Airport', intl: false, serves: ['eastern-anatolia'] },
    GNY: { name: 'Şanlıurfa GAP Airport', intl: false, serves: ['southeastern-anatolia'] },
    MQM: { name: 'Mardin Airport', intl: false, serves: ['southeastern-anatolia'] },
    MLX: { name: 'Malatya Erhaç Airport', intl: false, serves: ['eastern-anatolia'] }
  },

  // Intercity links between regions (both directions)
  corridors: [
    { between: ['marmara', 'central-anatolia'], modes: [{ type: 'train', label: 'YHT high-speed train Istanbul → Ankara (about 4.5 h)', url: 'https://ebilet.tcddtasimacilik.gov.tr' }, { type: 'flight', label: 'Flights IST → ESB (1 h)' }, { type: 'drive', hours: 5 }] },
    { between: ['marmara', 'aegean'], modes: [{ type: 'flight', label: 'Flights IST → ADB (1 h)' }, { type: 'drive', hours: 5, label: 'Drive Istanbul → İzmir on the O-5 motorway (about 5 h)' }] },
    { between: ['marmara', 'mediterranean'], modes: [{ type: 'flight', label: 'Flights IST → AYT (1 h 20 min)' }, { type: 'drive', hours: 8 }] },
    { between: ['marmara', 'black-sea'], modes: [{ type: 'flight', label: 'Flights IST → TZX (1 h 45 min)' }, { type: 'drive', hours: 12 }] },
    { between: ['marmara', 'southeastern-anatolia'], modes: [{ type: 'flight', label: 'Flights IST → GZT (1 h 45 min)' }, { type: 'drive', hours: 13 }] },
    { between: ['marmara', 'eastern-anatolia'], modes: [{ type: 'flight', label: 'Flights IST → ERZ / VAN (2 h)' }, { type: 'train', label: 'Eastern Express (Doğu Ekspresi) Ankara → Kars, about 24 h', url: 'https://ebilet.tcddtasimacilik.gov.tr' }] },
    { between: ['central-anatolia', 'aegean'], modes: [{ type: 'flight', label: 'Flights ESB → ADB (1 h 10 min)' }, { type: 'drive', hours: 7 }] },
    { between: ['central-anatolia', 'mediterranean'], modes: [{ type: 'flight', label: 'Flights ESB → AYT (1 h 10 min)' }, { type: 'drive', hours: 6 }] },
    { between: ['central-anatolia', 'black-sea'], modes: [{ type: 'flight', label: 'Flights ESB → TZX (1 h 20 min)' }, { type: 'drive', hours: 10 }] },
    { between: ['central-anatolia', 'eastern-anatolia'], modes: [{ type: 'train', label: 'Eastern Express (Doğu Ekspresi) Ankara → Erzurum → Kars, about 24 h', url: 'https://ebilet.tcddtasimacilik.gov.tr' }, { type: 'flight', label: 'Flights ESB → ERZ / VAN (1 h 30 min)' }, { type: 'drive', hours: 11 }] },
    { between: ['central-anatolia', 'southeastern-anatolia'], modes: [{ type: 'flight', label: 'Flights ESB → GZT (1 h 20 min)' }, { type: 'drive', hours: 8 }] },
    { between: ['aegean', 'mediterranean'], modes: [{ type: 'drive', hours: 6, label: 'Drive İzmir → Antalya along the coast (about 6 h)' }, { type: 'flight', label: 'Flights ADB → AYT (1 h)' }] },
    { between: ['mediterranean', 'southeastern-anatolia'], modes: [{ type: 'drive', hours: 4, label: 'Drive Adana → Gaziantep (about 2.5 h) or Antalya → Gaziantep (about 9 h)' }, { type: 'flight', label: 'Flights AYT → GZT via Istanbul or Ankara' }] },
    { between: ['southeastern-anatolia', 'eastern-anatolia'], modes: [{ type: 'drive', hours: 8, label: 'Drive Gaziantep → Malatya → Van (long; break the journey)' }, { type: 'flight', label: 'Flights GZT → VAN via Istanbul or Ankara' }] },
    { between: ['black-sea', 'eastern-anatolia'], modes: [{ type: 'drive', hours: 4.5, label: 'Drive Trabzon → Erzurum over the Zigana pass (about 4.5 h)' }] },
    { between: ['black-sea', 'aegean'], modes: [] },
    { between: ['black-sea', 'mediterranean'], modes: [] },
    { between: ['black-sea', 'southeastern-anatolia'], modes: [] },
    { between: ['aegean', 'southeastern-anatolia'], modes: [] },
    { between: ['aegean', 'eastern-anatolia'], modes: [] },
    { between: ['mediterranean', 'eastern-anatolia'], modes: [] }
  ],

  // Travel base for spots that sit far from their region hub
  spotHubs: {
    'cappadocia-goreme': 'Göreme', derinkuyu: 'Göreme', 'ihlara-valley': 'Göreme',
    ephesus: 'Selçuk', 'house-virgin-mary': 'Selçuk', sirince: 'Selçuk',
    'gobekli-tepe': 'Şanlıurfa', harran: 'Şanlıurfa', halfeti: 'Şanlıurfa',
    ani: 'Kars', 'akdamar-lake-van': 'Van', 'ishak-pasha-palace': 'Doğubayazıt', 'mount-ararat': 'Doğubayazıt'
  },

  // Itinerary building blocks: ordered spot ids per city cluster
  clusters: {
    istanbul: { title: 'Istanbul — the historic peninsula', city: 'Istanbul', minSpots: 2, spots: ['hagia-sophia', 'blue-mosque', 'topkapi-palace', 'basilica-cistern', 'grand-bazaar', 'suleymaniye-mosque', 'spice-bazaar', 'bosphorus-cruise', 'galata-tower', 'dolmabahce-palace', 'chora-church', 'eyup-sultan', 'balat-fener', 'istanbul-archaeology', 'maidens-tower', 'princes-islands'] },
    bursa: { dayTrip: true, title: 'Bursa & İznik', city: 'Bursa', spots: ['bursa-cumalikizik', 'iznik', 'uludag'] },
    edirne: { dayTrip: true, title: 'Edirne', city: 'Edirne', spots: ['selimiye-mosque'] },
    canakkale: { title: 'Troy, Gallipoli & Assos', city: 'Çanakkale', spots: ['troy', 'gallipoli', 'assos'] },
    izmir: { title: 'İzmir & Çeşme', city: 'İzmir', spots: ['izmir-kemeralti', 'cesme-alacati'] },
    pergamon: { dayTrip: true, title: 'Pergamon & Sardis', city: 'Bergama', spots: ['pergamon', 'sardis'] },
    ephesus: { title: 'Ephesus & Selçuk', city: 'Selçuk', spots: ['ephesus', 'house-virgin-mary', 'sirince', 'priene-miletus-didyma'] },
    pamukkale: { title: 'Pamukkale & Aphrodisias', city: 'Pamukkale', spots: ['pamukkale', 'aphrodisias'] },
    bodrum: { title: 'Bodrum & the Aegean coast', city: 'Bodrum', spots: ['bodrum', 'marmaris-datca'] },
    lycia: { title: 'The Lycian coast', city: 'Fethiye', spots: ['oludeniz', 'dalyan-kaunos', 'saklikent', 'patara', 'xanthos-letoon', 'kas-kekova'] },
    antalya: { title: 'Antalya & the Pamphylian cities', city: 'Antalya', spots: ['antalya-kaleici', 'perge', 'aspendos', 'side', 'termessos', 'olympos-chimaera', 'alanya-castle'] },
    lakes: { dayTrip: true, title: 'Sagalassos & Lake Salda', city: 'Burdur', spots: ['sagalassos', 'lake-salda'] },
    cappadocia: { title: 'Cappadocia', city: 'Göreme', minSpots: 1, spots: ['cappadocia-goreme', 'derinkuyu', 'ihlara-valley', 'sultanhani'] },
    ankara: { title: 'Ankara', city: 'Ankara', spots: ['anitkabir', 'anatolian-civilizations', 'gordion'] },
    hattusa: { dayTrip: true, title: 'Hattusa — the Hittite capital', city: 'Boğazkale', spots: ['hattusa'] },
    konya: { title: 'Konya', city: 'Konya', spots: ['mevlana-konya', 'catalhoyuk', 'esrefoglu-mosque'] },
    eskisehir: { title: 'Eskişehir', city: 'Eskişehir', spots: ['eskisehir-odunpazari'] },
    sivas: { title: 'Sivas & Divriği', city: 'Divriği', spots: ['divrigi'] },
    tuz: { dayTrip: true, title: 'Lake Tuz', city: 'Şereflikoçhisar', spots: ['tuz-golu'] },
    blacksea_west: { title: 'Safranbolu & the western Black Sea', city: 'Safranbolu', spots: ['safranbolu', 'amasra', 'yedigoller', 'amasya'] },
    trabzon: { title: 'Trabzon & the eastern Black Sea', city: 'Trabzon', spots: ['sumela-monastery', 'trabzon-hagia-sophia', 'uzungol', 'ayder-rize'] },
    van: { title: 'Van & Mount Ararat', city: 'Van', spots: ['akdamar-lake-van', 'ishak-pasha-palace', 'mount-ararat'] },
    kars: { title: 'Kars & Ani', city: 'Kars', spots: ['ani'] },
    erzurum: { title: 'Erzurum', city: 'Erzurum', spots: ['erzurum'] },
    malatya: { title: 'Malatya', city: 'Malatya', spots: ['arslantepe'] },
    gaziantep: { title: 'Gaziantep', city: 'Gaziantep', spots: ['zeugma-museum', 'hatay-antakya'] },
    sanliurfa: { title: 'Şanlıurfa & Göbekli Tepe', city: 'Şanlıurfa', minSpots: 1, spots: ['gobekli-tepe', 'sanliurfa-balikligol', 'harran', 'halfeti'] },
    adiyaman: { title: 'Mount Nemrut', city: 'Kâhta', spots: ['mount-nemrut'] },
    mardin: { title: 'Mardin & Diyarbakır', city: 'Mardin', spots: ['mardin', 'diyarbakir-fortress', 'hasankeyf'] }
  },

  // Rough planning costs in EUR (estimates only — Turkish prices move fast with inflation,
  // the season and the exchange rate)
  costs: {
    usd: 0.92,
    // per room per night: [economy, comfort, luxury] each as [low, high]
    lodging: {
      Istanbul: [[45, 80], [95, 180], [260, 700]],
      Göreme: [[45, 85], [100, 200], [280, 800]],
      Antalya: [[35, 65], [75, 150], [200, 550]],
      Bodrum: [[45, 90], [100, 200], [300, 900]],
      Fethiye: [[35, 70], [80, 160], [220, 600]],
      İzmir: [[35, 65], [70, 140], [180, 450]],
      Selçuk: [[30, 55], [60, 120], [160, 380]],
      Pamukkale: [[25, 50], [55, 110], [150, 350]],
      Ankara: [[30, 55], [65, 125], [160, 380]],
      Trabzon: [[30, 55], [60, 120], [150, 350]],
      Safranbolu: [[30, 55], [60, 120], [150, 340]],
      Mardin: [[30, 60], [70, 140], [180, 420]],
      Şanlıurfa: [[25, 50], [55, 110], [140, 320]],
      default: [[25, 50], [55, 110], [140, 340]]
    },
    food: [[12, 22], [25, 50], [65, 140]],          // per person per day
    taxiPerDay: [10, 32],                            // per vehicle (up to 4 people)
    rentalPerDay: [[25, 42], [40, 70], [85, 170]],   // car hire per day by tier (excl. fuel)
    legs: { train: [10, 35], flight: [35, 110], bus: [8, 25] }, // per person per leg
    fuelPerKm: [0.07, 0.11],
    tickets: { required: [12, 45], partial: [0, 20] } // per person per spot
  },

  // Where to stay: general area advice per city (no individual hotels are endorsed)
  stay: {
    Istanbul: 'Sultanahmet puts you next to Hagia Sophia and the Blue Mosque but empties at night; Karaköy, Galata and Beyoğlu are livelier with better food; Kadıköy on the Asian side is cheaper and more local. Anywhere on the tram or metro line works.',
    Göreme: 'Göreme is the most central and has the best balloon views from hotel terraces; Uçhisar is quieter and more upmarket; Ürgüp suits travellers who want restaurants and a town. Book cave hotels months ahead for spring and autumn.',
    Antalya: 'Kaleiçi old town for atmosphere and walkable sights; Konyaaltı and Lara for beach hotels; Side, Belek and Alanya are resort strips an hour or more out.',
    Bodrum: 'Bodrum town for the castle, harbour and nightlife; Gümüşlük, Türkbükü and Yalıkavak for quieter bays; book early for July and August.',
    Fethiye: 'Fethiye town is the practical base with the harbour and market; Ölüdeniz is right at the lagoon and busier; Kayaköy and Faralya suit walkers on the Lycian Way.',
    İzmir: 'Alsancak and the Kordon for restaurants and the waterfront; Konak for the bazaar and transport. İzmir works well as a base for Ephesus and Pergamon.',
    Selçuk: 'Small guesthouses in Selçuk put you 3 km from Ephesus and on the train line; Şirince in the hills is prettier but needs a car or a dolmuş.',
    Pamukkale: 'Pamukkale village sits at the foot of the travertines and most hotels have thermal pools; Karahayıt is the spa alternative. One night is usually enough.',
    Ankara: 'Kızılay and Çankaya are central for restaurants and the metro; Ulus puts you by the castle and the Museum of Anatolian Civilizations.',
    Trabzon: 'Stay central near Meydan square for tours to Sumela and Uzungöl; or sleep up in Uzungöl or Ayder for the mountains, which is far better than a day trip.',
    Safranbolu: 'Sleep in a restored Ottoman konak in Çarşı, the old quarter — the whole point of coming. The new town (Kıranköy) is cheaper but has no atmosphere.',
    Mardin: 'Old Mardin stone mansion hotels with terraces facing the Mesopotamian plain are the experience; new Mardin below is cheaper and duller. The old town is steep and stepped.',
    Şanlıurfa: 'Stay near Balıklıgöl in a restored courtyard house to walk to the pools, bazaar and museum. The city is conservative and has little alcohol.',
    default: 'Pick a hotel near the sights you will visit most and on a metro, tram or dolmuş route, and check free-cancellation terms — Turkish prices and availability move quickly in season.'
  },

  // Which clusters belong to which region (for domestic planning)
  provinceClusters: {
    marmara: ['istanbul', 'bursa', 'edirne', 'canakkale'],
    aegean: ['izmir', 'ephesus', 'pergamon', 'pamukkale', 'bodrum'],
    mediterranean: ['antalya', 'lycia', 'lakes'],
    'central-anatolia': ['cappadocia', 'ankara', 'konya', 'hattusa', 'eskisehir', 'sivas', 'tuz'],
    'black-sea': ['blacksea_west', 'trabzon'],
    'eastern-anatolia': ['van', 'kars', 'erzurum', 'malatya'],
    'southeastern-anatolia': ['gaziantep', 'sanliurfa', 'adiyaman', 'mardin']
  }
});
