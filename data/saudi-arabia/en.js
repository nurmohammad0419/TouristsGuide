/*
 * Saudi Arabia — English content
 * ---------------------------------------------------------------
 * Edit freely. Each spot is one object inside `spots`.
 * Fields:
 *   id, name, nativeName, region (must match a regions[].id), city,
 *   categories: ids from `categories`, unesco, muslimsOnly, featured,
 *   coords [lat, lng], tagline, overview[], history[], religious[] (optional),
 *   highlights[], hours{summary, details[], note}, tickets{required, price, how[], links[]},
 *   gettingThere{airport, road, transport}, bestTime, duration, dress, tips[], wiki
 * Photos live in media.js (keyed by spot id).
 */
TG.registerCountry('saudi-arabia', 'en', {
  meta: { lastReviewed: 'November 2026' },

  name: 'Saudi Arabia',
  officialName: 'Kingdom of Saudi Arabia',
  nativeName: 'المملكة العربية السعودية',
  flag: '🇸🇦',
  tagline: 'From the two holiest sites in Islam to Nabataean tombs, coral reefs and the Empty Quarter.',
  heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Qasr_al-Farid%2C_Hegra_%28Madain_Salih%29%2C_1st_cent._CE%2C_Saudi_Arabia_%2810%29.jpg/1920px-Qasr_al-Farid%2C_Hegra_%28Madain_Salih%29%2C_1st_cent._CE%2C_Saudi_Arabia_%2810%29.jpg',

  intro: [
    'Saudi Arabia occupies most of the Arabian Peninsula and is the largest country in the Middle East. It is the birthplace of Islam and home to its two holiest cities, Makkah and Madinah, which receive millions of pilgrims every year.',
    'Since opening to leisure tourism with the tourist eVisa in 2019, the Kingdom has revealed a remarkably diverse landscape: the sandstone canyons and Nabataean tombs of AlUla, the mud-brick capital of the first Saudi state at Diriyah, the coral-fringed Red Sea coast, the cool green mountains of Asir and some of the oldest rock art on Earth in Hail.'
  ],

  stats: [
    { value: 13, label: 'Provinces' },
    { value: 139, label: 'Governorates' },
    { value: 8, label: 'UNESCO sites' },
    { value: 2149690, label: 'Area (km²)', format: 'compact' },
    { value: 35.3, label: 'Population (million)', decimals: 1 }
  ],

  facts: [
    { icon: '🏛️', label: 'Capital', value: 'Riyadh' },
    { icon: '🗣️', label: 'Official language', value: 'Arabic (English widely used)' },
    { icon: '☪️', label: 'Religion', value: 'Islam' },
    { icon: '💰', label: 'Currency', value: 'Saudi Riyal (SAR) — pegged at 3.75 SAR = 1 USD' },
    { icon: '🕒', label: 'Time zone', value: 'Arabia Standard Time (UTC+3), no daylight saving' },
    { icon: '📞', label: 'Calling code', value: '+966' },
    { icon: '🚨', label: 'Emergency', value: '911 (unified number)' },
    { icon: '🔌', label: 'Electricity', value: '230 V, 60 Hz — Type G plugs' },
    { icon: '🚗', label: 'Driving side', value: 'Right' },
    { icon: '🏔️', label: 'Highest point', value: 'Jabal Sawda, about 3,000 m (Asir)' },
    { icon: '🌊', label: 'Coastlines', value: 'Red Sea (west) and Arabian Gulf (east)' },
    { icon: '🎉', label: 'National days', value: 'Founding Day 22 Feb · National Day 23 Sep' },
    { icon: '👑', label: 'Government', value: 'Absolute monarchy' },
    { icon: '🛂', label: 'Tourist visa', value: 'eVisa / visa on arrival for many nationalities' },
    { icon: '📅', label: 'Weekend', value: 'Friday and Saturday' },
    { icon: '🌐', label: 'Internet domain', value: '.sa' }
  ],

  overview: [
    { title: 'Geography', icon: '🗺️', text: 'Covering about 2.15 million km², Saudi Arabia stretches from the Red Sea to the Arabian Gulf. Its interior is dominated by the Najd plateau and vast sand seas — the Nafud in the north and the Rub\' al Khali (Empty Quarter), the largest continuous sand desert in the world, in the south. The Sarawat mountains run along the west coast, rising above 3,000 m in Asir, where cooler weather, terraced farms and juniper forests surprise many visitors.' },
    { title: 'History', icon: '📜', text: 'The peninsula has been inhabited for tens of thousands of years, as rock art in Hail and Najran shows. Ancient kingdoms such as Dadan, Lihyan and the Nabataeans controlled the incense trade routes. In the 7th century Islam emerged in Makkah and Madinah. The first Saudi state was founded in Diriyah in 1727; the modern Kingdom was unified by King Abdulaziz ibn Saud and proclaimed on 23 September 1932.' },
    { title: 'Faith & culture', icon: '🕌', text: 'Islam shapes daily life: the call to prayer is heard five times a day, and many businesses pause briefly at prayer times. Hospitality is central — guests are welcomed with Arabic coffee (qahwa) and dates. Traditional arts include Al-Ardah (the sword dance, listed by UNESCO), Sadu weaving and Al-Qatt Al-Asiri wall painting.' },
    { title: 'Modern Saudi Arabia', icon: '🏙️', text: 'Under Vision 2030 the country is diversifying away from oil, investing heavily in tourism, culture and entertainment. Giga-projects such as the Red Sea destinations, AlUla, Diriyah and NEOM, the Riyadh Metro and the Haramain High Speed Railway are transforming how visitors travel and what they can see.' },
    { title: 'Climate', icon: '☀️', text: 'Most of the country is hot and dry. Summer (June–August) often exceeds 45 °C in Riyadh and the east, while the Red Sea coast is hot and humid. The best travel season is October to March, when days are warm and nights are cool — in the desert and northern highlands nights can drop near freezing. Asir and Al-Bahah stay pleasant even in summer.' },
    { title: 'Economy', icon: '📈', text: 'Saudi Arabia holds some of the world\'s largest oil reserves and is a G20 member. Tourism is a fast-growing sector, with the government targeting 150 million visits a year by 2030, including religious visitors performing Umrah and Hajj.' }
  ],

  unesco: [
    { name: 'Hegra Archaeological Site (al-Hijr / Madā\'in Ṣāliḥ)', year: 2008, spot: 'hegra' },
    { name: 'At-Turaif District in ad-Dir\'iyah', year: 2010, spot: 'at-turaif' },
    { name: 'Historic Jeddah, the Gate to Makkah', year: 2014, spot: 'historic-jeddah' },
    { name: 'Rock Art in the Hail Region', year: 2015, spot: 'hail-rock-art' },
    { name: 'Al-Ahsa Oasis, an Evolving Cultural Landscape', year: 2018, spot: 'al-ahsa-oasis' },
    { name: 'Ḥimā Cultural Area', year: 2021, spot: 'hima' },
    { name: '\'Uruq Bani Mu\'arid (Empty Quarter protected area)', year: 2023 },
    { name: 'Al-Faw Archaeological Area', year: 2024 }
  ],

  categories: {
    religious: { label: 'Religious', icon: '🕌' },
    heritage: { label: 'Heritage & History', icon: '🏛️' },
    archaeology: { label: 'Archaeology', icon: '🏺' },
    nature: { label: 'Nature & Landscape', icon: '🏜️' },
    coast: { label: 'Sea & Islands', icon: '🌊' },
    modern: { label: 'Modern & Culture', icon: '🏙️' }
  },

  regions: [
    { id: 'riyadh', name: 'Riyadh Province', nativeName: 'منطقة الرياض', capital: 'Riyadh', area: 404240, population: 8.6,
      description: 'The political heart of the Kingdom on the Najd plateau: a booming capital, the birthplace of the Saudi state at Diriyah and dramatic Tuwaiq escarpment cliffs.',
      governorates: ['Al-Kharj', 'Al-Dawadmi', 'Majmaah', 'Diriyah', 'Wadi Al-Dawasir', 'Al-Zulfi', 'Afif', 'Al-Quway\'iyah', 'Al-Muzahmiyya', 'Al-Dilam', 'Al-Aflaj', 'Shaqra', 'Hotat Bani Tamim', 'Rimah', 'Al-Sulayyil', 'Al-Rayn', 'Dhurma', 'Huraymila', 'Thadig', 'Al-Ghat', 'Al-Hariq', 'Marat'] },
    { id: 'makkah', name: 'Makkah Province', nativeName: 'منطقة مكة المكرمة', capital: 'Makkah', area: 153128, population: 8.0,
      description: 'Home to the holiest city in Islam, the historic Red Sea port of Jeddah and the cool mountain resort of Taif.',
      governorates: ['Jeddah', 'Taif', 'Al-Qunfudhah', 'Rabigh', 'Bahrah', 'Al-Jumum', 'Al-Lith', 'Al-Ardiyat', 'Khulays', 'Ranyah', 'Turubah', 'Al-Khurmah', 'Adum', 'Al-Muwayh', 'Maysan', 'Al-Kamil'] },
    { id: 'madinah', name: 'Madinah Province', nativeName: 'منطقة المدينة المنورة', capital: 'Madinah', area: 151990, population: 2.1,
      description: 'The City of the Prophet ﷺ and, to the north, AlUla — an open-air museum of Nabataean and Dadanite civilisation.',
      governorates: ['Yanbu', 'AlUla', 'Badr', 'Mahd adh-Dhahab', 'Khaybar', 'Al-Hunakiyah', 'Wadi al-Fara', 'Al-Ais'] },
    { id: 'eastern', name: 'Eastern Province', nativeName: 'المنطقة الشرقية', capital: 'Dammam', area: 672522, population: 5.1,
      description: 'The largest province: Gulf coastline, the oil industry\'s heartland around Dhahran, and the vast Al-Ahsa palm oasis.',
      governorates: ['Al-Ahsa', 'Khobar', 'Qatif', 'Jubail', 'Hafar al-Batin', 'Khafji', 'Nariyah', 'Abqaiq', 'Ras Tanura', 'Qaryat al-Ulya', 'Al-Udeid', 'Al-Bayda'] },
    { id: 'asir', name: 'Asir Province', nativeName: 'منطقة عسير', capital: 'Abha', area: 76693, population: 2.0,
      description: 'Green highlands with the country\'s highest peaks, misty forests, colourful stone villages and the Al-Qatt Al-Asiri art tradition.',
      governorates: ['Khamis Mushait', 'Muhayil', 'Bisha', 'Ahad Rafidah', 'Balqarn', 'Sarat Ubaida', 'Rijal Almaa', 'Al-Majaridah', 'Bariq', 'Al-Namas', 'Tathlith', 'Dhahran Al-Janub', 'Al-Birk', 'Tarib', 'Al-Harjah', 'Tanomah', 'Al-Amwah'] },
    { id: 'qassim', name: 'Al-Qassim Province', nativeName: 'منطقة القصيم', capital: 'Buraidah', area: 58046, population: 1.3,
      description: 'The agricultural breadbasket of Najd, famous for dates, camel markets and traditional mud-brick towns like Unaizah.',
      governorates: ['Unaizah', 'Ar Rass', 'Al-Bukiryah', 'Al-Badai\'', 'Al-Mithnab', 'Al-Nabhaniyah', 'Asyah', 'Riyadh Al-Khabra', 'Uyun Al-Jiwa', 'Dhariyah', 'Uqlat Al-Suqur', 'Al-Shimasiyah', 'Abanat'] },
    { id: 'tabuk', name: 'Tabuk Province', nativeName: 'منطقة تبوك', capital: 'Tabuk', area: 146072, population: 0.89,
      description: 'The north-west frontier: red-rock canyons, a long Red Sea coast, the Hejaz Railway and the NEOM development area.',
      governorates: ['Umluj', 'Al-Wajh', 'Duba', 'Tayma', 'Haql', 'Al-Bad\''] },
    { id: 'hail', name: 'Hail Province', nativeName: 'منطقة حائل', capital: 'Hail', area: 103887, population: 0.75,
      description: 'Granite mountains on the edge of the Nafud desert, legendary for generosity (the home of Hatim al-Tai) and world-class prehistoric rock art.',
      governorates: ['Hait', 'Baqaa', 'Shanan', 'Shamli', 'Sumairah', 'Sulaimi', 'Mawqaq', 'Ghazalah'] },
    { id: 'jazan', name: 'Jazan Province', nativeName: 'منطقة جازان', capital: 'Jazan', area: 11671, population: 1.4,
      description: 'The tropical south-west: coffee-growing Fayfa mountains, mango farms and the pristine Farasan Islands in the Red Sea.',
      governorates: ['Sabya', 'Abu \'Arish', 'Samtah', 'Ahad Al-Masarihah', 'Baish', 'Al-Ardah', 'Al-Darb', 'Damad', 'Al-Dayer', 'Al-Tuwal', 'Al-Eidabi', 'Harub', 'Fayfa', 'Ar Rayth', 'Farasan Islands', 'Al-Harth'] },
    { id: 'najran', name: 'Najran Province', nativeName: 'منطقة نجران', capital: 'Najran', area: 149511, population: 0.59,
      description: 'A fertile valley on the Yemeni border with tall mud towers, ancient Al-Ukhdood and the Hima rock-art landscape.',
      governorates: ['Sharurah', 'Habona', 'Yadamah', 'Thar', 'Badr Al-Janub', 'Khubash'] },
    { id: 'bahah', name: 'Al-Bahah Province', nativeName: 'منطقة الباحة', capital: 'Al-Bahah', area: 9921, population: 0.34,
      description: 'The smallest province, a mountain retreat with more than 50 forests, stone watchtowers and the marble village of Thee Ain.',
      governorates: ['Baljurashi', 'Al-Mikhwah', 'Al-Aqiq', 'Qilwah', 'Al-Mandaq', 'Al-Qura', 'Bani Hasan', 'Far\'at Ghamid az-Zinad', 'Al-Hujrah'] },
    { id: 'northern-borders', name: 'Northern Borders Province', nativeName: 'منطقة الحدود الشمالية', capital: 'Arar', area: 111797, population: 0.37,
      description: 'Open steppe along the Iraqi and Jordanian borders, crossed by the ancient Darb Zubaydah pilgrim road.',
      governorates: ['Rafha', 'Turaif', 'Al-Uwayqilah'] },
    { id: 'jawf', name: 'Al-Jawf Province', nativeName: 'منطقة الجوف', capital: 'Sakaka', area: 100212, population: 0.6,
      description: 'An ancient crossroads of caravans, olive groves and the historic oasis town of Dumat al-Jandal.',
      governorates: ['Qurayyat', 'Dumat al-Jandal', 'Tabarjal'] }
  ],

  travel: [
    { icon: '🛂', title: 'Visa', text: 'Citizens of many countries can get a tourist eVisa online (valid one year, multiple entry, stays up to 90 days) that also allows Umrah outside the Hajj season. Others apply through an embassy. Holders of US, UK or Schengen visas may be eligible for a visa on arrival.', link: { label: 'Saudi eVisa portal', url: 'https://visa.visitsaudi.com' } },
    { icon: '🕋', title: 'Umrah, Hajj & the Rawdah', text: 'Umrah and a visit to Al-Rawdah Al-Sharifah in the Prophet\'s Mosque require a free permit booked in the official Nusuk app. Hajj is booked through Nusuk Hajj or your country\'s approved operators. Only Muslims may enter the city of Makkah.', link: { label: 'Nusuk (official)', url: 'https://www.nusuk.sa' } },
    { icon: '✈️', title: 'Getting in', text: 'Main airports: King Khalid (RUH) Riyadh, King Abdulaziz (JED) Jeddah, Prince Mohammad bin Abdulaziz (MED) Madinah, King Fahd (DMM) Dammam, plus AlUla (ULH), Abha (AHB) and Red Sea International (RSI).', link: { label: 'Saudia airlines', url: 'https://www.saudia.com' } },
    { icon: '🚄', title: 'Getting around', text: 'The Haramain High Speed Railway links Makkah – Jeddah – KAEC – Madinah. Saudi Arabia Railways runs Riyadh – Qassim – Hail – Al-Jawf and Riyadh – Hofuf – Dammam. Riyadh has a new metro. Elsewhere, domestic flights, rental cars and ride-hailing apps (Uber, Careem) are the norm.', link: { label: 'Haramain railway', url: 'https://sar.hhr.sa' } },
    { icon: '👗', title: 'Dress & etiquette', text: 'Dress modestly in public: shoulders and knees covered for everyone; avoid tight or see-through clothing. Headscarves are not required for non-Muslim women but are required in mosques. Public displays of affection, alcohol and drugs are prohibited.' },
    { icon: '💳', title: 'Money', text: 'Cards and Apple/Google Pay are accepted almost everywhere. Carry some cash for markets, small villages and tips. ATMs are widespread.' },
    { icon: '🌙', title: 'Ramadan', text: 'During Ramadan eating, drinking and smoking in public during daylight are not allowed. Opening hours shift to the evening and many attractions stay open late at night.' },
    { icon: '🌐', title: 'Official tourism site', text: 'The Saudi Tourism Authority publishes events, itineraries and up-to-date entry rules.', link: { label: 'VisitSaudi', url: 'https://www.visitsaudi.com' } }
  ],

  spots: [
    /* ======================= MAKKAH PROVINCE ======================= */
    {
      id: 'masjid-al-haram', name: 'Masjid al-Haram (The Grand Mosque)', nativeName: 'المسجد الحرام',
      region: 'makkah', city: 'Makkah', categories: ['religious'], muslimsOnly: true, featured: true,
      coords: [21.4225, 39.8262], wiki: 'https://en.wikipedia.org/wiki/Masjid_al-Haram',
      tagline: 'The holiest site in Islam, built around the Kaaba.',
      overview: [
        'Masjid al-Haram surrounds the Kaaba, the cube-shaped House of God towards which more than a billion Muslims face in prayer every day. It is the largest mosque in the world and, after successive expansions, can hold well over two million worshippers during peak seasons.',
        'The mosque contains the Mataf (the circling area around the Kaaba), the Maqam Ibrahim, the Black Stone (al-Hajar al-Aswad), the hills of Safa and Marwah joined by the Mas\'a gallery, and the Zamzam well.'
      ],
      history: [
        'According to Islamic tradition, the Kaaba was raised by Prophet Ibrahim (Abraham) and his son Ismail. By the 6th century it had become a centre of pilgrimage for Arabian tribes.',
        'In 630 CE Prophet Muhammad ﷺ returned to Makkah, cleared the Kaaba of idols and restored it to the worship of one God. Caliph Umar built the first enclosing wall in 638, and the Umayyads, Abbasids and Ottomans each enlarged the mosque — the elegant Ottoman arcades from the 16th century still stand.',
        'Since 1955 the Saudi state has carried out several major expansions, adding new wings, multi-level Mataf bridges, the King Abdullah expansion to the north and extensive cooling, escalator and crowd-management systems.'
      ],
      religious: [
        'Every Muslim faces the Kaaba (the Qibla) in each of the five daily prayers. Performing Hajj here — once in a lifetime for those able — is one of the Five Pillars of Islam.',
        'Umrah, the "lesser pilgrimage", can be performed at any time of year and consists of entering the state of ihram, Tawaf (circling the Kaaba seven times), Sa\'i (walking seven times between Safa and Marwah) and shortening or shaving the hair.',
        'A prayer in Masjid al-Haram is described in hadith as being worth 100,000 prayers elsewhere. Drinking Zamzam water, believed to be blessed, is part of every pilgrim\'s visit.'
      ],
      highlights: ['The Kaaba and the Kiswah (black silk covering embroidered in gold)', 'Black Stone and Maqam Ibrahim', 'Safa and Marwah (Mas\'a)', 'Zamzam water dispensers throughout the mosque', 'Ottoman-era arcades', 'Exhibition of the Two Holy Mosques Architecture (nearby)'],
      hours: { summary: 'Open 24 hours, every day', details: ['Busiest: Friday prayers, Ramadan (especially the last 10 nights) and Hajj season', 'Quietest: late night and mid-morning on weekdays'], note: 'Some areas (e.g. the ground-level Mataf) may be restricted to pilgrims in ihram at busy times.' },
      tickets: { required: 'partial', price: 'Free', how: ['Entry to the mosque for prayer is free.', 'To perform Umrah you must book a free Umrah permit in the Nusuk app (choose date and time slot).', 'Hajj requires an official Hajj permit via Nusuk Hajj or an authorised operator in your country.'], links: [{ label: 'Nusuk – Umrah permits', url: 'https://www.nusuk.sa' }, { label: 'Nusuk Hajj', url: 'https://hajj.nusuk.sa' }] },
      access: 'Only Muslims may enter Makkah. Signposted checkpoints on the highways divert non-Muslims away from the city.',
      gettingThere: { airport: 'King Abdulaziz International (JED), Jeddah — about 100 km', road: 'Highway 40 from Jeddah (about 1 hour 15 minutes). Private cars are restricted near the Haram; use the park-and-ride lots at the city edge.', transport: 'Haramain High Speed Railway from Jeddah Airport / Jeddah / Madinah to Makkah station, then a short taxi or bus. Makkah buses connect hotels and park-and-ride lots to the Haram.' },
      bestTime: 'November – February for cooler weather; avoid peak Ramadan and Hajj unless performing them', duration: '3 hours for Umrah; most pilgrims stay several days',
      dress: 'Men performing Umrah wear two white unstitched ihram cloths; women wear loose modest clothing covering the body except face and hands. Remove shoes before entering and carry them in a bag.',
      tips: ['Download Nusuk before you travel and book your Umrah slot.', 'Agree a meeting point with companions — door numbers are a good reference (e.g. King Abdulaziz Gate No. 1).', 'Carry ID, a small bag for shoes and a refillable bottle for Zamzam.', 'Wheelchairs and electric carts are available for elderly pilgrims on the upper floors.']
    },
    {
      id: 'jabal-al-nour', name: 'Jabal al-Nour & Cave of Hira', nativeName: 'جبل النور وغار حراء',
      region: 'makkah', city: 'Makkah', categories: ['religious', 'nature'], muslimsOnly: true,
      coords: [21.4575, 39.8592], wiki: 'https://en.wikipedia.org/wiki/Jabal_al-Nour',
      tagline: 'The "Mountain of Light" where the first revelation came.',
      overview: [
        'Jabal al-Nour is a 642 m granite peak on the north-east edge of Makkah. Near its summit lies the small Cave of Hira, about 3.7 m long, where Prophet Muhammad ﷺ used to retreat in contemplation.',
        'At the foot of the mountain the Hira Cultural District hosts the Revelation Exhibition, a museum, cafés and a visitor centre that make the visit more comfortable.'
      ],
      history: [
        'Before prophethood, Muhammad ﷺ spent nights in seclusion here, especially during Ramadan. In 610 CE, according to Islamic tradition, the Angel Jibreel (Gabriel) appeared and revealed the first verses of the Qur\'an: "Read in the name of your Lord who created" (Surah Al-Alaq 96:1–5).',
        'For centuries pilgrims have climbed the mountain to see the cave. The path was improved with steps, and the cultural district at the base opened in 2023.'
      ],
      religious: [
        'Hira marks the beginning of the revelation of the Qur\'an, making it deeply meaningful for Muslims. Climbing it is not a ritual of Hajj or Umrah and carries no special religious obligation, but many visit to reflect on the start of Islam.'
      ],
      highlights: ['Cave of Hira', 'Panoramic view over Makkah and the Grand Mosque towers', 'Revelation Exhibition at Hira Cultural District'],
      hours: { summary: 'Mountain path open at all hours', details: ['Recommended climb: after Fajr or after Asr to avoid heat', 'Hira Cultural District: typically afternoon to late evening'], note: 'The climb takes 45–90 minutes one way on roughly 1,000+ steps.' },
      tickets: { required: false, price: 'Mountain: free · Exhibition: paid', how: ['No ticket needed to climb the mountain.', 'Tickets for the Revelation Exhibition can be bought at the Hira Cultural District entrance.'], links: [] },
      access: 'Located inside Makkah — Muslims only.',
      gettingThere: { airport: 'King Abdulaziz International (JED), Jeddah', road: 'About 5 km north-east of Masjid al-Haram; taxis drop off at the Hira Cultural District.', transport: 'Taxi or ride-hailing from the Haram (10–20 minutes).' },
      bestTime: 'Early morning in the cooler months (Nov – Feb)', duration: '2–3 hours',
      dress: 'Modest clothing and good walking shoes. Pilgrims usually visit outside the state of ihram.',
      tips: ['Bring water — there are small stalls on the path but prices are higher.', 'Avoid midday in summer: rocks retain intense heat.', 'Not suitable for people with heart or mobility problems.']
    },
    {
      id: 'historic-jeddah', name: 'Al-Balad — Historic Jeddah', nativeName: 'جدة التاريخية (البلد)',
      region: 'makkah', city: 'Jeddah', categories: ['heritage'], unesco: true, featured: true,
      coords: [21.4858, 39.1867], wiki: 'https://en.wikipedia.org/wiki/Al-Balad,_Jeddah',
      tagline: 'Coral-stone tower houses and lattice balconies at the "Gate to Makkah".',
      overview: [
        'Al-Balad is the old walled heart of Jeddah, a maze of alleys, souqs and multi-storey houses built from Red Sea coral stone with intricately carved wooden rawasheen (bay windows) that catch the breeze.',
        'Inscribed by UNESCO in 2014 as "Historic Jeddah, the Gate to Makkah", the district is being restored by the Historic Jeddah programme, with boutique museums, cafés, galleries and night-time cultural events.'
      ],
      history: [
        'Jeddah became the official port for Makkah in 647 CE under Caliph Uthman ibn Affan, and for over a thousand years pilgrims arriving by sea passed through its gates.',
        'Wealthy merchant families built the famous tower houses in the 19th century; landmarks include Bait Nasseef, where King Abdulaziz stayed after entering Jeddah in 1925, Bait Al-Matbouli and the Al-Shafi\'i Mosque, one of the oldest mosques in the city.',
        'The city walls were demolished in 1947 as Jeddah expanded, but the original street pattern and many houses survive.'
      ],
      religious: [
        'For centuries Al-Balad was the gateway for pilgrims travelling to Makkah for Hajj and Umrah, giving it a cosmopolitan Islamic culture with influences from Africa, Asia and beyond. Historic mosques such as Al-Shafi\'i and Al-Mimar are still in use.'
      ],
      highlights: ['Bait Nasseef', 'Al-Shafi\'i Mosque', 'Souq Al-Alawi and Souq Al-Nada', 'Bab Makkah and Bab Al-Bunt gates', 'Tiny Al-Matbouli House Museum', 'Ramadan night markets'],
      hours: { summary: 'District open daily; best 4:00 PM – midnight', details: ['Shops: roughly 9:00 AM – 12:00 PM and 4:30 PM – 11:00 PM; many close during prayers', 'House museums: usually afternoon/evening, hours vary'], note: 'Friday mornings are quiet; evenings are lively.' },
      tickets: { required: false, price: 'Free to walk; some house museums charge a small fee', how: ['Simply walk in — no ticket is needed for the streets and souqs.', 'Guided walking tours and some museums are bookable online through VisitSaudi or at the venue.'], links: [{ label: 'VisitSaudi – Jeddah', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'King Abdulaziz International (JED) — about 25–35 minutes by car', road: 'Head to the Bab Makkah / Al-Dahab Street area; public parking along the edge of the district.', transport: 'Taxi or Uber/Careem; Jeddah public buses (SAPTCO) stop nearby.' },
      bestTime: 'October – April, in the evening', duration: '3–4 hours',
      dress: 'Modest clothing; comfortable shoes for uneven alleys.',
      tips: ['Visit at sunset when the call to prayer echoes through the alleys.', 'Try local street food such as mutabbaq and balila.', 'Look up — the best details are on the upper-floor rawasheen.']
    },
    {
      id: 'king-fahd-fountain', name: 'King Fahd\'s Fountain & Jeddah Corniche', nativeName: 'نافورة الملك فهد',
      region: 'makkah', city: 'Jeddah', categories: ['modern', 'coast'],
      coords: [21.5150, 39.1450], wiki: 'https://en.wikipedia.org/wiki/King_Fahd%27s_Fountain',
      tagline: 'The world\'s tallest fountain, lighting up the Red Sea at night.',
      overview: [
        'King Fahd\'s Fountain shoots seawater up to about 260–312 m into the sky — the tallest of its kind in the world. Illuminated by hundreds of spotlights, it is visible across much of Jeddah after dark.',
        'It is best viewed from the 30 km Jeddah Corniche, a seaside promenade with parks, sculptures, beaches, the floating mosque (Al-Rahmah) and family-friendly waterfront areas.'
      ],
      history: [
        'The fountain was donated by King Fahd and completed in 1985. It was inspired by Geneva\'s Jet d\'Eau. Jeddah\'s corniche was famous from the 1970s–80s for its open-air sculpture collection, one of the largest in the world.'
      ],
      religious: null,
      highlights: ['Night-time view of the fountain', 'Al-Rahmah (floating) Mosque', 'Jeddah Waterfront parks', 'Corniche sculptures'],
      hours: { summary: 'Fountain usually operates in the evening (approx. sunset – midnight)', details: ['Corniche and waterfront: open 24 hours'], note: 'The fountain may not run in very strong winds or during maintenance.' },
      tickets: { required: false, price: 'Free', how: ['No ticket needed — view from the corniche or waterfront.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED) — about 30 minutes', road: 'Drive to the Jeddah Corniche Road; best viewpoints near the Jeddah Waterfront and Al-Hamra.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'October – April, after sunset', duration: '1–2 hours',
      dress: 'Smart-casual, modest.', tips: ['Combine with dinner at one of the waterfront restaurants.', 'Bring a light jacket in winter — the sea breeze can be cool.']
    },
    {
      id: 'taif-al-hada', name: 'Taif — Al-Hada Mountains & Rose Farms', nativeName: 'الطائف — الهدا',
      region: 'makkah', city: 'Taif', categories: ['nature', 'heritage'],
      coords: [21.3667, 40.2833], wiki: 'https://en.wikipedia.org/wiki/Taif',
      tagline: 'The cool "City of Roses" above the Hijaz escarpment.',
      overview: [
        'Taif sits at about 1,800 m in the Sarawat mountains, making it the traditional summer retreat for people from Makkah and Jeddah. The spectacular Al-Hada road winds up the escarpment through dozens of hairpin bends.',
        'In spring (March–April) Taif\'s famous Damask rose farms bloom; the petals are distilled into rose water and oil (attar) used across the Muslim world, including to perfume the Kaaba.'
      ],
      history: [
        'Taif was an important town before Islam, home to the Thaqif tribe. In 619 CE Prophet Muhammad ﷺ travelled here to invite the people to Islam; the city later embraced Islam in 630.',
        'In the Ottoman era Taif was a summer seat of government; the Shubra Palace (1900s) is a fine example of that period. Souq Okaz, a famous pre-Islamic poetry market, has been revived nearby as an annual festival.'
      ],
      religious: [
        'Taif is linked to the Prophet\'s ﷺ journey in 619 CE, when he was rejected and stoned by some of the townspeople yet prayed for them — a story often cited as a lesson in patience and mercy. The Abdullah ibn Abbas Mosque, named after the Prophet\'s cousin who is buried in Taif, is the city\'s best-known mosque.'
      ],
      highlights: ['Al-Hada mountain road and viewpoints', 'Taif Rose Festival (spring)', 'Rose water distilleries', 'Al-Shafa mountains and fruit farms', 'Abdullah ibn Abbas Mosque', 'Souq Okaz festival'],
      hours: { summary: 'Viewpoints open at all times; farms usually 8:00 AM – evening during harvest', details: ['Rose harvest season: roughly March – April', 'Al-Hada cable car (Teleferic): seasonal, mainly afternoons/evenings'], note: 'Opening times of farms and attractions vary by season.' },
      tickets: { required: false, price: 'Free (farm tours / cable car paid)', how: ['Viewpoints are free.', 'Rose farm visits are usually arranged on site or via local tour operators.'], links: [{ label: 'VisitSaudi – Taif', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'Taif Regional Airport (TIF) or Jeddah (JED, about 2 hours)', road: 'From Jeddah via Makkah bypass and the Al-Hada road (non-Muslims use the Al-Sayl Al-Kabir route that avoids Makkah).', transport: 'Rental car recommended; intercity buses (SAPTCO) from Jeddah.' },
      bestTime: 'March – April for roses; June – August to escape the heat', duration: '1 day',
      dress: 'Modest clothes; a light jacket for cool evenings.', tips: ['Buy rose oil directly from farms for the best quality.', 'Watch for baboons along the Al-Hada road — do not feed them.']
    },

    /* ======================= MADINAH PROVINCE ======================= */
    {
      id: 'masjid-an-nabawi', name: 'Al-Masjid an-Nabawi (The Prophet\'s Mosque)', nativeName: 'المسجد النبوي',
      region: 'madinah', city: 'Madinah', categories: ['religious'], featured: true,
      coords: [24.4672, 39.6111], wiki: 'https://en.wikipedia.org/wiki/Prophet%27s_Mosque',
      tagline: 'The mosque built by the Prophet ﷺ, home to the Green Dome.',
      overview: [
        'Al-Masjid an-Nabawi is the second holiest mosque in Islam. Its famous Green Dome rises above the resting place of Prophet Muhammad ﷺ and his companions Abu Bakr and Umar.',
        'Its vast courtyards are shaded by 250 giant retractable umbrellas, and the interior includes Al-Rawdah Al-Sharifah, the area between the Prophet\'s ﷺ house and his pulpit, marked by green carpets.'
      ],
      history: [
        'Prophet Muhammad ﷺ built the first mosque on this site in 622 CE, shortly after his migration (Hijrah) from Makkah, using palm trunks and mud bricks. It served as a place of prayer, a school, a court and a community centre.',
        'The Umayyad caliph Al-Walid I expanded it and included the Prophet\'s ﷺ tomb within the mosque. The Green Dome was added by the Mamluks and painted green by the Ottomans in 1837.',
        'Modern Saudi expansions — notably under King Fahd and King Abdullah — multiplied its size many times, adding air-conditioning, underground parking and the iconic umbrellas.'
      ],
      religious: [
        'A prayer in this mosque is described in hadith as better than a thousand prayers elsewhere (except Masjid al-Haram). Visiting it is a highly recommended Sunnah, and many pilgrims come before or after Hajj and Umrah.',
        'The Prophet ﷺ said that the area between his house and his pulpit is "a garden from the gardens of Paradise" — Al-Rawdah. Visitors also send greetings of peace (salam) to the Prophet ﷺ and his two companions at the tomb.'
      ],
      highlights: ['Al-Rawdah Al-Sharifah', 'Green Dome', 'Giant courtyard umbrellas', 'Al-Baqi cemetery next door', 'Dar Al-Madinah Museum and Prophet\'s Mosque Architecture Exhibition'],
      hours: { summary: 'Open 24 hours, every day', details: ['Al-Rawdah: by Nusuk appointment only; separate time slots for men and women', 'Salam at the tomb: typically after Fajr and in set windows during the day'], note: 'Non-Muslims may visit the city of Madinah but generally not enter the mosque\'s prayer halls; the outer areas around the courtyards are accessible.' },
      tickets: { required: 'partial', price: 'Free', how: ['Entry for prayer is free and needs no booking.', 'To pray in Al-Rawdah you must book a free permit in the Nusuk app.', 'Show the permit QR code at the designated gate at your time slot.'], links: [{ label: 'Nusuk – Rawdah permits', url: 'https://www.nusuk.sa' }] },
      access: 'The central area of Madinah around the mosque is open to non-Muslim visitors; the mosque interior is for Muslims.',
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED) — about 20 km', road: 'Follow signs to the Haram; large underground car parks beneath the courtyards.', transport: 'Haramain High Speed Railway from Makkah/Jeddah to Madinah station, then taxi or the Madinah bus network to the Haram.' },
      bestTime: 'October – March', duration: '2 hours to several days',
      dress: 'Loose, modest clothing; women cover hair inside the mosque. Remove shoes at the door.',
      tips: ['Book Rawdah slots early — they fill quickly in Ramadan.', 'Gate numbers are your best orientation; note the one you entered.', 'Nearby: Quba Mosque, Mount Uhud and the Hejaz Railway Museum.']
    },
    {
      id: 'quba-mosque', name: 'Quba Mosque', nativeName: 'مسجد قباء',
      region: 'madinah', city: 'Madinah', categories: ['religious'],
      coords: [24.4393, 39.6173], wiki: 'https://en.wikipedia.org/wiki/Quba_Mosque',
      tagline: 'The first mosque built in Islam.',
      overview: [
        'Quba Mosque lies about 3.5 km south of the Prophet\'s Mosque. With its four minarets and white domes, it is an elegant modern building on the site of Islam\'s very first mosque.',
        'A shaded pedestrian walkway, Quba Avenue, links the area towards the Prophet\'s Mosque, and the surrounding Quba district is being redeveloped with gardens and services.'
      ],
      history: [
        'When Prophet Muhammad ﷺ arrived from Makkah during the Hijrah in 622 CE, he stayed in Quba for several days and laid the first stones of this mosque himself, with his companions completing it.',
        'It has been rebuilt many times; the present structure was designed by Egyptian architect Abdel-Wahed El-Wakil and completed in 1986. A major expansion is under way to greatly increase its capacity.'
      ],
      religious: [
        'The Qur\'an refers to it as "a mosque founded on righteousness from the first day" (At-Tawbah 9:108). The Prophet ﷺ visited it every Saturday, and a hadith states that whoever purifies himself at home and then prays two rak\'ahs in Quba Mosque receives a reward like that of an Umrah.'
      ],
      highlights: ['Prayer of two rak\'ahs (Sunnah)', 'Saturday morning visits following the Prophet\'s ﷺ practice', 'Quba Avenue walkway'],
      hours: { summary: 'Open daily for the five prayers, from before Fajr until after Isha', details: ['Busiest on Saturday mornings'], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking needed.'], links: [] },
      access: 'Muslims may enter for prayer; non-Muslims may view the exterior.',
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED) — about 25 minutes', road: '10 minutes by car from the Prophet\'s Mosque.', transport: 'Taxi, Madinah city buses, or walk along Quba Avenue (about 40 minutes).' },
      bestTime: 'Saturday morning, October – March', duration: '1 hour',
      dress: 'Modest clothing; women cover hair inside.', tips: ['Perform wudu at your hotel before going to follow the Sunnah.', 'Date shops nearby sell Madinah\'s famous Ajwa dates.']
    },
    {
      id: 'mount-uhud', name: 'Mount Uhud & the Martyrs\' Cemetery', nativeName: 'جبل أحد',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage', 'nature'],
      coords: [24.5097, 39.6150], wiki: 'https://en.wikipedia.org/wiki/Mount_Uhud',
      tagline: 'The mountain of the Battle of Uhud, "a mountain that loves us".',
      overview: [
        'Mount Uhud is a 1,077 m red granite ridge about 5 km north of the Prophet\'s Mosque. At its foot lies the cemetery of the martyrs of the Battle of Uhud and Jabal al-Rumat (the Archers\' Hill).',
        'A modern visitor area with walkways and information boards lets you climb the small Archers\' Hill and look across the battlefield.'
      ],
      history: [
        'In 625 CE (3 AH) the Muslims of Madinah faced the Quraysh army from Makkah here. Fifty archers were placed on the small hill with orders not to leave; when many left early to collect spoils, the Makkan cavalry attacked from behind, and around 70 Muslims were martyred.',
        'Among them was Hamza ibn Abd al-Muttalib, the Prophet\'s ﷺ uncle, known as the "Master of Martyrs". The Prophet ﷺ himself was wounded in the battle.'
      ],
      religious: [
        'The Prophet ﷺ said: "Uhud is a mountain that loves us and we love it." Visiting the graves of the martyrs and sending salam upon them is a Sunnah practice. The story of the battle teaches the importance of obedience and discipline.'
      ],
      highlights: ['Martyrs of Uhud cemetery (Sayyid al-Shuhada)', 'Jabal al-Rumat (Archers\' Hill)', 'Sayyid al-Shuhada Mosque', 'View of the battlefield'],
      hours: { summary: 'Area open daily; best after Fajr until about 10:00 AM or late afternoon', details: [], note: 'Women may not enter the cemetery itself but can view it from outside the fence.' },
      tickets: { required: false, price: 'Free', how: ['No ticket needed.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED)', road: 'About 10 minutes from the Prophet\'s Mosque by car.', transport: 'Taxi, tour buses (ziyarat tours) and Madinah city buses.' },
      bestTime: 'Early morning, October – March', duration: '1–2 hours',
      dress: 'Modest clothing, comfortable shoes for the hill.', tips: ['Many hotels offer combined "ziyarat" tours: Uhud, Quba and the Seven Mosques.', 'Bring water and a hat — little shade on the hill.']
    },
    {
      id: 'hegra', name: 'Hegra (Al-Hijr / Mada\'in Salih)', nativeName: 'الحِجر (مدائن صالح)',
      region: 'madinah', city: 'AlUla', categories: ['archaeology', 'heritage'], unesco: true, featured: true,
      coords: [26.7920, 37.9530], wiki: 'https://en.wikipedia.org/wiki/Hegra_(Mada%27in_Salih)',
      tagline: 'Saudi Arabia\'s first UNESCO site — 111 monumental Nabataean tombs.',
      overview: [
        'Hegra was the second city of the Nabataean kingdom after Petra in Jordan. Its 111 monumental tombs, carved into golden sandstone outcrops between the 1st century BCE and the 1st century CE, are remarkably well preserved, many with inscriptions above the doors naming their owners.',
        'The most famous is Qasr al-Farid ("the Lonely Castle"), a four-storey tomb carved from a single free-standing boulder and never finished.'
      ],
      history: [
        'Hegra controlled the incense and spice caravan route between southern Arabia and the Mediterranean. After the Roman annexation of the Nabataean kingdom in 106 CE, the city declined.',
        'The site later lay on the Ottoman Hejaz Railway (opened 1908), whose station buildings still stand nearby. In 2008 it became the first site in Saudi Arabia inscribed on the UNESCO World Heritage List, and it opened to the public in 2020.'
      ],
      religious: [
        'In Islamic tradition Al-Hijr is associated with the people of Thamud, to whom Prophet Salih was sent, as mentioned in the Qur\'an (Surah Al-Hijr 15:80–84). The Prophet Muhammad ﷺ passed through the area and advised his companions to hurry past in humility and reflection rather than settle there. Many Muslim visitors therefore view the site as a place of reflection on the fate of past nations.'
      ],
      highlights: ['Qasr al-Farid (the Lonely Castle)', 'Jabal Ithlib and the Diwan (ceremonial hall)', 'Qasr al-Bint tomb group', 'Hejaz Railway station', 'Night-time Hegra experiences'],
      hours: { summary: 'Guided tours only, typically from morning to sunset (about 8:00 AM – 6:00 PM)', details: ['Tours depart from the Winter Park / Hegra visitor centre', 'Special sunset and night tours available seasonally'], note: 'Independent entry is not permitted; you must book a tour slot.' },
      tickets: { required: true, price: 'From about SAR 95 per adult for the standard tour (premium tours cost more)', how: ['Go to the Experience AlUla website or app.', 'Choose "Hegra" and select the tour type (standard bus tour, vintage Land Rover, horse or night tour).', 'Pick date and time, pay online and receive an e-ticket with QR code.', 'Arrive at the visitor centre 15–30 minutes early.'], links: [{ label: 'Experience AlUla – Book Hegra', url: 'https://www.experiencealula.com' }] },
      gettingThere: { airport: 'AlUla International Airport (ULH) — about 30 minutes', road: 'About 22 km north of AlUla town; 4 hours from Madinah, 3 hours from Tabuk.', transport: 'No public transport; use a rental car, taxi or the AlUla hop-on shuttle when operating.' },
      bestTime: 'October – March', duration: '3 hours',
      dress: 'Modest clothes, hat, sunglasses and closed walking shoes.',
      tips: ['Book weeks ahead in peak season (Dec – Feb).', 'Sunset tours give the best golden light on the tombs.', 'Combine with Elephant Rock and AlUla Old Town in the evening.']
    },
    {
      id: 'elephant-rock', name: 'Elephant Rock (Jabal AlFil)', nativeName: 'جبل الفيل',
      region: 'madinah', city: 'AlUla', categories: ['nature'],
      coords: [26.6690, 37.9700], wiki: 'https://en.wikipedia.org/wiki/Elephant_Rock_(Saudi_Arabia)',
      tagline: 'A 52-metre sandstone "elephant" glowing at sunset.',
      overview: [
        'Elephant Rock is a natural sandstone formation around 52 m tall that, after millions of years of wind and water erosion, resembles an elephant with its trunk touching the ground.',
        'A sunken lounge area with fire pits and soft lighting lets visitors relax in front of the rock after dark while watching the stars.'
      ],
      history: ['The rock lies in the AlUla valley, an ancient landscape shaped by erosion. It became one of AlUla\'s signature images after the region opened to tourism and was developed by the Royal Commission for AlUla.'],
      religious: null,
      highlights: ['Sunset photography', 'Lounge with fire pits after dark', 'Stargazing'],
      hours: { summary: 'Typically afternoon to late night (about 3:00 PM – midnight)', details: [], note: 'Hours vary by season.' },
      tickets: { required: false, price: 'Free entry (food & drinks paid)', how: ['No booking needed; just turn up.'], links: [{ label: 'Experience AlUla', url: 'https://www.experiencealula.com' }] },
      gettingThere: { airport: 'AlUla International (ULH)', road: 'About 10 km north-east of AlUla town.', transport: 'Car or taxi.' },
      bestTime: 'Sunset, October – March', duration: '1–2 hours', dress: 'Casual modest clothing; a warm layer for winter nights.',
      tips: ['Arrive 30 minutes before sunset for the best light.']
    },
    {
      id: 'maraya', name: 'Maraya', nativeName: 'مرايا',
      region: 'madinah', city: 'AlUla', categories: ['modern'],
      coords: [26.6230, 37.8890], wiki: 'https://en.wikipedia.org/wiki/Maraya_(building)',
      tagline: 'The world\'s largest mirrored building, hidden in the Ashar valley.',
      overview: [
        'Maraya ("mirrors" in Arabic) is a concert hall clad in about 9,740 m² of mirrored panels, reflecting the surrounding sandstone canyon so it almost disappears into the landscape.',
        'It hosts concerts, events and a rooftop restaurant, and it holds a Guinness World Record as the largest mirrored building in the world.'
      ],
      history: ['Designed by Italian architects Giò Forma, Maraya opened in 2019 as a venue for the Winter at Tantora festival and AlUla\'s cultural programme.'],
      religious: null,
      highlights: ['Mirrored façade reflecting the canyon', 'Concerts and events', 'Rooftop dining'],
      hours: { summary: 'Access depends on events and restaurant opening (usually evenings)', details: [], note: 'Not open for casual walk-in every day; check the event calendar.' },
      tickets: { required: true, price: 'Depends on event / dining booking', how: ['Check the Experience AlUla events calendar.', 'Buy a concert ticket or reserve the rooftop restaurant online.'], links: [{ label: 'Experience AlUla – events', url: 'https://www.experiencealula.com' }] },
      gettingThere: { airport: 'AlUla International (ULH)', road: 'In the Ashar valley, about 15 minutes south of AlUla Old Town.', transport: 'Car or taxi.' },
      bestTime: 'Winter event season (Dec – Mar)', duration: '1–3 hours', dress: 'Smart casual for events.', tips: ['The mirrors are best photographed in the late afternoon.']
    },
    {
      id: 'alula-old-town', name: 'AlUla Old Town', nativeName: 'البلدة القديمة بالعلا',
      region: 'madinah', city: 'AlUla', categories: ['heritage'],
      coords: [26.6100, 37.9230], wiki: 'https://en.wikipedia.org/wiki/Old_Town,_Al-Ula',
      tagline: 'A 900-year-old mud-brick town beneath a hilltop fortress.',
      overview: [
        'AlUla Old Town is a labyrinth of more than 900 mud-brick and stone houses, built tightly together for defence and shade. Above it stands AlUla Fort with sweeping views over the oasis.',
        'The restored AlJadidah and Old Town streets now host cafés, craft shops and art galleries.'
      ],
      history: [
        'The town was built from around the 12th century, partly re-using stones from the ancient city of Dadan. It was an important stop on the pilgrim route from Syria to Makkah and was inhabited until the 1980s, when residents moved to modern housing.'
      ],
      religious: ['The Old Town lay on the Syrian Hajj route; its small mosques, including the historic Al-Izam Mosque, served pilgrims for centuries.'],
      highlights: ['AlUla Fort viewpoint', 'Old Town alleys at night', 'AlJadidah arts district', 'Oasis heritage trail'],
      hours: { summary: 'Usually open daily, roughly 9:00 AM – 11:00 PM (seasonal)', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['Walk in freely; guided walks are bookable on Experience AlUla.'], links: [{ label: 'Experience AlUla', url: 'https://www.experiencealula.com' }] },
      gettingThere: { airport: 'AlUla International (ULH) — about 25 minutes', road: 'In AlUla town centre.', transport: 'Car, taxi or AlUla shuttle.' },
      bestTime: 'Evenings, October – March', duration: '2 hours', dress: 'Modest clothes, comfortable shoes.', tips: ['Climb the fort at sunset.']
    },

    /* ======================= RIYADH PROVINCE ======================= */
    {
      id: 'at-turaif', name: 'At-Turaif, Diriyah', nativeName: 'حي الطريف بالدرعية',
      region: 'riyadh', city: 'Diriyah', categories: ['heritage'], unesco: true, featured: true,
      coords: [24.7340, 46.5730], wiki: 'https://en.wikipedia.org/wiki/Diriyah',
      tagline: 'The mud-brick birthplace of the Saudi state.',
      overview: [
        'At-Turaif is the restored historic district of Diriyah on the edge of Riyadh, built in the Najdi mud-brick style with triangular windows, palm-trunk ceilings and crenellated walls.',
        'Museums inside the palaces tell the story of the first Saudi state, Arabian horses, daily life and Najdi architecture. Across Wadi Hanifa, Bujairi Terrace offers fine dining with views over the ruins.'
      ],
      history: [
        'Diriyah was founded in the 15th century. In 1727 Imam Muhammad bin Saud established the first Saudi state here, and in 1744 he formed an alliance with the scholar Sheikh Muhammad ibn Abd al-Wahhab.',
        'Diriyah became the capital of a state covering most of Arabia, until Ottoman-Egyptian forces besieged and destroyed it in 1818. The Saudi capital later moved to Riyadh. At-Turaif was inscribed by UNESCO in 2010 and reopened after restoration in 2022.'
      ],
      religious: [
        'Diriyah was the centre of the 18th-century religious reform movement of Sheikh Muhammad ibn Abd al-Wahhab, which shaped religious life in the Arabian Peninsula. The restored Imam Muhammad bin Saud Mosque is part of the visit.'
      ],
      highlights: ['Salwa Palace', 'Imam Muhammad bin Saud Mosque', 'Diriyah Museum galleries', 'Bujairi Terrace restaurants', 'Evening light shows'],
      hours: { summary: 'Typically Sun – Thu ~4:00 PM – midnight; Fri – Sat ~4:00 PM – 1:00 AM', details: ['Hours shift seasonally and during Ramadan'], note: 'Last entry usually 1 hour before closing.' },
      tickets: { required: true, price: 'Paid entry (approx. SAR 100 for adults; reduced for children/residents; prices vary)', how: ['Visit the official Diriyah website.', 'Select At-Turaif, choose date and time slot.', 'Pay online and show the QR code at the gate.'], links: [{ label: 'Diriyah – official tickets', url: 'https://www.diriyah.sa' }] },
      gettingThere: { airport: 'King Khalid International (RUH) — about 40 minutes', road: 'About 20 km north-west of central Riyadh; parking at the Diriyah visitor centre.', transport: 'Taxi or ride-hailing; Riyadh Metro + taxi.' },
      bestTime: 'October – March, from late afternoon', duration: '2–4 hours', dress: 'Modest clothes.', tips: ['Book a guided tour to understand the history.', 'Stay for dinner at Bujairi Terrace.']
    },
    {
      id: 'masmak-fort', name: 'Al Masmak Fortress', nativeName: 'قصر المصمك',
      region: 'riyadh', city: 'Riyadh', categories: ['heritage'],
      coords: [24.6312, 46.7134], wiki: 'https://en.wikipedia.org/wiki/Al_Masmak_Palace',
      tagline: 'The clay fort where the modern Kingdom began.',
      overview: [
        'Masmak is a squat clay-and-mud-brick fortress with four watchtowers in the heart of old Riyadh. Inside, a museum displays weapons, maps, photographs and the story of the 1902 recapture of Riyadh.',
        'It sits beside Deera Square and the traditional Souq Al-Zal, making it a perfect start to exploring old Riyadh.'
      ],
      history: [
        'The fort was built around 1865 by the Al Rashid rulers. On 15 January 1902, the young Abdulaziz ibn Saud and about 40 men captured Masmak in a daring dawn raid — the event that launched the unification of Saudi Arabia. The spearhead still lodged in the main door is a famous detail.'
      ],
      religious: null,
      highlights: ['Main gate with spearhead', 'Museum galleries', 'Deera Square', 'Souq Al-Zal (antiques, carpets, oud)'],
      hours: { summary: 'Typically Sun – Thu 8:00 AM – 9:00 PM; Fri 4:00 PM – 9:00 PM; Sat 9:00 AM – 9:00 PM', details: [], note: 'May close briefly during prayer times; confirm current hours locally.' },
      tickets: { required: false, price: 'Free', how: ['Walk in — no booking needed.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH) — about 35 minutes', road: 'Central Riyadh, Al-Dirah district.', transport: 'Riyadh Metro (Qasr Al Hokm area) or taxi.' },
      bestTime: 'Afternoon, then evening at the souq', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['Visit Souq Al-Zal after — it is liveliest in the evening.']
    },
    {
      id: 'edge-of-the-world', name: 'Edge of the World (Jebel Fihrayn)', nativeName: 'حافة العالم',
      region: 'riyadh', city: 'Near Riyadh', categories: ['nature'], featured: true,
      coords: [24.9533, 45.9906], wiki: 'https://en.wikipedia.org/wiki/Tuwaiq_Escarpment',
      tagline: 'Sheer 300 m cliffs on the Tuwaiq escarpment with endless views.',
      overview: [
        'Part of the 800 km Tuwaiq escarpment, the "Edge of the World" is a dramatic set of cliffs dropping some 300 m to an ancient seabed plain. On clear days the horizon seems endless — hence the name.',
        'Hikers can walk along the clifftops and down to Acacia Valley, an ancient caravan route below.'
      ],
      history: ['The escarpment is made of limestone laid down in a shallow sea about 150 million years ago. The valley below was used by trade caravans crossing Najd.'],
      religious: null,
      highlights: ['Clifftop sunset', 'Acacia Valley hike', 'Camping under the stars (with tour operators)'],
      hours: { summary: 'Usually open daily from morning until sunset', details: ['The access gate may close in summer heat, after rain, or at night'], note: 'Access rules change; check before you go.' },
      tickets: { required: false, price: 'Free (tours from about SAR 250 per person)', how: ['Self-drive is possible with a 4x4.', 'Most visitors book a half-day sunset tour with a licensed operator.'], links: [{ label: 'VisitSaudi – Riyadh', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 90 km north-west of Riyadh; last 30 km on a rough desert track — 4x4 required.', transport: 'No public transport; join a tour.' },
      bestTime: 'November – March, late afternoon', duration: 'Half a day', dress: 'Hiking shoes, sun protection, warm layer for evening.', tips: ['Stay well back from the edge — there are no railings.', 'Do not go in rain: tracks flood quickly.', 'Download offline maps; there is little phone signal.']
    },
    {
      id: 'kingdom-centre', name: 'Kingdom Centre Sky Bridge', nativeName: 'برج المملكة',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.7113, 46.6744], wiki: 'https://en.wikipedia.org/wiki/Kingdom_Centre',
      tagline: 'A 300 m skyscraper with a glass-walled sky bridge.',
      overview: ['The 302 m Kingdom Centre, with its distinctive bottle-opener shape, has a 65 m sky bridge on the 99th floor offering 360° views over Riyadh. The tower also has a luxury mall and hotel.'],
      history: ['Completed in 2002, it was Saudi Arabia\'s tallest building at the time and won the Emporis Skyscraper Award for best new skyscraper.'],
      religious: null,
      highlights: ['Sky Bridge at 300 m', 'Sunset city view', 'Kingdom Mall'],
      hours: { summary: 'Typically daily ~10:00 AM – midnight', details: [], note: '' },
      tickets: { required: true, price: 'About SAR 60–70 per adult (check current price)', how: ['Buy at the Sky Bridge ticket desk (mall level) or via official online channels.'], links: [{ label: 'Kingdom Centre', url: 'https://kingdomcentre.com.sa' }] },
      gettingThere: { airport: 'King Khalid International (RUH) — about 30 minutes', road: 'Olaya district, King Fahd Road.', transport: 'Riyadh Metro (Olaya line) or taxi.' },
      bestTime: 'Sunset', duration: '1 hour', dress: 'Smart casual.', tips: ['Go up 30 minutes before sunset to see the city in both light and dark.']
    },
    {
      id: 'national-museum', name: 'National Museum of Saudi Arabia', nativeName: 'المتحف الوطني السعودي',
      region: 'riyadh', city: 'Riyadh', categories: ['modern', 'heritage'],
      coords: [24.6478, 46.7107], wiki: 'https://en.wikipedia.org/wiki/National_Museum_of_Saudi_Arabia',
      tagline: 'The story of Arabia from the dinosaurs to the modern Kingdom.',
      overview: ['Set in the King Abdulaziz Historical Centre, the museum has eight galleries covering geology, ancient kingdoms, the Prophet\'s ﷺ mission, the two Saudi states and unification. It is the best introduction to the country.'],
      history: ['Opened in 1999 to mark 100 years since the recapture of Riyadh. The surrounding park includes the Murabba Palace, King Abdulaziz\'s former residence.'],
      religious: ['A dedicated gallery covers the Prophet\'s ﷺ mission and the early Islamic period, with models of Makkah and Madinah and historic manuscripts.'],
      highlights: ['Man and Universe gallery', 'Pre-Islamic kingdoms', 'The Prophet\'s Mission gallery', 'Murabba Palace next door'],
      hours: { summary: 'Typically Sun – Thu 9:00 AM – 8:00 PM; Fri 3:00 – 8:00 PM; Sat 9:00 AM – 8:00 PM', details: [], note: 'Hours change seasonally.' },
      tickets: { required: false, price: 'Low fee (approx. SAR 10–20) or free on some days', how: ['Buy at the entrance or via the Ministry of Culture ticketing links.'], links: [{ label: 'VisitSaudi – museums', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al Murabba district, central Riyadh.', transport: 'Riyadh Metro (National Museum station) or taxi.' },
      bestTime: 'Any time; ideal in summer heat', duration: '2–3 hours', dress: 'Modest clothes.', tips: ['Start here before exploring the rest of Saudi Arabia.']
    },
    {
      id: 'ushaiger', name: 'Ushaiger Heritage Village', nativeName: 'قرية أشيقر التراثية',
      region: 'riyadh', city: 'Shaqra', categories: ['heritage'],
      coords: [25.3420, 45.1830], wiki: 'https://en.wikipedia.org/wiki/Ushaiger',
      tagline: 'A beautifully preserved Najdi mud-brick village.',
      overview: ['Ushaiger is a traditional village of mud-brick homes, mosques and palm gardens around 200 km north-west of Riyadh, with a small private museum and family-run guesthouses.'],
      history: ['Settled for more than 1,500 years, Ushaiger was a centre of learning and trade in Najd and produced many scholars and judges.'],
      religious: ['The village is known for its historic mosques and its tradition of religious scholarship in Najd.'],
      highlights: ['Old mosques and towers', 'Heritage museum', 'Palm farms', 'Traditional lunch with local families'],
      hours: { summary: 'Daily, daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free (museum small fee)', how: ['No booking needed.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 2.5 hours from Riyadh via Highway 535 towards Shaqra.', transport: 'Car or day tour.' },
      bestTime: 'November – March', duration: '2–3 hours', dress: 'Modest clothes.', tips: ['Combine with Shaqra Old Town on the same day.']
    },

    /* ======================= EASTERN PROVINCE ======================= */
    {
      id: 'al-ahsa-oasis', name: 'Al-Ahsa Oasis', nativeName: 'واحة الأحساء',
      region: 'eastern', city: 'Hofuf', categories: ['nature', 'heritage'], unesco: true, featured: true,
      coords: [25.3833, 49.5833], wiki: 'https://en.wikipedia.org/wiki/Al-Ahsa_Oasis',
      tagline: 'One of the world\'s largest palm oases — 2.5 million date palms.',
      overview: ['Al-Ahsa is a vast oasis of gardens, canals, springs and historic buildings, with roughly 2.5 million date palms. It was inscribed by UNESCO in 2018 as an evolving cultural landscape.'],
      history: ['People have lived in Al-Ahsa since the Neolithic era thanks to its abundant springs. Key landmarks include Ibrahim Palace (Ottoman, 16th century), Jawatha Mosque (one of the first mosques in eastern Arabia, 7th century) and Al-Qaisariya Souq.'],
      religious: ['Jawatha Mosque is believed to be the site where the second Friday prayer in Islam was held, after the one in Madinah, when the Abdul Qais tribe embraced Islam.'],
      highlights: ['Al-Qarah Mountain caves', 'Ibrahim Palace', 'Jawatha Mosque', 'Al-Qaisariya Souq', 'Yellow Lake (Al-Asfar)'],
      hours: { summary: 'Oasis open at all times; sites typically 8:00 AM – 9:00 PM', details: [], note: '' },
      tickets: { required: false, price: 'Mostly free', how: ['No booking needed for most sites.'], links: [{ label: 'VisitSaudi – Al-Ahsa', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'Al-Ahsa (HOF) or King Fahd International, Dammam (DMM, ~1.5 h)', road: 'About 3.5 hours from Riyadh on Highway 10.', transport: 'Saudi Arabia Railways (SAR) Riyadh – Hofuf – Dammam line.' },
      bestTime: 'November – March; date harvest in August – September', duration: '1–2 days', dress: 'Modest clothes.', tips: ['Try Khalas dates, the oasis\'s pride.']
    },
    {
      id: 'jabal-al-qarah', name: 'Al-Qarah Mountain Caves', nativeName: 'جبل القارة',
      region: 'eastern', city: 'Al-Ahsa', categories: ['nature'],
      coords: [25.4170, 49.6740], wiki: 'https://en.wikipedia.org/wiki/Al-Qarah_Mountain_(Saudi_Arabia)',
      tagline: 'Naturally cool limestone caves in the heart of the oasis.',
      overview: ['Jabal Al-Qarah is a 75 m hill riddled with narrow canyons and caves that stay cool even in summer. A visitor path leads through the main cave, and the area hosts a heritage village and pottery workshops.'],
      history: ['The caves were formed by erosion of soft limestone. The nearby pottery tradition has been passed down for generations.'],
      religious: null,
      highlights: ['Natural cave walk', 'Pottery workshops', 'Sunset over the oasis'],
      hours: { summary: 'Typically daily ~4:00 PM – 11:00 PM (seasonal)', details: [], note: '' },
      tickets: { required: true, price: 'Small fee (approx. SAR 10–30)', how: ['Buy at the entrance.'], links: [] },
      gettingThere: { airport: 'Al-Ahsa (HOF)', road: 'About 15 km east of Hofuf.', transport: 'Car or taxi.' },
      bestTime: 'Any time — caves are cool in summer', duration: '1–2 hours', dress: 'Comfortable shoes.', tips: ['Bring a torch for darker sections.']
    },
    {
      id: 'ithra', name: 'Ithra — King Abdulaziz Center for World Culture', nativeName: 'إثراء',
      region: 'eastern', city: 'Dhahran', categories: ['modern'],
      coords: [26.3474, 50.1022], wiki: 'https://en.wikipedia.org/wiki/King_Abdulaziz_Center_for_World_Culture',
      tagline: 'Award-winning cultural centre shaped like stacked river stones.',
      overview: ['Ithra is an architectural landmark housing a museum, library, theatre, cinema, children\'s museum and exhibition halls. It stands on the site of Prosperity Well (Dammam No. 7), where commercial oil was first found in Saudi Arabia.'],
      history: ['Built by Saudi Aramco, designed by Snøhetta and opened in 2018.'],
      religious: null,
      highlights: ['Ithra Museum', 'Library with 300,000+ books', 'Energy Exhibit', 'Prosperity Well'],
      hours: { summary: 'Typically Sun – Thu 9:00 AM – 11:00 PM; Fri – Sat from afternoon', details: [], note: '' },
      tickets: { required: 'partial', price: 'Building free; exhibitions/cinema paid', how: ['Book exhibitions, shows and films on ithra.com.'], links: [{ label: 'Ithra – tickets', url: 'https://www.ithra.com' }] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Dhahran, near Khobar.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time', duration: '2–4 hours', dress: 'Smart casual.', tips: ['Check the events calendar for festivals and concerts.']
    },

    /* ======================= ASIR PROVINCE ======================= */
    {
      id: 'rijal-almaa', name: 'Rijal Almaa Heritage Village', nativeName: 'قرية رجال ألمع',
      region: 'asir', city: 'Rijal Almaa', categories: ['heritage'], featured: true,
      coords: [18.2161, 42.2722], wiki: 'https://en.wikipedia.org/wiki/Rijal_Almaa',
      tagline: 'Colourful stone tower houses in a green mountain valley.',
      overview: ['Rijal Almaa is a village of around 60 multi-storey stone houses decorated with white quartz stones and colourful Al-Qatt Al-Asiri paintings. A museum shows local weapons, costumes and manuscripts.'],
      history: ['The village stood on an ancient trade route linking Yemen and the Levant and was a centre of commerce. Al-Qatt Al-Asiri, the painted interior art practised by Asiri women, was added to UNESCO\'s Intangible Heritage list in 2017.'],
      religious: null,
      highlights: ['Rijal Almaa Museum', 'Al-Qatt Al-Asiri art', 'Mountain views'],
      hours: { summary: 'Typically daily ~9:00 AM – 9:00 PM', details: [], note: '' },
      tickets: { required: false, price: 'Small museum fee', how: ['Pay at the entrance.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'About 45 km west of Abha via the steep Al-Soudah pass.', transport: 'Car or tour.' },
      bestTime: 'Year-round; mild summers', duration: '2–3 hours', dress: 'Modest clothes.', tips: ['Drive carefully on the mountain road.']
    },
    {
      id: 'al-soudah', name: 'Al-Soudah & Jabal Sawda', nativeName: 'السودة',
      region: 'asir', city: 'Abha', categories: ['nature'],
      coords: [18.2700, 42.3700], wiki: 'https://en.wikipedia.org/wiki/Jabal_Sawda',
      tagline: 'The roof of Saudi Arabia — misty juniper forests at 3,000 m.',
      overview: ['Al-Soudah is a highland area near Abha including Jabal Sawda, the highest peak in the country. Cool temperatures, clouds and juniper forests make it a summer favourite.'],
      history: ['Traditional villages here practise terraced farming. The area is being developed by Soudah Development as a mountain destination.'],
      religious: null,
      highlights: ['Cable car', 'Juniper forests', 'Cloud views', 'Picnic areas'],
      hours: { summary: 'Open at all times; cable car seasonal', details: [], note: '' },
      tickets: { required: false, price: 'Free (cable car paid)', how: ['Cable car tickets on site.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'About 30 minutes from Abha.', transport: 'Car.' },
      bestTime: 'June – September', duration: 'Half a day', dress: 'Warm layers.', tips: ['Fog can be thick — drive slowly.']
    },

    /* ======================= JAZAN PROVINCE ======================= */
    {
      id: 'farasan-islands', name: 'Farasan Islands', nativeName: 'جزر فرسان',
      region: 'jazan', city: 'Farasan', categories: ['coast', 'nature'], featured: true,
      coords: [16.7000, 42.1167], wiki: 'https://en.wikipedia.org/wiki/Farasan_Islands',
      tagline: 'Untouched coral islands with turquoise waters and gazelles.',
      overview: ['An archipelago of 84 coral islands in the Red Sea, part of a protected marine reserve with mangroves, dolphins, sea turtles and the rare Farasan gazelle.'],
      history: ['The islands have Roman inscriptions, Ottoman buildings and the Al-Rifai House, a coral-stone merchant house famous for pearl-trade wealth.'],
      religious: null,
      highlights: ['Snorkelling and diving', 'Al-Rifai House', 'Mangroves', 'Hareed fish festival (spring)'],
      hours: { summary: 'Open at all times', details: [], note: 'Ferry times vary; check at Jazan port.' },
      tickets: { required: true, price: 'Ferry is free but needs booking', how: ['Reserve a seat at the Jazan port ferry terminal (bring passport/ID).', 'Car places are limited — book early.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'Drive to Jazan port.', transport: 'Ferry from Jazan — about 1 hour.' },
      bestTime: 'November – April', duration: '2 days', dress: 'Modest swimwear at public beaches.', tips: ['Bring snorkelling gear.']
    },

    /* ======================= HAIL PROVINCE ======================= */
    {
      id: 'hail-rock-art', name: 'Jubbah & Shuwaymis Rock Art', nativeName: 'النقوش الصخرية في جبة والشويمس',
      region: 'hail', city: 'Jubbah', categories: ['archaeology'], unesco: true,
      coords: [28.0167, 40.9333], wiki: 'https://en.wikipedia.org/wiki/Rock_Art_of_Hail_Province',
      tagline: '10,000 years of human history carved in stone.',
      overview: ['Jubbah and Shuwaymis hold thousands of petroglyphs showing humans, camels, horses, ibex and inscriptions — one of the richest rock-art sites in the world, inscribed by UNESCO in 2015.'],
      history: ['The carvings span from about 10,000 years ago, when the Nafud had lakes, to the Thamudic and Islamic periods.'],
      religious: null,
      highlights: ['Jabal Umm Sinman', 'Life-size human and animal figures', 'Visitor centre'],
      hours: { summary: 'Daily, daytime', details: [], note: 'Shuwaymis is remote — tour recommended.' },
      tickets: { required: false, price: 'Free / registration at site', how: ['Register at the visitor centre.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Jubbah is about 100 km north-west of Hail.', transport: 'Car; train to Hail.' },
      bestTime: 'November – March', duration: 'Half a day', dress: 'Desert gear.', tips: ['Hire a guide to find the best panels.']
    },

    /* ======================= NAJRAN PROVINCE ======================= */
    {
      id: 'al-ukhdood', name: 'Al-Ukhdood Archaeological Site', nativeName: 'موقع الأخدود الأثري',
      region: 'najran', city: 'Najran', categories: ['archaeology', 'religious'],
      coords: [17.4950, 44.1230], wiki: 'https://en.wikipedia.org/wiki/Al-Okhdood',
      tagline: 'Ruins of the ancient city mentioned in the Qur\'an.',
      overview: ['Al-Ukhdood is the walled ruin of ancient Najran (Raqmat), with foundations, inscriptions and a millstone.'],
      history: ['It flourished from around 500 BCE on the incense route. In the 6th century CE it was the scene of persecution described in the Qur\'an.'],
      religious: ['Surah Al-Buruj (85:4–8) refers to "the People of the Ditch" (Ashab al-Ukhdood), believers who were burnt for their faith; tradition links this event to Najran.'],
      highlights: ['City walls', 'South Arabian inscriptions', 'Museum'],
      hours: { summary: 'Typically Sun – Thu 8:00 AM – 6:00 PM', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking needed.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'In Najran city.', transport: 'Car or taxi.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['Visit Najran\'s mud palace (Emara Palace) too.']
    },
    {
      id: 'hima', name: 'Hima Cultural Area', nativeName: 'منطقة حمى الثقافية',
      region: 'najran', city: 'Najran', categories: ['archaeology'], unesco: true,
      coords: [18.2569, 44.4527], wiki: 'https://en.wikipedia.org/wiki/Bir_Hima_Rock_Petroglyphs_and_Inscriptions',
      tagline: 'Ancient wells and petroglyphs on the incense road.',
      overview: ['Hima holds wells that served caravans for 3,000 years and thousands of rock carvings and inscriptions in multiple ancient scripts. UNESCO listed it in 2021.'],
      history: ['The Bir Hima wells were among the last water sources before crossing the desert. Carvings include hunting scenes and inscriptions in Musnad, Thamudic, Greek and early Arabic.'],
      religious: null,
      highlights: ['Bir Hima wells', 'Petroglyphs'],
      hours: { summary: 'Daytime', details: [], note: 'Remote; local guide advised.' },
      tickets: { required: false, price: 'Free', how: ['Arrange through Najran tour operators.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'About 90 km north of Najran.', transport: 'Car (4x4 recommended).' },
      bestTime: 'November – March', duration: 'Half a day', dress: 'Desert gear.', tips: ['Carry plenty of water.']
    },

    /* ======================= TABUK PROVINCE ======================= */
    {
      id: 'tabuk-castle', name: 'Tabuk Castle', nativeName: 'قلعة تبوك',
      region: 'tabuk', city: 'Tabuk', categories: ['heritage', 'religious'],
      coords: [28.3836, 36.5550], wiki: 'https://en.wikipedia.org/wiki/Tabuk_Castle',
      tagline: 'An Ottoman fort on the Syrian pilgrim road.',
      overview: ['A small restored fortress with a museum, mosque and courtyard, beside the spring said to be visited by the Prophet ﷺ.'],
      history: ['Rebuilt in 1559 by the Ottomans to protect the Hajj route from Damascus.'],
      religious: ['The Expedition of Tabuk (630 CE) was the last campaign led by the Prophet ﷺ; Tabuk\'s spring is linked to that journey.'],
      highlights: ['Castle museum', 'Hejaz Railway station nearby'],
      hours: { summary: 'Typically Sun – Thu 8:00 AM – 6:00 PM', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'Old Tabuk centre.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Modest clothes.', tips: ['Combine with the Hejaz Railway station.']
    },
    {
      id: 'wadi-disah', name: 'Wadi Al-Disah', nativeName: 'وادي الديسة',
      region: 'tabuk', city: 'Tabuk', categories: ['nature'],
      coords: [27.6000, 36.5000], wiki: 'https://en.wikipedia.org/wiki/Wadi_Al_Disah',
      tagline: 'Towering sandstone pillars, palms and a flowing stream.',
      overview: ['A 15 km canyon with sandstone towers up to 500 m, a freshwater stream, palms and reeds — one of the most beautiful valleys in Arabia.'],
      history: ['Nabataean tombs are scattered at the canyon entrance. The valley is part of the NEOM region.'],
      religious: null,
      highlights: ['Canyon drive', 'Stream and palms', 'Nabataean tombs'],
      hours: { summary: 'Daytime', details: [], note: 'Access may be managed by NEOM; check before going.' },
      tickets: { required: false, price: 'Free', how: ['Self-drive with 4x4 or a guided tour.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'About 220 km south of Tabuk.', transport: '4x4 required.' },
      bestTime: 'November – March', duration: 'Full day', dress: 'Hiking gear.', tips: ['Avoid after rain — flash floods.']
    },

    /* ======================= AL-JAWF PROVINCE ======================= */
    {
      id: 'marid-castle', name: 'Marid Castle, Dumat al-Jandal', nativeName: 'قلعة مارد',
      region: 'jawf', city: 'Dumat al-Jandal', categories: ['heritage', 'religious'],
      coords: [29.8117, 39.8681], wiki: 'https://en.wikipedia.org/wiki/Marid_Castle',
      tagline: 'A 2,000-year-old fortress beside Umar\'s Mosque.',
      overview: ['Marid Castle overlooks the old town of Dumat al-Jandal. Nearby stands the Mosque of Umar ibn al-Khattab with its unique stone minaret.'],
      history: ['The castle dates back to at least the 3rd century and was mentioned by Queen Zenobia\'s campaigns. Dumat al-Jandal was a major caravan hub.'],
      religious: ['The Mosque of Umar is attributed to Caliph Umar ibn al-Khattab (7th century) and is one of the oldest mosques in Arabia.'],
      highlights: ['Marid Castle', 'Umar Mosque', 'Al-Dir old quarter', 'Dumat al-Jandal Lake'],
      hours: { summary: 'Daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Jouf (AJF)', road: 'About 50 km from Sakaka.', transport: 'Car.' },
      bestTime: 'November – March', duration: '2 hours', dress: 'Modest.', tips: ['Visit the lake at sunset.']
    },

    /* ======================= AL-BAHAH PROVINCE ======================= */
    {
      id: 'thee-ain', name: 'Thee Ain (Dhi Ain) Marble Village', nativeName: 'قرية ذي عين',
      region: 'bahah', city: 'Al-Mikhwah', categories: ['heritage'],
      coords: [19.9300, 41.4430], wiki: 'https://en.wikipedia.org/wiki/Thee_Ain',
      tagline: 'A white-stone village on a marble hill above banana groves.',
      overview: ['Thee Ain is a 400-year-old village of stone houses built on a white marble outcrop, surrounded by a spring-fed oasis of bananas and palms.'],
      history: ['Named after the spring (ain) that still flows beside it.'],
      religious: null,
      highlights: ['Marble hill', 'Spring-fed gardens'],
      hours: { summary: 'Daily, daytime', details: [], note: '' },
      tickets: { required: false, price: 'Small fee', how: ['Pay at entrance.'], links: [] },
      gettingThere: { airport: 'Al-Bahah (ABT)', road: 'About 24 km south of Al-Bahah via Aqabat Al-Bahah.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Modest.', tips: ['Morning light is best for photos.']
    },

    /* ======================= AL-QASSIM PROVINCE ======================= */
    {
      id: 'buraidah', name: 'Buraidah Dates City', nativeName: 'مدينة التمور ببريدة',
      region: 'qassim', city: 'Buraidah', categories: ['heritage'],
      coords: [26.3260, 43.9750], wiki: 'https://en.wikipedia.org/wiki/Buraydah',
      tagline: 'One of the world\'s largest date markets.',
      overview: ['Each harvest season Buraidah\'s Dates City fills with trucks and auctions of dozens of date varieties.'],
      history: ['Qassim has been the agricultural heart of Najd for centuries.'],
      religious: ['Dates hold special significance in Islam: Muslims break their fast with them in Ramadan, following the Prophet\'s ﷺ practice.'],
      highlights: ['Morning date auctions', 'Sukkari dates', 'Camel market'],
      hours: { summary: 'Auctions early morning (about 6:00 – 11:00 AM)', details: [], note: 'Busiest Aug – Oct.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'About 3.5 hours from Riyadh.', transport: 'Train Riyadh – Qassim.' },
      bestTime: 'August – October', duration: '2 hours', dress: 'Modest.', tips: ['Arrive early.']
    },

    /* ======================= NORTHERN BORDERS ======================= */
    {
      id: 'darb-zubaydah', name: 'Darb Zubaydah — Zubala', nativeName: 'درب زبيدة',
      region: 'northern-borders', city: 'Rafha', categories: ['heritage', 'religious', 'archaeology'],
      coords: [29.4000, 43.6000], 
      tagline: 'The great Abbasid pilgrim road from Kufa to Makkah.',
      overview: ['Zubala is one of the best-preserved stations on Darb Zubaydah, with large stone water cisterns and ruins of a fort.'],
      history: ['The road was improved in the 8th century and named after Zubaydah, wife of Caliph Harun al-Rashid.'],
      religious: ['For centuries this road carried pilgrims from Iraq to Makkah for Hajj; Zubaydah funded wells and cisterns as a charitable act (sadaqah jariyah).'],
      highlights: ['Zubala cisterns', 'Fort ruins'],
      hours: { summary: 'Daytime', details: [], note: 'Remote area.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Rafha (RAH)', road: 'South of Rafha.', transport: '4x4.' },
      bestTime: 'November – March', duration: '2 hours', dress: 'Desert gear.', tips: ['Go with a local guide.']
    }
  ]
});
