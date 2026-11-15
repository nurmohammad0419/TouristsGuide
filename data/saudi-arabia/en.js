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
    },
    /* ======================= MORE: MAKKAH PROVINCE ======================= */
    {
      id: 'jabal-thawr', name: 'Jabal Thawr & Cave of Thawr', nativeName: 'جبل ثور وغار ثور',
      region: 'makkah', city: 'Makkah', categories: ['religious', 'nature'], muslimsOnly: true,
      coords: [21.3772, 39.8497], wiki: 'https://en.wikipedia.org/wiki/Jabal_Thawr',
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
      tickets: { required: 'partial', price: 'Free (Hajj requires an official permit)', how: ['Visiting outside Hajj needs no ticket.', 'Hajj packages and permits are booked via Nusuk Hajj or approved agents.'], links: [{ label: 'Nusuk Hajj', url: 'https://hajj.nusuk.sa' }] },
      access: 'Within the Makkah sacred area — Muslims only.',
      gettingThere: { airport: 'King Abdulaziz International (JED), Jeddah', road: 'Mina is about 5 km and Arafat about 20 km east of Masjid al-Haram.', transport: 'Taxi or tour; Mashaaer Metro during Hajj only.' },
      bestTime: 'Outside Hajj: early morning in winter', duration: '2–3 hours (visit)',
      dress: 'Modest clothes; ihram during Hajj.', tips: ['Ziyarat tours from Makkah hotels often include these sites.', 'Bring an umbrella for shade at Jabal al-Rahmah.']
    },
    {
      id: 'masjid-aisha', name: 'Masjid Aisha (Tan\'eem Mosque)', nativeName: 'مسجد عائشة (التنعيم)',
      region: 'makkah', city: 'Makkah', categories: ['religious'], muslimsOnly: true,
      coords: [21.4706, 39.7908], 
      tagline: 'The nearest miqat for entering ihram from within Makkah.',
      overview: ['Masjid Aisha stands at al-Tan\'eem, about 7.5 km north of the Grand Mosque at the boundary of the Haram. It has large ablution areas and changing facilities for pilgrims.'],
      history: ['It marks the place where Aisha, the wife of the Prophet ﷺ, entered ihram for Umrah after Hajj in 632 CE, accompanied by her brother Abdur-Rahman, on the Prophet\'s ﷺ instruction.'],
      religious: ['People already staying in Makkah who wish to perform another Umrah go out to the edge of the Haram — most commonly here — to put on ihram and make the intention (niyyah).'],
      highlights: ['Miqat for Umrah', 'Ablution and changing facilities'],
      hours: { summary: 'Open 24 hours', details: [], note: '' },
      tickets: { required: 'partial', price: 'Free', how: ['No ticket for the mosque; Umrah itself requires a Nusuk permit.'], links: [{ label: 'Nusuk', url: 'https://www.nusuk.sa' }] },
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
      coords: [21.2700, 40.4140], wiki: 'https://en.wikipedia.org/wiki/Shubra_Palace',
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
      region: 'makkah', city: 'Taif', categories: ['heritage'],
      coords: [21.5500, 40.6600], 
      tagline: 'The legendary pre-Islamic poetry market, revived as a festival.',
      overview: ['Souq Okaz was the greatest annual market of ancient Arabia, where tribes traded goods and poets competed. Today a reconstructed site hosts a summer festival with poetry, theatre, crafts and camel caravans.'],
      history: ['The market flourished in the 6th century CE. Famous poems (the Mu\'allaqat) are said to have been honoured here. It was revived as a cultural festival in 2007.'],
      religious: ['Before his prophethood, Muhammad ﷺ is reported to have attended the market and heard the preaching of Quss ibn Sa\'ida, a famous orator.'],
      highlights: ['Poetry performances', 'Traditional crafts', 'Historical re-enactments'],
      hours: { summary: 'Mainly open during the annual festival (summer)', details: [], note: 'Festival dates change each year.' },
      tickets: { required: true, price: 'Festival tickets (varies)', how: ['Check the official festival announcements and buy tickets online when the season opens.'], links: [{ label: 'VisitSaudi – events', url: 'https://www.visitsaudi.com' }] },
      gettingThere: { airport: 'Taif (TIF)', road: 'About 40 km north-east of Taif.', transport: 'Car or festival shuttles.' },
      bestTime: 'Festival season (summer)', duration: 'Half a day', dress: 'Modest clothes.', tips: ['Evenings are the liveliest time.']
    },
    {
      id: 'fakieh-aquarium', name: 'Fakieh Aquarium, Jeddah', nativeName: 'فقيه أكواريوم',
      region: 'makkah', city: 'Jeddah', categories: ['modern', 'coast'],
      coords: [21.6153, 39.1083], 
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

    /* ======================= MORE: MADINAH PROVINCE ======================= */
    {
      id: 'masjid-qiblatain', name: 'Masjid al-Qiblatain', nativeName: 'مسجد القبلتين',
      region: 'madinah', city: 'Madinah', categories: ['religious'],
      coords: [24.4842, 39.5789], wiki: 'https://en.wikipedia.org/wiki/Masjid_al-Qiblatayn',
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
      coords: [24.4672, 39.6158], 
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
      coords: [24.4767, 39.5970], 
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
      coords: [24.4628, 39.6000], wiki: 'https://en.wikipedia.org/wiki/Hejaz_railway',
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
      coords: [26.6450, 37.9180], 
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
      coords: [23.7800, 38.7900], wiki: 'https://en.wikipedia.org/wiki/Battle_of_Badr',
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
      coords: [19.7800, 45.1500], wiki: 'https://en.wikipedia.org/wiki/Qaryat_al-Faw',
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
      coords: [19.4000, 45.6000], wiki: 'https://en.wikipedia.org/wiki/%27Uruq_Bani_Ma%27arid',
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
      coords: [24.4700, 46.1400], 
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
      coords: [24.6500, 46.6200], wiki: 'https://en.wikipedia.org/wiki/Wadi_Hanifa',
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

    /* ======================= MORE: EASTERN PROVINCE ======================= */
    {
      id: 'half-moon-bay', name: 'Half Moon Bay', nativeName: 'شاطئ نصف القمر',
      region: 'eastern', city: 'Khobar', categories: ['coast'],
      coords: [26.0000, 50.0500], 
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
      coords: [25.4930, 49.6960], wiki: 'https://en.wikipedia.org/wiki/Jawatha_Mosque',
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
      coords: [26.2950, 50.2200], wiki: 'https://en.wikipedia.org/wiki/Khobar',
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
      coords: [18.9300, 42.1700], wiki: 'https://en.wikipedia.org/wiki/Tanomah',
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
      coords: [17.2600, 43.1000], wiki: 'https://en.wikipedia.org/wiki/Fayfa',
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
      coords: [17.5470, 44.2280], wiki: 'https://en.wikipedia.org/wiki/Najran',
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
      coords: [17.6000, 44.0000], wiki: 'https://en.wikipedia.org/wiki/Najran',
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
      coords: [28.0000, 36.0000], 
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
      coords: [28.3900, 34.7500],
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
      coords: [28.7800, 34.7900],
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
      coords: [27.6000, 41.4000], 
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
      coords: [27.1170, 42.5100],
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
      coords: [25.8300, 43.4700], wiki: 'https://en.wikipedia.org/wiki/Ar_Rass',
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
      coords: [28.7600, 43.7700],
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
      coords: [29.9710, 40.2140], 
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
      coords: [29.8000, 40.1000], 
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
      coords: [21.4330, 39.7720], wiki: 'https://en.wikipedia.org/wiki/The_Two_Holy_Mosques_Architecture_Exhibition',
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
      coords: [21.5650, 39.1530],
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
      coords: [21.7300, 39.1000], 
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

    /* ======================= ROUND 3: MADINAH PROVINCE ======================= */
    {
      id: 'masjid-al-jumuah', name: 'Masjid al-Jumu\'ah (Friday Mosque)', nativeName: 'مسجد الجمعة',
      region: 'madinah', city: 'Madinah', categories: ['religious', 'heritage'], featured: true,
      coords: [24.4470, 39.6150], wiki: 'https://en.wikipedia.org/wiki/Al_Jum%27ah_Mosque',
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
      coords: [24.4611, 39.5870], 
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
      coords: [24.6700, 39.3700], wiki: 'https://en.wikipedia.org/wiki/Wadi_Al_Baida',
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
      coords: [26.3000, 38.0500],
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
      coords: [27.1500, 37.9800],
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
      coords: [25.0700, 46.6600],
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
      coords: [26.0300, 44.9600], wiki: 'https://en.wikipedia.org/wiki/Al-Ghat',
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
      coords: [27.0600, 49.6200],
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

    /* ======================= ROUND 3: JAZAN / AL-BAHAH ======================= */
    {
      id: 'wadi-lajab', name: 'Wadi Lajab', nativeName: 'وادي لجب',
      region: 'jazan', city: 'Ar Rayth', categories: ['nature'],
      coords: [17.4900, 42.8400],
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
      coords: [19.8500, 41.3000],
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
      coords: [25.5500, 36.8800], wiki: 'https://en.wikipedia.org/wiki/Red_Sea_Global',
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
      coords: [29.7800, 39.8000], wiki: 'https://en.wikipedia.org/wiki/Lake_Dumat_al-Jandal',
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
      coords: [21.2500, 40.4000],
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
      tickets: { required: 'partial', price: 'Free', how: ['No ticket for the mosque; Umrah requires a Nusuk permit.'], links: [{ label: 'Nusuk', url: 'https://www.nusuk.sa' }] },
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
      coords: [24.4660, 39.6072], 
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
      coords: [24.4420, 39.6150],
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
      coords: [26.6200, 37.8600],
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
      coords: [25.1817, 39.9614], wiki: 'https://en.wikipedia.org/wiki/Harrat_Khaybar',
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
      coords: [26.4500, 50.1000],
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
      coords: [17.5300, 44.2000],
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
      coords: [20.1800, 41.3800],
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
      id: 'tayeb-ism', name: 'Tayeb Ism Canyon', nativeName: 'طيب اسم',
      region: 'tabuk', city: 'Maqna', categories: ['nature'],
      coords: [28.5500, 34.8000],
      tagline: 'A narrow granite canyon that opens onto the Gulf of Aqaba.',
      overview: ['Tayeb Ism is a dramatic gorge between 600 m granite walls, with palms, a small stream and a path leading down to the sea. It is one of the most photographed spots in north-west Saudi Arabia.'],
      history: ['Local tradition links the area to the route of Prophet Musa (Moses) through Madyan.'],
      religious: ['Some local traditions connect the valley with Prophet Musa\'s journey to Madyan, though this is not confirmed historically.'],
      highlights: ['Canyon walk', 'Palm-lined stream', 'Sea views'],
      hours: { summary: 'Daytime', details: [], note: 'Part of NEOM; access may be managed.' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'NEOM Bay (NUM) or Tabuk (TUU)', road: 'Coastal road north of Maqna.', transport: 'Car.' },
      bestTime: 'October – April', duration: '2–3 hours', dress: 'Hiking shoes.', tips: ['Combine with Maqna and Madyan Shuaib.']
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
      id: 'buraidah-camel-market', name: 'Buraidah Camel Market', nativeName: 'سوق الإبل ببريدة',
      region: 'qassim', city: 'Buraidah', categories: ['heritage'],
      coords: [26.3700, 43.9300],
      tagline: 'One of the largest camel markets in the Middle East.',
      overview: ['Every morning traders gather to buy and sell hundreds of camels — a lively glimpse of Bedouin heritage and the camel\'s enduring role in Saudi culture.'],
      history: ['Qassim has long been a centre of camel trading on the caravan routes of Najd.'],
      religious: null,
      highlights: ['Morning auctions', 'Camel milk tasting'],
      hours: { summary: 'Early morning (about 6:00 – 10:00 AM)', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['No booking.'], links: [] },
      gettingThere: { airport: 'Prince Naif bin Abdulaziz (ELQ)', road: 'Outskirts of Buraidah.', transport: 'Car.' },
      bestTime: 'Winter mornings', duration: '1 hour', dress: 'Casual modest.', tips: ['Ask before photographing people.']
    },
    {
      id: 'qasr-kaf', name: 'Kaf Palace, Qurayyat', nativeName: 'قصر كاف',
      region: 'jawf', city: 'Qurayyat', categories: ['heritage'],
      coords: [31.4000, 37.3900],
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
      id: 'jouf-olive-festival', name: 'Al-Jouf Olive Farms & Festival', nativeName: 'مهرجان زيتون الجوف',
      region: 'jawf', city: 'Sakaka', categories: ['heritage', 'nature'],
      coords: [29.9700, 40.2000],
      tagline: 'Millions of olive trees and one of the region\'s largest olive festivals.',
      overview: ['Al-Jouf is home to millions of olive trees. Each winter, the Al-Jouf Olive Festival in Sakaka brings together farmers selling olive oil, olives and local products.'],
      history: ['Large-scale olive farming has grown in Al-Jouf since the 2000s thanks to its climate and groundwater.'],
      religious: ['The olive tree is honoured in the Qur\'an as a "blessed tree" (An-Nur 24:35).'],
      highlights: ['Olive oil tasting', 'Farm visits', 'Local products'],
      hours: { summary: 'Festival usually in winter (dates vary)', details: [], note: '' },
      tickets: { required: false, price: 'Free', how: ['Check local announcements for festival dates.'], links: [] },
      gettingThere: { airport: 'Al-Jouf (AJF)', road: 'Sakaka and surrounding farms.', transport: 'Car.' },
      bestTime: 'Winter (festival season)', duration: 'Half a day', dress: 'Casual.', tips: ['Buy oil directly from farmers.']
    }
  ]
});
