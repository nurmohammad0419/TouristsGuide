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
  nativeLang: 'ar',
  regionLabel: 'Province',
  regionLabelPlural: 'Provinces',
  flag: '🇸🇦',
  tagline: 'From the two holiest sites in Islam to Nabataean tombs, coral reefs and the Empty Quarter.',
  heroImage: 'assets/photos/hegra/1.jpg',

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
      coords: [21.3686, 40.2847], wiki: 'https://en.wikipedia.org/wiki/Taif',
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
      muslimSite: true, coords: [24.4672, 39.6111], wiki: 'https://en.wikipedia.org/wiki/Prophet%27s_Mosque',
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
      muslimSite: true, coords: [24.4393, 39.6173], wiki: 'https://en.wikipedia.org/wiki/Quba_Mosque',
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
      id: 'as-safiyyah-museum-park', name: 'As-Safiyyah Museum & Park, Madinah', nativeName: 'متحف وحديقة الصفية',
      region: 'madinah', city: 'Madinah', categories: ['heritage', 'modern'],
      approx: true, coords: [24.4650, 39.6100],
      tagline: 'An underground "Story of Creation" museum beneath a park south of the Prophet\'s Mosque.',
      overview: ['As-Safiyyah Museum & Park sits south of the Prophet\'s Mosque, on the axis of Bab Al-Salam, one of the mosque\'s historic gates, on the site of a former palm garden. The complex covers over 4,400 m², with a roughly 2,200 m² digital interactive exhibition — the "Story of Creation" / Khair Al-Khalq (Best of Creation) Museum — built two storeys underground beneath the park to preserve the mosque\'s sacred sightlines, using around 187 interactive screens.'],
      history: ['Developed by the Madinah Region Development Authority with private-sector partners and inaugurated by Prince Salman bin Sultan, Emir of Madinah.'],
      religious: ['The museum\'s exhibits present aspects of the life of Prophet Muhammad ﷺ.'],
      highlights: ['Underground interactive museum', 'Park with retail and dining', 'Views toward Bab Al-Salam'],
      hours: { summary: 'Check locally for current hours', details: [], note: 'A recently opened attraction — confirm hours and ticketing before visiting.' },
      tickets: { required: true, price: 'Unconfirmed', how: ['Check the Madinah Region Development Authority or on-site for current ticketing.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED)', road: 'South of the Prophet\'s Mosque, near Bab Al-Salam.', transport: 'Walk from the Haram area.' },
      bestTime: 'Year-round', duration: '1–2 hours', dress: 'Modest clothing.', tips: ['Combine with a Prophet\'s Mosque visit — it is just outside the Haram precinct.']
    },
    {
      id: 'mount-uhud', name: 'Mount Uhud & the Martyrs\' Cemetery', nativeName: 'جبل أحد',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage', 'nature'],
      muslimSite: true, coords: [24.5227, 39.6183], wiki: 'https://en.wikipedia.org/wiki/Mount_Uhud',
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
      coords: [24.6312, 46.7133], wiki: 'https://en.wikipedia.org/wiki/Al_Masmak_Palace',
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
      coords: [25.3391, 45.1786], wiki: 'https://en.wikipedia.org/wiki/Ushaiger',
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
      coords: [25.4098, 49.6879], wiki: 'https://en.wikipedia.org/wiki/Al-Qarah_Mountain_(Saudi_Arabia)',
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
      coords: [26.335, 50.122], wiki: 'https://en.wikipedia.org/wiki/King_Abdulaziz_Center_for_World_Culture',
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
      coords: [18.2125, 42.2734], wiki: 'https://en.wikipedia.org/wiki/Rijal_Almaa',
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
      coords: [18.2832, 42.3976], wiki: 'https://en.wikipedia.org/wiki/Jabal_Sawda',
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
      coords: [16.7022, 42.1183], wiki: 'https://en.wikipedia.org/wiki/Farasan_Islands',
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
      coords: [28.0169, 40.953], wiki: 'https://en.wikipedia.org/wiki/Rock_Art_of_Hail_Province',
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
      coords: [17.4773, 44.1793], wiki: 'https://en.wikipedia.org/wiki/Al-Okhdood',
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
      coords: [18.2508, 44.4515], wiki: 'https://en.wikipedia.org/wiki/Bir_Hima_Rock_Petroglyphs_and_Inscriptions',
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
      region: 'tabuk', city: 'Al-Disah', categories: ['nature', 'archaeology'], featured: true,
      coords: [27.6319, 36.5506], wiki: 'https://en.wikipedia.org/wiki/Wadi_Al_Disah',
      tagline: '"Valley of Palm Trees" — a red sandstone canyon with springs, palms and Nabataean tombs.',
      overview: [
        'Wadi Al-Disah (meaning "Valley of Palm Trees") is a dramatic mountain canyon and lush desert oasis in Tabuk Province, north-west Saudi Arabia. It lies within the Prince Mohammed bin Salman Royal Reserve and is recognised on UNESCO\'s Tentative List as part of the Bioclimatic Refuges of Western Arabia.',
        'Water and wind erosion have sculpted massive red sandstone cliffs and rock columns reaching up to about 500 m high. At sunrise and sunset the towers glow orange and red above the green valley floor.',
        'Unlike most dry desert wadis, Al-Disah is fed by perennial freshwater springs and seasonal streams. This constant water supports dense palm groves, tall reeds, wild mint, citrus trees and jujube shrubs, so the canyon floor stays green all year.',
        'The valley sits at around 400 m elevation, giving warm summers and mild winters — ideal for nature walks, picnics and off-road drives.'
      ],
      history: [
        'Like Madyan Shuaib and Hegra, the valley was inhabited by the Nabataeans. Visitors can find rock-cut Nabataean tomb façades — including an unfinished façade near the village entrance — as well as pit graves.',
        'The sandstone walls carry thousands of rock carvings and inscriptions spanning many centuries, written in Thamudic, Lihyanite, Aramaic, Ancient Greek, Nabataean and early Kufic Arabic scripts.',
        'Remains of historic settlements and burial sites such as Al-Mushayrif, Al-Sukhnah and Al-Maskunah are scattered through the valley and fenced for protection by the Heritage Commission.'
      ],
      religious: null,
      highlights: [
        'Sandstone towers up to ~500 m high',
        'Year-round springs and streams',
        'Palm groves, tall reeds and wild mint',
        'Nabataean tomb façades and pit graves',
        'Ancient inscriptions in six scripts',
        'Golden-hour photography',
        '4x4 drives through the stream bed'
      ],
      hours: { summary: 'Open daily; best visited from early morning to sunset', details: ['Sunrise and the last 1–2 hours before sunset give the best light on the cliffs'], note: 'The valley is inside a royal reserve; rules and access points can change — check locally or on VisitSaudi before travelling.' },
      tickets: { required: false, price: 'Free entry (4x4 hire / tours paid)', how: ['No ticket is needed to enter the valley.', 'Local 4x4 drivers are usually available for hire near the entrance in Al-Disah village.', 'Guided day trips can also be booked from Tabuk.'], links: [{ label: 'VisitSaudi', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'Tabuk Regional Airport (TUU)', road: 'Drive south from Tabuk city to Al-Disah village (roughly 2 hours by road); the canyon begins at the village.', transport: 'No public transport. The valley floor is soft sand, gravel and shallow water, so a 4x4 is essential to go deeper into the canyon.' },
      bestTime: 'October – April (mild days); avoid after heavy rain', duration: 'Half to full day',
      dress: 'Comfortable clothes, sturdy shoes that can get wet, hat and sunscreen; a warm layer for winter evenings.',
      tips: [
        'Hire a local 4x4 driver at the entrance if you are not experienced in sand and water crossings.',
        'Do not drive into the canyon during or right after rain — flash floods are dangerous.',
        'Do not touch or scratch the inscriptions and tomb façades.',
        'Carry water, snacks and offline maps; phone signal is weak deep in the canyon.',
        'Combine with Madyan Shuaib, Tayma or the Red Sea coast for a longer Tabuk itinerary.'
      ]
    },

    {
      id: 'tabuk-hejaz-railway-station', name: 'Hejaz Railway Station & Museum, Tabuk', nativeName: 'محطة سكة حديد الحجاز ومتحف تبوك',
      region: 'tabuk', city: 'Tabuk', categories: ['heritage'],
      approx: true, coords: [28.3858, 36.5602],
      tagline: 'One of the best-preserved stations on the old Hejaz pilgrim railway.',
      overview: [
        'Tabuk\'s early-20th-century Hejaz Railway station is one of the best-preserved stops on the historic line that once linked Damascus to Madinah. The site covers around 80,000 m² with 13 restored buildings, including a workshop, a handicrafts hall and a building housing a locomotive, a freight wagon and other railway relics.',
        'Tabuk was one of the line\'s main stations and is said to be the third-largest by area, reflecting the town\'s role as a key stop for Ottoman trains and pilgrims heading south.'
      ],
      history: ['Built in the early 1900s as part of the Ottoman Hejaz Railway. Do not confuse this station with the separate Hejaz Railway Museum in Madinah.'],
      religious: null,
      highlights: ['Restored locomotive and freight wagon', 'Workshop and handicrafts hall', '13 renovated buildings'],
      hours: { summary: 'Typically Sun – Thu, daytime hours', details: [], note: 'Opening hours can change — check locally before visiting.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'Old Tabuk centre, near Tabuk Castle.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Comfortable clothes.', tips: ['Combine with Tabuk Castle and the old quarter on foot.']
    },
    {
      id: 'souq-twaheen', name: 'Souq Twaheen ("Windmill Souq"), Tabuk', nativeName: 'سوق الطواحين',
      region: 'tabuk', city: 'Tabuk', categories: ['heritage'],
      approx: true, coords: [28.3828, 36.5535],
      tagline: 'A small Bedouin market in Tabuk\'s old quarter.',
      overview: ['A traditional market in Tabuk\'s historic district where local Bedouin come for goat-hair tent covers, canvas cooler bags, carpets and camping gear. It keeps much of its old character and is one of the city\'s most-visited souqs.'],
      history: ['Part of Tabuk\'s old quarter, near Tabuk Castle and the Al-Tawbah Mosque.'],
      religious: null,
      highlights: ['Goat-hair tent covers', 'Traditional carpets', 'Bedouin camping gear'],
      hours: { summary: 'Typically mornings and evenings', details: [], note: '' },
      tickets: { required: false, price: 'Free to browse', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'Old Tabuk quarter.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '30–60 minutes', dress: 'Modest clothes.', tips: ['Combine with Tabuk Castle and Al-Tawbah Mosque nearby.']
    },
    {
      id: 'al-tawbah-mosque', name: 'Al-Tawbah Mosque, Tabuk', nativeName: 'مسجد التوبة',
      region: 'tabuk', city: 'Tabuk', categories: ['religious', 'heritage'],
      approx: true, coords: [28.3841, 36.5557],
      tagline: 'A mosque tied to the Prophet\'s ﷺ 630 CE expedition to Tabuk.',
      overview: ['Al-Tawbah ("Repentance") Mosque sits in Tabuk\'s historic district next to Tabuk Castle. Its current building echoes the style of the Prophet\'s Mosque in Madinah.'],
      history: ['Sources differ on the exact founding date (accounts range from the early Islamic period to a 716 CE construction under Caliph Umar bin Abdulaziz, with an Ottoman rebuilding in the 17th century). The name comes from Surah At-Tawbah, revealed during the Prophet\'s ﷺ 630 CE expedition to Tabuk.'],
      religious: ['Linked to the Expedition of Tabuk (630 CE), the last military campaign led by the Prophet ﷺ.'],
      highlights: ['Historic mosque architecture', 'Next to Tabuk Castle and the old souq'],
      hours: { summary: 'Open for prayer times; respectful visits outside prayers', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'Old Tabuk quarter, beside Tabuk Castle.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '20–30 minutes', dress: 'Modest clothes; cover shoulders and knees.', tips: ['Combine with Tabuk Castle and Souq Twaheen.']
    },
    {
      id: 'prince-fahd-sultan-park', name: 'Prince Fahd bin Sultan Park, Tabuk', nativeName: 'منتزه الأمير فهد بن سلطان',
      region: 'tabuk', city: 'Tabuk', categories: ['nature'],
      approx: true, coords: [28.4000, 36.5700],
      tagline: 'Tabuk\'s main city park and home of the annual Roses & Fruit Festival.',
      overview: ['A large green space of around 500,000 m² in Tabuk city with lawns, walking and cycling tracks, play areas and seating — a popular family spot, especially in the evenings.'],
      history: ['Named for Prince Fahd bin Sultan, governor of Tabuk Province since 1987. The park hosts Tabuk\'s annual Roses & Fruit Festival, a roughly 10-day event over 130,000 m² celebrating the region\'s roses, fruit and olives.'],
      religious: null,
      highlights: ['Walking/cycling track', 'Play areas', 'Annual Roses & Fruit Festival'],
      hours: { summary: 'Daily, afternoon to night', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'Central Tabuk city.', transport: 'Taxi.' },
      bestTime: 'October – April (or during the Roses & Fruit Festival)', duration: '1–2 hours', dress: 'Casual.', tips: ['Check festival dates if visiting for the roses.']
    },
    {
      id: 'astra-farms-tabuk', name: 'Astra Farms (Tabuk Rose & Citrus Farms)', nativeName: 'مزارع أسترا – تبوك',
      region: 'tabuk', city: 'Tabuk', categories: ['nature'],
      status: 'check',
      notice: 'We could not confirm whether Astra Farms offers a formal public visitor programme, hours or tickets. Location is approximate — please confirm with a local tour operator before planning a visit.',
      approx: true, coords: [28.2800, 36.7200],
      tagline: 'One of the Middle East\'s largest cut-flower and citrus farms, in the city nicknamed "Tabuk the Rose".',
      overview: ['Astra Farms, established in 1979, is a large agricultural operation outside Tabuk known for roses and other cut flowers, alongside citrus, grapes and stone fruit. Tabuk is nicknamed "Tabuk al-Ward" (Tabuk the Rose), and a farm visit is a popular stop for first-time visitors, often paired with Prince Fahd Park.'],
      history: ['Established 1979; part of a wider Saudi agri-food group.'],
      religious: null,
      highlights: ['Rose fields', 'Citrus and fruit orchards'],
      hours: { summary: 'Unconfirmed — enquire locally', details: [], note: 'No official visitor hours found; this may be a working farm rather than a formal attraction.' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask a Tabuk tour operator about farm-visit options.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'About 40 minutes from Tabuk airport.', transport: 'Car, ideally with a local guide.' },
      bestTime: 'Winter/spring bloom season', duration: '1–2 hours', dress: 'Casual, comfortable for walking fields.', tips: ['Confirm access with a local operator before travelling — this may not be open to casual visitors.']
    },
    {
      id: 'tabuk-mud-house-museum', name: 'Tabuk Mud House Museum', nativeName: 'بيت الطين – تبوك',
      region: 'tabuk', city: 'Tabuk', categories: ['heritage'],
      approx: true, coords: [28.3834, 36.5548],
      tagline: 'A small private museum of Tabuk folklife, housed in a traditional mud-brick home.',
      overview: ['A small heritage museum in Tabuk\'s Al-Awayshah district, just in front of Tabuk Castle. Founded in 2020 by local collector Odeh Al-Atwi, it displays everyday objects tied to the region\'s older lifestyle inside an authentic mud-brick building, whose earthen walls keep the interior cool.'],
      history: ['Founded 2020 by Odeh Al-Atwi.'],
      religious: null,
      highlights: ['Traditional mud-brick architecture', 'Local folklife artefacts'],
      hours: { summary: 'Unconfirmed — small private museum', details: [], note: 'Check locally for current opening hours.' },
      tickets: { required: false, price: 'Likely free or small donation (unconfirmed)', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'Al-Awayshah district, in front of Tabuk Castle.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '30 minutes', dress: 'Casual.', tips: ['Combine with Tabuk Castle, the Mud House is right outside it.']
    },
    {
      id: 'jabal-maqla', name: 'Jabal Maqla', nativeName: 'جبل مقلة',
      region: 'tabuk', city: 'Al-Bad\'', categories: ['nature'],
      approx: true, coords: [28.5956, 35.3342],
      tagline: 'A striking blackened peak in the Jabal al-Lawz range, near Al-Bad\'.',
      overview: [
        'Jabal Maqla is a mountain in the Jabal al-Lawz range of north-western Tabuk Province, notable for the dark, scorched-looking colouring of its upper slopes.',
        'Some independent researchers and tour operators promote Jabal Maqla as a candidate site for the biblical Mount Sinai, citing its blackened peak and its proximity to Al-Bad\'. This is a fringe, disputed claim rather than an archaeological or scholarly consensus — mainstream biblical scholars place Mount Sinai in the Sinai Peninsula (Egypt), not in Saudi Arabia. We mention the theory here only because it is widely discussed by visitors; it should not be treated as established fact.'
      ],
      history: ['Part of the Jabal al-Lawz mountain range, near the Jordanian border.'],
      religious: null,
      highlights: ['Dramatic blackened rock faces', 'Mountain hiking and views', 'Disputed "Mount Sinai" theory (unverified)'],
      hours: { summary: 'Daylight hours', details: [], note: 'Access has reportedly been limited at times for outside visitors — confirm locally before planning a trip.' },
      tickets: { required: false, price: 'Free (guided tours available)', how: ['Some operators run guided day tours to Jabal Maqla and nearby sites from Tabuk.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'Near Al-Bad\', north-west Tabuk Province.', transport: 'Car or 4x4; a local guide is recommended.' },
      bestTime: 'October – April', duration: 'Half day', dress: 'Sturdy shoes, sun protection.', tips: ['Treat the "Mount Sinai" claim as folklore/theory, not fact.', 'Combine with Jabal Al-Lawz and Madyan Shuaib.']
    },
    {
      id: 'al-shaq-canyon', name: 'Al-Shaq Canyon (Shaq Al-Ajuz)', nativeName: 'الشق',
      region: 'tabuk', city: 'Tabuk', categories: ['nature'],
      approx: true, coords: [27.9500, 36.2200],
      tagline: 'A dramatic tectonic canyon nicknamed "the Grand Canyon of Saudi Arabia".',
      overview: ['Al-Shaq ("the tear/rip") is a canyon off the Tabuk–Al-Disah road, with cliffs reported to drop more than 250 m. The name refers to its tectonic origin.'],
      history: ['Located near the village of Shiqri off the Duba–Tabuk road.'],
      religious: null,
      highlights: ['Deep canyon cliffs', '4x4 off-road adventure'],
      hours: { summary: 'Daylight hours', details: [], note: 'A 4x4 is required — the track is sandy then rocky.' },
      tickets: { required: false, price: 'Free (tours available)', how: ['Guided day tours from Tabuk often combine Wadi Al-Disah and Al-Shaq.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'Off the Tabuk–Al-Disah road, near Shiqri village.', transport: '4x4 essential; sedan cars cannot make it.' },
      bestTime: 'October – April', duration: 'Half day', dress: 'Sturdy shoes, sun protection.', tips: ['Combine with Wadi Al-Disah on the same day trip.']
    },
    {
      id: 'haql-castle', name: 'King Abdulaziz Castle, Haql', nativeName: 'قلعة حقل (قلعة الملك عبدالعزيز)',
      region: 'tabuk', city: 'Haql', categories: ['heritage'],
      approx: true, coords: [29.2860, 34.9450],
      tagline: 'A small square fort in Haql, being developed as the town\'s first museum.',
      overview: ['A small, square historic fort in Haql Governorate with a central courtyard and an old well. Sources differ on its exact age (accounts range from the early 20th century to 1940, during the unification of Saudi Arabia).'],
      history: ['Located in Haql Governorate, on Saudi Arabia\'s northernmost Red Sea coast, near the Jordanian border.'],
      religious: null,
      highlights: ['Historic fort architecture', 'Central courtyard and well'],
      hours: { summary: 'Unconfirmed — check locally', details: [], note: 'The fort has reportedly been undergoing conversion into a museum.' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally in Haql.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU), about 2.5 hours', road: 'Haql town centre.', transport: 'Car.' },
      bestTime: 'October – April', duration: '30–45 minutes', dress: 'Casual.', tips: ['Combine with Haql corniche and the Georgios G shipwreck.']
    },
    {
      id: 'al-muwaylih-castle', name: 'Al-Muwaylih Castle', nativeName: 'قلعة المويلح',
      region: 'tabuk', city: 'Al-Muwaylih', categories: ['heritage'],
      coords: [27.6821, 35.4761],
      tagline: 'An Ottoman-era fort on the old coastal pilgrimage route.',
      overview: ['Al-Muwaylih Castle is a historic fort near the village it is named after, on Tabuk Province\'s Red Sea coast. Four large circular towers stand at its corners, with two smaller towers on one facade, built of sedimentary stone around a wide central courtyard.'],
      history: ['Built under Ottoman rule to guard the coastal Hajj route; sources date construction variously to the 16th–18th centuries, with restorations recorded in 1771, 1820 and 1864. A British vessel bombarded it in World War I, as it held a Turkish garrison. It passed to the Saudi state in 1925 with the handover of the Hejaz. Stones from this castle were later used to help build King Abdulaziz Castle in Duba.'],
      religious: null,
      highlights: ['Four circular corner towers', 'Central courtyard', 'Coastal Hajj-route history'],
      hours: { summary: 'Unconfirmed — check locally', details: [], note: '' },
      tickets: { required: false, price: 'Free (likely)', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU) or Al-Wajh (EJH)', road: 'Near Al-Muwaylih village, on the Duba–Sharma road.', transport: 'Car.' },
      bestTime: 'October – April', duration: '30–45 minutes', dress: 'Casual.', tips: ['Combine with Duba and the Red Sea coast.']
    },
    {
      id: 'king-abdulaziz-castle-duba', name: 'King Abdulaziz Castle, Duba', nativeName: 'قلعة الملك عبدالعزيز – ضباء',
      region: 'tabuk', city: 'Duba', categories: ['heritage'],
      approx: true, coords: [27.3521, 35.6921],
      tagline: 'A hilltop fort overlooking Duba\'s old market and harbour.',
      overview: ['King Abdulaziz Castle stands at the highest point of Duba\'s old town, overlooking the town\'s market and the Red Sea coast.'],
      history: ['Built partly with stone carried from the older Al-Muwaylih Castle nearby.'],
      religious: null,
      highlights: ['Hilltop views over Duba', 'Old town and market below'],
      hours: { summary: 'Unconfirmed — check locally', details: [], note: '' },
      tickets: { required: false, price: 'Free (likely)', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU) or Al-Wajh (EJH)', road: 'Duba old town.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '30 minutes', dress: 'Casual.', tips: ['Combine with Al-Muwaylih Castle nearby.']
    },
    {
      id: 'haql-corniche', name: 'Haql Corniche & Beach', nativeName: 'كورنيش حقل',
      region: 'tabuk', city: 'Haql', categories: ['coast'],
      approx: true, coords: [29.2900, 34.9400],
      tagline: 'A quiet Gulf of Aqaba waterfront promenade at Saudi Arabia\'s northern tip.',
      overview: ['Haql\'s corniche runs along the Gulf of Aqaba shore at Saudi Arabia\'s northernmost coastal town, with calm clear water, views across to Egypt\'s Sinai mountains, and a relaxed promenade for walks and picnics.'],
      history: ['Part of Haql Governorate, on Saudi Arabia\'s northernmost Red Sea / Gulf of Aqaba coast.'], religious: null,
      highlights: ['Gulf of Aqaba views', 'Swimming and picnic spots', 'Sunset walks'],
      hours: { summary: 'Open daily', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU), about 2.5 hours', road: 'Haql town, along the coast road.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Modest swimwear.', tips: ['Combine with Haql Castle and the Georgios G shipwreck.']
    },
    {
      id: 'sharma-beach-neom', name: 'Sharma Beach & NEOM Bay', nativeName: 'شاطئ شرما – نيوم',
      region: 'tabuk', city: 'Sharma', categories: ['coast', 'modern'],
      approx: true, coords: [28.1074, 35.1110],
      tagline: 'A Red Sea coastal community within the NEOM megaproject.',
      overview: ['Sharma is a coastal town and growing residential/tourism community within the NEOM region, on the Gulf of Aqaba coast, with beaches and new developments tied to NEOM\'s broader construction.'],
      history: ['Part of the NEOM giga-project launched under Saudi Vision 2030.'],
      religious: null,
      highlights: ['Gulf of Aqaba beaches', 'NEOM development area'],
      hours: { summary: 'Open daily', details: [], note: 'Much of NEOM is still under construction; check current access.' },
      tickets: { required: false, price: 'Free (beach access)', how: ['No booking for the beach.'], links: [] },
      gettingThere: { airport: 'NEOM Bay Airport', road: 'Sharma, NEOM region.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Modest swimwear.', tips: ['Confirm current access given ongoing NEOM construction.']
    },
    {
      id: 'sindalah-island', name: 'Sindalah Island, NEOM', nativeName: 'جزيرة سندالة – نيوم',
      region: 'tabuk', city: 'NEOM', categories: ['coast', 'modern'],
      status: 'check',
      notice: 'Sindalah was unveiled to invited guests in October 2024 but, as of the most recent reporting we could find (2025), was not yet open to the general public. Please confirm current public access before planning a visit.',
      approx: true, coords: [28.0469, 34.7140],
      tagline: 'NEOM\'s first completed luxury island, with a marina, yacht club and golf course.',
      overview: ['Sindalah is a small island about 5 km off the NEOM coast, developed as a luxury destination with an 86-berth marina, a yacht club, a par-70 golf course, 38 restaurants, and hotel rooms, villas and serviced apartments.'],
      history: ['Unveiled to invited guests in October 2024 as the first completed region of NEOM; full public opening has been repeatedly delayed.'],
      religious: null,
      highlights: ['Marina and yacht club', 'Golf course', 'Beach clubs and restaurants'],
      hours: { summary: 'Not generally open to the public (unconfirmed current status)', details: [], note: 'Check NEOM\'s official channels for current access before travelling.' },
      tickets: { required: true, price: 'Luxury resort pricing (unconfirmed)', how: ['Book through NEOM/Sindalah official channels when open.'], links: [] },
      gettingThere: { airport: 'NEOM Bay Airport', road: 'By boat from the NEOM coast.', transport: 'Boat transfer.' },
      bestTime: 'October – April', duration: '1+ day', dress: 'Resort wear.', tips: ['Confirm public access is open before booking any travel.']
    },
    {
      id: 'al-wajh-old-town', name: 'Al-Wajh Old Town (Al-Balad)', nativeName: 'البلد القديم – الوجه',
      region: 'tabuk', city: 'Al-Wajh', categories: ['heritage'],
      approx: true, coords: [26.6271, 36.6653],
      tagline: 'A historic Red Sea port town famed for its carved wooden balconies (rawashin).',
      overview: [
        'Al-Wajh\'s old town is known for coral-stone buildings with intricate latticed wooden balconies, called rawashin or rawasheen, that provided shade and encouraged airflow in the hot coastal climate.',
        'The town was historically a trade gateway on the Red Sea pilgrim route and once served as the port for Madain Saleh (Hegra). The restored King Abdulaziz / Al-Wajh Castle (built 1875) can also be explored. Much of the old town is now sparsely inhabited, with many buildings deserted.'
      ],
      history: ['Included in The Red Sea Project since 2017; large-scale infrastructure works (including the airport) began under Red Sea Global from 2023.'],
      religious: null,
      highlights: ['Rawashin carved wooden balconies', 'Al-Wajh Castle (1875)', 'Old harbour and city walls'],
      hours: { summary: 'Open area — daylight visits', details: [], note: 'Many buildings are deserted/unsafe to enter; view from outside.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Wajh (EJH)', road: 'Al-Wajh town.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['A local guide helps find the best-preserved rawashin houses.']
    },
    {
      id: 'amaala-triple-bay', name: 'AMAALA — Triple Bay', nativeName: 'أمالا – الخليج الثلاثي',
      region: 'tabuk', city: 'Al-Wajh area', categories: ['coast', 'modern'],
      status: 'check',
      notice: 'AMAALA\'s resorts have opened in phases; exact coordinates for Triple Bay are approximate and not independently confirmed. Confirm which resorts are currently open before booking.',
      approx: true, coords: [27.9500, 34.9500],
      tagline: 'A wellness-focused luxury coastal destination north of Al-Wajh.',
      overview: ['AMAALA is a Red Sea Global luxury destination north of Al-Wajh, built around wellness, yachting and marine life. Its Triple Bay area has opened resorts including Four Seasons Resort and Residences AMAALA, with Six Senses AMAALA and Rosewood AMAALA among further planned or opening properties.'],
      history: ['Part of Saudi Vision 2030\'s Red Sea Global developments; Red Sea Global announced the Triple Bay opening at the 2025 TOURISE Summit, targeting visitor arrivals from around January 2026.'],
      religious: null,
      highlights: ['Four Seasons Resort and Residences AMAALA', 'Six Senses AMAALA / Rosewood AMAALA (phased openings)', 'Yacht marina and wellness facilities'],
      hours: { summary: 'Resort stays — check current opening status', details: [], note: 'Resorts are opening in phases — confirm which are live before booking.' },
      tickets: { required: true, price: 'Luxury resort pricing', how: ['Book directly with each resort brand (Four Seasons, Six Senses, Rosewood) once open.'], links: [] },
      gettingThere: { airport: 'NEOM Bay or Al-Wajh (EJH)', road: 'Resort transfers.', transport: 'Resort transfer only.' },
      bestTime: 'October – May', duration: '2+ days', dress: 'Resort wear.', tips: ['Confirm current resort opening status — this destination is still being phased in.']
    },
    {
      id: 'harrat-lunayyir', name: 'Harrat Lunayyir', nativeName: 'حرة لونير',
      region: 'tabuk', city: 'Umluj', categories: ['nature'],
      coords: [25.2691, 37.5275],
      tagline: 'A volcanic lava field of about 50 cinder cones east of Umluj.',
      overview: ['Harrat Lunayyir is a basaltic lava field in north-western Saudi Arabia, roughly 200 km from the Red Sea spreading centre, containing around 50 volcanic cones formed over the last 10,000 years.'],
      history: ['Volcanic activity here dates back roughly 500,000 years. In 2009 an earthquake swarm and an 8 km surface rupture led to the evacuation of over 30,000 residents from the nearby town of Al-Ays; activity subsided by August 2009. A 2026 Saudi Geological Survey study flags the field\'s central zone as a seismic/volcanic hazard area that is also being considered for tourism development.'],
      religious: null,
      highlights: ['Dozens of volcanic cones', 'Black lava fields', 'Dramatic desert-volcano scenery'],
      hours: { summary: 'Daylight hours', details: [], note: 'This is a scientifically monitored hazard area as well as a scenic one — travel with a guide and check current conditions.' },
      tickets: { required: false, price: 'Free (guided tours recommended)', how: ['Arrange a 4x4 guide from Umluj.'], links: [] },
      gettingThere: { airport: 'Al-Wajh (EJH) or Red Sea International (RSI)', road: 'East of Umluj, off the Umluj–Al-Ays road.', transport: '4x4 recommended.' },
      bestTime: 'October – April', duration: 'Half day', dress: 'Sturdy shoes, sun protection.', tips: ['Combine with Umluj\'s islands for a full desert-and-coast day.']
    },
    {
      id: 'al-naslaa-rock', name: 'Al-Naslaa Rock', nativeName: 'صخرة النسلاء',
      region: 'tabuk', city: 'Tayma', categories: ['nature', 'archaeology'], featured: true,
      coords: [27.2294, 38.5717],
      tagline: 'A sandstone boulder split cleanly in two — one of Arabia\'s strangest natural landmarks.',
      overview: [
        'Al-Naslaa Rock is a sandstone formation about 50 km south of the Tayma oasis, roughly 6 m high and 9 m wide, famous for a narrow, almost perfectly straight crack that splits it into two symmetrical blocks, each balanced on its own natural pedestal.',
        'Its south-east face carries petroglyphs, including horses and ibex, of unknown age.'
      ],
      history: ['The cause of the split is debated: leading theories point to a fault line, natural erosion along a rock joint, or freeze-thaw cracking; claims of human/laser cutting are popular online but not supported by geologists or archaeologists.'],
      religious: null,
      highlights: ['Perfectly split boulder', 'Ancient petroglyphs', 'Popular sunset photography spot'],
      hours: { summary: 'Open daily; best at sunset', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'About 50 km south of Tayma, off the AlUla road.', transport: 'Car; a 4x4 may help on the final approach.' },
      bestTime: 'October – April, late afternoon', duration: '30–45 minutes', dress: 'Comfortable clothes, sun protection.', tips: ['Visit close to sunset for the best light through the crack.', 'Combine with the Tayma oasis sites.']
    },
    {
      id: 'qurayyah-archaeological-site', name: 'Qurayyah Archaeological Site', nativeName: 'موقع القريّة الأثري',
      region: 'tabuk', city: 'Tabuk', categories: ['archaeology'],
      approx: true, coords: [28.7833, 36.0167],
      tagline: 'A vast walled Bronze Age oasis — source of the famous Qurayyah Painted Ware pottery.',
      overview: ['Qurayyah is a roughly 750-acre walled desert oasis site north-west of Tabuk, one of the largest ancient walled oases on the Arabian Peninsula. Excavations have uncovered a fully preserved ancient pottery workshop with kilns, and the site is the source of "Qurayyah Painted Ware" (long called "Midianite Pottery"), traded as far as the southern Levant in the Late Bronze and Iron Ages.'],
      history: ['Painted pottery here dates back roughly 3,600 years, peaking in production around 3,200 years ago, with the latest examples from the 4th century BCE. Excavated by the Saudi Heritage Commission with the University of Vienna.'],
      religious: null,
      highlights: ['Ancient pottery workshop and kilns', 'Massive oasis walls', 'Source of Qurayyah Painted Ware'],
      hours: { summary: 'Research/heritage site — check current public access', details: [], note: 'This is primarily an active archaeological project; general visitor infrastructure is limited.' },
      tickets: { required: false, price: 'Free (if accessible)', how: ['Check with the Heritage Commission or a local guide about current access.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'North-west of Tabuk city.', transport: 'Car with local guidance recommended.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Comfortable clothes, sun protection.', tips: ['Best suited to visitors with a strong interest in archaeology — infrastructure for casual tourists is limited.']
    },
    {
      id: 'six-senses-southern-dunes', name: 'Six Senses Southern Dunes, The Red Sea', nativeName: 'سيكس سينسز ساذرن ديونز',
      region: 'tabuk', city: 'Umluj area', categories: ['coast', 'modern'],
      approx: true, coords: [24.9500, 37.3000],
      tagline: 'A desert-dune luxury resort — the first property to open in The Red Sea destination.',
      overview: ['Six Senses Southern Dunes, in the Alnesai desert, opened in December 2023 as the first resort of The Red Sea Project. Designed by Foster + Partners, it has 36 rooms and 40 pool villas, aims to be Saudi Arabia\'s first LEED Platinum resort, and runs on its own solar farm.'],
      history: ['Opened 1 December 2023, roughly 45 minutes by private transfer from Red Sea International Airport.'],
      religious: null,
      highlights: ['Desert-dune villas', 'LEED Platinum sustainability design', 'Large spa with pools'],
      hours: { summary: 'Resort stays — open year-round', details: [], note: '' },
      tickets: { required: true, price: 'Luxury resort pricing', how: ['Book directly via Six Senses.'], links: [] },
      gettingThere: { airport: 'Red Sea International (RSI), ~45 minutes', road: 'Resort transfer.', transport: 'Resort transfer only.' },
      bestTime: 'October – May', duration: '2–4 days', dress: 'Resort wear.', tips: ['Combine with Shura Island or Umluj\'s islands for a longer Red Sea coast trip.']
    },
    {
      id: 'ummahat-islands-resorts', name: 'Ummahat Islands Resorts (St. Regis & Nujuma)', nativeName: 'جزر أمهات — منتجعات',
      region: 'tabuk', city: 'Umluj area', categories: ['coast', 'modern'], featured: true,
      approx: true, coords: [25.0500, 37.1500],
      tagline: 'Private-island luxury resorts in the Ummahat archipelago, reached only by boat or seaplane.',
      overview: ['The Ummahat Islands, part of The Red Sea destination, host two of the project\'s most exclusive resorts: The St. Regis Red Sea Resort (90 keys, opened January 2024, designed by Kengo Kuma to follow its island\'s shoreline) and Nujuma, a Ritz-Carlton Reserve (63 keys, opened May 2024, the brand\'s first Middle East property). The two resorts are a 5–10 minute boat ride apart and are reached only by seaplane or speedboat from Red Sea International Airport.'],
      history: ['The St. Regis opened January 2024; Nujuma opened May 2024.'],
      religious: null,
      highlights: ['The St. Regis Red Sea Resort', 'Nujuma, a Ritz-Carlton Reserve', 'Seaplane/speedboat-only access'],
      hours: { summary: 'Resort stays — open year-round', details: [], note: '' },
      tickets: { required: true, price: 'Ultra-luxury resort pricing', how: ['Book directly via Marriott (St. Regis) or Ritz-Carlton Reserve.'], links: [] },
      gettingThere: { airport: 'Red Sea International (RSI)', road: 'Seaplane or speedboat transfer only.', transport: 'Seaplane/speedboat transfer arranged by the resort.' },
      bestTime: 'October – May', duration: '2–4 days', dress: 'Resort wear.', tips: ['Transfers are seaplane/boat only — coordinate timing with your resort in advance.']
    },
    {
      id: 'desert-rock-resort', name: 'Desert Rock Resort, The Red Sea', nativeName: 'ديزرت روك',
      region: 'tabuk', city: 'Hanak', categories: ['modern'],
      approx: true, coords: [25.5266, 37.0152],
      tagline: 'A 64-key resort carved into the Hijaz mountains, with rooms set into the cliff face.',
      overview: ['Desert Rock is a mountain resort built into the Hijaz Mountains near Hanak, part of The Red Sea destination. It is the fifth resort to open there and Red Sea Global\'s third self-operated property, with 64 rooms set directly into the rock.'],
      history: ['Bookings opened December 2024, with guests arriving from around early 2025.'],
      religious: null,
      highlights: ['Rooms carved into the mountainside', 'Desert and mountain views', 'Stargazing'],
      hours: { summary: 'Resort stays — open year-round', details: [], note: '' },
      tickets: { required: true, price: 'Luxury resort pricing', how: ['Book directly via Red Sea Global / the resort website.'], links: [] },
      gettingThere: { airport: 'Red Sea International (RSI)', road: 'Resort transfer from the airport.', transport: 'Resort transfer only.' },
      bestTime: 'October – May', duration: '2–3 days', dress: 'Resort wear.', tips: ['A very different Red Sea experience from the beach/island resorts — mountains rather than coast.']
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
      coords: [29.5511, 43.6005], 
      tagline: 'The great Abbasid pilgrim road from Kufa to Makkah.',
      overview: ['Zubala is one of the best-preserved stations on Darb Zubaydah, with large stone water cisterns and ruins of a fort.'],
      history: ['The road was improved in the 8th century and named after Zubaydah, wife of Caliph Harun al-Rashid.'],
      religious: ['For centuries this road carried pilgrims from Iraq to Makkah for Hajj; Zubaydah funded wells and cisterns as a charitable act (sadaqah jariyah).'],
      highlights: ['Zubala cisterns', 'Fort ruins'],
      hours: { summary: 'Daytime', details: [], note: 'Remote area.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Rafha (RAH)', road: 'South of Rafha.', transport: '4x4.' },
      bestTime: 'November – March', duration: '2 hours', dress: 'Desert gear.', tips: ['Go with a local guide.']
    },
    /* ======================= MORE: MAKKAH PROVINCE ======================= */
    {
      id: 'jabal-thawr', name: 'Jabal Thawr & Cave of Thawr', nativeName: 'جبل ثور وغار ثور',
      region: 'makkah', city: 'Makkah', categories: ['religious', 'nature'], muslimsOnly: true,
      coords: [21.377, 39.8499], wiki: 'https://en.wikipedia.org/wiki/Jabal_Thawr',
      tagline: 'The cave where the Prophet ﷺ sheltered during the Hijrah.',
      overview: [
        'Jabal Thawr is a rugged 759 m mountain on the southern edge of Makkah. Near its summit is the small Cave of Thawr, reached by a steep rocky path.',
        'The climb is harder than Jabal al-Nour, but the view over Makkah and the surrounding valleys is spectacular.'
      ],
      history: [
        'In 622 CE, when Prophet Muhammad ﷺ and Abu Bakr al-Siddiq left Makkah for Madinah (the Hijrah), they hid in this cave for three nights while the Quraysh searched for them.',
        'Islamic tradition relates that a spider spun a web and a dove nested at the entrance, so the pursuers believed no one was inside.'
      ],
      religious: [
        'The Qur\'an refers to this moment: "...when he said to his companion, \'Do not grieve; indeed Allah is with us\'" (At-Tawbah 9:40). For Muslims the cave is a powerful reminder of trust in God (tawakkul) and of the friendship of Abu Bakr. Visiting it is not part of Hajj or Umrah rituals.'
      ],
      highlights: ['Cave of Thawr', 'Panoramic view of Makkah', 'Challenging sunrise hike'],
      hours: { summary: 'Mountain path open at all hours', details: ['Best climbed after Fajr'], note: 'The climb takes about 1.5–2 hours one way.' },
      tickets: { required: false, price: 'Free', how: ['No ticket needed.'], links: [] },
      access: 'Located inside Makkah — Muslims only.',
      gettingThere: { airport: 'King Abdulaziz International (JED), Jeddah', road: 'About 7 km south of Masjid al-Haram.', transport: 'Taxi or ride-hailing to the foot of the mountain.' },
      bestTime: 'Early morning, November – February', duration: '3–4 hours',
      dress: 'Modest clothes and sturdy shoes.', tips: ['Carry plenty of water.', 'Not suitable for elderly visitors or young children.']
    },
    {
      id: 'arafat-mina', name: 'Mina, Muzdalifah & Mount Arafat', nativeName: 'منى ومزدلفة وعرفات',
      region: 'makkah', city: 'Makkah', categories: ['religious'], muslimsOnly: true, featured: true,
      coords: [21.3549, 39.9841], wiki: 'https://en.wikipedia.org/wiki/Mount_Arafat',
      tagline: 'The holy sites where the rites of Hajj take place.',
      overview: [
        'East of Makkah lie the three holy sites of Hajj: Mina, the "tent city" with over 100,000 air-conditioned tents and the Jamarat bridge; Muzdalifah, an open plain where pilgrims spend the night under the sky; and the plain of Arafat with Jabal al-Rahmah (the Mount of Mercy).',
        'Outside the Hajj days the sites are quiet, and many visitors come to see Jabal al-Rahmah and Masjid Namirah.'
      ],
      history: [
        'Prophet Muhammad ﷺ performed his Farewell Hajj in 632 CE and delivered his famous Farewell Sermon on the plain of Arafat. The Jamarat bridge in Mina was rebuilt in the 2000s as a multi-level structure to keep millions of pilgrims safe, and the Al Mashaaer Al Mugaddassah Metro links the sites during Hajj.'
      ],
      religious: [
        'Standing at Arafat (wuquf) on the 9th of Dhul-Hijjah is the most important pillar of Hajj — the Prophet ﷺ said "Hajj is Arafah". Pilgrims then spend the night in Muzdalifah, collect pebbles, and in Mina perform the stoning of the Jamarat, sacrifice and shaving the head, commemorating Prophet Ibrahim\'s submission to God.'
      ],
      highlights: ['Jabal al-Rahmah (Mount of Mercy)', 'Masjid Namirah', 'Jamarat bridge', 'Mina tent city', 'Mashaaer Metro (Hajj season)'],
      hours: { summary: 'Open area — accessible outside Hajj at any time', details: ['During Hajj (8–13 Dhul-Hijjah) access is limited to permit-holding pilgrims'], note: '' },
      tickets: { required: false, price: 'Free', how: ['Outside the Hajj season no ticket is needed to visit.', 'During Hajj (8–13 Dhul-Hijjah) only registered pilgrims with an official Hajj permit may enter the sites.'], links: [] },
      access: 'Within the Makkah sacred area — Muslims only.',
      gettingThere: { airport: 'King Abdulaziz International (JED), Jeddah', road: 'Mina is about 5 km and Arafat about 20 km east of Masjid al-Haram.', transport: 'Taxi or tour; Mashaaer Metro during Hajj only.' },
      bestTime: 'Outside Hajj: early morning in winter', duration: '2–3 hours (visit)',
      dress: 'Modest clothes; ihram during Hajj.', tips: ['Ziyarat tours from Makkah hotels often include these sites.', 'Bring an umbrella for shade at Jabal al-Rahmah.']
    },
    {
      id: 'masjid-aisha', name: 'Masjid Aisha (Tan\'eem Mosque)', nativeName: 'مسجد عائشة (التنعيم)',
      region: 'makkah', city: 'Makkah', categories: ['religious'], muslimsOnly: true,
      coords: [21.4677, 39.8014], 
      tagline: 'The nearest miqat for entering ihram from within Makkah.',
      overview: ['Masjid Aisha stands at al-Tan\'eem, about 7.5 km north of the Grand Mosque at the boundary of the Haram. It has large ablution areas and changing facilities for pilgrims.'],
      history: ['It marks the place where Aisha, the wife of the Prophet ﷺ, entered ihram for Umrah after Hajj in 632 CE, accompanied by her brother Abdur-Rahman, on the Prophet\'s ﷺ instruction.'],
      religious: ['People already staying in Makkah who wish to perform another Umrah go out to the edge of the Haram — most commonly here — to put on ihram and make the intention (niyyah).'],
      highlights: ['Miqat for Umrah', 'Ablution and changing facilities'],
      hours: { summary: 'Open 24 hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket or booking is needed to visit the mosque.'], links: [] },
      access: 'Within Makkah — Muslims only.',
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'About 15 minutes from the Haram.', transport: 'Taxis and Makkah buses run between the Haram and Masjid Aisha.' },
      bestTime: 'Late night or early morning', duration: '1 hour', dress: 'Ihram for men; modest dress for women.', tips: ['Bring your ihram in a bag and change there.']
    },
    {
      id: 'clock-tower-museum', name: 'Clock Tower Museum (Abraj Al-Bait)', nativeName: 'متحف ساعة مكة',
      region: 'makkah', city: 'Makkah', categories: ['modern', 'religious'], muslimsOnly: true,
      coords: [21.4189, 39.8256], wiki: 'https://en.wikipedia.org/wiki/Abraj_Al-Bait',
      tagline: 'Astronomy and timekeeping exhibits at the top of the Makkah Clock Tower.',
      overview: ['The Makkah Royal Clock Tower (about 601 m) faces the Grand Mosque and has one of the largest clock faces in the world. Its upper floors house a museum about astronomy, the Islamic calendar and timekeeping, with an observation balcony above the clock.'],
      history: ['The Abraj Al-Bait complex was completed in 2012 on the site of the Ottoman Ajyad Fortress. It includes hotels, malls and prayer areas connected to the Haram.'],
      religious: ['Exhibits explain how Muslims determine prayer times, the direction of the Qibla and the lunar Hijri calendar, including moon-sighting for Ramadan and Eid.'],
      highlights: ['Clock-face balcony view of the Kaaba', 'Astronomy galleries', 'Crescent at the top of the spire'],
      hours: { summary: 'Typically daily, roughly 9:00 AM – late evening', details: [], note: 'Opening hours change in Ramadan and Hajj.' },
      tickets: { required: true, price: 'Paid (price varies)', how: ['Buy tickets at the museum desk inside the Clock Tower complex.'], links: [] },
      access: 'Within Makkah — Muslims only.',
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'Directly opposite the King Abdulaziz Gate of Masjid al-Haram.', transport: 'Walk from the Haram.' },
      bestTime: 'Outside peak prayer times', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['Go just before sunset for the best view.']
    },
    {
      id: 'al-wahbah-crater', name: 'Al-Wahbah Crater', nativeName: 'فوهة الوعبة',
      region: 'makkah', city: 'Near Taif', categories: ['nature'], featured: true,
      coords: [22.9011, 41.1394], wiki: 'https://en.wikipedia.org/wiki/Al_Wahbah',
      tagline: 'A 2 km-wide volcanic crater with a white salt floor.',
      overview: ['Al-Wahbah is a near-perfect volcanic crater about 2 km across and about 250 m deep, with a gleaming white floor of sodium phosphate crystals. A hiking trail leads down to the bottom.'],
      history: ['It is a maar crater, created by a violent steam explosion when rising magma met groundwater within the Harrat Kishb volcanic field. Local legend says it was formed by a meteorite.'],
      religious: null,
      highlights: ['Rim viewpoint', 'Hike to the salt floor', 'Camping under dark skies'],
      hours: { summary: 'Open at all times (daylight recommended)', details: [], note: 'No facilities at the rim — come prepared.' },
      tickets: { required: false, price: 'Free', how: ['No ticket needed.'], links: [] },
      gettingThere: { airport: 'Taif (TIF)', road: 'About 250 km north-east of Taif via the Taif–Zalim road; last section on desert track.', transport: '4x4 or guided tour.' },
      bestTime: 'November – March', duration: 'Full day', dress: 'Hiking gear, sun protection.', tips: ['The descent takes about 1 hour; the climb back up is tough.', 'Carry at least 3 litres of water per person.']
    },
    {
      id: 'shubra-palace', name: 'Shubra Palace, Taif', nativeName: 'قصر شبرا',
      region: 'makkah', city: 'Taif', categories: ['heritage'],
      coords: [21.2859, 40.4151], wiki: 'https://en.wikipedia.org/wiki/Shubra_Palace',
      tagline: 'An elegant early 20th-century palace with wooden balconies.',
      overview: ['Shubra Palace is a four-storey palace of stone and wood with marble from Italy and ornate rawasheen balconies. It has served as Taif\'s regional museum.'],
      history: ['Built around 1905 during the late Ottoman era, it later became a residence of King Abdulaziz and King Faisal during summer stays in Taif.'],
      religious: null,
      highlights: ['Carved wooden balconies', 'Marble staircase', 'Local history exhibits'],
      hours: { summary: 'Hours vary — check locally', details: [], note: 'The palace may close for restoration.' },
      tickets: { required: false, price: 'Free / small fee', how: ['Pay at the entrance if open.'], links: [] },
      gettingThere: { airport: 'Taif (TIF)', road: 'In central Taif.', transport: 'Taxi.' },
      bestTime: 'Summer (cool climate)', duration: '1 hour', dress: 'Modest clothes.', tips: ['Combine with Taif\'s central souq.']
    },
    {
      id: 'souq-okaz', name: 'Souq Okaz', nativeName: 'سوق عكاظ',
      region: 'makkah', city: 'Taif', categories: ['heritage'], featured: true,
      coords: [21.4813, 40.663], wiki: 'https://en.wikipedia.org/wiki/Souk_Okaz',
      tagline: 'The legendary pre-Islamic market of poets and traders, revived as a cultural festival.',
      overview: [
        'Souq Okaz is a famous historic open-air marketplace near Taif. Founded around the early 6th century CE, it was the greatest annual gathering of pre-Islamic Arabia, where tribes came to trade, settle disputes and hold poetry contests.',
        'Revived in 2007 on its original site in northern Taif, the reconstructed souq recreates ancient Arabian streets alongside modern exhibition halls and a large theatre, and comes alive during the seasonal Souq Okaz festival.'
      ],
      history: [
        'Poets competed here in eloquence, and celebrated poems were honoured before the gathered tribes — the famous Mu\'allaqat are traditionally linked to this tradition.',
        'Merchants traded leather, weapons, perfumes and silk, while tribal leaders negotiated alliances, treaties and reconciliations.',
        'The market declined in the 8th century CE. Its location on the outskirts of Taif was identified again in the 20th century and restored under Saudi heritage programmes.'
      ],
      religious: ['Before his prophethood, Muhammad ﷺ is reported to have attended the market, where he heard the famous preacher Quss ibn Sa\'ida al-Iyadi, and in the early years of his mission he invited the tribes gathered at Okaz to Islam.'],
      highlights: [
        'Reconstructed ancient Arabian market streets',
        'Live historical re-enactments and storytelling',
        'Camel and horse shows and folk arts',
        'Around 200 traditional shops — pottery, silver, Taif rose products, perfumes',
        'Awards for Arabic poetry, calligraphy and handicrafts',
        'Large open-air theatre for performances'
      ],
      hours: { summary: 'Open mainly during the seasonal festival (usually summer)', details: ['Outside festival dates the grounds are often closed to walk-in visitors'], note: 'Festival dates are announced each year under the Saudi Seasons programme — check before travelling.' },
      tickets: { required: true, price: 'Festival tickets (price varies)', how: ['Watch for official festival announcements each year.', 'Buy tickets online when the season opens (VisitSaudi / official ticketing).'], links: [{ label: 'VisitSaudi – events', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'Taif International Airport (TIF) — nearby', road: 'Along Souq Okaz Road in northern Taif.', transport: 'Car, taxi or festival shuttles.' },
      bestTime: 'Festival season (summer evenings)', duration: 'Half a day',
      dress: 'Modest clothes; a light jacket for Taif evenings.',
      tips: [
        'Evenings are the liveliest time during the festival.',
        'Combine with Taif\'s rose farms and Al-Rudaf Park.',
        'Check the dates before going — the site is often closed outside the season.'
      ]
    },
    {
      id: 'fakieh-aquarium', name: 'Fakieh Aquarium, Jeddah', nativeName: 'فقيه أكواريوم',
      region: 'makkah', city: 'Jeddah', categories: ['modern', 'coast'],
      coords: [21.5723, 39.1094], 
      tagline: 'Red Sea marine life on the Jeddah corniche.',
      overview: ['A family-friendly public aquarium with Red Sea fish, sharks, rays and other species, plus shows and an educational focus on marine conservation.'],
      history: ['Opened in 2006 on Jeddah\'s northern corniche.'],
      religious: null,
      highlights: ['Shark tunnel', 'Red Sea reef displays', 'Family shows'],
      hours: { summary: 'Typically daily, morning to late evening', details: [], note: '' },
      tickets: { required: true, price: 'Paid entry', how: ['Buy at the gate or via the official website.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'North Corniche, Jeddah.', transport: 'Taxi.' },
      bestTime: 'Any time', duration: '1–2 hours', dress: 'Casual.', tips: ['Good option on hot days.']
    },
    {
      id: 'jeddah-yacht-club-marina', name: 'Jeddah Yacht Club & Marina', nativeName: 'نادي جدة لليخوت والمرسى',
      region: 'makkah', city: 'Jeddah', categories: ['modern', 'coast'],
      coords: [21.6530, 39.1015],
      tagline: 'A Red Sea marina and official port of entry on Jeddah\'s North Corniche.',
      overview: ['Jeddah Yacht Club & Marina sits on the North Corniche waterfront and is an official port of entry to Saudi Arabia, with customs and immigration handled on site for arriving vessels, including foreign-flagged charters. Berths reportedly accommodate yachts and superyachts up to around 120 m; club facilities include a clubhouse, wellness centre and beach club, though full club membership is members-only.'],
      history: ['Opened ahead of Saudi Arabia\'s first Formula One race, held on the North Corniche circuit in December 2021.'],
      religious: null,
      highlights: ['Marina berths for yachts and superyachts', 'Beach club and dining', 'Port-of-entry customs/immigration facilities'],
      hours: { summary: 'Marina grounds generally open; club facilities members-only', details: [], note: '' },
      tickets: { required: false, price: 'Free to view the marina; club access is members-only', how: ['Dining/beach-club reservations via the venue directly.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED), about 20 minutes', road: 'North Corniche, Ash Shati, Jeddah.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Smart casual.', tips: ['Good spot for sunset views over the marina even without club membership.']
    },

    /* ======================= MORE: MADINAH PROVINCE ======================= */
    {
      id: 'masjid-qiblatain', name: 'Masjid al-Qiblatain', nativeName: 'مسجد القبلتين',
      region: 'madinah', city: 'Madinah', categories: ['religious'],
      muslimSite: true, coords: [24.4842, 39.5789], wiki: 'https://en.wikipedia.org/wiki/Masjid_al-Qiblatayn',
      tagline: 'The "Mosque of the Two Qiblas".',
      overview: ['A white mosque with twin minarets and domes in north-west Madinah, famous as the place where the direction of prayer changed.'],
      history: ['In 624 CE (2 AH), during a prayer here, revelation came to change the Qibla from Jerusalem (Al-Aqsa) to the Kaaba in Makkah, and the congregation turned mid-prayer. The current building dates from a 1987 reconstruction.'],
      religious: ['The change of Qibla is described in the Qur\'an (Al-Baqarah 2:144): "So turn your face toward al-Masjid al-Haram." It marks a defining moment in Islamic identity.'],
      highlights: ['Twin minarets', 'Story of the Qibla change'],
      hours: { summary: 'Open for the five daily prayers', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      access: 'Muslims may enter for prayer; others may view the exterior.',
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'About 5 km north-west of the Prophet\'s Mosque.', transport: 'Taxi or ziyarat tour.' },
      bestTime: 'Morning', duration: '30–60 minutes', dress: 'Modest clothes.', tips: ['Usually included in Madinah ziyarat tours.']
    },
    {
      id: 'al-baqi', name: 'Jannat al-Baqi Cemetery', nativeName: 'بقيع الغرقد',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage'],
      muslimSite: true, coords: [24.4672, 39.6158], 
      tagline: 'The resting place of many of the Prophet\'s ﷺ family and companions.',
      overview: ['Al-Baqi is the main cemetery of Madinah, directly south-east of the Prophet\'s Mosque. Graves are simple and unmarked, in keeping with local practice.'],
      history: ['Used since the time of the Prophet ﷺ, it contains the graves of many of his wives, his daughter Fatimah (according to many accounts), his son Ibrahim, his uncle Abbas, Caliph Uthman ibn Affan and thousands of companions.'],
      religious: ['The Prophet ﷺ used to visit Al-Baqi and pray for those buried there. Visitors send greetings of peace and supplicate for the deceased, following the Sunnah.'],
      highlights: ['Graves of companions and family of the Prophet ﷺ'],
      hours: { summary: 'Usually opened for men after Fajr and after Asr', details: [], note: 'Women may view from outside the fence.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'Next to the Prophet\'s Mosque.', transport: 'Walk from the Haram.' },
      bestTime: 'After Fajr', duration: '30 minutes', dress: 'Modest clothes.', tips: ['Keep silent and respectful; photography is discouraged.']
    },
    {
      id: 'seven-mosques', name: 'The Seven Mosques & Battle of the Trench Site', nativeName: 'المساجد السبعة',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage'],
      muslimSite: true, coords: [24.4767, 39.5970], 
      tagline: 'Small historic mosques at the site of the Battle of the Trench.',
      overview: ['A group of small mosques on the western slopes of Mount Sal\'a, beside the large modern Al-Khandaq Mosque. The area marks where the Muslims dug a trench to defend Madinah.'],
      history: ['In 627 CE (5 AH) a confederate army besieged Madinah. On the advice of Salman al-Farsi, the Muslims dug a trench (khandaq) across the open northern approach. After weeks of siege and a fierce storm, the attackers withdrew.'],
      religious: ['The Battle of the Trench (Al-Ahzab) is described in Surah Al-Ahzab. The mosque of Al-Fath is associated with the place where the Prophet ﷺ supplicated for victory.'],
      highlights: ['Al-Fath Mosque', 'Salman al-Farsi Mosque', 'Al-Khandaq Mosque'],
      hours: { summary: 'Area open daily; mosques open for prayers', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'About 4 km north-west of the Prophet\'s Mosque.', transport: 'Taxi or ziyarat tour.' },
      bestTime: 'Morning', duration: '1 hour', dress: 'Modest clothes.', tips: ['Read the story of Al-Ahzab before visiting.']
    },
    {
      id: 'hejaz-railway-museum', name: 'Hejaz Railway Museum, Madinah', nativeName: 'متحف سكة حديد الحجاز',
      region: 'madinah', city: 'Madinah', categories: ['heritage'],
      approx: true, coords: [24.4628, 39.6000], wiki: 'https://en.wikipedia.org/wiki/Hejaz_railway',
      tagline: 'The southern terminus of the Ottoman railway to Damascus.',
      overview: ['The restored Anbariya station complex houses a museum with historic locomotives, carriages, photographs and stories of the railway that once carried pilgrims from Damascus to Madinah.'],
      history: ['The Hejaz Railway opened to Madinah in 1908, cutting the journey from Damascus from about 40 days to a few days. It was repeatedly sabotaged during the First World War and the line south of Jordan never reopened.'],
      religious: ['The railway was built primarily to serve Hajj pilgrims travelling from the Ottoman lands to the holy cities.'],
      highlights: ['Restored station', 'Steam locomotives', 'Historic photographs'],
      hours: { summary: 'Typically daily, morning and evening sessions', details: [], note: 'Hours vary — check locally.' },
      tickets: { required: false, price: 'Free / small fee', how: ['Pay at the entrance if applicable.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'About 1.5 km west of the Prophet\'s Mosque.', transport: 'Taxi or walk.' },
      bestTime: 'Any time', duration: '1 hour', dress: 'Modest clothes.', tips: ['The Anbariya Mosque next door is also beautiful.']
    },
    {
      id: 'dadan-jabal-ikmah', name: 'Dadan & Jabal Ikmah', nativeName: 'دادان وجبل عكمة',
      region: 'madinah', city: 'AlUla', categories: ['archaeology'],
      coords: [26.6471, 37.9137], 
      tagline: 'Capital of the Dadanite and Lihyanite kingdoms and an "open library" of inscriptions.',
      overview: ['Dadan is the excavated capital of an ancient Arabian kingdom, famous for its "Lion Tombs" carved high in the cliff. Nearby Jabal Ikmah is a canyon whose walls carry hundreds of inscriptions — often called an open-air library.'],
      history: ['Dadan flourished from around the 9th to the 1st century BCE, controlling the incense route before the Nabataeans. The Ikmah inscriptions, in Dadanitic and other ancient scripts, record prayers, laws and offerings.'],
      religious: null,
      highlights: ['Lion Tombs', 'Ongoing excavations', 'Jabal Ikmah inscriptions'],
      hours: { summary: 'Guided tours, typically daytime', details: [], note: 'Book in advance.' },
      tickets: { required: true, price: 'Paid tour (price varies)', how: ['Book on the Experience AlUla website or app.'], links: [{ label: 'Experience AlUla', url: 'https://www.experiencealula.com' }] },
      gettingThere: { airport: 'AlUla International (ULH)', road: 'A few kilometres north of AlUla Old Town.', transport: 'Car or AlUla shuttle.' },
      bestTime: 'October – March', duration: '2–3 hours', dress: 'Hat and walking shoes.', tips: ['Combine with Hegra on the same day.']
    },
    {
      id: 'khaybar', name: 'Khaybar Oasis & Fortress', nativeName: 'خيبر',
      region: 'madinah', city: 'Khaybar', categories: ['heritage', 'religious', 'nature'],
      coords: [25.6950, 39.2930], wiki: 'https://en.wikipedia.org/wiki/Khaybar',
      tagline: 'A historic oasis of palm groves, basalt lava fields and fortresses.',
      overview: ['Khaybar is an oasis about 150 km north of Madinah, ringed by the black lava fields of Harrat Khaybar. Its old town, Marhab fortress and palm groves are being restored for visitors.'],
      history: ['Khaybar was a fertile, fortified oasis in late antiquity. Archaeologists have found Bronze Age walled settlements and thousands of stone structures in the surrounding volcanic field.'],
      religious: ['The Battle of Khaybar (628 CE / 7 AH) was a major event in early Islamic history; Ali ibn Abi Talib is remembered for his bravery in capturing the fortress.'],
      highlights: ['Marhab Fortress', 'Old town', 'Harrat Khaybar volcanic landscape', 'Palm groves'],
      hours: { summary: 'Daytime', details: [], note: 'Some areas accessible only with a guide.' },
      tickets: { required: false, price: 'Free / guided tours paid', how: ['Arrange guides locally or through tour operators.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'About 2 hours north of Madinah on the AlUla road.', transport: 'Car.' },
      bestTime: 'November – March', duration: 'Half a day', dress: 'Modest clothes, sturdy shoes.', tips: ['Good stop on the drive between Madinah and AlUla.']
    },
    {
      id: 'yanbu-historic', name: 'Historic Yanbu & Red Sea Coast', nativeName: 'ينبع التاريخية',
      region: 'madinah', city: 'Yanbu', categories: ['heritage', 'coast'],
      coords: [24.0870, 38.0590], wiki: 'https://en.wikipedia.org/wiki/Yanbu',
      tagline: 'An old port town with coral houses and excellent diving.',
      overview: ['Yanbu\'s historic district has restored coral-stone houses, including one associated with T.E. Lawrence. Offshore, the reefs of the Red Sea offer some of the country\'s best diving and snorkelling.'],
      history: ['Yanbu has served as the port of Madinah for centuries and was a supply base during the Arab Revolt (1916–18).'],
      religious: ['Historically, many pilgrims bound for Madinah landed at Yanbu.'],
      highlights: ['Old town', 'Diving and snorkelling', 'Yanbu Flower Festival (spring)', 'Corniche'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free (dive trips paid)', how: ['Book dives with licensed centres.'], links: [] },
      gettingThere: { airport: 'Yanbu (YNB)', road: 'About 2.5 hours from Madinah.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1–2 days', dress: 'Modest clothes; modest swimwear.', tips: ['Visit the Flower Festival in spring.']
    },
    {
      id: 'badr', name: 'Badr Battlefield', nativeName: 'بدر',
      region: 'madinah', city: 'Badr', categories: ['religious', 'heritage'],
      muslimSite: true, coords: [23.7800, 38.7900], wiki: 'https://en.wikipedia.org/wiki/Battle_of_Badr',
      tagline: 'Site of the first major battle in Islamic history.',
      overview: ['The town of Badr lies about 150 km south-west of Madinah. Visitors can see the battlefield plain, the Martyrs of Badr cemetery and Al-Areesh Mosque.'],
      history: ['In 624 CE (17 Ramadan, 2 AH) about 313 Muslims defeated a much larger Quraysh army here, a turning point for the young Muslim community.'],
      religious: ['The Qur\'an calls the day of Badr Yawm al-Furqan, "the Day of Criterion" (Al-Anfal 8:41). The 14 Muslim martyrs of Badr are honoured, and the companions who fought at Badr hold a special status.'],
      highlights: ['Martyrs of Badr cemetery', 'Al-Areesh Mosque', 'Battlefield plain'],
      hours: { summary: 'Daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'About 2 hours from Madinah.', transport: 'Car or ziyarat tour.' },
      bestTime: 'October – March', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['Visit in Ramadan to reflect on the anniversary.']
    },

    /* ======================= MORE: RIYADH PROVINCE ======================= */
    {
      id: 'al-faw', name: 'Al-Faw Archaeological Area', nativeName: 'قرية الفاو الأثرية',
      region: 'riyadh', city: 'Wadi ad-Dawasir', categories: ['archaeology'], unesco: true,
      coords: [19.7832, 45.1404], wiki: 'https://en.wikipedia.org/wiki/Qaryat_al-Faw',
      tagline: 'The ancient capital of Kindah on the edge of the Empty Quarter.',
      overview: ['Al-Faw (Qaryat al-Faw) is the ruin of a major caravan city on the north-western edge of the Rub\' al Khali, with a market, temples, houses, tombs, wall paintings and inscriptions. It became a UNESCO World Heritage Site in 2024.'],
      history: ['Al-Faw flourished from about the 1st century BCE to the 4th century CE as the capital of the Kingdom of Kindah, on the trade route between southern Arabia and the Gulf and Mesopotamia.'],
      religious: null,
      highlights: ['Ancient souq', 'Temples and tombs', 'Rock art and inscriptions'],
      hours: { summary: 'Access usually with permission or a guided tour', details: [], note: 'Remote desert site.' },
      tickets: { required: false, price: 'Free (permission may be required)', how: ['Arrange through licensed tour operators or the Heritage Commission.'], links: [] },
      gettingThere: { airport: 'Wadi ad-Dawasir (WAE)', road: 'About 100 km south of Wadi ad-Dawasir.', transport: '4x4 with guide.' },
      bestTime: 'November – February', duration: 'Full day', dress: 'Desert gear.', tips: ['Bring fuel, water and food; there are no services.']
    },
    {
      id: 'uruq-bani-maarid', name: '\'Uruq Bani Ma\'arid (Empty Quarter)', nativeName: 'عروق بني معارض',
      region: 'riyadh', city: 'Wadi ad-Dawasir', categories: ['nature'], unesco: true,
      coords: [19.6183, 45.6499], wiki: 'https://en.wikipedia.org/wiki/%27Uruq_Bani_Ma%27arid',
      tagline: 'Towering red dunes of the Rub\' al Khali, a UNESCO natural site.',
      overview: ['This protected area on the western edge of the Empty Quarter has some of the most spectacular linear dunes on Earth. It is a refuge for reintroduced Arabian oryx, sand gazelles and Nubian ibex. UNESCO listed it in 2023 as Saudi Arabia\'s first natural World Heritage Site.'],
      history: ['The Rub\' al Khali is the largest continuous sand desert in the world. Bedouin tribes have crossed it for millennia.'],
      religious: null,
      highlights: ['Giant red dunes', 'Arabian oryx', 'Desert camping'],
      hours: { summary: 'Access with authorised operators', details: [], note: 'Protected area — follow ranger rules.' },
      tickets: { required: 'partial', price: 'Tour cost', how: ['Visit with a licensed desert operator.'], links: [] },
      gettingThere: { airport: 'Wadi ad-Dawasir (WAE)', road: 'South of Wadi ad-Dawasir.', transport: '4x4 convoy only.' },
      bestTime: 'November – February', duration: '1–2 days', dress: 'Desert gear, warm layers for night.', tips: ['Never drive into the dunes alone.']
    },
    {
      id: 'red-sands', name: 'Red Sand Dunes (Nafud al-Thuwayrat)', nativeName: 'الرمال الحمراء',
      region: 'riyadh', city: 'Near Riyadh', categories: ['nature'],
      approx: true, coords: [24.4700, 46.1400], 
      tagline: 'Glowing red dunes for dune bashing, quad bikes and sunset camps.',
      overview: ['About an hour from Riyadh, these deep-red dunes are the capital\'s favourite desert playground: quad biking, sandboarding, camel rides and evening desert camps.'],
      history: ['The red colour comes from iron oxide coating the sand grains.'],
      religious: null,
      highlights: ['Quad bikes', 'Sandboarding', 'Desert camp dinners'],
      hours: { summary: 'Open at all times; tours mostly afternoon to night', details: [], note: '' },
      tickets: { required: false, price: 'Free (activities paid)', how: ['Book camps and tours online or with local operators.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 60–80 km west of Riyadh along the Makkah highway.', transport: 'Car or tour.' },
      bestTime: 'November – March', duration: 'Half a day', dress: 'Comfortable clothes, sunglasses.', tips: ['Wear a scarf to protect against sand.']
    },
    {
      id: 'wadi-hanifa', name: 'Wadi Hanifa', nativeName: 'وادي حنيفة',
      region: 'riyadh', city: 'Riyadh', categories: ['nature'],
      approx: true, coords: [24.6500, 46.6200], wiki: 'https://en.wikipedia.org/wiki/Wadi_Hanifa',
      tagline: 'A green valley park running through Riyadh.',
      overview: ['Wadi Hanifa is a 120 km valley crossing Riyadh. A major environmental restoration turned it into a long park with lakes, walking paths, picnic areas and palm groves.'],
      history: ['The valley was the lifeline of early Najdi settlements, including Diriyah. Its restoration project won the Aga Khan Award for Architecture in 2010.'],
      religious: null,
      highlights: ['Walking and cycling trails', 'Lakes', 'Picnic spots'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Western Riyadh; many access points.', transport: 'Car or taxi.' },
      bestTime: 'November – March evenings', duration: '2 hours', dress: 'Casual.', tips: ['Weekend evenings are busy with families.']
    },
    {
      id: 'boulevard-city', name: 'Boulevard City & Riyadh Season', nativeName: 'بوليفارد رياض سيتي',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.7700, 46.6050], wiki: 'https://en.wikipedia.org/wiki/Riyadh_Season',
      tagline: 'Riyadh\'s biggest entertainment zone during Riyadh Season.',
      overview: ['Boulevard City is an entertainment district with themed zones, restaurants, concerts, light shows and theatres. It is the heart of Riyadh Season, a huge annual winter festival.'],
      history: ['Riyadh Season began in 2019 as part of Vision 2030 to grow tourism and entertainment.'],
      religious: null,
      highlights: ['Themed zones', 'Concerts and shows', 'Dining'],
      hours: { summary: 'Typically afternoon to late night during the season', details: [], note: 'Riyadh Season usually runs from around October to March.' },
      tickets: { required: true, price: 'Paid entry (varies by zone/event)', how: ['Buy tickets online on Webook, the official ticketing platform for Riyadh Season.'], links: [{ label: 'Webook – tickets', url: 'https://webook.com' }] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Northern Riyadh, Hittin district.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Riyadh Season (winter)', duration: '3–5 hours', dress: 'Smart casual.', tips: ['Book popular shows early.']
    },
    {
      id: 'shaqra', name: 'Shaqra Old Town', nativeName: 'شقراء التراثية',
      region: 'riyadh', city: 'Shaqra', categories: ['heritage'],
      coords: [25.2480, 45.2500], wiki: 'https://en.wikipedia.org/wiki/Shaqra',
      tagline: 'A restored mud-brick town in the heart of Najd.',
      overview: ['Shaqra\'s historic quarter has restored mud-brick houses, walls, watchtowers and a heritage souq, with cafés in traditional buildings.'],
      history: ['Shaqra was historically the capital of the Al-Washm region and an important stop on the old caravan route across Najd.'],
      religious: null,
      highlights: ['Restored houses', 'Watchtowers', 'Heritage souq'],
      hours: { summary: 'Daily, daytime and evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 2.5 hours north-west of Riyadh.', transport: 'Car.' },
      bestTime: 'November – March', duration: '2 hours', dress: 'Modest clothes.', tips: ['Visit with Ushaiger on the same day.']
    },

    /* ======================= NORTHERN ROUTE (Riyadh–Qassim–Hail) ======================= */
    {
      id: 'thadiq-ghamra', name: 'Thadiq & Ghamra Tourist Village', nativeName: 'ثادق وقرية غمرة السياحية',
      region: 'riyadh', city: 'Thadiq', categories: ['heritage'], approx: true,
      coords: [25.2830, 45.8670],
      tagline: 'A Najdi-style tourist village on the Northern Route.',
      overview: ['Thadiq is a town north-west of Riyadh. The Ghamra tourist village there is built in traditional Najdi style with mud-style buildings, and it is one of the stops on the Northern Route.'],
      history: ['Thadiq lies in the Al-Washm area of Najd. It was named among the 16 stops of the Northern Route announced in Saudi Winter 2026.'],
      religious: null,
      highlights: ['Ghamra tourist village', 'Najdi-style buildings', 'Northern Route stop'],
      hours: { summary: 'Check locally — hours vary', details: [], note: 'Opening times were not confirmed; confirm with the local municipality or VisitSaudi before travelling.' },
      tickets: { required: false, price: 'Usually free', how: ['No booking is normally needed. Confirm locally.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'North-west of Riyadh, in the Al-Washm area.', transport: 'Car (rental or taxi). Part of the Northern Route.' },
      bestTime: 'November – March', duration: '2 hours', dress: 'Modest, comfortable clothes.', tips: ['Combine with Shaqra and Ushaiger in one day trip.', 'Exact visiting hours not confirmed — ask locally.']
    },
    {
      id: 'al-qasab', name: 'Al-Qasab Historic Village', nativeName: 'قرية القصب التاريخية',
      region: 'riyadh', city: 'Al-Qasab', categories: ['heritage'], approx: true,
      coords: [25.3500, 45.6000],
      tagline: 'A historic Najdi village about 150 km from Riyadh.',
      overview: ['Al-Qasab is a historic village roughly 150 km from Riyadh and one of the 16 stops of the Northern Route.'],
      history: ['The village is part of the string of old Najdi settlements of the Al-Washm area. Detailed history is not yet added.'],
      religious: null,
      highlights: ['Historic village', 'Najdi architecture', 'Northern Route stop'],
      hours: { summary: 'Check locally — hours vary', details: [], note: 'Opening times were not confirmed; confirm with the local municipality or VisitSaudi before travelling.' },
      tickets: { required: false, price: 'Usually free', how: ['No booking is normally needed. Confirm locally.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 150 km from Riyadh.', transport: 'Car (rental or taxi). Part of the Northern Route.' },
      bestTime: 'November – March', duration: '1–2 hours', dress: 'Modest, comfortable clothes.', tips: ['Location on the map is approximate.', 'Pair with Shaqra and Ushaiger.']
    },
    {
      id: 'al-majmaah-marqab', name: "Al-Majma'ah: Al-Marqab (Munaikh) Fort", nativeName: 'قلعة المرقب (المنيخ) بالمجمعة',
      region: 'riyadh', city: "Al-Majma'ah", categories: ['heritage'], approx: true,
      coords: [25.9040, 45.3500],
      tagline: "A restored hilltop fort overlooking Al-Majma'ah.",
      overview: ["Al-Marqab (also written Munikh or Munaikh) is a circular fort on Mount Munaikh, on the western side of Al-Majma'ah, with panoramic views over the town and farms. It now serves as the Al-Munikh Visitor Center, and the town also has a restored heritage village."],
      history: ['The fort saw sieges and visits by Saudi rulers in the 13th Hijri century. After unification it was used to watch floods and caravans, and it was restored in 1417 AH.'],
      religious: null,
      highlights: ['Hilltop fort', 'Panoramic views', 'Visitor Center', 'Heritage village'],
      hours: { summary: 'Check locally — hours vary', details: [], note: 'Opening times were not confirmed; confirm with the local municipality or VisitSaudi before travelling.' },
      tickets: { required: false, price: 'Usually free', how: ['No booking is normally needed. Confirm locally.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: "In Al-Majma'ah, about 180 km north-west of Riyadh.", transport: 'Car (rental or taxi). Part of the Northern Route.' },
      bestTime: 'November – March', duration: '1–2 hours', dress: 'Modest, comfortable clothes.', tips: ['Climb at sunset for the best views.', 'Entry has been reported as free.']
    },
    {
      id: 'az-zulfi', name: 'Az Zulfi & Ghayfa Heritage Village', nativeName: 'الزلفي وقرية غيفة التراثية',
      region: 'riyadh', city: 'Az Zulfi', categories: ['heritage','nature'], approx: true,
      coords: [26.2990, 44.8070],
      tagline: 'An oasis town with old Najdi quarters and nearby dunes.',
      overview: ['Az Zulfi, in Riyadh Province about 260 km north-west of the capital, has an old town of Najdi mud-brick houses, a souq and nearby natural spots such as Wadi Samnan, Rawdat Al-Sabla and Ghayfa Heritage Village at the edge of the Nafud dunes.'],
      history: ['Az Zulfi is a long-established Najdi oasis town and a stop on the Northern Route.'],
      religious: null,
      highlights: ['Old town', 'Ghayfa Heritage Village', 'Wadi Samnan', 'Dune trips'],
      hours: { summary: 'Check locally — hours vary', details: [], note: 'Opening times were not confirmed; confirm with the local municipality or VisitSaudi before travelling.' },
      tickets: { required: false, price: 'Usually free', how: ['No booking is normally needed. Confirm locally.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 260 km north-west of Riyadh.', transport: 'Car (rental or taxi). Part of the Northern Route.' },
      bestTime: 'November – March', duration: '2–3 hours', dress: 'Modest, comfortable clothes.', tips: ['Details from travel guides; confirm opening times locally.']
    },
    {
      id: 'al-mithnab', name: 'Al-Mithnab Old Town', nativeName: 'المذنب التراثية',
      region: 'qassim', city: 'Al-Mithnab', categories: ['heritage'], approx: true,
      coords: [25.8600, 44.2200],
      tagline: 'Traditional Najdi architecture in a Qassim town.',
      overview: ['Al-Mithnab is a Qassim town known for its traditional Najdi architecture and is a stop on the Northern Route.'],
      history: ['Detailed history has not yet been added.'],
      religious: null,
      highlights: ['Najdi architecture', 'Northern Route stop'],
      hours: { summary: 'Check locally — hours vary', details: [], note: 'Opening times were not confirmed; confirm with the local municipality or VisitSaudi before travelling.' },
      tickets: { required: false, price: 'Usually free', how: ['No booking is normally needed. Confirm locally.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'In Al-Qassim, west of Buraidah.', transport: 'Car (rental or taxi). Part of the Northern Route.' },
      bestTime: 'November – March', duration: '1–2 hours', dress: 'Modest, comfortable clothes.', tips: ['Location on the map is approximate.']
    },
    {
      id: 'al-bukayriyah', name: 'Al-Bukayriyah Farms & Heritage', nativeName: 'البكيرية',
      region: 'qassim', city: 'Al-Bukayriyah', categories: ['heritage','nature'], approx: true,
      coords: [26.1400, 43.6600],
      tagline: 'Farm experiences and heritage in a Qassim town.',
      overview: ['Al-Bukayriyah, in Al-Qassim, is on the Northern Route and is known for its farms and for the Al-Suwailem Maqsoura heritage building.'],
      history: ['Detailed history has not yet been added.'],
      religious: null,
      highlights: ['Farm visits', 'Al-Suwailem Maqsoura', 'Northern Route stop'],
      hours: { summary: 'Check locally — hours vary', details: [], note: 'Opening times were not confirmed; confirm with the local municipality or VisitSaudi before travelling.' },
      tickets: { required: false, price: 'Usually free', how: ['No booking is normally needed. Confirm locally.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'South-west of Buraidah, in Al-Qassim.', transport: 'Car (rental or taxi). Part of the Northern Route.' },
      bestTime: 'November – March', duration: '1–2 hours', dress: 'Modest, comfortable clothes.', tips: ['Location on the map is approximate.']
    },
    {
      id: 'uyun-al-jiwa', name: 'Uyun Al-Jiwa Heritage Town', nativeName: 'عيون الجواء التراثية',
      region: 'qassim', city: 'Uyun Al-Jiwa', categories: ['heritage','archaeology'], approx: true,
      coords: [26.3300, 43.5800],
      tagline: 'A Najdi heritage town with an old Monday market.',
      overview: ['Uyun Al-Jiwa is a heritage town about 50 km north-west of Buraidah. Its many old buildings follow traditional Najdi design, the town mosque was renovated in 1913 and restored in 1952, and its Monday market is one of the oldest traditional weekly markets. Thamudic inscriptions can be seen on rocks nearby.'],
      history: ['The town served the north-western parts of Al-Qassim and represents the large markets typical of major Najdi villages. The municipality has illuminated its heritage village and plans to develop Al-Marqab mountain as a visitor spot.'],
      religious: null,
      highlights: ['Heritage village', 'Monday market', 'Thamudic inscriptions'],
      hours: { summary: 'Check locally — hours vary', details: [], note: 'Opening times were not confirmed; confirm with the local municipality or VisitSaudi before travelling.' },
      tickets: { required: false, price: 'Usually free', how: ['No booking is normally needed. Confirm locally.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'About 50 km north-west of Buraidah.', transport: 'Car (rental or taxi). Part of the Northern Route.' },
      bestTime: 'November – March', duration: '2 hours', dress: 'Modest, comfortable clothes.', tips: ['Visit on Monday for the traditional market.']
    },

    /* ======================= MORE: EASTERN PROVINCE ======================= */
    {
      id: 'half-moon-bay', name: 'Half Moon Bay', nativeName: 'شاطئ نصف القمر',
      region: 'eastern', city: 'Khobar', categories: ['coast'],
      coords: [26.1258, 49.9922], 
      tagline: 'A crescent-shaped Gulf bay with calm waters and beaches.',
      overview: ['Half Moon Bay is a sweeping bay south of Khobar with shallow, calm water, public beaches, resorts, water sports and nearby sand dunes.'],
      history: ['It has long been a favourite weekend escape for residents of Dammam, Khobar and Dhahran.'],
      religious: null,
      highlights: ['Swimming and jet skis', 'Beach resorts', 'Dune driving nearby'],
      hours: { summary: 'Public beaches open at all times', details: [], note: 'Resorts have their own hours and fees.' },
      tickets: { required: false, price: 'Free public beaches; resorts paid', how: ['Book resorts directly.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'About 30 minutes south of Khobar.', transport: 'Car or taxi.' },
      bestTime: 'October – April', duration: 'Half a day', dress: 'Modest swimwear on public beaches.', tips: ['Bring shade — the sun is strong.']
    },
    {
      id: 'tarout-castle', name: 'Tarout Castle', nativeName: 'قلعة تاروت',
      region: 'eastern', city: 'Qatif', categories: ['heritage', 'archaeology'],
      coords: [26.5689, 50.0650], wiki: 'https://en.wikipedia.org/wiki/Tarout_Castle',
      tagline: 'A fortress on one of the oldest inhabited sites in the Gulf.',
      overview: ['Tarout Castle stands on Tarout Island near Qatif, on a mound where layers of settlement go back about 5,000 years. Three of its original towers still stand.'],
      history: ['The present castle was built in the 16th century, probably during the Portuguese period, on far older foundations linked to the Dilmun civilisation.'],
      religious: null,
      highlights: ['Castle towers', 'Old Tarout village', 'Nearby hot spring (historic)'],
      hours: { summary: 'Exterior visible at any time', details: [], note: 'Interior access may be restricted.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Tarout Island is linked by causeway to Qatif.', transport: 'Car or taxi.' },
      bestTime: 'November – March', duration: '1 hour', dress: 'Modest clothes.', tips: ['Explore Qatif\'s traditional souq afterwards.']
    },
    {
      id: 'uqair', name: 'Al-Uqair Historic Port', nativeName: 'ميناء العقير',
      region: 'eastern', city: 'Al-Ahsa', categories: ['heritage', 'coast'],
      coords: [25.6450, 50.2180], wiki: 'https://en.wikipedia.org/wiki/Uqair',
      tagline: 'The old seaport of Al-Ahsa where a historic treaty was signed.',
      overview: ['Al-Uqair has a restored customs house, fort, mosque and warehouses on a quiet stretch of the Gulf coast, along with a beach.'],
      history: ['For centuries it was Al-Ahsa\'s main port. The Uqair Protocol of 1922, which defined borders between the Sultanate of Najd, Iraq and Kuwait, was signed here.'],
      religious: null,
      highlights: ['Customs house', 'Fort', 'Beach'],
      hours: { summary: 'Daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Ahsa (HOF)', road: 'About 70 km north-east of Hofuf.', transport: 'Car.' },
      bestTime: 'November – March', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['Good half-day trip from Hofuf.']
    },
    {
      id: 'ibrahim-palace', name: 'Ibrahim Palace, Hofuf', nativeName: 'قصر إبراهيم',
      region: 'eastern', city: 'Hofuf', categories: ['heritage'],
      coords: [25.3800, 49.5870], 
      tagline: 'An Ottoman fortress-palace with a domed mosque.',
      overview: ['Ibrahim Palace (Qasr Ibrahim) is a walled fortress in central Hofuf with a large domed mosque, towers and barracks.'],
      history: ['Built in the 16th century during Ottoman rule of Al-Ahsa. It is part of the Al-Ahsa Oasis UNESCO World Heritage Site.'],
      religious: ['Al-Qubba Mosque inside the palace is a fine example of Ottoman-style mosque architecture in eastern Arabia.'],
      highlights: ['Domed mosque', 'Fort walls', 'Nearby Al-Qaisariya Souq'],
      hours: { summary: 'Typically daily, daytime and evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Ahsa (HOF)', road: 'Central Hofuf.', transport: 'Taxi; train to Hofuf station.' },
      bestTime: 'November – March', duration: '1 hour', dress: 'Modest clothes.', tips: ['Walk to Al-Qaisariya Souq afterwards.']
    },
    {
      id: 'jawatha-mosque', name: 'Jawatha Mosque', nativeName: 'مسجد جواثا',
      region: 'eastern', city: 'Al-Ahsa', categories: ['religious', 'heritage'],
      muslimSite: true, coords: [25.4698, 49.6785], wiki: 'https://en.wikipedia.org/wiki/Jawatha_Mosque',
      tagline: 'One of the earliest mosques in Islam.',
      overview: ['Jawatha Mosque is a small restored mosque in a palm-ringed area north-east of Hofuf, marking one of the oldest places of Islamic worship.'],
      history: ['Built in the 7th century (around 629 CE) by the Banu Abd al-Qays tribe, who embraced Islam during the Prophet\'s ﷺ lifetime.'],
      religious: ['According to a hadith in Sahih al-Bukhari, the first Jumu\'ah (Friday prayer) held after the one in the Prophet\'s Mosque in Madinah was held at Jawatha.'],
      highlights: ['Restored early mosque', 'Archaeological remains'],
      hours: { summary: 'Daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Ahsa (HOF)', road: 'About 15 km north-east of Hofuf.', transport: 'Car.' },
      bestTime: 'November – March', duration: '30 minutes', dress: 'Modest clothes.', tips: ['Combine with Al-Qarah Mountain.']
    },
    {
      id: 'khobar-corniche', name: 'Khobar Corniche & Water Tower', nativeName: 'كورنيش الخبر',
      region: 'eastern', city: 'Khobar', categories: ['modern', 'coast'],
      coords: [26.3078, 50.2319], wiki: 'https://en.wikipedia.org/wiki/Khobar',
      tagline: 'Seafront promenade with the iconic Khobar Water Tower.',
      overview: ['Khobar\'s corniche is a long seaside promenade with parks, cafés, fishing spots and playgrounds. The landmark Khobar Water Tower, with a viewing deck, rises at its edge.'],
      history: ['Khobar grew from a small fishing village into a modern city after oil was discovered nearby in 1938.'],
      religious: null,
      highlights: ['Water Tower', 'Sunset walks', 'Seafood restaurants'],
      hours: { summary: 'Corniche open at all times', details: [], note: 'Water Tower opening hours vary.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Khobar city centre.', transport: 'Taxi.' },
      bestTime: 'October – April evenings', duration: '2 hours', dress: 'Casual modest.', tips: ['Try local seafood at the corniche restaurants.']
    },
    {
      id: 'king-fahd-causeway', name: 'King Fahd Causeway', nativeName: 'جسر الملك فهد',
      region: 'eastern', city: 'Khobar', categories: ['modern', 'coast'],
      coords: [26.1830, 50.3330], wiki: 'https://en.wikipedia.org/wiki/King_Fahd_Causeway',
      tagline: 'A 25 km bridge across the sea to Bahrain.',
      overview: ['The King Fahd Causeway links Saudi Arabia and Bahrain across the Gulf. A central island has towers with restaurants and viewing decks overlooking the sea.'],
      history: ['Opened in 1986, it is one of the busiest border crossings in the region.'],
      religious: null,
      highlights: ['Observation towers', 'Sea views'],
      hours: { summary: 'Open 24 hours', details: [], note: 'Toll applies; crossing to Bahrain requires entry documents.' },
      tickets: { required: true, price: 'Road toll', how: ['Pay the toll at the causeway booths.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'West of Khobar.', transport: 'Car or bus to Bahrain.' },
      bestTime: 'Sunset', duration: '1–2 hours', dress: 'Casual.', tips: ['Avoid weekends when traffic is heavy.']
    },

    /* ======================= MORE: ASIR PROVINCE ======================= */
    {
      id: 'abha-muftaha', name: 'Abha — Al-Muftaha Village & Green Mountain', nativeName: 'أبها — قرية المفتاحة',
      region: 'asir', city: 'Abha', categories: ['heritage', 'nature'],
      coords: [18.2200, 42.5050], wiki: 'https://en.wikipedia.org/wiki/Abha',
      tagline: 'Abha\'s art village and its glowing mountain viewpoint.',
      overview: ['Al-Muftaha is a restored traditional quarter turned arts village with galleries and studios. Above the city, the Green Mountain (Jabal Al-Akhdar) is lit up at night and reached by road or cable car for city views.'],
      history: ['Abha, capital of Asir, sits at about 2,200 m. Al-Muftaha was revived in the late 1980s to support local artists.'],
      religious: null,
      highlights: ['Al-Muftaha galleries', 'Green Mountain viewpoint', 'Abha Dam Lake', 'Tuesday souq'],
      hours: { summary: 'Village and viewpoints mostly afternoon to night', details: [], note: '' },
      tickets: { required: false, price: 'Free (cable car paid)', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Abha city centre.', transport: 'Taxi.' },
      bestTime: 'June – September', duration: 'Half a day', dress: 'Light jacket for evenings.', tips: ['Visit during the Abha summer festival.']
    },
    {
      id: 'habala', name: 'Habala Hanging Village', nativeName: 'قرية الحبلة',
      region: 'asir', city: 'Abha', categories: ['heritage', 'nature'],
      coords: [18.0400, 42.8600], wiki: 'https://en.wikipedia.org/wiki/Habala',
      tagline: 'A clifftop village once reached only by ropes.',
      overview: ['Habala ("rope") is a village perched on a cliff ledge about 300 m down a sheer escarpment. A cable car descends to the village with dramatic views.'],
      history: ['The Qahtani tribe settled here centuries ago to escape conflict; residents used ropes to climb up and down. The village is now a tourist attraction.'],
      religious: null,
      highlights: ['Cable car ride', 'Cliff views', 'Traditional houses'],
      hours: { summary: 'Typically daytime', details: [], note: 'Cable car may stop in bad weather.' },
      tickets: { required: true, price: 'Cable car ticket', how: ['Buy at the cable car station.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'About 60 km south-east of Abha.', transport: 'Car.' },
      bestTime: 'Summer', duration: '2–3 hours', dress: 'Comfortable shoes.', tips: ['Not for those afraid of heights.']
    },
    {
      id: 'tanomah', name: 'Tanomah Mountains', nativeName: 'جبال تنومة',
      region: 'asir', city: 'Tanomah', categories: ['nature'], featured: true,
      coords: [18.9535, 42.1703], wiki: 'https://en.wikipedia.org/wiki/Tanomah',
      tagline: 'Misty granite peaks, forests and seasonal waterfalls high in the Sarawat range.',
      overview: [
        'The Tanomah Mountains are a high-altitude mountain area in Asir Province, south-western Saudi Arabia, about 120 km north of Abha by road along the Sarawat range. Rising roughly 2,000–3,000 m above sea level, they stand out from most of the Arabian Peninsula for their cool climate, juniper forests and misty green peaks.',
        'Huge rounded granite boulders and rocky summits give Tanomah a unique landscape that is popular with hikers, climbers and photographers. Fog often rolls through the valleys in the afternoon, especially in summer.'
      ],
      history: [
        'Tanomah is a traditional farming area of northern Asir, with old stone villages and terraced fields built on the mountain slopes.',
        'In recent years the area has been developed for eco-tourism, with parks, viewpoints, trails and licensed adventure operators.'
      ],
      religious: null,
      highlights: [
        'Mount Manaa (Jabal Manaa) — one of the highest and most iconic peaks in the area, with dramatic drops and climbing routes',
        'Moomah (Moma) ridge hike with wide views over the escarpment',
        'Seasonal waterfalls after the rains',
        'Alsharaf Park — trails, viewpoints and camping areas',
        'Juniper, acacia and wild-plant woodland',
        'Rock hiking, climbing and mountain biking with local guides'
      ],
      hours: { summary: 'Open at all times; trails best in daylight', details: ['Fog is common in summer afternoons — start hikes early'], note: 'Waterfalls flow mainly after rain (spring and late summer).' },
      tickets: { required: false, price: 'Free (guided adventures paid)', how: ['No ticket is needed for viewpoints and parks.', 'Guided hikes, rock-hiking and biking can be booked with licensed local operators such as Husaak Adventures Tanoma (listed on VisitSaudi).'], links: [{ label: 'Guided adventures (VisitSaudi)', url: 'https://www.visitsaudi.com/en/aseer/attractions/husaak-adventures-tanoma' }] },
      gettingThere: { airport: 'Abha International (AHB) or Al-Bahah (ABT)', road: 'About 120 km (≈2 hours) north of Abha on the mountain road towards Al-Namas and Al-Bahah.', transport: 'Car; no public transport.' },
      bestTime: 'June – September for cool, misty weather; winter for crisp clear days', duration: 'Half to full day',
      dress: 'Layers and a rain jacket in summer; warm clothes in winter (around 5 °C at night, occasional frost on the highest crests); good hiking shoes.',
      tips: [
        'Summers rarely exceed about 30 °C, making Tanomah a favourite escape from the heat.',
        'Fog can reduce visibility suddenly — drive slowly on mountain roads.',
        'Hire a local guide for Mount Manaa and climbing routes.',
        'Combine with Al-Namas and Habala for a mountain road trip.'
      ]
    },

    /* ======================= MORE: AL-BAHAH ======================= */
    {
      id: 'raghadan-forest', name: 'Raghadan Forest Park', nativeName: 'غابة رغدان',
      region: 'bahah', city: 'Al-Bahah', categories: ['nature'], featured: true,
      coords: [20.0200, 41.4400],
      tagline: 'A misty juniper forest on a cliff edge at about 1,700 m, with a suspension bridge and zipline.',
      overview: [
        'Raghadan Forest Park is a large high-altitude mountain park about 1,700 m above sea level on the Sarawat Mountains, just outside Al-Bahah city. It is covered with dense, ancient evergreen juniper trees and native plants.',
        'The park is often wrapped in low clouds, cool fog and fresh mountain breezes, making it one of the most popular summer escapes from the desert heat in Saudi Arabia.',
        'From its rocky cliffside, viewpoints look down over the winding King Fahd Road (Aqabat Al-Bahah) and the Tihama plains far below. Wild baboons live on the natural slopes beneath the main overlooks.'
      ],
      history: [
        'Al-Bahah Province has more than 50 forests; Raghadan is the best known and has been developed by the local municipality into a family park.',
        'Recent upgrades added the Al-Sahab ("Clouds") Promenade, a suspension bridge, a zipline, lit waterfalls and new walking and cycling paths.'
      ],
      religious: null,
      highlights: [
        'Al-Sahab Promenade with a ~100 m suspension bridge hanging about 13–15 m above the ground',
        'Dual-track zipline about 957 m long',
        'Paved and stone walking trails and cycling lanes',
        'Lavender garden, valley streams and illuminated evening waterfalls with wooden bridges',
        'Cliff-edge views over King Fahd Road and the Tihama plains',
        'Picnic and barbecue areas, children\'s playgrounds and an open-air theatre',
        'Food trucks, tea stalls and casual cafés'
      ],
      hours: { summary: 'Park open daily; most activities from afternoon to late evening', details: ['Zipline and some attractions have their own operating hours'], note: 'Very busy on summer weekends and public holidays — expect traffic on access roads.' },
      tickets: { required: 'partial', price: 'Park entry free; zipline and some activities paid', how: ['No ticket is needed to enter the park.', 'Buy zipline and activity tickets on site at each attraction.', 'Check VisitSaudi for seasonal events and opening times.'], links: [{ label: 'VisitSaudi – Raghadan Forest', url: 'https://www.visitsaudi.com/en/al-baha/attractions/raghadan-forest-in-al-baha' }] },
      gettingThere: { airport: 'King Saud bin Abdulaziz Airport, Al-Bahah (ABT)', road: 'About 10 minutes from Al-Bahah city centre; signposted from the main roads.', transport: 'Car or taxi; no public transport.' },
      bestTime: 'June – September (summer festival season); spring for flowers', duration: 'Half a day',
      dress: 'Light jacket — it can be cool and foggy even in summer; comfortable walking shoes.',
      tips: [
        'Arrive before late afternoon on weekends to avoid traffic and find parking.',
        'Do not feed the baboons and keep food out of sight.',
        'The fog can roll in quickly — visit the viewpoints early for clearer views.',
        'Nearby you can also visit Khairah Forest Park and Al-Atawlah Heritage Village.'
      ]
    },

    /* ======================= MORE: JAZAN ======================= */
    {
      id: 'fayfa', name: 'Fayfa Mountains', nativeName: 'جبال فيفاء',
      region: 'jazan', city: 'Fayfa', categories: ['nature', 'heritage'],
      coords: [17.2276, 43.1064], wiki: 'https://en.wikipedia.org/wiki/Fayfa',
      tagline: 'Terraced coffee mountains with houses clinging to steep slopes.',
      overview: ['Fayfa rises to about 1,800 m above the hot Jazan plain. Stone houses dot steep terraces planted with coffee, bananas and fragrant herbs.'],
      history: ['The Khawlani coffee grown here is a traditional heritage crop and was inscribed on UNESCO\'s Intangible Cultural Heritage list in 2022.'],
      religious: null,
      highlights: ['Coffee farms', 'Terraces', 'Mountain views'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['Farm visits arranged locally.'], links: [] },
      gettingThere: { airport: 'Jazan (GIZ)', road: 'About 100 km east of Jazan city; steep mountain road.', transport: 'Car.' },
      bestTime: 'October – April', duration: 'Full day', dress: 'Comfortable clothes.', tips: ['Taste fresh Khawlani coffee from the farms.']
    },
    {
      id: 'dosariyah-fort', name: 'Al-Dosariyah (Adosareyah) Castle, Jazan', nativeName: 'قلعة الدوسرية',
      region: 'jazan', city: 'Jazan', categories: ['heritage'],
      status: 'closed',
      notice: 'The castle has recently been listed as closed (temporarily or for maintenance). The hilltop viewpoint outside is still popular. This page will be updated when it reopens.',
      coords: [16.8880, 42.5456],
      tagline: 'An Ottoman-era hilltop fortress with four round towers overlooking Jazan port and the Red Sea.',
      overview: [
        'Al-Dosariyah Castle — also spelled Adosareyah and known locally as the "Turks\' Fortress" — is a historic military fortress in the Al-Qal\'a district of Jazan. It stands on Jazan Mountain, roughly 150–250 m above sea level, with panoramic views over Jazan city, the seaport and the Red Sea.',
        'Built of stone and plaster, the castle forms a square of about 900 m² anchored by four massive cylindrical corner towers. Thick walls are pierced with gun slits and lookout openings, with battlements on the southern and western sides.',
        'Inside, a two-storey structure surrounds an open courtyard lined with arched walls, with rooms used for different purposes and an upper-floor observation post.'
      ],
      history: [
        'The fortress was originally built around 1810 during the Ottoman era and served as a military headquarters. Its name is linked to the Dawasir troops — the "Dosar" military unit led by Prince Hamad bin Abdullah Al-Shuwaier.',
        'Over the following century it changed hands several times. It was used during Idrisid rule, and later the scholar Sheikh Abdullah Al-Qar\'awi turned it into a regional centre for education and learning.',
        'In 1932–1933 King Abdulaziz ordered the castle\'s restoration, and it became the first Saudi military garrison and headquarters in the region. It has since been restored again as a heritage site.'
      ],
      religious: null,
      highlights: [
        'Four massive cylindrical corner towers',
        'Arched inner courtyard',
        'Gun slits and southern/western battlements',
        'Upper-floor observation post',
        'Panoramic views over Jazan city, port and the Red Sea',
        'Sunset from the hilltop viewpoint'
      ],
      hours: { summary: 'Check before visiting — recently listed as closed (temporarily / maintenance)', details: ['The surrounding hilltop viewpoint is popular at sunset'], note: 'VisitSaudi and map listings have recently shown the castle as closed; confirm the current status before planning to go inside.' },
      tickets: { required: false, price: 'Free (when open)', how: ['No ticket was needed when the castle was open.', 'Check VisitSaudi for the current opening status.'], links: [{ label: 'VisitSaudi – Al-Dosariyah Castle', url: 'https://www.visitsaudi.com/en/jazan/attraction/al-dosariyah-castle' }] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'In the Al-Qal\'a district of Jazan city, on the hill overlooking the port; parking at the hilltop.', transport: 'Taxi or ride-hailing from anywhere in Jazan city.' },
      bestTime: 'November – March, late afternoon for sunset', duration: '1 hour',
      dress: 'Modest clothes and a hat — the hilltop is very sunny.',
      tips: [
        'Go at sunset for the best light over the Red Sea.',
        'Combine with Jazan Corniche and the ferry to the Farasan Islands.',
        'Even if the castle is closed, the viewpoint outside is worth the visit.'
      ]
    },

    /* ======================= MORE: NAJRAN ======================= */
    {
      id: 'emara-palace', name: 'Al-Emara Palace, Najran', nativeName: 'قصر الإمارة التاريخي',
      region: 'najran', city: 'Najran', categories: ['heritage'],
      coords: [17.4901, 44.1318], wiki: 'https://en.wikipedia.org/wiki/Najran',
      tagline: 'A striking mud-brick palace with whitewashed details.',
      overview: ['The historic Emara Palace is a multi-storey mud fort-palace typical of Najran\'s architecture, with white-edged windows and crenellations. It contains a well and mosque.'],
      history: ['Built in the 1940s as the seat of the regional governor; now a museum.'],
      religious: null,
      highlights: ['Najrani mud architecture', 'Courtyard well', 'Small museum'],
      hours: { summary: 'Typically Sun – Thu daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'Najran city.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Modest clothes.', tips: ['Visit Najran\'s traditional souq nearby.']
    },
    {
      id: 'najran-dam', name: 'Najran Valley Dam', nativeName: 'سد وادي نجران',
      region: 'najran', city: 'Najran', categories: ['nature', 'modern'],
      coords: [17.4081, 44.0142], wiki: 'https://en.wikipedia.org/wiki/Najran',
      tagline: 'A dramatic concrete dam in a granite gorge.',
      overview: ['The Najran Valley Dam is one of the largest dams in Saudi Arabia, holding back floodwater in a rocky gorge west of Najran city. Its lake and viewpoints are popular picnic spots.'],
      history: ['Completed in the early 1980s to control floods and recharge groundwater for the valley\'s farms.'],
      religious: null,
      highlights: ['Dam viewpoint', 'Reservoir after rains'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'About 30 km west of Najran city.', transport: 'Car.' },
      bestTime: 'After the rains', duration: '1–2 hours', dress: 'Casual.', tips: ['Never swim in the reservoir.']
    },

    /* ======================= MORE: TABUK ======================= */
    {
      id: 'hisma-desert', name: 'Hisma Desert', nativeName: 'صحراء حسمى',
      region: 'tabuk', city: 'Tabuk', categories: ['nature'],
      approx: true, coords: [28.0000, 36.0000], 
      tagline: 'Sandstone towers and red sand — Arabia\'s answer to Wadi Rum.',
      overview: ['The Hisma is a vast sandstone plateau of towers, arches and canyons stretching from Tabuk towards Jordan\'s Wadi Rum, with ancient rock art and inscriptions.'],
      history: ['Nabataean and Thamudic inscriptions are found throughout the area, which lay on ancient caravan routes.'],
      religious: null,
      highlights: ['Rock arches', 'Rock art', 'Desert camping'],
      hours: { summary: 'Open at all times', details: [], note: 'Remote area — go with a guide.' },
      tickets: { required: false, price: 'Free (tours paid)', how: ['Book with Tabuk tour operators.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'West and south-west of Tabuk.', transport: '4x4.' },
      bestTime: 'November – March', duration: 'Full day', dress: 'Desert gear.', tips: ['Nights are very cold in winter.']
    },
    {
      id: 'maqna', name: 'Wells & Springs of Moses, Maqna (Ayn Musa)', nativeName: 'عيون موسى وبئر السعيداني — مقنا',
      region: 'tabuk', city: 'Maqna', categories: ['religious', 'coast', 'nature'], featured: true,
      status: 'closed',
      notice: 'This site is currently closed to visitors. We will update this page as soon as it reopens — please check the latest status locally before travelling.',
      coords: [28.4024, 34.7447],
      tagline: 'A palm oasis where freshwater springs bubble from the sand beside the Gulf of Aqaba.',
      overview: [
        'The Wells and Springs of Moses in Maqna — known locally as Ayn Musa ("the springs of Moses") and Bir Al-Sa\'idani — form a historic desert oasis on the Gulf of Aqaba in north-west Saudi Arabia.',
        'Surrounded by dense date palm groves, natural freshwater springs bubble up directly from the sandy ground and flow towards the sea. Paved paths and a small bridge cross clear water channels fed by roughly a dozen springs.',
        'The oasis sits on a slight rise overlooking the Gulf of Aqaba, with panoramic views across the water to the mountains of Egypt\'s Sinai Peninsula.'
      ],
      history: [
        'Maqna lies in the historical land of Madyan (Midian). The area around the springs includes remains of an early Islamic archaeological site.',
        'Local historical sources note Maqna as a place where an agreement was made between the Muslims and the local tribes (such as Judham) in the time of the Prophet ﷺ.',
        'Today the site has been landscaped with walkways, a parking area and step-free paths, and it lies within the NEOM development region.'
      ],
      religious: [
        'Local tradition associates these springs with Prophet Musa (Moses). The Qur\'an describes how Musa struck a rock with his staff and twelve springs gushed forth, one for each tribe of the Children of Israel (Al-Baqarah 2:60) — local tradition links the dozen springs here with that miracle, although the event is usually placed in Sinai.',
        'Bir Al-Sa\'idani is linked by tradition with Musa\'s years in Madyan after fleeing Egypt. The Qur\'an tells how he watered the flocks of two women at a well in Madyan and later married one of them, the daughter of an elderly man of Madyan, often identified with Prophet Shu\'ayb (Al-Qasas 28:22–28).'
      ],
      highlights: [
        'Around a dozen natural springs rising from the sand',
        'Palm-shaded walkways and a small bridge over the channels',
        'Bir Al-Sa\'idani historic well',
        'Views across the Gulf of Aqaba to Sinai',
        'Remains of an early Islamic site nearby'
      ],
      hours: { summary: 'Currently closed — reopening date not announced', details: ['When open, it was usually visited during daylight hours'], note: 'Check the latest status locally or on VisitSaudi before travelling.' },
      tickets: { required: false, price: 'Free when open', how: ['No ticket was needed when the site was open.', 'The site is currently closed; this page will be updated when it reopens.'], links: [] },
      gettingThere: { airport: 'NEOM Bay Airport (NUM) or Tabuk Regional Airport (TUU)', road: 'Coastal town of Maqna on the Gulf of Aqaba, south-west of Al-Bad\'; about 3 hours west of Tabuk city. There is a dedicated parking area a short walk from the springs.', transport: 'Car or tour; no public transport.' },
      bestTime: 'October – April (once reopened)', duration: '1 hour',
      dress: 'Modest clothes, sun hat; comfortable shoes.',
      tips: [
        'The site is currently closed — please do not attempt to enter fenced areas.',
        'Nearby you can still enjoy the Maqna coastline and the Tayeb Ism canyon just to the north.',
        'Combine with Madyan Shuaib (Mughair Shu\'ayb) at Al-Bad\' for a half-day itinerary.'
      ]
    },
    {
      id: 'tayma', name: 'Tayma Oasis & Haddaj Well', nativeName: 'تيماء وبئر هداج',
      region: 'tabuk', city: 'Tayma', categories: ['archaeology', 'heritage'],
      coords: [27.6290, 38.5530], wiki: 'https://en.wikipedia.org/wiki/Tayma',
      tagline: 'An ancient oasis city with one of Arabia\'s largest wells.',
      overview: ['Tayma is one of the oldest oasis towns in Arabia, with long ancient city walls, the Qasr al-Ablaq castle and the huge Bir Haddaj well, once drawn by dozens of camels at a time.'],
      history: ['Tayma appears in Assyrian and Babylonian records; the Babylonian king Nabonidus lived here for about ten years in the 6th century BCE. The Tayma Stone, with an Aramaic inscription, was found here.'],
      religious: null,
      highlights: ['Bir Haddaj well', 'Ancient walls', 'Qasr al-Ablaq', 'Tayma museum'],
      hours: { summary: 'Daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'About 3 hours south-east of Tabuk; on the AlUla road.', transport: 'Car.' },
      bestTime: 'November – March', duration: '2–3 hours', dress: 'Modest clothes.', tips: ['A great stop between Tabuk and AlUla.']
    },
    {
      id: 'umluj', name: 'Umluj — "Maldives of Saudi Arabia"', nativeName: 'أملج',
      region: 'tabuk', city: 'Umluj', categories: ['coast', 'nature'], featured: true,
      coords: [25.0230, 37.2680], wiki: 'https://en.wikipedia.org/wiki/Umluj',
      tagline: 'Dozens of white-sand islands in turquoise water.',
      overview: ['Off the coast of Umluj lie around 100 small islands with white beaches and coral reefs. Boat trips visit the islands for swimming, snorkelling and picnics. The area borders the Red Sea Global luxury destination.'],
      history: ['Umluj was a small fishing and pearling town; it is now one of the fastest-growing coastal destinations.'],
      religious: null,
      highlights: ['Island-hopping boat trips', 'Snorkelling', 'White sand beaches'],
      hours: { summary: 'Boat trips typically morning to sunset', details: [], note: '' },
      tickets: { required: true, price: 'Boat trip (approx. SAR 150–400 per person; varies)', how: ['Book a licensed boat trip with operators in Umluj or online.'], links: [{ label: 'VisitSaudi – Umluj', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'Al-Wajh (EJH) or Red Sea International (RSI)', road: 'About 2.5 hours north of Yanbu.', transport: 'Car.' },
      bestTime: 'October – May', duration: '1–2 days', dress: 'Modest swimwear.', tips: ['Bring reef-safe sunscreen and snorkel gear.']
    },
    {
      id: 'georgios-shipwreck', name: 'Georgios G Shipwreck ("Saudi Titanic"), Haql', nativeName: 'سفينة حقل الغارقة (جورجيوس جي)',
      region: 'tabuk', city: 'Haql', categories: ['coast', 'heritage'], featured: true,
      status: 'check',
      notice: 'Access to this site may currently be restricted, but this has not been confirmed. Please check the latest status locally before travelling. We will update this page once the status is confirmed.',
      approx: true, coords: [28.7800, 34.7900],
      tagline: 'A rusting 1949 cargo ship stranded on a coral reef in turquoise Gulf of Aqaba waters.',
      overview: [
        'The Georgios G — known locally as the "Saudi Titanic" or Safinat Haql (the Haql ship) — is a partially submerged British-built cargo ship resting on a coral reef off the Gulf of Aqaba coast in Tabuk Province.',
        'It lies about 30 m offshore in clear, shallow water near Bi\'r Al-Mashi beach, roughly 55 km south of Haql. The rusted hull rising from the turquoise sea, with the mountains of Sinai behind, has made it one of north-west Saudi Arabia\'s most photographed coastal landmarks.'
      ],
      history: [
        'The ship was built in Sunderland, England, in 1949. It was about 71.6 m long and 11 m wide.',
        'In April 1978, while sailing from Greece to Aqaba (Jordan) with a cargo of flour, the vessel drifted off course into Saudi waters and ran aground on a shallow coral reef.',
        'When the crew tried to restart the engines, a fire broke out that ignited the flour and burned for several days. Salvage attempts failed, and around two-thirds of the rusted hull has remained stuck on the reef ever since.'
      ],
      religious: null,
      highlights: [
        'Rusted hull rising from turquoise water',
        'Views of the Sinai mountains across the Gulf of Aqaba',
        'Photography from the shoreline, especially at sunset',
        'Snorkelling and diving on the surrounding reef (with operators)'
      ],
      hours: { summary: 'Status unconfirmed — may be restricted', details: ['When accessible, best visited in the late afternoon for golden light'], note: 'The site is within the NEOM region; barriers and guards may restrict access. Climbing onto the wreck is unsafe and not allowed.' },
      tickets: { required: false, price: 'Free (when accessible)', how: ['No ticket was needed to view the wreck from the shore.', 'Dives and snorkelling trips should be booked with licensed operators.'], links: [] },
      gettingThere: { airport: 'NEOM Bay Airport (NUM) or Tabuk Regional Airport (TUU)', road: 'About a 30–45 minute drive south of Haql along the coastal road, then a short sandy track to the shore — a 4x4 is recommended.', transport: 'Car only; no public transport.' },
      bestTime: 'October – April; late afternoon for sunset', duration: '1–2 hours',
      dress: 'Casual modest clothes, sun hat; modest swimwear if snorkelling.',
      tips: [
        'Do not try to swim to or climb on the wreck — it is unstable and surrounded by sharp coral.',
        'Check access locally first, as NEOM development may close the area.',
        'Combine with Haql beaches and Ras Alsheikh Hamid further south.'
      ]
    },
    {
      id: 'jabal-al-lawz', name: 'Jabal Al-Lawz', nativeName: 'جبل اللوز',
      region: 'tabuk', city: 'Tabuk', categories: ['nature'],
      coords: [28.6500, 35.3000], wiki: 'https://en.wikipedia.org/wiki/Jabal_al-Lawz',
      tagline: 'A high mountain that sometimes sees winter snow.',
      overview: ['At about 2,580 m, Jabal Al-Lawz ("Almond Mountain") is one of the highest peaks in north-west Arabia. In cold winters snow can cover its summit, drawing crowds from across the Kingdom.'],
      history: ['The area has ancient rock art; it lies within the NEOM region.'],
      religious: null,
      highlights: ['Snow (some winters)', 'Rock art', 'Mountain views'],
      hours: { summary: 'Open daytime', details: [], note: 'Access may be restricted; check before travelling.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Tabuk (TUU)', road: 'About 2 hours west of Tabuk.', transport: '4x4.' },
      bestTime: 'December – February (for snow)', duration: 'Full day', dress: 'Warm clothes.', tips: ['Watch weather news for snow forecasts.']
    },

    /* ======================= MORE: HAIL ======================= */
    {
      id: 'qishlah-palace', name: 'Qishlah Palace, Hail', nativeName: 'قصر القشلة',
      region: 'hail', city: 'Hail', categories: ['heritage'],
      coords: [27.5236, 41.6900], 
      tagline: 'A grand mud-brick barracks with towers and courtyards.',
      overview: ['Qishlah is a large two-storey mud-brick fortress with corner towers, a central courtyard and arcaded galleries, used for heritage events.'],
      history: ['Built in the 1940s during the reign of King Abdulaziz as a military barracks.'],
      religious: null,
      highlights: ['Courtyard', 'Towers', 'Heritage exhibitions'],
      hours: { summary: 'Typically daily, daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Central Hail.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Modest clothes.', tips: ['Walk to A\'arif Fort nearby.']
    },
    {
      id: 'aarif-fort', name: 'A\'arif Fort, Hail', nativeName: 'قلعة أعيرف',
      region: 'hail', city: 'Hail', categories: ['heritage'],
      coords: [27.5160, 41.6990], 
      tagline: 'A hilltop watchtower fort above Hail.',
      overview: ['A\'arif is a small mud-brick fort on a rocky hill overlooking Hail, especially beautiful when lit at night.'],
      history: ['Built in the 18th–19th century as a lookout and defensive post.'],
      religious: null,
      highlights: ['City views', 'Night lighting'],
      hours: { summary: 'Daytime and evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Central Hail.', transport: 'Taxi.' },
      bestTime: 'Evening', duration: '45 minutes', dress: 'Comfortable shoes.', tips: ['Climb at sunset.']
    },
    {
      id: 'jabal-aja', name: 'Jabal Aja & Jabal Salma', nativeName: 'جبلا أجا وسلمى',
      region: 'hail', city: 'Hail', categories: ['nature'],
      approx: true, coords: [27.6000, 41.4000], 
      tagline: 'Twin granite mountain ranges celebrated in Arabic poetry.',
      overview: ['Two granite ranges flank Hail: Aja to the west and Salma to the east. Their canyons hold palm groves, rock pools and inscriptions, and they are a hiking and camping favourite.'],
      history: ['Legends of the lovers Aja and Salma appear in classical Arabic poetry; the area is also linked with the famously generous Hatim al-Tai.'],
      religious: null,
      highlights: ['Canyon hikes', 'Rock pools', 'Camping'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Starts just west of Hail city.', transport: 'Car (4x4 for tracks).' },
      bestTime: 'November – March', duration: 'Half to full day', dress: 'Hiking gear.', tips: ['Hire a local guide for canyon routes.']
    },
    {
      id: 'fayd', name: 'Fayd Archaeological Site & Faid Fort', nativeName: 'مدينة فيد الأثرية',
      region: 'hail', city: 'Fayd', categories: ['archaeology', 'heritage', 'religious'], featured: true,
      coords: [27.1132, 42.5188],
      tagline: '"Capital of the Route" — the great midpoint station of the Darb Zubaydah pilgrim road.',
      overview: [
        'Fayd is a major historical settlement about 120 km south-east of Hail. Known historically as the "Capital of the Route", it was the most important midpoint station on Darb Zubaydah, the pilgrimage and trade road between Kufa in Iraq and Makkah.',
        'The archaeological zone covers roughly 1.5 km by 1.5 km and includes the massive basalt fortress of Qasr Al-Kharash, wells, cisterns, residential quarters, markets and tombs. An on-site visitor centre run by the Heritage Commission presents the finds.'
      ],
      history: [
        'Fayd was originally inhabited by the Arab tribes of Asad and Tayy before Islam. In the early Islamic and Abbasid periods it grew into a vital administrative centre and open market where pilgrims and caravans rested and resupplied, lying roughly halfway between Kufa and Makkah.',
        'Its importance is recorded by medieval travellers and geographers; Ibn Jubayr and Ibn Battuta, who travelled the pilgrim route, mentioned Fayd in their writings.',
        'Engineers built an advanced desert water system here — around 45 wells (such as Al-Hamra well), underground channels and connected stone cisterns, often called the Zubaydah pools after Queen Zubaydah, wife of Caliph Harun al-Rashid, who funded works along the road.'
      ],
      religious: [
        'For centuries Fayd served Hajj pilgrims from Iraq and beyond on their journey to Makkah. The wells and cisterns of Darb Zubaydah were built as charitable endowments (sadaqah jariyah) so that pilgrims could find water in the desert — an example of the Islamic tradition of serving the guests of Allah.'
      ],
      highlights: [
        'Qasr Al-Kharash fortress — basalt walls about 115 m long and 2 m thick, with round towers',
        'Zubaydah pools, wells and underground water channels',
        'Ruins of early Islamic houses, markets, a large grain mill and an old mosque',
        'Pre-Islamic rock art and early Arabic inscriptions on nearby hills',
        'Faid Fort Archaeological Visitor Centre with coins, jewellery and pottery (Arabic & English)'
      ],
      hours: { summary: 'Visitor centre: Sat – Thu 10:00 AM – 6:00 PM; Fri 1:00 PM – 6:00 PM', details: ['Outdoor ruins are best visited in the morning or late afternoon'], note: 'Hours as listed by VisitSaudi / Heritage Commission — confirm before travelling.' },
      tickets: { required: false, price: 'Free (check on arrival)', how: ['No advance booking is usually needed.', 'See VisitSaudi for the latest visitor-centre information.'], links: [{ label: 'VisitSaudi – Faid Fort Visitor Center', url: 'https://www.visitsaudi.com/en/hail/attractions/visitor-center-faid-fort-archaeological' }] },
      gettingThere: { airport: 'Hail Regional Airport (HAS)', road: 'About 120 km (≈1.5 hours) south-east of Hail city.', transport: 'Car or tour; no public transport.' },
      bestTime: 'November – March', duration: '2–3 hours',
      dress: 'Sun hat, sunglasses and sturdy shoes — the ruins are fully exposed to the desert sun.',
      tips: [
        'Start at the visitor centre to understand the site.',
        'Carry plenty of water; there is little shade.',
        'Do not climb on the walls or remove stones and pottery.',
        'Combine with other Darb Zubaydah sites and the Tabah volcanic craters in Hail Province.'
      ]
    },

    /* ======================= MORE: QASSIM ======================= */
    {
      id: 'unaizah', name: 'Unaizah Heritage & Al-Bassam House', nativeName: 'عنيزة وبيت البسام',
      region: 'qassim', city: 'Unaizah', categories: ['heritage'],
      coords: [26.0870, 43.9930], wiki: 'https://en.wikipedia.org/wiki/Unaizah',
      tagline: 'Najdi merchant houses in the "Paris of Najd".',
      overview: ['Unaizah has a restored heritage district and the Al-Bassam Heritage House, a traditional merchant home with carved wooden doors and decorated interiors. The town also hosts a famous dates festival.'],
      history: ['Unaizah was a prosperous trading town whose merchants traded across Arabia, India and the Levant; 19th-century travellers called it the "Paris of Najd".'],
      religious: null,
      highlights: ['Al-Bassam House', 'Heritage souq', 'Unaizah dates festival'],
      hours: { summary: 'Daytime and evening', details: [], note: '' },
      tickets: { required: false, price: 'Free / small fee', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'About 30 km south of Buraidah.', transport: 'Car.' },
      bestTime: 'Autumn (date season)', duration: '2 hours', dress: 'Modest clothes.', tips: ['Try Qassim\'s klaija (date-filled cookies).']
    },
    {
      id: 'al-shinanah', name: 'Al-Shinanah Tower, Ar Rass', nativeName: 'مرقب الشنانة',
      region: 'qassim', city: 'Ar Rass', categories: ['heritage'],
      coords: [25.8341, 43.4398], wiki: 'https://en.wikipedia.org/wiki/Ar_Rass',
      tagline: 'A tall mud watchtower famous from Najdi history.',
      overview: ['The Al-Shinanah watchtower is a tall slender tower of mud brick rising above the palms near Ar Rass, the most famous of its kind in Qassim.'],
      history: ['The tower is associated with the battles of the early 20th century in Qassim during the unification of Saudi Arabia.'],
      religious: null,
      highlights: ['Watchtower', 'Palm groves'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Near Ar Rass, west of Unaizah.', transport: 'Car.' },
      bestTime: 'November – March', duration: '30 minutes', dress: 'Casual.', tips: ['Photograph at golden hour.']
    },

    /* ======================= MORE: NORTHERN BORDERS ======================= */
    {
      id: 'linah', name: 'Linah (Laynah) Historic Village', nativeName: 'قرية لينة التاريخية',
      region: 'northern-borders', city: 'Rafha', categories: ['heritage', 'archaeology'], featured: true,
      coords: [28.7611, 43.7389],
      tagline: 'Rock-cut wells, a 1930s royal palace and a mud-brick souq on the Darb Zubaydah route.',
      overview: [
        'Linah (also spelled Laynah) is one of the oldest settlements in the Arabian Peninsula, located in the Northern Borders Region about 100 km south of Rafha. It lies in the desert along the historic Darb Zubaydah pilgrimage and trade route.',
        'For centuries the village was a commercial crossroads linking Najd, Iraq and the Levant. Today its old town preserves mud-and-stone houses arranged around inner courtyards designed to keep cool in the desert heat.',
        'Recent heritage work has improved public squares, walkways, lighting and visitor facilities while protecting the historic buildings.'
      ],
      history: [
        'Linah\'s ancient wells made it a vital stop for caravans and pilgrims crossing northern Arabia on Darb Zubaydah.',
        'In 1932–1933 the historic Linah Market was established; it became one of northern Saudi Arabia\'s largest trading centres in the mid-20th century.',
        'In 1935 (1354 AH) King Abdulaziz ordered the building of a palace in Linah to serve as the regional emirate headquarters. The old mosque nearby was built around 1951.'
      ],
      religious: [
        'Linah lay on Darb Zubaydah, the road that carried Hajj pilgrims from Iraq to Makkah. The historic Linah Mosque — one of the oldest in the Northern Borders Province, built of mud brick, stone, athel wood and palm fronds — still hosts daily prayers.'
      ],
      highlights: [
        'King Abdulaziz Palace (1935) — Najdi mud-brick palace with four round corner towers and a central courtyard',
        'Historic Linah Market — 70–80 mud-and-stone shops (as-Sababit) shaded by palm-frond roofs',
        'Ancient wells — originally more than 300 narrow wells carved into solid rock',
        'Historic Linah Mosque (c. 1951)',
        'Traditional old-town houses around courtyards',
        'Folk performances and markets during Saudi National Day and other events'
      ],
      hours: { summary: 'Village open daily; palace and market hours vary', details: ['The market is busiest during events and seasonal festivals'], note: 'Check locally for palace and market opening times.' },
      tickets: { required: false, price: 'Free', how: ['No ticket needed to walk around the village.'], links: [] },
      gettingThere: { airport: 'Rafha Domestic Airport (RAH)', road: 'About 100 km south of Rafha; from Hail about 3 hours north-east by road.', transport: 'Car; no public transport.' },
      bestTime: 'November – March; September for National Day events', duration: '2–3 hours',
      dress: 'Modest clothes, sun hat and comfortable shoes.',
      tips: [
        'Local legend says the rock-cut wells were dug by the army of Prophet Sulaiman (Solomon) on its way between Jerusalem and Yemen — a popular story, not a historical fact.',
        'Visit during Saudi National Day (23 September) for folk shows and camel and horse displays.',
        'Do not lean over or throw anything into the old wells.',
        'Combine with Darb Zubaydah sites around Rafha.'
      ]
    },

    /* ======================= MORE: AL-JAWF ======================= */
    {
      id: 'zaabal-castle', name: 'Za\'abal Castle, Sakaka', nativeName: 'قلعة زعبل',
      region: 'jawf', city: 'Sakaka', categories: ['heritage'],
      coords: [29.9931, 40.2019], 
      tagline: 'A hilltop mud-and-stone fort above Sakaka.',
      overview: ['Za\'abal Castle sits on a sandstone ridge overlooking Sakaka, with four towers and views over the town and palm groves. Below it is the ancient Sisra well.'],
      history: ['The current castle is about 200 years old, built on older foundations; it guarded the town and its water supply.'],
      religious: null,
      highlights: ['Towers', 'Sisra well', 'Sunset view'],
      hours: { summary: 'Daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Jouf (AJF)', road: 'North-west Sakaka.', transport: 'Taxi.' },
      bestTime: 'November – March', duration: '1 hour', dress: 'Comfortable shoes.', tips: ['Climb near sunset for the best light.']
    },
    {
      id: 'al-rajajil', name: 'Al-Rajajil Standing Stones', nativeName: 'أعمدة الرجاجيل',
      region: 'jawf', city: 'Sakaka', categories: ['archaeology'],
      coords: [29.8129, 40.2197], 
      tagline: 'Arabia\'s "Stonehenge" — 6,000-year-old stone pillars.',
      overview: ['Al-Rajajil ("the men") is a group of about 50 clusters of tall sandstone pillars, some up to 3 m high, standing in the desert south of Sakaka.'],
      history: ['The pillars date to around the 4th millennium BCE. Their purpose is still debated — possibly ritual, astronomical or funerary.'],
      religious: null,
      highlights: ['Standing stone clusters', 'Desert landscape'],
      hours: { summary: 'Daytime; site is fenced', details: [], note: 'Access may require a guide or permission.' },
      tickets: { required: false, price: 'Free', how: ['Arrange access locally.'], links: [] },
      gettingThere: { airport: 'Al-Jouf (AJF)', road: 'About 10 km south of Sakaka.', transport: 'Car.' },
      bestTime: 'November – March', duration: '1 hour', dress: 'Desert gear.', tips: ['Do not climb or touch the stones.']
    },
    /* ======================= ROUND 2: MAKKAH PROVINCE ======================= */
    {
      id: 'mecca-museum', name: 'Mecca Museum (Al-Zahir Palace)', nativeName: 'متحف مكة (قصر الزاهر)',
      region: 'makkah', city: 'Makkah', categories: ['heritage', 'religious'], muslimsOnly: true,
      coords: [21.4461, 39.8081],
      tagline: 'Islamic calligraphy, old maps and relics of the Two Holy Mosques, inside a historic palace.',
      overview: ['The Mecca Museum occupies Al-Zahir Palace, a late Ottoman-era building north of the Grand Mosque. Its galleries hold historic photographs, Qur\'an manuscripts, calligraphy, old keys and door panels from the Kaaba, and maps showing how Makkah and its mosque have expanded over the centuries.'],
      history: ['Al-Zahir Palace was built in the late Ottoman period as an administrative residence. It was later converted into a museum dedicated to the history of Makkah, the Two Holy Mosques and the annual Hajj.'],
      religious: ['The museum traces the religious history of the Grand Mosque and the Kaaba, including relics such as old coverings (kiswah) and door panels, making it a useful stop for understanding the sites before or after a visit to Masjid al-Haram.'],
      highlights: ['Historic photographs of Makkah\'s expansion', 'Qur\'an manuscripts and calligraphy', 'Old Kaaba door panels and keys', 'Maps and models of the Grand Mosque over time'],
      hours: { summary: 'Check current museum hours', details: [], note: 'Hours can be limited during Hajj and peak Umrah periods.' },
      tickets: { required: true, price: 'Low entry fee', how: ['Pay at the museum entrance.'], links: [] },
      access: 'Located inside Makkah — Muslims only.',
      gettingThere: { airport: 'King Abdulaziz International (JED), Jeddah', road: 'North of the Grand Mosque in the Al-Zahir district.', transport: 'Taxi or ride-hailing from the Haram area (10–15 minutes).' },
      bestTime: 'Outside Hajj and peak Ramadan nights', duration: '1 hour',
      dress: 'Modest clothing.',
      tips: ['A good quiet counterpoint to the crowds at the Haram.', 'Combine with Jabal al-Nour or the Clock Tower Museum on the same day.']
    },
    {
      id: 'silver-sands-jeddah', name: 'Silver Sands Beach Resort', nativeName: 'منتجع الرمال الفضية',
      region: 'makkah', city: 'Jeddah', categories: ['coast'],
      coords: [21.7731, 39.0526],
      tagline: 'A private Red Sea beach club in the Obhur area north of Jeddah.',
      overview: ['Silver Sands is a private beach club and resort on the Obhur Road, with calm swimming water, sun loungers, food and drink and watersports rental, popular with Jeddah families for a day or weekend by the sea.'],
      history: ['One of several private beach developments that grew up along the Obhur coast as Jeddah expanded north.'],
      religious: null,
      highlights: ['Private swimming beach', 'Sun loungers and cabanas', 'Watersports rental', 'Food and drink on site'],
      hours: { summary: 'Daily, daytime; check current hours', details: ['Family and single-visitor days may be separated'], note: 'Policies and pricing change seasonally — confirm before going.' },
      tickets: { required: true, price: 'Day-use entry fee', how: ['Pay at the gate; booking ahead is advisable at weekends.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'On Obhur Road, north Jeddah.', transport: 'Taxi or ride-hailing; a car is convenient given the beach-day gear.' },
      bestTime: 'October – April for comfortable sun; year-round for swimming', duration: 'Half a day to a full day',
      dress: 'Modest swimwear; a cover-up for moving around the facility.',
      tips: ['Weekdays are far quieter than Thursday–Saturday.', 'Combine with other Obhur-area beaches in the same trip.']
    },
    {
      id: 'red-sea-mall-jeddah', name: 'Red Sea Mall', nativeName: 'مول البحر الأحمر',
      region: 'makkah', city: 'Jeddah', categories: ['modern'],
      coords: [21.6278, 39.1113],
      tagline: 'One of north Jeddah\'s largest shopping and entertainment malls.',
      overview: ['Red Sea Mall on King Abdulaziz Road is a major shopping centre with international and local retail brands, a large food court, a cinema and indoor family entertainment.'],
      history: ['One of the established large-format malls serving the fast-growing northern districts of Jeddah.'],
      religious: null,
      highlights: ['Retail brands and food court', 'Cinema', 'Indoor family entertainment', 'Easy parking'],
      hours: { summary: 'Daily, roughly 10:00 until midnight', details: [], note: 'Shops pause briefly at prayer times.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'King Abdulaziz Road, Al-Shate\' district, north Jeddah.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time', duration: '1–2 hours',
      dress: 'Modest casual.',
      tips: ['Combine with a walk on the nearby Corniche.']
    },
    {
      id: 'al-hada-cable-car', name: 'Al-Hada Cable Car', nativeName: 'تلفريك الهدا',
      region: 'makkah', city: 'Taif', categories: ['nature', 'modern'], featured: true,
      coords: [21.3603, 40.2484],
      tagline: 'A cable car ride down the dramatic Al-Hada escarpment road.',
      overview: ['The Al-Hada cable car runs along the steep Hijaz escarpment near Taif, giving sweeping views over the terraced mountainside and the switchback road below without the drive — a popular short outing for families visiting the Al-Hada area.'],
      history: ['Built to let visitors enjoy the escarpment views safely, alongside the older Al-Hada mountain road, which is famous (and notorious) for its hairpin bends and resident baboons.'],
      religious: null,
      highlights: ['Views over the Al-Hada escarpment', 'A relaxed alternative to driving the switchback road', 'Cooler mountain air', 'Nearby rose and perfume factories'],
      hours: { summary: 'Daily, daytime and evening; check current hours', details: [], note: 'Can close in high winds — a safety measure, not a fault.' },
      tickets: { required: true, price: 'Paid ride', how: ['Buy at the station.'], links: [] },
      gettingThere: { airport: 'Taif Regional Airport (TIF)', road: 'On the Al-Hada mountain road south-west of Taif.', transport: 'Car; part of the same trip as the Al-Hada rose and perfume factories.' },
      bestTime: 'Spring and autumn for cool, clear air', duration: '1 hour',
      dress: 'A light jacket — it is noticeably cooler than Taif town.',
      tips: ['Combine with a rose or perfume factory visit on the same road.', 'Keep food out of sight of the local baboons along the mountain road.']
    },
    {
      id: 'taif-rose-factory', name: 'Taif Rose & Perfume Factories', nativeName: 'مصانع الورد الطائفي',
      region: 'makkah', city: 'Taif', categories: ['heritage', 'nature'], approx: true, featured: true,
      coords: [21.3500, 40.3000],
      tagline: 'Watch Taif\'s famous damask rose turn into rose water and oil.',
      overview: [
        'Several family-run factories around Al-Hada and Al-Shafa distil Taif\'s Damask roses into rose water, rose oil and perfume, using methods passed down for generations. Al-Gadhi Rose Factory, one of the largest and oldest, is open to visitors and especially lively during the spring harvest.',
        'Visitors can watch the distillation process, see the roses being pressed, and buy rose water, oil and rose-scented oud directly from the producers.'
      ],
      history: ['Rose cultivation around Taif dates back centuries, taking advantage of the cool highland climate. Al-Kamal, one of the oldest distilleries in the area, was established in 1831; several more factories, including Al-Gadhi and Al-Quraish, followed over the 20th century.'],
      religious: null,
      highlights: ['Rose distillation demonstrations', 'Rose water, oil and attar for sale', 'Harvest season (roughly March – May)', 'Family-run, multi-generational businesses'],
      hours: { summary: 'Varies by factory; some run extended hours during the spring harvest', details: ['Peak harvest is roughly March to May', 'Several factories are open to visitors without a ticket'], note: 'Opening times and which factories welcome visitors change by season — ask locally or check VisitSaudi before travelling.' },
      tickets: { required: false, price: 'Usually free to visit and watch', how: ['No ticket needed to enter most rose factories; buying products is optional.'], links: [{ label: 'VisitSaudi — Rose Factories', url: 'https://visitsaudi.com' }] },
      gettingThere: { airport: 'Taif Regional Airport (TIF)', road: 'Scattered around Al-Hada and Al-Shafa roads south-west of Taif.', transport: 'Car; most visitors combine several factories with the Al-Hada cable car on the same trip.' },
      bestTime: 'March – May for the rose harvest', duration: '1–2 hours',
      dress: 'Casual, comfortable clothes.',
      tips: ['Visit in the morning during harvest season to see fresh roses being processed.', 'Buy directly from the factory rather than a roadside stall for authenticity.', 'The coordinates mark the general Al-Hada/Al-Shafa area — several factories are spread along this road.']
    },
    {
      id: 'king-abdullah-park-taif', name: 'King Abdullah Park, Taif', nativeName: 'منتزه الملك عبدالله بالطائف',
      region: 'makkah', city: 'Taif', categories: ['nature'],
      coords: [21.2731, 40.4557],
      tagline: 'Flower gardens and open lawns in central Taif.',
      overview: ['King Abdullah Park is a landscaped public park in Taif with flower beds, lawns, walking paths and play areas, popular with families especially during the city\'s cooler months and the Taif Rose Festival season.'],
      history: ['Developed as part of Taif\'s public parks programme, taking advantage of the city\'s relatively mild climate compared with the rest of the region.'],
      religious: null,
      highlights: ['Flower gardens', 'Children\'s play areas', 'Walking paths', 'Evening family picnics'],
      hours: { summary: 'Daily, roughly 08:00 until late evening', details: [], note: 'Busiest in spring during the Rose Festival period.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Taif Regional Airport (TIF)', road: 'Central Taif.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Spring, in the cooler Taif climate', duration: '1 hour',
      dress: 'Casual.',
      tips: ['Combine with Shubra Palace and Al-Rudaf Park on a Taif city day.']
    },
    {
      id: 'prince-majid-park', name: 'Prince Majid Park, Jeddah', nativeName: 'حديقة الأمير ماجد',
      region: 'makkah', city: 'Jeddah', categories: ['nature', 'coast'],
      coords: [21.5914, 39.1838],
      tagline: 'A large waterfront park with watersports in north Jeddah.',
      overview: ['Prince Majid Park is one of Jeddah\'s larger public parks, with lawns, walking paths, play areas and access to the waterfront for watersports and family outings.'],
      history: ['Part of Jeddah\'s expanding network of public waterfront parks.'],
      religious: null,
      highlights: ['Waterfront access', 'Walking paths and lawns', 'Children\'s play areas', 'Watersports in the area'],
      hours: { summary: 'Daily, roughly 08:00 until late evening', details: [], note: 'Busiest on weekend evenings.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'North Jeddah, on the waterfront.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings, October – April', duration: '1 hour',
      dress: 'Casual.',
      tips: ['Good spot for a sunset walk by the water.']
    },
    {
      id: 'al-shallal-theme-park', name: 'Al Shallal Theme Park', nativeName: 'ملاهي الشلال',
      region: 'makkah', city: 'Jeddah', categories: ['modern', 'coast'],
      coords: [21.5673, 39.1112],
      tagline: 'A waterfront amusement park on the Jeddah Corniche.',
      overview: ['Al Shallal Theme Park sits right on the Jeddah Corniche, combining fairground rides, water play areas and seafront views in one family-oriented park.'],
      history: ['One of the longer-established entertainment parks along the Corniche, popular with Jeddah families for evening outings.'],
      religious: null,
      highlights: ['Fairground rides', 'Water play areas', 'Sea views from the park', 'Evening lights on the Corniche'],
      hours: { summary: 'Daily, afternoon until late evening', details: [], note: 'Hours extend during school holidays and Ramadan nights.' },
      tickets: { required: true, price: 'Entry fee plus per-ride tickets (typical amusement-park pricing)', how: ['Buy at the gate.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'On the Jeddah Corniche, Al-Shate\' district.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings, year-round', duration: '2–3 hours',
      dress: 'Casual.',
      tips: ['Combine with a Corniche walk and King Fahd\'s Fountain, which are close by.']
    },
    {
      id: 'fayhaa-park-jeddah', name: 'Fayhaa Park, Jeddah', nativeName: 'حديقة الفيحاء',
      region: 'makkah', city: 'Jeddah', categories: ['nature'], approx: true,
      coords: [21.5003, 39.2150],
      tagline: 'A neighbourhood park popular for exercise and evening walks.',
      overview: ['Fayhaa Park is a community park in Jeddah\'s Al-Fayhaa district, with open space well suited to walking, jogging and casual exercise, used mainly by residents of the surrounding neighbourhoods.'],
      history: ['A district-level public park rather than a major tourist attraction, serving the Al-Fayhaa residential area.'],
      religious: null,
      highlights: ['Walking and jogging paths', 'Open lawns', 'A genuinely local, uncrowded park'],
      hours: { summary: 'Daily, roughly 08:00 until late evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'Al-Fayhaa district, Jeddah.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings', duration: '30–45 minutes',
      dress: 'Casual, suited to walking.',
      tips: ['More a local exercise spot than a tourist sight — visit if you are staying nearby.']
    },
    {
      id: 'red-sea-museum', name: 'Red Sea Museum', nativeName: 'متحف البحر الأحمر',
      region: 'makkah', city: 'Jeddah', categories: ['heritage', 'modern'], approx: true, featured: true,
      coords: [21.4860, 39.1870],
      tagline: 'Jeddah\'s restored sea gateway, now a museum of maritime and Hajj history.',
      overview: [
        'The Red Sea Museum occupies the restored Bab al-Bunt building in historic Al-Balad, built in 1866 as the sea gateway through which pilgrims and traders once entered Jeddah. It opened to the public on 6 December 2025.',
        'Across several galleries the museum covers maritime navigation, Red Sea trade, local geology, the history of Hajj arrivals by sea, and the cultural diversity that passed through this one gate, displaying around 1,000 historical and contemporary objects.'
      ],
      history: ['Bab al-Bunt was one of the historic gates of walled Jeddah, the point where sea-borne pilgrims and merchants entered the city before making their way to Makkah. Its restoration and conversion into a museum is part of the wider revival of Historic Jeddah (Al-Balad).'],
      religious: ['One gallery theme covers the history of Hajj pilgrims arriving in Jeddah by sea, a key part of the city\'s historic role as the gateway to Makkah.'],
      highlights: ['Restored 1866 Bab al-Bunt building', 'Maritime navigation and trade history', 'Hajj-arrival history', 'Around 1,000 artefacts and contemporary works'],
      hours: { summary: 'Check current museum hours — it opened in December 2025', details: [], note: 'As a newly opened museum, hours and ticketing may still be settling — confirm before visiting.' },
      tickets: { required: true, price: 'Entry fee (check current rate)', how: ['Buy at the museum or check for online booking.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'In Historic Jeddah (Al-Balad), near the old sea gate.', transport: 'Taxi or ride-hailing; walkable from other Al-Balad sights.' },
      bestTime: 'Any time; combine with a wider Al-Balad visit', duration: '1–1.5 hours',
      dress: 'Modest clothing.',
      tips: ['Combine with historic Al-Balad\'s coral-stone houses and the Tayebat Museum.', 'As a 2025 opening, check current hours before travelling — they may still be stabilising.']
    },
    {
      id: 'house-of-islamic-arts', name: 'House of Islamic Arts', nativeName: 'دار الفنون الإسلامية',
      region: 'makkah', city: 'Jeddah', categories: ['heritage', 'modern'], approx: true,
      coords: [21.5562, 39.1850],
      tagline: 'Saudi Arabia\'s first museum dedicated entirely to Islamic art.',
      overview: ['The House of Islamic Arts, in the Jeddah Park development, is Saudi Arabia\'s first museum built specifically for Islamic art. Its galleries display more than 1,000 artefacts from across the Muslim world, covering ceramics and glass, metalwork, coins, Qur\'anic manuscripts, textiles and cross-cultural exchange.'],
      history: ['Opened as part of a wave of new Saudi museums dedicated to specific collecting themes, bringing together Islamic-art holdings that previously had no dedicated home in Jeddah.'],
      religious: ['Several galleries focus on Qur\'anic manuscripts and calligraphy, tracing styles and production across centuries of Islamic history.'],
      highlights: ['Qur\'anic manuscripts and calligraphy', 'Ceramics, glass and metalwork', 'Historic coins', 'Textiles and cross-cultural artefacts'],
      hours: { summary: 'Check current museum hours', details: [], note: 'A recently opened museum — hours and ticketing may still be settling.' },
      tickets: { required: true, price: 'Entry fee (check current rate)', how: ['Buy at the museum or check for online booking.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'In the Jeddah Park development.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time', duration: '1.5 hours',
      dress: 'Modest casual.',
      tips: ['Note this is a different venue from "Dar Al Funoon", a contemporary-art gallery in Riyadh — the Islamic-art museum in Jeddah is the House of Islamic Arts.']
    },
    {
      id: 'al-shareef-museum', name: 'Al-Shareef Museum, Taif', nativeName: 'متحف الشريف بالطائف',
      region: 'makkah', city: 'Taif', categories: ['heritage'],
      coords: [21.2432, 40.4475],
      tagline: 'A private collection of vintage cars, coins and Taif memorabilia.',
      overview: ['Al-Shareef Museum is a private museum in Taif displaying vintage cars, old coins, household items and other everyday objects from the region\'s recent past, built up as a personal collection rather than a state institution.'],
      history: ['Founded by a private collector to preserve everyday artefacts of Taif life before they disappeared, in the tradition of several family-run heritage museums across Saudi Arabia.'],
      religious: null,
      highlights: ['Vintage cars', 'Old coins and currency', 'Everyday household artefacts', 'A personal, small-scale museum experience'],
      hours: { summary: 'Check current opening hours — a private museum', details: [], note: 'Hours may be irregular; calling ahead is sensible.' },
      tickets: { required: false, price: 'Usually free or a small donation', how: ['Confirm current access locally.'], links: [] },
      gettingThere: { airport: 'Taif Regional Airport (TIF)', road: 'Umm Al-Sibaa area, Taif.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time, subject to opening hours', duration: '45 minutes',
      dress: 'Casual.',
      tips: ['As a small private museum, confirm it is open before making a special trip.']
    },
    {
      id: 'kaki-palace', name: 'Kaki Palace, Taif', nativeName: 'قصر الكعكي',
      region: 'makkah', city: 'Taif', categories: ['heritage'], approx: true,
      coords: [21.2698, 40.4055],
      tagline: 'A historic Hejazi-style mansion in central Taif.',
      overview: ['Kaki Palace is a historic Hejazi-style house in Taif\'s Al-Salamah district, one of several old merchant and notable-family residences that survive from the city\'s pre-oil era alongside Shubra Palace and Al-Kateb Palace.'],
      history: ['Built as a private residence in the traditional Taif architectural style, it is now one of the heritage buildings that illustrate the city\'s early 20th-century domestic architecture.'],
      religious: null,
      highlights: ['Hejazi-style architecture', 'Historic Taif residential design', 'A quieter alternative to the better-known Shubra Palace'],
      hours: { summary: 'Check current access — may not be regularly open to the public', details: [], note: 'Confirm whether the interior can be visited before travelling.' },
      tickets: { required: false, price: 'Free if accessible', how: ['Confirm current access locally.'], links: [] },
      gettingThere: { airport: 'Taif Regional Airport (TIF)', road: 'Al-Salamah Street, central Taif.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Daytime', duration: '30 minutes (exterior) to 1 hour',
      dress: 'Casual.',
      tips: ['Combine with Shubra Palace and Al-Shareef Museum on a Taif heritage day.', 'If the interior is closed, the exterior and street are still worth a look for the architecture.']
    },
    {
      id: 'miqat-wadi-mahram', name: 'Miqat Wadi Mahram (Al-Sayl al-Kabir)', nativeName: 'ميقات وادي محرم',
      region: 'makkah', city: 'Taif', categories: ['religious'], muslimsOnly: true,
      coords: [21.3463, 40.3272],
      tagline: 'The miqat boundary for pilgrims travelling to Makkah from Taif.',
      overview: ['Wadi Mahram, also known as Al-Sayl al-Kabir, is the miqat — the designated boundary — where Muslims travelling to Makkah from the Taif direction enter the state of ihram before continuing on to perform Umrah or Hajj.'],
      history: ['Miqat boundaries were established in the earliest period of Islam to mark where pilgrims approaching Makkah from each direction must enter ihram. The Taif-direction miqat has been fixed at this valley ever since.'],
      religious: ['Pilgrims travelling from Taif towards Makkah for Umrah or Hajj must enter the state of ihram here (or before), making the intention (niyyah) at this boundary. It is one of the five main miqat points around Makkah.'],
      highlights: ['Miqat boundary marker and mosque facilities', 'A practical stop for pilgrims from the Taif direction', 'Simple roadside facilities for changing into ihram'],
      hours: { summary: 'Open at all times — a roadside miqat point', details: [], note: 'Facilities are basic: a mosque and washing areas for pilgrims to prepare.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Taif Regional Airport (TIF)', road: 'On the Al-Hada road between Taif and Makkah.', transport: 'Car, or as part of an organised Umrah transfer from Taif.' },
      bestTime: 'Whenever travelling from Taif to Makkah for Umrah or Hajj', duration: '15–30 minutes to change into ihram',
      dress: 'Ihram clothing is put on here for those continuing to Makkah for Umrah or Hajj.',
      tips: ['If you are travelling on to Makkah for Umrah, enter ihram and make your intention here or before, not after passing this point.', 'Simple facilities are provided for changing — bring your own ihram cloths and toiletries.']
    },
    {
      id: 'daka-mountain', name: 'Daka Mountain, Taif', nativeName: 'جبل دكاء',
      region: 'makkah', city: 'Taif', categories: ['nature'],
      coords: [21.0937, 40.2873],
      tagline: 'A high peak in the Al-Shafa mountains south of Taif.',
      overview: ['Jabal Daka is a mountain in the Al-Shafa range south of Taif, part of the cool, forested highland escarpment that draws visitors escaping the summer heat of the lowlands.'],
      history: ['Part of the Sarawat mountain chain that runs the length of western Saudi Arabia, long used by highland communities for grazing and, more recently, for tourism.'],
      religious: null,
      highlights: ['Highland scenery', 'Cooler mountain air, especially in summer', 'Views over the Al-Shafa escarpment', 'Nearby juniper forest areas'],
      hours: { summary: 'Open at all times', details: [], note: 'No formal visitor facilities — this is open countryside.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Taif Regional Airport (TIF)', road: 'In the Al-Shafa area, south of Taif.', transport: 'Car.' },
      bestTime: 'Summer, for relief from lowland heat', duration: '1–2 hours',
      dress: 'Layers — mountain evenings are cool even in summer.',
      tips: ['Combine with a wider Al-Shafa mountain drive.', 'Roads can be narrow and winding — drive carefully.']
    },
    /* ======================= ROUND 3: MAKKAH PROVINCE ======================= */
    {
      id: 'jannat-al-mualla', name: 'Jannat al-Mu\'alla Cemetery', nativeName: 'مقبرة المعلاة',
      region: 'makkah', city: 'Makkah', categories: ['religious', 'heritage'], muslimsOnly: true,
      coords: [21.4306, 39.8286], wiki: 'https://en.wikipedia.org/wiki/Jannat_al-Mu%27alla',
      tagline: 'The historic cemetery of Makkah, resting place of Khadijah.',
      overview: ['Jannat al-Mu\'alla is the oldest cemetery of Makkah, about 1 km north of Masjid al-Haram. Graves are simple and unmarked.'],
      history: ['It has been used since before Islam. According to Islamic tradition it holds the graves of Khadijah bint Khuwaylid, the first wife of the Prophet ﷺ, his grandfather Abd al-Muttalib and his uncle Abu Talib, among many others.'],
      religious: ['Khadijah was the first person to believe in the Prophet\'s ﷺ message and is deeply honoured by Muslims. Visitors send greetings of peace and pray for the deceased, following the Sunnah of visiting graves.'],
      highlights: ['Grave of Khadijah (by tradition)', 'Historic burial ground of Makkah'],
      hours: { summary: 'Usually opened for visitors after Fajr and Asr', details: [], note: 'Women may view from outside the gate.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      access: 'Located inside Makkah — Muslims only.',
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'About 1 km north of Masjid al-Haram.', transport: 'Walk or short taxi ride from the Haram.' },
      bestTime: 'After Fajr', duration: '30 minutes', dress: 'Modest clothes.', tips: ['Keep quiet and respectful; photography is discouraged.']
    },
    {
      id: 'kiswa-complex', name: 'Kiswa Complex & Two Holy Mosques Architecture Exhibition', nativeName: 'مجمع الملك عبدالعزيز لكسوة الكعبة المشرفة ومعرض عمارة الحرمين',
      region: 'makkah', city: 'Makkah', categories: ['religious', 'heritage'], muslimsOnly: true, featured: true,
      coords: [21.4338, 39.7544], wiki: 'https://en.wikipedia.org/wiki/The_Two_Holy_Mosques_Architecture_Exhibition',
      tagline: 'Watch the Kaaba\'s black-and-gold Kiswah being made, and see historic relics of the two holy mosques.',
      overview: [
        'The King Abdulaziz Complex for the Holy Kaaba Kiswa and the Exhibition of the Two Holy Mosques Architecture are two neighbouring cultural landmarks in the Al-Hamra / Umm Al-Jud district of Makkah, on the Old Makkah–Jeddah Road about 10 km from Masjid al-Haram.',
        'At the Kiswa Complex, visitors can watch every stage of making the Kiswah — the black silk covering of the Kaaba — including weaving, dyeing, printing and hand embroidery of Qur\'anic verses in gold- and silver-plated thread. Demonstration displays and videos explain the annual process.',
        'Next door, the Exhibition of the Two Holy Mosques Architecture traces the architectural history and expansions of Masjid al-Haram and Al-Masjid an-Nabawi across seven galleries, with original relics and detailed scale models.'
      ],
      history: [
        'For centuries the Kiswah was made in Egypt and sent to Makkah with the annual pilgrim caravan. Saudi Arabia began producing it locally in 1927, and the current complex opened in 1977.',
        'A new Kiswah is made every year and placed on the Kaaba; the embroidered bands carry verses of the Qur\'an.',
        'The Architecture Exhibition displays rare relics such as a Kaaba door from 1944 (1363 AH), an 1825 teakwood staircase of the Kaaba, an internal wooden pillar of the Kaaba dating to 65 AH, and historic fixtures from the Zamzam well.'
      ],
      religious: [
        'Covering the Kaaba is an ancient tradition honoured in Islam. Seeing the craftsmen embroider the verses of the Qur\'an onto the Kiswah — and seeing historic parts of the Kaaba and the Prophet\'s Mosque — is a moving experience for many pilgrims and helps them appreciate the care given to the House of Allah.'
      ],
      highlights: [
        'Live Kiswah weaving, dyeing and gold-thread embroidery',
        'Kaaba door from 1944 and 1825 teakwood Kaaba staircase',
        'Wooden Kaaba pillar from 65 AH',
        'Historic Zamzam well fixtures',
        'Seven galleries with scale models of both holy mosques',
        'Free multilingual guides (often available on site)'
      ],
      hours: { summary: 'Typically Sun – Thu; Kiswa general visits around 8:00 – 11:00 AM; Exhibition about 8:00 AM – 8:00 PM', details: ['Saturday access is sometimes listed on the official visits portal', 'Times change in Ramadan and Hajj season'], note: 'Book a time slot in advance and confirm current hours on the official portal.' },
      tickets: { required: true, price: 'Free (Muslim visitors)', how: ['Book a free time-slot permit in advance on the official Haramain Visits Portal.', 'Choose the Kiswa Complex and/or the Two Holy Mosques Architecture Exhibition, pick a date and time, and keep the confirmation.', 'Show your permit and ID at the entrance; free guides are often available inside.', 'Private tours with hotel pick-up are also offered by tour platforms.'], links: [{ label: 'Haramain Visits Portal (official)', url: 'https://visits.alharamain.gov.sa/' }, { label: 'VisitSaudi – Kiswa Factory', url: 'https://www.visitsaudi.com/en/makkah/attractions/the-kiswa-factory-of-the-holy-kaaba-in-makkah' }, { label: 'VisitSaudi – Architecture Exhibition', url: 'https://www.visitsaudi.com/en/makkah/attractions/exhibition-of-the-two-holy-mosques-architecture' }] },
      access: 'Located inside the sacred area of Makkah — open to Muslim visitors only.',
      gettingThere: { airport: 'King Abdulaziz International (JED), Jeddah', road: 'Old Makkah–Jeddah Road, Al-Hamra / Umm Al-Jud district, about 10 km (≈15–20 minutes) west of Masjid al-Haram.', transport: 'Taxi or ride-hailing; arrange your return ride in advance, as taxis can be scarce. Many Umrah agents include it in ziyarat tours.' },
      bestTime: 'Weekday mornings', duration: '2–3 hours for both',
      dress: 'Modest clothes; women cover their hair.',
      tips: [
        'Book your permit a few days ahead, especially in Ramadan.',
        'Visit the Kiswa Complex in the morning slot, then the Exhibition next door.',
        'Photography rules vary by hall — ask staff before taking photos.'
      ]
    },
    {
      id: 'tayebat-museum', name: 'Tayebat City Museum (Al Taybat International City)', nativeName: 'مدينة الطيبات العالمية للعلوم والمعرفة',
      region: 'makkah', city: 'Jeddah', categories: ['heritage', 'modern'], featured: true,
      approx: true, coords: [21.5650, 39.1530],
      tagline: 'A vast Hijazi-style museum city with 60,000+ artefacts and 365 rooms.',
      overview: [
        'Tayebat City Museum — officially Al Taybat International City Museum of Science and Information — is a huge private heritage museum complex in Jeddah. It covers about 10,000 m² across 12 buildings and 365 rooms, all built in traditional Hijazi style.',
        'The interconnected buildings recreate historic Jeddah houses with coral-stone walls, carved wooden rawasheen balconies, domes, minarets and open courtyards — the museum itself is one of the main attractions.',
        'Its collection of more than 60,000 artefacts covers around 2,500 years of local, Islamic and world history.'
      ],
      history: [
        'The museum was founded by the collector Sheikh Abdul Raouf Khalil and opened to the public in 1999.',
        'Exhibits trace Jeddah\'s story from early fishing settlements through the Islamic centuries to the unification of Saudi Arabia under King Abdulaziz.'
      ],
      religious: [
        'Galleries on Islamic heritage and the holy cities display rare copies of the Qur\'an, ancient manuscripts, historic coins and a framed piece of the Kiswah — the sacred cloth that covers the Kaaba.'
      ],
      highlights: [
        'Hijazi architecture with rawasheen balconies, domes and minarets',
        'Rare Qur\'ans, manuscripts and a framed piece of the Kaaba\'s Kiswah',
        'Historic weapons and antique coins',
        'Pre-Islamic and Saudi history galleries',
        'Bedouin artefacts, regional costumes and Hijazi bridal wear',
        'Large scale model of old Jeddah'
      ],
      hours: { summary: 'Sat – Thu 10:00 AM – 1:00 PM and 5:00 – 9:00 PM; closed Friday', details: [], note: 'Hours can change seasonally and in Ramadan — check before visiting.' },
      tickets: { required: true, price: 'About SAR 50–80 per adult (walk-in)', how: ['Buy tickets at the gate — carrying cash is recommended.', 'Guided tours can be booked through local operators or on webook.com.'], links: [{ label: 'VisitSaudi – Tayebat Museum', url: 'https://www.visitsaudi.com/en/jeddah/attractions/tayebat-museum' }, { label: 'Webook', url: 'https://webook.com' }] },
      gettingThere: { airport: 'King Abdulaziz International (JED) — about 25 minutes', road: '3170 Raihanat Al Jazirah, Al-Faisaliyah district, Jeddah. Free parking on site.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evening session, any season', duration: '2–3 hours',
      dress: 'Modest clothes; comfortable shoes for many stairs.',
      tips: [
        'The layout is maze-like with little signage — consider hiring an in-house guide.',
        'Allow 2–3 hours to see the main wings without rushing.',
        'Wheelchair-accessible entrances and restrooms, plus an on-site restaurant.',
        'Combine with Al-Balad (Historic Jeddah) on the same day.'
      ]
    },
    {
      id: 'obhur', name: 'Obhur Creek (Sharm Obhur), Jeddah', nativeName: 'شرم أبحر',
      region: 'makkah', city: 'Jeddah', categories: ['coast'],
      coords: [21.7428, 39.1219], 
      tagline: 'Jeddah\'s beach and diving playground on a deep Red Sea inlet.',
      overview: ['Obhur is a long, deep creek north of Jeddah lined with beach clubs, marinas and public beaches. It is the city\'s main spot for swimming, jet skis, boat trips and diving on nearby reefs.'],
      history: ['Once a quiet fishing area, Obhur became a resort district as Jeddah expanded north.'],
      religious: null,
      highlights: ['Beach clubs', 'Diving and snorkelling', 'Boat trips', 'Sunset at the creek mouth'],
      hours: { summary: 'Public beaches open at all times; beach clubs have set hours', details: [], note: '' },
      tickets: { required: 'partial', price: 'Public areas free; beach clubs paid', how: ['Book beach clubs or dive trips directly.'], links: [] },
      gettingThere: { airport: 'King Abdulaziz International (JED) — about 20 minutes', road: 'North Jeddah along the corniche.', transport: 'Taxi.' },
      bestTime: 'October – May', duration: 'Half a day', dress: 'Modest swimwear on public beaches.', tips: ['Book a dive with a licensed centre to see the Red Sea reefs.']
    },

    /* ======================= ROUND 2: MADINAH PROVINCE ======================= */
    {
      id: 'masjid-abu-bakr-omar', name: 'Masjid Abu Bakr & Masjid Omar', nativeName: 'مسجد أبو بكر ومسجد عمر',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage'], muslimSite: true,
      coords: [24.4652, 39.6065],
      tagline: 'Two small historic mosques beside Masjid al-Ghamama.',
      overview: ['Masjid Abu Bakr and Masjid Omar are two modest historic mosques standing close to Masjid al-Ghamama, south-west of the Prophet\'s Mosque, each associated with the first two caliphs.'],
      history: ['Tradition places these mosques at sites associated with Abu Bakr and Umar ibn al-Khattab, near the open prayer ground (musalla) used by the Prophet ﷺ for Eid prayers, the same area as Masjid al-Ghamama.'],
      religious: ['Visited as part of the ziyarat route around the historic mosques near the Prophet\'s Mosque, honouring the memory of the first two Rightly Guided Caliphs.'],
      highlights: ['Historic mosque architecture', 'Part of the Ghamama mosque cluster', 'A short, easy ziyarat stop'],
      hours: { summary: 'Open daily outside prayer times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED)', road: 'South-west of the Prophet\'s Mosque, beside Masjid al-Ghamama.', transport: 'Walking distance from the Prophet\'s Mosque, or a short taxi ride.' },
      bestTime: 'Any time outside prayer hours', duration: '15–20 minutes',
      dress: 'Modest clothing.',
      tips: ['Combine with Masjid al-Ghamama on the same short walk.']
    },
    {
      id: 'masjid-al-ijabah', name: 'Masjid Al-Ijabah', nativeName: 'مسجد الإجابة',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage'], muslimSite: true,
      coords: [24.4719, 39.6185],
      tagline: 'The historic "Mosque of the Answered Prayer".',
      overview: ['Masjid Al-Ijabah is a small historic mosque in Madinah traditionally associated with a supplication of the Prophet ﷺ that was answered, which gives the mosque its name ("al-ijabah" — the response, or acceptance, of prayer).'],
      history: ['One of several historic mosques scattered through Madinah marking sites visited or used for prayer by the Prophet ﷺ and his Companions.'],
      religious: ['Visited by pilgrims as part of the wider ziyarat tour of Madinah\'s historic mosques, for its association with an accepted supplication.'],
      highlights: ['Historic small mosque', 'Part of the Madinah ziyarat circuit'],
      hours: { summary: 'Open daily outside prayer times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED)', road: 'Bani Abd al-Ashhal district, Madinah.', transport: 'Taxi or ride-hailing from the Haram area.' },
      bestTime: 'Any time outside prayer hours', duration: '15 minutes',
      dress: 'Modest clothing.',
      tips: ['Usually visited as one stop on a wider mosque ziyarat tour with a local guide or driver.']
    },
    {
      id: 'masjid-al-suqya', name: 'Masjid Al-Suqya', nativeName: 'مسجد السقيا',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage'], muslimSite: true,
      coords: [24.4608, 39.6002],
      tagline: 'Where the Prophet ﷺ prayed and sought water on the way to Badr.',
      overview: ['Masjid Al-Suqya marks a spot where the Prophet ﷺ is said to have stopped, prayed and supplicated on his way south towards the Battle of Badr, in the Al-Suqya area of Madinah.'],
      history: ['Part of the network of small historic mosques around Madinah marking stations on journeys made by the Prophet ﷺ, in this case connected to the Badr campaign.'],
      religious: ['A ziyarat stop for pilgrims tracing sites connected to the Prophet\'s ﷺ life and the early battles of Islam.'],
      highlights: ['Historic small mosque', 'Connection to the journey to Badr'],
      hours: { summary: 'Open daily outside prayer times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED)', road: 'Al-Suqya area, Madinah.', transport: 'Taxi or ride-hailing from the Haram area.' },
      bestTime: 'Any time outside prayer hours', duration: '15 minutes',
      dress: 'Modest clothing.',
      tips: ['Usually combined with other historic mosques on a guided ziyarat route.']
    },
    {
      id: 'miqat-dhul-hulayfah', name: 'Miqat Dhul Hulayfah (Abyar Ali)', nativeName: 'ميقات ذو الحليفة (أبيار علي)',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage'], muslimSite: true, featured: true,
      coords: [24.4137, 39.5424], wiki: 'https://en.wikipedia.org/wiki/Miqat_Dhu_al-Hulayfah',
      tagline: 'The miqat where pilgrims from Madinah enter the state of ihram.',
      overview: ['Dhul Hulayfah, known today as Abyar Ali, is the miqat — the formal boundary — where residents of and visitors to Madinah enter the state of ihram before travelling on to Makkah for Umrah or Hajj. A large mosque with washing and changing facilities stands on the site to serve pilgrims.'],
      history: ['This is the miqat the Prophet ﷺ himself used when he set out from Madinah for pilgrimage, making it the furthest of the five main miqat points from Makkah and one of the most historically significant.'],
      religious: ['Pilgrims travelling from Madinah to Makkah for Umrah or Hajj must enter ihram here (or earlier), making the intention (niyyah) at or before this boundary. The mosque offers prayer space and facilities to prepare.'],
      highlights: ['Miqat mosque and facilities', 'Historic site used by the Prophet ﷺ', 'Washing and changing rooms for ihram', 'A key stop for pilgrims leaving Madinah for Makkah'],
      hours: { summary: 'Open at all times', details: [], note: 'Can be very busy with buses of pilgrims, especially around Umrah and Hajj seasons.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED)', road: 'About 14 km south-west of the Prophet\'s Mosque, on the way to Makkah.', transport: 'Most pilgrims pass through here on their bus or car transfer from Madinah to Makkah.' },
      bestTime: 'Whenever travelling from Madinah to Makkah for Umrah or Hajj', duration: '20–30 minutes to perform ghusl, change and pray',
      dress: 'Ihram clothing is put on here (men: two unstitched white cloths; women: loose modest clothing) before continuing to Makkah.',
      tips: ['Enter ihram and make your intention here (or before) if performing Umrah straight from Madinah — not after passing this point.', 'Facilities can be crowded; allow extra time before a bus departure.']
    },
    {
      id: 'sira-quran-exhibition', name: 'International Exhibition of the Prophet\'s Biography & Qur\'an', nativeName: 'المعرض الدولي للسيرة النبوية والقرآن الكريم',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'modern'], muslimSite: true, featured: true,
      coords: [24.4659, 39.6095],
      tagline: 'An immersive, modern exhibition on the Prophet\'s life and the Qur\'an, beside the Haram.',
      overview: ['This exhibition complex near the Prophet\'s Mosque combines the International Exhibition and Museum of the Prophet\'s Biography and Islamic Civilization with a dedicated Qur\'an exhibition, using screens, models and interactive displays to present the life of the Prophet ﷺ, the early Islamic civilisation and the history of the Qur\'an\'s compilation and preservation.'],
      history: ['Developed as part of Madinah\'s modern museum offerings around the Haram, aimed at giving pilgrims an accessible, technology-driven introduction to the Sira (Prophetic biography) alongside their visit to the mosque.'],
      religious: ['Covers the life of the Prophet ﷺ, the early Muslim community in Madinah, and the history and preservation of the Qur\'anic text — a widely recommended stop for pilgrims wanting historical context for their visit.'],
      highlights: ['Interactive Sira (Prophetic biography) displays', 'Qur\'an history and manuscript exhibits', 'Multimedia and model presentations', 'Close to the Prophet\'s Mosque'],
      hours: { summary: 'Daily; check current hours, which may extend during Ramadan', details: [], note: '' },
      tickets: { required: false, price: 'Usually free', how: ['Check current booking arrangements — some sessions may need advance registration.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED)', road: 'Near the Prophet\'s Mosque, central Madinah.', transport: 'Walking distance from the Haram.' },
      bestTime: 'Any time; a good complement to visiting the Haram', duration: '1.5–2 hours',
      dress: 'Modest clothing.',
      tips: ['A good first stop before or after visiting the Prophet\'s Mosque to add historical context.', 'Allow time — the exhibition is larger than it first appears.']
    },
    {
      id: 'king-fahd-quran-complex', name: 'King Fahd Glorious Qur\'an Printing Complex', nativeName: 'مجمع الملك فهد لطباعة المصحف الشريف',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'modern'],
      coords: [24.5160, 39.5414], wiki: 'https://en.wikipedia.org/wiki/King_Fahd_Complex_for_the_Printing_of_the_Holy_Quran',
      tagline: 'The world\'s largest Qur\'an printing and publishing centre.',
      overview: ['The King Fahd Complex prints and distributes copies of the Qur\'an, translations and Islamic literature on a vast scale, supplying pilgrims and Islamic institutions worldwide free of charge. Guided tours show the printing halls and the process from paper to bound copy.'],
      history: ['Established in 1984 under King Fahd, the complex has since printed hundreds of millions of copies of the Qur\'an in dozens of languages, becoming one of the main sources of printed Qur\'ans distributed globally.'],
      religious: ['Central to the global distribution of the printed Qur\'an and its translations, supplying mosques, pilgrims and Islamic organisations around the world without charge.'],
      highlights: ['Printing hall tours (where available)', 'Qur\'ans and translations in many languages', 'Insight into large-scale Islamic publishing'],
      hours: { summary: 'Visits typically by appointment or organised group tour', details: [], note: 'Arrange a visit in advance — this is a working industrial facility, not a walk-in museum.' },
      tickets: { required: false, price: 'Free', how: ['Arrange a tour through the complex or a local operator in advance.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED)', road: 'On the Tabuk road, northern outskirts of Madinah.', transport: 'Taxi or ride-hailing; a car is convenient.' },
      bestTime: 'Weekday mornings, by prior arrangement', duration: '1 hour (guided tour)',
      dress: 'Modest clothing.',
      tips: ['Contact the complex or a tour operator ahead of time — casual walk-in visits are not guaranteed.']
    },
    {
      id: 'king-fahd-central-park', name: 'King Fahd Central Park, Madinah', nativeName: 'حديقة الملك فهد المركزية',
      region: 'madinah', city: 'Madinah', categories: ['nature', 'modern'],
      coords: [24.4158, 39.6080],
      tagline: 'Madinah\'s largest public park and green space.',
      overview: ['King Fahd Central Park is Madinah\'s biggest public park, with wide lawns, walking paths, play areas and space for family picnics, serving as the main green escape for residents and visiting pilgrims alike.'],
      history: ['Developed as part of Madinah\'s public parks programme to provide large-scale green recreational space for the growing city.'],
      religious: null,
      highlights: ['Large lawns and walking paths', 'Children\'s play areas', 'Evening and weekend family picnics'],
      hours: { summary: 'Daily, roughly 08:00 until late evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED)', road: 'Southern Madinah.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings, year-round', duration: '1 hour',
      dress: 'Casual.',
      tips: ['A pleasant break from the busier religious sites in the city centre.']
    },
    {
      id: 'al-noor-mall-madinah', name: 'Al Noor Mall, Madinah', nativeName: 'النور مول',
      region: 'madinah', city: 'Madinah', categories: ['modern'],
      coords: [24.4960, 39.5954],
      tagline: 'One of Madinah\'s main shopping and dining malls.',
      overview: ['Al Noor Mall is a large shopping centre in Madinah with retail brands, restaurants and a food court, serving both residents and visiting pilgrims looking for shopping and dining away from the Haram area.'],
      history: ['Part of Madinah\'s expansion of modern retail to serve the city\'s growing population and millions of annual pilgrim visitors.'],
      religious: null,
      highlights: ['Retail shops and brands', 'Food court and restaurants', 'Family-friendly indoor space'],
      hours: { summary: 'Daily, roughly 10:00 until midnight', details: [], note: 'Shops pause briefly at prayer times.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED)', road: 'Al-Raya district, Madinah.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time', duration: '1–2 hours',
      dress: 'Modest casual.',
      tips: ['A convenient stop for shopping away from the Haram crowds.']
    },
    {
      id: 'alula-oasis-trail', name: 'AlUla Oasis Heritage Trail', nativeName: 'مسار واحة العلا التراثي',
      region: 'madinah', city: 'AlUla', categories: ['nature', 'heritage'], approx: true,
      coords: [26.6471, 37.9137],
      tagline: 'A walk through palm groves and restored farmland linking Dadan to AlUla Old Town.',
      overview: ['The Oasis Heritage Trail winds through AlUla\'s palm and citrus groves, following old irrigation channels and restored farmland between the Dadan archaeological area and AlUla Old Town, with glimpses of historic mud-brick dwellings along the way.'],
      history: ['The oasis has been farmed for thousands of years, watered by a system of wells and channels that the trail passes through; the route has been developed and signposted as part of AlUla\'s wider tourism infrastructure.'],
      religious: null,
      highlights: ['Palm and citrus groves', 'Historic irrigation channels', 'Views towards Jabal Ikmah and Dadan', 'A shaded, easy walk compared with AlUla\'s desert sites'],
      hours: { summary: 'Open at all times; guided walks also run on a schedule', details: ['Self-guided sections are free and open any time of day', 'Guided tours run about 90 minutes'], note: '' },
      tickets: { required: false, price: 'Free to walk independently; guided tours are paid', how: ['Walk independently, or book a guided Oasis Heritage Trail tour through Experience AlUla.'], links: [{ label: 'Experience AlUla', url: 'https://experiencealula.com' }] },
      gettingThere: { airport: 'AlUla International Airport (ULH)', road: 'Within the AlUla oasis, between Dadan and AlUla Old Town.', transport: 'Walk from the Oasis South car park or a Dadan/Old Town starting point.' },
      bestTime: 'Early morning or late afternoon, November – March', duration: '1–2 hours (about 3 km)',
      dress: 'Comfortable walking shoes and sun protection.',
      tips: ['Start from the Dadan Welcome Centre and combine with Jabal Ikmah in the same visit.', 'The exact route and length vary slightly by source — check current signage or a guided tour for the full path.']
    },
    {
      id: 'jar-rock', name: 'Jar Rock (Jabal Jarrah)', nativeName: 'صخرة الجرة',
      region: 'madinah', city: 'AlUla', categories: ['nature'], approx: true,
      coords: [26.6890, 37.9820],
      tagline: 'A sandstone outcrop eroded into the shape of a giant jar, near Elephant Rock.',
      overview: ['Jar Rock is a sandstone formation whose wind- and water-eroded opening resembles a giant jar or vessel, reached by a short hike from Elephant Rock across the valley and surrounding farmland.'],
      history: ['Like Elephant Rock, Jar Rock is a natural sandstone formation shaped by millions of years of erosion — not a man-made or archaeological site.'],
      religious: null,
      highlights: ['The jar-shaped rock opening', 'Views back towards Elephant Rock', 'A short desert hike', 'Surrounding valley and farm views'],
      hours: { summary: 'Open at all times, daylight hours recommended', details: [], note: 'No parking or facilities at the rock itself — park at Elephant Rock and walk.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'AlUla International Airport (ULH)', road: 'Near Elephant Rock (Jabal AlFil).', transport: 'Drive to Elephant Rock, then hike across to Jar Rock.' },
      bestTime: 'Early morning or late afternoon, November – March', duration: '1–1.5 hours including the hike',
      dress: 'Sturdy shoes with grip — the final approach has slippery rock and a steep drop.',
      tips: ['Not recommended for young children because of the steep drop near the opening.', 'Combine with Elephant Rock, which is the starting point for the hike.', 'Carry water — there is no shade or facilities on the trail.']
    },
    {
      id: 'yanbu-flower-festival-park', name: 'Yanbu Flower Festival Park', nativeName: 'حديقة مهرجان ينبع للزهور',
      region: 'madinah', city: 'Yanbu', categories: ['nature', 'modern'], featured: true,
      coords: [24.0320, 38.2021],
      tagline: 'Home to one of the world\'s largest flower carpets, during the annual festival.',
      overview: ['This park hosts Yanbu\'s annual Flower Festival, when elaborate floral displays — including an enormous flower carpet — transform the grounds into one of the most colourful events on the Saudi tourism calendar. Outside festival dates, it functions as a landscaped public park.'],
      history: ['The festival has grown over successive years into a flagship Yanbu event, drawing visitors from across the region to see the scale of the floral displays.'],
      religious: null,
      highlights: ['Large-scale flower carpet (festival dates)', 'Landscaped gardens year-round', 'Family photo spots', 'Evening lighting during the festival'],
      hours: { summary: 'Park open daily; festival dates are seasonal and announced each year', details: [], note: 'Check current festival dates before planning a special trip — they vary by year.' },
      tickets: { required: 'partial', price: 'Park free; festival may have a separate entry arrangement', how: ['Check current-year festival ticketing with VisitSaudi or local Yanbu tourism channels.'], links: [{ label: 'VisitSaudi', url: 'https://visitsaudi.com' }] },
      gettingThere: { airport: 'Yanbu (YNB)', road: 'Yanbu Al-Bahr, Red Sea coast.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'During the announced festival dates for the flower carpet; otherwise any time for the park', duration: '1–2 hours',
      dress: 'Casual; sun protection.',
      tips: ['Check the current year\'s festival dates before travelling specifically for the flower carpet.', 'Combine with Yanbu Lake Park and the historic Corniche on the same visit.']
    },
    {
      id: 'yanbu-lake-park', name: 'Yanbu Lake Park', nativeName: 'حديقة بحيرة ينبع',
      region: 'madinah', city: 'Yanbu', categories: ['nature'],
      coords: [24.0085, 38.2308],
      tagline: 'A landscaped park around an artificial lake in Yanbu.',
      overview: ['Yanbu Lake Park is a family-friendly green space built around an artificial lake, with walking paths, seating areas and birdlife, offering a quieter alternative to the busier Corniche.'],
      history: ['Developed as part of Yanbu\'s public parks network to add inland green space alongside the coastal attractions.'],
      religious: null,
      highlights: ['Artificial lake', 'Walking paths', 'Birdwatching', 'Evening family outings'],
      hours: { summary: 'Daily, roughly 08:00 until late evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Yanbu (YNB)', road: 'Yanbu Al-Sinaiyah area.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings', duration: '45 minutes – 1 hour',
      dress: 'Casual.',
      tips: ['A quieter, more local alternative to the main Corniche.']
    },
    {
      id: 'oyster-island-yanbu', name: 'Oyster Island, Yanbu', nativeName: 'جزيرة المحار',
      region: 'madinah', city: 'Yanbu', categories: ['coast'], approx: true,
      coords: [23.9988, 38.2028],
      tagline: 'A small Red Sea island getaway near Yanbu Al-Sinaiyah.',
      overview: ['Oyster Island is a small island off Yanbu\'s industrial coast, popular for a relaxed day out with barbecue spots, fishing and calm water, reached by a short boat ride from the mainland.'],
      history: ['One of several small islands along this stretch of coast that have been developed informally as local recreation spots, alongside the resorts of the Royal Commission for Yanbu area.'],
      religious: null,
      highlights: ['Short boat trip from the mainland', 'Barbecue and picnic spots', 'Fishing', 'Calm, sheltered water'],
      hours: { summary: 'Daytime; boat access depends on operators', details: [], note: 'Facilities are informal — bring your own supplies.' },
      tickets: { required: 'partial', price: 'Boat transfer fee', how: ['Arrange a boat crossing locally in Yanbu.'], links: [] },
      gettingThere: { airport: 'Yanbu (YNB)', road: 'Off the coast near Yanbu Al-Sinaiyah.', transport: 'Short boat ride from the mainland — arrange locally.' },
      bestTime: 'October – April', duration: 'Half a day',
      dress: 'Swimwear, sun protection, and gear for a picnic or barbecue.',
      tips: ['Arrange your boat and return time clearly with the operator before setting out.', 'Bring your own food, water and shade — facilities are minimal.']
    },
    {
      id: 'harrat-khaybar-volcanoes', name: 'Jabal Abyad & Jabal Qidr (Harrat Khaybar Volcanoes)', nativeName: 'جبل أبيض وجبل قدر',
      region: 'madinah', city: 'Khaybar', categories: ['nature'], approx: true,
      coords: [25.8500, 39.8500],
      tagline: 'A pale felsic dome and a dark basalt cone in Saudi Arabia\'s volcanic "black and white" field.',
      overview: [
        'Harrat Khaybar is a vast volcanic field northeast of Khaybar oasis, famous for the striking contrast between its dark basalt lava flows and a scatter of pale, light-coloured volcanic domes. Jabal Abyad ("White Mountain"), at about 2,093 m, is the highest volcano in Saudi Arabia, while nearby Jabal Qidr is a dark basalt cone about 322 m high with a crater roughly 400 m across.',
        'The contrast between the bright felsic domes and the surrounding black lava field — visible even from satellite images — makes this one of the most striking volcanic landscapes in Arabia.'
      ],
      history: ['Harrat Khaybar is one of several large volcanic fields (harrats) across western Saudi Arabia, formed by eruptions over the past several million years; some flows in the wider harrat system are geologically very recent.'],
      religious: null,
      highlights: ['Jabal Abyad — Saudi Arabia\'s highest volcano', 'Jabal Qidr basalt cone and crater', 'Black-and-white volcanic contrast', 'Remote, little-visited desert scenery'],
      hours: { summary: 'Open desert terrain, no gate or hours', details: [], note: 'No facilities, signage or marked trails — this is remote, off-road territory.' },
      tickets: { required: false, price: 'Free', how: ['No ticket; a 4x4 and an experienced guide are strongly advised.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz International (MED), Madinah', road: 'In the Harrat Khaybar volcanic field, roughly north-east of Khaybar town and about 130–140 km north-east of Madinah.', transport: '4x4 only, ideally with a local guide — there are no paved roads or facilities in the field.' },
      bestTime: 'November – February, avoiding summer heat', duration: 'Full day, including the approach drive',
      dress: 'Full desert gear: sturdy boots, sun protection, plenty of water and fuel.',
      tips: ['Do not attempt this without a capable 4x4 and, ideally, a local guide — the terrain is remote and unmarked.', 'Combine with a wider visit to Khaybar\'s oasis and fortress.', 'Coordinates are approximate — the field is large and the named peaks are spread across it.']
    },
    /* ======================= ROUND 3: MADINAH PROVINCE ======================= */
    {
      id: 'masjid-al-jumuah', name: 'Masjid al-Jumu\'ah (Friday Mosque)', nativeName: 'مسجد الجمعة',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage'], featured: true,
      muslimSite: true, coords: [24.4470, 39.6150], wiki: 'https://en.wikipedia.org/wiki/Al_Jum%27ah_Mosque',
      tagline: 'Where the Prophet ﷺ led the first Friday prayer in Islam.',
      overview: [
        'Masjid al-Jumu\'ah is the historic mosque in Madinah marking the site where Prophet Muhammad ﷺ led the first Friday (Jumu\'ah) congregational prayer in Islamic history. It stands on Tariq As-Salam in the Quba area, about 900 m north of Masjid Quba.',
        'Much smaller and quieter than the city\'s main mosques, it offers a peaceful setting for prayer and reflection, and many visitors stop here while walking the Quba Walkway between Masjid Quba and Al-Masjid an-Nabawi.'
      ],
      history: [
        'During the Hijrah from Makkah to Madinah in 1 AH (622 CE), the Prophet ﷺ stayed in Quba for several days and then continued towards the city on a Friday.',
        'When he reached the valley of Wadi Ranuna, in the area of the Banu Salim ibn \'Awf, the people asked him to stop. There he delivered the first Jumu\'ah sermon (khutbah) and led around 100 companions in prayer.',
        'Over the centuries the mosque has also been known as Masjid Bani Salim, Masjid al-Wadi, Masjid al-Qubayb and Masjid \'Atikah. First built of stone, it was renovated many times; the current white building was expanded and reopened in 1991.',
        'Archaeological work in front of the mosque has uncovered ancient remains and stone inscriptions, which local sources associate with a companion of the Prophet ﷺ from the Banu Salim.'
      ],
      religious: [
        'Jumu\'ah is a weekly obligation for Muslim men, and this mosque marks the very first one led by the Prophet ﷺ — a moment that established the Friday congregation and sermon as a pillar of Muslim community life.',
        'Visiting it is a meaningful stop on the Hijrah route, often combined with Masjid Quba, about which the Prophet ﷺ said praying two rak\'ahs there brings the reward of an Umrah.'
      ],
      highlights: [
        'Site of the first Jumu\'ah prayer and sermon',
        'White mosque with one main dome, four smaller domes and a tall minaret',
        'Capacity of about 650 worshippers',
        'Women\'s prayer hall, library and Qur\'an memorisation school',
        'On the Quba Walkway between Quba and the Prophet\'s Mosque'
      ],
      hours: { summary: 'Open 24 hours, daily', details: ['Quietest outside the five prayer times'], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking needed.'], links: [] },
      access: 'The interior is for Muslim visitors; others may view the exterior.',
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'Tariq As-Salam, Al-Jumu\'ah district, about 900 m north of Masjid Quba; wheelchair-accessible parking.', transport: 'Taxi, Madinah buses, or walk along the Quba Walkway from Quba Mosque (about 10–15 minutes).' },
      bestTime: 'Morning, or on the walk between Quba and the Prophet\'s Mosque', duration: '30 minutes',
      dress: 'Modest clothing; women cover their hair. Remove shoes before entering.',
      tips: [
        'Combine with Masjid Quba and the Prophet\'s Mosque on a walking ziyarat.',
        'Wheelchair-accessible entrances and restrooms are available.'
      ]
    },
    {
      id: 'dar-al-madinah', name: 'Dar Al Madinah Museum', nativeName: 'متحف دار المدينة',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage'],
      coords: [24.4767, 39.6877], 
      tagline: 'The history of Madinah and the Prophet\'s ﷺ era in models and artefacts.',
      overview: ['Dar Al Madinah is a museum about the city\'s history, with detailed models of the Prophet\'s Mosque through the ages, the Prophet\'s ﷺ house, old Madinah, coins, manuscripts and Hejaz railway memorabilia.'],
      history: ['Opened in 2011 within the Knowledge Economic City area.'],
      religious: ['Galleries explain the Seerah (life of the Prophet ﷺ), the early Muslim community and the development of the Prophet\'s Mosque.'],
      highlights: ['Model of the Prophet\'s Mosque in 622 CE', 'Old Madinah model', 'Rare manuscripts'],
      hours: { summary: 'Typically Sat – Thu, morning and evening', details: [], note: 'Check hours locally.' },
      tickets: { required: true, price: 'Paid entry (small fee)', how: ['Buy at the entrance.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'About 10 minutes by car from the Prophet\'s Mosque.', transport: 'Taxi.' },
      bestTime: 'Any time', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['Great introduction before visiting Madinah\'s historic sites.']
    },
    {
      id: 'wadi-al-jinn', name: 'Wadi al-Jinn (Wadi al-Baida "Gravity Hill")', nativeName: 'وادي الجن (وادي البيضاء)',
      region: 'madinah', city: 'Madinah', categories: ['nature'],
      approx: true, coords: [24.6700, 39.3700], wiki: 'https://en.wikipedia.org/wiki/Wadi_Al_Baida',
      tagline: 'A desert valley where cars in neutral seem to roll uphill.',
      overview: [
        'Wadi al-Jinn — officially Wadi al-Baida — is a desert valley about 30 km north-west of Madinah, inside Al-Baida Park. It is famous as a "gravity hill", where vehicles left in neutral appear to roll uphill by themselves and even pick up speed.',
        'Beyond the illusion, the valley\'s rugged mountains and open desert make it a popular weekend picnic spot, with quad-bike rentals and camel rides.'
      ],
      history: [
        'The name "Valley of the Jinn" comes from Arabian folklore, which blamed supernatural spirits for the strange movement of cars and the echoing desert winds.',
        'Another popular myth says the volcanic mountains are magnetic and pull metal cars upward. Scientific assessments have found no magnetic anomaly: the effect is a classic gravity-hill optical illusion. The surrounding mountains hide the true horizon, so a gentle downhill slope looks like an uphill one.'
      ],
      religious: [
        'Local authorities and religious scholars clarify that the site has no supernatural activity and no special religious status — it is a natural optical illusion, not a place of worship or ziyarat.'
      ],
      highlights: [
        'Car "rolling uphill" optical illusion',
        'Rugged mountain and desert scenery',
        'Quad bikes and camel rides',
        'Family picnic areas in Al-Baida Park'
      ],
      hours: { summary: 'Open at all times; best in daylight', details: ['Very busy on weekends'], note: '' },
      tickets: { required: false, price: 'Free entry (quad bikes and camel rides paid)', how: ['No ticket needed.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'Paved road about 30–40 minutes north-west of central Madinah.', transport: 'Car, taxi or ziyarat tour.' },
      bestTime: 'Early morning or late afternoon, November – January', duration: '1–2 hours',
      dress: 'Casual modest clothes, sun hat.',
      tips: [
        'Only test the illusion when the road is clear — cars in neutral can gain real speed.',
        'Never stop in the middle of active traffic lanes.',
        'Avoid midday heat and weekend crowds.'
      ]
    },
    {
      id: 'sharaan', name: 'Sharaan Nature Reserve', nativeName: 'محمية شرعان الطبيعية',
      region: 'madinah', city: 'AlUla', categories: ['nature'],
      coords: [26.8663, 38.2442],
      tagline: 'Protected canyons where Arabian leopards and ibex are being restored.',
      overview: ['Sharaan is a large protected area south-east of AlUla, with sandstone canyons, volcanic plateaus and acacia valleys. It is the focus of programmes to reintroduce Arabian oryx, gazelles and ibex, and to protect the critically endangered Arabian leopard.'],
      history: ['Established by the Royal Commission for AlUla in 2019.'],
      religious: null,
      highlights: ['Guided wildlife drives', 'Canyon hikes', 'Stargazing'],
      hours: { summary: 'Guided experiences only', details: [], note: 'Independent entry is not allowed.' },
      tickets: { required: true, price: 'Tour price varies', how: ['Book activities through Experience AlUla.'], links: [{ label: 'Experience AlUla', url: 'https://www.experiencealula.com' }] },
      gettingThere: { airport: 'AlUla International (ULH)', road: 'South-east of AlUla town.', transport: 'Tour transport.' },
      bestTime: 'October – March', duration: 'Half a day', dress: 'Hiking gear.', tips: ['Morning tours give the best chance to see wildlife.']
    },
    {
      id: 'gharameel', name: 'Gharameel Nature Reserve (Rock Pillars & Stargazing)', nativeName: 'محمية الغراميل',
      region: 'madinah', city: 'AlUla', categories: ['nature'], featured: true,
      approx: true, coords: [27.1500, 37.9800],
      tagline: 'Surreal sandstone pillars and one of the darkest night skies in the Middle East.',
      overview: [
        'Gharameel (Al-Gharameel) is a field of dramatic sandstone rock pillars about 60 km — roughly a 1 to 1.5-hour drive — north of AlUla, inside the Gharameel Nature Reserve.',
        'Some spires rise up to about 40 m, in colours from golden yellow to deep red. At sunset the pillars cast long shadows across the sand, and after dark the reserve becomes one of the region\'s best places for stargazing.'
      ],
      history: [
        'The pillars are remnants of a vast ancient sandstone plateau that once covered north-west Arabia. Over millions of years wind, rain and flash floods eroded the softer rock around them, leaving isolated narrow columns.',
        'Some rocks bear ancient petroglyphs and inscriptions, and there are small natural caves among the formations.',
        'In 2024 DarkSky International certified Gharameel Nature Reserve (together with AlUla Manara) among the first Dark Sky Places in Saudi Arabia and the Gulf. Light pollution here is extremely low (around Bortle class 1–2), giving clear views of the Milky Way.'
      ],
      religious: null,
      highlights: [
        'Sandstone pillars up to ~40 m tall',
        'Sunset among the rock columns',
        'Certified Dark Sky stargazing — Milky Way views',
        'Guided astronomy storytelling',
        'Bedouin-style campfire dinner',
        'Ancient petroglyphs and inscriptions'
      ],
      hours: { summary: 'Guided evening tours: daily Oct – Mar; Thu – Sun Apr – Sep', details: ['Tours usually start in the late afternoon to catch sunset'], note: 'Schedules can change — check when booking.' },
      tickets: { required: true, price: 'Guided tour (price varies by operator and package)', how: ['Self-driving into the reserve is not allowed, to protect the desert ecosystem.', 'Book an authorised 4x4 tour — options are listed on VisitSaudi and Experience AlUla.', 'Most tours include pick-up, sunset, dinner and guided stargazing.'], links: [{ label: 'VisitSaudi – Gharameel', url: 'https://www.visitsaudi.com/en/alula/attractions/algharameel-in-alula' }, { label: 'Experience AlUla', url: 'https://www.experiencealula.com' }] },
      gettingThere: { airport: 'AlUla International (ULH)', road: 'About 60 km north of AlUla; access only with authorised 4x4 tours.', transport: 'Tour transport from AlUla.' },
      bestTime: 'October – March; moonless nights for the best stars', duration: '4–5 hours (evening tour)',
      dress: 'Warm layers — desert nights get very cold, especially in winter — and closed walking shoes.',
      tips: [
        'Check the moon phase: new-moon nights give the darkest skies.',
        'Bring a camera with a tripod for night photography.',
        'Do not climb on the pillars or touch the inscriptions.',
        'Combine with Hegra and Elephant Rock during your AlUla stay.'
      ]
    },

    /* ======================= ROUND 3: RIYADH PROVINCE ======================= */
    {
      id: 'al-faisaliah', name: 'Al Faisaliah Tower', nativeName: 'برج الفيصلية',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.6903, 46.6853], 
      tagline: 'Riyadh\'s first skyscraper with a golden glass globe.',
      overview: ['The 267 m Al Faisaliah Tower is crowned by a golden glass globe containing a restaurant with panoramic views. The complex includes a hotel and shopping centre.'],
      history: ['Designed by Foster + Partners and completed in 2000, it was the first skyscraper in Saudi Arabia.'],
      religious: null,
      highlights: ['The Globe restaurant', 'City views', 'Mall'],
      hours: { summary: 'Restaurant/viewing typically afternoon to late evening', details: [], note: 'Access to the globe is usually via dining reservation.' },
      tickets: { required: 'partial', price: 'Dining reservation', how: ['Reserve the Globe restaurant in advance.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Olaya district, King Fahd Road.', transport: 'Riyadh Metro or taxi.' },
      bestTime: 'Sunset', duration: '1–2 hours', dress: 'Smart casual.', tips: ['Combine with Kingdom Centre for two skyline views.']
    },
    {
      id: 'wadi-namar', name: 'Wadi Namar Park & Waterfall', nativeName: 'منتزه وادي نمار',
      region: 'riyadh', city: 'Riyadh', categories: ['nature'],
      coords: [24.5683, 46.6806],
      tagline: 'A lake, waterfall and cliffs in south Riyadh.',
      overview: ['Wadi Namar is a park beside a dam lake framed by limestone cliffs, with a walking track, a seasonal waterfall and picnic areas. It is popular with families in the evening.'],
      history: ['Part of Riyadh\'s programme to turn valleys into green public spaces.'],
      religious: null,
      highlights: ['Lake and dam', 'Waterfall (after rains)', 'Walking track'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'South-west Riyadh.', transport: 'Car or taxi.' },
      bestTime: 'Winter evenings', duration: '1–2 hours', dress: 'Casual.', tips: ['Weekends are crowded.']
    },
    {
      id: 'thumamah', name: 'Al-Thumamah National Park', nativeName: 'متنزه الثمامة',
      region: 'riyadh', city: 'Riyadh', categories: ['nature'],
      approx: true, coords: [25.0700, 46.6600],
      tagline: 'Desert park and camping area north of Riyadh.',
      overview: ['Thumamah is a large desert area north of Riyadh with sand dunes, acacia trees, campsites and spring wildflowers. It is a favourite winter escape for desert picnics and camping.'],
      history: ['Protected as a national park to restore native vegetation near the capital.'],
      religious: null,
      highlights: ['Desert camping', 'Spring wildflowers', 'Quad and buggy rentals'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free (rentals paid)', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 40 minutes north of central Riyadh.', transport: 'Car.' },
      bestTime: 'November – March', duration: 'Half a day', dress: 'Warm layers at night.', tips: ['Take all your rubbish home.']
    },
    {
      id: 'al-ghat', name: 'Al-Ghat Heritage Village', nativeName: 'قرية الغاط التراثية',
      region: 'riyadh', city: 'Al-Ghat', categories: ['heritage'],
      coords: [26.0286, 44.9508], wiki: 'https://en.wikipedia.org/wiki/Al-Ghat',
      tagline: 'A beautifully preserved Najdi village under a dramatic escarpment.',
      overview: ['Al-Ghat\'s old town is a large mud-brick village beneath the cliffs of the Tuwaiq escarpment, with restored houses, a museum, mosques and palm groves.'],
      history: ['A historic town on the routes of northern Najd; the restored village was developed as a heritage destination.'],
      religious: null,
      highlights: ['Old village alleys', 'Escarpment views', 'Heritage museum'],
      hours: { summary: 'Daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 3 hours north-west of Riyadh.', transport: 'Car.' },
      bestTime: 'November – March', duration: '2 hours', dress: 'Modest clothes.', tips: ['Climb the escarpment viewpoint at sunset.']
    },

    /* ======================= ROUND 2: EASTERN PROVINCE ======================= */
    {
      id: 'qasr-sahood', name: 'Qasr Sahood, Al-Mubarraz', nativeName: 'قصر صاهود',
      region: 'eastern', city: 'Al-Mubarraz, Al-Ahsa', categories: ['heritage'],
      coords: [25.4142, 49.5833],
      tagline: 'A 17th-century mud-brick fort in Al-Ahsa\'s twin city.',
      overview: ['Qasr Sahood is a historic mud-brick fort in Al-Mubarraz, one of the two main towns of the Al-Ahsa oasis alongside Hofuf, built in the traditional Najdi defensive style with thick walls and corner towers.'],
      history: ['Built in the 17th century as a defensive residence, Qasr Sahood is one of several fortified mud structures that once protected the farms and settlements of the Al-Ahsa oasis.'],
      religious: null,
      highlights: ['Mud-brick fortification walls', 'Traditional Najdi defensive architecture', 'A quieter heritage stop away from central Hofuf'],
      hours: { summary: 'Check current access — may be under restoration or limited opening', details: [], note: 'Confirm whether the interior is open before a special visit.' },
      tickets: { required: false, price: 'Free if accessible', how: ['Confirm current access locally.'], links: [] },
      gettingThere: { airport: 'Al-Ahsa International (HOF)', road: 'Al-Mubarraz, Al-Ahsa.', transport: 'Taxi or ride-hailing from Hofuf.' },
      bestTime: 'November – March', duration: '30–45 minutes',
      dress: 'Casual.',
      tips: ['Combine with Ibrahim Palace and Qasr Khuzam on an Al-Ahsa heritage day.']
    },
    {
      id: 'qasr-khuzam', name: 'Qasr Khuzam, Hofuf', nativeName: 'قصر خزام',
      region: 'eastern', city: 'Hofuf, Al-Ahsa', categories: ['heritage'],
      coords: [25.3681, 49.5769],
      tagline: 'An 18th-century fort that once guarded the gateway to Al-Ahsa.',
      overview: ['Qasr Khuzam is a historic fort in Hofuf, built in 1793 to help defend the approaches to the Al-Ahsa oasis, with the thick mud-brick walls and watchtowers typical of the region\'s historic defensive architecture.'],
      history: ['Constructed in the late 18th century as part of the oasis\'s defensive network, guarding routes into what was one of the richest agricultural settlements in eastern Arabia.'],
      religious: null,
      highlights: ['18th-century fortification', 'Traditional mud-brick construction', 'A glimpse of Al-Ahsa\'s historic defences'],
      hours: { summary: 'Check current access', details: [], note: 'Confirm whether the interior is open before a special visit.' },
      tickets: { required: false, price: 'Free if accessible', how: ['Confirm current access locally.'], links: [] },
      gettingThere: { airport: 'Al-Ahsa International (HOF)', road: 'Central Hofuf, Al-Ahsa.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'November – March', duration: '30 minutes',
      dress: 'Casual.',
      tips: ['Combine with Ibrahim Palace and Souq Al-Qaisariya in central Hofuf.']
    },
    {
      id: 'king-abdullah-park-ahsa', name: 'King Abdullah Environmental Park, Al-Ahsa', nativeName: 'منتزه الملك عبدالله البيئي',
      region: 'eastern', city: 'Hofuf, Al-Ahsa', categories: ['nature', 'modern'], featured: true,
      coords: [25.3207, 49.5565],
      tagline: 'A huge green park with a lake and one of the region\'s biggest musical fountain shows.',
      overview: ['King Abdullah Environmental Park, south of Hofuf, combines wide lawns and gardens with a central lake where an evening musical fountain show draws large crowds, plus play areas and walking paths for family visits.'],
      history: ['Developed as a major public green space for Al-Ahsa, reflecting the oasis\'s long tradition of palm cultivation with modern landscaped parkland.'],
      religious: null,
      highlights: ['Evening musical fountain show on the central lake', 'Entrance fountains', 'Wide lawns and walking paths', 'Children\'s play areas'],
      hours: { summary: 'Daily, afternoon until late evening; fountain show typically after sunset', details: [], note: 'Confirm current fountain show timing locally.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Al-Ahsa International (HOF)', road: 'South of Hofuf on the Hofuf–Mubarraz ring road.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings, year-round', duration: '1.5 hours',
      dress: 'Casual.',
      tips: ['Time your visit for the evening fountain show.', 'Combine with the Al-Ahsa oasis and Jabal Al-Qarah on the same day.']
    },
    {
      id: 'king-fahd-park-dammam', name: 'King Fahd Park, Dammam', nativeName: 'منتزه الملك فهد',
      region: 'eastern', city: 'Dammam', categories: ['nature', 'modern'], featured: true,
      coords: [26.3936, 50.1252],
      tagline: 'A huge green park between Dammam and Khobar, with a lake and the Cobra amusement rides.',
      overview: ['King Fahd Park is one of the Eastern Province\'s largest public parks, with a lake, extensive lawns and gardens, and the Cobra Amusement Park — a family ride area — inside its grounds. It sits roughly between Dammam, Khobar and Dhahran.'],
      history: ['Developed as a major regional park serving the whole Dammam metropolitan area, it has grown to include dedicated amusement and event spaces alongside its original green landscaping.'],
      religious: null,
      highlights: ['Central lake', 'Cobra Amusement Park rides', 'Wide lawns and gardens', 'Family picnic areas'],
      hours: { summary: 'Daily, roughly 08:00 until late evening', details: ['The Cobra Amusement Park keeps its own, shorter hours'], note: '' },
      tickets: { required: 'partial', price: 'Park free; amusement rides charge per ride or a wristband', how: ['Pay for rides at the amusement area.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Between Dammam, Khobar and Dhahran.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings, year-round', duration: '1.5–2 hours',
      dress: 'Casual.',
      tips: ['A good family outing combining a park walk with amusement rides.']
    },
    {
      id: 'dammam-regional-museum', name: 'Dammam Regional Museum', nativeName: 'متحف المنطقة الشرقية',
      region: 'eastern', city: 'Dammam', categories: ['heritage', 'modern'], approx: true,
      coords: [26.4500, 50.1000],
      tagline: 'Archaeology and heritage of the Eastern Province, on the Dammam waterfront.',
      overview: ['The Dammam Regional Museum covers the archaeology, history and culture of the Eastern Province, including a heritage hall of artefacts, coins and pottery, located within the King Abdullah Park waterfront development.'],
      history: ['Development of the museum began with a cornerstone laid in 2011 as part of the King Abdullah Park waterfront project, bringing the region\'s archaeological and historical collections together in one purpose-built venue.'],
      religious: null,
      highlights: ['Eastern Province archaeology', 'Heritage hall of coins and pottery', 'Waterfront setting within King Abdullah Park'],
      hours: { summary: 'Check current museum hours', details: [], note: 'Confirm the museum is open — phases of this project have taken time to complete.' },
      tickets: { required: true, price: 'Low entry fee (check current rate)', how: ['Pay at the museum.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'On the Dammam Corniche / King Abdullah Park waterfront.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time', duration: '1–1.5 hours',
      dress: 'Casual.',
      tips: ['Combine with a walk along the Dammam Corniche and Marjan Island.']
    },
    {
      id: 'souq-al-hob', name: 'Souq Al-Hob, Dammam', nativeName: 'سوق الحب',
      region: 'eastern', city: 'Dammam', categories: ['heritage', 'modern'],
      coords: [26.4471, 50.1024],
      tagline: 'A traditional Dammam market for gold, perfume and local clothing.',
      overview: ['Souq Al-Hob is a well-known traditional market in central Dammam, with small shops selling gold and jewellery, perfume and attar, fabric and traditional clothing at local prices.'],
      history: ['One of Dammam\'s longer-established commercial souqs, predating the city\'s large modern malls.'],
      religious: null,
      highlights: ['Gold and jewellery shops', 'Perfume and attar', 'Traditional clothing and fabric', 'Bargaining-friendly prices'],
      hours: { summary: 'Daily, morning to evening; closed briefly at prayer times', details: [], note: 'Busiest in the evening.' },
      tickets: { required: false, price: 'Free to browse', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Al-Dawasir area, central Dammam.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings', duration: '1 hour',
      dress: 'Modest clothing.',
      tips: ['Bargaining is normal and expected.']
    },
    {
      id: 'scitech-khobar', name: 'SciTech (Sultan bin Abdulaziz Science & Technology Center)', nativeName: 'مركز سلطان بن عبدالعزيز للعلوم والتقنية',
      region: 'eastern', city: 'Khobar', categories: ['modern'], featured: true,
      coords: [26.3192, 50.2280],
      tagline: 'A science museum, aquarium and IMAX theatre on the Khobar Corniche.',
      overview: ['SciTech combines an interactive science museum with an aquarium of Red Sea and Gulf marine life and an IMAX theatre, making it one of the Eastern Province\'s most popular family attractions.'],
      history: ['Established to bring hands-on science education and large-format cinema to the Eastern Province, on the Khobar waterfront.'],
      religious: null,
      highlights: ['Interactive science exhibits', 'Aquarium of Gulf and Red Sea marine life', 'IMAX theatre', 'Corniche-front location'],
      hours: { summary: 'Daily; check current hours', details: ['IMAX showtimes run on their own schedule'], note: '' },
      tickets: { required: true, price: 'Entry fee; IMAX tickets separate', how: ['Buy at the centre or check for online booking.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'On the Khobar Corniche.', transport: 'Taxi or ride-hailing; walkable from the Corniche.' },
      bestTime: 'Any time', duration: '2–3 hours',
      dress: 'Casual.',
      tips: ['Combine with a Khobar Corniche walk and the Water Tower.', 'Check the IMAX schedule in advance if a film is part of your plan.']
    },
    {
      id: 'ajdan-walk', name: 'Ajdan Walk, Khobar', nativeName: 'أجدان ووك',
      region: 'eastern', city: 'Khobar', categories: ['modern', 'coast'],
      coords: [26.2829, 50.2210],
      tagline: 'An open-air waterfront dining and lifestyle complex on the Khobar Corniche.',
      overview: ['Ajdan Walk is a modern open-air development of cafés, restaurants and shops along the Khobar waterfront, popular for evening dining with sea views.'],
      history: ['Part of the wave of waterfront lifestyle developments built along the Khobar Corniche in recent years.'],
      religious: null,
      highlights: ['Waterfront dining', 'Cafés and shops', 'Evening sea views', 'A fashionable Khobar evening spot'],
      hours: { summary: 'Daily, afternoon until late', details: [], note: ''},
      tickets: { required: false, price: 'Free to enter; dining is paid', how: ['No ticket needed.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Khobar North, on the Corniche.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings', duration: '1–2 hours',
      dress: 'Smart casual.',
      tips: ['Book ahead for a sea-view table on weekend evenings.']
    },
    {
      id: 'taybeen-museum', name: 'Taybeen Museum, Khobar', nativeName: 'متحف طيبين',
      region: 'eastern', city: 'Khobar', categories: ['heritage', 'modern'],
      coords: [26.1671, 50.1452],
      tagline: 'A nostalgic collection of vintage toys, adverts and everyday memorabilia.',
      overview: ['Taybeen Museum is a small private museum celebrating everyday Saudi nostalgia, with vintage toys, old advertisements, packaging and household items from the 1970s, 80s and 90s.'],
      history: ['Built up as a personal collection to preserve the everyday material culture of recent Saudi history, the kind of objects that rarely survive in formal archives.'],
      religious: null,
      highlights: ['Vintage toys', 'Old advertisements and packaging', 'Everyday household nostalgia', 'A fun, personal take on recent history'],
      hours: { summary: 'Check current opening hours — a private museum', details: [], note: '' },
      tickets: { required: true, price: 'Entry fee (check current rate)', how: ['Pay at the museum.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Al-Shira\' area, Khobar.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time, subject to opening hours', duration: '45 minutes',
      dress: 'Casual.',
      tips: ['A fun, nostalgic stop — especially memorable for Saudi visitors who grew up with these objects.']
    },
    {
      id: 'al-rashid-mall-khobar', name: 'Al Rashid Mall, Khobar (and Mall of Dhahran)', nativeName: 'الراشد مول',
      region: 'eastern', city: 'Khobar', categories: ['modern'],
      coords: [26.2909, 50.1809],
      tagline: 'One of the Eastern Province\'s largest shopping and entertainment malls.',
      overview: ['Al Rashid Mall in Khobar is one of the biggest shopping centres in the Eastern Province, with international and local retail brands, a large food court, a cinema and family entertainment. The Mall of Dhahran, a short drive away, offers similar large-format shopping for the Dhahran side of the metropolitan area.'],
      history: ['Part of the Eastern Province\'s growth of large-format retail serving Khobar, Dhahran and Dammam together as one urban area.'],
      religious: null,
      highlights: ['Retail brands and food court', 'Cinema', 'Family entertainment', 'Easy access from Khobar and Dhahran'],
      hours: { summary: 'Daily, roughly 10:00 until midnight', details: [], note: 'Shops pause briefly at prayer times.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Al-Ulaya district, Khobar.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time', duration: '1–2 hours',
      dress: 'Modest casual.',
      tips: ['Mall of Dhahran is a separate mall a short drive away if you want a second stop.']
    },
    {
      id: 'iskan-park-khobar', name: 'Iskan Park, Khobar', nativeName: 'حديقة الإسكان',
      region: 'eastern', city: 'Khobar', categories: ['nature'],
      coords: [26.2640, 50.2101],
      tagline: 'A wide, popular family park in central Khobar.',
      overview: ['Iskan Park is one of Khobar\'s larger neighbourhood parks, with open lawns, walking paths and play areas, well used by local families in the evenings.'],
      history: ['A long-standing public park serving the Iskan residential district of Khobar.'],
      religious: null,
      highlights: ['Open lawns', 'Walking paths', 'Children\'s play areas', 'A genuinely local family spot'],
      hours: { summary: 'Daily, roughly 08:00 until late evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Central Khobar.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings', duration: '45 minutes',
      dress: 'Casual.',
      tips: ['More a local park than a tourist sight — pleasant if you are staying nearby.']
    },
    {
      id: 'souq-al-khamis-qatif', name: 'Souq Al-Khamis, Qatif', nativeName: 'سوق الخميس',
      region: 'eastern', city: 'Qatif', categories: ['heritage'], featured: true,
      coords: [26.5569, 49.9992],
      tagline: 'A centuries-old weekly market in the heart of old Qatif.',
      overview: ['Souq Al-Khamis ("Thursday Market") is a historic covered market in Qatif\'s old quarter, with narrow lanes of small shops selling spices, textiles, household goods and local produce — one of the oldest continuously used markets in the Eastern Province.'],
      history: ['The market has served Qatif\'s farming and fishing communities for centuries, traditionally busiest on Thursdays, which gives it its name.'],
      religious: null,
      highlights: ['Historic covered market lanes', 'Spices and local produce', 'Textiles and household goods', 'A genuinely old working market'],
      hours: { summary: 'Daily, busiest on Thursdays; mornings and evenings', details: [], note: '' },
      tickets: { required: false, price: 'Free to browse', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Old Qatif, Bab Al-Shamal area.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Thursday mornings for the busiest market day', duration: '1 hour',
      dress: 'Modest clothing.',
      tips: ['Visit on a Thursday for the market at its most lively.', 'Combine with Tarout Castle and Qatif Corniche on the same day.']
    },
    {
      id: 'qatif-corniche', name: 'Qatif Corniche & Al-Fanar Park', nativeName: 'كورنيش القطيف والفنار',
      region: 'eastern', city: 'Qatif', categories: ['coast', 'modern'], approx: true,
      coords: [26.5584, 50.0325],
      tagline: 'A waterfront promenade and family park on the Qatif coast.',
      overview: ['Qatif\'s Corniche gives a quieter alternative to the busier Dammam and Khobar waterfronts, with walking paths, Al-Fanar Park\'s green space and play areas, and views over the shallow waters towards Tarout Island.'],
      history: ['Developed as part of Qatif\'s public waterfront space alongside the historic old town and its markets.'],
      religious: null,
      highlights: ['Waterfront walking path', 'Al-Fanar Park', 'Views towards Tarout Island', 'A quieter family corniche'],
      hours: { summary: 'Daily, roughly 08:00 until late evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Qatif waterfront.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings', duration: '1 hour',
      dress: 'Casual.',
      tips: ['Combine with Souq Al-Khamis and Tarout Castle on the same day.']
    },
    {
      id: 'darin-castle', name: 'Darin Castle, Tarout Island', nativeName: 'قلعة الدارين',
      region: 'eastern', city: 'Darin, Tarout Island', categories: ['heritage', 'archaeology'], approx: true,
      coords: [26.5450, 50.0700],
      tagline: 'A fort at the old pearl-trading port on the southern tip of Tarout Island.',
      overview: ['Darin Castle stands in the small town of Darin at the southern end of Tarout Island, once a busy port for the Gulf pearl trade, alongside the Darin archaeological excavation site that has revealed layers of settlement going back thousands of years.'],
      history: ['Tradition links the castle\'s construction to the Portuguese presence in the Gulf in the 16th century, though its exact origins are debated. In the 1880s it was restored by a local notable, Al-Faihani, and under Ottoman administration (1871–1912) it served mainly as a customs post. Restoration of Darin Castle and the nearby historic airport as heritage sites has been planned in recent years.'],
      religious: null,
      highlights: ['Historic fort at the old pearling port', 'Darin archaeological excavation site nearby', 'Views over the channel to the mainland', 'A quieter counterpart to Tarout Castle'],
      hours: { summary: 'Check current access — restoration work has been planned for the site', details: [], note: 'Confirm current condition and access before a special visit.' },
      tickets: { required: false, price: 'Free if accessible', how: ['Confirm current access locally.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Darin, the southern tip of Tarout Island.', transport: 'Car, via the causeways linking Tarout Island to the mainland.' },
      bestTime: 'November – March', duration: '30–45 minutes',
      dress: 'Casual.',
      tips: ['Combine with Tarout Castle on the main part of the island.', 'As restoration plans develop, check current access before visiting.']
    },
    {
      id: 'jana-kurayn-islands', name: 'Jana & Kurayn Islands', nativeName: 'جزيرتا جانا وكرين',
      region: 'eastern', city: 'Jubail', categories: ['coast', 'nature'], approx: true,
      coords: [27.3694, 49.8981],
      tagline: 'Protected Gulf islands with coral reefs, popular for diving trips from Jubail.',
      overview: ['Jana and Kurayn are small natural islands in the Gulf off the Jubail coast, fringed by coral reefs that are among the best diving and snorkelling spots in the Eastern Province, reached by boat charter.'],
      history: ['Both islands are protected natural areas valued for their coral reef ecosystems, accessible mainly through organised dive and snorkel trips rather than public ferries.'],
      religious: null,
      highlights: ['Coral reef diving and snorkelling', 'Calm, clear Gulf water', 'Boat day trips from Jubail', 'Relatively undeveloped natural islands'],
      hours: { summary: 'Boat trips run by arrangement, mainly in calm-weather months', details: [], note: 'No scheduled public ferry — trips are organised through dive operators or private charter.' },
      tickets: { required: 'partial', price: 'Boat charter and/or dive trip cost', how: ['Book through a licensed dive centre or boat charter in Jubail.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Offshore from Jubail Industrial City.', transport: 'Boat charter from Jubail — arrange in advance.' },
      bestTime: 'April – October for calmer seas and good visibility', duration: 'Full day',
      dress: 'Swimwear, sun protection, and dive or snorkel gear.',
      tips: ['Book a reputable dive operator rather than an informal boat for safety.', 'Confirm current access and any permit requirements before travelling.']
    },
    {
      id: 'jubail-church', name: 'Jubail Church', nativeName: 'كنيسة الجبيل',
      region: 'eastern', city: 'Jubail', categories: ['archaeology', 'heritage'],
      coords: [26.9374, 49.6565], wiki: 'https://en.wikipedia.org/wiki/Jubail_Church',
      tagline: 'The remains of an early Christian church on the Gulf coast.',
      overview: ['Jubail Church is an archaeological site preserving the foundations of an early Christian church, discovered in 1986 and excavated the following year — evidence of the Church of the East\'s historic presence on the Arabian Gulf coast before the arrival of Islam.'],
      history: ['Sources differ on the exact date, placing it in either the 4th or 7th century CE. It belonged to the Church of the East (sometimes called Nestorian Christianity), which had a significant presence around the Gulf in late antiquity, similar to related sites recently found across the water in Bahrain.'],
      religious: ['One of the rare physical traces of pre-Islamic Christian communities on the Arabian Gulf coast, illustrating the region\'s long history of religious diversity before Islam.'],
      highlights: ['Foundations of an early Christian church', 'Rare pre-Islamic religious archaeology in the Gulf', 'A quiet, little-visited site'],
      hours: { summary: 'Access requires advance permission from local authorities', details: [], note: 'Not a casual walk-in site — arrange a visit ahead of time.' },
      tickets: { required: true, price: 'No fee, but permission required', how: ['Arrange access in advance through local heritage authorities or a licensed tour operator.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Near Jubail Industrial City.', transport: 'Car, with prior arranged access.' },
      bestTime: 'November – March', duration: '30–45 minutes',
      dress: 'Casual.',
      tips: ['Arrange permission well ahead of your visit — this is not an open-access site.', 'A good addition for visitors specifically interested in the region\'s pre-Islamic history.']
    },
    {
      id: 'hafar-al-batin', name: 'Hafar Al-Batin & Qaysumah', nativeName: 'حفر الباطن والقيصومة',
      region: 'eastern', city: 'Hafar Al-Batin', categories: ['nature'],
      coords: [28.4328, 45.9628],
      tagline: 'A northern desert town known for spring greenery and truffle season.',
      overview: ['Hafar Al-Batin, in the far north of the Eastern Province near the Kuwaiti and Iraqi borders, sits in a historically important wadi (Wadi al-Batin). After winter rains the surrounding desert and the nearby Qaysumah area turn green with seasonal pasture, drawing campers and truffle hunters.'],
      history: ['The town grew around its position on an old caravan and trade route along Wadi al-Batin, and has long served as a market and transit point for the northern desert region.'],
      religious: null,
      highlights: ['Seasonal green desert pasture after rain', 'Truffle (faga) hunting season', 'Desert camping', 'A genuinely remote northern Eastern Province town'],
      hours: { summary: 'Open at all times; the green season is roughly February – April, weather-dependent', details: [], note: 'A dry winter can mean little or no greenery — check conditions before travelling specifically for this.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Hafr Al-Batin domestic airport, or King Fahd International (DMM) with a long drive', road: 'Far north of the Eastern Province, near the Kuwait and Iraq borders.', transport: 'Car; this is a long drive from Dammam (around 4 hours).' },
      bestTime: 'February – April, after good winter rain', duration: 'Full day, or an overnight camp',
      dress: 'Warm layers for desert nights, plus sun protection by day.',
      tips: ['Confirm recent rainfall and greenery before making the long drive.', 'This is a border region — carry identification.']
    },
    /* ======================= ROUND 3: EASTERN PROVINCE ======================= */
    {
      id: 'qaisariya-souq', name: 'Al-Qaisariya Souq, Hofuf', nativeName: 'سوق القيصرية',
      region: 'eastern', city: 'Hofuf', categories: ['heritage'], unesco: true, featured: true,
      coords: [25.3797, 49.5867],
      tagline: 'One of the oldest covered markets in the Gulf — bishts, dates, spices and oud.',
      overview: [
        'Al-Qaisariya Souq is a historic covered marketplace in the heart of Al-Hofuf, established in 1822. It is one of the oldest traditional markets in the Arabian Gulf and part of the Al-Ahsa Oasis UNESCO World Heritage Site.',
        'The market covers several thousand square metres, with around 14 gates leading into narrow, shaded corridors. Raised, roofed alleyways keep the air moving naturally and house more than 400 small shops behind classic wooden doors and shutters.',
        'It is quiet in the mornings but comes alive after sunset, when the lit gateways glow and the scents of oud, incense and spices fill the passages.'
      ],
      history: [
        'The souq was built in 1822 as the commercial heart of Hofuf, the main town of the Al-Ahsa oasis, serving traders from across eastern Arabia and the Gulf.',
        'After a major fire in 2001 it was carefully restored in its traditional style, and it is now protected as part of the Al-Ahsa Oasis World Heritage Site (inscribed 2018).'
      ],
      religious: null,
      highlights: [
        'Hand-woven Hasawi bisht cloaks made by local artisans',
        'Al-Ahsa dates, herbs and traditional spices',
        'Oud, incense and perfumes',
        'Traditional clothing, brassware, pottery and jewellery',
        'Lit gateways and lively evening atmosphere'
      ],
      hours: { summary: 'Sat – Thu 8:00 – 11:30 AM and 4:00 – 11:00 PM; Fri 4:00 – 11:00 PM', details: ['Busiest on Friday evenings; quietest on weekday mornings', 'Shops close briefly at prayer times'], note: 'Hours can change in Ramadan.' },
      tickets: { required: false, price: 'Free', how: ['No ticket needed.'], links: [{ label: 'VisitSaudi', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'Al-Ahsa (HOF) or King Fahd International, Dammam (DMM)', road: 'King Abdulaziz Road, Al-Rafa\'a North, central Hofuf — next to Ibrahim Palace. Parking nearby, including wheelchair-accessible spaces.', transport: 'Taxi; train from Riyadh or Dammam to Hofuf station, then a short taxi ride.' },
      bestTime: 'Evenings, November – March', duration: '1–2 hours',
      dress: 'Modest clothes.',
      tips: [
        'Bargaining is expected — start lower than the asking price.',
        'Visit Ibrahim Palace next door before the evening market opens.',
        'Wheelchair-accessible entrances, restrooms, cafés and small restaurants are available.'
      ]
    },
    {
      id: 'fanateer-beach', name: 'Al-Fanateer Beach, Jubail', nativeName: 'شاطئ الفناتير',
      region: 'eastern', city: 'Jubail', categories: ['coast'],
      approx: true, coords: [27.0600, 49.6200],
      tagline: 'A long, clean family beach and corniche in Jubail.',
      overview: ['Al-Fanateer is a well-kept beach and corniche in Jubail Industrial City, with parks, playgrounds, cycling paths and calm Gulf waters.'],
      history: ['Developed as part of the planned city of Jubail.'],
      religious: null,
      highlights: ['Clean beach', 'Cycling and walking paths', 'Sunrise over the Gulf'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'About 1 hour north of Dammam.', transport: 'Car.' },
      bestTime: 'October – April', duration: 'Half a day', dress: 'Modest swimwear.', tips: ['Weekday mornings are quiet.']
    },

    /* ======================= ROUND 3: ASIR PROVINCE ======================= */
    {
      id: 'al-namas', name: 'Al-Namas', nativeName: 'النماص',
      region: 'asir', city: 'Al-Namas', categories: ['nature', 'heritage'],
      coords: [19.1200, 42.1300], wiki: 'https://en.wikipedia.org/wiki/Al-Namas',
      tagline: 'A cool mountain town with stone villages and cliff views.',
      overview: ['Al-Namas sits at about 2,600 m in northern Asir. Traditional stone fortress-houses, juniper forests and cliff-edge viewpoints over the Tihama make it a summer favourite.'],
      history: ['A historic centre of the Bani Shehr tribes with old fortified villages and a heritage museum.'],
      religious: null,
      highlights: ['Al-Namas museum', 'Cliff viewpoints', 'Stone villages'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha (AHB) or Al-Bahah (ABT)', road: 'About 2.5 hours north of Abha.', transport: 'Car.' },
      bestTime: 'June – September', duration: 'Half a day', dress: 'Light jacket.', tips: ['Combine with Tanomah nearby.']
    },
    {
      id: 'shada-palace', name: 'Shada Palace, Abha', nativeName: 'قصر شدا',
      region: 'asir', city: 'Abha', categories: ['heritage'],
      coords: [18.2167, 42.5047],
      tagline: 'A traditional mud-and-stone palace museum in Abha.',
      overview: ['Shada Palace is a tower-like palace built in traditional Asiri style, now a museum of local crafts, costumes and household objects.'],
      history: ['Built in the 1920s as a government residence.'],
      religious: null,
      highlights: ['Asiri architecture', 'Local crafts collection'],
      hours: { summary: 'Hours vary — check locally', details: [], note: '' },
      tickets: { required: false, price: 'Free / small fee', how: ['Pay at the entrance if open.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Central Abha.', transport: 'Taxi.' },
      bestTime: 'Summer', duration: '1 hour', dress: 'Modest clothes.', tips: ['Walk to Al-Muftaha village nearby.']
    },

    {
      id: 'abu-kheyal-park', name: 'Abu Kheyal Park, Abha', nativeName: 'حديقة أبو خيال',
      region: 'asir', city: 'Abha', categories: ['nature'],
      approx: true, coords: [18.2250, 42.4970],
      tagline: 'A hilltop park above Abha with jacaranda trees and city views.',
      overview: ['A green hillside park overlooking Abha, with flower beds, lawns and walking trails. It is especially known for jacaranda trees that bloom purple in spring, alongside other perennial trees, and views over the city below.'],
      history: ['Part of Abha\'s network of hillside city parks.'], religious: null,
      highlights: ['Jacaranda blooms (spring)', 'City viewpoint', 'Walking trails', 'On-site restaurant'],
      hours: { summary: 'Reportedly open 24 hours; confirm locally', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Off King Abdulaziz Road, Abha.', transport: 'Taxi.' },
      bestTime: 'Spring (jacaranda bloom) or June – September', duration: '1 hour', dress: 'Casual, comfortable shoes.', tips: ['Visit in spring for the jacaranda bloom.']
    },
    {
      id: 'art-street-abha', name: 'Art Street, Abha', nativeName: 'شارع الفن',
      region: 'asir', city: 'Abha', categories: ['modern'],
      approx: true, coords: [18.2230, 42.5080],
      tagline: 'A mural-lined pedestrian street of cafés and galleries near Al-Muftaha.',
      overview: ['A free, open-air street in the Al-Muftaha area along King Khalid Road, decorated with colourful murals and lined with cafés, restaurants and kiosks serving traditional and international food.'],
      history: ['Developed in the Al-Muftaha area alongside Abha\'s wider push into arts and culture tourism.'], religious: null,
      highlights: ['Street murals', 'Cafés and restaurants', 'Evening atmosphere'],
      hours: { summary: 'Open 24/7 (street); individual cafés vary', details: [], note: '' },
      tickets: { required: false, price: 'Free to walk; pay for food/drinks', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Al-Muftaha area, Abha.', transport: 'Taxi.' },
      bestTime: 'Evenings, June – September', duration: '1–2 hours', dress: 'Casual.', tips: ['Combine with Al-Muftaha Art Village nearby.']
    },
    {
      id: 'shamsan-castle', name: 'Shamsan Castle, Abha', nativeName: 'قلعة شمسان',
      region: 'asir', city: 'Abha', categories: ['heritage'],
      coords: [18.2252, 42.5036],
      tagline: 'A century-old defensive fort guarding Abha\'s northern gateway.',
      overview: ['Shamsan Castle sits on Shamsan Mountain at about 2,200 m in north-eastern Abha, near the Al-Basta district. Its current structure is over a century old. A large rectangular building with three towers, it covers about 5,389 m² and was historically the city\'s main defensive gateway from the north (Aqabat Al-Shaar).'],
      history: ['Restored and redeveloped as a tourist attraction from 2021 onward, with its surroundings upgraded for visitors.'],
      religious: null,
      highlights: ['Three defensive towers', 'City views', 'Near Al-Basta heritage district'],
      hours: { summary: 'Check locally — recently restored', details: [], note: '' },
      tickets: { required: false, price: 'Free (likely)', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'North-eastern Abha, near Al-Basta.', transport: 'Taxi.' },
      bestTime: 'June – September', duration: '30–45 minutes', dress: 'Comfortable shoes for the climb.', tips: ['Combine with a walk through the Al-Basta district for everyday Asiri life.']
    },
    {
      id: 'al-raqdi-museum', name: 'Al-Raqdi Museum, Abha', nativeName: 'متحف الراقدي',
      region: 'asir', city: 'Abha', categories: ['heritage'],
      approx: true, coords: [18.2180, 42.5060],
      tagline: 'A private collection of Asiri ceramics, textiles and everyday artefacts.',
      overview: ['A private museum founded by collector Mohammed Ali Al-Raqdi (established around 2006) to preserve Asiri heritage, with displays of ceramics, embroidered textiles, household implements and decorative art, in an exhibition space Al-Raqdi designed himself.'],
      history: ['Founded c. 2006.'],
      religious: null,
      highlights: ['Ceramics and textiles', 'Household artefacts', 'Personally curated displays'],
      hours: { summary: 'Reportedly Mon – Thu, afternoon/evening — confirm locally', details: [], note: 'Spelling varies: Al-Raqdi, Al-Rakadi, Alraqdi.' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally or call ahead.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Imam Abdul Rahman Bin Faisal Bin Turki Road, Abha.', transport: 'Taxi.' },
      bestTime: 'June – September', duration: '30–45 minutes', dress: 'Casual.', tips: ['Call ahead to confirm opening hours — this is a small private museum.']
    },
    {
      id: 'fog-walkway-abha', name: 'The Fog Walkway (Mamsha Al-Dabab)', nativeName: 'ممشى الضباب',
      region: 'asir', city: 'Abha', categories: ['nature'],
      approx: true, coords: [18.1500, 42.4500],
      tagline: 'A mountaintop walkway above the clouds, overlooking the Tihama escarpment.',
      overview: ['An elevated promenade in the Al-Dabab ("fog") area, more than 2,400 m above sea level, overlooking the Tihama mountains. Fog frequently rolls through, giving the feeling of walking above the clouds. The walkway has green areas, playgrounds, seating and dining options; reported length varies between sources (roughly 600 m to several km).'],
      history: ['Built to let visitors experience the seasonal fog that regularly rolls over Asir\'s highland escarpment.'], religious: null,
      highlights: ['Walking above the clouds', 'Tihama escarpment views', 'Playgrounds and dining'],
      hours: { summary: 'Daytime; best for fog in afternoon', details: [], note: 'Reports place it near the Abha/Al-Namas governorate border — confirm the exact access road locally.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Al-Dabab road area.', transport: 'Car.' },
      bestTime: 'June – September, afternoons for fog', duration: '1–2 hours', dress: 'Warm layer — it can be cool and damp.', tips: ['Afternoons bring the most dramatic fog.']
    },
    {
      id: 'al-maqar-palace', name: 'Al-Maqar Palace (Heritage Civilization Palace Museum), Al-Namas', nativeName: 'قصر المقر — متحف قصر الحضارات',
      region: 'asir', city: 'Al-Namas', categories: ['heritage'],
      approx: true, coords: [19.1200, 42.1300],
      tagline: 'An Andalusian-Islamic-style heritage palace and museum in Al-Namas.',
      overview: ['Al-Maqar Palace, also called the Palace of Civilizations, is a heritage palace-museum in Al-Namas Governorate, built in a mix of Andalusian and Islamic architectural styles. A small zoo with animals from the surrounding slopes sits on its western side.'],
      history: ['Sources differ on whether a separate collection of early Islamic manuscripts belongs to this palace or to a related "Al-Meger" museum in the same governorate — worth asking locally if manuscripts are the main draw for your visit.'],
      religious: null,
      highlights: ['Andalusian-Islamic architecture', 'Small zoo', 'Historic exhibits'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Abha (AHB) or Al-Bahah (ABT)', road: 'Al-Namas Governorate.', transport: 'Car.' },
      bestTime: 'June – September', duration: '1 hour', dress: 'Modest clothes.', tips: ['Combine with the An-Namas Museum and Al-Namas town.']
    },
    {
      id: 'jurash-archaeological-site', name: 'Jurash Archaeological Site', nativeName: 'موقع جرش الأثري',
      region: 'asir', city: 'Ahad Rafidah', categories: ['archaeology'],
      approx: true, coords: [18.1700, 42.7300],
      tagline: 'A major pre-Islamic dig with a visitor centre, about 15 km south of Khamis Mushait.',
      overview: ['Jurash is one of Asir\'s most important archaeological sites, in Ahad Rafidah Governorate. Long-running Heritage Commission excavations have uncovered stone-and-clay residential units, irrigation works and inscribed stones; the area was historically known as "Mikhlaf Jurash" and later became a centre for Islamic hadith scholarship.'],
      history: ['Excavated in annual seasons by the Saudi Heritage Commission since at least the 2010s, with new discoveries announced through to a 17th season in spring 2026.'],
      religious: null,
      highlights: ['Ongoing excavation site', 'Visitor centre with exhibits and a short film', 'Traditional "Adeem Jurashi" leatherwork demonstrations'],
      hours: { summary: 'Visitor centre — check local hours', details: [], note: '' },
      tickets: { required: false, price: 'Likely free', how: ['Ask at the Ahad Rafidah visitor centre.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'About 15 km south of Khamis Mushait, in Ahad Rafidah.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Comfortable clothes.', tips: ['Best for visitors with an interest in archaeology — start at the visitor centre.']
    },
    {
      id: 'sky-village-abha', name: 'Sky Village, Abha', nativeName: 'قرية السكاي',
      region: 'asir', city: 'Abha', categories: ['modern'],
      status: 'check',
      notice: 'Sky Village appears to run as a seasonal attraction (reported dates have varied by year) rather than a year-round fixture — confirm current opening dates before visiting.',
      approx: true, coords: [18.2200, 42.5050],
      tagline: 'A seasonal mountaintop complex of cafés and viewpoints above Abha.',
      overview: ['Sky Village is a seasonal viewpoint complex on Abha\'s mountains, with a café zone of several coffee shops and a dedicated viewpoint/seating area overlooking the city and surrounding peaks.'],
      history: ['Run as a seasonal attraction, timed to Asir\'s cooler tourist seasons.'], religious: null,
      highlights: ['Mountaintop café zone', 'City viewpoint', 'Seasonal events'],
      hours: { summary: 'Seasonal — reported windows vary by year (e.g. summer, or winter season)', details: [], note: 'Confirm current season dates locally before visiting.' },
      tickets: { required: false, price: 'Free entry; pay for cafés', how: ['No booking for entry.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Abha mountain area.', transport: 'Taxi.' },
      bestTime: 'During its seasonal opening window', duration: '1–2 hours', dress: 'Light jacket for evenings.', tips: ['Check current opening dates before planning a visit.']
    },
    {
      id: 'bees-tower-honey-cottage', name: 'Honey Cottage (Bees Tower), Rijal Almaa', nativeName: 'كوخ العسل',
      region: 'asir', city: 'Rijal Almaa', categories: ['nature'],
      approx: true, coords: [18.2125, 42.2734],
      tagline: 'A popular apiary and honey-tasting stop near Rijal Almaa.',
      overview: ['A small apiary and honey-tasting attraction near the UNESCO-listed Rijal Almaa heritage village, where visitors can see beehives and sample more than a dozen types of local honey. It has become a popular social-media stop in the region.'],
      history: ['Part of the wider beekeeping tradition of Rijal Almaa and the Asir highlands.'], religious: null,
      highlights: ['Apiary visit', 'Honey tasting (15+ varieties)', 'Near Rijal Almaa village'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: true, price: 'Small entry/tasting fee (often bundled with Rijal Almaa tours)', how: ['Ask locally or book via an Abha day-tour operator.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Near Rijal Almaa village, about 45 km west of Abha.', transport: 'Car or tour.' },
      bestTime: 'Year-round', duration: '30–45 minutes', dress: 'Casual.', tips: ['Combine with a Rijal Almaa village visit — tours often bundle both.']
    },
    {
      id: 'bin-hamsan-heritage-village', name: 'Bin Hamsan Heritage Village, Khamis Mushait', nativeName: 'قرية بن حمسان التراثية',
      region: 'asir', city: 'Khamis Mushait', categories: ['heritage'],
      approx: true, coords: [18.3000, 42.7333],
      tagline: 'A heritage museum and old buildings showcasing traditional Asiri life.',
      overview: ['One of Khamis Mushait\'s most prominent heritage sites, with a museum displaying artefacts, tools and traditional seating areas that reflect the region\'s history. Often visited alongside the nearby Al-Mushait Palaces.'],
      history: ['One of several heritage villages preserving traditional Asiri architecture in Khamis Mushait.'], religious: null,
      highlights: ['Heritage museum', 'Traditional buildings', 'Local artefacts'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Khamis Mushait.', transport: 'Taxi.' },
      bestTime: 'Year-round', duration: '1 hour', dress: 'Modest clothes.', tips: ['Combine with Al-Mushait Palaces and Khamis Mushait Boulevard.']
    },
    {
      id: 'tandaha-dam', name: 'Tandaha Dam', nativeName: 'سد تنضحي',
      region: 'asir', city: 'Khamis Mushait', categories: ['nature'],
      approx: true, coords: [18.3000, 42.9000],
      tagline: 'A reservoir park about 20 km east of Khamis Mushait, popular for walks and birdwatching.',
      overview: ['Tandaha Dam sits on Wadi Tandaha, a tributary of Wadi Bishah, east of Khamis Mushait. Reports give it a length of about 120 m, a height of about 24.5 m and a storage capacity of roughly 4.2 million m³. A road runs across the dam with lake views on both sides, and the surrounding wetland attracts birdlife.'],
      history: ['Built on Wadi Tandaha, a tributary of Wadi Bishah, as part of Saudi Arabia\'s regional water-storage network.'], religious: null,
      highlights: ['Lake views from the dam road', 'Birdwatching', 'Picnic/barbecue spots'],
      hours: { summary: 'Open daily, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'About 20 km east of Khamis Mushait.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Casual.', tips: ['Bring binoculars if you enjoy birdwatching.']
    },
    {
      id: 'dalagan-park', name: 'Dalagan (Dalaghan) Park', nativeName: 'متنزه ضلغان',
      region: 'asir', city: 'Abha area', categories: ['nature'],
      approx: true, coords: [18.0500, 42.6000],
      tagline: 'A large desert-nature park on the Abha–Al-Qara\'a road, known for cacti and rock engravings.',
      overview: ['Dalagan Park is a roughly 400-hectare desert nature park about 26–30 km from Abha, known for its wildlife, abundant cacti, trees linked to the water-rich Dalagan Valley, and rock formations with ancient engravings on its hills.'],
      history: ['Developed by the Asir National Park authority with added trees, roads and seating.'], religious: null,
      highlights: ['Cacti and desert flora', 'Rock engravings', 'Off-road driving, camping and stargazing nearby'],
      hours: { summary: 'Reportedly ~7:00 AM – 9:00/10:00 PM daily (confirm locally)', details: [], note: '' },
      tickets: { required: false, price: 'Free (nearby adventure areas may charge per car)', how: ['No booking for the park itself.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'About 26–30 km from Abha via King Khalid Road.', transport: 'Car; public transport is limited.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Casual, sturdy shoes.', tips: ['Private car or taxi recommended — public transport options are limited.']
    },
    {
      id: 'al-dahna-waterfall', name: 'Al-Dahna Waterfall (Shallal ad-Dahna), Tanomah', nativeName: 'شلال الدحنا',
      region: 'asir', city: 'Tanomah', categories: ['nature'],
      coords: [18.9080, 42.2270],
      tagline: 'One of Saudi Arabia\'s few near-permanent waterfalls, in the cool Tanomah highlands.',
      overview: ['A waterfall and pool in the Tanomah area, described as one of the few in Saudi Arabia that runs for most or all of the year — some accounts tie its flow to a nearby village dam\'s overflow. The site is also recorded as a notable bird habitat.'],
      history: ['One of a small number of near-permanent waterfalls recorded in Saudi Arabia\'s highlands.'], religious: null,
      highlights: ['Near-permanent waterfall and pool', 'Birdwatching', 'Cool mountain setting'],
      hours: { summary: 'Daytime, best after rain', details: [], note: 'Flow can vary with season/dam levels.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Tanomah, about 120 km north of Abha.', transport: 'Car.' },
      bestTime: 'After rain, October – April', duration: '1 hour', dress: 'Casual, footwear that can get wet.', tips: ['Combine with the other Tanomah parks and viewpoints.']
    },

    {
      id: 'fatimah-aseeri-museum', name: "Fatimah's Museum of Aseeri Women's Heritage", nativeName: 'متحف فاطمة لتراث المرأة العسيرية',
      region: 'asir', city: 'Abha', categories: ['heritage'],
      approx: true, coords: [18.2600, 42.4700],
      tagline: 'A museum of UNESCO-listed Al-Qatt Al-Asiri wall art, run by the artist\'s family.',
      overview: ['A museum on the outskirts of Abha dedicated to Asiri women\'s heritage, centred on Al-Qatt Al-Asiri — the colourful geometric wall-painting tradition inscribed on UNESCO\'s Intangible Cultural Heritage list in 2017. It displays traditional attire and silver ornaments, and offers hands-on Al-Qatt painting sessions.'],
      history: ['Established by artist Fatimah Faye\'e Alalmai; the museum is still run by her family.'],
      religious: null,
      highlights: ['Al-Qatt Al-Asiri wall art', 'Hands-on painting sessions', 'Traditional attire and silver ornaments'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Small fee (varies by activity)', how: ['Ask locally or book via an Abha tour.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Outskirts of Abha, near Al-Soudah road.', transport: 'Taxi or tour.' },
      bestTime: 'Year-round', duration: '1 hour', dress: 'Modest clothes.', tips: ['Try a hands-on Al-Qatt Al-Asiri painting session if offered.']
    },
    {
      id: 'ottoman-bridge-abha', name: 'Ottoman Bridge, Abha', nativeName: 'الجسر العثماني',
      region: 'asir', city: 'Abha', categories: ['heritage'],
      approx: true, coords: [18.2240, 42.5090],
      tagline: 'A stone arch bridge over the Abha riverbed, possibly the oldest bridge in Saudi Arabia.',
      overview: ['A stone bridge spanning the dry Wadi Abha riverbed, linking the historic Al-Bastah quarter with Adl Park. Built with the thick arches and pointed buttresses typical of Ottoman engineering, it is often cited as one of the oldest — possibly the oldest — bridges in Saudi Arabia.'],
      history: ['One source dates it to 1872 (1289 AH), from the late Ottoman period. Sources disagree on its exact dimensions (roughly 32–140 m long, about 6 m high).'],
      religious: null,
      highlights: ['Ottoman stone-arch architecture', 'Riverbed vantage point', 'Al-Bastah historic quarter nearby'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Al-Bastah district / Wadi Abha.', transport: 'Taxi.' },
      bestTime: 'Year-round', duration: '20–30 minutes', dress: 'Casual.', tips: ['View it from the riverbed below for the best look at the arches.', 'Combine with Shamsan Castle and Al-Basta district.']
    },
    {
      id: 'liwan-farm', name: 'Liwan Farm, Abha', nativeName: 'مزرعة ليوان',
      region: 'asir', city: 'Abha', categories: ['nature'],
      approx: true, coords: [18.2000, 42.4500],
      tagline: 'A working farm and mud-house heritage site turned rural-tourism stop.',
      overview: ['Liwan Farm is a rural retreat on the outskirts of Abha, where a farm and a restored traditional mud house have been developed into a heritage tourism destination. Tickets typically include entry to a rural inn, a small heritage museum and a well called Bir Al-Zubrah.'],
      history: ['Part of a wider trend of Asir farms converting to rural tourism destinations.'], religious: null,
      highlights: ['Traditional mud house', 'Small heritage museum', 'Bir Al-Zubrah well'],
      hours: { summary: 'Seasonal — check locally', details: [], note: '' },
      tickets: { required: true, price: 'Roughly SAR 25–35 (varies)', how: ['Book locally or via an Abha tour operator.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Abha countryside.', transport: 'Car or tour.' },
      bestTime: 'June – September', duration: '1–2 hours', dress: 'Casual.', tips: ['Good family stop combining farm life with local heritage.']
    },
    {
      id: 'jabal-khalaqah', name: 'Jabal Khalaqah, Billasmar', nativeName: 'جبل خلقة',
      region: 'asir', city: 'Billasmar', categories: ['nature'],
      coords: [18.7825, 42.2281],
      tagline: 'A 2,850 m peak in the Sarawat range, on the Abha–Taif mountain road.',
      overview: ['Jabal Khalaqah ("Mount Creation") is a mountain in the Sarawat range near Billasmar, on the route between Abha and Taif, rising to about 2,850 m.'],
      history: ['Part of the Sarawat mountain range that runs the length of Asir Province.'], religious: null,
      highlights: ['Mountain viewpoint', 'Cool highland climate'],
      hours: { summary: 'Daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Billasmar, on the Abha–Taif road.', transport: 'Car.' },
      bestTime: 'June – September', duration: '30–60 minutes', dress: 'Warm layer for wind.', tips: ['A good stop if driving the mountain road between Abha and Taif.']
    },
    {
      id: 'ibn-adwan-village', name: 'Ibn Adwan Village, Billahmar', nativeName: 'قرية ابن عدوان',
      region: 'asir', city: 'Billahmar', categories: ['heritage'],
      approx: true, coords: [18.6338, 42.3241],
      tagline: 'A restored heritage village turned rural arts and festival hub.',
      overview: ['Ibn Adwan (Bin Adwan) Village, in the Billahmar area north of Abha, has been developed into a cultural hub hosting art shows and festivals, with the Mohammed bin Adwan Al-Ahmari Museum on site.'],
      history: ['Restored as part of a wider heritage-village revival programme in Asir.'], religious: null,
      highlights: ['Restored heritage buildings', 'Art shows and festivals', 'Mohammed bin Adwan Al-Ahmari Museum'],
      hours: { summary: 'Check locally; busiest during festivals', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Billahmar, north of Abha.', transport: 'Car.' },
      bestTime: 'During local festivals, or June – September', duration: '1 hour', dress: 'Modest clothes.', tips: ['Check for festival dates for the liveliest visit.']
    },
    {
      id: 'shabana-park', name: 'Shabana Park, Balqarn', nativeName: 'متنزه شبانة',
      region: 'asir', city: 'Balqarn', categories: ['nature'],
      approx: true, coords: [19.7000, 42.0000],
      tagline: 'A shaded mountain park west of Sabt Al-Alaya in Balqarn Governorate.',
      overview: ['Shabana is a mountain park in Balqarn Governorate, known for lush vegetation and natural shade, with basic visitor amenities including restrooms, seating areas and paved access roads.'],
      history: ['Developed as a shaded roadside stop in the Balqarn highlands.'], religious: null,
      highlights: ['Shaded mountain vegetation', 'Picnic areas'],
      hours: { summary: 'Daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'West of Sabt Al-Alaya, Balqarn Governorate.', transport: 'Car.' },
      bestTime: 'June – September', duration: '1 hour', dress: 'Casual.', tips: ['A quiet, less-visited alternative to Abha\'s busier parks.']
    },
    {
      id: 'kadambal-island', name: 'Kadambal Island, Al-Qahma', nativeName: 'جزيرة كدمبل',
      region: 'asir', city: 'Al-Qahma', categories: ['coast', 'nature'],
      approx: true, coords: [17.9000, 41.5500],
      tagline: 'A small Red Sea island off Al-Qahma, known for migratory birds.',
      overview: ['Kadambal (Kadmbal) Island is a roughly 3 km² island off Asir\'s Al-Qahma coast, about a 30-minute boat ride from shore, within the wider Asir Marine Park area. It attracts migratory birds, with promotional sources mentioning flamingos and falcons, though detailed scientific bird-survey data for the island itself is limited.'],
      history: ['Part of the Asir Marine Park protected Red Sea islands.'], religious: null,
      highlights: ['Boat trip from Al-Qahma', 'Birdwatching', 'Remote island scenery'],
      hours: { summary: 'Daytime boat trips', details: [], note: 'Access depends on boat operators — arrange locally.' },
      tickets: { required: true, price: 'Boat trip fee (varies)', how: ['Arrange a boat locally in Al-Qahma or Al-Birk.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Al-Qahma coast, Asir.', transport: 'Boat.' },
      bestTime: 'October – April, migratory bird season', duration: 'Half day', dress: 'Sun protection, modest swimwear.', tips: ['Bring binoculars for birdwatching.']
    },
    {
      id: 'al-birk-beaches', name: 'Al-Birk Beaches (Zahran & Al-Mahaji)', nativeName: 'شواطئ البرك',
      region: 'asir', city: 'Al-Birk', categories: ['coast'],
      approx: true, coords: [18.3400, 41.5900],
      tagline: 'Mangrove-fringed white-sand beaches and coral reefs on Asir\'s Red Sea coast.',
      overview: ['Al-Birk Governorate\'s coastline includes Zahran Beach, about 14 km north of the governorate centre and surrounded by mangroves, and Al-Mahaji Beach, about 18 km away, known for white sand and coral reefs popular with divers.'],
      history: ['The Al-Birk coast and islands are considered among the most pristine on the Saudi Red Sea.'], religious: null,
      highlights: ['Mangrove-fringed Zahran Beach', 'Coral reefs at Al-Mahaji Beach', 'Offshore islands'],
      hours: { summary: 'Open daily', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Al-Birk Governorate coastal roads.', transport: 'Car.' },
      bestTime: 'October – April', duration: '2–3 hours', dress: 'Modest swimwear.', tips: ['Bring snorkel gear for Al-Mahaji\'s reefs.']
    },
    {
      id: 'king-fahad-dam-bisha', name: 'King Fahad Dam, Bisha', nativeName: 'سد الملك فهد — بيشة',
      region: 'asir', city: 'Bisha', categories: ['nature'],
      approx: true, coords: [19.6500, 42.6000],
      tagline: 'One of Saudi Arabia\'s largest dams, with the country\'s biggest reservoir by capacity.',
      overview: ['King Fahad Dam is a gravity dam on Wadi Bisha, about 35 km south of Bisha city. It stands roughly 103 m tall with a reservoir capacity of about 325 million m³ — the largest storage capacity of any dam in Saudi Arabia — supplying irrigation, flood control and municipal water.'],
      history: ['Built 1986–1996/97; inaugurated in 1998. It was the country\'s tallest dam until Baysh Dam (106 m) was completed in 2009.'],
      religious: null,
      highlights: ['Large reservoir lake', 'Dam viewpoint', 'Surrounding Wadi Bisha farmland'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'About 35 km south of Bisha.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Casual.', tips: ['Combine with a visit to Bisha\'s old quarter and Nimran Market.']
    },
    {
      id: 'beni-omer-nimran-market', name: 'Beni Omer Village & Nimran Market, Bisha', nativeName: 'قرية بني عمر وسوق نمران',
      region: 'asir', city: 'Bisha', categories: ['heritage'],
      status: 'check',
      notice: 'We found only limited, general sourcing for this village and market — location is approximate and we could not confirm current visitor access.',
      approx: true, coords: [19.9742, 42.6054],
      tagline: 'A roughly 400-year-old historic settlement and traditional market on Bisha\'s outskirts.',
      overview: ['Beni Omer is described as a roughly 400-year-old historic settlement on the outskirts of Bisha. Nimran Market is an old traditional market in the area, tied to the region\'s agricultural trade.'],
      history: ['Sources describe Beni Omer as about 400 years old; detailed visitor information is limited.'],
      religious: null,
      highlights: ['Historic mud-built settlement', 'Traditional market'],
      hours: { summary: 'Unconfirmed — ask locally', details: [], note: '' },
      tickets: { required: false, price: 'Free (likely)', how: ['Ask locally in Bisha.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB)', road: 'Bisha outskirts.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Modest clothes.', tips: ['Ask locally for directions — this is not a heavily signposted tourist site.']
    },
    {
      id: 'al-moanis-village', name: 'Al-Moanis Village, Dhahran Al-Janoub', nativeName: 'قرية المعانس',
      region: 'asir', city: 'Dhahran Al-Janoub', categories: ['heritage'],
      approx: true, coords: [17.6208, 43.4571],
      tagline: 'A traditional multi-storey stone village on the edge of Wadi Al-Areen.',
      overview: ['Al-Moanis is a traditional village in Dhahran Al-Janoub Governorate, about 150 km south-east of Abha, known for its stone castles and forts — some up to six storeys high. It has an upper section called Haydan and a lower section called Dar Al-Arak, both on the edge of Wadi Al-Areen.'],
      history: ['One of several traditional stone-fort villages in Dhahran Al-Janoub Governorate.'], religious: null,
      highlights: ['Multi-storey stone forts', 'Haydan and Dar Al-Arak sections', 'Wadi Al-Areen setting'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Abha International (AHB) or Najran (EAM)', road: 'About 150 km south-east of Abha, near the Najran border.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Modest clothes.', tips: ['Can be combined with a trip toward Najran.']
    },

    {
      id: 'buraydah-water-tower', name: 'Buraydah Water Tower', nativeName: 'خزان مياه بريدة',
      region: 'qassim', city: 'Buraidah', categories: ['modern'],
      coords: [26.3550, 43.9800],
      tagline: 'A 66 m golf-ball-shaped reservoir with a rooftop lounge and city views.',
      overview: ['Buraydah Water Tower rises about 66 m, shaped like a golf ball, with roughly 60% of the structure used as an 8,000 m³ water tank. A rooftop lounge and restaurant sit above the tank, topped by a panoramic plaza overlooking the city — one of Buraydah\'s most recognisable landmarks.'],
      history: ['Used as a venue for national celebrations and as a summer festival focal point.'],
      religious: null,
      highlights: ['Panoramic city viewpoint', 'Rooftop lounge/restaurant', 'National-day event venue'],
      hours: { summary: 'Check locally for current hours', details: [], note: '' },
      tickets: { required: false, price: 'Free to view; pay at the lounge/restaurant', how: ['No booking to view.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Northern Buraidah.', transport: 'Taxi.' },
      bestTime: 'Evenings, year-round', duration: '30–60 minutes', dress: 'Casual.', tips: ['Combine with King Khalid Cultural Center nearby.']
    },
    {
      id: 'al-oqilat-museum', name: 'Al-Oqilat Museum, Buraidah', nativeName: 'متحف العقيلات',
      region: 'qassim', city: 'Buraidah', categories: ['heritage'],
      approx: true, coords: [26.3300, 43.9700],
      tagline: 'A museum of the legendary Qassimi camel-caravan traders.',
      overview: ['Al-Oqilat Museum documents the Al-Uqailat, legendary merchant caravaneers from Qassim who led camel caravans across the Arabian Peninsula to the Levant, Egypt, Iraq and India. Displays include documents, manuscripts, tools, maps, saddles and other caravan equipment.'],
      history: ['Founded by Abdullatif al-Wuhaibi.'],
      religious: null,
      highlights: ['Caravan trade artefacts', 'Historic maps and documents', 'Traditional gathering spaces'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Buraidah.', transport: 'Taxi.' },
      bestTime: 'Year-round', duration: '45–60 minutes', dress: 'Casual.', tips: ['Often visited together with the general Buraydah Museum.']
    },
    {
      id: 'buraydah-museum', name: 'Buraydah Museum', nativeName: 'متحف بريدة',
      region: 'qassim', city: 'Buraidah', categories: ['heritage'],
      approx: true, coords: [26.3290, 43.9850],
      tagline: 'A small regional museum of Qassim heritage, designed like a mini Najd fort.',
      overview: ['Buraydah Museum displays artefacts, traditional tools, historical photographs and cultural objects from the Qassim region, along with a library of publications on Buraidah and Al-Qassim Province.'],
      history: ['Run as the official municipal heritage museum for Buraidah and the wider Qassim region.'], religious: null,
      highlights: ['Regional heritage artefacts', 'Najdi mud-brick building style', 'Reference library'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Likely free', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'King Abdulaziz Road, Buraidah.', transport: 'Taxi.' },
      bestTime: 'Year-round', duration: '30–45 minutes', dress: 'Casual.', tips: ['A modest stop — pair it with Al-Oqilat Museum or Al-Dubaikhi Palace for a fuller heritage day.']
    },
    {
      id: 'al-dubaikhi-heritage-palace', name: 'Al-Dubaikhi Heritage Palace, Buraidah', nativeName: 'قصر الدبيخي التراثي',
      region: 'qassim', city: 'Buraidah', categories: ['heritage'],
      approx: true, coords: [26.3100, 43.9300],
      tagline: 'A mudbrick heritage palace-museum with about 3,000 artefacts.',
      overview: ['Al-Dubaikhi Heritage Palace is a large mudbrick structure in the village of Al-Qwai\', west of Buraidah, built in traditional old-Najdi-house style. It has twelve rooms housing roughly 3,000 heritage items.'],
      history: ['Inaugurated 30 April 2012.'],
      religious: null,
      highlights: ['Traditional mudbrick architecture', '~3,000 heritage items across 12 rooms'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Al-Qwai\' village, west of Buraidah.', transport: 'Car.' },
      bestTime: 'Year-round', duration: '45 minutes', dress: 'Casual.', tips: ['One of several private heritage museums around Buraidah.']
    },
    {
      id: 'al-musawkaf-market', name: 'Al-Musawkaf Market, Unaizah', nativeName: 'سوق المسوكف',
      region: 'qassim', city: 'Unaizah', categories: ['heritage'],
      coords: [26.0950, 44.0050],
      tagline: 'A mock-castle heritage market built to commemorate Unaizah\'s historic 1970s souq.',
      overview: ['Al-Musawkaf Market, built in 1428 AH (c. 2007) on Al-Wahlan Avenue, commemorates an older Najdi market of the same name that functioned until the 1970s. Set in a mock-castle building covering about 5,000 m², it includes roughly 51 shops, a small museum and exhibition space, and hosts cultural events such as the Al-Hanaini Festival.'],
      history: ['Named for an original market removed in 1394 AH; rebuilt as a heritage souq in 1428 AH.'],
      religious: null,
      highlights: ['Mock-castle market architecture', 'Small museum', 'Cultural festivals (e.g. Al-Hanaini Festival)'],
      hours: { summary: 'Evenings, typically', details: [], note: '' },
      tickets: { required: false, price: 'Free to browse', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Al-Dulaia, Unaizah.', transport: 'Taxi.' },
      bestTime: 'Evenings, year-round', duration: '1 hour', dress: 'Modest clothes.', tips: ['Combine with Al-Bassam Heritage House, a short walk away.']
    },
    {
      id: 'al-khabra-historical-village', name: 'Al-Khabra Historical Village', nativeName: 'قرية الخبراء التاريخية',
      region: 'qassim', city: 'Riyadh Al-Khabra', categories: ['heritage'],
      approx: true, coords: [26.3384, 42.3198],
      tagline: 'A restored walled mud village on Wadi Al-Rummah, with a circular Najdi mosque.',
      overview: ['Al-Khabra Historical Village sits on the north side of Wadi Al-Rummah, about 60–70 km south-west of Buraidah. It takes its name from rainwater that overflowed from the wadi into a marsh (khabra). The village has restored mud buildings, a distinctive circular Najdi-style mosque, and a central square that once hosted a weekly Friday market.'],
      history: ['Dated by some sources to 1703 as a fortress settlement; its mud houses were later damaged by floods and restored, with support from the Qassim Province Municipality.'],
      religious: null,
      highlights: ['Circular Al-Khabra Mosque', 'Restored mud architecture', 'Riyadh Al-Khabra Dates Festival (seasonal)'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Riyadh Al-Khabra Governorate, SW of Buraidah.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Modest clothes.', tips: ['Combine with a wider Wadi Al-Rummah drive.']
    },
    {
      id: 'jadiyah-museum', name: 'Jad\'iyah Museum (Judaya Fortress), Ar Rass', nativeName: 'متحف الجادعية — قلعة الجادعية',
      region: 'qassim', city: 'Ar Rass', categories: ['heritage'],
      approx: true, coords: [25.8600, 43.5100],
      tagline: 'A private fortress-museum of over 30,000 everyday-life artefacts.',
      overview: ['The Jad\'iyah Museum (Judaya Fortress) in Ar Rass covers about 6,250 m² and houses more than 30,000 heritage objects gathered by collector Khaled bin Mohammed Al-Jedai, documenting traditional life in Ar Rass and wider Qassim — occupations, clothing and everyday domestic life.'],
      history: ['Built up as a private fortress-style collection by Khaled bin Mohammed Al-Jedai.'], religious: null,
      highlights: ['30,000+ heritage artefacts', 'Fortress-style building', 'Traditional Qassim daily-life displays'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Ar Rass, west of Unaizah.', transport: 'Car.' },
      bestTime: 'Year-round', duration: '45–60 minutes', dress: 'Casual.', tips: ['Combine with the Al-Shinanah Tower nearby.']
    },
    {
      id: 'sakhrat-antarah', name: "Sakhrat Antarah (Antarah's Rock / Lover's Rock)", nativeName: 'صخرة عنترة',
      region: 'qassim', city: 'Uyun Al-Jiwa', categories: ['heritage'],
      approx: true, coords: [26.3500, 43.5700],
      tagline: 'A precariously perched boulder tied to the legendary poet Antarah ibn Shaddad.',
      overview: ['Sakhrat Antarah is a precariously balanced boulder in Ghaf Al-Jiwa, part of Uyun Al-Jiwa Governorate, less than 30 km north-west of Buraidah. Local tradition holds it as the place where the pre-Islamic knight-poet Antarah ibn Shaddad met his beloved Ablah, giving it the nickname "Lover\'s Rock". The nearby Hussat al-Nasslah rock formation carries Thamudic inscriptions and drawings.'],
      history: ['Restored and preserved in 2019 by the former Saudi Commission for Tourism and National Heritage, including conservation of its inscriptions. Touching the rock is now prohibited to protect it.'],
      religious: null,
      highlights: ['Legendary "Lover\'s Rock"', 'Thamudic inscriptions nearby', 'Restored heritage site'],
      hours: { summary: 'Open at all times', details: [], note: 'Do not touch the rock — it is protected.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Ghaf Al-Jiwa, Uyun Al-Jiwa Governorate.', transport: 'Car.' },
      bestTime: 'October – April', duration: '20–30 minutes', dress: 'Casual.', tips: ['Combine with the wider Uyun Al-Jiwa Heritage Town visit.']
    },
    {
      id: 'al-awshaziyah-salt-lake', name: 'Al-Awshaziyah Salt Lake', nativeName: 'سبخة الأوشزية',
      region: 'qassim', city: 'Unaizah', categories: ['nature'],
      approx: true, coords: [26.0900, 44.1100],
      tagline: 'The largest natural salt lake on the Arabian Peninsula, with summer salt harvesting.',
      overview: ['Al-Awshaziyah is a town about 10 km east of Unaizah, home to what is described as the largest natural salt lake on the Arabian Peninsula — a shallow basin roughly 10 km long and 3 km wide, crossed by a paved road. Winter rains fill the basin; by summer the water evaporates, leaving a layer of white salt that is harvested by hand in flooded shore-side basins.'],
      history: ['Historically nicknamed the "Salt Village" or "White Gold Mine"; described by early 20th-century travellers Ameen Al-Rihani and St. John Philby.'],
      religious: null,
      highlights: ['Vast white salt flat', 'Traditional salt harvesting (summer)', 'Scenic drive across the lake bed'],
      hours: { summary: 'Open daily; best viewed after winter rains or in summer for the salt crust', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'About 10 km east of Unaizah.', transport: 'Car.' },
      bestTime: 'Winter (water) or summer (salt crust)', duration: '1 hour', dress: 'Casual, sun protection.', tips: ['Visit after rain to see it as a lake, or in high summer to see the salt crust.']
    },
    {
      id: 'wadi-al-rummah', name: 'Wadi Al-Rummah', nativeName: 'وادي الرمة',
      region: 'qassim', city: 'Buraidah / Unaizah', categories: ['nature'], featured: true,
      coords: [26.2000, 43.9500],
      tagline: 'The longest valley in the Arabian Peninsula, running through the heart of Qassim.',
      overview: ['Wadi Al-Rummah is the longest valley in Saudi Arabia and the Arabian Peninsula, commonly cited at around 600 km, running from near Madinah through Qassim (where part of its course is called Wadi Al-Qassim) into the Dahna desert. It divides Al-Qassim Province and, after heavy rain, turns green with vegetation and pooling water.'],
      history: ['Floods rarely but dramatically — geological studies suggest the valley flows at full capacity only about three times per century; its last major flood was in 2008.'],
      religious: null,
      highlights: ['Longest valley on the Arabian Peninsula', 'Seasonal greenery after rain', 'Runs past Buraidah, Unaizah and Riyadh Al-Khabra'],
      hours: { summary: 'Open area, daylight hours', details: [], note: 'Best seen shortly after rain; normally dry.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Runs through central Qassim, between and around Buraidah and Unaizah.', transport: 'Car.' },
      bestTime: 'Just after rain, winter', duration: 'Varies — a stop of 30 minutes to a half-day drive', dress: 'Casual.', tips: ['Check recent rainfall news — the wadi is far more scenic flowing than dry.']
    },
    {
      id: 'jabal-tamiyah', name: 'Jabal Tamiyah', nativeName: 'جبل طمية',
      region: 'qassim', city: 'Uqlat As Suqur', categories: ['nature'],
      coords: [25.6042, 42.0003],
      tagline: 'A hill in western Qassim, on the Qassim–Madinah highway corridor.',
      overview: ['Jabal Tamiyah is a hill in Uqlat As Suqur Governorate, western Al-Qassim Province, along the general corridor of the Qassim–Madinah highway.'],
      history: ['Part of the low desert hill country of western Al-Qassim Province.'], religious: null,
      highlights: ['Roadside desert hill'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Uqlat As Suqur Governorate, western Qassim.', transport: 'Car.' },
      bestTime: 'October – April', duration: '20–30 minutes', dress: 'Casual, sun protection.', tips: ['A waypoint stop rather than a destination in itself.']
    },
    {
      id: 'ain-ibn-fuhayd', name: 'Ain Ibn Fuhayd, Al-Asyah', nativeName: 'عين بن فهيد',
      region: 'qassim', city: 'Al-Asyah', categories: ['nature'],
      status: 'check',
      notice: 'Sourcing for this spring and its surrounding dam was thin and partly from an unreviewed source — treat details as indicative and confirm locally.',
      approx: true, coords: [27.4046, 44.3663],
      tagline: 'A historic spring-fed settlement in Al-Asyah Governorate, with a nearby dam.',
      overview: ['Ain Ibn Fuhayd (also spelled Ayn Ibn Fuhayd) gives its name to a town in Al-Asyah Governorate, northern Qassim, said to be founded around a spring identified by Muhammad bin Fuhaid Al-Asadi Al-Otaibi in the early 19th century. The nearby Marid Dam is reported to draw visitors, though with limited tourist facilities.'],
      history: ['Local tradition credits Muhammad bin Fuhaid Al-Asadi Al-Otaibi (d. c. 1844) with founding the settlement after securing the land around the spring from Imam Abdulaziz bin Muhammad Al Saud.'],
      religious: null,
      highlights: ['Historic spring site', 'Marid Dam nearby'],
      hours: { summary: 'Open area, daylight hours', details: [], note: 'Facilities for visitors are reportedly limited.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Al-Asyah Governorate, northern Qassim.', transport: 'Car.' },
      bestTime: 'After rain, winter', duration: '1 hour', dress: 'Casual.', tips: ['Bring your own supplies — tourist facilities are limited.']
    },
    {
      id: 'king-abdullah-park-buraydah', name: 'King Abdullah National Park, Buraidah', nativeName: 'متنزه الملك عبدالله الوطني — بريدة',
      region: 'qassim', city: 'Buraidah', categories: ['nature'],
      approx: true, coords: [26.3600, 43.9900],
      tagline: 'A 50,000 m² green space on Buraidah\'s eastern ring road.',
      overview: ['King Abdullah National Park is a roughly 50,000 m² green space in Buraidah, giving residents and visitors a place to relax away from the city centre.'],
      history: ['One of several municipal green spaces added to Buraidah in recent decades.'], religious: null,
      highlights: ['Green lawns and walking paths', 'Family picnic spots'],
      hours: { summary: 'Daily, daytime to evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Eastern Ring Road, Al-Muntazah, Buraidah.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Casual.', tips: ['Combine with the Buraydah Water Tower nearby.']
    },
    {
      id: 'an-nabhaniyah-park', name: 'An-Nabhaniyah', nativeName: 'النبهانية',
      region: 'qassim', city: 'An Nabhaniyah', categories: ['nature'],
      status: 'check',
      notice: 'We could not confirm specific visitor facilities beyond its listing as an official camping area — confirm permit requirements locally before camping.',
      coords: [25.8556, 43.0813],
      tagline: 'A western Qassim governorate listed among the region\'s official camping areas.',
      overview: ['An-Nabhaniyah is a governorate in western Al-Qassim Province, listed by Saudi Arabia\'s National Center for Vegetation Cover Development among the region\'s designated camping areas (alongside Buraidah, Unaizah and Takhfa).'],
      history: ['Listed by national authorities as one of Al-Qassim official outdoor recreation and camping areas.'], religious: null,
      highlights: ['Desert camping area'],
      hours: { summary: 'Open area', details: [], note: 'Camping may require a permit — check the national camping guide before travelling.' },
      tickets: { required: false, price: 'Free (camping may need a permit)', how: ['Check the Saudi camping/caravan guide for permit requirements.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Western Al-Qassim Province.', transport: 'Car, 4x4 recommended.' },
      bestTime: 'October – April', duration: 'Half day to overnight', dress: 'Warm layers for desert nights.', tips: ['Check the permit requirement before setting up camp.']
    },

    {
      id: 'hail-regional-museum', name: 'Hail Regional Museum', nativeName: 'متحف حائل الإقليمي',
      region: 'hail', city: 'Hail', categories: ['heritage'],
      approx: true, coords: [27.5100, 41.6950],
      tagline: 'A regional museum covering Hail\'s geology, history and folk heritage.',
      overview: ['Hail Regional Museum, about 1,500 m² across several halls, covers the region\'s geology in one section and its history in the "Hail Through History" hall, with paintings, texts and historical photos, plus folk heritage displays — traditional industries, clothing, jewellery, cooking utensils and farm tools.'],
      history: ['Sources differ on the opening date (one source gives 1425 AH / c. 2004, another describes a post-1970s opening).'],
      religious: null,
      highlights: ['Geology hall', 'Hail Through History hall', 'Folk heritage artefacts'],
      hours: { summary: 'Check locally for current hours', details: [], note: '' },
      tickets: { required: false, price: 'Likely free', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Albuhayrah district, Hail.', transport: 'Taxi.' },
      bestTime: 'Year-round', duration: '45–60 minutes', dress: 'Casual.', tips: ['Combine with Qishlah Palace and A\'arif Fort for a heritage day in Hail.']
    },
    {
      id: 'al-mutlaq-heritage-mosque', name: 'Al-Mutlaq Heritage Mosque, Hail', nativeName: 'مسجد المطلق التراثي',
      region: 'hail', city: 'Hail', categories: ['religious', 'heritage'],
      approx: true, coords: [27.5300, 41.6950],
      tagline: 'A centuries-old mosque in Hail\'s historic Al-Mutlaq district.',
      overview: ['Al-Mutlaq Heritage Mosque is a historic mosque in Hail city, in the Al-Mutlaq district, reported by some sources to be around 400 years old.'],
      history: ['Reported by some local sources to be around 400 years old; exact founding date not independently confirmed.'], religious: ['An active place of worship with deep local historical roots.'],
      highlights: ['Historic mosque architecture'],
      hours: { summary: 'Open for prayer times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Al-Mutlaq district, Hail city.', transport: 'Taxi.' },
      bestTime: 'Year-round', duration: '20 minutes', dress: 'Modest clothes; cover shoulders and knees.', tips: ['Visit respectfully outside prayer times if you want a closer look.']
    },
    {
      id: 'al-naif-museum', name: 'Al-Naif Palace Archaeological Museum, Jubbah', nativeName: 'متحف قصر النايف الأثري',
      region: 'hail', city: 'Jubbah', categories: ['heritage'],
      approx: true, coords: [28.0169, 40.9560],
      tagline: 'A palm-grove private museum of over 2,000 everyday artefacts, near the Jubbah rock art.',
      overview: ['Al-Naif Palace Archaeological Museum sits among Jubbah\'s palm groves. Founded by Saud bin Nayef Al-Ramali Al-Shammari, its single-level building is divided into seven sections holding roughly 2,165 items, including bagpipes, sewing machines, copper tools and weaponry, set alongside gardens and the owner\'s residence.'],
      history: ['Founded by local collector Saud bin Nayef Al-Ramali Al-Shammari.'], religious: null,
      highlights: ['~2,165 heritage artefacts', 'Palm-grove garden setting'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Jubbah town, about 90 km NW of Hail.', transport: 'Car.' },
      bestTime: 'Year-round', duration: '45 minutes', dress: 'Casual.', tips: ['Combine with the Jubbah rock art site, a short distance away.']
    },
    {
      id: 'al-hutaymah-crater', name: 'Al-Hutaymah Volcanic Crater', nativeName: 'فوهة الهتيمة البركانية',
      region: 'hail', city: 'Al-Shinan', categories: ['nature'],
      coords: [26.9882, 42.2473],
      tagline: 'A huge volcanic crater east of the Salma Mountains, ringed by old lava flows.',
      overview: ['Al-Hutaymah Crater, part of the Harrat Hutaymah alkali basalt field in Al-Shinan Governorate, is roughly 1.2 km across with reported depths of 110–130 m (sources vary). It sits east of the Salma Mountains, encircled by dark volcanic rock from ancient lava flows, and is promoted as a geological tourism destination with views from its rim.'],
      history: ['Part of a wider volcanic field whose age and composition have been studied by USGS and other geological surveys.'],
      religious: null,
      highlights: ['Large volcanic crater', 'Rim viewpoint over the Salma Mountains', 'Dark basalt lava fields'],
      hours: { summary: 'Daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Al-Shinan Governorate, about 110 km SE of Hail.', transport: 'Car; 4x4 recommended for the final approach.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Sturdy shoes, sun protection.', tips: ['Combine with a wider Hail Province geology/desert trip.']
    },
    {
      id: 'great-nafud-desert', name: 'Great Nafud Desert (An Nafud)', nativeName: 'صحراء النفود الكبير',
      region: 'hail', city: 'Hail', categories: ['nature'], featured: true,
      approx: true, coords: [28.3000, 41.3000],
      tagline: 'A vast red sand sea north of Hail, famous for desert rallies and star-filled skies.',
      overview: ['The Great Nafud (An Nafud) is a large sand desert stretching north of Hail city and Jubbah, known for red dunes shaped by wind, with wadis, gravel plains and rocky outcrops mixed through it. It has hosted the Hail International Rally, a cross-country motorsport event through the dunes since 2006, and is popular for desert safaris and camping.'],
      history: ['The 2006 Hail Rally marked Saudi Arabia\'s first foray into international motorsport, a precursor to later events such as the Dakar Rally.'],
      religious: null,
      highlights: ['Red sand dunes', 'Desert safaris and camping', 'Hail International Rally route (seasonal)'],
      hours: { summary: 'Open at all times', details: [], note: 'A 4x4 and a local guide are strongly recommended for deep desert driving.' },
      tickets: { required: false, price: 'Free (tours/4x4 rental paid)', how: ['Book a desert safari or 4x4 tour locally in Hail.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'North of Hail city and Jubbah.', transport: '4x4 strongly recommended.' },
      bestTime: 'October – April', duration: 'Half day to overnight camping', dress: 'Warm layers for desert nights, sun protection by day.', tips: ['Never drive deep into the dunes alone — go with a local guide or group.']
    },
    {
      id: 'al-hait-fadak', name: 'Al-Hait Heritage Town (Ancient Fadak)', nativeName: 'بلدة الحائط التراثية — فدك القديمة',
      region: 'hail', city: 'Al-Hait', categories: ['heritage', 'archaeology'], featured: true,
      coords: [25.9860, 40.4720],
      tagline: '"City of Walls and Fortresses" — the ancient trading town once known as Fadak.',
      overview: [
        'Al-Hait is a historic heritage village in Al-Hait Governorate, about 250 km south/south-west of Hail, known historically as Fadak. It is encircled by a roughly 7 km wall of rugged black lava stone, earning it the nickname "City of Walls and Fortresses".',
        'The town has an old market dating to the 18th century and has long been a commercial hub, alongside castles, fortresses and water installations from various periods. Rock inscriptions referencing the 6th-century BCE Babylonian king Nabonidus have been found in the surrounding area.'
      ],
      history: ['The name changed from Fadak to Al-Hait after the early Islamic conquest, when Fadak surrendered following the fall of Khaybar.'],
      religious: null,
      highlights: ['7 km black-lava-stone wall', '18th-century market', 'Nabonidus-era rock inscriptions nearby'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Al-Hait Governorate, about 250 km S/SW of Hail.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['A long drive from Hail — best combined with other southern Hail Province sites.']
    },
    {
      id: 'al-ghazalah-heritage-town', name: 'Al-Ghazalah Heritage Town', nativeName: 'بلدة الغزالة التراثية',
      region: 'hail', city: 'Al-Ghazalah', categories: ['heritage'],
      coords: [26.7837, 41.2185],
      tagline: 'A walled archaeological town south of Hail, with buildings dated to the 17th century.',
      overview: ['The Heritage Town in Al-Ghazalah is an archaeological site in Al-Ghazalah Governorate, south of Hail Province. Some of its buildings carry construction dates as early as 1699, and its most notable feature is the town\'s defensive wall.'],
      history: ['Dates on some of its buildings point to construction in the late 17th century.'], religious: null,
      highlights: ['Historic town wall', 'Buildings dated to the 17th century'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Al-Ghazalah Governorate, about 100 km south of Hail.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Modest clothes.', tips: ['Combine with Al-Hait if making a longer southern Hail Province trip.']
    },
    {
      id: 'tuwarin-hatim-altai', name: 'Tuwarin — Hatim Al-Tai\'s Palace', nativeName: 'توارن — قصر حاتم الطائي',
      region: 'hail', city: 'Tuwarin', categories: ['heritage'], featured: true,
      approx: true, coords: [27.7200, 41.5300],
      tagline: 'The Aja Mountains village tied to Arabia\'s legendary paragon of generosity.',
      overview: ['Tuwarin (also spelled Touran/Turan) is a village deep in the Aja Mountains north of Hail, traditionally held as the home, tomb and palace site of Hatim al-Tai, a 6th-century Tayy-tribe poet renowned across the Arab world as the ultimate symbol of generosity — the proverb "more generous than Hatim" is still used today. Remains described locally as his palace, tomb and fireplace are among the province\'s notable heritage sites.'],
      history: ['Hatim al-Tai is traditionally dated to around 578 CE (some sources give 605 CE); his story appears in the One Thousand and One Nights.'],
      religious: null,
      highlights: ['Remains linked to Hatim al-Tai\'s palace and tomb', 'Aja Mountains scenery', 'Pre-Islamic Arabian folklore'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Tuwarin village, Aja Mountains, north of Hail.', transport: 'Car; some tracks may need a 4x4.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Comfortable shoes.', tips: ['Combine with a wider Aja/Salma mountains hiking trip.']
    },
    {
      id: 'aqdah-valley', name: 'Wadi Al-Uqdah (Aqdah Valley)', nativeName: 'وادي العقدة',
      region: 'hail', city: 'Hail', categories: ['nature'],
      approx: true, coords: [27.5500, 41.3500],
      tagline: 'A green, farm-filled valley inside the granite Aja Mountains.',
      overview: ['Wadi Al-Uqdah (also spelled Aqdah/Uqda) is a valley within the Aja Mountains west of Hail, covered with farms, orchards and grazing land for livestock and camels, with water springs scattered through the surrounding range.'],
      history: ['A traditional farming valley within the Aja Mountains range.'], religious: null,
      highlights: ['Farms and orchards', 'Springs in the Aja range', 'Livestock grazing land'],
      hours: { summary: 'Daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Inside the Aja Mountains, west of Hail city.', transport: 'Car; 4x4 for rougher tracks.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Comfortable shoes.', tips: ['Combine with Tuwarin and the wider Aja Mountains hiking area.']
    },
    {
      id: 'al-samra-park', name: 'Al-Samra Park, Hail', nativeName: 'منتزه السمراء',
      region: 'hail', city: 'Hail', categories: ['nature'],
      approx: true, coords: [27.5300, 41.7600],
      tagline: 'A large family park with an artificial lake, on the slopes of Jabal Al-Samra.',
      overview: ['Al-Samra Park sits on the slopes of Jabal Al-Samra, east of Hail city, with a small zoo, an artificial lake, children\'s playgrounds and recreation areas, plus hiking opportunities on the mountain itself.'],
      history: ['Developed as a municipal park on Jabal Al-Samra, east of Hail city.'], religious: null,
      highlights: ['Artificial lake', 'Small zoo', 'Hiking on Jabal Al-Samra'],
      hours: { summary: 'Daily, daytime to evening', details: [], note: '' },
      tickets: { required: false, price: 'Free (some attractions may charge)', how: ['No booking for general entry.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Eastern Hail city, on Jabal Al-Samra.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Casual.', tips: ['Good family stop with a mix of park and light hiking.']
    },
    {
      id: 'al-maghwa-park', name: 'Al-Maghwa State Park', nativeName: 'منتزه المغوى',
      region: 'hail', city: 'Hail', categories: ['nature'],
      approx: true, coords: [27.6200, 41.5000],
      tagline: 'A mountain-ringed desert park in the Aja range, used for seasonal festivals.',
      overview: ['Al-Maghwa is a state park set among the Aja Mountains, combining desert stretches with greenery. It has hosted cultural events such as the Aja and Salma Festival run by the Ministry of Culture.'],
      history: ['Used by Saudi Arabia Ministry of Culture for regional festivals such as the Aja and Salma Festival.'], religious: null,
      highlights: ['Desert and mountain scenery', 'Seasonal cultural festivals'],
      hours: { summary: 'Daylight hours; extended during festivals', details: [], note: '' },
      tickets: { required: false, price: 'Free (festival tickets may apply separately)', how: ['No booking for general entry.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Aja Mountains area, NW Hail.', transport: 'Car.' },
      bestTime: 'During festival season, or October – April generally', duration: '1 hour', dress: 'Casual.', tips: ['Check for festival dates for the liveliest visit.']
    },
    {
      id: 'beit-hail-festival', name: 'Beit Hail Festival', nativeName: 'مهرجان بيت حائل',
      region: 'hail', city: 'Hail', categories: ['modern'],
      status: 'check',
      notice: 'This is a recurring seasonal festival, not a permanent site — check current dates before planning a visit.',
      approx: true, coords: [27.6200, 41.5000],
      tagline: 'A month-long summer heritage festival at Aja Park, with Ardah dance and Samri poetry.',
      overview: ['Beit Hail is an annual heritage festival held at Aja Park in Hail, typically running for about 30 days with evening programming from around 6 PM to 1 AM. It features the Saudi Ardah sword dance, Hail Samri sung poetry, craft markets and performances from other Saudi regions.'],
      history: ['Now in its fourth-plus year as of 2025, with reported attendance growing into the tens of thousands per edition.'],
      religious: null,
      highlights: ['Saudi Ardah sword dance', 'Hail Samri sung poetry', 'Craft markets and folk performances'],
      hours: { summary: 'Seasonal (typically summer); evenings roughly 6 PM – 1 AM', details: [], note: 'Confirm current-year dates before travelling.' },
      tickets: { required: false, price: 'Free or low-cost entry (varies by year)', how: ['Check Hail municipality/tourism announcements for dates.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Aja Park, Hail.', transport: 'Taxi.' },
      bestTime: 'During the festival window (check current dates)', duration: '2–3 hours', dress: 'Casual.', tips: ['Evenings are liveliest — most performances run after sunset.']
    },

    {
      id: 'jazan-archaeology-museum', name: 'Jazan Museum of Archaeology and Heritage', nativeName: 'متحف جازان للآثار والتراث',
      region: 'jazan', city: 'Jazan', categories: ['heritage', 'archaeology'],
      approx: true, coords: [16.9000, 42.5700],
      tagline: 'Finds from Neolithic flints to Islamic-era coins, beside the Al-Adrasah archaeological site.',
      overview: ['The Jazan Museum of Archaeology and Heritage sits next to the Al-Adrasah archaeological site and displays a wide range of finds from the region, spanning from Neolithic flint tools to Islamic-period currency and other relics.'],
      history: ['Run as part of the Jazan region heritage-preservation network alongside the Al-Adrasah site.'], religious: null,
      highlights: ['Neolithic stone tools', 'Islamic-era coins', 'Adjacent Al-Adrasah archaeological site'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'Near the Sabya–Jazan road.', transport: 'Car.' },
      bestTime: 'Year-round', duration: '45 minutes', dress: 'Casual.', tips: ['Combine with a wider Jazan city heritage day.']
    },
    {
      id: 'zaylai-maritime-museum', name: "Zayla'i Maritime Museum, Farasan Island", nativeName: 'متحف الزيلعي البحري',
      region: 'jazan', city: 'Farasan', categories: ['heritage', 'coast'],
      approx: true, coords: [16.7050, 42.1200],
      tagline: 'A private home-museum of Red Sea marine life and seafaring heritage.',
      overview: ['Zayla\'i Maritime Museum is a private museum on Farasan Island, housed in the home of its founder Zayla\'i Muhammad Dawood. It displays thousands of pieces of fish, shells and crustaceans alongside objects charting Jazan\'s seafaring and marine heritage, including the island\'s pearl-diving past.'],
      history: ['One of several private heritage museums that have opened on Farasan Island in recent years.'], religious: null,
      highlights: ['Marine biodiversity collection (fish, shells, crustaceans)', 'Seafaring and pearl-diving heritage'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'Ferry from Jazan port to Farasan.', transport: 'Ferry then taxi/car.' },
      bestTime: 'November – April', duration: '30–45 minutes', dress: 'Casual.', tips: ['Combine with the Al-Rifai House and Al-Najdi Mosque on the same island.']
    },
    {
      id: 'al-qassar-heritage-village', name: 'Al-Qassar Heritage Village, Farasan Island', nativeName: 'قرية القصار التراثية',
      region: 'jazan', city: 'Farasan', categories: ['heritage'], featured: true,
      approx: true, coords: [16.6600, 42.1300],
      tagline: 'A restored summer settlement of mud, coral and reed houses, about 400 strong.',
      overview: ['Al-Qassar is one of Farasan Island\'s earliest inhabited settlements, about 5 km from the main town. Originally a summer resort valued for its mild climate and shallow freshwater, it once held around 400 houses of local coral stone, mud, sand and tree fronds, many still bearing the names of their original families over their doorways.'],
      history: ['Restored and protected by the former Saudi Commission for Tourism and National Heritage; its ruins are dated to the late Islamic period. Farasani families traditionally travelled here each summer, sometimes timing weddings around the move.'],
      religious: null,
      highlights: ['Traditional coral/mud houses', 'Family names inscribed over doorways', 'Restored summer-settlement layout'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'About 5 km south of Farasan town.', transport: 'Ferry to Farasan, then car.' },
      bestTime: 'November – April', duration: '1 hour', dress: 'Modest clothes.', tips: ['Combine with the main Farasan town sites on the same trip.']
    },
    {
      id: 'qandal-mangrove-forest', name: 'Al-Qandal Mangrove Forest, Farasan Island', nativeName: 'غابة القندل',
      region: 'jazan', city: 'Farasan', categories: ['nature', 'coast'],
      approx: true, coords: [16.7800, 42.1400],
      tagline: 'A mangrove forest and bird sanctuary on northern Farasan Island.',
      overview: ['Al-Qandal Forest, on northern Farasan Island, is a dense mangrove stand (mostly Avicennia, with some Rhizophora) that has become a popular ecotourism and birdwatching destination, sheltering resident and migratory birds — travel write-ups mention hawks, gulls, pelicans and flamingos.'],
      history: ['Promoted in recent years as part of Farasan Islands growing ecotourism offer.'], religious: null,
      highlights: ['Mangrove boardwalks/waterways', 'Birdwatching (resident and migratory species)', 'Boat trips through the forest'],
      hours: { summary: 'Daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free (boat trips paid)', how: ['Arrange a boat trip locally on Farasan.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'Northern Farasan Island.', transport: 'Ferry to Farasan, then boat/car.' },
      bestTime: 'November – April, for migratory birds', duration: '1–2 hours', dress: 'Sun protection, insect repellent.', tips: ['Bring binoculars for birdwatching.']
    },
    {
      id: 'al-najdi-mosque', name: 'Al-Najdi Mosque, Farasan Island', nativeName: 'مسجد النجدي',
      region: 'jazan', city: 'Farasan', categories: ['religious', 'heritage'], featured: true,
      approx: true, coords: [16.7040, 42.1190],
      tagline: 'An Andalusian-style mosque with India-linked carved woodwork, built by a pearl-era Quran teacher.',
      overview: ['Al-Najdi Mosque, widely dated to around 1928 (sources vary 1916–1929), was built by Ibrahim Al-Najdi Al-Tamimi, a scholar who travelled from Hawtat Bani Tamim in Najd to Jazan to teach the Qur\'an. Built in an Andalusian architectural style, its minbar and mihrab carry carved, naturally coloured plant decoration — some accounts link the ornate woodwork and paintings to India, reflecting Farasan\'s pearl-trade links with the subcontinent.'],
      history: ['Considered one of the oldest mosques on Farasan Island; now undergoing restoration under the Prince Mohammed bin Salman Project for the Development of Historic Mosques.'],
      religious: ['An active mosque; respectful visits outside prayer times are generally welcomed.'],
      highlights: ['Andalusian-style architecture', 'Carved minbar and mihrab', 'Ongoing historic restoration'],
      hours: { summary: 'Open for prayer times', details: [], note: 'Parts may be closed during restoration work — check locally.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'Farasan town.', transport: 'Ferry to Farasan, then taxi.' },
      bestTime: 'November – April', duration: '20–30 minutes', dress: 'Modest clothes; cover shoulders and knees.', tips: ['Combine with the Al-Rifai House, a short walk away.']
    },
    {
      id: 'wadi-baish-dam', name: 'Wadi Baish & Baysh Dam', nativeName: 'وادي بيش وسد بيش',
      region: 'jazan', city: 'Baish', categories: ['nature'], featured: true,
      coords: [17.3756, 42.5372],
      tagline: 'A huge gravity dam — among Saudi Arabia\'s tallest — on a 155 km seasonal valley.',
      overview: ['Baysh Dam, about 35 km north-east of Baish, is a major gravity dam roughly 106 m tall and 340 m long, with a storage capacity of about 194 million m³ — among the tallest and largest-capacity dams in Saudi Arabia. It controls flooding on Wadi Baish, a roughly 155 km seasonal valley running from the Daffa and Dhubh valleys to the Red Sea, and supports irrigation and desalinated drinking water for Jazan and Asir.'],
      history: ['Built between 2003 and 2009 by the Ministry of Water and Electricity.'],
      religious: null,
      highlights: ['Large reservoir lake', 'Year-round greenery along the valley', 'Dam viewpoint'],
      hours: { summary: 'Open area, daylight hours', details: [], note: 'Water levels and access can change — check locally, especially after heavy rain.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'About 35 km NE of Baish.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Casual.', tips: ['A scenic stop if touring northern Jazan Province.']
    },
    {
      id: 'al-khoubah-hot-springs', name: 'Al-Khoubah Hot Springs', nativeName: 'عيون الخوبة الحارة',
      region: 'jazan', city: 'Al-Harth', categories: ['nature'],
      status: 'check',
      notice: 'Reported distance, temperature and development status vary by source — confirm current access locally before planning a visit.',
      approx: true, coords: [16.7842, 43.1529],
      tagline: 'Sulfur-rich thermal springs in the Jazan highlands, used for therapeutic bathing.',
      overview: ['Al-Khoubah is a hot spring roughly 70–75 km east/south-east of Jazan city, near Al-Harth Governorate. Its sulfurous, mineral-rich water (reported temperatures range widely across sources, from about 45°C to over 70°C) is traditionally used by visitors seeking relief from skin conditions and rheumatism.'],
      history: ['Assessed at various points by Saudi tourism authorities as a potential health-tourism investment site.'],
      religious: null,
      highlights: ['Natural sulfur hot spring', 'Traditional therapeutic bathing'],
      hours: { summary: 'Daylight hours; development status unconfirmed', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally in Al-Harth or Jazan.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'Al-Harth Governorate, east of Jazan.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Swimwear/casual clothes.', tips: ['Confirm current facilities locally — this may be undeveloped.']
    },
    {
      id: 'al-dayer-khawlani-coffee', name: 'Al-Dayer Bani Malik — Khawlani Coffee Country', nativeName: 'الداير بني مالك — بلاد البن الخولاني',
      region: 'jazan', city: 'Al-Dayer', categories: ['nature'],
      status: 'check',
      notice: 'The Al-Ain Al-Harrah hot spring claim for this area came from a lower-reliability source — treat it as unconfirmed and ask locally.',
      approx: true, coords: [17.0000, 43.1000],
      tagline: 'Terraced Khawlani coffee farms on Jabal Bani Malik, over 2,000 m up, with a reported hot spring.',
      overview: ['Al-Dayer Bani Malik Governorate, in the Jazan highlands, is the Kingdom\'s leading producer of Khawlani coffee, grown on terraces on Jabal Bani Malik (over 2,000 m). The area hosts an annual Coffee Beans Festival celebrating the harvest. A hot spring, Al-Ain Al-Harrah in nearby Wadi Damad, has also been reported in this general area, though with limited independent confirmation.'],
      history: ['Khawlani coffee cultivation here is a centuries-old mountain tradition shared with neighbouring Asir and Al-Bahah.'],
      religious: null,
      highlights: ['Terraced coffee farms', 'Annual Coffee Beans Festival', 'Mountain scenery over 2,000 m'],
      hours: { summary: 'Daylight hours; festival dates vary by year', details: [], note: '' },
      tickets: { required: false, price: 'Free (festival may have its own programme)', how: ['Check for current Coffee Beans Festival dates.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'Al-Dayer Bani Malik Governorate, eastern Jazan highlands.', transport: 'Car.' },
      bestTime: 'During the coffee harvest/festival season', duration: '1–2 hours', dress: 'Comfortable shoes for terraced slopes.', tips: ['Check for the Coffee Beans Festival dates for the liveliest visit.']
    },
    {
      id: 'al-shuqaiq-beach', name: 'Al-Shuqaiq Beach & Corniche', nativeName: 'شاطئ وكورنيش الشقيق',
      region: 'jazan', city: 'Al-Shuqaiq', categories: ['coast'], featured: true,
      coords: [17.7218, 42.0260],
      tagline: 'A long Red Sea beach and promenade, about 150 km north of Jazan city.',
      overview: ['Al-Shuqaiq is a coastal town in Al-Darb Governorate, about 150 km north of Jazan city, with a popular beach stretching a reported 20–30 km and a corniche promenade with play areas for children. It draws visitors for swimming, fishing, picnics and sunset views, with cooler months (October–April) recommended.'],
      history: ['One of several developed public beaches along the Jazan Red Sea coast.'], religious: null,
      highlights: ['Long sandy beach', 'Corniche promenade', 'Swimming, fishing and picnic spots'],
      hours: { summary: 'Open daily', details: [], note: 'No lifeguards reported — swim with caution.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'About 150 km north of Jazan city, 26 km west of Ad-Darb.', transport: 'Car.' },
      bestTime: 'October – April', duration: '2–3 hours', dress: 'Modest swimwear.', tips: ['No lifeguards — take care swimming, especially with children.']
    },
    {
      id: 'sabya-al-manarah-site', name: 'Al-Manarah & Al-Rayan Archaeological Sites, Sabya', nativeName: 'موقعا المنارة والريان الأثريان',
      region: 'jazan', city: 'Sabya', categories: ['archaeology', 'heritage'],
      coords: [17.1319, 42.5073],
      tagline: '17th-century architectural ruins in Sabya Governorate, north of Jazan city.',
      overview: ['Al-Manarah and Al-Rayan are archaeological sites in Sabya Governorate comprising the remains of buildings dated to the 17th century, alongside Sabya\'s separate Archaeological Castle near Sabya Avenue and King Fahd Park.'],
      history: ['Part of a wider set of archaeological remains recorded across Sabya Governorate.'], religious: null,
      highlights: ['17th-century building remains', 'Nearby Sabya Archaeological Castle'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'Sabya Governorate, north of Jazan city.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Modest clothes.', tips: ['Combine with the Sabya Archaeological Castle nearby.']
    },
    {
      id: 'jabal-al-qahar', name: 'Jabal Al-Qahar', nativeName: 'جبال القهر',
      region: 'jazan', city: 'Ar Rayth', categories: ['nature'], featured: true,
      approx: true, coords: [17.6200, 42.9000],
      tagline: 'Rugged 2,000 m peaks in Al-Rayth Governorate — the mountain enclosing Wadi Lajab.',
      overview: ['Jabal Al-Qahar ("struggle mountain") is a rugged mountain range in Al-Rayth Governorate, north-eastern Jazan, rising to around 2,000 m. It encloses Wadi Lajab, the moss-covered slot canyon that has become one of Jazan\'s best-known hiking destinations, and geological studies suggest the range once lay beneath the sea. Access is via a pass on the mountain\'s eastern side; the area was historically a caravan passageway.'],
      history: ['Researchers believe the area was home to some of the Arabian Peninsula\'s earliest inhabitants.'],
      religious: null,
      highlights: ['Rugged granite/limestone peaks', 'Encloses Wadi Lajab canyon', 'Historic caravan pass'],
      hours: { summary: 'Daylight hours', details: [], note: 'Rough terrain — a local guide is recommended.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'Al-Rayth Governorate, inland from Jazan.', transport: 'Car; 4x4 for rougher tracks.' },
      bestTime: 'October – March', duration: 'Half day', dress: 'Sturdy shoes, sun protection.', tips: ['Combine with Wadi Lajab, which sits within this range.']
    },
    {
      id: 'ras-tarfah-site', name: 'Ras Tarfah Archaeological Site', nativeName: 'موقع رأس طرفة الأثري',
      region: 'jazan', city: 'Sabya', categories: ['archaeology', 'coast'],
      approx: true, coords: [17.0000, 42.1000],
      tagline: 'A Red Sea headland site spanning South Arabian antiquity to the 13th century.',
      overview: ['Ras Tarfah is an archaeological site on a headland within the Red Sea near the Sabya coast, with remains dating from the civilisation of southern Arabia through the early Islamic period to as late as the 13th century.'],
      history: ['One of several multi-period coastal sites recorded along the Jazan Red Sea coast.'], religious: null,
      highlights: ['Multi-period coastal archaeological remains'],
      hours: { summary: 'Open area, daylight hours', details: [], note: 'Remote — a local guide is recommended.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Abdullah bin Abdulaziz Airport, Jazan (GIZ)', road: 'Sabya coast.', transport: 'Car, possibly boat access for parts of the headland.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Comfortable clothes.', tips: ['Best suited to visitors with a strong interest in archaeology.']
    },

    {
      id: 'najran-regional-museum', name: 'Najran Regional Museum', nativeName: 'متحف نجران الإقليمي',
      region: 'najran', city: 'Najran', categories: ['heritage', 'archaeology'],
      approx: true, coords: [17.4800, 44.1200],
      tagline: 'Five halls of Najran archaeology, heritage and unification history.',
      overview: ['Najran Regional Museum, near the Al-Ukhdood archaeological site, covers about 20,100 m² across five exhibition halls documenting the region\'s archaeology and heritage — local building methods, farming and crafts — with a final hall on the unification of Saudi Arabia and the province\'s history.'],
      history: ['Sources differ on the exact opening date (accounts range from the mid-1980s to the mid-1990s); redeveloped under Saudi Arabia\'s National Transformation Programme 2030 regional-museums initiative.'],
      religious: null,
      highlights: ['Five themed exhibition halls', 'Najran archaeology and heritage displays', 'Near Al-Ukhdood site'],
      hours: { summary: 'Check locally for current hours', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'Near Al-Ukhdood, Najran city.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '45–60 minutes', dress: 'Casual.', tips: ['Combine with Al-Ukhdood on the same trip.']
    },
    {
      id: 'raoum-castle', name: 'Raoum Castle & Jabal Raoum', nativeName: 'قلعة رعوم وجبل رعوم',
      region: 'najran', city: 'Najran', categories: ['heritage', 'nature'], featured: true,
      approx: true, coords: [17.4600, 44.0900],
      tagline: 'A hilltop watchtower with sweeping views over the Najran valley.',
      overview: ['Raoum Castle sits atop Jabal Raoum, south-west of Najran city, built as a security/observation fortress. It became a tourist and archaeological site in 1953; a short hike (around an hour) leads to the summit for panoramic views over the Najran valley and surrounding villages.'],
      history: ['Dated by Saudipedia to 1929; sources disagree on who built it and on the mountain\'s exact elevation (reports range from about 1,000 m to 1,557 m).'],
      religious: null,
      highlights: ['Short summit hike', 'Panoramic valley views', 'Restored fortress ruins'],
      hours: { summary: 'Daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'South-west Najran city.', transport: 'Car, then a short hike.' },
      bestTime: 'October – April, early morning or late afternoon', duration: '1–2 hours', dress: 'Sturdy shoes, sun protection.', tips: ['Go near sunset for the best light over the valley.']
    },
    {
      id: 'al-qabil-village', name: 'Al-Qabil Village, Najran', nativeName: 'قرية القابل',
      region: 'najran', city: 'Najran', categories: ['heritage'],
      approx: true, coords: [17.5000, 44.1500],
      tagline: 'An oasis village of ancient palm groves and historic mud homes.',
      overview: ['Al-Qabil is one of Najran\'s heritage villages, known for its ancient palm groves alongside historic mud-built homes, part of a wider network of around 34 recognised heritage villages across the Najran region.'],
      history: ['Part of a network of around 34 recognised heritage villages across the Najran region.'], religious: null,
      highlights: ['Ancient palm groves', 'Traditional mud architecture'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'Najran area.', transport: 'Car.' },
      bestTime: 'October – April', duration: '45 minutes', dress: 'Modest clothes.', tips: ['Combine with Al-Lijam village and the Al-Ukhdood site.']
    },
    {
      id: 'al-lijam-village', name: 'Al-Lijam Village, Najran', nativeName: 'قرية اللجام',
      region: 'najran', city: 'Najran', categories: ['heritage'],
      approx: true, coords: [17.4900, 44.1600],
      tagline: 'A Najran heritage village with over 20 centuries-old mud palaces.',
      overview: ['Al-Lijam is one of Najran\'s 34 recognised heritage villages, known for more than 20 mud houses and palaces of varying height and style, blending ancient and more recent building styles.'],
      history: ['One of Najran\'s historic mud-architecture villages, now part of local heritage-tourism efforts.'], religious: null,
      highlights: ['20+ traditional mud houses and palaces', 'Mix of ancient and modern Najdi/Najrani building styles'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'Najran area.', transport: 'Car.' },
      bestTime: 'October – April', duration: '45 minutes', dress: 'Modest clothes.', tips: ['Combine with Al-Qabil village nearby.']
    },
    {
      id: 'souq-al-janabi', name: 'Souq Al-Janabi, Najran', nativeName: 'سوق الجنابي',
      region: 'najran', city: 'Najran', categories: ['heritage'], featured: true,
      approx: true, coords: [17.4950, 44.1300],
      tagline: 'A 150-year-old market devoted to Najran\'s ornate traditional daggers.',
      overview: ['Souq Al-Janabi, in Najran\'s Aba Al-Saud area, is reportedly over 150 years old and is dedicated almost entirely to the janbiya — a traditional curved dagger similar to those of neighbouring Yemen — with shops selling blades, leather holsters and related craft. It doubles as a social gathering place for local elders, and is busiest around Eid.'],
      history: ['Fine janbiya daggers here can reportedly sell for SAR 250,000 or more depending on materials and craftsmanship.'],
      religious: null,
      highlights: ['Traditional janbiya daggers', 'Dagger-making workshops', 'Busy atmosphere around Eid'],
      hours: { summary: 'Typically evenings; busiest around Eid', details: [], note: '' },
      tickets: { required: false, price: 'Free to browse', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'Aba Al-Saud area, Najran city.', transport: 'Taxi.' },
      bestTime: 'Evenings, especially around Eid', duration: '30–45 minutes', dress: 'Modest clothes.', tips: ['Bargaining is customary — prices vary hugely by craftsmanship and materials.']
    },
    {
      id: 'uruq-al-mundafin', name: 'Uruq Al-Mundafin', nativeName: 'عروق المنضفن',
      region: 'najran', city: 'Najran', categories: ['nature', 'archaeology'],
      status: 'check',
      notice: 'Sources disagree on whether this site lies in Najran or neighbouring Yadamah Province, and detailed visitor information is thin — treat as a remote, lightly documented site.',
      approx: true, coords: [18.0000, 45.5000],
      tagline: 'A remote desert lake site in the sands north of Najran, dated to the Pleistocene–Holocene.',
      overview: ['Uruq Al-Mundafin is a desert site in the sand sea north of Najran/Yadamah, associated with an ancient lake bed (Uruq Al-Mundafin Lake) dated to roughly 12,000–120,000 years ago. It is listed among Najran Province\'s notable archaeological/natural sites, alongside the much better-documented Uruq Bani Ma\'arid reserve nearby.'],
      history: ['Listed by Saudi heritage sources alongside the Uruq Bani Ma\'arid reserve as a notable desert archaeological area.'], religious: null,
      highlights: ['Ancient lakebed deposits', 'Remote dune landscape'],
      hours: { summary: 'Open area; remote and lightly visited', details: [], note: 'A local guide and 4x4 are strongly recommended.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'North of Najran, toward the Yadamah border area.', transport: '4x4 with local guide.' },
      bestTime: 'October – March', duration: 'Half day', dress: 'Sun protection, sturdy shoes.', tips: ['Not a developed tourist site — go with a knowledgeable local guide.']
    },
    {
      id: 'king-fahd-park-najran', name: 'King Fahd Park, Najran (Saqam Forest)', nativeName: 'منتزه الملك فهد — غابة سقام',
      region: 'najran', city: 'Najran', categories: ['nature'],
      approx: true, coords: [17.4500, 44.1300],
      tagline: 'Najran\'s largest park, with tens of thousands of trees in the Saqam Forest.',
      overview: ['King Fahd Park, in the Saqam Forest on the southern side of Najran city, is described as the city\'s largest park and a major green recreation site — reports vary between about 650,000 m² and 4 million m², with around 35,000 trees and 850 date palms, play areas, a 2.6 km walking/cycling track, a fountain garden and a light garden.'],
      history: ['Developed as Najran\'s flagship municipal park within the Saqam Forest area.'], religious: null,
      highlights: ['Fountain and light gardens', 'Long walking/cycling track', 'Tens of thousands of trees'],
      hours: { summary: 'Daily, daytime to evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'Saqam Forest, southern Najran city.', transport: 'Taxi.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Casual.', tips: ['A popular evening spot, especially in summer.']
    },
    {
      id: 'al-midmar-tower', name: 'Kasbat Al-Midmar, Badr Al-Janoub', nativeName: 'قصبة المضمار',
      region: 'najran', city: 'Badr Al-Janoub', categories: ['heritage'],
      approx: true, coords: [17.3300, 43.9300],
      tagline: 'A restored seven-storey, 300-year-old mud watchtower.',
      overview: ['Kasbat Al-Midmar is a seven-storey mud-brick tower in the old quarter of Badr Al-Janoub, north of Najran, dating back more than three centuries. Originally built to safeguard nearby farmland, it was once known as part of "Badr Palaces" and stands near the ruins of Al-Qasabah.'],
      history: ['Restored and now maintained under Saudi Arabia\'s Heritage Commission (reported July 2025).'],
      religious: null,
      highlights: ['Seven-storey mud-brick tower', 'Historic farmland watchtower', 'Nearby Al-Qasabah ruins'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'Badr Al-Janoub Governorate, north of Najran.', transport: 'Car.' },
      bestTime: 'October – April', duration: '30–45 minutes', dress: 'Casual.', tips: ['Combine with a wider Badr Al-Janoub nature/heritage day trip.']
    },

    {
      id: 'prince-hussam-park', name: 'Prince Hussam Park, Al-Bahah', nativeName: 'منتزه الأمير حسام',
      region: 'bahah', city: 'Al-Bahah', categories: ['nature'], featured: true,
      approx: true, coords: [20.0150, 41.4650],
      tagline: 'A 160,000 m² highland park with an artificial lake and waterfalls, overlooking the city and Tihama.',
      overview: ['Prince Hussam Park, named for Al-Baha\'s governor Prince Hussam bin Saud, covers roughly 160,000 m² with about 1,400 trees, 4,000 shrubs, 36 seating areas and 21 shaded structures, built around a 1,200 m² artificial lake plus a smaller dry lake, with waterfalls and interactive fountains scattered through the grounds. It overlooks the city on one side and the Tihama lowlands on the other.'],
      history: ['Developed by Al-Baha municipality; has added accessibility projects for elderly and disabled visitors.'],
      religious: null,
      highlights: ['Artificial lake and waterfalls', 'Tihama viewpoint', 'Accessible walking paths'],
      hours: { summary: 'Daily, daytime to evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'Near Raghadan Road, central Al-Bahah.', transport: 'Taxi.' },
      bestTime: 'June – September', duration: '1–2 hours', dress: 'Casual.', tips: ['Combine with Raghadan Forest Park nearby.']
    },
    {
      id: 'khairah-jadar-waterfall-park', name: 'Khairah Forest Park & Jadar Waterfall', nativeName: 'غابة خيرة وشلالات جادر',
      region: 'bahah', city: 'Al-Bahah', categories: ['nature'], featured: true,
      approx: true, coords: [19.8000, 41.3500],
      tagline: 'Al-Baha\'s tallest waterfall, fed by rainwater terraces in the Bani Hasan highlands.',
      overview: ['Khairah Forest Park sits in Bani Hasan Governorate, about 30 km south of Al-Baha city, in the Sarawat Mountains. Its waterfall — called the Khairah, Jadar, or Qalt waterfall depending on the source, and sometimes marketed as Prince Mishari Park — is fed by rainwater collected on terraced agricultural slopes above, and is described by the regional government as the tallest waterfall in Al-Baha Province. Trails are lined with juniper, wild olive and acacia trees, and the area is popular for camping.'],
      history: ['The nearby Al-Shallal theme park takes its name from these waterfalls.'],
      religious: null,
      highlights: ['Al-Baha\'s tallest waterfall', 'Juniper/wild-olive hiking trails', 'Popular camping spot'],
      hours: { summary: 'Daylight hours; waterfall flow depends on recent rain', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'About 30 km south of Al-Baha city, Bani Hasan Governorate.', transport: 'Car.' },
      bestTime: 'After rain, June – September', duration: '2–3 hours', dress: 'Sturdy shoes, sun protection.', tips: ['Check for recent rainfall — the waterfall can run dry.']
    },
    {
      id: 'bin-raqoush-palace', name: 'Bin Raqoush Palace, Al-Bahah', nativeName: 'قصر بن رقوش',
      region: 'bahah', city: 'Al-Bahah', categories: ['heritage'], featured: true,
      approx: true, coords: [20.0500, 41.4600],
      tagline: 'A fortified five-house complex built in 1833–34, once visited by King Saud.',
      overview: ['Bin Raqoush Palace, in Bani Saar village north of Al-Bahah city, is a fortified residence built around 1833–34 (1249 AH) by Rashid bin Jamaan bin Raqoush, ruler of the local Zahran tribes, who pledged allegiance to King Abdulaziz. The complex of five houses, some rising three storeys, was built in two stages with highly fortified geometric angles. King Saud\'s 1955 visit added to its historical significance. It has since been restored as a museum, tourist centre and venue for heritage events.'],
      history: ['Restored by the Saudi Heritage Commission; now used for cultural events.'],
      religious: null,
      highlights: ['Fortified five-house complex', 'Site of a 1955 royal visit', 'Heritage event venue'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'Bani Saar village, King Abdulaziz Road, north of Al-Bahah city.', transport: 'Car.' },
      bestTime: 'Year-round', duration: '45 minutes', dress: 'Modest clothes.', tips: ['Check for heritage events, which can add live demonstrations.']
    },
    {
      id: 'al-baha-regional-museum', name: 'Al-Bahah Regional Museum', nativeName: 'متحف الباحة الإقليمي للآثار والتراث',
      region: 'bahah', city: 'Al-Bahah', categories: ['heritage', 'archaeology'],
      approx: true, coords: [20.0200, 41.4500],
      tagline: 'Islamic-era inscriptions and Byzantine, Ottoman and Abbasid coins from the region.',
      overview: ['Al-Bahah Regional Museum (Regional Museum of Antiquities and Heritage) displays historical pieces and ancient inscriptions recounting the region\'s past, including Islamic-era stone inscriptions and coins from the Byzantine, Ottoman and Abbasid periods, built in a style echoing traditional Al-Bahah architecture.'],
      history: ['Built in 2003; reported to be under expansion/relocation planning in subsequent years.'],
      religious: null,
      highlights: ['Islamic-era stone inscriptions', 'Byzantine/Ottoman/Abbasid coins', 'Traditional Al-Bahah-style building'],
      hours: { summary: 'Check locally for current hours', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'Al-Bahah city.', transport: 'Taxi.' },
      bestTime: 'Year-round', duration: '45 minutes', dress: 'Casual.', tips: ['Confirm current location — the museum has reportedly been expanding/relocating.']
    },
    {
      id: 'al-malad-twin-fortresses', name: 'Al-Malad Twin Fortresses (Al-Akhawain Castle)', nativeName: 'قلعتا الأخوين — قرية الملد',
      region: 'bahah', city: 'Al-Bahah', categories: ['heritage'], featured: true,
      approx: true, coords: [19.9800, 41.4700],
      tagline: 'Two identical 400-year-old fortresses built by two brothers, just metres apart.',
      overview: ['The Twin Fortresses (Al-Akhawain, "The Two Brothers") stand in Al-Malad village south of Al-Bahah city, on the road toward Baljurashi, about 100 m above Wadi Al-Malad. Built roughly 400 years ago by two brothers for military observation and as food warehouses, the two towers are precisely equal in form, dimensions, height and interior design, separated by only about 120 cm. The site also hosted several historic inter-tribal peace agreements.'],
      history: ['Dated to around four centuries ago; restored by the Saudi Heritage Commission.'],
      religious: null,
      highlights: ['Two identical stone towers, 120 cm apart', 'Site of historic tribal peace agreements', 'Valley viewpoint'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'Al-Malad village, on the Al-Bahah–Baljurashi road.', transport: 'Car.' },
      bestTime: 'Year-round', duration: '30–45 minutes', dress: 'Comfortable shoes.', tips: ['Combine with a Baljurashi day trip.']
    },
    {
      id: 'wadi-al-janabeen-dam-park', name: 'Wadi Al-Janabeen Dam & Park, Baljurashi', nativeName: 'سد ومنتزه وادي الجنابين',
      region: 'bahah', city: 'Baljurashi', categories: ['nature'],
      approx: true, coords: [19.8700, 41.5700],
      tagline: 'A dam-overlooking park with a corniche walkway in Bani Kabeer, Baljurashi.',
      overview: ['Al-Janabeen Park, in Bani Kabeer, Baljurashi Governorate, sits beside the Al-Janabeen Dam with a corniche walkway running along the park overlooking the reservoir and surrounding mountain scenery.'],
      history: ['Developed as a municipal park alongside the existing Al-Janabeen Dam reservoir.'], religious: null,
      highlights: ['Dam-overlooking corniche walkway', 'Mountain scenery'],
      hours: { summary: 'Daily, daytime to evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'Bani Kabeer, Baljurashi Governorate.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Casual.', tips: ['Combine with a wider Baljurashi highlands day trip.']
    },
    {
      id: 'souq-al-sabt-baljurashi', name: 'Saturday Market (Souq Al-Sabt), Baljurashi', nativeName: 'سوق السبت',
      region: 'bahah', city: 'Baljurashi', categories: ['heritage'], featured: true,
      approx: true, coords: [19.8650, 41.5650],
      tagline: 'A century-old weekly market for honey, ghee, dates and antique copperware.',
      overview: ['The Saturday Market in Baljurashi Governorate dates back more than a century and is one of the most famous traditional markets in Al-Bahah Province. Vendors from across the region sell honey, ghee, fruit and vegetables, dates, basil and old copper utensils; Al-Bahah\'s wider honey trade (the region produces roughly 800 tonnes a year from about 125,000 hives) is celebrated annually at Al-Baha\'s International Honey Festival.'],
      history: ['One of the oldest continuously-run weekly markets in Al-Bahah Province.'], religious: null,
      highlights: ['Local honey and ghee', 'Antique copperware', 'Over a century of trading history'],
      hours: { summary: 'Weekly, traditionally Saturdays — confirm current day/hours locally', details: [], note: '' },
      tickets: { required: false, price: 'Free to browse', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'Baljurashi Governorate.', transport: 'Car.' },
      bestTime: 'Saturday mornings (confirm locally)', duration: '1 hour', dress: 'Casual.', tips: ['Try to time a visit with the annual Honey Festival for the best selection.']
    },
    {
      id: 'qasaba-towers-albaha', name: 'Qasaba Stone Towers of Al-Bahah', nativeName: 'قصبات الباحة — برج القصبة',
      region: 'bahah', city: 'Al-Bahah', categories: ['heritage'],
      approx: true, coords: [20.1000, 41.4000],
      tagline: 'The "region of 1,001 towers" — thousands of stone watchtowers guarding Al-Bahah\'s villages.',
      overview: ['"Qasaba" is the local term for the stone watchtowers that dot Al-Bahah and neighbouring Asir — either freestanding hilltop towers or ones built into tower-houses. Historians estimate roughly 4,000 such towers across the province, once guarding villages, roads and farmland from rival tribes and doubling as warehouses for tools and produce; built with narrow slit windows and slate-cornice roofs to shed rain, many are now in various states of ruin. Notable examples include the two conical towers of Al-Muld village and the Al-Akhawain Twin Fortresses.'],
      history: ['Earned Al-Bahah the nickname "the region of 1,001 towers".'],
      religious: null,
      highlights: ['Stone watchtowers across the highlands', 'Al-Muld village conical towers', 'Centuries of defensive architecture'],
      hours: { summary: 'Open area, daylight hours', details: [], note: 'Many towers are in ruins — view from a safe distance.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'Scattered across Al-Bahah Province highlands.', transport: 'Car; a local guide helps find well-preserved examples.' },
      bestTime: 'October – April', duration: 'Varies — a stop or a half-day tower-spotting drive', dress: 'Comfortable shoes.', tips: ['Ask locally for directions to the best-preserved individual towers.']
    },
    {
      id: 'bani-hasan-villages', name: 'Bani Hasan Heritage Villages', nativeName: 'قرى بني حسن التراثية',
      region: 'bahah', city: 'Al-Bahah', categories: ['heritage'],
      approx: true, coords: [20.2000, 41.3000],
      tagline: 'A cluster of stone villages and forts north of Al-Bahah, including Al-Asada and Shabarqa.',
      overview: ['Bani Hasan Governorate, north of Al-Bahah city, holds a cluster of traditional stone heritage villages, including Al-Asada (about 30 km north of Al-Bahah), Shabarqa (about 15 km north-west, on the Al-Bahah–Al-Mandaq tourist road) and Al-Sughra (about 27 km north-west), alongside forts such as Al-Ayyinah Fort, a pyramidal structure roughly 40 km north of the city.'],
      history: ['Part of a wider network of traditional stone villages across Al-Bahah highlands.'], religious: null,
      highlights: ['Al-Asada, Shabarqa and Al-Sughra villages', 'Al-Ayyinah pyramidal fort', 'Traditional stone architecture'],
      hours: { summary: 'Open area, daylight hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'Bani Hasan Governorate, north of Al-Bahah.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['Combine with a drive toward Al-Mandaq on the scenic tourist road.']
    },
    {
      id: 'al-ayed-heritage-houses', name: 'Al-Ayed Heritage Houses, Bani Kabir', nativeName: 'بيوت العايد التراثية — بني كبير',
      region: 'bahah', city: 'Baljurashi', categories: ['heritage'],
      approx: true, coords: [19.8700, 41.5600],
      tagline: 'A cluster of restored historic houses preserving Al-Bahah\'s everyday heritage.',
      overview: ['In Bani Kabir village, Sharifa Al-Ghamdi has acquired and restored a cluster of historic houses — known locally for the Al-Ayed name — to give visitors a sense of traditional Al-Bahah life, alongside other private heritage collections in the province such as the Al-Omda, Al-Akhawayn and Al-Qat\'i museums.'],
      history: ['Assembled over many years by a private collector restoring old village houses.'], religious: null,
      highlights: ['Restored historic houses', 'Everyday-life heritage displays'],
      hours: { summary: 'Check locally', details: [], note: '' },
      tickets: { required: false, price: 'Unconfirmed', how: ['Ask locally.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'Bani Kabir village, Baljurashi area.', transport: 'Car.' },
      bestTime: 'Year-round', duration: '45 minutes', dress: 'Modest clothes.', tips: ['Combine with the Saturday Market and Al-Janabeen Dam Park nearby.']
    },
    {
      id: 'al-mandaq-viewpoint-parks', name: 'Al-Mandaq Viewpoint Parks', nativeName: 'منتزهات المندق ذات الإطلالات',
      region: 'bahah', city: 'Al-Mandaq', categories: ['nature'],
      approx: true, coords: [20.1800, 41.2200],
      tagline: 'Cliff-edge gardens over the Tihama plains, about 40 km from Al-Bahah.',
      overview: ['Al-Mandaq Governorate, on the heights of the Sarawat Mountains overlooking the Tihama, holds several viewpoint parks: Al-Khulb Park ("Lady Cloud"), with panoramic Tihama views and photography installations; Alborj Garden (Al-Khalab Park), centred on a seven-floor tower with cafes and restaurants; Dhuhr Al-Ghuna Park at a mountaintop; and Barahrah Garden, overlooking Wadi Tirbah.'],
      history: ['Developed by Al-Bahah municipality to showcase the governorate escarpment views.'], religious: null,
      highlights: ['Al-Khulb ("Lady Cloud") viewpoint', 'Alborj seven-floor tower', 'Tihama plain panoramas'],
      hours: { summary: 'Daylight hours; fog/cloud views often best in summer', details: [], note: '' },
      tickets: { required: false, price: 'Free (cafes/restaurants paid)', how: ['No booking for general entry.'], links: [] },
      gettingThere: { airport: 'Al-Baha (ABT)', road: 'About 40 km north-west of Al-Bahah city.', transport: 'Car.' },
      bestTime: 'June – September, for fog and cloud views', duration: '1–2 hours', dress: 'Light jacket for wind.', tips: ['Summer fog rolling over the escarpment is the signature sight here.']
    },

    /* ======================= ROUND 3: JAZAN / AL-BAHAH ======================= */
    {
      id: 'wadi-lajab', name: 'Wadi Lajab', nativeName: 'وادي لجب',
      region: 'jazan', city: 'Ar Rayth', categories: ['nature'],
      coords: [17.6096, 42.9394],
      tagline: 'A narrow green canyon with streams and hanging plants.',
      overview: ['Wadi Lajab is a dramatic slot canyon in the mountains of Jazan, with sheer rock walls, palms, ferns and a flowing stream for much of the year.'],
      history: ['Little developed, it has become a favourite of hikers and photographers in recent years.'],
      religious: null,
      highlights: ['Canyon walk', 'Stream and pools', 'Lush vegetation'],
      hours: { summary: 'Daytime only', details: [], note: 'Do not enter during or after heavy rain.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Jazan (GIZ)', road: 'Inland from Jazan towards Ar Rayth; last part on rough road.', transport: '4x4 recommended.' },
      bestTime: 'October – March', duration: 'Half a day', dress: 'Shoes that can get wet.', tips: ['Go with a local guide.']
    },
    {
      id: 'shada-al-ala', name: 'Shada Al-A\'la Mountain', nativeName: 'جبل شدا الأعلى',
      region: 'bahah', city: 'Al-Mikhwah', categories: ['nature', 'heritage'],
      approx: true, coords: [19.8500, 41.3000],
      tagline: 'A granite mountain reserve with houses built under boulders.',
      overview: ['Shada Al-A\'la is a protected granite mountain rising above the Tihama. Its villages have homes built beneath giant boulders, surrounded by terraces of coffee, figs and herbs.'],
      history: ['The mountain has long been farmed by local communities and was declared a protected area for its biodiversity.'],
      religious: null,
      highlights: ['Boulder houses', 'Terraced farms', 'Panoramic views'],
      hours: { summary: 'Daytime', details: [], note: 'Steep mountain roads.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Bahah (ABT)', road: 'Near Al-Mikhwah, below Al-Bahah.', transport: '4x4 recommended.' },
      bestTime: 'October – April', duration: 'Full day', dress: 'Hiking shoes.', tips: ['Hire a local guide for the villages.']
    },

    /* ======================= ROUND 3: TABUK / AL-JAWF ======================= */
    {
      id: 'maghaer-shuaib', name: 'Madyan Shuaib (Mughair Shu\'ayb)', nativeName: 'مدين شعيب — مغاير شعيب',
      region: 'tabuk', city: 'Al-Bad\'', categories: ['archaeology', 'religious', 'heritage'], featured: true,
      coords: [28.4878, 35.0032], wiki: 'https://en.wikipedia.org/wiki/Shuaib',
      tagline: 'Rock-cut tombs in the ancient land of Madyan, the people of Prophet Shu\'ayb.',
      overview: [
        'Madyan Shuaib — also called Mughair Shu\'ayb ("the caves of Shu\'ayb") — is an ancient archaeological site in Al-Bad\' Governorate of Tabuk Province, about 225 km north-west of Tabuk city and close to the Gulf of Aqaba, inside the NEOM region.',
        'The site is famous for its monumental tombs and façades carved into sandstone cliffs, with stepped "crow-step" decorations very similar to those of Hegra (Mada\'in Salih) and Petra. Around them are the remains of ancient water wells and residential quarters.',
        'Stairs and walkways now lead visitors between the tomb groups, and a visitor area explains the history of the site.'
      ],
      history: [
        'The area is widely identified with ancient Madyan (Midian), a people and land in north-west Arabia known from both Islamic and Biblical sources. Madyan lay on the incense and trade routes linking southern Arabia with Egypt and the Levant.',
        'The rock-cut tombs date mainly to the Nabataean period (around the 1st century BCE to the 1st century CE). Their architecture shows Nabataean influence alongside traces of earlier Lihyanite and later Roman-era styles.',
        'Archaeological surveys have documented tombs, wells, and the remains of settlements, showing that the oasis was an important stop for caravans for many centuries.'
      ],
      religious: [
        'In Islamic tradition, Madyan is the land to which Allah sent Prophet Shu\'ayb (often identified with Jethro in the Bible, the father-in-law of Moses). He called his people to worship one God and to be honest in trade: "O my people, worship Allah; you have no deity other than Him… So give full measure and weight and do not deprive people of their due" (Qur\'an, Al-A\'raf 7:85).',
        'The people of Madyan — also described as Ashab al-Aykah, "the Companions of the Thicket" — cheated in weights and measures and rejected his warnings. According to the Qur\'an they were destroyed by a punishment described as a severe earthquake and "the torment of the day of the black cloud" (Al-A\'raf 7:91, Ash-Shu\'ara 26:189).',
        'The Qur\'an also tells how Prophet Musa (Moses) fled from Egypt to Madyan, helped two women water their flocks at a well, and later married one of them, staying in Madyan for eight to ten years (Al-Qasas 28:22–28). For many Muslim visitors, the site is a place to reflect on honesty, justice and the fate of past nations.'
      ],
      highlights: ['Nabataean rock-cut tomb façades', 'Crow-step decorations similar to Hegra', 'Ancient wells and settlement remains', 'Visitor stairways between tomb groups', 'Nearby Moses\' Wells (Maqna) and Tayeb Ism canyon'],
      hours: { summary: 'Typically open daily during daylight hours', details: ['Best visited in the morning or late afternoon for softer light'], note: 'The site is in the NEOM area; opening times and access rules may change — check locally before travelling.' },
      tickets: { required: false, price: 'Free (at the time of writing)', how: ['No advance booking is usually required.', 'Guided tours can be arranged through Tabuk or NEOM-area tour operators.'], links: [{ label: 'VisitSaudi', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'NEOM Bay Airport (NUM) or Tabuk Regional Airport (TUU)', road: 'Drive to the town of Al-Bad\'; the site is on the edge of town. About 225 km (≈3 hours) north-west of Tabuk city.', transport: 'No public transport; a rental car or tour is needed.' },
      bestTime: 'October – April', duration: '1–2 hours', dress: 'Modest clothes, a hat and sturdy shoes for the steps and uneven ground.',
      tips: ['Do not touch or climb on the carved façades.', 'Combine with Moses\' Wells (Maqna) and the Tayeb Ism canyon on the coast.', 'Bring water — there are few facilities nearby.', 'Read Surah Al-A\'raf (7:85–93) and Al-Qasas (28:22–28) before visiting for context.']
    },
    {
      id: 'red-sea-global', name: 'Shura Island — The Red Sea', nativeName: 'جزيرة شورى — البحر الأحمر',
      region: 'tabuk', city: 'Umluj / Al-Wajh', categories: ['coast', 'modern'], featured: true,
      approx: true, coords: [25.5500, 36.8800], wiki: 'https://en.wikipedia.org/wiki/Red_Sea_Global',
      tagline: 'A dolphin-shaped luxury island of beach resorts, coral lagoons and an island golf course.',
      overview: [
        'Shura Island is the central hub of The Red Sea destination, a vast luxury tourism project on Saudi Arabia\'s west coast. The island is planned to host 11 luxury resorts, more than 300 branded residences, a marina and Shura Links — the country\'s first 18-hole island golf course.',
        'Designed by Foster + Partners around a regenerative "Coral Bloom" concept, the dolphin-shaped island runs on 100% renewable energy. It is linked to the mainland by a 3.3 km bridge across the lagoon, about 25 minutes from Red Sea International Airport.',
        'White-sand beaches, turquoise lagoons, coral reefs and mangroves surround the resorts, which offer diving, snorkelling, yachting and desert and mountain excursions.'
      ],
      history: [
        'The Red Sea project is being developed by Red Sea Global as part of Saudi Vision 2030, with a strong focus on protecting and restoring the marine environment.',
        'The first resorts in the wider destination and Red Sea International Airport opened from 2023; Shura Island\'s first hotel opened in late 2025, and more resorts have been opening in phases since.'
      ],
      religious: null,
      highlights: [
        'Open resorts include The Red Sea EDITION, Four Seasons, InterContinental, SLS, Miraval (wellness) and Raffles',
        'Upcoming: Rosewood, Faena, Fairmont, Grand Hyatt and Jumeirah',
        'Shura Links 18-hole island golf course',
        'Coral reefs, lagoons and mangroves — diving and snorkelling',
        '3.3 km bridge over the lagoon',
        'Beach clubs, spas, kids\' clubs and fine dining'
      ],
      hours: { summary: 'Resort stays — open year-round', details: ['Day access to the island is generally for resort guests and booked experiences'], note: 'Resorts are opening in phases — check which are currently open.' },
      tickets: { required: true, price: 'Luxury resort pricing — roughly SAR 2,300 – 5,500+ per night (varies by resort and season)', how: ['Book directly with each resort (e.g. Marriott, Four Seasons, IHG, Accor websites) or through the official destination site.', 'Arrange airport transfers with your resort when booking.', 'Golf, diving and excursions can be added through the resort concierge.'], links: [{ label: 'Red Sea Global – Shura Island', url: 'https://www.redseaglobal.com/en/portfolio/projects/shura-island/' }, { label: 'VisitSaudi – Shura Island', url: 'https://www.visitsaudi.com/en/the-red-sea/attraction/shura-island' }] },
      gettingThere: { airport: 'Red Sea International Airport (RSI) — about 25 minutes', road: 'Resort transfers by car across the 3.3 km Shura bridge.', transport: 'Resort transfers only; no public transport.' },
      bestTime: 'October – May', duration: '2–5 days',
      dress: 'Resort wear; modest clothing outside resort areas.',
      tips: [
        'Room prices change quickly with season and availability — compare on the official resort websites.',
        'Use reef-safe sunscreen to help protect the coral.',
        'Combine with Umluj islands and AlUla for a longer west-coast trip.'
      ]
    },
    {
      id: 'dumat-lake', name: 'Dumat al-Jandal Lake', nativeName: 'بحيرة دومة الجندل',
      region: 'jawf', city: 'Dumat al-Jandal', categories: ['nature'], featured: true,
      coords: [29.8165, 39.9092], wiki: 'https://en.wikipedia.org/wiki/Lake_Dumat_al-Jandal',
      tagline: 'The largest artificial lake in Saudi Arabia — a blue oasis among desert cliffs.',
      overview: [
        'Dumat al-Jandal Lake is the largest artificial lake in Saudi Arabia and the Arabian Peninsula. It lies in Al-Jawf Province, next to the historic oasis town of Dumat al-Jandal, covering about 1.1 km² with an average depth of around 15 m.',
        'Paved, lit walkways, green areas and a waterfront promenade line the shore, making it a favourite place for evening walks, picnics and watching the sunset over the desert cliffs.'
      ],
      history: [
        'The lake was created by an irrigation and drainage project that began in 1987. Surplus agricultural drainage water and groundwater from the surrounding date-palm farms were pumped into a natural desert depression to stop the farms from flooding.',
        'Today it holds about 11 million m³ of water. Reeds (Typha) grow along its edges, and it supports fish and attracts both resident and migratory birds.'
      ],
      religious: null,
      highlights: [
        'Jet-ski rentals and speed-boat rides',
        'Lit promenade and walkways along the shore',
        'Sunset views over desert cliffs',
        'Birdwatching (resident and migratory birds)',
        'Nearby Marid Castle, Umar ibn al-Khattab Mosque and the Al-Dir\' old quarter'
      ],
      hours: { summary: 'Open 24 hours', details: ['Water-sport rentals mainly afternoon to evening'], note: '' },
      tickets: { required: false, price: 'Free entry (boat and jet-ski rides paid)', how: ['No ticket needed; pay for rides on site.'], links: [] },
      gettingThere: { airport: 'Al-Jouf Airport (AJF), Sakaka', road: 'On the edge of Dumat al-Jandal, about 50 km south-west of Sakaka. Free parking, including wheelchair-accessible spaces.', transport: 'Car or taxi.' },
      bestTime: 'October – April; sunset', duration: '1–2 hours',
      dress: 'Casual modest clothes; a jacket for winter evenings.',
      tips: [
        'Swimming is not recommended — the water is deep and the banks are steep in places.',
        'Combine with Marid Castle and the Umar Mosque for a half-day in Dumat al-Jandal.',
        'Restrooms and small cafés are available near the promenade.'
      ]
    },
    /* ======================= ROUND 4: MAKKAH PROVINCE ======================= */
    {
      id: 'al-rudaf-park', name: 'Al-Rudaf (Arruddaf) Park, Taif', nativeName: 'منتزه الردف',
      region: 'makkah', city: 'Taif', categories: ['nature', 'modern'], featured: true,
      coords: [21.2297, 40.4248],
      tagline: 'Taif\'s great family park — granite boulders, a lake and a musical dancing fountain.',
      overview: [
        'Al-Rudaf Park (also spelled Arruddaf or Ruddaf) is one of the largest public parks in Taif, covering more than 565,000 m² of lawns, weathered granite rock formations and mountain views in the south of the city, along the Taif–Al-Shafa road.',
        'At its heart is a 13,000 m² artificial lake with a musical dancing fountain. Walking tracks, sports courts, playgrounds, cafés and picnic lawns make it a favourite evening outing for families.'
      ],
      history: [
        'The giant granite boulders that give the park its character were shaped by millions of years of weathering. The area was developed by Taif municipality into a large family park.',
        'In spring the park hosts events linked to the Taif Rose Festival, with floral displays and stalls selling local rose water and rose oil.'
      ],
      religious: null,
      highlights: [
        'Central lake with a musical dancing fountain (750 water jets) — evening shows',
        '2 km walking and running track, cycling lanes and an open-air gym',
        'Free football, basketball and volleyball courts',
        'Children\'s playgrounds and a mini-zoo',
        'Granite rock formations and mountain views',
        'Taif Rose Festival displays in spring',
        'Pony, horse and camel rides outside the gates (paid)'
      ],
      hours: { summary: 'Mon – Sat 4:00 PM – 1:00 AM; closed Sunday for maintenance', details: ['Fountain shows usually about 7:30 – 10:30 PM (not on Fridays)', 'Friday evenings are the busiest; weekday afternoons are quieter'], note: 'Hours can change by season — check before visiting.' },
      tickets: { required: false, price: 'Free entry and parking', how: ['No ticket needed.'], links: [{ label: 'VisitSaudi – Arruddaf Park', url: 'https://www.visitsaudi.com/en/taif/attractions/arruddaf-park-in-taif' }] },
      gettingThere: { airport: 'Taif (TIF) or King Abdulaziz International, Jeddah (JED)', road: 'Abu Talib Street, Al-Ruddaf district, southern Taif, along the Taif–Al-Shafa road. Free parking.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Summer evenings; spring for the rose season', duration: '2–3 hours',
      dress: 'Casual modest clothes; a light jacket for cool Taif evenings.',
      tips: [
        'Barbecues and open fires are not allowed inside the park.',
        'Arrive before 7:30 PM to get a good spot for the fountain show.',
        'Prayer rooms, restrooms, wheelchair access and a fruit market are on site.',
        'Combine with the Al-Shafa and Al-Hada mountains for a full Taif day.'
      ]
    },
    {
      id: 'masjid-jiranah', name: 'Masjid al-Ji\'ranah', nativeName: 'مسجد الجعرانة',
      region: 'makkah', city: 'Makkah', categories: ['religious'], muslimsOnly: true,
      coords: [21.5600, 39.9600], 
      tagline: 'A miqat where the Prophet ﷺ entered ihram for Umrah.',
      overview: ['Masjid al-Ji\'ranah lies about 25–30 km north-east of the Grand Mosque, just outside the Haram boundary. Pilgrims staying in Makkah go there to enter ihram for an additional Umrah.'],
      history: ['After the Battle of Hunayn and the siege of Taif in 630 CE (8 AH), the Prophet ﷺ camped at al-Ji\'ranah, distributed the spoils of war, and entered ihram here for Umrah at night.'],
      religious: ['Because the Prophet ﷺ himself entered ihram here, many scholars consider it one of the most virtuous places for Makkah residents to begin Umrah.'],
      highlights: ['Miqat for Umrah', 'Ablution and changing facilities'],
      hours: { summary: 'Open 24 hours', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket or booking is needed to visit the mosque.'], links: [] },
      access: 'In the Makkah area near the Haram boundary — intended for Muslim pilgrims.',
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'About 30–40 minutes by car from the Haram.', transport: 'Taxi.' },
      bestTime: 'Night or early morning', duration: '1 hour', dress: 'Ihram for men; modest dress for women.', tips: ['Less crowded than Masjid Aisha.']
    },
    {
      id: 'masjid-al-bayah', name: 'Masjid al-Bay\'ah (Mosque of the Pledge)', nativeName: 'مسجد البيعة',
      region: 'makkah', city: 'Mina', categories: ['religious', 'heritage'], muslimsOnly: true,
      coords: [21.4205, 39.8733], wiki: 'https://en.wikipedia.org/wiki/Mosque_of_the_Pledge',
      tagline: 'Marks the Pledges of Aqabah that opened the way to the Hijrah.',
      overview: ['A small, open-roofed historic mosque near the Jamarat in Mina, preserved as a heritage site.'],
      history: ['It marks the place where people from Yathrib (Madinah) secretly pledged allegiance to the Prophet ﷺ in 621 and 622 CE — the First and Second Pledges of Aqabah — which led to the Hijrah. The mosque was built in 144 AH (761 CE) by the Abbasid caliph Abu Ja\'far al-Mansur.'],
      religious: ['The Pledges of Aqabah were a turning point in the Seerah: the Ansar promised to protect the Prophet ﷺ, preparing the way for the first Muslim community in Madinah.'],
      highlights: ['Abbasid-era stone walls', 'Inscriptions'],
      hours: { summary: 'Viewable from outside; access varies', details: [], note: 'Closed to visitors at times, especially during Hajj.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      access: 'In Mina — Muslims only.',
      gettingThere: { airport: 'King Abdulaziz International (JED)', road: 'Near the Jamarat bridge in Mina.', transport: 'Taxi or ziyarat tour.' },
      bestTime: 'Outside Hajj season', duration: '30 minutes', dress: 'Modest clothes.', tips: ['Combine with a visit to Mina and Arafat.']
    },

    /* ======================= ROUND 4: MADINAH PROVINCE ======================= */
    {
      id: 'masjid-ghamama', name: 'Masjid al-Ghamama', nativeName: 'مسجد الغمامة',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage'],
      muslimSite: true, coords: [24.4660, 39.6072], 
      tagline: 'The "Mosque of the Cloud", where the Prophet ﷺ prayed for rain.',
      overview: ['A small, elegant Ottoman-era mosque with grey basalt domes about 500 m south-west of the Prophet\'s Mosque.'],
      history: ['It stands on the open prayer ground (musalla) where the Prophet ﷺ prayed the Eid prayers and the prayer for rain (istisqa). The present building dates mainly from the Ottoman period and was restored in the 20th century.'],
      religious: ['Tradition says a cloud (ghamama) shaded the Prophet ﷺ here, giving the mosque its name. It reminds visitors of the Sunnah of praying together for rain in times of drought.'],
      highlights: ['Ottoman domes', 'Historic musalla site'],
      hours: { summary: 'Viewable at any time; prayer hall opening varies', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'Short walk from the Prophet\'s Mosque.', transport: 'Walk.' },
      bestTime: 'Morning or evening', duration: '20 minutes', dress: 'Modest clothes.', tips: ['Nearby are the small mosques of Abu Bakr and Ali.']
    },
    {
      id: 'madinah-dates-market', name: 'Madinah Dates Markets & Ajwa Farms', nativeName: 'أسواق التمور ومزارع العجوة بالمدينة',
      region: 'madinah', city: 'Madinah', categories: ['heritage', 'religious'], featured: true,
      coords: [24.4638, 39.6081],
      tagline: 'Taste and buy the famous Ajwa dates straight from Madinah\'s markets and palm orchards.',
      overview: [
        'Madinah is world-famous for its dates, above all Ajwa — small, dark brown to near-black, softly wrinkled and gently sweet. Visitors can shop in busy wholesale markets for bulk bargains, or visit orchards in the fertile Al-Aliya area near Quba to taste fresh dates at the source.',
        'The Madinah Central Dates Market has organised stalls of local producers selling well over 100 varieties, including Ajwa, Safawi, Anbara, Sukkari and Medjool, with seasonal auctions during the summer harvest. A large wholesale dates section in the city\'s central produce market offers some of the most competitive prices.',
        'Many farm shops in Al-Aliya and around Quba and Sayyid al-Shuhada (Uhud) offer generous tastings, gift boxes, date chocolates and nuts, and are a popular stop on ziyarat tours.'
      ],
      history: [
        'The oasis of Madinah (Yathrib) has been famous for its palm groves since long before Islam, and dates were a staple food of the early Muslim community.',
        'Ajwa from the Al-Aliya highlands, south of the city near Quba, is traditionally considered the finest grade.'
      ],
      religious: [
        'The Prophet ﷺ said: "Whoever eats seven Ajwa dates in the morning, neither poison nor magic will harm him that day" (Sahih al-Bukhari). Many pilgrims therefore take Ajwa dates home as a blessed gift.',
        'Muslims also break their fast with dates in Ramadan, following the Sunnah of the Prophet ﷺ.'
      ],
      highlights: [
        'Ajwa, Safawi, Anbara, Sukkari, Mabroom and Medjool dates',
        'Free tasting before buying',
        'Madinah Central Dates Market (stalls and summer auctions)',
        'Wholesale dates market for bulk prices',
        'Ajwa orchards and farm shops in Al-Aliya near Quba',
        'Gift boxes, date chocolates and nuts'
      ],
      hours: { summary: 'Central Dates Market about 6:00 AM – 11:00 PM; many farm shops morning to late evening', details: ['Harvest season roughly July – September', 'Some farm shops close at Friday midday prayer'], note: 'Opening hours vary by shop.' },
      tickets: { required: false, price: 'Free entry', how: ['No ticket needed — just walk in and taste.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED)', road: 'Central market in the city; orchards mainly in Al-Aliya near Quba Mosque and around Uhud.', transport: 'Taxi or ziyarat tour (many tours include a date-farm stop).' },
      bestTime: 'Harvest season (July – September) for fresh dates; any time for dried', duration: '1 hour',
      dress: 'Modest clothes.',
      tips: [
        'Authentic Madinah Ajwa is dark brown to near-black with fine wrinkles and soft flesh.',
        'Ask the seller to open a large box so you can check the bottom layer matches the top.',
        'Look for "Ajwa Al-Aliya" — dates from the farms near Quba are considered the best grade.',
        'Prefer shops that keep dates in cold storage for freshness.',
        'Bargaining is normal, especially when buying in bulk.'
      ]
    },
    {
      id: 'harrat-viewpoint', name: 'Harrat Viewpoint, AlUla', nativeName: 'إطلالة الحرة',
      region: 'madinah', city: 'AlUla', categories: ['nature'], featured: true,
      coords: [26.6318, 37.8973],
      tagline: 'A 1,219 m volcanic lookout with sweeping sunset views over the AlUla oasis.',
      overview: [
        'Harrat Viewpoint is a panoramic lookout on top of Harrat Uwayrid, a volcanic mountain in a field of black lava above AlUla. At about 1,219 m (4,000 ft) above sea level, it gives sweeping views over the AlUla oasis, AlUla Old Town, Dadan and the surrounding sandstone canyons.',
        'Sunken circular sofas are built into the hillside around fire pits that are lit as the evening cools, making it one of AlUla\'s favourite places to watch the sunset and, after dark, the stars.'
      ],
      history: [
        'Harrat Uwayrid is part of a vast volcanic field of black basalt that once flowed over the sandstone landscape of north-west Arabia.',
        'The viewpoint was developed as a visitor attraction as AlUla opened to tourism, with a paved path, seating, lighting and seasonal dining.'
      ],
      religious: null,
      highlights: [
        'Wide views over the green palm oasis, Old Town and canyons',
        'Golden-hour sunsets as the valley turns gold and pink',
        'Stargazing with little light pollution',
        'Sunken lounge seating with fire pits',
        'Seasonal dining with valley views'
      ],
      hours: { summary: 'Typically daily 2:00 PM – 10:00 PM', details: ['Arrive about 45 minutes before sunset for a good seat'], note: 'Hours and dining options change by season.' },
      tickets: { required: false, price: 'Free — no advance booking needed', how: ['Just drive up; free parking near the top.'], links: [{ label: 'Experience AlUla – Harrat Viewpoint', url: 'https://www.experiencealula.com/en/places-to-go/harrat-viewpoint' }] },
      gettingThere: { airport: 'AlUla International (ULH)', road: 'About 30 minutes from AlUla Old Town up a steep, winding road with hairpin bends through volcanic terrain. Free parking near the summit.', transport: 'Car or taxi.' },
      bestTime: 'Sunset, October – March', duration: '1–2 hours',
      dress: 'A jacket or extra layer — it gets cool and windy at this height in the evening.',
      tips: [
        'Drive the hairpin road carefully, especially after dark.',
        'Stay for the stars after sunset.',
        'Combine with AlUla Old Town and Dadan in the same day.'
      ]
    },
    {
      id: 'rainbow-rock', name: 'Rainbow Rock (Arch Rock), AlUla', nativeName: 'صخرة قوس قزح',
      region: 'madinah', city: 'AlUla', categories: ['nature'], featured: true,
      coords: [27.0467, 37.8189],
      tagline: 'A 41-metre natural sandstone arch shaped like a rainbow in the desert north of AlUla.',
      overview: [
        'Rainbow Rock — also called The Arch or Arch Rock — is a massive natural sandstone arch in the desert north of AlUla. Its curved bridge resembles a rainbow flanked by two cloud-like rock masses.',
        'The arch spans about 41 m (135 ft) and rises around 20 m (67 ft). Its remote setting makes it a favourite spot for sunrise and sunset photography, desert camping and stargazing.'
      ],
      history: [
        'The arch was carved by millions of years of wind and water erosion of layered sandstone.',
        'The sand and rock faces around it contain small multicoloured quartz crystals, known locally as "desert diamonds".'
      ],
      religious: null,
      highlights: [
        'Natural arch about 41 m wide and 20 m high',
        'Sunrise and sunset photography',
        'Dark skies for stargazing',
        '"Desert diamond" quartz crystals in the sand'
      ],
      hours: { summary: 'Open 24 hours (natural landmark)', details: ['Best at sunrise, sunset and on clear nights'], note: 'No facilities on site.' },
      tickets: { required: false, price: 'Free (4x4 tours paid)', how: ['No ticket needed.', 'Without a 4x4, book a private SUV tour with a local AlUla operator.'], links: [{ label: 'Experience AlUla – Rocks of AlUla', url: 'https://www.experiencealula.com/en/about/features/rocks-of-alula' }] },
      gettingThere: { airport: 'AlUla International (ULH)', road: 'Take Route 375 north from AlUla towards Tabuk, then an unpaved desert track for the last stretch (GPS 27.0467, 37.8189). About 45–90 minutes from AlUla depending on your start point.', transport: '4x4 strongly recommended for the soft-sand final approach, or join a tour.' },
      bestTime: 'October – March; sunrise or sunset', duration: '1–2 hours plus driving',
      dress: 'Sun hat, sunglasses, closed shoes; warm layers after dark.',
      tips: [
        'There are no restrooms, shops or lights — bring water, snacks and offline maps.',
        'Do not climb on the arch; the sandstone is fragile.',
        'Leave the crystals where they are for others to enjoy.',
        'Combine with Elephant Rock and Gharameel for a desert day.'
      ]
    },
    {
      id: 'umm-jarsan', name: 'Umm Jirsan Lava Tube', nativeName: 'كهف أم جرسان',
      region: 'madinah', city: 'Khaybar', categories: ['nature', 'archaeology'], featured: true,
      coords: [25.5886, 39.7573], wiki: 'https://en.wikipedia.org/wiki/Harrat_Khaybar',
      tagline: 'Arabia\'s longest lava cave — 1.5 km of tunnels with 10,000 years of human history.',
      overview: [
        'Umm Jirsan is the longest known lava-tube cave in Saudi Arabia and the Arabian Peninsula, stretching about 1,481 m beneath the Harrat Khaybar volcanic field, roughly 125–150 km north of Madinah.',
        'The system has three main underground passages separated by two large roof collapses, which act as natural skylight entrances. Passages reach up to about 45 m wide and 8–12 m high, making it the largest surveyed cave system in the Kingdom.',
        'Inside, the temperature stays moderate all year — cool in summer and mild in winter — which drew both animals and people away from the harsh basalt desert above.'
      ],
      history: [
        'The tube formed when molten basalt kept flowing beneath a cooled crust of lava and then drained away, leaving a hollow tunnel.',
        'Excavations by the Saudi Heritage Commission with King Saud University and the Max Planck Institute of Geoanthropology show that people used the cave repeatedly between about 10,000 and 7,000 years ago. Stone tools, charcoal, textile fragments and carved wood suggest pastoralists sheltered here while herding livestock, with later use in the Bronze Age.',
        'Rock-art engravings nearby show cattle, sheep, goats and hunting scenes with dogs.',
        'Researchers also found hundreds of thousands of bones from at least 14 animal species — including striped hyenas, horses, wild asses, camels and ibex, and some human remains — collected over millennia by striped hyenas that used parts of the cave as a den.'
      ],
      religious: null,
      highlights: [
        '~1.5 km lava tube with three passages',
        'Skylight entrances from roof collapses',
        'Huge chambers up to ~45 m wide',
        'Prehistoric rock art of cattle, goats and hunting dogs',
        'Hyena-den bone deposits studied by scientists',
        'Black lava landscape of Harrat Khaybar'
      ],
      hours: { summary: 'Open site; visit in daylight only', details: [], note: 'Very remote, with minimal facilities and signage.' },
      tickets: { required: false, price: 'Free (guided trips paid)', how: ['No ticket required.', 'A local guide familiar with the lava field is strongly recommended.'], links: [] },
      gettingThere: { airport: 'Prince Mohammad bin Abdulaziz (MED), Madinah', road: 'About 2–2.5 hours north of Madinah towards Khaybar, then more than 20 km of rough dirt tracks over jagged volcanic rock. A protective wall and staircase lead down at the main entrance.', transport: '4x4 vehicle and GPS navigation essential; no public transport.' },
      bestTime: 'October – March', duration: 'Full day (including the drive)',
      dress: 'Sturdy hiking boots, long trousers, gloves; headlamp and helmet recommended.',
      tips: [
        'Bring powerful headlamps and spare batteries — the passages are completely dark.',
        'Carry plenty of water and food; there are no services.',
        'Do not disturb bones, tools or rock art — the site is protected.',
        'Never explore deep passages alone.'
      ]
    },

    {
      id: 'al-gharabah-mountain-trail', name: 'Al-Gharabah Mountain Trail', nativeName: 'مسار جبل الغرابة',
      region: 'riyadh', city: 'Al-Thadiq', categories: ['nature'], featured: true,
      coords: [25.2512, 45.8122], status: 'check',
      notice: 'This trail opened to the public on 14 November 2026. It is brand new, undeveloped and run informally — there are no official facilities yet, so details here may change quickly. Confirm current access before travelling.',
      tagline: 'A newly opened desert hiking trail up a standalone hill near Thadiq.',
      overview: [
        'Al-Gharabah is a standalone hill rising about 115 m above its base camp in the open desert near Thadiq, north-west of Riyadh. A trail to its summit opened to the public on 14 November 2026, with an inaugural hike that drew hundreds of participants of all ages and nationalities.',
        'From the flat plateau at the top, hikers get a 360-degree view over the desert valleys of Thadiq, Rughaba, Qasab and the surrounding country — a genuinely new vantage point rather than a renamed existing site.'
      ],
      history: ['The trail was opened by MAD Adventure, a local hiking and adventure group, with the inaugural climb attended by the area\'s governor. It is deliberately kept undeveloped — no electricity, no water supply, no facilities — to preserve the site in its natural state.'],
      religious: null,
      highlights: ['360-degree summit plateau views', 'Standalone desert hill, about 115 m of ascent', 'Desert valleys of Thadiq, Rughaba and Qasab', 'Overnight camping on clear nights', 'A genuinely new, uncrowded trail'],
      hours: { summary: 'Open at all times; no gate or ticket office', details: ['Winter daytime is most comfortable', 'In summer, hike early morning or at night'], note: 'No facilities exist yet: no toilets, no water, no electricity, no shop nearby. Bring everything you need and a bag for your rubbish.' },
      tickets: { required: false, price: 'Free', how: ['No ticket or booking — it is an open, informal trail.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 137 km north-west of central Riyadh (roughly 1 h 40 min), via Thadiq. The road to Thadiq town is in good condition; the final stretch from the town to the trailhead is unpaved desert track.', transport: 'Car required — a high-clearance vehicle is recommended, and a sedan may need to park before the roughest section and walk in.' },
      bestTime: 'November – March for daytime hiking; summer nights for camping', duration: 'About 3 hours to climb, explore the plateau and descend',
      dress: 'Sturdy hiking shoes, a hat and sun protection; warm layers for an overnight camp.',
      tips: [
        'Bring all your own water, food and a torch or lantern — there is no electricity on site.',
        'If your group includes women, bring a portable toilet or a small private tent, since there are no facilities.',
        'Carry a rubbish bag and take everything away with you — the trail is kept deliberately unspoiled.',
        'Combine with the Thadiq & Ghamra Tourist Village, which is in the same area.',
        'As a very new, informal trail, conditions and access can change — a local operator (MAD Adventure) ran the opening hike and can be a useful contact for current conditions.'
      ]
    },
    {
      id: 'shuaib-umm-qasr', name: 'Shuaib Umm Qasr (Wadi Umm Al-Qasr) Walkway', nativeName: 'شعيب أم قصر',
      region: 'riyadh', city: 'Riyadh', categories: ['nature', 'modern'], approx: true, featured: true,
      coords: [24.6051, 46.6368],
      tagline: 'A dramatically lit sports bridge zigzagging down a rehabilitated wadi in western Riyadh.',
      overview: [
        'Shuaib Umm Qasr is a natural tributary of Wadi Hanifa in the Al-Oraija Al-Wusta district, rehabilitated under the Green Riyadh Project and reopened as a landscaped urban park. A zigzagging elevated "sports bridge" — the site\'s architectural centrepiece — switches back and forth down the slope of the wadi, lit end to end at night.',
        'Beneath and around the bridge are walking, jogging and cycling paths, planted terraces, small waterfalls and water features, with seating areas and restrooms for visitors. After dark the lighting along the whole structure makes it one of Riyadh\'s most photographed new spots.'
      ],
      history: ['The site is one of several natural valleys the Green Riyadh Project has rehabilitated and reopened as public green space, turning what was previously an unused desert wadi into a landscaped park.'],
      religious: null,
      highlights: ['The zigzag elevated sports bridge, lit at night', 'Small waterfalls and water features', 'Walking, jogging and cycling paths', 'Landscaped planting along the valley', 'Free, family-friendly evening outing'],
      hours: { summary: 'Open daily; most photographed and busiest after sunset when the lighting is on', details: [], note: 'A newly reopened public space — facilities are being finished in stages.' },
      tickets: { required: false, price: 'Free', how: ['No ticket needed.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Oraija Al-Wusta district, western Riyadh.', transport: 'Taxi or ride-hailing; a car is convenient given the district\'s size.' },
      bestTime: 'Evenings, year-round — the lighting is the highlight', duration: '1–1.5 hours',
      dress: 'Comfortable walking shoes; modest clothing as elsewhere in the Kingdom.',
      tips: ['Go after sunset to see the bridge fully lit — this is when it looks its best.', 'Combine with Wadi Hanifa, which this tributary feeds into, if you have more time.', 'As a newly opened site, exact opening hours and facilities may still be settling — check recent visitor reports before a special trip.']
    },
    /* ======================= ROUND 6: RIYADH PROVINCE ======================= */
    {
      id: 'qiddiya-six-flags', name: 'Qiddiya City & Six Flags Qiddiya', nativeName: 'مدينة القدية وسكس فلاجز القدية',
      region: 'riyadh', city: 'Qiddiya', categories: ['modern'], featured: true,
      coords: [24.5903, 46.3337], wiki: 'https://en.wikipedia.org/wiki/Six_Flags_Qiddiya',
      tagline: 'Saudi Arabia\'s giant new theme-park city, with the world\'s tallest and fastest coaster.',
      overview: [
        'Qiddiya is a planned entertainment city being built in a dramatic escarpment landscape south-west of Riyadh. Its first major opening, Six Flags Qiddiya City, is Six Flags\' first destination outside North America and one of the largest theme parks in the Middle East.',
        'The park has 28 rides and attractions across six themed areas. Its headline ride, Falcon\'s Flight, is billed as the world\'s tallest, fastest and longest roller coaster. A separate water park, Aquarabia, opened nearby.'
      ],
      history: ['Qiddiya was announced in 2017 as a Vision 2030 giga-project built around sport, culture and entertainment. Six Flags Qiddiya City opened on 31 December 2025 as its first completed theme park.'],
      religious: null,
      highlights: ['Falcon\'s Flight roller coaster', 'Six themed areas and 28 rides', 'Aquarabia water park nearby', 'Escarpment desert setting', 'Family and thrill zones'],
      hours: { summary: 'Check the current seasonal calendar', details: ['Some headline rides may be limited on opening days while testing continues'], note: 'Qiddiya City is still under construction — more venues are planned over several years.' },
      tickets: { required: true, price: 'Paid entry; reported from around $87 for adults (indicative)', how: ['Buy online in advance through the official Six Flags Qiddiya site.'], links: [{ label: 'Six Flags Qiddiya (official)', url: 'https://www.sixflagsqiddiyacity.com' }] },
      gettingThere: { airport: 'King Khalid International (RUH), about 1 hour', road: 'About 40 km south-west of Riyadh, near Dharma.', transport: 'Car or an organised shuttle; there is no public transport yet.' },
      bestTime: 'November – March for cooler outdoor queuing', duration: 'Full day',
      dress: 'Comfortable clothes and shoes; modest as elsewhere in the Kingdom.',
      tips: ['Book Falcon\'s Flight time slots online if the park offers them — it is the main draw.', 'Arrive at opening; the park has been very busy since launch.', 'Qiddiya is a long-term project — check what else has opened before you go.']
    },
    {
      id: 'kingdom-arena', name: 'Kingdom Arena', nativeName: 'كينغدوم أرينا',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.7789, 46.6059], wiki: 'https://en.wikipedia.org/wiki/Kingdom_Arena',
      tagline: 'Riyadh\'s big indoor arena for world-title boxing and major concerts.',
      overview: [
        'Kingdom Arena is a fully covered multipurpose venue in Hittin, built to host football, basketball, boxing and large concerts under one roof. It holds Guinness World Records for the largest fully covered stadium by surface area.',
        'It opened with a string of headline boxing cards — including Fury vs Ngannou and Fury vs Usyk — and now also serves as a football venue and concert hall during Riyadh Season.'
      ],
      history: ['Built as part of the push to bring major global sport and entertainment events to Saudi Arabia, the arena opened in 2023 and quickly became the country\'s leading indoor venue for world-title boxing.'],
      religious: null,
      highlights: ['World-title boxing cards', 'Football and basketball fixtures', 'Major international concerts', 'Fully covered indoor seating', 'Beside Boulevard City during Riyadh Season'],
      hours: { summary: 'Open on event days only', details: [], note: 'There is no general sightseeing access — check the event calendar.' },
      tickets: { required: true, price: 'Varies greatly by event', how: ['Buy tickets for specific events through the official ticketing platform.'], links: [{ label: 'Webook – tickets', url: 'https://webook.com' }] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Hittin district, beside Boulevard City.', transport: 'Taxi or ride-hailing; expect heavy traffic on event nights.' },
      bestTime: 'Whenever a major event is scheduled', duration: '3–4 hours for an event',
      dress: 'Casual, as the event requires.',
      tips: ['Check the calendar well ahead — big fights and concerts sell out fast.', 'Combine with Boulevard City if an event falls during Riyadh Season.', 'Book parking or a ride-hailing pickup point in advance for a quick exit.']
    },
    {
      id: 'souq-al-thumairi', name: 'Souq Al-Thumairi', nativeName: 'سوق الثميري',
      region: 'riyadh', city: 'Riyadh', categories: ['heritage', 'modern'],
      coords: [24.6316, 46.7132],
      tagline: 'A traditional clothing and craft market beside Masmak Fort.',
      overview: ['Souq Al-Thumairi is a covered traditional market in old Riyadh, a few steps from Masmak Fort, selling thobes, bishts, abayas, fabric and everyday household goods at local prices.'],
      history: ['Part of the old Deira market quarter that grew up around Qasr Al-Hukm and the fort, long before the city\'s modern expansion.'],
      religious: null,
      highlights: ['Traditional Saudi clothing', 'Fabric and tailoring shops', 'Low, bargaining-friendly prices', 'A few steps from Masmak Fort'],
      hours: { summary: 'Daily, morning to evening; closed during prayer times', details: [], note: 'Busiest in the evening.' },
      tickets: { required: false, price: 'Free to browse', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Old Riyadh (Deira), beside Masmak Fort.', transport: 'Riyadh Metro: Qasr Al-Hukm station is close by.' },
      bestTime: 'Evenings, November – March', duration: '1 hour',
      dress: 'Modest clothing.',
      tips: ['Combine with Masmak Fort and Qasr Al-Hukm — they are a single short walk.', 'Bargaining is normal and expected.']
    },
    {
      id: 'souq-taibah', name: 'Souq Taibah & Souq Al-Owais', nativeName: 'سوق طيبة وسوق العويس',
      region: 'riyadh', city: 'Riyadh', categories: ['modern', 'heritage'],
      coords: [24.7345, 46.6629],
      tagline: 'Riyadh\'s best-known budget markets for clothes and gold.',
      overview: ['Souq Taibah and the neighbouring Souq Al-Owais, on King Fahd Road in Al-Olaya, are dense multi-storey markets packed with small shops selling clothing, shoes, perfume, textiles and gold at prices well below the malls.'],
      history: ['Both markets grew from the 1980s and 1990s as Riyadh\'s main low-cost shopping district and remain popular with residents rather than tourists.'],
      religious: null,
      highlights: ['Budget clothing and shoes', 'Gold and jewellery shops', 'Perfume and textile stalls', 'A genuinely local shopping experience'],
      hours: { summary: 'Daily, roughly 10:00 until midnight', details: [], note: 'Shops pause briefly at prayer times.' },
      tickets: { required: false, price: 'Free to browse', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Olaya, on King Fahd Road.', transport: 'Taxi, ride-hailing or Riyadh Metro (Olaya area stations).' },
      bestTime: 'Evenings', duration: '1–2 hours',
      dress: 'Modest clothing; this is a busy, crowded market.',
      tips: ['Bargain — listed prices are rarely final.', 'Keep valuables secure in the crowds.', 'Go hungry — the surrounding streets have cheap, good food.']
    },
    {
      id: 'roshn-front', name: 'Roshn Front', nativeName: 'واجهة روشن',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.8414, 46.7334],
      tagline: 'A new open-air waterfront of cafés and shops on Airport Road.',
      overview: ['Roshn Front is an open-air dining, retail and leisure development along a landscaped promenade on Airport Road, part of the wider Roshn real-estate developments that are reshaping the edges of the capital.'],
      history: ['Built by Roshn, the national housing developer, as a lifestyle destination for its new residential communities in northern Riyadh.'],
      religious: null,
      highlights: ['Open-air walking promenade', 'Cafés and restaurants', 'Retail shops', 'Family-friendly evening outing'],
      hours: { summary: 'Daily, afternoon until late', details: [], note: 'A newer development — some units may still be opening.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH), nearby', road: 'On Airport Road in northern Riyadh.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Evenings, November – March', duration: '1–2 hours',
      dress: 'Smart casual.',
      tips: ['Easy to combine with an airport arrival or departure given its location.', 'Check what has opened — the development is still growing.']
    },
    {
      id: 'the-view-mall', name: 'The View Mall', nativeName: 'ذا فيو مول',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.6960, 46.7285],
      tagline: 'A family mall beside King Salman Park with a large cinema.',
      overview: ['The View Mall sits on the Makkah road extension near King Salman Park, with mainstream retail brands, a food court and a multi-screen cinema.'],
      history: ['One of the newer malls serving the growing southern and central districts of Riyadh.'],
      religious: null,
      highlights: ['Cinema', 'Food court', 'Retail brands', 'Near King Salman Park'],
      hours: { summary: 'Daily, roughly 10:00 until midnight', details: [], note: 'Shops pause briefly at prayer times.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Near King Salman Park, central Riyadh.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time', duration: '1–2 hours',
      dress: 'Modest casual.',
      tips: ['Combine with a visit to King Salman Park.']
    },
    {
      id: 'granada-mall', name: 'Granada Mall', nativeName: 'غرناطة مول',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.7818, 46.7312],
      tagline: 'One of east Riyadh\'s largest family shopping and entertainment malls.',
      overview: ['Granada Mall in eastern Riyadh is a large shopping and entertainment complex with department stores, a hypermarket, restaurants and indoor family entertainment.'],
      history: ['Developed as part of the Granada Business Park area, it has grown into one of the main malls serving eastern Riyadh.'],
      religious: null,
      highlights: ['Department stores and hypermarket', 'Food court', 'Indoor entertainment for children', 'Cinema'],
      hours: { summary: 'Daily, roughly 10:00 until midnight', details: [], note: 'Shops pause briefly at prayer times.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Eastern Ring Road, Granada district.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time', duration: '1–2 hours',
      dress: 'Modest casual.',
      tips: ['A useful stop between the airport and eastern Riyadh.']
    },
    {
      id: 'al-hamra-mall', name: 'Al Hamra Mall', nativeName: 'مول الحمراء',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'], approx: true,
      coords: [24.7665, 46.7546],
      tagline: 'A popular family mall in eastern Riyadh.',
      overview: ['Al Hamra Mall serves the eastern districts of Riyadh with mainstream shops, a food court and family entertainment, and is a well-known local landmark rather than a tourist destination.'],
      history: ['Part of the wave of district-level malls built as Riyadh expanded eastward.'],
      religious: null,
      highlights: ['Retail shops', 'Food court', 'Family entertainment area'],
      hours: { summary: 'Daily, roughly 10:00 until midnight', details: [], note: 'Shops pause briefly at prayer times.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Eastern Riyadh.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time', duration: '1 hour',
      dress: 'Modest casual.',
      tips: ['More than one "Al Hamra" shopping centre exists in this part of the city — confirm the exact address before you go.']
    },
    {
      id: 'snow-city-othaim', name: 'Snow City (Al Othaim Mall)', nativeName: 'سنو سيتي - مجمع العثيم مول',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.6844, 46.7753],
      tagline: 'An indoor snow park inside a Riyadh mall.',
      overview: ['Snow City is an indoor snow and ice attraction inside Al Othaim Mall in Al-Rabwah, letting visitors play in real snow, sledge and take photos without ever feeling the desert heat outside.'],
      history: ['One of several indoor snow parks built in Gulf malls to offer a novelty experience in a hot climate.'],
      religious: null,
      highlights: ['Indoor snow play area', 'Sledging', 'Warm clothing rental on site', 'Rest of the mall\'s shops and food court'],
      hours: { summary: 'Daily, mall hours', details: [], note: 'Sessions may be timed — check at the counter.' },
      tickets: { required: true, price: 'Paid entry per session', how: ['Buy at the attraction counter inside the mall.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Rabwah district, Riyadh.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time — it is indoors and climate-controlled', duration: '1 hour',
      dress: 'Light clothes for the mall; warm gear is provided or rented for the snow area.',
      tips: ['Fun novelty for children used to desert heat.', 'Combine with the rest of the mall.']
    },
    {
      id: 'al-watan-park', name: 'Al Watan Park', nativeName: 'حديقة الوطن',
      region: 'riyadh', city: 'Riyadh', categories: ['nature', 'modern'],
      coords: [24.6446, 46.7105],
      tagline: 'A family park built around the Riyadh Water Tower.',
      overview: ['Al Watan Park in Al-Futah is a landscaped family park with lawns, play areas and walking paths, set around the base of the Riyadh Water Tower, one of the city\'s older landmarks.'],
      history: ['Developed as part of the municipality\'s programme of public parks in the historic southern districts of the city.'],
      religious: null,
      highlights: ['Riyadh Water Tower landmark', 'Lawns and walking paths', 'Children\'s play areas', 'Evening family picnics'],
      hours: { summary: 'Daily, roughly 08:00 until midnight', details: [], note: 'Busiest on Thursday and Friday evenings.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Futah, south-central Riyadh, near Salam Park.', transport: 'Taxi or ride-hailing; metro Line 1 passes nearby.' },
      bestTime: 'Evenings, November – March', duration: '1 hour',
      dress: 'Casual.',
      tips: ['Combine with Salam Park, which is close by.']
    },
    {
      id: 'king-salman-science-oasis', name: 'King Salman Science Oasis', nativeName: 'واحة الملك سلمان للعلوم',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.5995, 46.6950],
      tagline: 'An interactive science museum and park for families.',
      overview: ['King Salman Science Oasis combines hands-on science exhibits with outdoor park space, aimed squarely at children and school groups, with interactive displays covering physics, space and the environment.'],
      history: ['Opened as part of Riyadh\'s growing network of family-oriented educational attractions.'],
      religious: null,
      highlights: ['Interactive science exhibits', 'Outdoor park areas', 'Planetarium-style displays (check current offering)', 'Good for school-age children'],
      hours: { summary: 'Check current opening days and hours', details: [], note: 'Group and school bookings may affect general access on some days.' },
      tickets: { required: true, price: 'Low entry fee', how: ['Pay at the gate; group bookings may be available.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Suwaidi area, south-west Riyadh.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Weekday mornings for smaller crowds', duration: '2 hours',
      dress: 'Casual.',
      tips: ['Good rainy-day or very hot-day option since most exhibits are indoors.']
    },
    {
      id: 'naila-art-gallery', name: 'Naila Art Gallery', nativeName: 'معرض نائلة للفنون',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'], approx: true,
      coords: [24.7136, 46.6650],
      tagline: 'One of Riyadh\'s leading contemporary art spaces.',
      overview: ['Naila Art Gallery on Al-Takhassusi Street is one of Riyadh\'s best-known contemporary art venues, founded by the artist Naifa AlFayez in 2012. Its two-floor space hosts changing exhibitions of Saudi and regional art, craft and calligraphy.'],
      history: ['Founded in 2012, the gallery has been part of the growth of Riyadh\'s contemporary art scene well before the recent wave of state-backed cultural investment.'],
      religious: null,
      highlights: ['Rotating contemporary exhibitions', 'Saudi craft and calligraphy shows', 'Talks and workshops', 'Two-floor gallery space'],
      hours: { summary: 'Check the current exhibition schedule', details: [], note: 'Opening hours depend on what is currently showing.' },
      tickets: { required: false, price: 'Usually free', how: ['No ticket for most exhibitions.'], links: [{ label: 'Gallery Naila (official)', url: 'https://gallerynaila.com' }] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Takhassusi Street, central Riyadh.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time an exhibition is running', duration: '45 minutes – 1 hour',
      dress: 'Smart casual.',
      tips: ['Check the current show before visiting — exhibitions rotate.']
    },
    {
      id: 'wadi-al-dawasir-town', name: 'Wadi Al-Dawasir Oasis & Fort', nativeName: 'وادي الدواسر',
      region: 'riyadh', city: 'Wadi ad-Dawasir', categories: ['heritage', 'nature'], approx: true,
      coords: [20.4700, 44.8000],
      tagline: 'A date-palm oasis town on the edge of the Empty Quarter.',
      overview: [
        'Wadi Al-Dawasir is a long oasis town strung along an ancient wadi at the southern tip of Riyadh Province, with extensive date-palm plantations, farms and the ruins of old forts and mud-brick quarters.',
        'It is also the gateway for 4x4 expeditions into \'Uruq Bani Ma\'arid and Al-Faw further south, so most visitors pass through on their way to the desert rather than stopping for long.'
      ],
      history: ['The town has long been the main settlement of the Dawasir tribal confederation, a farming community at the edge of the Rub\' al Khali whose name was later given to the governorate and the historic wadi it sits in.'],
      religious: null,
      highlights: ['Date-palm oasis and farms', 'Old fort ruins', 'Traditional mud-brick quarters', 'Gateway to Al-Faw and the Empty Quarter'],
      hours: { summary: 'Open town; daylight hours for the old quarters', details: [], note: 'This is a working town, not a museum — be respectful around private farms and homes.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Wadi ad-Dawasir Domestic Airport (WAE)', road: 'About 580 km south of Riyadh.', transport: 'Domestic flight or a long desert drive; a car is needed locally.' },
      bestTime: 'November – February', duration: '2–3 hours, or an overnight base for Al-Faw', dress: 'Modest, comfortable clothes.',
      tips: ['Use the town as your overnight base before a guided trip to Al-Faw or Uruq Bani Ma\'arid.', 'The coordinates mark the general oasis area — the town is long and spread out.']
    },
    {
      id: 'rawdat-al-khararah', name: 'Rawdat Al-Khararah (Al-Kharrarah National Park)', nativeName: 'روضة الخرارة',
      region: 'riyadh', city: 'Al-Muzahmiyyah', categories: ['nature'], approx: true,
      coords: [24.4200, 46.1700],
      tagline: 'A rain-fed desert lake among red dunes, west of Riyadh.',
      overview: [
        'Al-Kharrarah National Park, south of Al-Muzahmiyyah governorate, holds a shallow lake that forms when seasonal rain collects among the dunes near the Tuwaiq escarpment. In a wet winter the still water, red sand and green scrub make for some of the most photographed desert scenery near the capital.',
        'In a dry spell the lake disappears entirely and only the dune landscape remains — so, like Riyadh\'s other rawdahs, a visit depends completely on recent rainfall.'
      ],
      history: ['The lake is a natural, rain-dependent feature rather than a man-made one; local volunteer groups have run clean-up campaigns to protect it from littering as it has become more popular.'],
      religious: null,
      highlights: ['Rain-fed lake among red dunes', 'Photography after winter rain', 'Desert camping', 'Off-road driving on the approach tracks'],
      hours: { summary: 'Open at all times; depends entirely on recent rainfall', details: [], note: 'No facilities — check recent rain and other visitors\' reports before driving out.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'South of Al-Muzahmiyyah, about 1–1.5 hours west of Riyadh.', transport: 'A 4x4 is strongly recommended for the sandy approach.' },
      bestTime: 'December – February after rain', duration: 'Half a day, or an overnight camp',
      dress: 'Warm layers for the night, sun protection by day, and shoes suited to sand.',
      tips: ['Confirm with recent visitor reports or social media whether the lake currently has water — some years it does not form at all.', 'Carry out all rubbish — this spot has suffered from litter as it became popular.', 'The coordinates are approximate; GPS navigation and a local guide help on the final sandy stretch.']
    },
    {
      id: 'riyadh-season-pop-ups', name: 'Riyadh Season Pop-Up Zones (Souq Al-Awaleen, Dunes of Arabia, The Groves, Wonder Garden, Boulevard Runway)', nativeName: 'مناطق موسم الرياض المتجددة',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'], approx: true,
      coords: [24.7684, 46.6045],
      tagline: 'A different set of themed Riyadh Season zones every year — check what is open before you go.',
      overview: [
        'Each edition of Riyadh Season (roughly October to April) adds a changing line-up of themed zones alongside the fixed Boulevard City and Kingdom Arena. Recent editions have included Souq Al-Awaleen (a free, Najdi-style traditional market with crafts, food and folklore shows), Dunes of Arabia (desert camel riding, quad biking, sandboarding and camping near Al-Tuwaiq), The Groves (an upscale outdoor dining, shopping and live-music village) and Wonder Garden (a family theme-park zone with rides and a parade).',
        'Boulevard Runway, a 2024 zone built inside three retired Boeing 777 aircraft turned into a restaurant, a haunted house and a games area, is a good example of how specific these zones are: they do not necessarily return, and when they do their location inside Riyadh often changes.'
      ],
      history: ['Riyadh Season began in 2019 under Vision 2030 to build a year-round entertainment calendar for the capital. New zones are announced each season and advertised through the official General Entertainment Authority channels.'],
      religious: null,
      highlights: ['Souq Al-Awaleen traditional market and crafts', 'Dunes of Arabia desert activities', 'The Groves dining and live music', 'Wonder Garden family rides', 'Past zones like Boulevard Runway\'s aircraft venues'],
      hours: { summary: 'Only during Riyadh Season (roughly October – April); exact dates and zones vary every year', details: ['Souq Al-Awaleen has historically been free to enter', 'Other zones charge entry or per-activity fees'], note: 'Which of these zones exists, and where, changes every season — check the official Riyadh Season app or site before planning around any one of them.' },
      tickets: { required: 'partial', price: 'Varies by zone — some free, some ticketed', how: ['Book through the official Riyadh Season platform or app for the current season.'], links: [{ label: 'Riyadh Season (official)', url: 'https://riyadhseason.sa' }] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Zones are usually around Boulevard City in Hittin or the eastern showgrounds, but this varies by year.', transport: 'Taxi or ride-hailing; confirm the exact zone location for the current season.' },
      bestTime: 'During the current Riyadh Season', duration: 'A few hours per zone',
      dress: 'Casual; warm layers for desert evenings.',
      tips: ['Check the official Riyadh Season app each year rather than relying on an old list of zones — the line-up changes completely from season to season.', 'Combine a visit with Boulevard City and Kingdom Arena, which are the more permanent anchors of the season.']
    },
    /* ======================= ROUND 5: RIYADH PROVINCE ======================= */
    {
      id: 'qasr-al-hukm', name: 'Qasr Al-Hukm District', nativeName: 'منطقة قصر الحكم',
      region: 'riyadh', city: 'Riyadh', categories: ['heritage'], approx: true,
      coords: [24.6306, 46.7126], wiki: 'https://en.wikipedia.org/wiki/Qasr_al-Hukm',
      tagline: 'The old governing heart of Riyadh, rebuilt in Najdi style.',
      overview: [
        'Qasr Al-Hukm — the Palace of Justice — is the historic seat of government in old Riyadh and the square around it. The district links the palace, the Grand Mosque of Imam Turki bin Abdullah, Deira Square and Masmak Fort by a chain of pedestrian plazas and covered walkways.',
        'It was rebuilt from the 1980s in a modern reading of Najdi architecture: thick pale walls, triangular vents, timber shutters and shaded colonnades. Friday is the liveliest day, when worshippers fill the mosque and the surrounding souqs.'
      ],
      history: [
        'A governor\'s palace has stood here since the 18th century. King Abdulaziz used the old Qasr Al-Hukm as his base after retaking Riyadh in 1902, governing from it until the court moved to Murabba Palace in 1938.',
        'The present building dates from the Qasr Al-Hukm redevelopment, a long project to restore the old centre rather than clear it.'
      ],
      religious: ['The Imam Turki bin Abdullah Grand Mosque on the square is one of the largest in Riyadh and a major Friday prayer venue. Visitors should not enter during prayers.'],
      highlights: ['Qasr Al-Hukm and Deira Square', 'Imam Turki bin Abdullah Grand Mosque', 'Covered walkway to Masmak Fort', 'Souq Al-Zal and the gold souq nearby', 'Najdi revival architecture'],
      hours: { summary: 'Squares open at all times; the palace interior is a working government building', details: ['Souqs are busiest in the evening', 'Shops close around prayer times'], note: 'The palace itself is not generally open to tourists — the district and square are.' },
      tickets: { required: false, price: 'Free', how: ['No ticket for the district, square or souqs.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Old Riyadh (Deira), beside Masmak Fort.', transport: 'Riyadh Metro: Qasr Al-Hukm station is in the district and is an interchange on Lines 1 and 3.' },
      bestTime: 'November – March, late afternoon into the evening', duration: '2 hours with Masmak and the souq',
      dress: 'Modest clothing — this is a conservative, busy quarter.',
      tips: ['Combine with Masmak Fort and Souq Al-Zal; they are a few minutes\' walk apart.', 'The map pin marks the square — the district covers several blocks.', 'Evening is when the area comes alive.']
    },
    {
      id: 'bujairi-terrace', name: 'Bujairi Terrace', nativeName: 'البجيري تراس',
      region: 'riyadh', city: 'Diriyah', categories: ['modern', 'heritage'], featured: true,
      coords: [24.7358, 46.5759], wiki: 'https://en.wikipedia.org/wiki/Diriyah',
      tagline: 'Mud-brick dining terraces looking straight across at At-Turaif.',
      overview: [
        'Bujairi Terrace sits on the lip of Wadi Hanifa facing the UNESCO-listed At-Turaif district, so the ruins of the first Saudi state are the view from the tables. It opened in 2022 as the first completed piece of the Diriyah Gate development.',
        'Around twenty restaurants occupy low buildings built in Najdi style, from Saudi cooking to international names, with palm-shaded walkways, a date museum and the Bujairi mosque alongside.'
      ],
      history: [
        'Bujairi is the quarter where Muhammad ibn Abd al-Wahhab lived and taught in the 18th century, across the valley from the ruling family\'s seat at At-Turaif.',
        'The terrace is part of the wider Diriyah Gate project, which is restoring the whole oasis as a cultural destination.'
      ],
      religious: ['The Imam Muhammad bin Abdul Wahhab Mosque and Foundation stand in Bujairi and can be visited outside prayer times.'],
      highlights: ['Sunset view across to At-Turaif', 'Twenty-odd restaurants and cafés', 'Bujairi Museum and the date displays', 'Najdi mud-brick architecture', 'Walkways down into Wadi Hanifa'],
      hours: { summary: 'Daily, late afternoon until late at night', details: ['Busiest Thursday and Friday evenings', 'Some restaurants need a booking at weekends'], note: 'Most of the terrace is outdoors and is at its best from November to March.' },
      tickets: { required: false, price: 'Free to enter; restaurants are expensive', how: ['No ticket for the terrace itself.', 'At-Turaif across the valley is a separate, ticketed site.'], links: [{ label: 'Diriyah (official)', url: 'https://www.diriyah.sa' }] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 20 minutes north-west of central Riyadh in Diriyah; large paid car parks.', transport: 'Taxi or ride-hailing is easiest; no metro station nearby.' },
      bestTime: 'November – March, from an hour before sunset', duration: '2–3 hours, or an evening',
      dress: 'Smart casual; modest clothing as elsewhere in the Kingdom.',
      tips: ['Book a table with a terrace view if you want the At-Turaif panorama.', 'Visit At-Turaif in the afternoon, then walk over for dinner.', 'Summer evenings are hot even after dark — the outdoor seating is misted but still warm.']
    },
    {
      id: 'diplomatic-quarter', name: 'Diplomatic Quarter (Al-Safarat)', nativeName: 'حي السفارات',
      region: 'riyadh', city: 'Riyadh', categories: ['modern', 'nature'],
      coords: [24.6771, 46.6251], wiki: 'https://en.wikipedia.org/wiki/Diplomatic_Quarter',
      tagline: 'Riyadh\'s greenest district, built for walking.',
      overview: [
        'The Diplomatic Quarter is a planned district on the edge of Wadi Hanifa that houses the embassies, and it is the most pedestrian-friendly part of Riyadh: landscaped wadi gardens, shaded walking and cycling paths and a string of small parks along the escarpment.',
        'Tuwaiq Palace, a curving wall of pale stone wrapped around a garden, is one of the most admired modern buildings in the Gulf and won an Aga Khan Award for Architecture.'
      ],
      history: [
        'The quarter was laid out in the 1980s to bring the embassies from Jeddah to the capital, and was designed around a continuous network of public open space rather than around cars.'
      ],
      religious: null,
      highlights: ['Wadi Hanifa walking and cycling paths', 'Tuwaiq Palace architecture', 'Rock Park and the escarpment viewpoints', 'Landscaped gardens between the embassies', 'Cafés around the DQ shopping centres'],
      hours: { summary: 'Public parks and paths open daily, dawn to late evening', details: ['Early morning and after sunset are the pleasant hours'], note: 'Embassy compounds are not open to visitors; the parks and paths are.' },
      tickets: { required: false, price: 'Free', how: ['No ticket for the public parks and paths.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'West of the city centre, above Wadi Hanifa.', transport: 'Taxi or ride-hailing; bus routes serve the quarter.' },
      bestTime: 'November – March; early morning year-round', duration: '2–3 hours',
      dress: 'Comfortable walking or running clothes; modest in public.',
      tips: ['The wadi-side path is the best free walk in Riyadh.', 'Security checks apply at some entrances — carry ID.', 'Combine with Wadi Hanifa further down the valley.']
    },
    {
      id: 'salam-park', name: 'Salam Park', nativeName: 'منتزه السلام',
      region: 'riyadh', city: 'Riyadh', categories: ['nature', 'modern'],
      coords: [24.6200, 46.7083], wiki: 'https://en.wikipedia.org/wiki/Salam_Park',
      tagline: 'A lake, lawns and palm groves in the middle of the city.',
      overview: [
        'Salam Park is one of central Riyadh\'s largest green spaces: a boating lake, wide lawns, date palms, play areas and walking loops, a short drive south of the old centre.',
        'It fills with families in the evening, especially at weekends and during Riyadh Season, when parts of it host events.'
      ],
      history: ['The park was developed on part of the historic Al-Futah gardens and opened in its present form in the 2000s as part of the municipality\'s programme of large public parks.'],
      religious: null,
      highlights: ['Boating lake', 'Shaded lawns and palm groves', 'Children\'s play areas', 'Evening family picnics', 'Walking and running loops'],
      hours: { summary: 'Daily, roughly 08:00 until midnight', details: ['Busiest on Thursday and Friday evenings'], note: 'Some areas may be closed during events.' },
      tickets: { required: false, price: 'Free; boat hire and rides are paid', how: ['No ticket to enter.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Futah / Al-Dahu area, south of the old centre.', transport: 'Taxi or ride-hailing; metro Line 1 passes nearby.' },
      bestTime: 'November – March, evenings', duration: '1–2 hours',
      dress: 'Casual, modest.',
      tips: ['Go after sunset in warmer months.', 'Easy to combine with the National Museum and Murabba Palace.', 'Families and single men use separate areas at some parks — follow the signage.']
    },
    {
      id: 'riyadh-zoo', name: 'Riyadh Zoo', nativeName: 'حديقة الحيوان بالرياض',
      region: 'riyadh', city: 'Riyadh', categories: ['nature', 'modern'],
      coords: [24.6768, 46.7374], wiki: 'https://en.wikipedia.org/wiki/Riyadh_Zoo',
      tagline: 'The capital\'s zoo, in the old Al-Malaz district.',
      overview: [
        'Riyadh Zoo covers about 22 hectares in Al-Malaz and holds mammals, birds and reptiles from Arabia, Africa and Asia, with shaded walkways and a small train around the grounds.',
        'It is primarily a family outing rather than a conservation showcase; expect a busy, cheerful park on weekend evenings.'
      ],
      history: ['The collection began in 1957 as a royal menagerie and opened to the public in 1987. It has been renovated in stages since.'],
      religious: null,
      highlights: ['Arabian wildlife including oryx and gazelle', 'Big cats and primates', 'Reptile house', 'Internal train', 'Shaded picnic areas'],
      hours: { summary: 'Open most days; closing day and family-only days vary', details: ['Some days are reserved for families', 'Longer evening hours in summer'], note: 'Check the current timetable before going — the schedule changes seasonally.' },
      tickets: { required: true, price: 'Low entry fee', how: ['Buy at the gate; tickets may also be sold online.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Malaz, east-central Riyadh.', transport: 'Taxi or ride-hailing; metro Line 2 serves Al-Malaz.' },
      bestTime: 'November – March; mornings or evenings', duration: '2–3 hours',
      dress: 'Casual, with sun protection; much of the route is open.',
      tips: ['Avoid the middle of the day in summer — both for you and the animals.', 'Weekday mornings are far quieter.', 'Combine with Salam Park, which is close by.']
    },
    {
      id: 'saqr-aljazirah', name: 'Saqr Aljazirah Aviation Museum', nativeName: 'متحف صقر الجزيرة للطيران',
      region: 'riyadh', city: 'Riyadh', categories: ['modern', 'heritage'],
      coords: [24.7528, 46.7371], wiki: 'https://en.wikipedia.org/wiki/Saqr_Aljazirah_Aviation_Museum',
      tagline: 'Saudi air force history, with the aircraft parked outside.',
      overview: [
        'The Saqr Aljazirah ("Falcon of the Peninsula") museum on the Eastern Ring Road tells the story of the Royal Saudi Air Force from the 1920s onwards, with an indoor gallery of uniforms, instruments and models and an outdoor park of real aircraft.',
        'The outdoor collection includes Lightnings, Strikemasters, a Hawk, transport aircraft and helicopters, which children can get close to.'
      ],
      history: ['The museum opened in 1999 to mark the centenary of the founding of the Saudi state, and is run by the Ministry of Defence.'],
      religious: null,
      highlights: ['Outdoor aircraft park', 'English Electric Lightning and other early jets', 'RSAF uniforms and instruments', 'Flight simulator displays', 'Air-defence and radar exhibits'],
      hours: { summary: 'Open most days except the weekly closing day; mornings and evenings', details: ['Separate visiting times may apply for families and for single visitors'], note: 'Photography rules are strict in parts of the museum — ask first.' },
      tickets: { required: true, price: 'Low entry fee', how: ['Pay at the gate.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'On the Eastern Ring Road in the Al-Quds / King Abdullah district.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'November – March', duration: '1.5–2 hours',
      dress: 'Casual; sun protection for the outdoor park.',
      tips: ['The aircraft outside are the highlight — leave time for them.', 'Good for children, with space to move around.', 'Bring ID; this is a military-run site.']
    },
    {
      id: 'via-riyadh', name: 'VIA Riyadh', nativeName: 'فيا الرياض',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'], approx: true,
      coords: [24.7539, 46.6008],
      tagline: 'A luxury dining, cinema and shopping quarter in Hittin.',
      overview: [
        'VIA Riyadh is an open-air luxury complex in the Hittin district, built in the pale-stone Salmani style the capital has adopted for its new civic architecture. It gathers high-end restaurants, flagship boutiques and premium cinemas, including an opera-style theatre, around landscaped courtyards.',
        'It is primarily an evening destination and one of the places where Riyadh\'s new entertainment sector is most visible.'
      ],
      history: ['Developed by the Public Investment Fund as part of the push to keep luxury spending and entertainment inside the Kingdom, it opened in stages from 2023.'],
      religious: null,
      highlights: ['Salmani-style architecture and courtyards', 'Premium cinemas and a theatre', 'Flagship restaurants', 'Luxury boutiques', 'Evening people-watching'],
      hours: { summary: 'Daily, afternoon until late', details: ['Restaurants and cinemas keep their own hours'], note: 'Opening times shift during Ramadan.' },
      tickets: { required: false, price: 'Free to enter; everything inside is expensive', how: ['No entry ticket. Book restaurants and cinema seats in advance at weekends.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Hittin district, north-west Riyadh, near the Diplomatic Quarter.', transport: 'Taxi or ride-hailing; valet parking on site.' },
      bestTime: 'November – March, evenings', duration: '2–3 hours',
      dress: 'Smart; this is the dressiest venue in the city.',
      tips: ['The map pin marks the Hittin district — confirm the exact entrance in your maps app.', 'Weekday evenings are far less crowded than Thursday and Friday.', 'Not a budget stop; Boulevard City is the livelier, cheaper alternative.']
    },
    {
      id: 'riyadh-park-mall', name: 'Riyadh Park', nativeName: 'الرياض بارك',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.7569, 46.6301],
      tagline: 'One of the capital\'s biggest malls, with a large cinema.',
      overview: [
        'Riyadh Park in Al-Aqiq is a large modern mall with international and Saudi brands, a wide food court, a multiplex cinema and indoor entertainment for children.',
        'Like most Gulf malls it doubles as a public space: people come to walk, eat and escape the heat as much as to shop.'
      ],
      history: ['Opened in 2017 and extended since, it was one of the first malls in Riyadh to open a cinema after the 35-year ban on cinemas ended in 2018.'],
      religious: null,
      highlights: ['Cinema multiplex', 'International and local brands', 'Food court and restaurants', 'Indoor play areas', 'Air-conditioned walking in summer'],
      hours: { summary: 'Daily, roughly 10:00 until midnight (longer at weekends)', details: ['Shorter daytime hours and very late nights during Ramadan'], note: 'Some shops pause briefly at prayer times.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Aqiq, north-west Riyadh, near KAFD.', transport: 'Taxi or ride-hailing; metro Line 4 and 6 stations are near KAFD.' },
      bestTime: 'Any time; a useful refuge in summer', duration: '2 hours',
      dress: 'Modest casual.',
      tips: ['Combine with KAFD, which is a short drive away.', 'Weekday afternoons are the quietest.', 'Cinema tickets are cheaper before the evening shows.']
    },
    {
      id: 'al-nakheel-mall', name: 'Al Nakheel Mall', nativeName: 'النخيل مول',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.7668, 46.7158],
      tagline: 'A family shopping centre in north Riyadh.',
      overview: [
        'Al Nakheel Mall on Othman bin Affan Road is a long-established family mall with department stores, a hypermarket, a food court and children\'s entertainment.',
        'It is less glossy than the newer developments but busy, central to the northern suburbs and easy to reach.'
      ],
      history: ['One of the larger malls built during Riyadh\'s northward expansion in the 2000s.'],
      religious: null,
      highlights: ['Department stores and hypermarket', 'Food court', 'Children\'s entertainment area', 'Electronics and perfume shops'],
      hours: { summary: 'Daily, roughly 10:00 until midnight', details: [], note: 'Shops pause briefly at prayer times.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Mughrizat, north Riyadh, on Othman bin Affan Road.', transport: 'Taxi or ride-hailing.' },
      bestTime: 'Any time', duration: '1–2 hours',
      dress: 'Modest casual.',
      tips: ['More practical than scenic — useful for everyday shopping.', 'Quieter than Riyadh Park on weekend evenings.', 'Good for a cheap meal in the food court.']
    },
    {
      id: 'sadus', name: 'Sadus Heritage Village', nativeName: 'قرية سدوس التراثية',
      region: 'riyadh', city: 'Sadus, Diriyah', categories: ['heritage', 'archaeology'],
      coords: [24.9917, 46.2075], wiki: 'https://en.wikipedia.org/wiki/Sadus',
      tagline: 'A ruined mud town and palace on the old Najd caravan road.',
      overview: [
        'Sadus lies in a wadi north-west of Riyadh, a cluster of collapsing mud-brick houses, a fortified palace and an old mosque around palm gardens. Little has been restored, so it feels more like a ruin than a museum.',
        'The surrounding wadi and the rock outcrops above the village make it a popular weekend drive from the capital.'
      ],
      history: [
        'Sadus is an old settlement of the Al-Washm and Diriyah borderlands, mentioned in Najdi histories and built around a spring and palm gardens.',
        'Qasr Sadus, the village\'s fortified palace, and the surrounding walls are the most substantial survivals.'
      ],
      religious: null,
      highlights: ['Qasr Sadus and the mud-brick ruins', 'The old village mosque', 'Palm gardens and the wadi', 'Rock outcrops and desert drives', 'Very few other visitors'],
      hours: { summary: 'Open site, daylight hours', details: [], note: 'Unrestored ruins — walls are fragile and unfenced. Take care, especially with children.' },
      tickets: { required: false, price: 'Free', how: ['No ticket or booking.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 90 km north-west of Riyadh via Huraymila; the last stretch is a minor road.', transport: 'A car is essential — there is no public transport.' },
      bestTime: 'November – March; after winter rain the wadi is green', duration: '2 hours',
      dress: 'Sturdy shoes, hat and water.',
      tips: ['Do not climb on the mud walls — they are unstable and part of the heritage.', 'Combine with Huraymila and the Tuwaiq escarpment.', 'Take everything you need; there are no facilities at the village.']
    },
    {
      id: 'rawdat-khuraim', name: 'Rawdat Khuraim (The King\'s Forest)', nativeName: 'روضة خريم',
      region: 'riyadh', city: 'Rumah', categories: ['nature'],
      coords: [25.3631, 47.3020], wiki: 'https://en.wikipedia.org/wiki/Rawdhat_Khuraim',
      tagline: 'A desert meadow that turns green after the winter rains.',
      overview: [
        'Rawdat Khuraim is the best known of Najd\'s rawdahs — shallow basins where rainwater collects and grass, wildflowers and acacia and sidr trees grow thickly for a few weeks each year.',
        'In a good spring the floor of the basin is carpeted in green and yellow and the whole of Riyadh seems to drive out to camp, picnic and let children run. In summer it reverts to dry scrub.'
      ],
      history: ['The area has long been protected royal grazing land, which is why it is also called the King\'s Forest, and its acacia woodland is unusually intact for central Arabia.'],
      religious: null,
      highlights: ['Spring wildflowers and green grass', 'Acacia and sidr woodland', 'Camping and barbecues', 'Birdwatching on migration', 'Night skies away from the city'],
      hours: { summary: 'Open at all times; the season is roughly January to April', details: ['Peak greenery follows good winter rain — some years it barely greens at all', 'Weekends in spring are extremely busy'], note: 'There are no facilities: no water, no toilets, no shops.' },
      tickets: { required: false, price: 'Free', how: ['No ticket. Camping is informal.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 100 km north-east of Riyadh, in Rumah governorate off the Riyadh–Rumah road.', transport: 'A car is essential; a 4x4 helps if you leave the graded tracks.' },
      bestTime: 'February – March after a wet winter', duration: 'Half a day, or an overnight camp',
      dress: 'Layers — desert nights are cold in winter — plus sun protection.',
      tips: ['Check with locals whether it has actually greened before driving out; dry years are common.', 'Take all your rubbish home; the rawdah suffers badly from litter.', 'Do not drive over the vegetation — park on the tracks.']
    },
    {
      id: 'rawdat-al-tanhat', name: 'Rawdat Al-Tanhat', nativeName: 'روضة التنهاة',
      region: 'riyadh', city: 'Rumah', categories: ['nature'], approx: true,
      coords: [25.2000, 47.1500],
      tagline: 'A quieter rawdah north-east of Riyadh for winter camping.',
      overview: [
        'Rawdat Al-Tanhat is one of the natural meadows in the belt of rawdahs north-east of Riyadh, in the same landscape as Rawdat Khuraim but with far fewer visitors.',
        'Like the other rawdahs it depends entirely on the winter rains: after a wet season the basin fills with grass and wildflowers and becomes a favourite camping ground, and in a dry year there is little to see.'
      ],
      history: ['The rawdahs of Najd have been seasonal grazing grounds for Bedouin herds for centuries, and are now mainly used for weekend camping by families from the capital.'],
      religious: null,
      highlights: ['Seasonal wildflowers', 'Quiet winter camping', 'Dark skies for stargazing', 'Acacia trees and open desert'],
      hours: { summary: 'Open at all times; the season is roughly January to April', details: [], note: 'No facilities of any kind — bring water, fuel and everything else.' },
      tickets: { required: false, price: 'Free', how: ['No ticket. Camping is informal.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'North-east of Riyadh in the Rumah area; the final approach is on desert tracks.', transport: 'A 4x4 is strongly recommended.' },
      bestTime: 'February – March after a wet winter', duration: 'Half a day, or an overnight camp',
      dress: 'Warm layers for the night, sun protection by day.',
      tips: ['The map pin is approximate — confirm the exact spot in a maps app or with a local guide before setting off.', 'Do not rely on phone signal out here; tell someone your plans.', 'Carry out everything you bring in.']
    },
    {
      id: 'al-kharj-water-tower', name: 'Al-Kharj Water Tower', nativeName: 'برج المياه بالخرج',
      region: 'riyadh', city: 'Al-Kharj', categories: ['modern', 'heritage'],
      coords: [24.1154, 47.2915],
      tagline: 'The landmark that marks the old farming capital of Najd.',
      overview: [
        'The steel water tower on King Abdullah Road is Al-Kharj\'s most recognisable landmark, standing over a town that was the Kingdom\'s first large modern farming project.',
        'Al-Kharj itself is the reason to come: the giant natural water pits (Ain Al-Dhila and the Al-Kharj sinkholes) that fed its agriculture, and the date and dairy farms around it.'
      ],
      history: [
        'In the 1930s and 1940s King Abdulaziz developed Al-Kharj into the country\'s first mechanised farming scheme, drawing on the deep natural wells that had watered the oasis for centuries.',
        'The town remains one of Saudi Arabia\'s main agricultural centres.'
      ],
      religious: null,
      highlights: ['The water tower itself', 'Al-Kharj natural water pits (Ain Al-Dhila)', 'Date farms and dairy country', 'Al-Kharj old quarter', 'An easy stop on the road south from Riyadh'],
      hours: { summary: 'The tower is a roadside landmark, visible at all times', details: [], note: 'The tower is not generally open to climb; the water pits are the real attraction.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 80 km south-east of Riyadh on the Al-Kharj highway.', transport: 'Car or intercity bus from Riyadh.' },
      bestTime: 'November – March', duration: '1–2 hours with the water pits',
      dress: 'Sun protection; sturdy shoes near the pits.',
      tips: ['Stand well back from the edges of the water pits — they are deep and unfenced.', 'Combine with Heet Cave, which is on the same road back to Riyadh.', 'Buy dates directly from the farms along the highway.']
    },
    /* ======================= ROUND 4: RIYADH PROVINCE ======================= */
    {
      id: 'murabba-palace', name: 'Murabba Palace', nativeName: 'قصر المربع',
      region: 'riyadh', city: 'Riyadh', categories: ['heritage'],
      coords: [24.6461, 46.7122], wiki: 'https://en.wikipedia.org/wiki/Murabba_Palace',
      tagline: 'King Abdulaziz\'s mud-brick palace and court.',
      overview: ['The square ("murabba") mud-brick palace was the residence and seat of government of King Abdulaziz. Its rooms show his majlis, offices, a vintage car collection and traditional Najdi interiors.'],
      history: ['Built between 1936 and 1938 outside the old walls of Riyadh; it is now part of the King Abdulaziz Historical Center beside the National Museum.'],
      religious: null,
      highlights: ['Royal majlis', 'Najdi architecture', 'Historic car of King Abdulaziz'],
      hours: { summary: 'Typically daily, morning and evening', details: [], note: 'Check current hours.' },
      tickets: { required: false, price: 'Free / small fee', how: ['Pay at the entrance if applicable.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'King Abdulaziz Historical Center, Al Murabba district.', transport: 'Riyadh Metro or taxi.' },
      bestTime: 'Any time', duration: '1 hour', dress: 'Modest clothes.', tips: ['Visit with the National Museum.']
    },
    {
      id: 'souq-al-zal', name: 'Souq Al-Zal', nativeName: 'سوق الزل',
      region: 'riyadh', city: 'Riyadh', categories: ['heritage'],
      coords: [24.6303, 46.7140],
      tagline: 'Riyadh\'s oldest traditional market for carpets, oud and antiques.',
      overview: ['Souq Al-Zal is a traditional market beside Masmak Fortress, selling carpets (zal), bishts, swords, perfumes, oud, antiques and Bedouin crafts. In the evenings, an open-air auction area comes alive.'],
      history: ['The market has served old Riyadh since the early 20th century and is one of the city\'s most authentic shopping experiences.'],
      religious: null,
      highlights: ['Carpets and bishts', 'Oud and perfumes', 'Antiques auction'],
      hours: { summary: 'Typically morning and from late afternoon to night', details: [], note: 'Shops close during prayer times.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'Al-Dirah district, next to Masmak.', transport: 'Riyadh Metro or taxi.' },
      bestTime: 'Evening', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['Bargaining is expected.']
    },
    {
      id: 'kafd', name: 'King Abdullah Financial District (KAFD)', nativeName: 'مركز الملك عبدالله المالي',
      region: 'riyadh', city: 'Riyadh', categories: ['modern'],
      coords: [24.7633, 46.6400], wiki: 'https://en.wikipedia.org/wiki/King_Abdullah_Financial_District',
      tagline: 'Futuristic skyscrapers, a skywalk and a striking metro station.',
      overview: ['KAFD is a modern business district of bold skyscrapers connected by an elevated walkway, with cafés, restaurants and public art. Its metro station, designed by Zaha Hadid Architects, is an architectural landmark.'],
      history: ['Planned from 2006, the district opened in phases from the late 2010s.'],
      religious: null,
      highlights: ['KAFD Metro Station', 'Skyscraper architecture', 'Evening skywalk'],
      hours: { summary: 'Public areas open daily', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'North Riyadh, King Fahd Road.', transport: 'Riyadh Metro (KAFD station).' },
      bestTime: 'Evening', duration: '1–2 hours', dress: 'Smart casual.', tips: ['Arrive by metro to see the station.']
    },
    {
      id: 'dahl-heet', name: 'Heet Cave (Dahl Heet / Ain Heet)', nativeName: 'دحل هيت (عين هيت)',
      region: 'riyadh', city: 'Near Riyadh', categories: ['nature'],
      status: 'check',
      notice: 'Visitors have recently reported fencing and civil-defence warnings restricting access to the inner cave, and the water quality has declined. Entry to the lake may not be possible — check the latest status before travelling, and never swim here.',
      coords: [24.4861, 46.9972], wiki: 'https://en.wikipedia.org/wiki/Ein_Heet_Cave',
      tagline: 'An eye-shaped sinkhole cave with an underground lake near Riyadh.',
      overview: [
        'Heet Cave — also called Dahl Heet or Ain Heet ("Eye of Heet") — is a limestone and anhydrite sinkhole cave about 40 km south-east of Riyadh, off the Riyadh–Al-Kharj highway near the village of Heet.',
        'Its eye-shaped entrance, about 20 m wide, is set into the face of Jabal Al-Jubayl in Wadi As-Sulay. Inside, a steep slope leads down to an underground groundwater lake about 150 m long and more than 30 m deep.'
      ],
      history: [
        'For centuries desert caravans relied on the cave\'s water as a vital source in the dry Najd plateau.',
        'In 1938 geologists invited by King Abdulaziz surveyed the cave while searching for water, and recorded Saudi Arabia\'s first known anhydrite rock deposits here.'
      ],
      religious: null,
      highlights: [
        'Eye-shaped cave entrance in the escarpment',
        'Underground lake ~150 m long and 30+ m deep',
        'Layered limestone and anhydrite rock',
        'Historic caravan water source'
      ],
      hours: { summary: 'Access currently uncertain — may be restricted', details: [], note: 'No facilities, lighting or phone signal inside the cave.' },
      tickets: { required: false, price: 'Free (when accessible)', how: ['No ticket required.', 'Check recent reports before travelling, as fences may block the inner chamber.'], links: [{ label: 'VisitSaudi – Heet Cave', url: 'https://www.visitsaudi.com/en/riyadh/attractions/heet-cave' }] },
      gettingThere: { airport: 'King Khalid International (RUH)', road: 'About 40 km south-east of Riyadh on the Al-Kharj road, then about 5 km east on an unpaved desert track past an old pump house to the escarpment.', transport: 'Car (4x4 helpful); no public transport.' },
      bestTime: 'Winter mornings', duration: '1–2 hours',
      dress: 'Sturdy shoes with good grip.',
      tips: [
        'The descent is a steep 45° slope of loose boulders with no handrails — do not attempt it without experience.',
        'Swimming is strongly discouraged: the water is deep, cold and its quality has declined.',
        'Respect fences and civil-defence warning signs.',
        'Take your rubbish home — litter has damaged the site.'
      ]
    },

    /* ======================= ROUND 4: EASTERN PROVINCE ======================= */
    {
      id: 'dammam-corniche', name: 'Dammam Corniche & Marjan Island', nativeName: 'كورنيش الدمام',
      region: 'eastern', city: 'Dammam', categories: ['coast', 'modern'],
      approx: true, coords: [26.4500, 50.1000],
      tagline: 'Seafront parks, a man-made island and Gulf sunsets.',
      overview: ['Dammam\'s long corniche has gardens, walking and cycling paths, play areas and cafés. Marjan Island, linked by a bridge, is a favourite for evening strolls and fishing.'],
      history: ['Dammam grew rapidly after oil was discovered in the region in the 1930s and is now the capital of the Eastern Province.'],
      religious: null,
      highlights: ['Marjan Island', 'Seafront promenade', 'Fishing spots'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'King Fahd International (DMM)', road: 'Central Dammam seafront.', transport: 'Taxi.' },
      bestTime: 'October – April evenings', duration: '2 hours', dress: 'Casual modest.', tips: ['Weekend evenings are lively with families.']
    },
    {
      id: 'yellow-lake', name: 'Yellow Lake (Al-Asfar), Al-Ahsa', nativeName: 'بحيرة الأصفر',
      region: 'eastern', city: 'Al-Ahsa', categories: ['nature'],
      coords: [25.5500, 49.7800],
      tagline: 'A desert lake among golden dunes, rich in birdlife.',
      overview: ['Buhayrat al-Asfar is a large lake on the eastern edge of the Al-Ahsa oasis, formed from drainage water and surrounded by sand dunes and reeds. It attracts migratory birds and is popular for dune drives and sunsets.'],
      history: ['The lake grew from the oasis drainage system built in the 1970s.'],
      religious: null,
      highlights: ['Birdwatching', 'Sand dunes', 'Sunset'],
      hours: { summary: 'Open at all times', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Ahsa (HOF)', road: 'East of Al-Ahsa villages; last part on sand.', transport: '4x4 recommended.' },
      bestTime: 'November – March', duration: 'Half a day', dress: 'Desert gear.', tips: ['Bring binoculars in winter for migrating birds.']
    },

    /* ======================= ROUND 4: NAJRAN / AL-BAHAH ======================= */
    {
      id: 'al-aan-palace', name: 'Al-Aan Palace, Najran', nativeName: 'قصر العان',
      region: 'najran', city: 'Najran', categories: ['heritage'],
      coords: [17.4803, 44.096],
      tagline: 'A hilltop mud fortress overlooking the Najran valley.',
      overview: ['Al-Aan Palace crowns a hill above the palm groves of Najran. Its tall mud-brick walls and towers are a classic example of Najrani architecture, with wide views across the valley.'],
      history: ['The fortress-palace is around 300 years old and was built for defence and to watch over the valley\'s farms.'],
      religious: null,
      highlights: ['Valley views', 'Mud-brick towers'],
      hours: { summary: 'Daytime', details: [], note: 'Interior access may vary.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Najran (EAM)', road: 'Western Najran, Saadan area.', transport: 'Car.' },
      bestTime: 'October – April', duration: '1 hour', dress: 'Modest clothes.', tips: ['Visit with Al-Emara Palace in the same day.']
    },
    {
      id: 'al-atawlah', name: 'Al-Atawlah Heritage Village', nativeName: 'قرية الأطاولة التراثية',
      region: 'bahah', city: 'Al-Bahah', categories: ['heritage'],
      coords: [20.2475, 41.3607],
      tagline: 'A centuries-old stone village in the Al-Bahah highlands.',
      overview: ['Al-Atawlah is a restored highland village of multi-storey stone houses, narrow lanes and watchtowers, with a heritage market and seasonal festivals.'],
      history: ['The village is several centuries old and reflects the stone architecture of the Sarawat mountains.'],
      religious: null,
      highlights: ['Stone houses', 'Heritage market', 'Summer festivals'],
      hours: { summary: 'Daytime and evening', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Al-Bahah (ABT)', road: 'North of Al-Bahah city.', transport: 'Car.' },
      bestTime: 'June – September', duration: '1–2 hours', dress: 'Modest clothes.', tips: ['Combine with Raghadan Forest.']
    },

    /* ======================= ROUND 4: TABUK ======================= */
    {
      id: 'ras-alsheikh-hamid', name: 'Ras Alsheikh Hamid', nativeName: 'رأس الشيخ حميد',
      region: 'tabuk', city: 'Al-Bad\'', categories: ['coast', 'nature', 'heritage'], featured: true,
      coords: [28.1330, 34.5928], wiki: 'https://en.wikipedia.org/wiki/Ras_Alsheikh_Hamid',
      tagline: 'Saudi Arabia\'s westernmost point — turquoise water where the Red Sea meets the Gulf of Aqaba.',
      overview: [
        'Ras Alsheikh Hamid is an uninhabited sandy headland in Tabuk Province and the westernmost point of the Saudi mainland. It sits at the meeting point of the Red Sea and the Gulf of Aqaba, directly across the Strait of Tiran from Egypt\'s Sinai Peninsula.',
        'Its clear turquoise water, coral reefs and white sand make it popular for swimming, snorkelling, diving and fishing. On clear days you can see Tiran Island and the mountains around Sharm El-Sheikh across the water.'
      ],
      history: [
        'The cape is known for the abandoned wreck of a Consolidated PBY Catalina amphibious aircraft lying on the sand. In March 1960 an American family flying around the world landed on the beach and was mistakenly fired upon; the family was rescued and taken to Jeddah, but the damaged plane was left on the shore.',
        'The headland is planned as the western end of THE LINE in NEOM, and has been proposed as the Saudi landing point of a future Saudi–Egypt causeway across the Strait of Tiran.'
      ],
      religious: null,
      highlights: [
        'Westernmost point of mainland Saudi Arabia',
        'Turquoise lagoons and coral reefs for snorkelling and diving',
        '1960 Catalina seaplane wreck on the beach',
        'Views of Tiran Island and the Sinai mountains',
        'Remote, undeveloped coastline'
      ],
      hours: { summary: 'Open area; visit in daylight', details: [], note: 'Within the NEOM region — access rules may change with development.' },
      tickets: { required: false, price: 'Free', how: ['No ticket required.', 'Carry valid ID (National ID, Iqama or passport) for Border Guard checks.'], links: [] },
      gettingThere: { airport: 'NEOM Bay Airport (NUM) or Tabuk Regional Airport (TUU)', road: 'About 50 km south-west of Al-Bad\' and roughly 220 km from Tabuk city. Paved road most of the way; 4x4 recommended for the sandy final stretch to the beach and the plane wreck.', transport: 'Car only; no public transport.' },
      bestTime: 'October – May', duration: 'Half to full day',
      dress: 'Modest swimwear; sun protection and reef shoes.',
      tips: [
        'The area is patrolled by the Saudi Border Guard — carry ID and follow instructions.',
        'Drone photography is strictly prohibited here.',
        'There are no shops, restrooms or campsites — bring all water, food and supplies.',
        'Combine with Maqna, Tayeb Ism and Madyan Shuaib for a coastal road trip.'
      ]
    },
    {
      id: 'tayeb-ism', name: 'Wadi Tayyib Ism (Tayeb Al-Ism) Canyon', nativeName: 'وادي طيب اسم',
      region: 'tabuk', city: 'Maqna', categories: ['nature', 'religious'], featured: true,
      status: 'closed',
      notice: 'This site is currently closed to visitors. We will update this page as soon as it reopens — please check the latest status locally before travelling.',
      approx: true, coords: [28.5500, 34.8000],
      tagline: 'The "Valley of the Good Name" — a 600 m-deep granite gorge with a stream flowing to the sea.',
      overview: [
        'Wadi Tayyib Ism (also spelled Tayeb Al-Ism), meaning "Valley of the Good Name", is a dramatic 5 km granite gorge in Tabuk Province. Sheer, polished cliffs rise up to about 600 m on both sides of a narrow floor that opens onto the Gulf of Aqaba near Maqna.',
        'Unlike most desert valleys, a high water table feeds a year-round freshwater stream, which supports date palms, reeds and wildlife such as the Nubian ibex.'
      ],
      history: [
        'The cliffs are made of ancient Precambrian granite, cut by water over a very long time into a narrow gorge.',
        'The valley lies in the historical land of Madyan (Midian), and today it falls within the NEOM development zone.'
      ],
      religious: [
        'Local tradition associates the valley with Prophet Musa (Moses) and his years in Madyan after leaving Egypt (Qur\'an, Al-Qasas 28:22–28). Some traditions also connect its springs and palms with the oasis of Elim mentioned in the Bible. These links are traditional and not confirmed historically.'
      ],
      highlights: [
        '600 m granite walls',
        'Year-round freshwater stream and palm groves',
        'Gorge opening onto the Gulf of Aqaba',
        'Nubian ibex and desert wildlife',
        '60–90 minute walk along the canyon floor (when open)'
      ],
      hours: { summary: 'Currently closed — reopening date not announced', details: [], note: 'Within the NEOM zone; the coastal exit has a coast-guard checkpoint. Permits or fees may apply when reopened.' },
      tickets: { required: false, price: 'Closed at present', how: ['The site is currently closed; this page will be updated when it reopens.', 'When open, check permit rules before travelling, as clearances may be required.'], links: [] },
      gettingThere: { airport: 'NEOM Bay Airport (NUM) or Tabuk Regional Airport (TUU)', road: 'Usually approached from the east via Al-Bad\' on a 27.5 km unpaved track; a 2WD can manage in dry weather, but the track turns muddy after rain.', transport: 'Car only.' },
      bestTime: 'October – April (once reopened)', duration: '2–3 hours',
      dress: 'Sturdy shoes with good grip, sun hat.',
      tips: [
        'Currently closed — do not try to enter restricted areas.',
        'When open: carry 1.5–3 litres of water per person and avoid midday heat.',
        'Never enter the gorge when rain is forecast — flash floods are dangerous.',
        'Nearby: Maqna coast, Madyan Shuaib and Ras Alsheikh Hamid.'
      ]
    },

    /* ======================= ROUND 4: HAIL / QASSIM / AL-JAWF ======================= */
    {
      id: 'barzan-palace', name: 'Barzan Palace Ruins, Hail', nativeName: 'قصر برزان',
      region: 'hail', city: 'Hail', categories: ['heritage'],
      coords: [27.5200, 41.6900],
      tagline: 'Remains of the palace of the Al Rashid rulers of Hail.',
      overview: ['Only part of the once-vast Barzan Palace survives, near Barzan Square in central Hail, recalling the era when Hail was the capital of the Al Rashid emirate.'],
      history: ['Built in the 19th century, the palace was the seat of the Al Rashid dynasty until Hail joined the Saudi state in 1921.'],
      religious: null,
      highlights: ['Historic remains', 'Barzan Square'],
      hours: { summary: 'Viewable at any time', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Hail (HAS)', road: 'Central Hail.', transport: 'Taxi.' },
      bestTime: 'Evening', duration: '30 minutes', dress: 'Modest clothes.', tips: ['Walk to Qishlah Palace and A\'arif Fort.']
    },
    {
      id: 'buraidah-camel-market', name: 'Buraidah Camel Market (Al-An\'am City)', nativeName: 'سوق الإبل ببريدة — مدينة الأنعام',
      region: 'qassim', city: 'Buraidah', categories: ['heritage'], featured: true,
      coords: [26.3605, 44.0436],
      tagline: 'One of the world\'s largest camel markets — lively dawn auctions in the heart of Qassim.',
      overview: [
        'The Buraidah Camel Market is located inside Al-An\'am City, the livestock market complex on the outskirts of Buraidah in Al-Qassim Province. Covering more than 600,000 m², it is often described as one of the largest camel markets in the world.',
        'Every day thousands of camels, sheep and goats are traded here. Arabian one-humped camels in white, beige, brown and black fill the sandy pens, and the market offers a vivid glimpse of Bedouin heritage and the camel\'s central role in Saudi culture.'
      ],
      history: [
        'Qassim has been a centre of camel and livestock trading for centuries, on the caravan routes that crossed Najd.',
        'The market was moved to the purpose-built Al-An\'am City complex, which gathers camel, sheep, goat and bird sections, feed stores and traders in one place.'
      ],
      religious: null,
      highlights: [
        'Fast-paced dawn camel auctions',
        'Thousands of camels in many colours',
        'Camels traded for milk, meat, breeding and racing',
        'Stalls selling saddles, halters, blankets and fodder',
        'Cranes lifting newly bought camels onto trucks',
        'Sheep, goat and bird sections'
      ],
      hours: { summary: 'Complex about 6:00 AM – midnight; main camel auctions about 6:00 – 9:00 AM', details: ['Busiest on Saturday mornings', 'Trading starts right after the dawn (Fajr) prayer'], note: '' },
      tickets: { required: false, price: 'Free', how: ['No ticket needed — just walk in.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz Airport (ELQ), Buraidah', road: 'Al-An\'am City, along Ali bin Abi Talib Road / East Ring Road in Buraidah. About 3.5–4 hours by road from Riyadh.', transport: 'Car or taxi; train from Riyadh to Qassim station, then taxi.' },
      bestTime: 'Winter mornings, right after sunrise', duration: '1–2 hours',
      dress: 'Modest clothes and sturdy closed shoes for sand and dust.',
      tips: [
        'Arrive just after sunrise for the busiest auctions and cooler air.',
        'Ask before photographing people.',
        'Keep a safe distance from camels — they can kick and bite.',
        'Combine with the Buraidah Dates City market in the same morning.'
      ]
    },
    {
      id: 'qasr-kaf', name: 'Kaf Palace, Qurayyat', nativeName: 'قصر كاف',
      region: 'jawf', city: 'Qurayyat', categories: ['heritage'],
      approx: true, coords: [31.4000, 37.3900],
      tagline: 'A basalt-and-stone palace near the Jordanian border.',
      overview: ['Kaf Palace stands on a hill in the village of Kaf near Qurayyat, built from local stone, with towers and views over the salt plains of Wadi Sirhan.'],
      history: ['Built in the early 20th century; King Abdulaziz\'s forces took control of the area in the 1920s.'],
      religious: null,
      highlights: ['Hilltop palace', 'Wadi Sirhan views'],
      hours: { summary: 'Daytime', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Qurayyat (URY) or Al-Jouf (AJF)', road: 'About 15 km from Qurayyat.', transport: 'Car.' },
      bestTime: 'November – March', duration: '1 hour', dress: 'Modest clothes.', tips: ['Nearby salt flats are beautiful at sunset.']
    },
    {
      id: 'jouf-olive-festival', name: 'Al-Jouf Olive Farms & International Olive Festival', nativeName: 'مزارع ومهرجان زيتون الجوف الدولي',
      region: 'jawf', city: 'Sakaka', categories: ['heritage', 'nature'], featured: true,
      coords: [29.9559, 40.1959],
      tagline: 'The olive capital of Saudi Arabia — millions of trees and a winter festival in Sakaka.',
      overview: [
        'Al-Jouf is known as the olive capital of Saudi Arabia, with more than 20 million olive trees on thousands of farms. Most commercial groves lie in the fertile Busayta agricultural area south-west of Sakaka.',
        'Every January the Al-Jouf International Olive Festival is held in Sakaka for about ten days, celebrating the winter harvest and pressing season with olive-oil exhibitions, folk shows and food and craft markets.',
        'Large estates such as the Al-Jouf Agricultural Development Company (JADCO) — recognised by Guinness World Records as the largest modern olive farm in the world — and NADEC\'s olive project use high-density planting and smart irrigation, producing organic extra-virgin olive oil.'
      ],
      history: [
        'Large-scale olive farming grew rapidly in Al-Jouf from the 2000s, thanks to its climate, fertile soil and groundwater.',
        'The olive festival has grown into an international event, with producers from Saudi Arabia and countries such as Spain, Italy, Jordan and Türkiye.'
      ],
      religious: ['The olive tree is honoured in the Qur\'an as "a blessed tree" whose oil gives light (An-Nur 24:35), and the Prophet ﷺ encouraged eating olive oil and anointing with it.'],
      highlights: [
        'Al-Jouf International Olive Festival (every January, Sakaka)',
        'Fresh extra-virgin olive oil tastings',
        'Pickled olives, olive-based cosmetics and local products',
        'Traditional Ardah dances, folk music and parades',
        'Sadu weaving and handicraft markets',
        'Guided agri-tours of large olive estates (by arrangement)'
      ],
      hours: { summary: 'Festival: about 10 days each January; farm tours by arrangement', details: ['The 19th festival ran 8–17 January 2026; the next is expected in January 2027', 'Retail olive-oil showrooms in Sakaka are open most mornings and evenings'], note: 'Festival dates are announced each year — check before travelling.' },
      tickets: { required: 'partial', price: 'Festival entry free; farm tours paid', how: ['Entry to the festival grounds is free.', 'Large commercial farms require advance booking — arrange through local tour operators or agri-tourism platforms rather than turning up unannounced.', 'Saudi Arabia Railways often offers seasonal discounts to Al-Jouf during the festival.'], links: [{ label: 'VisitSaudi', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'Al-Jouf Airport (AJF), Sakaka', road: 'Festival at the Prince Abdulilah Cultural Centre in Sakaka; farms mainly in the Busayta area south-west of the city.', transport: 'Train from Riyadh to Al-Jouf station, then taxi; car needed for farms.' },
      bestTime: 'Mid-January (festival); November – March for mild weather', duration: 'Half a day to 1 day',
      dress: 'Warm clothes — northern winters are cold.',
      tips: [
        'Buy freshly pressed winter oil directly from producers at the festival.',
        'Ask about acidity — good extra-virgin oil is below 0.8–1%.',
        'Combine with Za\'abal Castle, the Rajajil standing stones and Dumat al-Jandal.'
      ]
    }
  ]
});
