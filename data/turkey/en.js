/*
 * Türkiye — English content
 * ---------------------------------------------------------------
 * Edit freely. Each spot is one object inside `spots`.
 * Fields:
 *   id, name, nativeName, region (must match a regions[].id), city,
 *   categories: ids from `categories`, unesco, muslimSite, featured,
 *   coords [lat, lng], tagline, overview[], history[], religious[] (optional),
 *   highlights[], hours{summary, details[], note}, tickets{required, price, how[], links[]},
 *   gettingThere{airport, road, transport}, bestTime, duration, dress, tips[], wiki
 * Photos live in media.js (keyed by spot id).
 *
 * PRICES: Türkiye charges foreign visitors in euros at Ministry of Culture
 * sites and raises them most years. Every figure here is indicative only —
 * the official list is at muze.gov.tr.
 */
TG.registerCountry('turkey', 'en', {
  meta: { lastReviewed: 'November 2026' },

  name: 'Türkiye',
  officialName: 'Republic of Türkiye',
  nativeName: 'Türkiye Cumhuriyeti',
  nativeLang: 'tr',
  flag: '🇹🇷',
  tagline: 'Two continents, ten thousand years of cities, and a coastline that never ends.',
  heroImage: 'assets/photos/cappadocia-goreme/e1.jpg',

  intro: [
    'Türkiye straddles Europe and Asia across the Bosphorus, and almost every empire that mattered in the old world left something behind here: Hittite capitals, Greek theatres, Roman libraries, Byzantine churches, Seljuk caravanserais and Ottoman mosques, often stacked on the same hill.',
    'It is also a country of landscapes — the fairy chimneys of Cappadocia, the white travertine terraces of Pamukkale, the turquoise coast of Lycia, the tea-green valleys of the eastern Black Sea and the volcanic cone of Ararat. With 22 UNESCO World Heritage Sites, Türkiye is one of the most heritage-dense countries on Earth.'
  ],

  stats: [
    { value: 7, label: 'Regions' },
    { value: 81, label: 'Provinces' },
    { value: 22, label: 'UNESCO sites' },
    { value: 783562, label: 'Area (km²)', format: 'compact' },
    { value: 86.1, label: 'Population (million)', decimals: 1 }
  ],

  facts: [
    { icon: '🏛️', label: 'Capital', value: 'Ankara (largest city: Istanbul, about 15.8 million)' },
    { icon: '🗣️', label: 'Official language', value: 'Turkish (English common in tourist areas)' },
    { icon: '🕌', label: 'Religion', value: 'Majority Muslim; a secular constitution' },
    { icon: '💰', label: 'Currency', value: 'Turkish lira (TRY) — check a live rate, it moves fast' },
    { icon: '🕒', label: 'Time zone', value: 'UTC+3 all year, no daylight saving' },
    { icon: '📞', label: 'Calling code', value: '+90' },
    { icon: '🚨', label: 'Emergency', value: '112 (unified number)' },
    { icon: '🔌', label: 'Electricity', value: '230 V, 50 Hz — Type C / F plugs (European two-pin)' },
    { icon: '🚗', label: 'Driving side', value: 'Right' },
    { icon: '🏔️', label: 'Highest point', value: 'Mount Ararat (Ağrı Dağı), 5,137 m' },
    { icon: '🌊', label: 'Seas', value: 'Black Sea, Sea of Marmara, Aegean and Mediterranean' },
    { icon: '🎉', label: 'National days', value: 'Republic Day 29 Oct · Victory Day 30 Aug · 23 Apr, 19 May' },
    { icon: '🏛️', label: 'Government', value: 'Presidential republic (founded 1923)' },
    { icon: '🛂', label: 'Tourist visa', value: 'Visa-free for many nationalities; e-Visa online for others' },
    { icon: '📅', label: 'Weekend', value: 'Saturday and Sunday' },
    { icon: '🌐', label: 'Internet domain', value: '.tr' }
  ],

  overview: [
    { title: 'Geography', icon: '🗺️', text: 'About 97% of Türkiye lies in Asia (Anatolia) and 3% in Europe (Thrace), split by the Bosphorus, the Sea of Marmara and the Dardanelles. The interior is a high plateau ringed by mountains: the Pontic range along the Black Sea, the Taurus along the Mediterranean, and volcanic peaks such as Erciyes and Ararat in the east. Coastlines total roughly 8,000 km.' },
    { title: 'History', icon: '📜', text: 'Göbekli Tepe in the south-east pushed the story of monumental building back to about 9600 BCE, long before farming towns like Çatalhöyük. Afterwards came the Hittites, Phrygians, Lydians, Greeks, Persians, Romans and Byzantines. The Seljuk Turks arrived in the 11th century; the Ottoman Empire took Constantinople in 1453 and ruled for over 600 years. The modern republic was founded by Mustafa Kemal Atatürk in 1923.' },
    { title: 'Faith & culture', icon: '🕌', text: 'Most Turks are Muslim, and mosques welcome respectful visitors outside prayer times. The country is also full of Christian heritage: the Seven Churches of Revelation, the House of the Virgin Mary near Ephesus, Armenian and Syriac monasteries in the east. Alevi, Jewish and Greek Orthodox communities add to the mix. Hospitality, tea (çay) and long meals are the social glue.' },
    { title: 'Food', icon: '🍲', text: 'Turkish cuisine changes completely every few hundred kilometres: fish and mezze on the Aegean, pistachio baklava and spicy kebabs in Gaziantep, anchovies in the Black Sea, stuffed vegetables and pide across Anatolia. Breakfast (kahvaltı) is an institution. Turkish coffee and the tea ritual are both UNESCO-listed traditions.' },
    { title: 'Climate', icon: '☀️', text: 'Four quite different climates: hot dry summers and mild wet winters on the Mediterranean and Aegean coasts; a humid, rainy Black Sea coast that is green all year; a continental interior with hot summers and cold snowy winters; and a severe eastern highland winter where −20 °C is normal. April–June and September–October are the sweet spots almost everywhere.' },
    { title: 'Modern Türkiye', icon: '🏙️', text: 'Türkiye is a G20 economy and one of the world\'s most-visited countries, with more than 60 million foreign arrivals a year. Istanbul Airport is a global hub, high-speed trains link Ankara with Istanbul and Konya, and new museums and restoration projects open constantly. Earthquakes are a real risk: the February 2023 earthquakes badly damaged Hatay, Kahramanmaraş and Adıyaman, and some sites there are still being rebuilt.' }
  ],

  unesco: [
    { name: 'Göreme National Park and the Rock Sites of Cappadocia', year: 1985, spot: 'cappadocia-goreme' },
    { name: 'Great Mosque and Hospital of Divriği', year: 1985, spot: 'divrigi' },
    { name: 'Historic Areas of Istanbul', year: 1985, spot: 'hagia-sophia' },
    { name: 'Hattusha: the Hittite Capital', year: 1986, spot: 'hattusa' },
    { name: 'Nemrut Dağ', year: 1987, spot: 'mount-nemrut' },
    { name: 'Hierapolis-Pamukkale', year: 1988, spot: 'pamukkale' },
    { name: 'Xanthos-Letoon', year: 1988, spot: 'xanthos-letoon' },
    { name: 'City of Safranbolu', year: 1994, spot: 'safranbolu' },
    { name: 'Archaeological Site of Troy', year: 1998, spot: 'troy' },
    { name: 'Selimiye Mosque and its Social Complex', year: 2011, spot: 'selimiye-mosque' },
    { name: 'Neolithic Site of Çatalhöyük', year: 2012, spot: 'catalhoyuk' },
    { name: 'Bursa and Cumalıkızık: the Birth of the Ottoman Empire', year: 2014, spot: 'bursa-cumalikizik' },
    { name: 'Pergamon and its Multi-Layered Cultural Landscape', year: 2014, spot: 'pergamon' },
    { name: 'Diyarbakır Fortress and Hevsel Gardens Cultural Landscape', year: 2015, spot: 'diyarbakir-fortress' },
    { name: 'Ephesus', year: 2015, spot: 'ephesus' },
    { name: 'Archaeological Site of Ani', year: 2016, spot: 'ani' },
    { name: 'Aphrodisias', year: 2017, spot: 'aphrodisias' },
    { name: 'Göbekli Tepe', year: 2018, spot: 'gobekli-tepe' },
    { name: 'Arslantepe Mound', year: 2021, spot: 'arslantepe' },
    { name: 'Gordion', year: 2023, spot: 'gordion' },
    { name: 'Wooden Hypostyle Mosques of Medieval Anatolia', year: 2023, spot: 'esrefoglu-mosque' },
    { name: 'Sardis and the Lydian Tumuli of Bin Tepe', year: 2025, spot: 'sardis' }
  ],

  categories: {
    religious: { label: 'Religious', icon: '🕌' },
    heritage: { label: 'Heritage & History', icon: '🏛️' },
    archaeology: { label: 'Archaeology', icon: '🏺' },
    nature: { label: 'Nature & Landscape', icon: '🏔️' },
    coast: { label: 'Sea & Islands', icon: '🌊' },
    modern: { label: 'Modern & Culture', icon: '🏙️' }
  },

  regions: [
    { id: 'marmara', name: 'Marmara Region', nativeName: 'Marmara Bölgesi', capital: 'Istanbul', area: 67000, population: 26.0,
      description: 'The gateway between Europe and Asia: Istanbul\'s skyline of domes and minarets, the first Ottoman capitals at Bursa and Edirne, and the battlefields and ruins of the Dardanelles.',
      governorates: ['Istanbul', 'Bursa', 'Edirne', 'Çanakkale', 'Balıkesir', 'Kocaeli', 'Tekirdağ', 'Sakarya', 'Kırklareli', 'Yalova', 'Bilecik'] },
    { id: 'aegean', name: 'Aegean Region', nativeName: 'Ege Bölgesi', capital: 'İzmir', area: 90000, population: 10.7,
      description: 'Classical antiquity on a turquoise coast: Ephesus, Pergamon and Aphrodisias inland, olive groves and whitewashed harbour towns along the shore.',
      governorates: ['İzmir', 'Aydın', 'Muğla', 'Denizli', 'Manisa', 'Afyonkarahisar', 'Kütahya', 'Uşak'] },
    { id: 'mediterranean', name: 'Mediterranean Region', nativeName: 'Akdeniz Bölgesi', capital: 'Antalya', area: 120000, population: 10.9,
      description: 'The Turkish Riviera: Lycian rock tombs and sunken cities, Roman theatres still used for concerts, pine-covered Taurus mountains and the long resort coast around Antalya.',
      governorates: ['Antalya', 'Mersin', 'Adana', 'Hatay', 'Isparta', 'Burdur', 'Kahramanmaraş', 'Osmaniye'] },
    { id: 'central-anatolia', name: 'Central Anatolia Region', nativeName: 'İç Anadolu Bölgesi', capital: 'Ankara', area: 151000, population: 13.5,
      description: 'The high plateau at the heart of the country: the capital Ankara, the whirling dervishes of Konya, Hittite Hattusha and the volcanic dreamscape of Cappadocia.',
      governorates: ['Ankara', 'Konya', 'Kayseri', 'Eskişehir', 'Sivas', 'Nevşehir', 'Aksaray', 'Niğde', 'Kırşehir', 'Kırıkkale', 'Çankırı', 'Yozgat', 'Karaman', 'Çorum'] },
    { id: 'black-sea', name: 'Black Sea Region', nativeName: 'Karadeniz Bölgesi', capital: 'Samsun', area: 141000, population: 8.0,
      description: 'Rain-green mountains, tea and hazelnut terraces, wooden highland houses, and the Sumela Monastery clinging to a cliff above a forest.',
      governorates: ['Trabzon', 'Samsun', 'Rize', 'Ordu', 'Giresun', 'Artvin', 'Amasya', 'Tokat', 'Kastamonu', 'Sinop', 'Bolu', 'Düzce', 'Zonguldak', 'Karabük', 'Bartın', 'Gümüşhane', 'Bayburt'] },
    { id: 'eastern-anatolia', name: 'Eastern Anatolia Region', nativeName: 'Doğu Anadolu Bölgesi', capital: 'Erzurum', area: 164000, population: 5.8,
      description: 'The highest, wildest part of the country: Mount Ararat, the blue expanse of Lake Van, the ghost city of Ani on the Armenian border and deep snow every winter.',
      governorates: ['Erzurum', 'Van', 'Malatya', 'Elazığ', 'Ağrı', 'Kars', 'Erzincan', 'Bitlis', 'Muş', 'Bingöl', 'Tunceli', 'Hakkari', 'Iğdır', 'Ardahan'] },
    { id: 'southeastern-anatolia', name: 'Southeastern Anatolia Region', nativeName: 'Güneydoğu Anadolu Bölgesi', capital: 'Gaziantep', area: 75000, population: 9.3,
      description: 'Where civilisation began: Göbekli Tepe, the prophets\' city of Şanlıurfa, the stone terraces of Mardin, Roman mosaics at Zeugma and the colossal heads on Mount Nemrut.',
      governorates: ['Gaziantep', 'Şanlıurfa', 'Diyarbakır', 'Mardin', 'Adıyaman', 'Batman', 'Siirt', 'Şırnak', 'Kilis'] }
  ],

  travel: [
    { icon: '🛂', title: 'Visa', text: 'Citizens of many countries — including the UK, the USA, most of the EU, the Gulf states and Malaysia — can enter visa-free for short stays. Others apply online for an e-Visa in minutes. Visa on arrival has been phased out for e-Visa nationalities, so apply before you fly. Your passport should normally be valid for at least 60 days beyond your stay. Rules change often; check the official portal.', link: { label: 'Official e-Visa portal', url: 'https://www.evisa.gov.tr' } },
    { icon: '🎟️', title: 'Tickets & the Museum Pass', text: 'State museums and ancient sites charge foreign visitors in euros, and prices rise most years. If you plan several sites, compare the Museum Pass Türkiye (country-wide), Museum Pass Istanbul, Aegean or Cappadocia passes. Note that Hagia Sophia is not covered by the Istanbul pass.', link: { label: 'Museums & tickets (official)', url: 'https://muze.gov.tr' } },
    { icon: '✈️', title: 'Getting in', text: 'Main gateways: Istanbul (IST), Istanbul Sabiha Gökçen (SAW), Antalya (AYT), Ankara Esenboğa (ESB), İzmir (ADB), Dalaman (DLM), Bodrum (BJV), Trabzon (TZX) and Adana (ADA). Turkish Airlines, AJet and Pegasus fly a dense domestic network, often cheaper than driving.', link: { label: 'Turkish Airlines', url: 'https://www.turkishairlines.com' } },
    { icon: '🚄', title: 'Getting around', text: 'High-speed trains (YHT) link Istanbul – Eskişehir – Ankara – Konya and Ankara – Sivas. Intercity coaches reach almost every town and are comfortable and cheap. In cities use the metro and a contactless transit card (Istanbulkart in Istanbul). A hire car is the best way to see Cappadocia, the Lycian coast and the east.', link: { label: 'Turkish State Railways', url: 'https://ebilet.tcddtasimacilik.gov.tr' } },
    { icon: '🕌', title: 'Mosque etiquette', text: 'Working mosques are open to visitors of all faiths outside the five prayer times and Friday noon prayers. Remove your shoes, dress modestly, and women cover their hair — scarves are usually lent free at the door. Do not walk in front of people praying or photograph them without asking.' },
    { icon: '💳', title: 'Money', text: 'Cards work nearly everywhere and contactless is standard. Keep some lira cash for markets, village cafés, taxis and small museums. Inflation has been high, so prices quoted in guidebooks date quickly — exchange a little at a time and avoid airport exchange desks.' },
    { icon: '⚠️', title: 'Safety & earthquakes', text: 'Türkiye is generally safe for travellers; the usual big-city precautions apply, and taxi overcharging in Istanbul is the most common complaint. The country sits on major fault lines — learn the "drop, cover, hold on" drill and note your hotel\'s exits. The provinces hit by the February 2023 earthquakes are open again but parts of Hatay and Adıyaman are still rebuilding.' },
    { icon: '🌐', title: 'Official tourism site', text: 'GoTürkiye, run by the Ministry of Culture and Tourism, publishes events, routes and regional guides.', link: { label: 'GoTürkiye', url: 'https://goturkiye.com' } }
  ],

  spots: [
    /* ======================= MARMARA — ISTANBUL ======================= */
    {
      id: 'hagia-sophia', name: 'Hagia Sophia', nativeName: 'Ayasofya-i Kebir Camii',
      region: 'marmara', city: 'Istanbul', categories: ['religious', 'heritage'], unesco: true, muslimSite: true, featured: true,
      coords: [41.0086, 28.9802], wiki: 'https://en.wikipedia.org/wiki/Hagia_Sophia',
      tagline: 'Cathedral, mosque, museum, mosque again — the building that defined a millennium.',
      overview: [
        'Hagia Sophia (Holy Wisdom) is the single most important building in Istanbul and one of the great achievements of world architecture. Its vast dome, 55 m above the floor and ringed by forty windows, seems to float on light.',
        'The interior mixes Byzantine mosaics of Christ, the Virgin and emperors with giant Ottoman calligraphic roundels naming God, the Prophet ﷺ and the first caliphs — a layering found nowhere else.'
      ],
      history: [
        'The present building was raised in just five years, 532–537 CE, for Emperor Justinian I by the mathematicians Anthemius of Tralles and Isidore of Miletus, replacing two earlier churches destroyed by riots.',
        'For nearly 900 years it was the cathedral of Constantinople and the heart of Orthodox Christianity. After the Ottoman conquest in 1453, Mehmed II converted it into a mosque; minarets, the mihrab and the calligraphic panels were added over the following centuries.',
        'Atatürk\'s government turned it into a museum in 1935. In July 2020 it was reconverted into a working mosque, and since January 2024 foreign visitors pay a fee to follow a separate upper-gallery route.'
      ],
      religious: [
        'It functions today as a mosque, with the five daily prayers and Friday congregational prayer held on the ground floor.',
        'For Orthodox Christians it remains deeply symbolic as the former seat of the Ecumenical Patriarchate and the mother church of Byzantium.'
      ],
      highlights: ['The great dome and its ring of windows', 'Deesis mosaic in the upper gallery', 'Mosaics of Empress Zoe and Comnenus', 'Marble Door and Viking graffiti', 'Eight calligraphic roundels', 'The weeping column'],
      hours: { summary: 'Tourist route open daily; closed to visitors during prayer times', details: ['Visiting hours are usually mid-morning to evening, shorter in winter', 'Friday midday is reserved for prayer'], note: 'Hours shift with the prayer timetable and in Ramadan — check before you go.' },
      tickets: { required: true, price: 'About €25 for foreign visitors (indicative)', how: ['Foreign visitors buy a ticket for the upper-gallery route and enter from the dedicated tourist entrance on the east side, near Topkapı Palace.', 'Entering the ground floor to pray is free, through the separate prayer entrance.', 'The Museum Pass Istanbul does NOT cover Hagia Sophia.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Istanbul Airport (IST) or Sabiha Gökçen (SAW)', road: 'In Sultanahmet, central Istanbul; the area is largely pedestrian.', transport: 'T1 tram to Sultanahmet station, then a two-minute walk. Marmaray to Sirkeci is also close.' },
      bestTime: 'April – June and September – October; arrive at opening to avoid queues', duration: '1–1.5 hours',
      dress: 'Shoulders and knees covered. Women cover their hair; scarves are available at the door. Shoes are removed on the prayer floor.',
      tips: ['Buy online in advance — the on-site queue can be very long.', 'Visit Hagia Sophia first thing, then the Blue Mosque across the square.', 'The Hagia Sophia History and Experience Museum nearby is a separate ticket and separate building.']
    },
    {
      id: 'blue-mosque', name: 'Blue Mosque (Sultan Ahmed Mosque)', nativeName: 'Sultanahmet Camii',
      region: 'marmara', city: 'Istanbul', categories: ['religious', 'heritage'], unesco: true, muslimSite: true, featured: true,
      coords: [41.0054, 28.9768], wiki: 'https://en.wikipedia.org/wiki/Blue_Mosque,_Istanbul',
      tagline: 'Six minarets, a cascade of domes and 20,000 İznik tiles.',
      overview: [
        'Facing Hagia Sophia across a garden square, the Sultan Ahmed Mosque is the classic image of Ottoman Istanbul: a pyramid of half-domes rising to a 23.5 m central dome, framed by six slender minarets.',
        'Its nickname comes from the blue-and-white İznik tiles — more than 20,000 of them — that line the galleries, along with 200 stained-glass windows.'
      ],
      history: [
        'Built between 1609 and 1617 for the young Sultan Ahmed I by the architect Sedefkâr Mehmed Ağa, a pupil of Mimar Sinan, on the site of the Byzantine Great Palace.',
        'Its six minarets caused controversy, since only the Grand Mosque in Makkah had six at the time; the Sultan is said to have paid for a seventh minaret in Makkah to settle the matter.',
        'A long structural restoration finished in 2023, and the interior is once again fully open.'
      ],
      religious: ['It is a working mosque, one of Istanbul\'s busiest for Friday prayers, and visitors are welcome outside prayer times.'],
      highlights: ['İznik tilework in the upper galleries', 'The painted central dome', 'Marble mihrab and mother-of-pearl minbar', 'The courtyard and ablution fountain', 'Hippodrome obelisks on the square outside'],
      hours: { summary: 'Open daily to visitors outside the five prayer times', details: ['Closed to tourists roughly 90 minutes around each prayer and for Friday midday prayers', 'Visitor entrance is on the south side, separate from the worshippers\' entrance'], note: 'Prayer times move through the year, so visiting windows change daily.' },
      tickets: { required: false, price: 'Free', how: ['No ticket. Donations are voluntary and never demanded.', 'Ignore anyone outside offering to sell you "entry tickets" or a compulsory guide.'], links: [] },
      gettingThere: { airport: 'Istanbul Airport (IST) or Sabiha Gökçen (SAW)', road: 'Sultanahmet Square, directly opposite Hagia Sophia.', transport: 'T1 tram to Sultanahmet.' },
      bestTime: 'Early morning or just before sunset, when the tiles glow', duration: '45 minutes',
      dress: 'Modest clothing; women cover their hair. Free scarves and shoe bags at the entrance.',
      tips: ['Enter by the designated tourist door, not the prayer door.', 'The square between the two mosques is the best photo spot at blue hour.', 'Combine with the Hippodrome, the Obelisk of Theodosius and the Serpent Column, all steps away.']
    },
    {
      id: 'topkapi-palace', name: 'Topkapı Palace', nativeName: 'Topkapı Sarayı',
      region: 'marmara', city: 'Istanbul', categories: ['heritage'], unesco: true, featured: true,
      coords: [41.0115, 28.9834], wiki: 'https://en.wikipedia.org/wiki/Topkap%C4%B1_Palace',
      tagline: 'Four courtyards from which an empire was run for four centuries.',
      overview: [
        'Topkapı is not one building but a walled city of pavilions, kitchens, treasuries and gardens on the headland where the Bosphorus, the Golden Horn and the Sea of Marmara meet.',
        'Highlights include the Imperial Treasury with the Topkapı Dagger and the 86-carat Spoonmaker\'s Diamond, the Sacred Relics rooms, and the Harem — the private quarters of the sultan\'s household.'
      ],
      history: [
        'Mehmed II began the palace in the 1460s, soon after the conquest of Constantinople. It was the main residence and seat of government of the Ottoman sultans until the 1850s, when the court moved to Dolmabahçe.',
        'It became a museum in 1924, one of the first acts of the young republic.'
      ],
      religious: ['The Chamber of the Sacred Relics holds items attributed to the Prophet Muhammad ﷺ, including a mantle, a seal and hairs of his beard, together with swords of the early caliphs. The Qur\'an is recited continuously in the room, a practice kept up since the 16th century.'],
      highlights: ['Imperial Treasury', 'Sacred Relics chambers', 'The Harem (separate ticket)', 'Baghdad and Revan Kiosks with Bosphorus views', 'Palace kitchens and the Chinese porcelain collection', 'Hagia Irene church in the first courtyard'],
      hours: { summary: 'Open daily except Tuesday (check — closing days change)', details: ['Last entry is usually about an hour before closing', 'The Harem closes earlier than the main palace'], note: 'Allow extra time: security screening at the gate can be slow.' },
      tickets: { required: true, price: 'Palace about €55; the Harem and Hagia Irene are extra or bundled (indicative)', how: ['Buy online at the official museum site to skip the ticket queue.', 'The Harem needs its own ticket — buy it at the same time, not inside.', 'Museum Pass Istanbul usually covers the palace; confirm whether your pass includes the Harem.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Istanbul Airport (IST) or Sabiha Gökçen (SAW)', road: 'Behind Hagia Sophia, entered through the Imperial Gate.', transport: 'T1 tram to Gülhane or Sultanahmet.' },
      bestTime: 'Opening time on a weekday; it is one of the busiest sites in Türkiye', duration: '3 hours with the Harem',
      dress: 'Casual, but modest clothing is needed for the Sacred Relics rooms.',
      tips: ['Do the Harem first, before the tour groups arrive.', 'Photography is not allowed in the Treasury or the Relics rooms.', 'Gülhane Park, just below, is a free and lovely place to rest afterwards.']
    },
    {
      id: 'basilica-cistern', name: 'Basilica Cistern', nativeName: 'Yerebatan Sarnıcı',
      region: 'marmara', city: 'Istanbul', categories: ['heritage', 'archaeology'], unesco: true,
      coords: [41.0084, 28.9779], wiki: 'https://en.wikipedia.org/wiki/Basilica_Cistern',
      tagline: 'An underground forest of 336 columns, lit and reflected in still water.',
      overview: [
        'Built to store water for the Great Palace, the Basilica Cistern is a cathedral-sized chamber 138 m long, its brick vaults carried on 336 marble columns recycled from older temples.',
        'Two of the column bases are carved Medusa heads, one upside down and one on its side — nobody knows why.'
      ],
      history: [
        'Constructed in 532 CE under Justinian I, fed by aqueducts from the Belgrade Forest 19 km away, and large enough to hold about 80,000 cubic metres of water.',
        'It was forgotten after the Ottoman conquest and rediscovered in the 16th century when a scholar found locals drawing water — and fish — through holes in their basement floors. A major restoration added new lighting and art installations before it reopened in 2022.'
      ],
      religious: null,
      highlights: ['The two Medusa heads', 'The "Hen\'s Eye" weeping column', 'Contemporary sculpture and light installations', 'Raised walkways over the water'],
      hours: { summary: 'Open daily, with separate day and night sessions', details: ['Night sessions cost more and are quieter', 'Last entry about 30 minutes before closing'], note: 'Timed entry slots are used at busy periods.' },
      tickets: { required: true, price: 'Paid entry; night tickets cost more (check current rate)', how: ['Buy online or at the door; it is run by Istanbul municipality, not the Ministry, so most museum passes do not cover it.'], links: [{ label: 'Official site', url: 'https://yerebatan.com' }] },
      gettingThere: { airport: 'Istanbul Airport (IST) or Sabiha Gökçen (SAW)', road: 'A minute\'s walk from Hagia Sophia, on Yerebatan Caddesi.', transport: 'T1 tram to Sultanahmet.' },
      bestTime: 'Any time — it is cool underground even in August', duration: '45 minutes',
      dress: 'Comfortable shoes; the walkways can be damp and slippery.',
      tips: ['It is cold and humid inside — bring a light layer in winter.', 'A tripod is not allowed; the low light suits a fast lens or steady hands.', 'Combine with Hagia Sophia and the Blue Mosque in one morning.']
    },
    {
      id: 'suleymaniye-mosque', name: 'Süleymaniye Mosque', nativeName: 'Süleymaniye Camii',
      region: 'marmara', city: 'Istanbul', categories: ['religious', 'heritage'], unesco: true, muslimSite: true,
      coords: [41.0165, 28.9639], wiki: 'https://en.wikipedia.org/wiki/S%C3%BCleymaniye_Mosque',
      tagline: 'Mimar Sinan\'s great Istanbul mosque, with the city\'s finest terrace view.',
      overview: [
        'Crowning the third hill of the old city, the Süleymaniye is calmer and, many argue, more beautiful than the Blue Mosque. Its proportions are famously serene, and the acoustics were engineered with clay jars set into the dome.',
        'The complex (külliye) around it included madrasas, a hospital, a soup kitchen, a caravanserai and baths — a whole social welfare system in stone. The terrace behind it looks out over the Golden Horn.'
      ],
      history: [
        'Built 1550–1557 for Sultan Süleyman the Magnificent by Mimar Sinan, the chief imperial architect, at the height of Ottoman power.',
        'Sinan called it his "journeyman work" (he reserved "masterpiece" for the Selimiye in Edirne). The tombs of Süleyman and his wife Hürrem Sultan (Roxelana) stand in the garden; Sinan\'s own modest tomb is just outside the wall.'
      ],
      religious: ['A working mosque with a large congregation. The tombs of Süleyman and Hürrem are open to visitors separately.'],
      highlights: ['The main dome and its acoustics', 'Tombs of Süleyman and Hürrem Sultan', 'Mimar Sinan\'s tomb', 'Golden Horn terrace view', 'The surrounding külliye and old bean-stew restaurants'],
      hours: { summary: 'Open daily outside prayer times', details: ['Closed to visitors for about 30–90 minutes around each prayer', 'Friday midday is reserved for prayer'], note: 'The tombs keep shorter hours than the mosque.' },
      tickets: { required: false, price: 'Free', how: ['No ticket for the mosque or the tombs.'], links: [] },
      gettingThere: { airport: 'Istanbul Airport (IST)', road: 'On the hill above the Grand Bazaar and Istanbul University.', transport: 'T1 tram to Beyazıt or Eminönü, then a 10-minute uphill walk.' },
      bestTime: 'Late afternoon for the light on the Golden Horn', duration: '1 hour',
      dress: 'Modest clothing; women cover their hair. Scarves lent at the door.',
      tips: ['Walk round to the terrace at the back — it is free and the view rivals any paid one.', 'The kuru fasulye (white bean stew) restaurants beside the mosque are an Istanbul institution.', 'Much quieter than Sultanahmet, especially mid-morning.']
    },
    {
      id: 'grand-bazaar', name: 'Grand Bazaar', nativeName: 'Kapalıçarşı',
      region: 'marmara', city: 'Istanbul', categories: ['heritage', 'modern'], unesco: true,
      coords: [41.0106, 28.9681], wiki: 'https://en.wikipedia.org/wiki/Grand_Bazaar,_Istanbul',
      tagline: 'Sixty-one covered streets and about 4,000 shops under painted vaults.',
      overview: [
        'One of the oldest and largest covered markets in the world, the Grand Bazaar is a walled labyrinth of jewellers, carpet dealers, ceramic stalls, leather shops and tiny tea runners carrying trays overhead.',
        'The oldest part, the Cevahir Bedesten, still deals in antiques and silver. Beyond the gates the market spills downhill through hans and side streets all the way to the Spice Bazaar.'
      ],
      history: [
        'Begun in 1455 under Mehmed II as a small bedesten, it grew over centuries into a vast covered quarter and survived fires and earthquakes, being rebuilt each time.',
        'It was the commercial heart of the Ottoman Empire and, for a long period, effectively its stock exchange.'
      ],
      religious: null,
      highlights: ['Cevahir (Inner) Bedesten antiques', 'Jewellers\' Street (Kalpakçılar Caddesi)', 'Zincirli Han and other courtyards', 'Hand-painted Kütahya ceramics', 'Turkish delight and coffee shops'],
      hours: { summary: 'Monday – Saturday, roughly 09:00–19:00; closed Sunday', details: ['Closed on religious holidays (Eid)', 'Quietest first thing in the morning'], note: 'Opening times vary by shop.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Istanbul Airport (IST)', road: 'Between Beyazıt and Nuruosmaniye in the old city; 22 gates.', transport: 'T1 tram to Beyazıt-Kapalıçarşı or Çemberlitaş.' },
      bestTime: 'Weekday mornings', duration: '2 hours',
      dress: 'Anything comfortable; you will walk a lot.',
      tips: ['Bargaining is expected — a friendly counter-offer of about half is a normal opening.', 'Prices in the lanes outside the bazaar are usually lower for the same goods.', 'Keep valuables secure in the crowds, and note a gate number so you can find your way out.']
    },
    {
      id: 'spice-bazaar', name: 'Spice Bazaar & Eminönü', nativeName: 'Mısır Çarşısı',
      region: 'marmara', city: 'Istanbul', categories: ['heritage', 'modern'],
      coords: [41.0165, 28.9707], wiki: 'https://en.wikipedia.org/wiki/Spice_Bazaar',
      tagline: 'Saffron, pistachios and Turkish delight beside the ferry piers.',
      overview: [
        'The L-shaped Spice Bazaar is smaller and more aromatic than the Grand Bazaar: mounds of spices, dried fruit, nuts, teas, lokum and honeycomb under a vaulted ceiling.',
        'It sits in the Eminönü waterfront quarter beside the New Mosque, the Galata Bridge fishermen and the ferry terminals, with the city\'s best fish sandwich stalls just outside.'
      ],
      history: [
        'Completed in 1664 as part of the New Mosque (Yeni Cami) complex, funded by duties on goods from Egypt — hence its Turkish name, the "Egyptian Bazaar".',
        'For centuries it was the city\'s main market for spices, medicines and herbal remedies.'
      ],
      religious: null,
      highlights: ['Spices, saffron and herbal teas', 'Turkish delight and baklava shops', 'Hidden wholesale lanes behind the bazaar', 'New Mosque (Yeni Cami) next door', 'Galata Bridge and fish sandwiches'],
      hours: { summary: 'Daily, roughly 08:00–19:30 (shorter on Sunday)', details: [], note: 'The surrounding streets are busiest on weekday afternoons.' },
      tickets: { required: false, price: 'Free to enter', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Istanbul Airport (IST)', road: 'Eminönü waterfront, at the foot of the Galata Bridge.', transport: 'T1 tram to Eminönü; ferries from Kadıköy and Üsküdar dock here.' },
      bestTime: 'Morning, before the cruise crowds', duration: '1–2 hours',
      dress: 'Casual.',
      tips: ['Taste before you buy — good vendors always offer.', 'The streets behind the bazaar (Tahmis and Hasırcılar) are cheaper and more local.', 'Catch a Bosphorus ferry from the piers right outside.']
    },
    {
      id: 'dolmabahce-palace', name: 'Dolmabahçe Palace', nativeName: 'Dolmabahçe Sarayı',
      region: 'marmara', city: 'Istanbul', categories: ['heritage'], featured: true,
      coords: [41.0391, 29.0001], wiki: 'https://en.wikipedia.org/wiki/Dolmabah%C3%A7e_Palace',
      tagline: 'European opulence on the Bosphorus, and the room where Atatürk died.',
      overview: [
        'Dolmabahçe is the opposite of Topkapı: one enormous symmetrical building, 285 rooms and 46 halls, stretching 600 m along the Bosphorus behind a white marble gate.',
        'The Ceremonial Hall has a 36 m dome and a 4.5-tonne Bohemian crystal chandelier, a gift from Queen Victoria. The Crystal Staircase has banisters of Baccarat crystal.'
      ],
      history: [
        'Built 1843–1856 for Sultan Abdülmecid I, who wanted a palace to match those of Europe, at a cost that helped bankrupt the treasury.',
        'It served as the main imperial residence until 1922. Mustafa Kemal Atatürk used it as his Istanbul base and died here on 10 November 1938 at 09:05 — every clock in the palace is still set to that time.'
      ],
      religious: null,
      highlights: ['Ceremonial Hall and the great chandelier', 'Crystal Staircase', 'Atatürk\'s bedroom', 'The Harem apartments', 'Clock Tower and Bosphorus gardens', 'National Palaces Painting Museum next door'],
      hours: { summary: 'Open daily except Monday', details: ['Visits to the main building are by guided route, in timed groups', 'Last admission is well before closing'], note: 'Run by the National Palaces Administration, not the Ministry of Culture.' },
      tickets: { required: true, price: 'Paid; separate or combined tickets for the Selamlık, Harem and museums', how: ['Buy online in advance — daily visitor numbers are capped and it sells out.', 'Ministry museum passes do not cover National Palaces sites.'], links: [{ label: 'National Palaces (official)', url: 'https://www.millisaraylar.gov.tr' }] },
      gettingThere: { airport: 'Istanbul Airport (IST)', road: 'On the European shore between Kabataş and Beşiktaş.', transport: 'T1 tram or funicular to Kabataş, then a 5-minute walk; many Bosphorus ferries stop at Beşiktaş.' },
      bestTime: 'Weekday mornings', duration: '2 hours',
      dress: 'Casual; shoe covers are provided and bags may be checked.',
      tips: ['Photography inside is restricted — check the current rule at the gate.', 'The gardens and the clock tower can be seen for a smaller garden-only ticket.', 'Walk on to Beşiktaş afterwards for lunch.']
    },
    {
      id: 'galata-tower', name: 'Galata Tower & Karaköy', nativeName: 'Galata Kulesi',
      region: 'marmara', city: 'Istanbul', categories: ['heritage', 'modern'],
      coords: [41.0256, 28.9744], wiki: 'https://en.wikipedia.org/wiki/Galata_Tower',
      tagline: 'A Genoese watchtower with a 360° view over the Golden Horn.',
      overview: [
        'The cone-topped Galata Tower rises 67 m above the steep streets of Karaköy and Galata. Its top-floor balcony gives the classic panorama of the old city, the Bosphorus and the Asian shore.',
        'The quarter below is full of coffee roasters, music shops, design stores and the Galata Mevlevi Lodge where dervish ceremonies are still performed.'
      ],
      history: [
        'Built in 1348 by the Genoese, who ran a self-governing colony here, as "Christea Turris" — the Tower of Christ — the tallest building in the city at the time.',
        'The Ottomans used it as a fire watchtower. Legend says the 17th-century aviator Hezârfen Ahmed Çelebi glided from the tower across the Bosphorus on artificial wings.'
      ],
      religious: null,
      highlights: ['360° viewing balcony', 'Museum floors inside the tower', 'Galata Mevlevi Lodge Museum', 'Karaköy cafés and the steep Kamondo Steps', 'Tünel — the world\'s second-oldest underground railway (1875)'],
      hours: { summary: 'Open daily, morning until evening', details: ['Sunset is the busiest hour by far'], note: 'Entry is capped, so queues form even with a ticket.' },
      tickets: { required: true, price: 'Paid entry (foreign-visitor rate)', how: ['Buy at the kiosk or online. Museum Pass Istanbul may cover it — check the current list.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Istanbul Airport (IST)', road: 'Galata, on the hill above Karaköy.', transport: 'T1 tram to Karaköy then the Tünel funicular, or M2 metro to Şişhane.' },
      bestTime: 'An hour before sunset — but expect a queue', duration: '1 hour',
      dress: 'Casual; the streets are steep and cobbled.',
      tips: ['The view from the Büyük Valide Han rooftop or a Karaköy rooftop bar is cheaper and often emptier.', 'Walk up İstiklal Caddesi to Taksim afterwards.', 'The tower is small inside — visitor numbers on the balcony are limited.']
    },
    {
      id: 'bosphorus-cruise', name: 'The Bosphorus', nativeName: 'İstanbul Boğazı',
      region: 'marmara', city: 'Istanbul', categories: ['coast', 'modern'], featured: true,
      coords: [41.0869, 29.0565], wiki: 'https://en.wikipedia.org/wiki/Bosphorus',
      tagline: 'The strait between two continents, best seen from the deck of a public ferry.',
      overview: [
        'The 31 km Bosphorus links the Black Sea to the Sea of Marmara and divides Europe from Asia. Along its banks are Ottoman palaces, wooden mansions (yalı), fortresses, fishing villages and three suspension bridges.',
        'The cheapest and best way to see it is the Şehir Hatları public ferry from Eminönü up to Anadolu Kavağı, a full-day round trip with a long lunch stop at the top.'
      ],
      history: [
        'Control of the strait has shaped history for three thousand years: Jason and the Argonauts in myth, Darius\' bridge of boats, the Byzantine chain across the Golden Horn, and Mehmed II\'s Rumeli Fortress built in 1452 to cut Constantinople off before the conquest.',
        'The 1936 Montreux Convention still governs passage through the strait.'
      ],
      religious: null,
      highlights: ['Rumeli Fortress (Rumeli Hisarı)', 'Ortaköy Mosque under the 15 July Martyrs Bridge', 'Wooden yalı mansions at Kanlıca and Yeniköy', 'Anadolu Kavağı and Yoros Castle', 'Küçüksu and Beylerbeyi palaces', 'Sunset from the deck'],
      hours: { summary: 'Public ferries run all day; the long Bosphorus cruise usually departs mid-morning', details: ['Short round trips (about 2 hours) leave from Eminönü and Kabataş through the day', 'Timetables are reduced in winter'], note: 'Check the Şehir Hatları timetable the day before.' },
      tickets: { required: 'partial', price: 'Public ferry: a few euros. Private cruises cost much more.', how: ['Use an Istanbulkart for commuter ferries — by far the cheapest option.', 'The full Bosphorus Cruise (Uzun Boğaz Turu) is a separate ticket bought at the pier or online.'], links: [{ label: 'Şehir Hatları ferries', url: 'https://www.sehirhatlari.istanbul' }] },
      gettingThere: { airport: 'Istanbul Airport (IST)', road: 'Piers at Eminönü, Karaköy, Beşiktaş, Kabataş, Üsküdar and Kadıköy.', transport: 'T1 tram, Marmaray or metro to any of the ferry piers.' },
      bestTime: 'Late afternoon in spring or autumn', duration: 'Short tour 2 hours; full-day trip 6 hours',
      dress: 'Bring a windproof layer — it is cold on deck even in summer.',
      tips: ['Sit on the right going north for the European shore, then swap on the way back.', 'A regular commuter ferry from Eminönü to Üsküdar costs almost nothing and gives much the same view.', 'Lunch on fried fish at Anadolu Kavağı, then climb to Yoros Castle.']
    },
    {
      id: 'eyup-sultan', name: 'Eyüp Sultan Mosque', nativeName: 'Eyüp Sultan Camii',
      region: 'marmara', city: 'Istanbul', categories: ['religious', 'heritage'], muslimSite: true,
      coords: [41.0479, 28.9337], wiki: 'https://en.wikipedia.org/wiki/Eyüp_Sultan_Mosque',
      tagline: 'The tomb of a Companion of the Prophet ﷺ, and Istanbul\'s holiest Muslim site.',
      overview: [
        'At the head of the Golden Horn stands the mosque and tomb of Abu Ayyub al-Ansari (Eyüp Sultan), a Companion of the Prophet Muhammad ﷺ who hosted him in Madinah after the hijra.',
        'The courtyard, shaded by an ancient plane tree and lined with İznik tiles, is full of families: this is where many Istanbul boys are brought before their circumcision ceremony, and where newlyweds come to pray.'
      ],
      history: [
        'Abu Ayyub died during the Arab siege of Constantinople around 674 CE and was buried outside the city walls. His grave was said to have been rediscovered after the Ottoman conquest.',
        'Mehmed II built the mosque over it in 1458, the first large mosque the Ottomans raised in the city. Sultans were girded with the sword of Osman here on their accession — the Ottoman equivalent of a coronation. The present mosque dates largely from a rebuilding in 1800.'
      ],
      religious: [
        'Abu Ayyub al-Ansari is revered as the host of the Prophet ﷺ in Madinah and as a Companion who died in battle at a great age. His tomb is the most visited ziyarat site in Istanbul.',
        'Visitors of all faiths may enter the courtyard and the mosque; the tomb chamber is a place of prayer, so keep quiet and do not photograph people praying.'
      ],
      highlights: ['Tomb of Abu Ayyub al-Ansari', 'İznik tile panels in the courtyard', 'The old plane tree and storks', 'Ottoman cemetery climbing the hillside', 'Pierre Loti Hill and its cable car', 'Golden Horn view from the café at the top'],
      hours: { summary: 'Open daily; busiest on Fridays and during Ramadan', details: ['The tomb closes to visitors during prayers', 'Evenings in Ramadan are extremely crowded'], note: 'Modest dress is enforced more strictly here than at tourist mosques.' },
      tickets: { required: false, price: 'Free (cable car to Pierre Loti is paid)', how: ['No ticket for the mosque or tomb.'], links: [] },
      gettingThere: { airport: 'Istanbul Airport (IST)', road: 'Eyüpsultan district, at the top of the Golden Horn.', transport: 'Golden Horn ferry to Eyüp pier, or the T5 tram along the shore.' },
      bestTime: 'Weekday mornings; avoid Friday midday unless you are praying', duration: '1–2 hours with Pierre Loti',
      dress: 'Conservative dress. Women should cover their hair; shoes are removed.',
      tips: ['Take the cable car up to Pierre Loti Café and walk back down through the cemetery.', 'Buy traditional pişmaniye or candy from the stalls by the gate.', 'Queues for the tomb move quickly — keep to the one-way route.']
    },
    {
      id: 'chora-church', name: 'Chora (Kariye Mosque)', nativeName: 'Kariye Camii',
      region: 'marmara', city: 'Istanbul', categories: ['religious', 'heritage'], muslimSite: true,
      coords: [41.0312, 28.9391], wiki: 'https://en.wikipedia.org/wiki/Chora_Church',
      tagline: 'The finest Byzantine mosaics and frescoes left anywhere.',
      overview: [
        'Small on the outside, overwhelming inside: Chora\'s narthexes are covered in gold-ground mosaics telling the lives of Christ and the Virgin, and the side chapel holds the Anastasis fresco of the Resurrection, one of the masterpieces of medieval art.',
        'The building stands in the old Edirnekapı quarter beside the Theodosian land walls, away from the tourist centre.'
      ],
      history: [
        'A monastery stood here from the 4th century, "in the country" (chora) outside Constantine\'s walls. The present church is 11th–12th century.',
        'Between 1315 and 1321 the statesman and scholar Theodore Metochites paid for the decoration that made it famous. It became a mosque in the 16th century, a museum in 1945, and was reconverted to a mosque, reopening to visitors in 2024.'
      ],
      religious: ['It functions as a mosque today. Some mosaics are screened during prayer; visitors are welcome outside prayer times.'],
      highlights: ['Anastasis (Harrowing of Hell) fresco', 'Mosaic cycle of the life of the Virgin', 'Deesis mosaic', 'Donor portrait of Theodore Metochites', 'The Theodosian land walls nearby'],
      hours: { summary: 'Open to visitors outside prayer times', details: [], note: 'Arrangements changed after the 2024 reopening — confirm hours and ticketing before travelling.' },
      tickets: { required: true, price: 'Paid entry for foreign visitors (indicative)', how: ['Check the official museum site for the current rule; entry for prayer is free.'], links: [{ label: 'Official site', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Istanbul Airport (IST)', road: 'Edirnekapı, in the old city near the land walls.', transport: 'Taxi, or bus from Eminönü; it is about 25 minutes from Sultanahmet.' },
      bestTime: 'Mid-morning on a weekday', duration: '1 hour',
      dress: 'Modest clothing; women cover their hair, shoes are removed.',
      tips: ['Bring binoculars or a zoom — the best mosaics are high in the vaults.', 'Combine with a walk along the Theodosian walls and the Fethiye Museum.', 'Pair with lunch in nearby Balat.']
    },
    {
      id: 'balat-fener', name: 'Balat & Fener', nativeName: 'Balat ve Fener',
      region: 'marmara', city: 'Istanbul', categories: ['heritage', 'modern'],
      coords: [41.0294, 28.9480], wiki: 'https://en.wikipedia.org/wiki/Balat,_Istanbul',
      tagline: 'Rainbow houses, antique shops and the old Greek and Jewish quarters.',
      overview: [
        'Balat was Istanbul\'s Jewish quarter and Fener its Greek one. Today the steep lanes of painted wooden houses, synagogues, churches and crumbling mansions are the most photogenic corner of the city.',
        'The two districts have filled with antique dealers, third-wave coffee shops and small design studios without quite losing their old neighbourhood feel.'
      ],
      history: [
        'Greeks settled in Fener after the conquest, and the Ecumenical Patriarchate of Constantinople — still the senior see of Orthodox Christianity — has been based here since 1601.',
        'Sephardic Jews expelled from Spain in 1492 were resettled in Balat by the Ottomans; the Ahrida Synagogue dates from that period.'
      ],
      religious: ['The Ecumenical Patriarchate (Church of St George) is open to visitors. Ahrida Synagogue requires advance permission from the Chief Rabbinate.'],
      highlights: ['Coloured houses on Kiremit and Merdivenli Yokuş streets', 'Bulgarian St Stephen Church, built of cast iron', 'Ecumenical Patriarchate, Church of St George', 'Phanar Greek Orthodox College ("the Red Castle")', 'Antique shops and cafés', 'Golden Horn waterfront walk'],
      hours: { summary: 'Streets open at all times; churches generally 09:00–17:00', details: [], note: 'Many shops close on Mondays.' },
      tickets: { required: false, price: 'Free', how: ['No ticket for the streets or the Patriarchate.'], links: [] },
      gettingThere: { airport: 'Istanbul Airport (IST)', road: 'On the Golden Horn, between Eminönü and Eyüp.', transport: 'Golden Horn ferry to Fener or Balat, or the T5 tram.' },
      bestTime: 'Weekday mornings for photographs without crowds', duration: 'Half a day',
      dress: 'Comfortable shoes — the lanes are steep and cobbled.',
      tips: ['People live in the famous coloured houses — do not block doorways or photograph into windows.', 'Try a sweet-and-savoury breakfast at one of the Balat cafés.', 'Easy to combine with Chora, a 15-minute walk uphill.']
    },
    {
      id: 'istanbul-archaeology', name: 'Istanbul Archaeology Museums', nativeName: 'İstanbul Arkeoloji Müzeleri',
      region: 'marmara', city: 'Istanbul', categories: ['archaeology', 'heritage'],
      coords: [41.0115, 28.9814], wiki: 'https://en.wikipedia.org/wiki/Istanbul_Archaeology_Museums',
      tagline: 'The Alexander Sarcophagus, the Kadesh treaty and 1 million objects.',
      overview: [
        'Three museums in one complex below Topkapı: the main Archaeology Museum, the Museum of the Ancient Orient and the Tiled Kiosk, the oldest Ottoman civil building in the city (1472).',
        'The collection spans the whole former empire — Mesopotamia, Egypt, Anatolia, the Levant and the classical world.'
      ],
      history: [
        'Founded in 1891 by the painter and archaeologist Osman Hamdi Bey, who excavated the royal necropolis at Sidon and brought back the sarcophagi that made the museum famous.',
        'The main building reopened after a long restoration, with galleries rearranged chronologically.'
      ],
      religious: null,
      highlights: ['The Alexander Sarcophagus', 'Sarcophagus of the Mourning Women', 'The Treaty of Kadesh — the oldest known peace treaty (1259 BCE)', 'Ishtar Gate lions from Babylon', 'Tiled Kiosk with early Ottoman ceramics', 'Statues from Ephesus, Aphrodisias and Miletus'],
      hours: { summary: 'Open daily; check current closing day', details: ['Allow extra time — the complex is bigger than it looks'], note: 'Some galleries may be closed for renovation.' },
      tickets: { required: true, price: 'Paid entry; covered by Museum Pass Istanbul', how: ['Buy at the gate or online.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Istanbul Airport (IST)', road: 'In Gülhane Park, below the first courtyard of Topkapı Palace.', transport: 'T1 tram to Gülhane.' },
      bestTime: 'Any time; it is indoors and rarely crowded', duration: '2–3 hours',
      dress: 'Casual.',
      tips: ['Enter from Gülhane Park to avoid the Topkapı queue.', 'The Ancient Orient building is small but holds the Kadesh tablet — do not skip it.', 'There is a quiet café in the courtyard.']
    },
    {
      id: 'princes-islands', name: 'Princes\' Islands', nativeName: 'Adalar',
      region: 'marmara', city: 'Istanbul', categories: ['coast', 'nature'],
      coords: [40.8575, 29.1229], wiki: 'https://en.wikipedia.org/wiki/Princes%27_Islands',
      tagline: 'Car-free islands of pine woods and wooden mansions, 90 minutes from the city.',
      overview: [
        'Nine islands in the Sea of Marmara, four of them served by regular ferries. Büyükada is the largest, with grand 19th-century wooden villas, pine forest and a monastery on its highest hill; Heybeliada, Burgazada and Kınalıada are quieter.',
        'Private cars are banned. People get around on foot, by bicycle and in electric buggies, which replaced the horse-drawn carriages in 2020.'
      ],
      history: [
        'Byzantine emperors exiled unwanted princes and princesses to monasteries here, which is how the islands got their name.',
        'In the 19th and early 20th centuries they became summer retreats for Istanbul\'s Greek, Armenian and Jewish communities. Leon Trotsky lived on Büyükada from 1929 to 1933.'
      ],
      religious: ['The Greek Orthodox monastery of Aya Yorgi (St George) on Büyükada\'s southern hill is a working pilgrimage site; many Turkish visitors tie a thread along the path up and make a wish.'],
      highlights: ['Aya Yorgi monastery and hilltop view', 'Wooden mansions of Büyükada', 'Trotsky\'s abandoned house', 'Cycling round Heybeliada', 'Swimming coves and seafood restaurants', 'Halki Theological School (Heybeliada)'],
      hours: { summary: 'Ferries run all day, roughly 07:00–22:00', details: ['Crossing takes 50–90 minutes depending on the service', 'Services are reduced and sea conditions rougher in winter'], note: 'The last ferry back fills up on summer Sundays — check its time when you arrive.' },
      tickets: { required: 'partial', price: 'Ferry fare only; bike hire and buggies are extra', how: ['Pay the ferry with an Istanbulkart from Kabataş, Eminönü, Kadıköy or Bostancı.', 'Fast sea-bus (İDO) services also run in summer.'], links: [{ label: 'Şehir Hatları ferries', url: 'https://www.sehirhatlari.istanbul' }] },
      gettingThere: { airport: 'Sabiha Gökçen (SAW) is nearer, via Bostancı pier', road: 'No road access — ferry only.', transport: 'Ferries from Kabataş, Eminönü (Europe) and Kadıköy, Bostancı (Asia).' },
      bestTime: 'May, June and September; weekends in July and August are packed', duration: 'Full day',
      dress: 'Walking shoes, sun protection, swimwear in summer.',
      tips: ['Go on a weekday — summer weekends are shoulder to shoulder.', 'Hire a bike at the Büyükada pier and ride the outer loop.', 'Carry cash: some island cafés still prefer it.']
    },
    {
      id: 'maidens-tower', name: 'Maiden\'s Tower', nativeName: 'Kız Kulesi',
      region: 'marmara', city: 'Istanbul', categories: ['heritage', 'coast'],
      coords: [41.0211, 29.0041], wiki: 'https://en.wikipedia.org/wiki/Maiden%27s_Tower',
      tagline: 'A small white tower on its own islet in the middle of the Bosphorus.',
      overview: [
        'Standing on a rock just off the Üsküdar shore, the Maiden\'s Tower is one of Istanbul\'s best-loved landmarks. A short boat ride takes visitors out to the café, museum rooms and viewing terrace.',
        'It reopened in 2023 after a thorough restoration.'
      ],
      history: [
        'A fortified post has stood here since about 408 BCE, when the Athenians built a customs station to control the strait. The Byzantines added a tower, and the Ottomans rebuilt it repeatedly — the present form dates from 1763 with a 19th-century top.',
        'It has served as a lighthouse, a quarantine station and a naval depot. Legend tells of a princess shut up here to escape a prophecy of death by snakebite, only for the snake to arrive hidden in a basket of fruit.'
      ],
      religious: null,
      highlights: ['Boat ride across the strait', 'Terrace view back at the old city skyline', 'Small museum inside', 'Sunset from Üsküdar\'s Salacak shore'],
      hours: { summary: 'Open daily; boats run on a shuttle timetable', details: ['Crossings can be cancelled in rough weather'], note: 'Entry is capped, so timed tickets sell out at weekends.' },
      tickets: { required: true, price: 'Paid; the fee includes the boat transfer', how: ['Buy online in advance for a timed slot.'], links: [{ label: 'Official site', url: 'https://kizkulesi.gov.tr' }] },
      gettingThere: { airport: 'Sabiha Gökçen (SAW)', road: 'Boats leave from Salacak (Üsküdar) and Kabataş.', transport: 'Marmaray or ferry to Üsküdar, then a 15-minute walk to Salacak pier.' },
      bestTime: 'Sunset', duration: '1–1.5 hours',
      dress: 'A windproof layer for the boat.',
      tips: ['Even without a ticket, the Salacak promenade gives the classic photo.', 'Çamlıca Hill and Üsküdar\'s Mihrimah Sultan Mosque are a short taxi away.', 'Weekday evenings are far less crowded.']
    },

    /* ======================= MARMARA — BEYOND ISTANBUL ======================= */
    {
      id: 'bursa-cumalikizik', name: 'Bursa & Cumalıkızık', nativeName: 'Bursa ve Cumalıkızık',
      region: 'marmara', city: 'Bursa', categories: ['heritage', 'religious'], unesco: true, featured: true,
      coords: [40.1826, 29.0665], wiki: 'https://en.wikipedia.org/wiki/Bursa',
      tagline: 'The first Ottoman capital, with a 600-year-old village on its slopes.',
      overview: [
        'Bursa, "Green Bursa", sits below Mount Uludağ and was the Ottoman capital before Edirne and Istanbul. The UNESCO listing covers the mosque-and-tomb complexes of the early sultans, the silk market hans, and Cumalıkızık, an intact Ottoman village of about 270 houses on the mountainside.',
        'The Grand Mosque (Ulu Cami) of 1399 has twenty domes and walls covered in monumental calligraphy; the Green Mosque and Green Tomb are faced in turquoise İznik tile.'
      ],
      history: [
        'Bursa was taken by Orhan Gazi in 1326 and became the first real capital of the Ottoman state. The early sultans Osman and Orhan are buried here.',
        'For centuries it was the end point of the Silk Road in Anatolia; the Koza Han silk caravanserai of 1491 still sells silk and the cocoon market still runs each summer.'
      ],
      religious: ['The tombs of Osman and Orhan Gazi, founders of the Ottoman dynasty, are places of visit. Ulu Cami and the Green Mosque are working mosques — visit outside prayer times.'],
      highlights: ['Ulu Cami and its calligraphy', 'Green Mosque and Green Tomb (Yeşil Türbe)', 'Koza Han silk market', 'Tombs of Osman and Orhan', 'Cumalıkızık village', 'İskender kebab, invented here', 'Uludağ cable car'],
      hours: { summary: 'Mosques daily outside prayer times; museums usually closed Monday', details: ['Cumalıkızık village is open at all times; its small museum keeps daytime hours', 'The Saturday market in Cumalıkızık is the liveliest day'], note: 'Bursa is an easy day trip from Istanbul but deserves an overnight.' },
      tickets: { required: 'partial', price: 'Mosques free; museums and the cable car are paid', how: ['No booking needed for the mosques or the village.', 'Buy cable car tickets online at busy weekends.'], links: [{ label: 'GoTürkiye — Bursa', url: 'https://goturkiye.com' }] },
      gettingThere: { airport: 'Yenişehir (YEI) or Istanbul (IST / SAW)', road: 'About 2.5 hours from Istanbul by road, or a fast ferry to Mudanya then 30 minutes by car.', transport: 'Sea bus (İDO/BUDO) from Istanbul to Mudanya is the pleasant option; buses run constantly.' },
      bestTime: 'April – June and September – October; winter for skiing on Uludağ', duration: '1–2 days',
      dress: 'Modest clothing for mosques; women cover their hair.',
      tips: ['Have an İskender kebab where it was invented, then candied chestnuts (kestane şekeri).', 'Cumalıkızık is 12 km east of the centre — go in the morning before the tour buses.', 'The historic Çekirge thermal baths are fed by natural hot springs.']
    },
    {
      id: 'uludag', name: 'Mount Uludağ', nativeName: 'Uludağ',
      region: 'marmara', city: 'Bursa', categories: ['nature'],
      coords: [40.1000, 29.1333], wiki: 'https://en.wikipedia.org/wiki/Uluda%C4%9F',
      tagline: 'Türkiye\'s best-known ski mountain, reached by a long cable car.',
      overview: [
        'Uludağ rises to 2,543 m directly above Bursa. In winter it is the country\'s most popular ski resort, with hotels at the top of the lifts; in summer it is a national park of fir forest, alpine meadows and glacial lakes.',
        'The Teleferik cable car from Bursa is one of the longest in the world and climbs the mountain in about 20 minutes.'
      ],
      history: [
        'The Greeks knew it as Mysian Olympus, home of the gods in local legend, and Byzantine monks kept hermitages in its forests.',
        'The ski resort developed from the 1930s onward and is now a cluster of hotels in two zones.'
      ],
      religious: null,
      highlights: ['Cable car from Bursa', 'Ski runs and snowboarding (Dec – Mar)', 'Uludağ National Park trails and crater lakes', 'Summer picnics and cool air', 'Views over the Sea of Marmara on a clear day'],
      hours: { summary: 'Cable car daily, roughly 08:00–22:00 (shorter out of season)', details: ['Ski season runs roughly December to March', 'The national park road may close in heavy snow'], note: 'Weather changes fast; check conditions before going up.' },
      tickets: { required: 'partial', price: 'Cable car and national park entry are paid; ski passes extra', how: ['Buy cable car tickets online at weekends — queues are long.', 'Ski equipment is hired at the resort.'], links: [{ label: 'Bursa Teleferik', url: 'https://www.bursateleferik.com.tr' }] },
      gettingThere: { airport: 'Yenişehir (YEI) or Istanbul (IST / SAW)', road: '36 km of mountain road from Bursa; winter tyres or chains required.', transport: 'Teleferik cable car from Teferrüç in Bursa, or a dolmuş minibus from the city.' },
      bestTime: 'January – March for snow; June – September for hiking', duration: 'Half a day to several days',
      dress: 'Warm layers all year; proper ski gear in winter.',
      tips: ['Go up early — afternoon cloud often swallows the view.', 'Day visitors can hire sledges and gear at the top in winter.', 'The park has designated picnic areas; open fires are banned.']
    },
    {
      id: 'iznik', name: 'İznik (Nicaea)', nativeName: 'İznik',
      region: 'marmara', city: 'İznik, Bursa', categories: ['heritage', 'archaeology', 'religious'],
      coords: [40.4290, 29.7190], wiki: 'https://en.wikipedia.org/wiki/%C4%B0znik',
      tagline: 'Walled lakeside town where the Nicene Creed was written and the great tiles were fired.',
      overview: [
        'İznik is a small town inside almost complete Roman and Byzantine walls, on the shore of a lake. Within the walls are a ruined basilica, a 14th-century Ottoman mosque, a theatre and the workshops that revived İznik tile-making.',
        'Under the lake\'s shallow water, 2 km offshore, lies a submerged basilica discovered in 2014 and visible from the air.'
      ],
      history: [
        'As Nicaea it hosted the First Ecumenical Council in 325 CE, which produced the Nicene Creed, and the Seventh Council in 787. It was briefly the capital of the Byzantine Empire in exile after 1204.',
        'Taken by the Ottomans in 1331, it became the centre of a ceramics industry whose cobalt-blue, turquoise and "Armenian red" tiles clad the great mosques of Istanbul and Edirne in the 16th century.'
      ],
      religious: ['The ruined Hagia Sophia of Nicaea — now a working mosque — stands on the site of the Council of 787. The 325 council met in a building near the lake that no longer survives.'],
      highlights: ['City walls and the Istanbul and Lefke gates', 'Hagia Sophia of Nicaea (Ayasofya Mosque)', 'Green Mosque (Yeşil Cami) with its tiled minaret', 'İznik tile workshops and the tile museum', 'The sunken basilica in the lake', 'Lakeside sunset and olive groves'],
      hours: { summary: 'Town open always; museums usually closed Monday', details: [], note: 'Several monuments were damaged in past earthquakes and may be under restoration.' },
      tickets: { required: 'partial', price: 'Most sites free; the museum charges a small fee', how: ['No booking needed. Tile workshops welcome visitors and run short courses by arrangement.'], links: [] },
      gettingThere: { airport: 'Yenişehir (YEI) or Istanbul (SAW)', road: 'About 1.5 hours from Bursa, or 2.5 hours from Istanbul via the Osmangazi Bridge.', transport: 'Buses from Bursa and Yalova; a car is easiest.' },
      bestTime: 'April – June and September – October', duration: 'Half a day',
      dress: 'Modest clothing for the mosques.',
      tips: ['Buy tiles directly from a workshop — genuine İznik quartz tiles are expensive but real.', 'Climb to the lakeside walls for sunset over the water.', 'Easy to combine with Bursa in a weekend.']
    },
    {
      id: 'selimiye-mosque', name: 'Selimiye Mosque, Edirne', nativeName: 'Selimiye Camii',
      region: 'marmara', city: 'Edirne', categories: ['religious', 'heritage'], unesco: true, muslimSite: true, featured: true,
      coords: [41.6781, 26.5594], wiki: 'https://en.wikipedia.org/wiki/Selimiye_Mosque',
      tagline: 'Mimar Sinan called this one his masterpiece — and he was 80 when he built it.',
      overview: [
        'The Selimiye dominates the skyline of Edirne with four of the tallest minarets in the Ottoman world, each about 71 m, and a dome 31.3 m across — slightly wider than Hagia Sophia\'s, which was Sinan\'s declared ambition.',
        'Inside, eight piers carry the dome so lightly that the space feels like a single unbroken volume filled with light. It became a UNESCO World Heritage Site in 2011.'
      ],
      history: [
        'Commissioned by Sultan Selim II and built between 1569 and 1575 by Mimar Sinan, then in his eighties, who wrote that this was the building in which he proved himself a master.',
        'Edirne had been the Ottoman capital from 1369 until 1453 and remained the second city of the empire, the place where sultans hunted and armies gathered before marching into Europe.'
      ],
      religious: ['A working mosque with a full congregation; visitors are welcome outside prayer times.'],
      highlights: ['The dome and its eight supporting piers', 'Marble minbar carved from a single block', 'The upside-down tulip carving on a column base', 'Muezzin\'s platform over a small fountain', 'Arasta bazaar beneath the mosque', 'Old Mosque and Üç Şerefeli Mosque nearby'],
      hours: { summary: 'Open daily outside prayer times', details: ['Closed to visitors around the five daily prayers and at Friday midday'], note: 'The adjoining Islamic Arts Museum keeps museum hours.' },
      tickets: { required: false, price: 'Free', how: ['No ticket for the mosque; the attached museums charge a small fee.'], links: [] },
      gettingThere: { airport: 'Istanbul Airport (IST), about 2.5 hours away', road: 'Edirne is on the Bulgarian and Greek borders, about 230 km from Istanbul on the O-3 motorway.', transport: 'Frequent intercity buses from Istanbul (2.5–3 hours).' },
      bestTime: 'Spring and autumn; late June for the Kırkpınar oil-wrestling festival', duration: '1–2 hours; a full day for Edirne',
      dress: 'Modest clothing; women cover their hair. Scarves available at the door.',
      tips: ['Stand directly under the centre of the dome and look up — the geometry is the point.', 'Edirne is famous for liver (ciğer) and almond paste sweets.', 'Combine with the Old Mosque, the covered bazaar and the Ottoman bridges over the Meriç.']
    },
    {
      id: 'troy', name: 'Troy', nativeName: 'Truva / Troya',
      region: 'marmara', city: 'Çanakkale', categories: ['archaeology', 'heritage'], unesco: true,
      coords: [39.9574, 26.2389], wiki: 'https://en.wikipedia.org/wiki/Troy',
      tagline: 'Nine cities stacked on one mound, and the story the Iliad told.',
      overview: [
        'Troy is not a single ruin but at least nine superimposed settlements spanning about 3,000 years, from the Early Bronze Age to Roman Ilion. Walls, a ramp, house foundations and a small theatre are laid out along a walking route with good signage.',
        'The excellent Troy Museum, a rust-coloured cube opened in 2018, stands a short distance away and explains what the mound alone cannot.'
      ],
      history: [
        'Heinrich Schliemann began digging in 1870 convinced he had found Homer\'s Troy, and famously removed a hoard he called "Priam\'s Treasure" — cutting through several layers in the process.',
        'Layer VI or VIIa, destroyed around 1180 BCE, is the usual candidate for the city of the Trojan War. Excavation has continued ever since, and UNESCO listed the site in 1998.'
      ],
      religious: null,
      highlights: ['The excavated layers and the east wall of Troy VI', 'Bouleuterion and Roman odeon', 'The modern wooden horse at the entrance', 'Troy Museum and its gold jewellery', 'The wooden horse from the 2004 film, displayed in Çanakkale town'],
      hours: { summary: 'Open daily; longer hours in summer', details: ['Little shade on the mound'], note: 'Allow time for the museum, 800 m from the site.' },
      tickets: { required: true, price: 'Paid; a combined site-and-museum ticket is available', how: ['Buy at the gate or online. The Aegean Museum Pass covers it.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Çanakkale (CKZ) or Istanbul (IST)', road: '30 km south of Çanakkale town, near the village of Tevfikiye.', transport: 'Dolmuş minibuses from Çanakkale bus station; tours include Gallipoli.' },
      bestTime: 'April – June and September – October', duration: '2 hours plus 1.5 hours for the museum',
      dress: 'Hat, sunscreen and sturdy shoes.',
      tips: ['Do the museum first — the site makes far more sense afterwards.', 'The ruins are subtle; a guide or the audio guide is worth it.', 'Combine with Gallipoli across the strait in one long day.']
    },
    {
      id: 'gallipoli', name: 'Gallipoli Peninsula', nativeName: 'Gelibolu Yarımadası',
      region: 'marmara', city: 'Çanakkale', categories: ['heritage', 'nature'],
      coords: [40.2283, 26.2750], wiki: 'https://en.wikipedia.org/wiki/Gallipoli_campaign',
      tagline: 'Battlefields, trenches and cemeteries of the 1915 campaign.',
      overview: [
        'The Gallipoli Peninsula Historical National Park covers the beaches, ridges and cemeteries of the eight-month campaign of 1915, in which roughly half a million men were killed or wounded.',
        'The standard route takes in Anzac Cove, Lone Pine, Chunuk Bair, the Nek and the 57th Regiment Memorial, ending at the Çanakkale Martyrs\' Memorial on the southern cape.'
      ],
      history: [
        'In April 1915 Allied forces — including large Australian and New Zealand contingents — landed to try to force the Dardanelles and take Constantinople. Ottoman forces under Mustafa Kemal, later Atatürk, held the heights.',
        'The Allies withdrew in January 1916. The campaign is central to national memory in Türkiye, Australia and New Zealand, and 25 April is commemorated as Anzac Day with a dawn service at Anzac Cove.'
      ],
      religious: null,
      highlights: ['Anzac Cove and Ari Burnu', 'Lone Pine Memorial', 'Chunuk Bair and the Atatürk Memorial', '57th Infantry Regiment Memorial', 'Çanakkale Martyrs\' Memorial', 'Kabatepe Simulation Centre museum'],
      hours: { summary: 'Open-air park, accessible in daylight; the museum keeps daytime hours', details: ['Anzac Day (25 April) services need registration well in advance'], note: 'Distances between sites are large — this is not a walking tour.' },
      tickets: { required: 'partial', price: 'Free to drive the park; the simulation centre charges a fee', how: ['No booking needed except for Anzac Day services.'], links: [{ label: 'Gallipoli Historical Site', url: 'https://www.tarihialan.gov.tr' }] },
      gettingThere: { airport: 'Çanakkale (CKZ) or Istanbul (IST)', road: 'Across the Dardanelles from Çanakkale; the 1915 Çanakkale Bridge now links the shores.', transport: 'Ferry from Çanakkale to Eceabat, then a car or an organised tour — public transport is impractical.' },
      bestTime: 'April – June and September – October', duration: 'Full day',
      dress: 'Comfortable shoes; it is exposed and windy.',
      tips: ['A guided tour adds a great deal here; the landscape alone says little.', 'The Turkish and Allied memorials are usually visited together — both sides are remembered.', 'Combine with Troy, 30 minutes from Çanakkale.']
    },
    {
      id: 'assos', name: 'Assos (Behramkale)', nativeName: 'Assos / Behramkale',
      region: 'marmara', city: 'Çanakkale', categories: ['archaeology', 'coast'],
      coords: [39.4894, 26.3375], wiki: 'https://en.wikipedia.org/wiki/Assos',
      tagline: 'A Doric temple on a cliff where Aristotle once taught.',
      overview: [
        'Assos is a hilltop village of stone houses crowned by the Temple of Athena, looking across to the Greek island of Lesbos. Below, a tiny harbour of converted stone warehouses holds a handful of hotels and fish restaurants.',
        'The ancient city walls, necropolis, agora and theatre spread down the slope between the two.'
      ],
      history: [
        'Founded by Aeolian Greeks around 1000 BCE. The Temple of Athena was built about 530 BCE and is the only Doric temple in Anatolia.',
        'Aristotle founded a school of philosophy here around 348 BCE and lived in Assos for three years. St Paul passed through on his third missionary journey.'
      ],
      religious: null,
      highlights: ['Temple of Athena at sunset', 'Views over the Gulf of Edremit to Lesbos', 'Ancient theatre and city walls', 'Ottoman stone bridge and mosque in the village', 'The old harbour and its seafood restaurants'],
      hours: { summary: 'Archaeological site open daily, daytime hours', details: [], note: 'The village and harbour are open at all times.' },
      tickets: { required: true, price: 'Small entrance fee for the acropolis', how: ['Pay at the gate.'], links: [] },
      gettingThere: { airport: 'Çanakkale (CKZ) or Edremit Koca Seyit (EDO)', road: 'About 90 km south of Çanakkale on the coast road; the final descent to the harbour is steep and narrow.', transport: 'A car is strongly recommended.' },
      bestTime: 'May, June and September', duration: 'Half a day',
      dress: 'Good shoes — the cobbles are uneven and steep.',
      tips: ['Stay the night in the harbour: the sunset from the temple is the whole point.', 'Park in the upper village; driving down to the harbour in summer is stressful.', 'The nearby beaches at Kadırga are quieter than Assos itself.']
    },
    /* ======================= AEGEAN REGION ======================= */
    {
      id: 'ephesus', name: 'Ephesus', nativeName: 'Efes',
      region: 'aegean', city: 'Selçuk, İzmir', categories: ['archaeology', 'heritage'], unesco: true, featured: true,
      coords: [37.9397, 27.3411], wiki: 'https://en.wikipedia.org/wiki/Ephesus',
      tagline: 'The best-preserved classical city in the Mediterranean.',
      overview: [
        'Ephesus is the ruin that converts people who think they do not like ruins. A marble street runs downhill between standing colonnades from the upper agora past the Odeon, the Temple of Hadrian and the public latrines to the two-storey façade of the Library of Celsus, then on to a theatre that seated 25,000.',
        'The covered Terrace Houses, a separate ticket, preserve mosaic floors and frescoed walls of wealthy Roman homes, excavated and roofed like an indoor archaeological site.'
      ],
      history: [
        'Founded by Ionian Greeks around the 10th century BCE, Ephesus grew rich as the port city of the province of Asia, with perhaps 200,000 people at its peak — one of the largest cities in the Roman world.',
        'Its Temple of Artemis was one of the Seven Wonders of the Ancient World; only a single reconstructed column stands today. The harbour silted up over centuries and the city was gradually abandoned, which is why so much survives.'
      ],
      religious: [
        'St Paul lived and preached in Ephesus for about three years and wrote 1 Corinthians here; the riot of the silversmiths described in Acts 19 took place in the great theatre.',
        'The Church of the Virgin Mary nearby hosted the Third Ecumenical Council in 431 CE. The Basilica of St John in Selçuk is traditionally held to stand over the apostle\'s tomb.'
      ],
      highlights: ['Library of Celsus', 'Great Theatre', 'Terrace Houses (separate ticket)', 'Temple of Hadrian and the Curetes Street', 'Public latrines and the Odeon', 'Ephesus Experience Museum', 'Basilica of St John and the Isa Bey Mosque in Selçuk'],
      hours: { summary: 'Open daily; longer hours April – October', details: ['Two gates: the upper (south) and lower (north) — most people walk downhill from the upper gate', 'Last entry about an hour before closing'], note: 'There is almost no shade on the marble street.' },
      tickets: { required: true, price: 'About €40 for the site (indicative); Terrace Houses about €15 extra', how: ['Buy online or at either gate. The Aegean Museum Pass and Museum Pass Türkiye cover it.', 'Do not skip the Terrace Houses — for many visitors they are the best part.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'İzmir Adnan Menderes (ADB), about 65 km', road: '3 km from Selçuk town, 20 km from Kuşadası.', transport: 'Train or bus from İzmir to Selçuk, then a taxi or a 40-minute walk; cruise passengers come from Kuşadası port.' },
      bestTime: 'April – May and October; start at opening in summer', duration: '3–4 hours',
      dress: 'Hat, sunscreen, water and shoes with grip — the marble is polished and slippery.',
      tips: ['Enter at the upper gate and walk downhill; arrange a taxi or shuttle to collect you at the lower gate.', 'Cruise ships arrive around 10:00 — be there at opening or come after 15:00.', 'The Ephesus Museum in Selçuk holds the Artemis statues and is worth an hour.']
    },
    {
      id: 'house-virgin-mary', name: 'House of the Virgin Mary', nativeName: 'Meryem Ana Evi',
      region: 'aegean', city: 'Selçuk, İzmir', categories: ['religious', 'heritage'],
      coords: [37.9122, 27.3339], wiki: 'https://en.wikipedia.org/wiki/House_of_the_Virgin_Mary',
      tagline: 'A small stone chapel on Mount Koressos, revered by Christians and Muslims alike.',
      overview: [
        'A modest restored stone house in pine woods above Ephesus, held by tradition to be where the Virgin Mary spent her last years in the care of St John. It is now a chapel, with a spring and a wall where visitors tie written prayers.',
        'The atmosphere is quiet and devotional rather than touristic; the queue moves through the tiny interior in a few minutes.'
      ],
      history: [
        'The site was identified in the 19th century from the visions of the German mystic Anne Catherine Emmerich and confirmed by expeditions from İzmir in 1891.',
        'Popes Paul VI, John Paul II and Benedict XVI all visited; the Catholic Church has never formally pronounced on the authenticity but permits pilgrimage.'
      ],
      religious: [
        'A Catholic shrine and pilgrimage site, with Mass celebrated regularly. Muslims also honour Mary — Maryam has a chapter of the Qur\'an named after her — and many Turkish Muslim visitors come to pray here too.'
      ],
      highlights: ['The chapel itself', 'The wishing wall of ribbons and notes', 'Three water springs', 'Forest setting above Ephesus', 'The 15 August feast of the Assumption'],
      hours: { summary: 'Open daily, roughly 08:00–18:00 (shorter in winter)', details: ['Silence is requested inside the chapel', 'No photography inside'], note: 'Very busy when cruise ships are in Kuşadası.' },
      tickets: { required: true, price: 'Small entrance fee, plus a parking charge', how: ['Pay at the gate; most Ephesus tours include it.'], links: [] },
      gettingThere: { airport: 'İzmir Adnan Menderes (ADB)', road: '7 km up a winding forest road from the Ephesus upper gate.', transport: 'No public transport — taxi, tour or hire car.' },
      bestTime: 'Early morning', duration: '45 minutes',
      dress: 'Shoulders and knees covered, as at any place of worship.',
      tips: ['Combine with Ephesus — it is the same road.', 'Bring a pen for the prayer wall.', 'Drinking from the springs is part of the visit for many pilgrims.']
    },
    {
      id: 'sirince', name: 'Şirince Village', nativeName: 'Şirince',
      region: 'aegean', city: 'Selçuk, İzmir', categories: ['heritage', 'nature'],
      coords: [37.9469, 27.4461], wiki: 'https://en.wikipedia.org/wiki/%C5%9Eirince',
      tagline: 'A hillside Greek village of white houses, fruit wine and olive oil.',
      overview: [
        'Şirince sits in the hills 8 km above Selçuk: stone-and-plaster houses with red tiled roofs, two old Greek churches, and lanes of stalls selling the village\'s famous fruit wines, olive oil soap and lace.',
        'It is touristy but genuinely pretty, and the surrounding vineyards and peach orchards make good walking country.'
      ],
      history: [
        'The village was Greek Orthodox until the 1923 population exchange between Türkiye and Greece, when its inhabitants left for Greece and Turkish families from Thessaloniki moved in.',
        'The name means "pretty"; the older name was reportedly less flattering, chosen by former slaves who did not want neighbours moving in.'
      ],
      religious: ['The Church of St John the Baptist (1805) and the smaller Church of St Demetrius survive from the Greek period and can be visited.'],
      highlights: ['Church of St John the Baptist', 'Fruit wine tastings', 'Village market lanes', 'Olive oil and soap workshops', 'Vineyard walks and boutique guesthouses'],
      hours: { summary: 'Village open always; shops roughly 09:00–19:00', details: [], note: 'Day-tripper crowds peak between 11:00 and 15:00.' },
      tickets: { required: false, price: 'Free (parking is charged)', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'İzmir Adnan Menderes (ADB)', road: '8 km of steep winding road from Selçuk.', transport: 'Dolmuş minibuses run from Selçuk bus station every half hour.' },
      bestTime: 'Spring and autumn; weekdays', duration: '2–3 hours',
      dress: 'Comfortable shoes for the cobbles.',
      tips: ['The fruit wines are a novelty rather than fine wine — taste before you buy a case.', 'Stay overnight to have the village to yourself in the evening.', 'Combine easily with Ephesus.']
    },
    {
      id: 'pergamon', name: 'Pergamon', nativeName: 'Bergama',
      region: 'aegean', city: 'Bergama, İzmir', categories: ['archaeology', 'heritage'], unesco: true,
      coords: [39.1319, 27.1844], wiki: 'https://en.wikipedia.org/wiki/Pergamon',
      tagline: 'The steepest theatre in the ancient world, on an acropolis reached by cable car.',
      overview: [
        'Pergamon spreads over three sites: the Acropolis on its 300 m hill, the Asklepion healing sanctuary on the plain, and the Red Basilica (Serapis temple) in the modern town of Bergama.',
        'The Acropolis theatre is cut into the hillside at an extraordinary angle — 80 rows, the steepest surviving from antiquity — with the valley falling away below the top row.'
      ],
      history: [
        'Pergamon became the capital of the Attalid kingdom in the 3rd century BCE and one of the great Hellenistic cities, with a library said to rival Alexandria\'s. Parchment (pergamena) is named after it.',
        'Its Great Altar of Zeus was removed to Berlin in the 19th century, where it gives the Pergamon Museum its name. The Asklepion was among the most famous medical centres of the Roman world, where Galen trained.'
      ],
      religious: ['Pergamon is one of the Seven Churches of Revelation, addressed in Revelation 2:12–17 as the place "where Satan has his throne" — usually read as a reference to the altar or the imperial cult.'],
      highlights: ['Acropolis theatre', 'Temple of Trajan', 'Site of the Great Altar of Zeus', 'Asklepion sacred way and healing tunnel', 'Red Basilica in the town', 'Cable car up to the Acropolis'],
      hours: { summary: 'Open daily; cable car runs during site hours', details: ['Three separate sites, each with its own gate'], note: 'The Acropolis is exposed and windy.' },
      tickets: { required: true, price: 'Separate tickets per site; the cable car is extra', how: ['Buy at each gate, or use the Aegean Museum Pass.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'İzmir Adnan Menderes (ADB), about 110 km', road: 'Bergama is 2 hours north of İzmir on the Çanakkale road.', transport: 'Buses from İzmir to Bergama, then a taxi or the cable car base station.' },
      bestTime: 'April – June and September – October', duration: 'Half a day for all three sites',
      dress: 'Hat, water and good shoes.',
      tips: ['Take the cable car up and walk down through the ruins.', 'The Asklepion is on the other side of town — allow travel time between the sites.', 'Bergama\'s old quarter of Ottoman houses is a pleasant lunch stop.']
    },
    {
      id: 'pamukkale', name: 'Pamukkale & Hierapolis', nativeName: 'Pamukkale ve Hierapolis',
      region: 'aegean', city: 'Denizli', categories: ['nature', 'archaeology'], unesco: true, featured: true,
      coords: [37.9203, 29.1206], wiki: 'https://en.wikipedia.org/wiki/Pamukkale',
      tagline: 'White travertine terraces of warm mineral water, under a Roman spa city.',
      overview: [
        'Hot calcium-rich springs have spilled down this hillside for thousands of years, depositing a dazzling white crust of travertine in a stair of shallow pools — "Cotton Castle" in Turkish.',
        'On the plateau above stands Hierapolis, a Greco-Roman spa city with one of the finest theatres in Anatolia, a huge necropolis, and the Antique Pool where you can swim among fallen marble columns.'
      ],
      history: [
        'Hierapolis was founded in the 2nd century BCE and became a Roman health resort; people came to bathe, and many came to die, which is why its necropolis holds more than 1,200 tombs.',
        'Earthquakes destroyed the city repeatedly. Mass tourism damaged the terraces in the 20th century until hotels built on top were demolished and a strict barefoot-only rule was introduced.'
      ],
      religious: ['The Martyrium of St Philip on the hill above the theatre marks where the apostle Philip is believed to have been martyred around 80 CE; his tomb was identified nearby in 2011.'],
      highlights: ['Walking barefoot down the travertine terraces', 'Hierapolis theatre', 'Antique (Cleopatra\'s) Pool — swim among columns', 'The vast necropolis', 'Martyrium of St Philip', 'Hierapolis Archaeology Museum in the Roman baths'],
      hours: { summary: 'Open daily; long summer hours, often into the evening', details: ['Sunset over the terraces is spectacular and allowed in summer', 'The Antique Pool has its own hours and ticket'], note: 'Shoes must be carried, not worn, on the travertines.' },
      tickets: { required: true, price: 'Site ticket (indicative €30+); the Antique Pool is a separate fee', how: ['Three gates: south, north and the village gate at the bottom of the terraces.', 'The Aegean Museum Pass and Museum Pass Türkiye cover the site but not the pool.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Denizli Çardak (DNZ), about 65 km; also reachable from İzmir (ADB)', road: '20 km north of Denizli city.', transport: 'Frequent dolmuş minibuses from Denizli bus and train station to Pamukkale village.' },
      bestTime: 'April – June and September – October; sunset all year', duration: 'Half a day, or a full day with the pool',
      dress: 'Swimwear under your clothes, a towel, and a bag for your shoes. The travertine is rough underfoot.',
      tips: ['Enter at the bottom (village) gate and walk up barefoot, then leave by the south gate.', 'Water flow is rotated between terraces, so some pools are dry — this is normal.', 'The white surface reflects fiercely: sunglasses and sunscreen are essential.']
    },
    {
      id: 'aphrodisias', name: 'Aphrodisias', nativeName: 'Afrodisias',
      region: 'aegean', city: 'Karacasu, Aydın', categories: ['archaeology'], unesco: true,
      coords: [37.7086, 28.7244], wiki: 'https://en.wikipedia.org/wiki/Aphrodisias',
      tagline: 'A city of sculptors, with the best-preserved stadium in the ancient world.',
      overview: [
        'Aphrodisias lies in a quiet valley among poplar trees, far enough off the main routes to stay peaceful. Its stadium held 30,000 people and survives almost intact, 270 m long with both ends curved.',
        'The on-site museum is exceptional: the city had marble quarries next door and a famous school of sculpture, and the Sebasteion reliefs found here are among the finest Roman sculpture anywhere.'
      ],
      history: [
        'Named for Aphrodite, whose temple stood at its heart, the city flourished under Rome from the 1st century BCE. Its sculptors signed works found across the empire.',
        'An earthquake and a shifting water table brought decline; the site was partly covered by the village of Geyre until villagers were resettled to allow excavation. UNESCO listed it in 2017.'
      ],
      religious: null,
      highlights: ['The stadium', 'Tetrapylon monumental gateway', 'Temple of Aphrodite, later a basilica', 'Sebasteion reliefs in the museum', 'Theatre and the Bishop\'s Palace', 'Unfinished sculptures in the sculptors\' workshop'],
      hours: { summary: 'Open daily, daytime hours', details: ['A shuttle tractor-train runs from the car park to the site'], note: 'Bring everything you need: facilities are limited.' },
      tickets: { required: true, price: 'Paid entry including the museum', how: ['Buy at the gate; the Aegean Museum Pass covers it.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Denizli Çardak (DNZ) or İzmir (ADB)', road: 'About 100 km from Denizli and 80 km from Pamukkale, on a quiet country road.', transport: 'No convenient public transport — hire a car or join a tour from Pamukkale.' },
      bestTime: 'April – June and September – October', duration: '3 hours',
      dress: 'Hat and comfortable shoes; the site is large and spread out.',
      tips: ['Visit the museum first to understand the sculpture school.', 'Far fewer visitors than Ephesus — worth the detour from Pamukkale.', 'Combine with Pamukkale as a long day trip.']
    },
    {
      id: 'sardis', name: 'Sardis & the Lydian Tumuli', nativeName: 'Sardes ve Bin Tepe',
      region: 'aegean', city: 'Salihli, Manisa', categories: ['archaeology'], unesco: true,
      coords: [38.4883, 28.0400], wiki: 'https://en.wikipedia.org/wiki/Sardis',
      tagline: 'Capital of Croesus, where coinage was invented — Türkiye\'s newest World Heritage Site.',
      overview: [
        'Sardis has two main areas: the marble gymnasium and synagogue complex beside the road, and the great Temple of Artemis in a valley a short drive away. Across the plain rise the burial mounds of Bin Tepe, "a thousand hills", including the enormous tumulus of King Alyattes.',
        'It was added to the UNESCO World Heritage List in 2025 as "Sardis and the Lydian Tumuli of Bin Tepe".'
      ],
      history: [
        'Sardis was the capital of the Lydian kingdom, whose last king Croesus was a byword for wealth. The world\'s first coins of standardised precious metal were struck here in the 7th century BCE, using gold from the Pactolus stream.',
        'It fell to Cyrus the Great in 546 BCE, then passed to Alexander, the Seleucids and Rome. Its synagogue, built into the Roman gymnasium, is the largest known from the ancient world and shows a prosperous Jewish community.'
      ],
      religious: ['Sardis is one of the Seven Churches of Revelation (Revelation 3:1–6). The ancient synagogue is a major monument of Jewish history in Anatolia.'],
      highlights: ['Marble Court of the gymnasium', 'The ancient synagogue and its mosaics', 'Byzantine shops along the colonnaded street', 'Temple of Artemis', 'Bin Tepe burial mounds', 'Gold refinery remains by the Pactolus'],
      hours: { summary: 'Open daily, daytime hours', details: ['The gymnasium and the Temple of Artemis are separate, about 1 km apart'], note: 'Bin Tepe is open countryside — a car is needed.' },
      tickets: { required: true, price: 'Small entrance fee per area', how: ['Pay at each gate.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'İzmir Adnan Menderes (ADB), about 95 km', road: 'Near Sart village, 9 km west of Salihli on the İzmir–Ankara road.', transport: 'Train or bus from İzmir to Salihli, then a short taxi ride.' },
      bestTime: 'Spring and autumn', duration: '2–3 hours',
      dress: 'Sun protection; little shade.',
      tips: ['Do not miss the synagogue mosaics — they are the highlight.', 'Bin Tepe is best seen from the top of the Alyattes mound at sunset.', 'Combine with Manisa or as a stop between İzmir and Cappadocia.']
    },
    {
      id: 'izmir-kemeralti', name: 'İzmir & Kemeraltı Bazaar', nativeName: 'İzmir ve Kemeraltı',
      region: 'aegean', city: 'İzmir', categories: ['modern', 'heritage'],
      coords: [38.4189, 27.1287], wiki: 'https://en.wikipedia.org/wiki/Kemeralt%C4%B1',
      tagline: 'Türkiye\'s most relaxed big city, wrapped around a bay and a 17th-century bazaar.',
      overview: [
        'İzmir, ancient Smyrna, curls around a deep gulf with a palm-lined promenade (the Kordon) where the whole city walks at sunset. It is secular, easy-going and famous for its food.',
        'Kemeraltı is the historic bazaar quarter: covered lanes, hans, coffee houses, the Hisar Mosque, synagogues and the Roman Agora, all in one walkable district.'
      ],
      history: [
        'Smyrna was one of the oldest cities of the Aegean, claimed as Homer\'s birthplace, and a great Ottoman trading port where Greeks, Armenians, Jews, Levantines and Turks lived side by side.',
        'A catastrophic fire in September 1922, at the end of the Greco-Turkish War, destroyed much of the old city. Kemeraltı, which grew from a 17th-century inner harbour, survived.'
      ],
      religious: ['Kemeraltı holds several historic synagogues of the once-large Sephardic community, open on guided visits, alongside Ottoman mosques and the Catholic church of St Polycarp.'],
      highlights: ['Kemeraltı bazaar and its hans', 'Kızlarağası Han coffee courtyard', 'Roman Agora of Smyrna', 'Asansör historic lift and the Jewish quarter of Karataş', 'Kordon waterfront at sunset', 'Konak Clock Tower', 'Boyoz pastry and kumru sandwiches'],
      hours: { summary: 'Bazaar Monday – Saturday, roughly 09:00–19:00; quieter Sunday', details: [], note: 'The Agora and Asansör keep museum hours.' },
      tickets: { required: 'partial', price: 'Free to wander; the Agora charges a small fee', how: ['No booking needed.'], links: [] },
      gettingThere: { airport: 'İzmir Adnan Menderes (ADB), 20 minutes by İZBAN commuter train', road: 'City centre at Konak.', transport: 'Metro, tram, İZBAN trains and cross-bay ferries; a single transit card covers all.' },
      bestTime: 'April – June and September – October', duration: '1–2 days as a base for the region',
      dress: 'Casual; İzmir is the most relaxed major city in Türkiye.',
      tips: ['Take the ferry from Konak to Karşıyaka at sunset — the best cheap view in the city.', 'Eat boyoz and a boiled egg for breakfast, as locals do.', 'İzmir is the ideal base for Ephesus, Pergamon and Çeşme.']
    },
    {
      id: 'cesme-alacati', name: 'Çeşme & Alaçatı', nativeName: 'Çeşme ve Alaçatı',
      region: 'aegean', city: 'Çeşme, İzmir', categories: ['coast', 'modern'],
      coords: [38.2819, 26.3747], wiki: 'https://en.wikipedia.org/wiki/Ala%C3%A7at%C4%B1',
      tagline: 'Stone houses, bougainvillea and some of the world\'s best windsurfing.',
      overview: [
        'Alaçatı is a village of old Greek stone houses with blue shutters, cobbled lanes and courtyard restaurants, now one of the most fashionable summer destinations in Türkiye. Çeşme, 9 km away, has the harbour, the castle and the ferries to Chios.',
        'The shallow, reliably windy bay at Alaçatı is a world-class windsurfing and kitesurfing spot, with schools for complete beginners.'
      ],
      history: [
        'The area was Greek until the 1923 population exchange; the stone architecture and the windmills on the ridge are from that period.',
        'Çeşme Castle was built by the Genoese and rebuilt by Sultan Bayezid II in 1508 to guard the strait against pirates.'
      ],
      religious: null,
      highlights: ['Alaçatı\'s stone lanes and markets', 'Windsurfing and kitesurfing bay', 'Çeşme Castle and its museum', 'Ilıca and Altınkum beaches', 'Thermal springs at Şifne', 'Herb Festival each April', 'Ferries to Chios, Greece'],
      hours: { summary: 'Year-round; the season runs May to October', details: ['Many restaurants and hotels close from November to March'], note: 'Traffic into Çeşme on summer Fridays can be severe.' },
      tickets: { required: false, price: 'Free; beach clubs and water sports are paid', how: ['Book accommodation months ahead for July and August.'], links: [] },
      gettingThere: { airport: 'İzmir Adnan Menderes (ADB), about 90 km', road: 'An hour from İzmir on the O-32 motorway.', transport: 'Frequent buses from İzmir Üçkuyular terminal.' },
      bestTime: 'May, June and September — July and August are crowded and expensive', duration: '2–4 days',
      dress: 'Beach clothes; smarter in the evening in Alaçatı.',
      tips: ['Stay in Alaçatı and drive to the beaches rather than the other way round.', 'The wind is strongest in the afternoon — best for sailing, worse for sunbathing.', 'Day trips to the Greek island of Chios are easy if your visa allows.']
    },
    {
      id: 'priene-miletus-didyma', name: 'Priene, Miletus & Didyma', nativeName: 'Priene, Milet ve Didim',
      region: 'aegean', city: 'Söke / Didim, Aydın', categories: ['archaeology'],
      coords: [37.3847, 27.2564], wiki: 'https://en.wikipedia.org/wiki/Didyma',
      tagline: 'Three Ionian cities in one day, ending at a colossal oracle temple.',
      overview: [
        'The classic "PMD" day trip south of Ephesus: Priene, a small Hellenistic town laid out on a strict grid against a cliff; Miletus, once the greatest Ionian port, with a vast theatre; and Didyma, where the Temple of Apollo\'s surviving columns stand 19 m tall.',
        'All three were harbour cities on a gulf that has since silted up, leaving them stranded several kilometres inland.'
      ],
      history: [
        'Miletus was the home of Thales and the first Greek philosophers, and its architect Hippodamus invented the grid city plan used at Priene.',
        'The oracle at Didyma was second only to Delphi. Its temple, begun around 300 BCE, was so enormous it was never finished — which is why unfinished column drums and the architects\' setting-out lines still survive.'
      ],
      religious: null,
      highlights: ['Temple of Apollo at Didyma and its Medusa head', 'Miletus theatre (15,000 seats)', 'İlyas Bey Mosque at Miletus (1404)', 'Priene\'s Temple of Athena and bouleuterion', 'The sacred way between Miletus and Didyma'],
      hours: { summary: 'All three open daily, daytime hours', details: ['Priene involves a steep uphill walk from the car park'], note: 'Plan 30–40 minutes of driving between each site.' },
      tickets: { required: true, price: 'Separate small fee at each site', how: ['Pay at each gate; the Aegean Museum Pass covers all three.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'İzmir (ADB) or Bodrum Milas (BJV)', road: 'South of Söke, between Kuşadası and Didim.', transport: 'A hire car is by far the easiest; dolmuş connections exist but eat the day.' },
      bestTime: 'Spring and autumn', duration: 'Full day for all three',
      dress: 'Sturdy shoes for Priene; sun protection everywhere.',
      tips: ['Do Priene first while you have energy — it has the climb.', 'Add the Bafa Lake viewpoint, the remnant of the old gulf, on the way back.', 'Didyma is in the middle of the resort town of Didim, so lunch is easy.']
    },
    {
      id: 'bodrum', name: 'Bodrum', nativeName: 'Bodrum',
      region: 'aegean', city: 'Bodrum, Muğla', categories: ['coast', 'heritage', 'modern'], featured: true,
      coords: [37.0380, 27.4241], wiki: 'https://en.wikipedia.org/wiki/Bodrum',
      tagline: 'A Crusader castle over a white harbour, and gulet boats to every cove.',
      overview: [
        'Bodrum, ancient Halicarnassus, wraps around twin bays beneath the Castle of St Peter. The castle houses the Museum of Underwater Archaeology, including the Uluburun shipwreck of about 1300 BCE and its cargo of copper, glass and gold.',
        'The peninsula beyond the town has a different village for every mood: Gümüşlük for sunset fish, Yalıkavak for superyachts, Bitez and Türkbükü for beach clubs.'
      ],
      history: [
        'Halicarnassus was the birthplace of Herodotus, the first historian, and the site of the Mausoleum of Mausolus — one of the Seven Wonders, from which the word "mausoleum" comes. Only foundations remain; much of its stone went into the castle.',
        'The Knights Hospitaller built the Castle of St Peter from 1402, using blocks from the ruined Mausoleum, and held it until 1523.'
      ],
      religious: null,
      highlights: ['Bodrum Castle and the Museum of Underwater Archaeology', 'Uluburun Bronze Age shipwreck', 'Site of the Mausoleum', 'Ancient theatre above the town', 'Gulet cruises round the bays', 'Gümüşlük and its sunken city in the shallows', 'Bodrum\'s white-and-blue backstreets'],
      hours: { summary: 'Castle museum open daily except Monday; town always open', details: ['Some castle towers close individually for conservation'], note: 'The town is quiet from November to March.' },
      tickets: { required: 'partial', price: 'Castle museum paid; the town is free', how: ['Buy castle tickets at the gate or online.', 'Day boat trips are booked at the harbour the evening before.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Milas–Bodrum (BJV), 36 km', road: 'About 4 hours from İzmir.', transport: 'Airport shuttle (Havaş) to the centre; ferries to Kos and Rhodes in Greece.' },
      bestTime: 'May, June, September and October', duration: '3–5 days',
      dress: 'Beachwear by day; Bodrum dresses up at night.',
      tips: ['Take a day gulet trip — it is the whole point of Bodrum.', 'Gümüşlük at sunset, with tables in the shallow water, is the classic evening.', 'Avoid mid-August unless you like crowds and peak prices.']
    },
    {
      id: 'oludeniz', name: 'Ölüdeniz & the Lycian Way', nativeName: 'Ölüdeniz ve Likya Yolu',
      region: 'aegean', city: 'Fethiye, Muğla', categories: ['coast', 'nature'], featured: true,
      coords: [36.5486, 29.1206], wiki: 'https://en.wikipedia.org/wiki/%C3%96l%C3%BCdeniz',
      tagline: 'The blue lagoon below Babadağ, and Türkiye\'s greatest paraglide.',
      overview: [
        'Ölüdeniz — "the dead sea", so called because the lagoon stays calm in any weather — is the most photographed beach in Türkiye: a spit of white shingle curving round water that shades from turquoise to deep blue.',
        'Above it rises Babadağ at 1,965 m, with a cable car to the top and tandem paragliding flights that spiral down over the lagoon. The 540 km Lycian Way long-distance path passes through.'
      ],
      history: [
        'The coast was Lycia, a federation of independent cities with their own language and distinctive rock-cut tombs. Fethiye, ancient Telmessos, has tombs carved into the cliff above the town.',
        'The abandoned Greek village of Kayaköy nearby was emptied in the 1923 population exchange and has stood roofless ever since.'
      ],
      religious: null,
      highlights: ['Ölüdeniz lagoon (a protected nature park)', 'Tandem paragliding from Babadağ', 'Babadağ cable car', 'Butterfly Valley by boat', 'Kayaköy ghost village', 'Lycian rock tombs above Fethiye', 'The Lycian Way trail'],
      hours: { summary: 'Beach and lagoon open daily; flights depend on wind', details: ['Paragliding runs roughly April to November, weather permitting', 'The nature park charges a small entry fee'], note: 'The lagoon itself is a protected area — no motorised craft.' },
      tickets: { required: 'partial', price: 'Lagoon entry small; paragliding and the cable car are the big costs', how: ['Book paragliding with a licensed operator; check insurance and pilot certification.', 'Boat trips to Butterfly Valley leave from Ölüdeniz beach each morning.'], links: [] },
      gettingThere: { airport: 'Dalaman (DLM), about 60 km', road: '14 km of winding road down from Fethiye.', transport: 'Dolmuş minibuses run constantly from Fethiye in season.' },
      bestTime: 'May, June, September and October', duration: '3–5 days',
      dress: 'Swimwear, reef shoes for the shingle, and warm layers for paragliding.',
      tips: ['Fly in the morning — afternoon winds often ground flights.', 'Walk the first stage of the Lycian Way from Ölüdeniz to Faralya for the Butterfly Valley overlook.', 'The beach is shingle, not sand; water shoes help.']
    },
    {
      id: 'dalyan-kaunos', name: 'Dalyan & Kaunos', nativeName: 'Dalyan ve Kaunos',
      region: 'aegean', city: 'Ortaca, Muğla', categories: ['nature', 'archaeology', 'coast'],
      coords: [36.8319, 28.6331], wiki: 'https://en.wikipedia.org/wiki/Kaunos',
      tagline: 'Lycian tombs cut into a cliff above a river of turtles.',
      overview: [
        'River boats run from Dalyan town through reed channels to İztuzu Beach, passing directly beneath a row of temple-fronted rock tombs carved into the cliff in the 4th century BCE.',
        'İztuzu is a 4.5 km sandbar and one of the Mediterranean\'s most important nesting beaches for loggerhead turtles, with strict rules protecting the nests.'
      ],
      history: [
        'Kaunos was a Carian port city on the far bank, with a theatre, baths and an acropolis. Its harbour silted into the marsh that now surrounds it, which is why the ruins sit among reeds.',
        'The rock tombs were cut for the city\'s elite, imitating temple façades.'
      ],
      religious: null,
      highlights: ['Rock tombs seen from the river', 'Kaunos ruins and theatre', 'İztuzu (Turtle) Beach', 'Mud baths and sulphur springs at Sultaniye', 'Köyceğiz Lake', 'Sea Turtle Research and Rehabilitation Centre'],
      hours: { summary: 'Boats run through the day in season; Kaunos keeps daytime hours', details: ['İztuzu Beach closes at night from May to September to protect nesting turtles'], note: 'Do not use umbrellas or dig on the marked nesting zone.' },
      tickets: { required: 'partial', price: 'Boat trip and a small Kaunos entrance fee', how: ['Shared boats leave from Dalyan quay; the co-operative sets fixed prices.'], links: [] },
      gettingThere: { airport: 'Dalaman (DLM), 25 km', road: 'Dalyan is signposted from the Ortaca junction on the main coast road.', transport: 'Dolmuş from Ortaca; then everything is by river boat.' },
      bestTime: 'May, June, September and October', duration: '1–2 days',
      dress: 'Swimwear, sun hat, something old for the mud baths.',
      tips: ['Take the first boat of the day for the tombs in good light.', 'Respect the turtle rules — İztuzu is a conservation success story.', 'The mud baths are fun but the smell lingers; shower afterwards.']
    },
    {
      id: 'marmaris-datca', name: 'Marmaris & the Datça Peninsula', nativeName: 'Marmaris ve Datça Yarımadası',
      region: 'aegean', city: 'Marmaris, Muğla', categories: ['coast', 'nature'],
      coords: [36.8550, 28.2700], wiki: 'https://en.wikipedia.org/wiki/Marmaris',
      tagline: 'A busy yacht harbour, and a long quiet peninsula reaching towards Greece.',
      overview: [
        'Marmaris is a big resort town in a sheltered bay ringed by pine-covered mountains, with a large marina, a castle and a famously loud bar street. It is the main base for Blue Cruise gulet charters along the coast.',
        'Drive west and the Datça Peninsula narrows into a quiet strip of almond groves and small coves, ending at ancient Knidos where two seas meet.'
      ],
      history: [
        'The castle was rebuilt by Süleyman the Magnificent in 1522 as a staging post for the siege of Rhodes.',
        'Knidos, at the tip of the peninsula, was a Dorian city famous in antiquity for the Aphrodite of Praxiteles, the first life-size female nude in Greek sculpture.'
      ],
      religious: null,
      highlights: ['Marmaris Castle and old town', 'Blue Cruise gulet charters', 'Datça town and Eski Datça village', 'Knidos ruins and its double harbour', 'Turunç and İçmeler bays', 'Ferries to Rhodes, Greece'],
      hours: { summary: 'Year-round; the season runs May to October', details: ['The Datça road is slow and winding — allow 1.5 hours each way'], note: 'Knidos is at the very end of the peninsula, 35 km past Datça town.' },
      tickets: { required: 'partial', price: 'Castle and Knidos charge small fees', how: ['Gulet cabin charters and day boats are booked at the marina.'], links: [] },
      gettingThere: { airport: 'Dalaman (DLM), about 95 km', road: 'The mountain road from Muğla descends into the bay.', transport: 'Buses from Dalaman, İzmir and Antalya; ferries to Rhodes.' },
      bestTime: 'May, June, September and October', duration: '3–7 days with a cruise',
      dress: 'Beachwear; a light jacket for boat evenings.',
      tips: ['A 4-day Blue Cruise from Marmaris to Fethiye is the classic trip.', 'Stay in Eski Datça rather than Marmaris if you want quiet.', 'Buy Datça almonds on the way back — they are famous across Türkiye.']
    },
    /* ======================= MEDITERRANEAN REGION ======================= */
    {
      id: 'antalya-kaleici', name: 'Antalya & Kaleiçi', nativeName: 'Antalya ve Kaleiçi',
      region: 'mediterranean', city: 'Antalya', categories: ['heritage', 'coast', 'modern'], featured: true,
      coords: [36.8841, 30.7056], wiki: 'https://en.wikipedia.org/wiki/Kalei%C3%A7i',
      tagline: 'Ottoman houses on a cliff above a Roman harbour, under the Taurus mountains.',
      overview: [
        'Kaleiçi is Antalya\'s walled old town: lanes of restored wooden Ottoman houses, boutique hotels in old mansions, the fluted Yivli Minare and a tiny Roman harbour at the bottom of the cliff.',
        'Antalya itself is the capital of the Turkish Riviera and the gateway to Lycia, Pamphylia and the Taurus mountains. Its archaeological museum is one of the best in the country.'
      ],
      history: [
        'Founded as Attaleia by King Attalos II of Pergamon in the 2nd century BCE. Hadrian visited in 130 CE, and the triple-arched Hadrian\'s Gate was built for the occasion — still the finest entrance to the old town.',
        'The Seljuks took the city in 1207 and added the Yivli Minare; the Ottomans followed in 1391.'
      ],
      religious: null,
      highlights: ['Hadrian\'s Gate', 'Yivli Minare (Fluted Minaret)', 'Roman harbour and the cliff lift', 'Antalya Archaeological Museum', 'Hıdırlık Tower at sunset', 'Düden and Kurşunlu waterfalls', 'Konyaaltı and Lara beaches'],
      hours: { summary: 'Old town always open; the museum is closed Monday', details: [], note: 'Kaleiçi is pedestrianised — park outside the walls.' },
      tickets: { required: 'partial', price: 'Old town free; the museum and waterfalls charge small fees', how: ['No booking needed. The Mediterranean Museum Pass covers regional sites.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Antalya (AYT), 13 km', road: 'City centre; the old town is below Cumhuriyet Square.', transport: 'Tram and the AntRay light rail; airport buses to the centre.' },
      bestTime: 'April – June and September – November; summers are very hot', duration: '2–3 days as a regional base',
      dress: 'Light clothing; good shoes for the cobbles.',
      tips: ['Antalya Museum before the ruins — it holds the statues from Perge.', 'Watch sunset from Hıdırlık Tower over the Gulf of Antalya.', 'Use Antalya as a base: Perge, Aspendos, Side and Termessos are all day trips.']
    },
    {
      id: 'aspendos', name: 'Aspendos Theatre', nativeName: 'Aspendos Antik Tiyatrosu',
      region: 'mediterranean', city: 'Serik, Antalya', categories: ['archaeology', 'heritage'], featured: true,
      coords: [36.9392, 31.1722], wiki: 'https://en.wikipedia.org/wiki/Aspendos',
      tagline: 'The best-preserved Roman theatre in the world, still used for opera.',
      overview: [
        'Aspendos\' theatre survives almost complete: 7,000 seats, the full stage building to its original height, and acoustics so good that a coin dropped on the stage can be heard in the back row.',
        'Behind the theatre, on the hill, lie the agora, basilica and nymphaeum, and a long Roman aqueduct runs across the plain.'
      ],
      history: [
        'Built around 155 CE under Marcus Aurelius by the local architect Zenon, paid for by two brothers of the city.',
        'The Seljuks later used it as a caravanserai and plastered parts of the interior, which helped preserve it. Restoration began under Atatürk, who is said to have been astonished to find it intact.'
      ],
      religious: null,
      highlights: ['The intact stage building and seating', 'The acoustics — test them', 'Roman aqueduct across the plain', 'Upper city: agora, basilica, nymphaeum', 'Aspendos Opera and Ballet Festival (summer)'],
      hours: { summary: 'Open daily; longer hours in summer', details: ['Closed to day visitors on performance days during the festival'], note: 'Very little shade.' },
      tickets: { required: true, price: 'Paid entry; the festival has separate tickets', how: ['Buy at the gate; the Mediterranean Museum Pass covers it.', 'Festival tickets go on sale in spring.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Antalya (AYT), 48 km', road: '4 km north of the main coast road near Serik.', transport: 'Dolmuş from Antalya to Serik then taxi; most people come on a tour or by car.' },
      bestTime: 'Morning, or an evening performance in summer', duration: '1.5 hours; 3 hours with the upper city',
      dress: 'Hat and water; the stone radiates heat.',
      tips: ['Climb to the top row and have someone speak quietly on the stage.', 'Seeing an opera here is unforgettable — check the festival programme.', 'Combine with Perge and Side in one day.']
    },
    {
      id: 'perge', name: 'Perge', nativeName: 'Perge',
      region: 'mediterranean', city: 'Aksu, Antalya', categories: ['archaeology'],
      coords: [36.9614, 30.8536], wiki: 'https://en.wikipedia.org/wiki/Perga',
      tagline: 'A colonnaded street with a water channel running down the middle.',
      overview: [
        'Perge spreads over a wide plain: Hellenistic gate towers, a stadium for 12,000, Roman baths with the floor heating still visible, and a 300 m colonnaded avenue with a channel of running water down its centre to cool the air.',
        'Most of the statues found here are now in the Antalya Museum, which is why the two are best visited together.'
      ],
      history: [
        'An ancient Pamphylian city said to have been founded after the Trojan War. It flourished under Rome in the 2nd and 3rd centuries CE, when a wealthy citizen, Plancia Magna, paid for much of its monumental architecture.',
        'St Paul and Barnabas landed here on their first missionary journey and preached in the city (Acts 13:13–14).'
      ],
      religious: ['An early Christian centre; the ruins include two basilicas and a bishop\'s palace.'],
      highlights: ['Colonnaded street and water channel', 'Hellenistic gate and its oval court', 'Roman baths with visible hypocaust', 'The stadium', 'Nymphaeum at the foot of the acropolis'],
      hours: { summary: 'Open daily, daytime hours', details: [], note: 'Large, flat and almost shadeless.' },
      tickets: { required: true, price: 'Paid entry', how: ['Buy at the gate; the Mediterranean Museum Pass covers it.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Antalya (AYT), 15 km', road: '18 km east of Antalya, 2 km north of Aksu.', transport: 'Antalya tram to Aksu then a short taxi, or a day tour.' },
      bestTime: 'Early morning or late afternoon', duration: '2 hours',
      dress: 'Hat, sunscreen, plenty of water.',
      tips: ['Visit the Antalya Museum first or afterwards to see Perge\'s sculpture.', 'The stadium at the entrance is easy to miss — go in before the main gate.', 'Combine with Aspendos, 35 km further east.']
    },
    {
      id: 'side', name: 'Side', nativeName: 'Side',
      region: 'mediterranean', city: 'Manavgat, Antalya', categories: ['archaeology', 'coast'],
      coords: [36.7673, 31.3889], wiki: 'https://en.wikipedia.org/wiki/Side,_Turkey',
      tagline: 'A temple of Apollo on a headland, with the sun setting behind its columns.',
      overview: [
        'Side is a resort town built inside and around an ancient city. You walk past the theatre and through the Roman gate to reach the restaurants, and the Temple of Apollo stands on the point with five re-erected columns facing the sea.',
        'The theatre, seating about 15,000, is the largest in the region and unusually free-standing rather than cut into a hill.'
      ],
      history: [
        'Founded by Aeolian Greeks in the 7th century BCE, Side became wealthy under Rome — partly from the slave trade and from piracy.',
        'It declined after the 7th century and the site was resettled in the 19th century by Muslim refugees from Crete, whose descendants still live in the town.'
      ],
      religious: null,
      highlights: ['Temple of Apollo at sunset', 'Roman theatre', 'Side Museum in the Roman baths', 'Monumental gate and colonnaded street', 'Manavgat waterfall nearby', 'Beaches on both sides of the headland'],
      hours: { summary: 'Town open always; theatre and museum keep daytime hours', details: ['The Temple of Apollo is in the open town and can be seen at any hour'], note: 'The old town is pedestrianised in season.' },
      tickets: { required: 'partial', price: 'Theatre and museum paid; the temple area is free', how: ['Buy at each gate; the Mediterranean Museum Pass covers them.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Antalya (AYT), 65 km', road: '7 km west of Manavgat on the coast road.', transport: 'Frequent dolmuş from Manavgat; buses from Antalya.' },
      bestTime: 'May, June, September and October; sunset all year', duration: 'Half a day',
      dress: 'Beachwear plus something for walking the ruins.',
      tips: ['Be at the Temple of Apollo 30 minutes before sunset.', 'The town gets very busy with package tourists in midsummer.', 'The Manavgat river boat trip and waterfall make a good half-day addition.']
    },
    {
      id: 'termessos', name: 'Termessos', nativeName: 'Termessos',
      region: 'mediterranean', city: 'Antalya', categories: ['archaeology', 'nature'],
      coords: [36.9833, 30.4667], wiki: 'https://en.wikipedia.org/wiki/Termessos',
      tagline: 'A mountain city Alexander the Great decided not to besiege.',
      overview: [
        'Termessos sits at 1,050 m inside Güllük Dağı National Park, reached by a steep 30-minute climb through pine forest. The theatre, perched on the edge of a ravine with the Taurus peaks behind it, has one of the most dramatic settings of any ruin anywhere.',
        'Tombs lie tumbled across the hillside, cracked open by earthquakes and overgrown with trees. Very few people make the climb, so you often have it to yourself.'
      ],
      history: [
        'The Pisidian people of Termessos were famously fierce. Alexander the Great besieged the city in 333 BCE, judged it impregnable and moved on — one of the few places that turned him away.',
        'It kept its independence under Rome as an allied city and was abandoned after an earthquake destroyed its aqueduct.'
      ],
      religious: null,
      highlights: ['The theatre above the ravine', 'Scattered rock-cut sarcophagi', 'Gymnasium and cisterns', 'King\'s Road and the city walls', 'Wild goats and mountain views'],
      hours: { summary: 'National park open daily in daylight', details: ['The climb from the car park takes 25–40 minutes and is steep'], note: 'No facilities at the top — carry water.' },
      tickets: { required: true, price: 'Small national park entrance fee per car and person', how: ['Pay at the park gate.'], links: [] },
      gettingThere: { airport: 'Antalya (AYT), about 40 km', road: '34 km north-west of Antalya on the Korkuteli road, then 9 km of park road.', transport: 'No public transport to the site — hire a car or taxi.' },
      bestTime: 'April – June and September – October; avoid midday heat', duration: 'Half a day',
      dress: 'Proper walking shoes, water and sun protection. Not suitable for limited mobility.',
      tips: ['Start early — the climb is hard in afternoon heat.', 'Follow the marked path to the theatre first, then wander the necropolis.', 'Watch your footing: the stones are loose and the drops are real.']
    },
    {
      id: 'kas-kekova', name: 'Kaş & Kekova', nativeName: 'Kaş ve Kekova',
      region: 'mediterranean', city: 'Kaş, Antalya', categories: ['coast', 'archaeology'], featured: true,
      coords: [36.2017, 29.6400], wiki: 'https://en.wikipedia.org/wiki/Kekova',
      tagline: 'A sunken city under clear water, and the nicest small town on the coast.',
      overview: [
        'Kaş is a low-key town of bougainvillea and Lycian tombs on a steep slope above a harbour, popular with divers and people who find Bodrum too loud. A sarcophagus stands in the middle of a residential street.',
        'Boats run east to Kekova Island, where an earthquake dropped part of a Lycian town into the sea: staircases, walls and doorways are visible a metre or two under the surface as you glide over them.'
      ],
      history: [
        'Kaş was ancient Antiphellos, the port of Phellos. Its theatre of about 4,000 seats looks out over the sea towards the Greek island of Meis (Kastellorizo), 2 km offshore.',
        'The sunken city at Kekova was destroyed by earthquakes in the 2nd century CE. Simena, on the mainland opposite, is still a village of a few houses under a castle full of sarcophagi.'
      ],
      religious: null,
      highlights: ['Sunken city of Kekova from a boat', 'Simena (Kaleköy) castle and its tombs', 'Lion Tomb in Kaş old town', 'Antiphellos theatre at sunset', 'Scuba diving and sea kayaking', 'Saklıkent Gorge and Patara as day trips'],
      hours: { summary: 'Boat trips run daily, roughly April – October', details: ['Swimming and diving are banned directly over the sunken ruins'], note: 'Winter services are limited.' },
      tickets: { required: 'partial', price: 'Boat trips and the Simena castle fee', how: ['Day boats and sea kayak trips are booked in Kaş or at Üçağız harbour.'], links: [] },
      gettingThere: { airport: 'Dalaman (DLM) 170 km, or Antalya (AYT) 190 km', road: 'On the D400 coast road between Fethiye and Antalya — scenic but slow.', transport: 'Intercity buses from both airports; dolmuş to Üçağız for boats.' },
      bestTime: 'May, June, September and October', duration: '3–4 days',
      dress: 'Swimwear, reef shoes, a hat for the boat.',
      tips: ['Sea kayaking over the sunken city beats the big tour boats.', 'Stay in Kaş rather than Kalkan if you prefer town life to villas.', 'Day trip to the Greek island of Meis is possible if your visa allows.']
    },
    {
      id: 'patara', name: 'Patara', nativeName: 'Patara',
      region: 'mediterranean', city: 'Kaş, Antalya', categories: ['archaeology', 'coast'],
      coords: [36.2631, 29.3167], wiki: 'https://en.wikipedia.org/wiki/Patara_(Lycia)',
      tagline: 'An 18 km beach, a restored parliament building, and the birthplace of St Nicholas.',
      overview: [
        'Patara pairs a major Lycian city with one of the longest and emptiest beaches in the Mediterranean. The same ticket covers both, and you walk through the ruins to reach the sand.',
        'The restored Bouleuterion — the assembly hall of the Lycian League — is the highlight: a federal parliament of the 2nd century BCE whose system of proportional representation was studied by the authors of the US constitution.'
      ],
      history: [
        'Patara was the chief port of Lycia and the seat of the Lycian League. Its lighthouse, built under Nero in 64 CE and re-erected from its fallen blocks, is among the oldest known.',
        'St Nicholas — later Santa Claus — was born here around 270 CE before becoming bishop of nearby Myra.'
      ],
      religious: ['The birthplace of St Nicholas of Myra. His church and tomb are at Demre (Myra), 40 km east, a major Orthodox pilgrimage site.'],
      highlights: ['Bouleuterion (Lycian League parliament)', 'Monumental arch of Mettius Modestus', 'Roman lighthouse', 'Theatre half-buried in sand', 'Patara Beach — 18 km and protected', 'Turtle nesting in summer'],
      hours: { summary: 'Open daily; the beach closes at sunset in turtle season', details: ['The beach is a protected nesting site: no vehicles, no building, nobody after dark in summer'], note: 'There is little shade on either the site or the beach.' },
      tickets: { required: true, price: 'One ticket covers the ruins and the beach', how: ['Pay at the gate; the Mediterranean Museum Pass covers it.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Dalaman (DLM), about 120 km', road: 'Signposted from the D400 near Gelemiş village.', transport: 'Dolmuş from Kalkan or Kaş to Gelemiş, then walk or shuttle.' },
      bestTime: 'May, June, September and October', duration: 'Half to a full day',
      dress: 'Swimwear, sun protection, and shoes for the ruins.',
      tips: ['Bring your own shade — the beach has only a small café area.', 'Follow the turtle rules in summer; nests are marked.', 'Combine with Xanthos and Letoon, 20 minutes away.']
    },
    {
      id: 'xanthos-letoon', name: 'Xanthos & Letoon', nativeName: 'Ksantos ve Letoon',
      region: 'mediterranean', city: 'Kınık, Antalya / Muğla', categories: ['archaeology'], unesco: true,
      coords: [36.3561, 29.3200], wiki: 'https://en.wikipedia.org/wiki/Xanthos',
      tagline: 'The capital of Lycia and its sacred sanctuary, listed together by UNESCO.',
      overview: [
        'Xanthos was the greatest city of Lycia; Letoon, 4 km away, was the federation\'s religious centre with three temples to Leto, Apollo and Artemis. UNESCO inscribed them jointly in 1988.',
        'Xanthos is famous for its pillar tombs — tall monoliths topped by burial chambers — and for inscriptions in the Lycian language, which is how the language came to be deciphered.'
      ],
      history: [
        'Xanthos was twice destroyed in mass suicide rather than surrender: once against the Persian general Harpagus around 540 BCE, and again against Brutus in 42 BCE.',
        'Many of its finest monuments, including the Nereid Monument and the Harpy Tomb reliefs, were removed to the British Museum in 1842 by Charles Fellows; casts stand in their place.'
      ],
      religious: ['Letoon was the federal sanctuary of Lycia, dedicated to Leto and her children Apollo and Artemis. A later Byzantine church stands among the temples.'],
      highlights: ['Harpy Tomb and the pillar tombs', 'Xanthos theatre and agora', 'Lycian and trilingual inscriptions', 'Three temples at Letoon', 'The flooded nymphaeum at Letoon, full of frogs'],
      hours: { summary: 'Both sites open daily, daytime hours', details: [], note: 'Letoon is partly waterlogged — the paths can be muddy after rain.' },
      tickets: { required: true, price: 'Small fee at each site', how: ['Pay at each gate; the Mediterranean Museum Pass covers both.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Dalaman (DLM), about 80 km', road: 'Near Kınık village on the D400; Letoon is signposted from Kumluova.', transport: 'A car is needed to see both comfortably.' },
      bestTime: 'Spring and autumn', duration: '2–3 hours for both',
      dress: 'Sun protection; waterproof shoes at Letoon in winter.',
      tips: ['The British Museum holds the originals — look up photos before you go.', 'Combine with Patara beach for the afternoon.', 'Letoon is quieter and greener; do not skip it for Xanthos.']
    },
    {
      id: 'olympos-chimaera', name: 'Olympos & the Chimaera Flames', nativeName: 'Olympos ve Yanartaş',
      region: 'mediterranean', city: 'Kumluca, Antalya', categories: ['archaeology', 'nature', 'coast'],
      coords: [36.4514, 30.4703], wiki: 'https://en.wikipedia.org/wiki/Mount_Chimaera',
      tagline: 'Ruins lost in a jungle, and a mountainside that has burned for 2,500 years.',
      overview: [
        'Olympos is a Lycian city swallowed by forest: tombs, a theatre and a temple gate among fig trees and oleander along a stream that reaches a pebble beach. The valley is known for its treehouse hostels.',
        'A short drive north at Çıralı, a 30-minute uphill walk leads to Yanartaş, where natural methane seeping from the rock burns in dozens of small permanent flames.'
      ],
      history: [
        'Olympos joined the Lycian League in the 2nd century BCE, was later a pirate base, and finally a Roman and Byzantine town abandoned after medieval raids.',
        'The flames gave rise to the myth of the Chimaera, the fire-breathing monster slain by Bellerophon on the winged horse Pegasus. Ancient sailors used them to navigate.'
      ],
      religious: null,
      highlights: ['The eternal flames of Yanartaş', 'Olympos ruins in the forest', 'Çıralı beach and turtle nests', 'Treehouse accommodation', 'The Lycian Way passes through'],
      hours: { summary: 'Olympos site daytime hours; Yanartaş open day and night', details: ['The flames are best seen after dark', 'The path up is rough and unlit — bring a torch'], note: 'Flame activity varies; some vents go out and others appear.' },
      tickets: { required: true, price: 'Small fees for Olympos and for Yanartaş', how: ['Pay at each gate. The Olympos ticket is usually valid for several days.'], links: [] },
      gettingThere: { airport: 'Antalya (AYT), about 85 km', road: 'Signposted off the D400; the descent to Olympos and Çıralı is steep and narrow.', transport: 'Buses on the Antalya–Kaş route drop at the junction; minibuses run down to the valleys.' },
      bestTime: 'April – June and September – October', duration: '1–2 days',
      dress: 'Walking shoes and a head torch for the flames; swimwear for the beach.',
      tips: ['Go up to Yanartaş at dusk and come down in the dark — the flames look best then.', 'Bring marshmallows; everyone does.', 'Çıralı is quieter and more comfortable than the Olympos hostel strip.']
    },
    {
      id: 'saklikent', name: 'Saklıkent Gorge', nativeName: 'Saklıkent Kanyonu',
      region: 'mediterranean', city: 'Seydikemer, Muğla', categories: ['nature'],
      coords: [36.4906, 29.3906], wiki: 'https://en.wikipedia.org/wiki/Sakl%C4%B1kent_Gorge',
      tagline: 'An 18 km slot canyon you wade into, with walls 300 m high.',
      overview: [
        'Saklıkent — "hidden city" — is one of the deepest canyons in Europe. A boardwalk clings to the rock for the first few hundred metres, then you wade across icy waist-deep water to continue on foot between sheer walls.',
        'Only about 4 km is accessible without equipment, and only in summer when the water drops.'
      ],
      history: ['The gorge was cut by the Eşen stream through the Akdağlar massif, and only opened as a national park in 1996.'],
      religious: null,
      highlights: ['The entrance boardwalk over the torrent', 'Wading the river crossing', 'Mud baths at the canyon mouth', 'Trout restaurants on platforms over the water', 'Tubing and rafting in season'],
      hours: { summary: 'Open roughly April – October, daylight hours', details: ['Closed or impassable in winter and spring when meltwater is high'], note: 'The water is snow-fed and genuinely cold all year.' },
      tickets: { required: true, price: 'National park entry fee', how: ['Pay at the gate; shoe hire is available on site.'], links: [] },
      gettingThere: { airport: 'Dalaman (DLM), about 70 km', road: '45 km from Fethiye via Kemer village.', transport: 'Dolmuş from Fethiye in season; most visitors come on a day tour.' },
      bestTime: 'June – September, when the water is lowest', duration: 'Half a day',
      dress: 'Water shoes with grip (hire on site), quick-dry clothes, a dry bag for your phone.',
      tips: ['The first river crossing is the hardest — there is a rope to hold.', 'Do not enter if rain is forecast: flash floods are a real danger.', 'Combine with Tlos or Patara on the same day.']
    },
    {
      id: 'alanya-castle', name: 'Alanya Castle & Red Tower', nativeName: 'Alanya Kalesi ve Kızıl Kule',
      region: 'mediterranean', city: 'Alanya, Antalya', categories: ['heritage', 'coast'],
      coords: [36.5375, 31.9950], wiki: 'https://en.wikipedia.org/wiki/Alanya_Castle',
      tagline: 'A Seljuk fortress on a rock between two beaches.',
      overview: [
        'Alanya\'s castle covers an entire headland, with 6.5 km of walls, 140 towers and an inner citadel 250 m above the sea. A cable car runs up from the beach.',
        'At the foot of the rock stands the octagonal Red Tower of 1226 and the Seljuk shipyard (Tersane), the only one of its kind to survive.'
      ],
      history: [
        'The Seljuk sultan Alaeddin Keykubad I took the town in 1221 and made it his winter capital and naval base, building the castle, the Red Tower and the shipyard.',
        'The name Alanya comes from Alaiye, the city the sultan founded.'
      ],
      religious: null,
      highlights: ['Cable car to the citadel', 'Red Tower (Kızıl Kule) and its museum', 'Seljuk shipyard', 'Süleymaniye Mosque in the inner castle', 'Damlataş Cave', 'Cleopatra Beach', 'Boat trips to the pirate caves'],
      hours: { summary: 'Castle and cable car open daily, daytime hours', details: [], note: 'The walk up is long and steep; take the cable car or a taxi.' },
      tickets: { required: true, price: 'Castle, Red Tower and cable car are separately ticketed', how: ['Buy at each entrance.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Gazipaşa–Alanya (GZP) 40 km, or Antalya (AYT) 130 km', road: 'On the D400 coast road, 2 hours east of Antalya.', transport: 'Buses from Antalya; local dolmuş to the cable car base.' },
      bestTime: 'April – June and September – October', duration: 'Half a day',
      dress: 'Sun protection and good shoes.',
      tips: ['Take the cable car up and walk down through the old village inside the walls.', 'The view from the inner citadel over both bays is the best in Alanya.', 'Alanya is heavily developed for package tourism — the castle and old quarter are the reasons to come.']
    },
    {
      id: 'sagalassos', name: 'Sagalassos', nativeName: 'Sagalassos',
      region: 'mediterranean', city: 'Ağlasun, Burdur', categories: ['archaeology', 'nature'],
      coords: [37.6775, 30.5192], wiki: 'https://en.wikipedia.org/wiki/Sagalassos',
      tagline: 'A Roman city at 1,500 m, with a working fountain restored after 1,500 years.',
      overview: [
        'Sagalassos lies high on the slopes of the Taurus mountains, abandoned after earthquakes and never built over. Its Antonine Nymphaeum has been re-erected and the spring reconnected, so water pours down its marble face again — the only ancient fountain anywhere restored to working order.',
        'The setting, on a mountain shelf with peaks behind and a valley below, is as memorable as the ruins.'
      ],
      history: [
        'A Pisidian city that surrendered to Alexander in 333 BCE and grew rich under Rome as "first city of Pisidia". Its pottery was exported across the eastern Mediterranean.',
        'Earthquakes in the 6th and 7th centuries CE and a plague ended the city; it was left to mountain shepherds. Excavation by a Belgian team began in 1990.'
      ],
      religious: null,
      highlights: ['Antonine Nymphaeum with running water', 'The upper agora and heroon', 'Theatre with the mountains behind', 'Roman baths complex', 'Burdur Museum\'s Sagalassos statues'],
      hours: { summary: 'Open daily, daytime hours; may close in heavy snow', details: ['At 1,450–1,700 m it is cold and windy even in summer'], note: 'The last 7 km is a steep mountain road.' },
      tickets: { required: true, price: 'Paid entry', how: ['Pay at the gate.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Isparta Süleyman Demirel (ISE) or Antalya (AYT), about 110 km', road: '7 km above Ağlasun, off the Burdur–Isparta road.', transport: 'No practical public transport — hire a car.' },
      bestTime: 'May – October; snow closes it in winter', duration: '3 hours',
      dress: 'A warm layer even in summer, plus sun protection and good shoes.',
      tips: ['Stand at the nymphaeum and listen — the sound of the water is the point.', 'Combine with Lake Salda, an hour away.', 'Few visitors come; you may have the theatre to yourself.']
    },
    {
      id: 'lake-salda', name: 'Lake Salda', nativeName: 'Salda Gölü',
      region: 'mediterranean', city: 'Yeşilova, Burdur', categories: ['nature'],
      coords: [37.5500, 29.6833], wiki: 'https://en.wikipedia.org/wiki/Lake_Salda',
      tagline: 'White mineral sand and turquoise water that NASA compares to Mars.',
      overview: [
        'Salda is a deep crater lake ringed in places by brilliant white shores of hydromagnesite, which turns the shallow water an intense turquoise. The combination is unlike anywhere else in Türkiye.',
        'NASA has studied the lake as an analogue for Jezero Crater on Mars, where the Perseverance rover landed, because similar minerals formed there.'
      ],
      history: ['The lake fills a tectonic depression and reaches about 184 m deep. It has been a protected special environmental area since 2019 after unmanaged tourism damaged the white shores.'],
      religious: null,
      highlights: ['The white beach at Doğanbaba ("Maldives of Türkiye")', 'Turquoise shallows', 'Walking trails round the shore', 'Stargazing — very dark skies', 'Sagalassos and Pamukkale within reach'],
      hours: { summary: 'Open daily; the protected white beach area has controlled access', details: ['Swimming is allowed only in designated zones', 'Taking the white sand away is prohibited'], note: 'Restrictions change as the conservation plan develops — check locally.' },
      tickets: { required: 'partial', price: 'Small parking or entry fee at the managed beach', how: ['Pay on arrival.'], links: [] },
      gettingThere: { airport: 'Denizli Çardak (DNZ), about 95 km', road: 'Near Yeşilova, on the Burdur–Denizli road.', transport: 'A car is essential.' },
      bestTime: 'June – September for swimming; spring for photography', duration: 'Half a day',
      dress: 'Swimwear and strong sun protection — the white shore reflects fiercely.',
      tips: ['Do not drive on the white shore or remove the sand; it is a protected mineral deposit.', 'The water is cold and gets deep quickly.', 'Combine with Pamukkale, 2 hours away.']
    },
    {
      id: 'hatay-antakya', name: 'Hatay (Antakya)', nativeName: 'Hatay (Antakya)',
      region: 'mediterranean', city: 'Antakya, Hatay', categories: ['heritage', 'religious', 'archaeology'], status: 'check',
      notice: 'Antakya was severely damaged in the February 2023 earthquakes. Much of the old city, including the Habib-i Neccar Mosque, was destroyed and is being rebuilt. Check what is open before travelling.',
      coords: [36.2024, 36.1613], wiki: 'https://en.wikipedia.org/wiki/Antakya',
      tagline: 'Ancient Antioch: Roman mosaics, the first Christian church, and the best food in Türkiye.',
      overview: [
        'Antakya is the ancient Antioch-on-the-Orontes, once the third city of the Roman Empire. The Hatay Archaeology Museum holds one of the world\'s greatest collections of Roman floor mosaics, lifted from the villas of the city\'s suburbs.',
        'The province has long been a crossroads of Arab, Turkish, Armenian, Greek and Jewish communities, and its cuisine — künefe, muhammara, sour kebabs — is famous across the country.'
      ],
      history: [
        'Founded in 300 BCE by Seleucus I, Antioch grew to perhaps half a million people and was a centre of early Christianity.',
        'Hatay joined Türkiye in 1939 after a referendum. On 6 February 2023 two earthquakes devastated the province; tens of thousands died in Hatay alone and most of the historic centre collapsed. Reconstruction is ongoing.'
      ],
      religious: [
        'It was in Antioch that the followers of Jesus were first called Christians (Acts 11:26). The Church of St Peter, a cave church on the mountainside, is claimed as one of the oldest Christian places of worship.',
        'The Habib-i Neccar Mosque, the first mosque in Anatolia, was destroyed in 2023 and is being rebuilt.'
      ],
      highlights: ['Hatay Archaeology Museum mosaics', 'Church of St Peter (Senpiyer)', 'Hatay Museum Hotel, built over excavated ruins', 'Titus Tunnel at Samandağ', 'Künefe and Antakya cuisine', 'Harbiye (Daphne) waterfalls'],
      hours: { summary: 'Museums keep daytime hours; many sites remain closed or restricted', details: ['Confirm the status of each site before travelling'], note: 'Accommodation is limited while the city rebuilds.' },
      tickets: { required: 'partial', price: 'Museum entry paid', how: ['Check opening status with the museum or GoTürkiye before travelling.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Hatay (HTY) — check current status — or Adana (ADA), 200 km', road: 'Near the Syrian border in the far south.', transport: 'Buses from Adana and Gaziantep.' },
      bestTime: 'March – May and October – November', duration: '1–2 days',
      dress: 'Modest clothing; this is a conservative and, at present, a grieving city.',
      tips: ['Travel here thoughtfully and spend money with local businesses.', 'The museum reopened and is the main reason to come.', 'Eat künefe where it was invented — ask for it fresh from the tray.']
    },
    /* ======================= CENTRAL ANATOLIA ======================= */
    {
      id: 'cappadocia-goreme', name: 'Cappadocia & Göreme', nativeName: 'Kapadokya ve Göreme',
      region: 'central-anatolia', city: 'Göreme, Nevşehir', categories: ['nature', 'heritage', 'religious'], unesco: true, featured: true,
      coords: [38.6431, 34.8286], wiki: 'https://en.wikipedia.org/wiki/Cappadocia',
      tagline: 'Fairy chimneys, rock-cut churches and a sky full of balloons at dawn.',
      overview: [
        'Volcanic ash laid down millions of years ago hardened into soft tuff, which wind and water carved into cones, pinnacles and ravines. People then hollowed the rock into houses, stables, pigeon lofts, monasteries and whole underground cities.',
        'The Göreme Open Air Museum is the core of the UNESCO site: a cluster of rock-cut monastic churches whose 10th–12th century frescoes are among the best-preserved Byzantine painting anywhere. The Dark Church (Karanlık Kilise), which had almost no light to fade its colours, needs an extra ticket and is worth it.'
      ],
      history: [
        'Hittites, Persians and Romans all passed through. From the 4th century CE Christian monks and, later, communities hiding from raids cut churches and refuges into the rock.',
        'The valleys stayed inhabited into the 20th century; some villagers still lived in cave houses until the 1950s. Many of those houses are now cave hotels.'
      ],
      religious: ['The rock churches of Göreme were monastic foundations. Their frescoes depict the life of Christ and the saints, and some chapels are still used for occasional services. Visit respectfully and do not touch the paintings.'],
      highlights: ['Hot-air balloon flight at sunrise', 'Göreme Open Air Museum and the Dark Church', 'Uçhisar Castle, the highest point', 'Red and Rose Valley sunset walk', 'Paşabağ (Monks Valley) and Devrent', 'Zelve Open Air Museum', 'Avanos pottery workshops on the Kızılırmak', 'Staying in a cave hotel'],
      hours: { summary: 'Museums open daily; balloon flights at first light', details: ['Open Air Museum hours are longer in summer', 'Balloons fly only in calm weather — roughly 250–280 days a year'], note: 'Flights are cancelled at short notice for wind; build a spare morning into your trip.' },
      tickets: { required: true, price: 'Museum entry paid; the Dark Church is extra; balloon flights cost far more', how: ['Buy museum tickets at the gate or online; the Cappadocia Museum Pass covers several sites.', 'Book balloons with a licensed operator; confirm the basket size and the insurance.', 'If a flight is cancelled you should be offered the next day or a refund — check the terms.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Nevşehir Kapadokya (NAV) 40 km, or Kayseri Erkilet (ASR) 75 km', road: 'Göreme, Ürgüp, Uçhisar and Avanos are all within 15 km of each other.', transport: 'Airport shuttles serve the main villages; overnight buses run from Istanbul (11 hours).' },
      bestTime: 'April – June and September – October; winter snow on the chimneys is magical but flights are often cancelled', duration: '3 days',
      dress: 'Layers — dawn is cold even in summer. Good shoes for valley walks.',
      tips: ['Book the balloon for your first morning so you have a spare day if it is cancelled.', 'The best free sunset is from Red Valley or the roof of your hotel in Göreme.', 'Walking the Rose Valley from Çavuşin to Göreme takes about 3 hours and is the best way to see the churches without crowds.']
    },
    {
      id: 'derinkuyu', name: 'Derinkuyu Underground City', nativeName: 'Derinkuyu Yeraltı Şehri',
      region: 'central-anatolia', city: 'Derinkuyu, Nevşehir', categories: ['heritage', 'archaeology'], unesco: true,
      coords: [38.3739, 34.7344], wiki: 'https://en.wikipedia.org/wiki/Derinkuyu_underground_city',
      tagline: 'Eighteen storeys cut into the rock, deep enough to hide a town.',
      overview: [
        'Derinkuyu descends about 85 m through at least eight accessible levels — stables and wine presses near the top, living quarters, a church and a school below, with ventilation shafts running the full depth and round stone doors that could be rolled shut from the inside.',
        'It could reportedly shelter many thousands of people with their livestock. Nearby Kaymaklı is shallower but wider, and a tunnel is said to have connected the two.'
      ],
      history: [
        'The upper levels may have been dug by the Phrygians; the complex was greatly extended in the Byzantine period as a refuge from Arab–Byzantine raids.',
        'It was rediscovered in 1963 when a resident knocked through a wall of his house and found a passage behind it, and opened to visitors in 1969.'
      ],
      religious: ['The lower levels include a cruciform church and a baptistery, used by Christians sheltering from raids.'],
      highlights: ['The ventilation shaft, 55 m deep', 'Rolling stone doors', 'Underground church and school', 'Wine and oil presses', 'Stables with tethering holes'],
      hours: { summary: 'Open daily, daytime hours', details: ['A one-way route keeps traffic moving; it can still be slow at peak times'], note: 'Passages are low and narrow — not for anyone claustrophobic or with back trouble.' },
      tickets: { required: true, price: 'Paid entry', how: ['Buy at the gate; the Cappadocia Museum Pass covers it.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Nevşehir Kapadokya (NAV)', road: '30 km south of Göreme on the Niğde road.', transport: 'Dolmuş from Nevşehir; most people come on a "Green Tour".' },
      bestTime: 'Any time — the temperature underground is constant', duration: '1 hour',
      dress: 'A jacket (it is about 13 °C inside) and shoes with grip; you will crouch a lot.',
      tips: ['Go early or late — mid-morning tour groups create queues in the tunnels.', 'If you are tall, expect to bend double in several passages.', 'Kaymaklı is easier for children and less steep.']
    },
    {
      id: 'ihlara-valley', name: 'Ihlara Valley', nativeName: 'Ihlara Vadisi',
      region: 'central-anatolia', city: 'Güzelyurt, Aksaray', categories: ['nature', 'religious', 'heritage'],
      coords: [38.2500, 34.3000], wiki: 'https://en.wikipedia.org/wiki/Ihlara_Valley',
      tagline: 'A green canyon with a river, poplar trees and painted churches in the cliffs.',
      overview: [
        'Ihlara is a 14 km gorge cut 100 m deep by the Melendiz river. A staircase of about 380 steps drops into it at the main entrance, and a shaded riverside path runs between walls honeycombed with rock-cut churches.',
        'After the hot bare plateau above, the valley floor is startlingly green and cool — and far less crowded than Göreme.'
      ],
      history: [
        'More than a hundred rock churches and thousands of dwellings were cut into the canyon between the 6th and 13th centuries, when it was a major monastic retreat.',
        'The frescoes show two styles: an early Cappadocian manner with strong Syrian and Coptic influence, and later Byzantine work.'
      ],
      religious: ['Churches such as Ağaçaltı (Church Under the Tree), Yılanlı (Snake Church) and Kokar Kilise retain frescoes. They are former places of worship — do not touch the paintings or use flash.'],
      highlights: ['The 380-step descent', 'Ağaçaltı Church and its Ascension fresco', 'Yılanlı (Snake) Church', 'Riverside walk to Belisırma village', 'Selime Cathedral at the valley mouth', 'Trout restaurants on platforms over the river'],
      hours: { summary: 'Open daily, daylight hours', details: ['The usual walk is Ihlara to Belisırma, about 4 km and 2 hours'], note: 'Arrange your pick-up at the far end before you start walking.' },
      tickets: { required: true, price: 'Paid entry at each gate', how: ['Buy at the entrance; the Cappadocia Museum Pass covers it.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Nevşehir Kapadokya (NAV), about 90 km', road: 'Near Aksaray, 1.5 hours south-west of Göreme.', transport: 'Usually visited on a Green Tour; dolmuş from Aksaray exists but is infrequent.' },
      bestTime: 'April – June and September – October', duration: 'Half a day',
      dress: 'Proper walking shoes; the path is uneven and sometimes muddy.',
      tips: ['Walk down at Ihlara and out at Belisırma rather than returning up the steps.', 'Selime Cathedral, the huge rock monastery at the end of the valley, is a separate stop and worth it.', 'Bring water — the restaurants are only at Belisırma.']
    },
    {
      id: 'anitkabir', name: 'Anıtkabir', nativeName: 'Anıtkabir',
      region: 'central-anatolia', city: 'Ankara', categories: ['heritage', 'modern'], featured: true,
      coords: [39.9250, 32.8367], wiki: 'https://en.wikipedia.org/wiki/An%C4%B1tkabir',
      tagline: 'The mausoleum of Atatürk, and the emotional centre of the republic.',
      overview: [
        'Anıtkabir stands on a hill over Ankara: a 262 m Road of Lions lined with stone lions leads to a vast ceremonial court, and beyond it the Hall of Honour where Mustafa Kemal Atatürk is buried.',
        'The changing of the guard happens on the hour, and the underground museum covers the War of Independence with dioramas, Atatürk\'s personal effects and his library.'
      ],
      history: [
        'Atatürk, founder and first president of the Republic of Türkiye, died in 1938. An international competition chose the design by Emin Onat and Orhan Arda, and the mausoleum was completed in 1953.',
        'The architecture deliberately blends Hittite, Seljuk and Ottoman motifs with modernist lines, to place the republic in a long Anatolian lineage.'
      ],
      religious: null,
      highlights: ['Road of Lions', 'Hall of Honour and the sarcophagus', 'Changing of the guard', 'War of Independence Museum and panoramas', 'Atatürk\'s cars and library', 'View over Ankara from the terrace'],
      hours: { summary: 'Open daily; free entry', details: ['Longer hours in summer', 'Ceremonies are held on national days, when it is extremely busy'], note: 'Security screening at the entrance; large bags are not allowed.' },
      tickets: { required: false, price: 'Free', how: ['No ticket. Bring photo ID.'], links: [{ label: 'Official site', url: 'https://www.anitkabir.com.tr' }] },
      gettingThere: { airport: 'Ankara Esenboğa (ESB), 35 km', road: 'In Anıttepe, central Ankara.', transport: 'Metro to Tandoğan (Anadolu) station, then a 10-minute walk uphill.' },
      bestTime: 'Any time; 10 November at 09:05 is the national moment of silence', duration: '2–3 hours with the museum',
      dress: 'Respectful dress. This is a place of national mourning — no loud behaviour or posed photographs in the Hall of Honour.',
      tips: ['Time your arrival for the hourly guard change.', 'The museum under the colonnade is far bigger than it looks — allow an hour.', 'Combine with the Museum of Anatolian Civilizations in the same day.']
    },
    {
      id: 'anatolian-civilizations', name: 'Museum of Anatolian Civilizations', nativeName: 'Anadolu Medeniyetleri Müzesi',
      region: 'central-anatolia', city: 'Ankara', categories: ['archaeology', 'heritage'],
      coords: [39.9375, 32.8639], wiki: 'https://en.wikipedia.org/wiki/Museum_of_Anatolian_Civilizations',
      tagline: 'Ten thousand years of Anatolia, from Çatalhöyük to the Phrygians, in one covered bazaar.',
      overview: [
        'Housed in a 15th-century bedesten and caravanserai below Ankara Castle, this is the single best introduction to Anatolian archaeology. The collection runs in order from the Palaeolithic through Çatalhöyük, the Hittites, Urartu, Phrygia and Lydia.',
        'Highlights include the Çatalhöyük wall paintings and the seated mother goddess, Hittite reliefs and sphinxes, and the Phrygian furniture and bronzes from the Gordion tumulus.'
      ],
      history: [
        'Atatürk asked for a Hittite museum in the new capital in 1921. The two Ottoman buildings were restored to hold it and the museum opened in 1968. It was named European Museum of the Year in 1997.'
      ],
      religious: null,
      highlights: ['Çatalhöyük mother goddess and wall paintings', 'Hittite orthostat reliefs from Karkamış', 'Bronze Age Alacahöyük standards', 'Urartian metalwork', 'Gordion tumulus furniture', 'Ankara Castle, a short walk uphill'],
      hours: { summary: 'Open daily; check the current closing day', details: [], note: 'Labels are in Turkish and English.' },
      tickets: { required: true, price: 'Paid entry; covered by Museum Pass Türkiye', how: ['Buy at the gate or online.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Ankara Esenboğa (ESB)', road: 'In Ulus, below the castle.', transport: 'Metro to Ulus, then a 15-minute walk uphill.' },
      bestTime: 'Any time', duration: '2–3 hours',
      dress: 'Casual; the walk up to the castle is steep.',
      tips: ['Visit before Hattusa, Gordion or Çatalhöyük — the finds from all three are here.', 'Walk up into Ankara Castle afterwards for the old quarter and the view.', 'Pair with Anıtkabir for a full Ankara day.']
    },
    {
      id: 'hattusa', name: 'Hattusa — the Hittite Capital', nativeName: 'Hattuşa',
      region: 'central-anatolia', city: 'Boğazkale, Çorum', categories: ['archaeology'], unesco: true,
      coords: [40.0197, 34.6153], wiki: 'https://en.wikipedia.org/wiki/Hattusa',
      tagline: 'The walled capital of a Bronze Age superpower, with a tunnel under its ramparts.',
      overview: [
        'Hattusa was the capital of the Hittite Empire, which fought Egypt to a draw at Kadesh. The site covers about 180 hectares with 6 km of walls, five monumental gates, a great temple and the Yerkapı rampart with a 70 m stone-corbelled tunnel running right through it.',
        'A short drive away, the open-air sanctuary of Yazılıkaya has rock reliefs showing a procession of the Hittite gods — the best surviving Hittite art.'
      ],
      history: [
        'The Hittites made Hattusa their capital around 1650 BCE. At its height the empire controlled much of Anatolia and northern Syria.',
        'The archive of about 30,000 clay tablets found here, written in cuneiform, is how the Hittite language was recovered — including the Treaty of Kadesh of 1259 BCE, the oldest known peace treaty. The city was destroyed around 1200 BCE in the Bronze Age collapse.'
      ],
      religious: ['Yazılıkaya was the principal Hittite sanctuary; its two rock chambers show the storm god Teshub, the sun goddess Hepat and a procession of twelve running gods.'],
      highlights: ['Lion Gate and Sphinx Gate', 'Yerkapı tunnel — walk through it', 'Great Temple of the Storm God', 'Green Stone in the temple', 'Yazılıkaya rock reliefs', 'Boğazkale Museum'],
      hours: { summary: 'Open daily, daytime hours', details: ['The circuit is about 5 km — driving between the gates is normal'], note: 'High, open and windy; snow is possible in winter.' },
      tickets: { required: true, price: 'One ticket covers Hattusa and Yazılıkaya', how: ['Pay at the main gate.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Ankara Esenboğa (ESB), about 200 km', road: 'At Boğazkale, 3 hours east of Ankara via Sungurlu.', transport: 'Bus to Sungurlu then a taxi; a hire car is far easier.' },
      bestTime: 'May – October', duration: 'Half a day including Yazılıkaya',
      dress: 'Wind-proof layer, hat, sturdy shoes.',
      tips: ['Drive the circuit and park at each gate rather than walking the whole wall.', 'Do walk through the Yerkapı tunnel — it is dark but short.', 'See the Ankara museum first for the tablets and reliefs taken from here.']
    },
    {
      id: 'gordion', name: 'Gordion', nativeName: 'Gordion',
      region: 'central-anatolia', city: 'Polatlı, Ankara', categories: ['archaeology'], unesco: true,
      coords: [39.6514, 31.9931], wiki: 'https://en.wikipedia.org/wiki/Gordion',
      tagline: 'Capital of King Midas, and the place where Alexander cut the knot.',
      overview: [
        'Gordion is a citadel mound surrounded by nearly a hundred burial tumuli on the Sakarya plain. The great tumulus — about 53 m high — covers the oldest standing wooden building in the world, a juniper and pine burial chamber from around 740 BCE.',
        'A tunnel lets visitors walk into the mound to the chamber itself. The site museum displays the furniture and bronze vessels found inside.'
      ],
      history: [
        'Gordion was the capital of Phrygia. The tomb was long called the Tomb of Midas; it is now thought to hold his father or a predecessor, with Midas himself ruling at the end of the 8th century BCE.',
        'The Gordian Knot was tied here, and the legend says whoever untied it would rule Asia. Alexander the Great, arriving in 333 BCE, cut it with his sword. UNESCO inscribed the site in 2023.'
      ],
      religious: null,
      highlights: ['Walking inside the Midas tumulus', 'The wooden burial chamber', 'Citadel mound and its monumental gate', 'Gordion Museum', 'Phrygian mosaics — among the oldest known'],
      hours: { summary: 'Open daily, daytime hours', details: [], note: 'The tumulus tunnel is cool and damp.' },
      tickets: { required: true, price: 'One ticket for the museum, tumulus and citadel', how: ['Pay at the museum.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Ankara Esenboğa (ESB), about 110 km', road: 'At Yassıhöyük village, 18 km from Polatlı and 95 km west of Ankara.', transport: 'Train or bus to Polatlı then a taxi; a car is easiest.' },
      bestTime: 'April – June and September – October', duration: '2–3 hours',
      dress: 'Sun protection on the open mound.',
      tips: ['Do the tumulus first — it is the reason to come.', 'Easy to combine with Ankara as a half-day trip.', 'The best Gordion finds are in Ankara\'s Museum of Anatolian Civilizations.']
    },
    {
      id: 'mevlana-konya', name: 'Mevlâna Museum, Konya', nativeName: 'Mevlâna Müzesi',
      region: 'central-anatolia', city: 'Konya', categories: ['religious', 'heritage'], muslimSite: true, featured: true,
      coords: [37.8708, 32.5047], wiki: 'https://en.wikipedia.org/wiki/Mevlana_Museum',
      tagline: 'The tomb of Rumi, under a turquoise fluted dome.',
      overview: [
        'The green-tiled tower above Rumi\'s tomb is the symbol of Konya. Inside the complex are the tombs of Rumi and his family, the dervish cells, the semahane where the whirling ceremony was performed, and cases of illuminated Qur\'ans, musical instruments and robes.',
        'It receives millions of visitors a year, Muslim and non-Muslim, and the atmosphere is one of pilgrimage rather than sightseeing.'
      ],
      history: [
        'Mevlâna Jalal ad-Din Rumi (1207–1273), poet and mystic, spent most of his life in Konya, then the Seljuk capital. His followers founded the Mevlevi order after his death.',
        'The lodge was closed in 1925 when Sufi orders were banned, and reopened as a museum in 1926. The Mevlevi sema ceremony is on UNESCO\'s list of Intangible Cultural Heritage.'
      ],
      religious: [
        'Rumi\'s tomb is a major place of visit for Muslims, and his poetry is read far beyond Islam. Visitors of all faiths are welcome.',
        'Rumi called the day of his death his "wedding night" — the night of union with God. The Şeb-i Arus ceremonies each December mark its anniversary.'
      ],
      highlights: ['Rumi\'s sarcophagus under the Green Dome', 'The semahane (ceremonial hall)', 'Illuminated manuscripts and the oldest Mathnawi copies', 'Dervish cells and daily life displays', 'Selimiye Mosque next door', 'Whirling dervish ceremonies on Saturday evenings'],
      hours: { summary: 'Open daily; longer hours in summer', details: ['Şeb-i Arus festival runs 7–17 December and books out the city', 'Free sema ceremonies are usually held at the Mevlana Cultural Centre on Saturdays'], note: 'Shoe covers are provided; photography rules vary by room.' },
      tickets: { required: false, price: 'Free entry (donations accepted)', how: ['No ticket is needed. Check the current arrangement, as it has changed before.'], links: [{ label: 'Official site', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Konya (KYA), 18 km', road: 'City centre, at Mevlâna Square.', transport: 'High-speed train (YHT) from Ankara (1h 45m) or Istanbul (4h 30m); tram from the station.' },
      bestTime: 'Spring and autumn; December for Şeb-i Arus', duration: '1.5 hours',
      dress: 'Modest clothing; women cover their hair inside the mausoleum. Scarves are available.',
      tips: ['Go early — coach groups arrive mid-morning.', 'Konya is conservative: dress accordingly and expect little alcohol.', 'Try fırın kebabı and the local pastry etli ekmek while you are here.']
    },
    {
      id: 'catalhoyuk', name: 'Çatalhöyük', nativeName: 'Çatalhöyük',
      region: 'central-anatolia', city: 'Çumra, Konya', categories: ['archaeology'], unesco: true,
      coords: [37.6667, 32.8264], wiki: 'https://en.wikipedia.org/wiki/%C3%87atalh%C3%B6y%C3%BCk',
      tagline: 'A 9,000-year-old town with no streets — people walked over the roofs.',
      overview: [
        'Çatalhöyük is one of the earliest and largest known Neolithic settlements, a mound of mud-brick houses built wall to wall with no streets between them. People entered through holes in their roofs and buried their dead beneath the floors.',
        'Two excavation areas are roofed and open to visitors, along with a reconstructed house that shows the plastered walls, ovens and bull-horn installations.'
      ],
      history: [
        'Occupied from about 7400 to 6000 BCE, with up to 8,000 people at its peak — not a city in the later sense, but a dense community with no obvious palaces, temples or social hierarchy.',
        'James Mellaart began excavating in 1958; Ian Hodder led a long modern project from 1993. The wall paintings and the seated goddess found here are in Ankara. UNESCO listed it in 2012.'
      ],
      religious: null,
      highlights: ['The roofed North and South excavation shelters', 'Reconstructed Neolithic house', 'Visitor centre and finds display', 'The scale of the mound itself'],
      hours: { summary: 'Open daily, daytime hours', details: ['Active excavation usually runs in summer'], note: 'Interpretation matters here: without the signage the mound looks like mud.' },
      tickets: { required: true, price: 'Small entrance fee', how: ['Pay at the visitor centre.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Konya (KYA), about 60 km', road: '10 km north of Çumra, 45 km south-east of Konya.', transport: 'No useful public transport — taxi from Çumra or a hire car.' },
      bestTime: 'April – June and September – October', duration: '1.5–2 hours',
      dress: 'Sun protection; the plain is exposed.',
      tips: ['See the Ankara museum first if you can — the paintings and figurines are there.', 'The visitor centre film is short and genuinely useful.', 'Easy half-day trip from Konya.']
    },
    {
      id: 'esrefoglu-mosque', name: 'Eşrefoğlu Mosque, Beyşehir', nativeName: 'Eşrefoğlu Camii',
      region: 'central-anatolia', city: 'Beyşehir, Konya', categories: ['religious', 'heritage'], unesco: true, muslimSite: true,
      coords: [37.6797, 31.7256], wiki: 'https://en.wikipedia.org/wiki/E%C5%9Frefo%C4%9Flu_Mosque',
      tagline: 'A forest of 48 wooden columns holding up a 700-year-old roof.',
      overview: [
        'The Eşrefoğlu Mosque in Beyşehir is the largest and best-preserved of the wooden hypostyle mosques of medieval Anatolia, inscribed by UNESCO in 2023 together with four others at Afyon, Sivrihisar, Ankara and Kastamonu.',
        'Inside, 48 cedar columns with carved and painted capitals carry a flat wooden ceiling. A square opening in the roof above a sunken basin, the karlık, was filled with snow in winter to humidify the air and preserve the timber.'
      ],
      history: [
        'Built between 1296 and 1299 by Eşrefoğlu Süleyman Bey, ruler of one of the small Turkish beyliks that followed the Seljuks.',
        'The mihrab and the minbar are covered in tilework and fine wood carving; the minbar is signed and dated by its craftsman.'
      ],
      religious: ['A working mosque. Visitors are welcome outside prayer times; the founder\'s tomb is attached to the building.'],
      highlights: ['The 48 wooden columns and painted capitals', 'Tiled mihrab', 'Carved walnut minbar', 'The karlık snow well in the roof', 'Lake Beyşehir and the Kubadabad Palace site nearby'],
      hours: { summary: 'Open daily outside prayer times', details: [], note: 'A small, working village-town mosque — be quiet and unobtrusive.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Konya (KYA), about 100 km', road: 'In Beyşehir town centre, beside Lake Beyşehir.', transport: 'Buses from Konya (about 1.5 hours).' },
      bestTime: 'Spring and autumn', duration: '45 minutes',
      dress: 'Modest clothing; women cover their hair, shoes removed.',
      tips: ['Look up — the painted ceiling and capitals are the point.', 'Lake Beyşehir is Türkiye\'s largest freshwater lake and good for a lunch stop.', 'Combine with Konya on the same day.']
    },
    {
      id: 'sultanhani', name: 'Sultanhanı Caravanserai', nativeName: 'Sultanhanı Kervansarayı',
      region: 'central-anatolia', city: 'Sultanhanı, Aksaray', categories: ['heritage'],
      coords: [38.2461, 33.5450], wiki: 'https://en.wikipedia.org/wiki/Sultan_Han_(Aksaray)',
      tagline: 'The largest Seljuk caravanserai on the Silk Road, with a mosque in its courtyard.',
      overview: [
        'Sultanhanı is the biggest of the fortified inns the Seljuks built a day\'s camel march apart along the trade roads. Behind a tall carved marble portal lies an open summer courtyard with a raised mosque on four arches in the middle, and a vaulted winter hall behind.',
        'Merchants stayed three days free of charge, with food, stabling, a bath, a doctor and a blacksmith provided by the endowment.'
      ],
      history: [
        'Built in 1229 for Sultan Alaeddin Keykubad I on the Konya–Aksaray road, burnt and rebuilt in 1278.',
        'Dozens of these hans survive across Anatolia; this one covers about 4,500 m² and is the largest.'
      ],
      religious: ['The raised köşk mosque in the middle of the courtyard is one of the most distinctive features of Seljuk caravanserai design.'],
      highlights: ['The carved marble entrance portal', 'Courtyard mosque on arches', 'Vaulted winter hall', 'Stone masonry and geometric carving', 'Agzıkarahan caravanserai nearby'],
      hours: { summary: 'Open daily, daytime hours', details: [], note: 'Small and quickly seen, but architecturally important.' },
      tickets: { required: true, price: 'Small entrance fee', how: ['Pay at the door.'], links: [] },
      gettingThere: { airport: 'Nevşehir Kapadokya (NAV), about 100 km', road: 'On the D300 Konya–Aksaray road, 40 km west of Aksaray.', transport: 'On the main road — easy to stop at by car or on a bus route.' },
      bestTime: 'Any time', duration: '45 minutes',
      dress: 'Casual.',
      tips: ['A natural stop between Cappadocia and Konya.', 'Climb to the roof if it is open for the view over the plain.', 'The village outside sells carpets — browsing is low-pressure here.']
    },
    {
      id: 'divrigi', name: 'Great Mosque and Hospital of Divriği', nativeName: 'Divriği Ulu Camii ve Darüşşifası',
      region: 'central-anatolia', city: 'Divriği, Sivas', categories: ['religious', 'heritage'], unesco: true, muslimSite: true,
      coords: [39.3706, 38.1208], wiki: 'https://en.wikipedia.org/wiki/Divri%C4%9Fi_Great_Mosque_and_Hospital',
      tagline: 'Stone carving so extravagant it has no parallel in Islamic architecture.',
      overview: [
        'In a remote mountain town in Sivas province stands one of the strangest and most beautiful buildings in the Islamic world. Its four portals are carved with enormous three-dimensional flowers, palmettes and interlace, each one in a different style, standing out from otherwise plain walls.',
        'The mosque and the hospital (darüşşifa) attached to it form a single complex, one of the first UNESCO World Heritage Sites inscribed in Türkiye, in 1985.'
      ],
      history: [
        'Built in 1228–1229 for Ahmet Shah of the Mengücek dynasty and his wife Turan Melek, who endowed the hospital.',
        'The hospital treated patients with water, light and music as well as medicine, and its domed central hall has a pool and a carved ramp.'
      ],
      religious: ['A working mosque. The hospital next door is a monument.'],
      highlights: ['The North (Paradise) Portal', 'Shadow portraits said to appear on the portal at certain hours', 'Carved stone minbar inside', 'The hospital\'s domed hall and pool', 'Divriği castle above the town'],
      hours: { summary: 'Open daily outside prayer times', details: ['Parts have been under long-term restoration — the protective roof structure is intentional'], note: 'Divriği is remote; plan the journey carefully.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Sivas Nuri Demirağ (VAS), about 170 km', road: '170 km east of Sivas on mountain roads — allow 3 hours.', transport: 'A daily train from Sivas to Divriği is slow but scenic; buses also run.' },
      bestTime: 'May – October; winter is severe', duration: '2 hours',
      dress: 'Modest clothing; women cover their hair.',
      tips: ['This is a long detour — build it into a route through eastern Anatolia rather than a day trip.', 'Morning light on the north portal shows the carving best.', 'Sivas itself has fine Seljuk medreses and is worth a night.']
    },
    {
      id: 'eskisehir-odunpazari', name: 'Eskişehir & Odunpazarı', nativeName: 'Eskişehir ve Odunpazarı',
      region: 'central-anatolia', city: 'Eskişehir', categories: ['modern', 'heritage'],
      coords: [39.7667, 30.5167], wiki: 'https://en.wikipedia.org/wiki/Odunpazar%C4%B1',
      tagline: 'Painted Ottoman houses, a student city, and meerschaum carvers.',
      overview: [
        'Eskişehir is young, flat and famously liveable: trams, cycle lanes, river boats on the Porsuk and a huge student population. Odunpazarı, the old quarter, is a hillside of brightly painted Ottoman timber houses now full of small museums and cafés.',
        'The Odunpazarı Modern Museum (OMM), a stack of timber boxes by Kengo Kuma, opened in 2019 and put the city on the international art map.'
      ],
      history: [
        'The city stands on ancient Dorylaeum. Its name means "old city". Meerschaum (lületaşı), a soft white mineral found almost only here, has been carved into pipes in Eskişehir for centuries.'
      ],
      religious: null,
      highlights: ['Odunpazarı painted houses', 'Odunpazarı Modern Museum (OMM)', 'Meerschaum Museum and carvers\' workshops', 'Porsuk river gondolas', 'Kurşunlu Mosque complex', 'Eskişehir\'s çibörek pastries'],
      hours: { summary: 'Streets always open; museums usually closed Monday', details: [], note: 'The city is busiest during term time, which is part of its charm.' },
      tickets: { required: 'partial', price: 'OMM and the small museums charge modest fees', how: ['Buy at the door.'], links: [{ label: 'Odunpazarı Modern Museum', url: 'https://www.omm.art' }] },
      gettingThere: { airport: 'Ankara Esenboğa (ESB) or Istanbul (IST)', road: 'Between Istanbul and Ankara.', transport: 'High-speed train (YHT): 1.5 hours from Ankara, about 3 from Istanbul (via Pendik).' },
      bestTime: 'April – June and September – October', duration: '1–2 days',
      dress: 'Casual.',
      tips: ['Buy a meerschaum pipe directly from a carver rather than a souvenir shop.', 'OMM is small but excellent — allow 90 minutes.', 'An easy stop between Istanbul and Cappadocia by train.']
    },
    {
      id: 'tuz-golu', name: 'Lake Tuz (Salt Lake)', nativeName: 'Tuz Gölü',
      region: 'central-anatolia', city: 'Şereflikoçhisar, Ankara / Aksaray', categories: ['nature'],
      coords: [38.7500, 33.3833], wiki: 'https://en.wikipedia.org/wiki/Lake_Tuz',
      tagline: 'A salt flat the size of a sea, pink with algae in high summer.',
      overview: [
        'Türkiye\'s second-largest lake is also one of its shallowest — barely a metre deep in winter and almost completely dry by August, leaving a crust of salt up to 30 cm thick that you can walk out onto for hundreds of metres.',
        'In July and August an alga turns parts of the water pink. The lake supplies a large share of Türkiye\'s table salt.'
      ],
      history: ['The lake lies in a closed basin with no outlet; everything that flows in evaporates. It is a protected Special Environmental Protection Area and an important breeding site for greater flamingos.'],
      religious: null,
      highlights: ['Walking on the dry salt crust', 'Pink water in late summer', 'Flamingo colonies', 'Sunset reflections in the thin water film', 'Roadside salt shops'],
      hours: { summary: 'Open at all times; roadside access points on the Ankara–Aksaray highway', details: ['Best in late July and August when the surface is dry and pink'], note: 'Do not drive onto the lakebed — vehicles sink through the crust.' },
      tickets: { required: false, price: 'Free (some access points charge for parking)', how: ['Stop at a signposted viewing area on the D750.'], links: [] },
      gettingThere: { airport: 'Ankara Esenboğa (ESB) or Nevşehir (NAV)', road: 'Along the D750 between Ankara and Aksaray — most people stop en route to Cappadocia.', transport: 'A car is necessary.' },
      bestTime: 'July – September for the dry crust and pink colour', duration: '1 hour',
      dress: 'Sunglasses — the glare is extreme — plus shoes you do not mind getting salty.',
      tips: ['Rinse your shoes and car afterwards: salt is corrosive.', 'Sunset is the photographers\' hour.', 'A natural break on the Ankara–Cappadocia drive.']
    },
    /* ======================= BLACK SEA REGION ======================= */
    {
      id: 'safranbolu', name: 'Safranbolu', nativeName: 'Safranbolu',
      region: 'black-sea', city: 'Safranbolu, Karabük', categories: ['heritage'], unesco: true, featured: true,
      coords: [41.2561, 32.6939], wiki: 'https://en.wikipedia.org/wiki/Safranbolu',
      tagline: 'A complete Ottoman town, preserved because the railway went elsewhere.',
      overview: [
        'Safranbolu is the textbook example of an Ottoman caravan town: about 1,000 protected timber-framed houses with white plaster, red roofs and overhanging upper storeys, set in three valleys around a 17th-century covered bazaar.',
        'Many houses are now small hotels, so you can sleep in one — with painted ceilings, built-in cupboards and a rotating cabinet that let women serve food without being seen.'
      ],
      history: [
        'The town prospered from the 13th century on the main caravan route between Gerede and the Black Sea coast, and reached its peak in the 18th and 19th centuries.',
        'When the railway and modern industry went to neighbouring Karabük instead, Safranbolu stagnated — and so survived. UNESCO listed it in 1994. Saffron, which gives the town its name, is still grown nearby.'
      ],
      religious: null,
      highlights: ['Cinci Han caravanserai and the Cinci Hamam', 'Kaymakamlar House museum', 'Hıdırlık Hill viewpoint over the roofs', 'The covered bazaar and blacksmiths\' street', 'Saffron farms at Davutobası', 'Crystal Terrace at Tokatlı Canyon', 'Turkish delight (lokum) shops'],
      hours: { summary: 'Town open always; house museums roughly 09:00–18:00', details: ['Many museums close on Monday'], note: 'Streets are steep cobbles — wheeled luggage is a struggle.' },
      tickets: { required: 'partial', price: 'Free to walk; house museums charge small fees', how: ['Pay at each museum door.'], links: [] },
      gettingThere: { airport: 'Ankara Esenboğa (ESB), about 230 km', road: '3 hours north of Ankara, 6 from Istanbul.', transport: 'Buses from Ankara and Istanbul to Karabük/Safranbolu.' },
      bestTime: 'May – June and September – October; autumn colour is lovely', duration: '1–2 days',
      dress: 'Shoes with grip for the cobbles.',
      tips: ['Stay in a restored konak — it is the whole experience.', 'Climb Hıdırlık Hill at sunset for the classic view over the roofs.', 'Buy real saffron from a shop that can show you the harvest; it is expensive for a reason.']
    },
    {
      id: 'sumela-monastery', name: 'Sumela Monastery', nativeName: 'Sümela Manastırı',
      region: 'black-sea', city: 'Maçka, Trabzon', categories: ['religious', 'heritage'], featured: true,
      coords: [40.6903, 39.6586], wiki: 'https://en.wikipedia.org/wiki/Sumela_Monastery',
      tagline: 'A Greek Orthodox monastery glued to a cliff 300 m above a forested valley.',
      overview: [
        'Sumela clings to a sheer rock face in the Altındere valley, its multi-storey façade seeming to grow out of the cliff. Inside are the rock church, with frescoes covering both the interior and the outer rock wall, a library, a kitchen and monks\' cells.',
        'The approach through fir forest and the first sight of the buildings in the mist are as memorable as the frescoes.'
      ],
      history: [
        'Founded, by tradition, in 386 CE around an icon of the Virgin said to have been painted by St Luke and carried here by angels. The present buildings are mostly 13th century onwards, endowed by the emperors of Trebizond.',
        'The monks left in 1923 with the population exchange. After years of rockfall danger the monastery was closed for restoration from 2015 and has reopened in stages.'
      ],
      religious: [
        'A Greek Orthodox monastery dedicated to the Virgin Mary. A liturgy is celebrated here on 15 August, the feast of the Dormition, by special permission — the first was held in 2010 after 88 years.'
      ],
      highlights: ['The cliff-face setting', 'Rock church frescoes, inside and out', 'The aqueduct along the cliff', 'Altındere valley forest', 'Trabzon Hagia Sophia and Uzungöl nearby'],
      hours: { summary: 'Open daily, daytime hours; some sections may be closed for conservation', details: ['Access is by shuttle from the valley car park plus a steep walk', 'Can close at short notice for rockfall risk or snow'], note: 'Check it is open before making the trip.' },
      tickets: { required: true, price: 'National park entry plus monastery ticket; shuttle extra', how: ['Pay at the park gate; buy the shuttle ticket there too.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Trabzon (TZX), about 50 km', road: '46 km south of Trabzon via Maçka.', transport: 'Dolmuş tours leave from Trabzon\'s Atatürk Square each morning.' },
      bestTime: 'May – October; mist is common and atmospheric', duration: 'Half a day from Trabzon',
      dress: 'Walking shoes, a rain layer — the eastern Black Sea is wet all year.',
      tips: ['Go early: cloud often fills the valley by midday.', 'The climb from the shuttle drop-off is steep; allow 20–30 minutes.', 'Combine with Uzungöl only if you have a full long day — they are in opposite directions.']
    },
    {
      id: 'uzungol', name: 'Uzungöl', nativeName: 'Uzungöl',
      region: 'black-sea', city: 'Çaykara, Trabzon', categories: ['nature'],
      coords: [40.6208, 40.2928], wiki: 'https://en.wikipedia.org/wiki/Uzung%C3%B6l',
      tagline: 'A lake and a minaret in a steep green valley, usually under cloud.',
      overview: [
        'Uzungöl — "long lake" — formed when a landslide dammed a mountain stream. The village mosque reflected in the water, with wooded slopes rising steeply on all sides, is one of the most reproduced images in Turkish tourism.',
        'Above the village, rough tracks lead up to the high summer pastures (yaylas) at Şekersu and Demirkapı, where the views open out above the cloud.'
      ],
      history: ['The valley was settled by Greek-speaking and Turkish mountain communities who moved up to the yaylas each summer with their animals — a transhumance still partly practised today.'],
      religious: null,
      highlights: ['The lake and the mosque reflection', 'Walks round the shore', '4x4 trips to the high yaylas', 'Trout restaurants over the stream', 'Cloud forest and waterfalls'],
      hours: { summary: 'Open all year; the yayla tracks are closed by snow in winter', details: ['Heavy development has crowded the lakeshore — the upper valley is quieter'], note: 'Very popular with Gulf visitors in July and August; traffic jams the single road.' },
      tickets: { required: false, price: 'Free (parking charged)', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Trabzon (TZX), about 100 km', road: '99 km from Trabzon via Of and Çaykara; the last section is steep and narrow.', transport: 'Dolmuş from Trabzon in season; most visitors come on a tour or by car.' },
      bestTime: 'June and September; avoid August crowds', duration: 'Full day from Trabzon, or overnight',
      dress: 'Rain jacket and warm layers — it is cool and wet even in summer.',
      tips: ['Stay overnight: the day-trippers leave by 17:00 and the valley empties.', 'The real reward is the yayla road above the village, not the lakeshore.', 'Expect rain. The Black Sea coast is the wettest part of Türkiye.']
    },
    {
      id: 'ayder-rize', name: 'Ayder & the Kaçkar Mountains', nativeName: 'Ayder ve Kaçkar Dağları',
      region: 'black-sea', city: 'Çamlıhemşin, Rize', categories: ['nature'],
      coords: [40.9522, 41.1061], wiki: 'https://en.wikipedia.org/wiki/Ayder',
      tagline: 'Hot springs, tea terraces and Türkiye\'s best alpine trekking.',
      overview: [
        'Ayder is a highland village of wooden houses at 1,350 m, with thermal baths and waterfalls, serving as the base for the Kaçkar Mountains — a range of granite peaks rising to 3,937 m with glacial lakes and summer pastures.',
        'The valleys below are terraced with tea, and medieval stone arch bridges cross the rivers. The Zilkale fortress stands on a spur in the Fırtına valley.'
      ],
      history: ['The Hemşin people of these valleys have their own dialect and traditions. The stone bridges and the castles date from the medieval period of the Empire of Trebizond and after.'],
      religious: null,
      highlights: ['Ayder hot springs', 'Trekking to Kaçkar peaks and glacial lakes', 'Zilkale and Kale-i Bala fortresses', 'Pokut and Sal yaylas above the cloud', 'Ottoman arch bridges in the Fırtına valley', 'Tea plantations and muhlama (cheese fondue)'],
      hours: { summary: 'Accessible year-round; high trails are snow-free roughly July – September', details: ['Yayla roads need a 4x4 or a local minibus'], note: 'Mountain weather changes fast — do not trek without checking forecasts.' },
      tickets: { required: 'partial', price: 'Free; thermal baths and 4x4 transfers are paid', how: ['Arrange guides and jeep transfers in Ayder or Çamlıhemşin.'], links: [] },
      gettingThere: { airport: 'Trabzon (TZX) 170 km, or Rize-Artvin (RZV)', road: 'Via Ardeşen or Pazar on the coast, then up the Fırtına valley.', transport: 'Dolmuş from Pazar and Ardeşen; a car helps for the side valleys.' },
      bestTime: 'June – September for trekking; the valleys are green all year', duration: '2–4 days',
      dress: 'Waterproofs always, plus proper boots for the mountains.',
      tips: ['Sleep in a wooden yayla house at Pokut for the cloud-sea sunrise.', 'Hire a local guide for the Kaçkar traverses — the weather is the risk, not the terrain.', 'Try muhlama, hamsi (anchovies) and Laz böreği.']
    },
    {
      id: 'amasya', name: 'Amasya', nativeName: 'Amasya',
      region: 'black-sea', city: 'Amasya', categories: ['heritage', 'archaeology'],
      coords: [40.6539, 35.8339], wiki: 'https://en.wikipedia.org/wiki/Amasya',
      tagline: 'Ottoman mansions on a river, under the rock tombs of Pontic kings.',
      overview: [
        'Amasya is squeezed into a gorge where the Yeşilırmak river runs between cliffs. Along the north bank stand restored timber Ottoman houses, lit at night and reflected in the water; above them, cut into the rock face, are the monumental tombs of the kings of Pontus.',
        'A castle crowns the ridge, and a tunnel of unknown purpose — the "Maiden\'s Palace" steps — descends inside the cliff.'
      ],
      history: [
        'Amasya was the capital of the Kingdom of Pontus from about 300 BCE, and the birthplace of the geographer Strabo around 64 BCE.',
        'Under the Ottomans it was where crown princes were sent to learn government; several sultans served their apprenticeship here, which is why the town has an unusual density of fine mosques and medreses.'
      ],
      religious: ['The Bimarhane (1308) was a Mongol-era hospital that treated mental illness with music. The Sultan Bayezid II Mosque complex of 1486 is among the finest in Anatolia.'],
      highlights: ['Pontic rock tombs lit at night', 'Ottoman houses on the riverbank', 'Amasya Castle and the Harşena cliff', 'Sultan Bayezid II Mosque complex', 'Bimarhane (Mongol hospital)', 'Hazeranlar Mansion museum', 'Amasya apples'],
      hours: { summary: 'Town always open; museums and the castle keep daytime hours', details: ['The rock tombs are floodlit after dark'], note: 'Castle access is by a steep road or a long climb.' },
      tickets: { required: 'partial', price: 'Small fees for museums and the tombs', how: ['Pay at each site.'], links: [] },
      gettingThere: { airport: 'Amasya Merzifon (MZH), 35 km, or Samsun (SZF) 130 km', road: 'Between Samsun and Tokat in the inner Black Sea region.', transport: 'Trains and buses from Samsun, Ankara and Sivas.' },
      bestTime: 'April – June and September – October', duration: '1–2 days',
      dress: 'Walking shoes.',
      tips: ['Stay in a riverside Ottoman house for the lit-tomb view.', 'Walk the north bank after dark — this is the town\'s best hour.', 'Amasya is an easy stop between Cappadocia and the Black Sea coast.']
    },
    {
      id: 'amasra', name: 'Amasra', nativeName: 'Amasra',
      region: 'black-sea', city: 'Amasra, Bartın', categories: ['coast', 'heritage'],
      coords: [41.7461, 32.3850], wiki: 'https://en.wikipedia.org/wiki/Amasra',
      tagline: 'A Genoese fortress town on two bays, famous for fish and wooden spoons.',
      overview: [
        'Amasra sits on a small peninsula and an island joined by a Roman bridge, with Byzantine and Genoese walls still ringing the old town. Two harbours face in opposite directions, so one is always sheltered.',
        'It is the prettiest town on the western Black Sea, known for seafood, carved wooden souvenirs and the coastal road east towards Sinop.'
      ],
      history: [
        'Founded as Sesamus and renamed Amastris in the 3rd century BCE. The Genoese held it from 1270 until the Ottoman conquest in 1460.',
        'The Kuşkayası Road Monument nearby, a Roman relief carved into the rock, marks an ancient road.'
      ],
      religious: null,
      highlights: ['Genoese castle walls and gates', 'Kemere (Roman) Bridge to Boztepe island', 'Amasra Museum', 'Fish restaurants on the harbour', 'Carved boxwood souvenirs', 'The coastal road to Çakraz and Kurucaşile'],
      hours: { summary: 'Town always open; museum closed Monday', details: [], note: 'Weekends in summer are busy with visitors from Ankara and Istanbul.' },
      tickets: { required: 'partial', price: 'Free; small museum fee', how: ['No booking needed.'], links: [] },
      gettingThere: { airport: 'Istanbul (IST), about 400 km', road: '17 km north of Bartın; 6 hours from Istanbul.', transport: 'Buses to Bartın, then dolmuş.' },
      bestTime: 'June – September', duration: '1–2 days',
      dress: 'A windproof layer — the Black Sea is breezy.',
      tips: ['Eat the local "Amasra salad" with your fish; it comes with a dozen small plates.', 'Drive the coast road east — it is one of the best in the country.', 'Combine with Safranbolu, 90 minutes inland.']
    },
    {
      id: 'trabzon-hagia-sophia', name: 'Hagia Sophia of Trabzon', nativeName: 'Trabzon Ayasofya Camii',
      region: 'black-sea', city: 'Trabzon', categories: ['religious', 'heritage'], muslimSite: true,
      coords: [41.0000, 39.6833], wiki: 'https://en.wikipedia.org/wiki/Hagia_Sophia,_Trabzon',
      tagline: 'A 13th-century Byzantine church above the sea, with outstanding frescoes.',
      overview: [
        'Built by the Empire of Trebizond, this small cross-in-square church stands in a garden above the Black Sea. Its frescoes — a complete programme of the life of Christ — are among the finest late Byzantine painting to survive in Anatolia.',
        'A carved stone frieze of Adam and Eve runs across the south porch, unusual in Byzantine art and showing Seljuk and Georgian influence.'
      ],
      history: [
        'Built between 1238 and 1263 under Manuel I of Trebizond. It became a mosque after the Ottoman conquest of 1461, a museum in 1964 after British-led restoration, and a mosque again in 2013.',
        'Some frescoes are now screened or curtained during prayer; arrangements have varied.'
      ],
      religious: ['A working mosque today. Visitors are welcome outside prayer times.'],
      highlights: ['Fresco cycle in the narthex and dome', 'Adam and Eve stone frieze', 'The separate bell tower', 'Garden setting above the sea', 'Atatürk Pavilion and Boztepe viewpoint nearby'],
      hours: { summary: 'Open outside prayer times', details: [], note: 'Visitor access to the frescoes has changed more than once — check locally.' },
      tickets: { required: false, price: 'Free', how: ['No ticket.'], links: [] },
      gettingThere: { airport: 'Trabzon (TZX), 8 km', road: '3 km west of Trabzon centre on the coast road.', transport: 'City bus or dolmuş from Meydan square.' },
      bestTime: 'May – October', duration: '1 hour',
      dress: 'Modest clothing; women cover their hair, shoes removed.',
      tips: ['Combine with Sumela and Uzungöl from a Trabzon base.', 'Boztepe hill gives the best view over the city and the sea.', 'Trabzon is the gateway to Georgia — the border is 3 hours east.']
    },
    {
      id: 'yedigoller', name: 'Yedigöller National Park', nativeName: 'Yedigöller Milli Parkı',
      region: 'black-sea', city: 'Bolu', categories: ['nature'],
      coords: [40.9469, 31.7472], wiki: 'https://en.wikipedia.org/wiki/Yedig%C3%B6ller_National_Park',
      tagline: 'Seven landslide lakes in a beech forest that turns scarlet in autumn.',
      overview: [
        'Yedigöller — "Seven Lakes" — is a small national park where landslides dammed a valley to create a chain of lakes surrounded by beech, oak, hornbeam and fir.',
        'It is one of the most photographed autumn landscapes in Türkiye, with mist on the water and the whole forest turning red, orange and gold in late October.'
      ],
      history: ['Declared a national park in 1965. The forest is old-growth in places and home to deer, wild boar, bears and more than a hundred bird species.'],
      religious: null,
      highlights: ['Büyükgöl and Deringöl lakes', 'Autumn colour in late October', 'Walking trails between the lakes', 'Kapankaya viewpoint', 'Camping and bungalows inside the park'],
      hours: { summary: 'Open daily; the access road can close after heavy snow', details: ['Autumn weekends are extremely busy — go on a weekday'], note: 'The final 40 km from Bolu is a rough forest road.' },
      tickets: { required: true, price: 'National park entry fee per vehicle and person', how: ['Pay at the park gate.'], links: [{ label: 'Nature Conservation and National Parks', url: 'https://www.tarimorman.gov.tr' }] },
      gettingThere: { airport: 'Istanbul (IST) or Ankara (ESB), both about 3 hours', road: '42 km north of Bolu on an unsurfaced forest road, or via Yığılca.', transport: 'No public transport — a car is essential.' },
      bestTime: 'Last two weeks of October for colour; May for flowers', duration: 'Full day or overnight',
      dress: 'Walking shoes and a rain layer.',
      tips: ['Arrive before 09:00 in autumn for mist on the lakes and no crowds.', 'Fuel up in Bolu; there are no services in the park.', 'Book park bungalows months in advance for October.']
    },

    /* ======================= EASTERN ANATOLIA ======================= */
    {
      id: 'ani', name: 'Ani', nativeName: 'Ani Ören Yeri',
      region: 'eastern-anatolia', city: 'Kars', categories: ['archaeology', 'heritage'], unesco: true, featured: true,
      coords: [40.5078, 43.5725], wiki: 'https://en.wikipedia.org/wiki/Ani',
      tagline: 'The abandoned "city of 1,001 churches" on the Armenian border.',
      overview: [
        'Ani stands on a windswept plateau above a gorge that forms the border with Armenia. Within its walls lie the ruins of a medieval capital: a cathedral, several churches, a mosque, a citadel and the outline of streets, with grass and wind where 100,000 people once lived.',
        'The emptiness is the point. There is no modern town, no café inside the walls, and the scale of the ruins against the plateau is extraordinary.'
      ],
      history: [
        'Ani was the capital of the Bagratid Kingdom of Armenia from 961 and one of the largest cities in the world at its peak, on a branch of the Silk Road.',
        'It was sacked by the Seljuks in 1064, devastated by an earthquake in 1319 and gradually abandoned. The Cathedral of Ani (1001) was designed by Trdat, the architect who also repaired the dome of Hagia Sophia. UNESCO listed the site in 2016.'
      ],
      religious: ['Ani was a major centre of Armenian Christianity. The Church of St Gregory of Tigran Honents (1215) retains remarkable frescoes. The Menuchehr Mosque is among the oldest Turkish mosques in Anatolia.'],
      highlights: ['Cathedral of Ani', 'Church of St Gregory of Tigran Honents and its frescoes', 'Church of the Redeemer, split in half by lightning', 'Menuchehr Mosque above the gorge', 'The Lion Gate and the city walls', 'The ruined bridge over the Akhurian river'],
      hours: { summary: 'Open daily, daylight hours', details: ['The site is 1 km across; allow walking time', 'No shade, no shelter, and the wind is relentless'], note: 'This is a sensitive border zone — stay on the marked paths and do not photograph military posts.' },
      tickets: { required: true, price: 'Paid entry', how: ['Pay at the gate. No permit is needed any more.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Kars Harakani (KSY), about 50 km', road: '45 km east of Kars on a good road.', transport: 'Taxi or shared minibus from Kars; agree a return time with your driver.' },
      bestTime: 'May – October. Winter here reaches −30 °C', duration: 'Half a day',
      dress: 'Windproof and warm layers in any season, plus sturdy shoes.',
      tips: ['Take the Eastern Express (Doğu Ekspresi) train to Kars for the journey itself.', 'Bring water and food — there is nothing at the site.', 'Kars has Russian-era architecture, its own cheese and the setting of Orhan Pamuk\'s novel Snow.']
    },
    {
      id: 'akdamar-lake-van', name: 'Akdamar Island & Lake Van', nativeName: 'Akdamar Adası ve Van Gölü',
      region: 'eastern-anatolia', city: 'Gevaş, Van', categories: ['religious', 'heritage', 'nature'], featured: true,
      coords: [38.3403, 43.0375], wiki: 'https://en.wikipedia.org/wiki/Cathedral_of_the_Holy_Cross,_Aghtamar',
      tagline: 'A 10th-century Armenian church carved with biblical scenes, on an island in a soda lake.',
      overview: [
        'Lake Van is Türkiye\'s largest lake, a highly alkaline inland sea at 1,640 m surrounded by volcanoes. On Akdamar Island, a short boat ride offshore, stands the Church of the Holy Cross, its outer walls covered in deeply carved reliefs of Adam and Eve, David and Goliath, Jonah and the whale.',
        'The island is planted with almond trees that blossom in spring, and seagulls nest among the ruins.'
      ],
      history: [
        'Built between 915 and 921 for King Gagik I Artsruni of Vaspurakan by the architect-monk Manuel, as a palatine church beside a royal palace that no longer survives.',
        'It was abandoned in 1915 and left derelict until a restoration completed in 2007. Since 2010 a Divine Liturgy has been celebrated once a year.'
      ],
      religious: ['An Armenian Apostolic church, now a monument museum. An annual liturgy is held, usually in September, drawing Armenian pilgrims from around the world.'],
      highlights: ['The exterior relief carvings', 'Frescoes inside the church', 'Almond blossom in April', 'Boat crossing over turquoise water', 'Van Castle and the old city ruins', 'Van cats with odd-coloured eyes', 'Van breakfast (kahvaltı) — a local institution'],
      hours: { summary: 'Island open daily; boats run through the day in season', details: ['Boats leave when reasonably full, or you can pay for a private crossing', 'Services are reduced in winter and cancelled in rough weather'], note: 'The crossing takes about 20 minutes each way.' },
      tickets: { required: true, price: 'Boat fare plus a site entry fee', how: ['Pay at the jetty at Gevaş.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Van Ferit Melen (VAN), about 60 km', road: '45 km west of Van city on the lake shore road.', transport: 'Dolmuş from Van towards Gevaş/Tatvan — ask for Akdamar iskelesi.' },
      bestTime: 'April for blossom; May – October generally', duration: 'Half a day',
      dress: 'Layers — it is high and the wind off the lake is cold.',
      tips: ['Have a Van breakfast in the city before you go; it is a multi-hour event.', 'The water is alkaline and soapy to the touch — swimming is possible but rinse afterwards.', 'Drive on round the lake to Tatvan and Nemrut Crater Lake if you have a spare day.']
    },
    {
      id: 'ishak-pasha-palace', name: 'İshak Pasha Palace', nativeName: 'İshak Paşa Sarayı',
      region: 'eastern-anatolia', city: 'Doğubayazıt, Ağrı', categories: ['heritage'], featured: true,
      coords: [39.5219, 44.1272], wiki: 'https://en.wikipedia.org/wiki/Ishak_Pasha_Palace',
      tagline: 'A fortified palace on a crag, with Mount Ararat filling the horizon.',
      overview: [
        'İshak Pasha Palace sits on a rock terrace above Doğubayazıt, looking out over a plain towards Mount Ararat. It mixes Seljuk, Ottoman, Armenian, Georgian and Persian elements in one building, with a carved portal, a harem, a mosque, a hamam and a mausoleum, all under a modern protective roof.',
        'It was one of the first buildings in the region with central heating, fed through ducts in the walls.'
      ],
      history: [
        'Begun in 1685 and completed in 1784 by the local Çıldır dynasty, chiefly Çolak Abdi Pasha and his son İshak Pasha, who governed this frontier district semi-independently.',
        'The gold-plated palace doors were removed to Russia in 1917 and are said to be in the Hermitage.'
      ],
      religious: ['The palace mosque is still intact, with carved stone decoration and a dome.'],
      highlights: ['The carved main portal', 'Harem courtyard and the domed mosque', 'Views to Mount Ararat', 'Eski Bayazıt mosque and castle ruins above', 'The meteor crater and "Noah\'s Ark" formation nearby'],
      hours: { summary: 'Open daily, daytime hours', details: ['Snow can block the access road in winter'], note: 'The protective roof is modern and divides opinion, but it has saved the building.' },
      tickets: { required: true, price: 'Paid entry', how: ['Pay at the gate.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Ağrı (AJI) 100 km, or Iğdır (IGD) 50 km', road: '6 km uphill from Doğubayazıt, near the Iranian border.', transport: 'Taxi from Doğubayazıt; agree a waiting time.' },
      bestTime: 'June – September; the winters are brutal', duration: '2 hours',
      dress: 'Warm windproof layers — it is at 2,000 m.',
      tips: ['Late afternoon light on the façade with Ararat behind is the photograph.', 'Combine with the Ararat viewpoints and the alleged "Noah\'s Ark" site at Durupınar.', 'This is close to the Iranian border — carry your passport.']
    },
    {
      id: 'mount-ararat', name: 'Mount Ararat', nativeName: 'Ağrı Dağı',
      region: 'eastern-anatolia', city: 'Doğubayazıt, Ağrı', categories: ['nature'],
      coords: [39.7023, 44.2989], wiki: 'https://en.wikipedia.org/wiki/Mount_Ararat',
      tagline: 'Türkiye\'s highest peak, a snow-capped volcano of 5,137 m.',
      overview: [
        'Ararat is a dormant stratovolcano rising straight off the plain, with Little Ararat (3,896 m) beside it. The snow cap is visible for a hundred kilometres and dominates every view in the region.',
        'It is climbed as a non-technical but high-altitude trek, usually over four to five days with a camp at about 4,200 m, through a licensed agency with a permit.'
      ],
      history: [
        'The Book of Genesis says Noah\'s Ark came to rest "on the mountains of Ararat", and the peak has been identified with that story for centuries, though the text names a region, not this summit.',
        'The first recorded modern ascent was by Friedrich Parrot in 1829. The mountain is a national symbol for Armenians, for whom it is visible from Yerevan.'
      ],
      religious: ['Ararat has deep significance in Jewish, Christian and Islamic tradition through the story of Noah. The Durupınar formation 30 km away is claimed by some as the Ark\'s remains; most geologists consider it a natural feature.'],
      highlights: ['The summit climb (guided, with permit)', 'Views from the Doğubayazıt plain', 'Little Ararat', 'Meteor crater at Gürbulak', 'Durupınar "Noah\'s Ark" site', 'Lake Balık for trout'],
      hours: { summary: 'Climbing season roughly late June to early September', details: ['A climbing permit and a licensed Turkish guide are required', 'Apply for permits well in advance through an agency'], note: 'Altitude sickness is the main risk; the route itself is a walk-up on scree and snow.' },
      tickets: { required: true, price: 'Permit and guided expedition costs', how: ['Book through a licensed mountaineering agency, which handles the permit.', 'Do not attempt the climb independently — it is not permitted.'], links: [] },
      gettingThere: { airport: 'Iğdır (IGD) or Ağrı (AJI)', road: 'Base camps are reached from Doğubayazıt.', transport: 'Agencies arrange transfers from Doğubayazıt or Iğdır.' },
      bestTime: 'July and August for climbing; any clear day for the view', duration: 'Viewing: 1 day. Climbing: 4–5 days',
      dress: 'Full mountaineering kit for the climb, including crampons and an ice axe for the summit day.',
      tips: ['Even if you are not climbing, the drive between Iğdır and Doğubayazıt gives superb views.', 'Acclimatise properly: the summit day starts around 02:00 from high camp.', 'Clouds often hide the peak by mid-morning — look early.']
    },
    {
      id: 'arslantepe', name: 'Arslantepe Mound', nativeName: 'Arslantepe Höyüğü',
      region: 'eastern-anatolia', city: 'Battalgazi, Malatya', categories: ['archaeology'], unesco: true,
      coords: [38.3819, 38.3617], wiki: 'https://en.wikipedia.org/wiki/Arslantepe',
      tagline: 'Where the world\'s oldest known palace and earliest swords were found.',
      overview: [
        'Arslantepe is a 30 m mound with about 6,000 years of continuous occupation. Its great discovery is a monumental public building of around 3300 BCE — argued to be the earliest known palace — with wall paintings, storerooms and a system of clay sealings that shows early bureaucracy.',
        'A set of nine swords found here, from around 3000 BCE, are among the oldest in the world. A protective shelter and walkways let visitors see the mud-brick architecture in place.'
      ],
      history: [
        'Occupied from at least the 5th millennium BCE through the Hittite and Neo-Hittite periods, when stone lion sculptures — "arslan tepe", the hill of lions — gave the site its modern name.',
        'Italian archaeologists have excavated here since 1961. UNESCO inscribed the mound in 2021.'
      ],
      religious: null,
      highlights: ['The 4th-millennium palace complex', 'Wall paintings in situ', 'Neo-Hittite lion gate sculptures (casts)', 'Visitor walkways over the excavation', 'Malatya Museum and the apricot orchards'],
      hours: { summary: 'Open daily, daytime hours', details: [], note: 'Mud-brick architecture needs interpretation — read the panels or take a guide.' },
      tickets: { required: true, price: 'Small entrance fee', how: ['Pay at the gate.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Malatya Erhaç (MLX), about 30 km', road: '6 km north-east of Malatya, near Orduzu.', transport: 'Taxi or dolmuş from Malatya.' },
      bestTime: 'April – June and September – October', duration: '1.5 hours',
      dress: 'Sun protection; the mound is exposed.',
      tips: ['Malatya produces most of the world\'s dried apricots — buy them at the Mişmiş market.', 'Battalgazi\'s old town and Seljuk Great Mosque are close by.', 'Malatya was affected by the 2023 earthquakes; check accommodation before travelling.']
    },
    {
      id: 'erzurum', name: 'Erzurum', nativeName: 'Erzurum',
      region: 'eastern-anatolia', city: 'Erzurum', categories: ['heritage', 'nature'],
      coords: [39.9086, 41.2769], wiki: 'https://en.wikipedia.org/wiki/Erzurum',
      tagline: 'Seljuk stone at 1,900 m, and the ski slopes of Palandöken.',
      overview: [
        'Erzurum is the great city of the eastern highlands, cold, stone-built and serious. Its Çifte Minareli Medrese of the 1250s, with twin fluted brick minarets over a carved portal, is one of the masterpieces of Seljuk architecture, and the Yakutiye Medrese and the Üç Kümbetler tombs are close by.',
        'Palandöken, rising directly above the city to 3,125 m, has the longest ski runs in Türkiye and a season that can last into April.'
      ],
      history: [
        'A frontier city fought over by Byzantines, Arabs, Seljuks, Mongols, Safavids, Ottomans and Russians. The Erzurum Congress of 1919, chaired by Mustafa Kemal, was a decisive moment in the national movement.',
        'The city hosted the 2011 Winter Universiade, which built most of its modern ski infrastructure.'
      ],
      religious: ['The Great Mosque (Ulu Cami) of 1179 and the Lala Mustafa Pasha Mosque are working mosques in the old centre.'],
      highlights: ['Çifte Minareli Medrese', 'Yakutiye Medrese and its Turkish-Islamic Arts Museum', 'Üç Kümbetler tombs', 'Erzurum Castle and its clock tower', 'Palandöken ski resort', 'Oltu stone jewellery', 'Cağ kebabı, cooked horizontally'],
      hours: { summary: 'Museums closed Monday; ski season roughly December – April', details: [], note: 'Winter temperatures routinely fall below −20 °C.' },
      tickets: { required: 'partial', price: 'Small museum fees; ski passes separate', how: ['Lift passes are bought at the resort.'], links: [] },
      gettingThere: { airport: 'Erzurum (ERZ), 10 km', road: 'On the main eastern highway and the Eastern Express railway.', transport: 'Flights from Istanbul and Ankara; the Doğu Ekspresi train stops here.' },
      bestTime: 'January – March for skiing; June – September otherwise', duration: '1–2 days',
      dress: 'Serious winter clothing from November to April.',
      tips: ['Palandöken hotels are on the piste, 10 minutes from the city centre — rare convenience.', 'Try cağ kebabı, the local horizontal-spit lamb.', 'Erzurum makes a good overnight break on the Eastern Express journey to Kars.']
    },

    /* ======================= SOUTHEASTERN ANATOLIA ======================= */
    {
      id: 'gobekli-tepe', name: 'Göbekli Tepe', nativeName: 'Göbekli Tepe',
      region: 'southeastern-anatolia', city: 'Şanlıurfa', categories: ['archaeology'], unesco: true, featured: true,
      coords: [37.2233, 38.9224], wiki: 'https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe',
      tagline: 'Monumental stone circles raised about 11,500 years ago — before pottery, before farming.',
      overview: [
        'Göbekli Tepe is a hill crowned by circular enclosures of T-shaped limestone pillars up to 5.5 m tall, carved with foxes, boars, snakes, scorpions and vultures, and with human arms and hands on some.',
        'They were built by hunter-gatherers around 9500–8000 BCE — roughly 6,000 years before Stonehenge — which overturned the assumption that farming had to come before monumental architecture. A modern shelter covers the main excavation, with walkways above it.'
      ],
      history: [
        'Noticed in a 1963 survey but dismissed as a medieval cemetery, the site was recognised for what it was by Klaus Schmidt in 1994, who excavated it until his death in 2014.',
        'Only a fraction has been dug; geophysics suggests many more enclosures remain buried. UNESCO inscribed it in 2018. Nearby Karahan Tepe, part of the same "Taş Tepeler" culture, is now also open.'
      ],
      religious: ['The enclosures are usually interpreted as ritual or gathering places rather than dwellings — which is why Göbekli Tepe is often called the world\'s first temple, though archaeologists debate the term.'],
      highlights: ['Enclosures C and D with the tallest pillars', 'Animal carvings on the pillars', 'The visitor centre film and models', 'Şanlıurfa Archaeology Museum, with a full-size replica enclosure', 'The Urfa Man statue, the oldest life-size human sculpture', 'Karahan Tepe, 60 km away'],
      hours: { summary: 'Open daily, daytime hours', details: ['A shuttle runs from the visitor centre to the shelter', 'Summer heat here is extreme — go early'], note: 'You view the enclosures from raised walkways; you cannot walk among the pillars.' },
      tickets: { required: true, price: 'Paid entry including the shuttle', how: ['Buy at the visitor centre; combined tickets with Karahan Tepe may be available.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Şanlıurfa GAP (GNY), about 50 km', road: '18 km north-east of Şanlıurfa.', transport: 'Taxi or tour from Şanlıurfa; no scheduled public transport.' },
      bestTime: 'March – May and October – November; summer exceeds 40 °C', duration: '2 hours',
      dress: 'Hat, sunscreen and plenty of water.',
      tips: ['Visit the Şanlıurfa museum first — the replica and Urfa Man give context the site cannot.', 'Go at opening to beat the heat and the groups.', 'Add Karahan Tepe if you have a full day; it is less visited and more raw.']
    },
    {
      id: 'sanliurfa-balikligol', name: 'Şanlıurfa & Balıklıgöl', nativeName: 'Şanlıurfa ve Balıklıgöl',
      region: 'southeastern-anatolia', city: 'Şanlıurfa', categories: ['religious', 'heritage'], muslimSite: true, featured: true,
      coords: [37.1500, 38.7875], wiki: 'https://en.wikipedia.org/wiki/Bal%C4%B1kl%C4%B1g%C3%B6l',
      tagline: 'The city of prophets, and the sacred carp pools of Abraham.',
      overview: [
        'Şanlıurfa — ancient Edessa, known simply as Urfa — is one of the oldest continuously inhabited cities on Earth and the most atmospheric in the south-east. At its heart is Balıklıgöl, a pool of sacred carp in a garden of mosques and arcades below the castle.',
        'The old city around it is a warren of stone courtyards, the Gümrük Han coffee house, a copper bazaar and the covered Kapalı Çarşı, where men still play the saz and sing at evening gatherings (sıra gecesi).'
      ],
      history: [
        'Edessa was a centre of early Syriac Christianity and of learning. The city was renamed Şanlıurfa — "glorious Urfa" — for its resistance during the War of Independence.',
        'Two Corinthian columns on the castle hill are known as the Throne of Nimrod.'
      ],
      religious: [
        'Islamic tradition holds that Abraham (Ibrahim) was born in a cave here and that King Nimrod had him thrown from the castle into a fire, which God turned into water and the burning logs into fish — hence the sacred carp, which must not be caught or eaten.',
        'The Cave of Abraham and the Mevlid-i Halil Mosque beside the pool are places of pilgrimage. Job (Eyüp) is also associated with the city, with a cave and a well shown to visitors.'
      ],
      highlights: ['Balıklıgöl sacred carp pools', 'Cave of Abraham and Mevlid-i Halil Mosque', 'Şanlıurfa Archaeology Museum and Haleplibahçe mosaics', 'Urfa Castle and the Throne of Nimrod columns', 'Covered bazaar and Gümrük Han', 'Sıra gecesi music evenings', 'Urfa kebab and çiğ köfte'],
      hours: { summary: 'Pools and gardens open all day; mosques outside prayer times', details: ['The museum is usually closed on Monday', 'Evenings are the best time to walk the old city'], note: 'Modest dress is expected around Balıklıgöl.' },
      tickets: { required: 'partial', price: 'Pools and mosques free; museums charge entry', how: ['No booking needed. Fish food is sold at the pools.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Şanlıurfa GAP (GNY), 35 km', road: 'City centre; the old town is walkable.', transport: 'Flights from Istanbul and Ankara; buses from Gaziantep (2.5 hours).' },
      bestTime: 'March – May and October – November', duration: '2 days with Göbekli Tepe and Harran',
      dress: 'Conservative dress, especially at Balıklıgöl — this is a religious site and a conservative city.',
      tips: ['Do not try to catch or feed the fish anything but the food sold on site.', 'The archaeology museum is one of the best in the country — allow two hours.', 'Ask your hotel about a sıra gecesi evening; it is the real cultural experience here.']
    },
    {
      id: 'harran', name: 'Harran', nativeName: 'Harran',
      region: 'southeastern-anatolia', city: 'Harran, Şanlıurfa', categories: ['heritage', 'archaeology', 'religious'],
      coords: [36.8653, 39.0317], wiki: 'https://en.wikipedia.org/wiki/Harran',
      tagline: 'Beehive mud houses on a plain mentioned in Genesis.',
      overview: [
        'Harran is a village of conical mud-brick "beehive" houses on the hot Mesopotamian plain near the Syrian border, beside the ruins of a great medieval university, a castle and the stump of the oldest mosque in Anatolia.',
        'A few beehive houses are kept as a visitor centre, where you can sit inside and feel how effectively the shape keeps out 45 °C heat.'
      ],
      history: [
        'Harran appears in Genesis as the place where Abraham\'s family settled on the way from Ur to Canaan, and where he lived before departing for Canaan.',
        'It was a famous centre of the moon god Sin, then of a pagan community that survived into Islamic times, and in the 8th–9th centuries a hub of Greek-to-Arabic translation. The Grand Mosque of Harran was built in the 740s; its tall square minaret still stands.'
      ],
      religious: ['Harran\'s Abrahamic associations make it a point of interest for Jews, Christians and Muslims alike. The ruined Ulu Cami is among the earliest monumental mosques in Anatolia.'],
      highlights: ['Beehive houses', 'Ruins of the Grand Mosque and its minaret', 'Harran Castle', 'The university mound (Höyük)', 'Shadow puppets and local hospitality', 'Border-plain sunsets'],
      hours: { summary: 'Open daily, daytime hours', details: ['Midday summer heat is dangerous — visit early or late'], note: 'Close to the Syrian border; carry your passport.' },
      tickets: { required: 'partial', price: 'Small fees at the beehive house centre and the ruins', how: ['Pay locally; most people come on a tour from Şanlıurfa.'], links: [] },
      gettingThere: { airport: 'Şanlıurfa GAP (GNY)', road: '45 km south of Şanlıurfa.', transport: 'Dolmuş from Şanlıurfa, or a half-day tour.' },
      bestTime: 'March – May and October – November', duration: 'Half a day',
      dress: 'Modest clothing, a hat and plenty of water.',
      tips: ['Combine with Göbekli Tepe in one long day from Şanlıurfa.', 'Expect children selling souvenirs; a friendly no is fine.', 'The nearby Şuayb City and Soğmatar ruins are rewarding if you have a car.']
    },
    {
      id: 'mount-nemrut', name: 'Mount Nemrut', nativeName: 'Nemrut Dağı',
      region: 'southeastern-anatolia', city: 'Kâhta, Adıyaman', categories: ['archaeology', 'nature'], unesco: true, featured: true,
      coords: [37.9808, 38.7411], wiki: 'https://en.wikipedia.org/wiki/Mount_Nemrut',
      tagline: 'Colossal stone heads around a royal tomb at 2,134 m, best seen at sunrise.',
      overview: [
        'On the summit of Nemrut Dağı, a king built himself a 50 m artificial mound of broken stone and ringed it with terraces of enormous seated statues — Greek and Persian gods together, with himself among them. The heads have fallen from the bodies and now sit on the ground, staring out over the mountains.',
        'Visitors climb in the dark to the east terrace for sunrise, then cross to the west terrace, which catches the evening light.'
      ],
      history: [
        'Built around 62 BCE by Antiochus I Theos of Commagene, a small kingdom between Rome and Parthia. The statues merge Greek and Persian deities, matching his claim of descent from both Alexander and Darius.',
        'An inscription sets out the rites to be performed at his tomb. The burial chamber itself has never been found. UNESCO listed the site in 1987.'
      ],
      religious: ['The terraces were a hierothesion — a royal tomb-sanctuary where the king intended to be worshipped alongside the gods.'],
      highlights: ['Sunrise on the east terrace', 'The fallen colossal heads', 'The lion horoscope relief', 'Arsameia, Karakuş tumulus and the Roman Cendere Bridge nearby', 'The Euphrates and Atatürk Dam'],
      hours: { summary: 'Open roughly late April to late October; closed by snow in winter', details: ['Sunrise visits leave Kâhta or Karadut around 03:00', 'The road closes with the first heavy snow'], note: 'The final climb from the car park is 600 m uphill at altitude.' },
      tickets: { required: true, price: 'National park entry fee', how: ['Pay at the park gate; most people come with a driver or tour from Kâhta, Adıyaman or Malatya.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Adıyaman (ADF) or Malatya (MLX)', road: 'Via Kâhta and Karadut on the south side, or Malatya on the north.', transport: 'No public transport to the summit — minibus tours or a hire car.' },
      bestTime: 'May – September; July and August have the most reliable sunrises', duration: 'Overnight trip, or a long day',
      dress: 'Serious warm layers, hat and gloves — the pre-dawn summit is near freezing even in August.',
      tips: ['Sleep in Karadut, 12 km below the summit, rather than driving from Malatya at 02:00.', 'Sunset on the west terrace is quieter than sunrise and the light is just as good.', 'Adıyaman province was hit by the 2023 earthquakes; check accommodation in advance.']
    },
    {
      id: 'zeugma-museum', name: 'Zeugma Mosaic Museum', nativeName: 'Zeugma Mozaik Müzesi',
      region: 'southeastern-anatolia', city: 'Gaziantep', categories: ['archaeology', 'heritage'], featured: true,
      coords: [37.0617, 37.3528], wiki: 'https://en.wikipedia.org/wiki/Zeugma_Mosaic_Museum',
      tagline: 'The "Gypsy Girl" and the largest mosaic museum in the world.',
      overview: [
        'When the Birecik Dam flooded the Roman city of Zeugma on the Euphrates in 2000, a rescue excavation lifted its villa floors. They are now displayed in a purpose-built museum in Gaziantep — about 1,700 m² of mosaic, reconstructed room by room.',
        'The most famous fragment is a woman\'s face known as the Gypsy Girl, displayed alone in a darkened room; her missing pieces, taken to the USA decades ago, were returned in 2018.'
      ],
      history: [
        'Zeugma was founded by a general of Alexander and became a Roman garrison town on the frontier with Parthia, wealthy from the crossing point it guarded on the Euphrates.',
        'It was sacked by the Sasanians around 253 CE. Part of the site remains above the waterline and can be visited.'
      ],
      religious: null,
      highlights: ['The Gypsy Girl mosaic', 'Reconstructed villa rooms with floors and frescoes', 'Mars statue in bronze', 'Zeugma site and the Euphrates', 'Gaziantep Castle and the Emine Göğüş Culinary Museum', 'Gaziantep pistachio baklava'],
      hours: { summary: 'Open daily except Monday', details: [], note: 'Allow more time than you expect; the museum is large.' },
      tickets: { required: true, price: 'Paid entry; covered by Museum Pass Türkiye', how: ['Buy at the gate or online.'], links: [{ label: 'Official tickets', url: 'https://muze.gov.tr' }] },
      gettingThere: { airport: 'Gaziantep Oğuzeli (GZT), 20 km', road: 'In Gaziantep city.', transport: 'City buses and taxis; the city is well connected by air and bus.' },
      bestTime: 'Any time; spring and autumn for the city', duration: '2–3 hours',
      dress: 'Casual.',
      tips: ['Gaziantep is a UNESCO City of Gastronomy — plan your meals as carefully as your sightseeing.', 'The Bakırcılar (coppersmiths) bazaar and the old hans are a short walk from the castle.', 'Combine with Şanlıurfa, 2.5 hours east.']
    },
    {
      id: 'mardin', name: 'Mardin Old City', nativeName: 'Mardin',
      region: 'southeastern-anatolia', city: 'Mardin', categories: ['heritage', 'religious'], featured: true,
      coords: [37.3125, 40.7350], wiki: 'https://en.wikipedia.org/wiki/Mardin',
      tagline: 'Honey-coloured stone terraces looking out over the Mesopotamian plain.',
      overview: [
        'Mardin is built in tiers up a hill, every house of the same pale limestone, carved with Arabic and Syriac inscriptions and arcaded terraces, and all facing south over a plain that runs flat to Syria.',
        'Churches, mosques and medreses stand within a few streets of each other, reflecting a city where Syriac Christians, Arabs, Kurds and Turks have long lived together.'
      ],
      history: [
        'Mardin has been Roman, Byzantine, Arab, Artuqid, Mongol, Akkoyunlu and Ottoman. The Artuqid period in the 12th–14th centuries gave the city most of its finest stone buildings.',
        'The nearby Deyrulzafaran Monastery was the seat of the Syriac Orthodox Patriarchate for more than 600 years, until 1932.'
      ],
      religious: [
        'Deyrulzafaran (Saffron Monastery), founded in the 5th century, is still a working Syriac Orthodox monastery where services are held in Aramaic, the language of Jesus.',
        'The Great Mosque (Ulu Cami) of the 12th century, Kasımiye Medrese and the Forty Martyrs Church are all open to visitors.'
      ],
      highlights: ['Deyrulzafaran Monastery', 'Kasımiye Medrese and its reflecting pool', 'Zinciriye Medrese and the view from its roof', 'Ulu Cami', 'Sultan İsa Medrese', 'Old town bazaar and coppersmiths', 'Day trip to Midyat and Mor Gabriel Monastery'],
      hours: { summary: 'Old town always open; monasteries and medreses keep daytime hours', details: ['Deyrulzafaran closes for services; visits are guided'], note: 'The old town is steep and stepped — not easy with luggage or limited mobility.' },
      tickets: { required: 'partial', price: 'Small fees at the monastery and some medreses', how: ['Pay at each site.'], links: [] },
      gettingThere: { airport: 'Mardin (MQM), 20 km', road: 'New Mardin is below; the old city is up the hill.', transport: 'Flights from Istanbul and Ankara; buses from Diyarbakır (1.5 hours).' },
      bestTime: 'March – May and October – November; summers exceed 40 °C', duration: '2 days with Midyat',
      dress: 'Modest clothing; good shoes for the steps.',
      tips: ['Stay in a stone mansion hotel with a terrace facing the plain — the view at night is the memory you keep.', 'Midyat and Mor Gabriel, 1 hour east, deepen the Syriac story.', 'Try Mardin coffee with cardamom and the local almond sweets.']
    },
    {
      id: 'diyarbakir-fortress', name: 'Diyarbakır Fortress & Hevsel Gardens', nativeName: 'Diyarbakır Surları ve Hevsel Bahçeleri',
      region: 'southeastern-anatolia', city: 'Diyarbakır', categories: ['heritage', 'nature'], unesco: true,
      coords: [37.9111, 40.2367], wiki: 'https://en.wikipedia.org/wiki/Walls_of_Diyarbak%C4%B1r',
      tagline: 'Nearly 6 km of black basalt walls above the Tigris.',
      overview: [
        'Diyarbakır\'s city walls run almost 5.8 km around the old city, built of dark basalt with 82 towers and four main gates — among the longest and best-preserved ancient walls anywhere after the Great Wall of China.',
        'Below them, between the walls and the Tigris, lie the Hevsel Gardens, 700 hectares of market gardens farmed continuously for thousands of years, which were listed with the walls by UNESCO in 2015.'
      ],
      history: [
        'The walls were rebuilt in their present form by the Roman emperor Constantius II in 349 CE and repeatedly extended by Arab, Marwanid, Artuqid and Ottoman rulers, who each left inscriptions.',
        'The Great Mosque of Diyarbakır, converted from a church in the 7th century, is one of the oldest in Anatolia and reuses Roman columns.'
      ],
      religious: ['The Ulu Cami (Great Mosque) is a working mosque and a major early Islamic monument. The old city also holds the Armenian Surp Giragos Church, reopened in 2022, and a Chaldean church.'],
      highlights: ['Walking the ramparts between Mardin Gate and Keçi Burcu', 'Great Mosque of Diyarbakır', 'Hevsel Gardens and the Ten-Eyed Bridge', 'Surp Giragos Armenian Church', 'Hasan Paşa Hanı for breakfast', 'Diyarbakır watermelons'],
      hours: { summary: 'Walls accessible in daylight; mosques outside prayer times', details: ['Some wall sections are closed for restoration or safety'], note: 'Parts of the Sur district were heavily damaged in 2015–16 and remain closed or rebuilt.' },
      tickets: { required: false, price: 'Free; small fees at some museums', how: ['No ticket for the walls.'], links: [] },
      gettingThere: { airport: 'Diyarbakır (DIY), 6 km', road: 'The old city is inside the walls.', transport: 'Flights from Istanbul and Ankara; buses to Mardin and Şanlıurfa.' },
      bestTime: 'March – May and October – November', duration: '1–2 days',
      dress: 'Modest clothing; sturdy shoes for the ramparts.',
      tips: ['Walk a wall section at sunset for the light on the basalt.', 'Have a long Diyarbakır breakfast at Hasan Paşa Hanı.', 'Ask locally which rampart stretches are currently open and safe.']
    },
    {
      id: 'halfeti', name: 'Halfeti', nativeName: 'Halfeti',
      region: 'southeastern-anatolia', city: 'Halfeti, Şanlıurfa', categories: ['nature', 'heritage'],
      coords: [37.2458, 37.8661], wiki: 'https://en.wikipedia.org/wiki/Halfeti',
      tagline: 'A half-drowned town on the Euphrates, with a minaret rising from the water.',
      overview: [
        'When the Birecik Dam filled in 2000, the lower half of Halfeti disappeared under the Euphrates. Boats now glide over submerged streets, past the minaret of the old Savaşan village mosque standing alone in the water.',
        'The town is also known for its "black rose", a local Damask rose whose deep crimson flowers appear almost black in the soil and climate here.'
      ],
      history: [
        'Halfeti\'s history goes back to Assyrian settlements on the Euphrates. Rumkale, a dramatic fortress on a bluff upstream, was a Hittite, Roman, Byzantine and Armenian stronghold and is reached by the same boats.'
      ],
      religious: ['Rumkale was an Armenian patriarchal seat; a ruined church and monastery survive on the rock.'],
      highlights: ['Boat trip over the sunken village', 'The half-submerged minaret at Savaşan', 'Rumkale fortress', 'The black rose gardens', 'Pistachio terraces along the river'],
      hours: { summary: 'Boats run daily in season, roughly 09:00–18:00', details: ['Water levels change, so how much of the minaret shows varies'], note: 'Fewer boats in winter and in bad weather.' },
      tickets: { required: 'partial', price: 'Boat fare; shared or private', how: ['Book at the Halfeti jetty; shared boats leave when full.'], links: [] },
      gettingThere: { airport: 'Şanlıurfa GAP (GNY) or Gaziantep (GZT), both about 2 hours', road: '110 km west of Şanlıurfa via Birecik.', transport: 'Dolmuş from Birecik; a car is much easier.' },
      bestTime: 'April – June for roses and mild weather', duration: 'Half a day',
      dress: 'Sun protection for the open boat.',
      tips: ['Take a boat that continues to Rumkale, not just the short minaret loop.', 'Black rose products are mostly souvenirs — the real flowers bloom in May.', 'Combine with Gaziantep or Şanlıurfa.']
    },
    {
      id: 'hasankeyf', name: 'Hasankeyf', nativeName: 'Hasankeyf',
      region: 'southeastern-anatolia', city: 'Hasankeyf, Batman', categories: ['heritage', 'archaeology'], status: 'check',
      notice: 'Most of ancient Hasankeyf was flooded by the Ilısu Dam reservoir in 2020. Several monuments were moved to a new cultural park and the population was resettled in New Hasankeyf. What you can see today is very different from older guidebooks.',
      coords: [37.7142, 41.4133], wiki: 'https://en.wikipedia.org/wiki/Hasankeyf',
      tagline: 'A 12,000-year-old town on the Tigris, most of it now under a reservoir.',
      overview: [
        'Hasankeyf was a cave city and medieval town in a limestone canyon on the Tigris, with thousands of rock-cut dwellings, the piers of a great 12th-century bridge, mosques and tombs.',
        'The Ilısu Dam flooded the valley in 2020. Eight major monuments, including the Zeynel Bey Tomb and the El Rızk Mosque minaret, were moved on rails to a new archaeological park above the water line. Parts of the cliff and the upper citadel remain visible.'
      ],
      history: [
        'Occupied for perhaps 12,000 years, Hasankeyf was Roman Cephe, then an Artuqid and Ayyubid capital. The Old Tigris Bridge of 1116 was once the largest in Anatolia.',
        'Campaigns to save the site ran for decades and failed; the reservoir filled in 2020 despite international protest.'
      ],
      religious: ['The Zeynel Bey Tomb, a cylindrical tiled Akkoyunlu mausoleum of the 15th century, was relocated intact and is the most striking survivor.'],
      highlights: ['Zeynel Bey Tomb in the new cultural park', 'Relocated El Rızk Mosque minaret', 'Remaining piers of the Old Tigris Bridge', 'Upper citadel viewpoint', 'Boat trips on the reservoir'],
      hours: { summary: 'Cultural park open daily, daytime hours', details: ['Access to the old citadel is restricted and changes'], note: 'Confirm what is accessible before travelling — the situation is still settling.' },
      tickets: { required: 'partial', price: 'Small entrance fee at the cultural park', how: ['Pay on site.'], links: [] },
      gettingThere: { airport: 'Batman (BAL), 40 km', road: 'Between Batman and Midyat on the Tigris.', transport: 'Dolmuş from Batman; a car is easier.' },
      bestTime: 'March – May and October – November', duration: 'Half a day',
      dress: 'Sun protection; the canyon is hot and exposed.',
      tips: ['Set your expectations from recent photographs, not older guidebooks.', 'Combine with Midyat and Mardin.', 'The relocated monuments are genuinely impressive engineering, whatever you think of the dam.']
    }
  ]
});
