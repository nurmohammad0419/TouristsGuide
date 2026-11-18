/* UI strings — English. Copy this file to add a new language. */
window.TG_I18N = window.TG_I18N || {};
window.TG_I18N.en = {
  nav: { home: 'Home', countries: 'Countries', overview: 'Overview', divisions: 'Provinces', spots: 'Tourist Spots', map: 'Map', travel: 'Travel Info', plan: 'Tour Plan' },
  common: {
    explore: 'Explore', exploreCountry: 'Explore the country', comingSoon: 'Coming soon', readMore: 'Read more',
    viewDetails: 'View details', back: 'Back', allRegions: 'All provinces', allCategories: 'All categories',
    searchPlaceholder: 'Search spots, cities, provinces…', noResults: 'No matches found.', results: 'results',
    spots: 'spots', spot: 'spot', province: 'Province', city: 'City', category: 'Category', capital: 'Capital',
    area: 'Area', population: 'Population', governorates: 'Governorates', openMap: 'Open in Google Maps',
    official: 'Official website', bookNow: 'Book tickets', free: 'Free', required: 'Required', partly: 'Partly required', closed: 'Temporarily closed', checkStatus: 'Check status before visiting', notRequired: 'Not required',
    sortBy: 'Sort', sortFeatured: 'Featured', sortAZ: 'A – Z', sortRegion: 'By province', unesco: 'UNESCO',
    muslimsOnly: 'Muslims only', photos: 'photos', photoCredit: 'Photos: Wikimedia Commons contributors and site contributors (open a photo to see its source)',
    lastReviewed: 'Information last reviewed', disclaimer: 'Opening hours, prices and booking rules change often — always confirm on the official link before you travel.',
    showAll: 'Show all', showLess: 'Show less', copyLink: 'Copy link', copied: 'Link copied!', km2: 'km²', grid: 'Grid', list: 'List',
    prev: 'Previous', next: 'Next'
  },
  home: {
    eyebrow: 'Travel guides, spot by spot',
    title: 'Discover the world\'s most remarkable places',
    subtitle: 'Deep, reliable guides for every country: history, faith, photos, opening hours and exactly how to get tickets.',
    cta: 'Start with Saudi Arabia', countriesTitle: 'Choose a country', countriesSub: 'One country live, many more on the way.',
    featureTitle: 'Everything you need for each spot',
    features: [
      ['📜', 'History & story', 'How each place began and why it matters today.'],
      ['🕌', 'Religious significance', 'Respectful context on faith, rituals and etiquette.'],
      ['🖼️', 'Beautiful photos', 'Curated galleries with a full-screen viewer.'],
      ['🕒', 'Opening hours', 'Typical timings, best time of day and season.'],
      ['🎟️', 'Tickets & booking', 'Whether you need to book ahead, prices and official links.'],
      ['🧭', 'How to get there', 'Airports, roads, public transport and tips.']
    ]
  },
  country: {
    atAGlance: 'At a glance', overviewTitle: 'Country overview', factsTitle: 'Key facts',
    divisionsTitle: 'Administrative divisions', divisionsSub: 'Provinces (regions) and their governorates',
    provinces: 'Provinces', governoratesTotal: 'Governorates', spotsTitle: 'Tourist spots', spotsSub: 'Every spot we cover, with full details',
    mapTitle: 'Spots on the map', travelTitle: 'Before you go', unescoTitle: 'UNESCO World Heritage Sites', inThisProvince: 'tourist spots in this province',
    seeGovernorates: 'Show governorates', hideGovernorates: 'Hide governorates', regionalCapital: 'Regional capital'
  },
  spot: {
    overview: 'Overview', history: 'History', religious: 'Religious significance', highlights: 'Highlights',
    gallery: 'Photo gallery', visiting: 'Visiting information', hours: 'Opening hours', tickets: 'Tickets',
    ticketRequired: 'Advance booking', price: 'Price', howToBook: 'How to book', gettingThere: 'How to get there',
    nearestAirport: 'Nearest airport', byRoad: 'By road', publicTransport: 'Public transport', tips: 'Travel tips',
    bestTime: 'Best time to visit', duration: 'Time needed', dressCode: 'Dress code & etiquette', location: 'Location',
    morePlaces: 'More places in', related: 'You may also like', quickInfo: 'Quick info', links: 'Useful links',
    nonMuslimNote: 'Access note', noticeTitle: 'Important notice', approxLocation: 'Map pin shows the approximate area'
  },
  plan: {
    title: 'Plan your trip, step by step',
    subtitle: 'Answer a few questions and get a complete day-by-day itinerary: visa check, where to land, how to move around, what to book in advance and which spots fit your dates.',
    q: { origin: 'Where will your trip start?', visa: 'Nationality & residence (visa check)', religion: 'Religious status', current: 'Where are you now?', dest: 'Which province(s) do you want to visit?', dates: 'Travel dates', group: 'Who is travelling?', style: 'Choose your plan style', budget: 'Budget level & travellers', transport: 'How will you get around?', airport: 'Arrival airport', extras: 'Also include', car: 'Do you have a car?' },
    outside: 'Coming from outside Saudi Arabia', outsideSub: 'Visa check, arrival airport and a full itinerary',
    inside: 'Already inside Saudi Arabia', insideSub: 'Plan a trip from your province to another',
    nationality: 'Nationality (passport)', residence: 'Country of residence', sameAsNat: 'Same as nationality',
    visaHolder: 'I hold a valid, used US, UK or Schengen visa', applyEvisa: 'Apply for the eVisa', nusukUmrah: 'Nusuk (Umrah visa)', checkPortal: 'Check visa portal',
    visaDisclaimer: 'Visa rules change — always confirm on the official portal before booking. Last reviewed',
    muslim: 'Muslim', muslimSub: 'Umrah first, then Makkah & Madinah ziyarat', nonMuslim: 'Not Muslim', nonMuslimSub: 'Makkah is closed to non-Muslims; the rest of the country is open',
    currentProv: 'Current province', destHint: 'Choose 1–3 provinces. They will be visited in the order you select.',
    from: 'Arrival date', to: 'Return date', daysTrip: 'day trip', maxDays: 'planner covers up to 30 days', dateError: 'Return date must be after the arrival date.',
    relaxed: 'Relaxed plan', relaxedSub: 'Fewer spots a day, more rest', balanced: 'Balanced plan', balancedSub: 'The recommended pace', packed: 'Packed plan', packedSub: 'See as much as possible',
    solo: 'Solo', couple: 'Couple', family: 'Family with children', familySub: 'Slower pace, easier spots', friends: 'Friends group',
    taxi: 'Taxi & ride-hailing', taxiSub: 'Uber / Careem everywhere; no licence needed', train: 'Trains & taxis', trainSub: 'Haramain & SAR trains between cities', rentCar: 'Rental car', rentCarSub: 'Freedom for desert & mountain spots',
    idp: 'I have an International Driving Permit (IDP) with my national licence', idpWarn: 'Visitors need an IDP (or a GCC / recognised licence) to rent a car. Without it, the plan will use taxis and trains.',
    recommended: 'Recommended for your plan', medAlt: 'Start in Madinah instead',
    extrasHint: 'Based on your dates we pre-selected the ★ options.', extrasCoreMuslim: 'Makkah and Madinah are always included.', extrasCoreOther: 'Your arrival city is always included.',
    ownCar: 'Yes, own car', ownCarSub: 'Self-drive routes and desert spots', noCar: 'No car', noCarSub: 'Trains, flights, buses and taxis',
    planReady: 'Your plan is ready',
    eco: 'Budget', ecoSub: 'Simple hotels, local food', comfort: 'Comfort', comfortSub: '3–4★ hotels, restaurants', lux: 'Luxury', luxSub: '5★ & resorts, fine dining', travellers: 'Number of travellers', travellersLower: 'traveller(s)', perPerson: 'Per person',
    moveUp: 'Move earlier', moveDown: 'Move later', moveToDay: 'Move to day…', movedToast: 'Moved — plan updated',
    stayTitle: 'Where to stay', staySub: 'Area advice per city, estimated room prices and a hotel search for your exact dates.', nights: 'night(s)', perRoomNight: 'per room / night', searchHotels: 'Search hotels',
    budgetTitle: 'Estimated budget', budgetNote: 'Rough planning estimates in SAR. Prices swing with Ramadan, Hajj, school holidays and events. Excludes international flights, visa and insurance fees, shopping and tips.',
    remove: 'Skip', removeHint: 'Already visited or not interested? Skip it — the plan re-arranges itself.', removedToast: 'Spot removed — plan updated', addedToast: 'Spot added to your plan', restoredToast: 'Spot restored', undo: 'Undo',
    addedByYou: 'Added by you', addTitle: 'Add a spot to your plan', addSub: 'Pick any place you want to include. Spots near your route are listed first; the days will be re-planned.', add: 'Add', searchSpots: 'Search spots, cities…', removedList: 'Skipped spots — tap to bring back',
    statDays: 'Days', statSpots: 'Spots', statCities: 'Cities', statBookings: 'To book', editHint: 'Tap “✕ Skip” on any spot you have already visited or don’t want; use “Add a spot” below to include more. Everything is saved in the link, so you can share it.',
    yourPlan: 'Your tour plan', daysIn: 'days in', day: 'Day', arrival: 'Arrival', travelDay: 'Travel day', freeDay: 'Free day', print: 'Print / Save PDF',
    bookTransport: 'Book transport', alternatives: 'Alternatives', visaStatus: 'Visa status', bookings: 'Book in advance', noBookings: 'Nothing needs advance booking.', documents: 'Documents & packing', tips: 'Tips for your trip',
    tip: {
      umrahFirst: 'For Umrah, book your free permit in Nusuk first and enter ihram before the miqat. Ihram is only for Umrah or Hajj in Makkah — not for visiting other places.',
      nonMuslim: 'The city of Makkah is closed to non-Muslims; highway checkpoints divert traffic around it. Madinah city is open, but not the prayer halls of the Prophet\'s Mosque.',
      family: 'We planned 2 spots per day with buffer time. Many sites have strollers-friendly paths; carry water, hats and snacks.',
      rentCar: 'Driving is on the right; speed cameras are everywhere. Non-Muslims cannot drive into Makkah. Fuel is cheap and petrol stations are frequent on highways.',
      taxi: 'Uber and Careem work in all major cities. Agree the fare before using a street taxi outside the apps.',
      noCar: 'Book SAR / Haramain train tickets a few days ahead on weekends and holidays. SAPTCO buses reach most towns.',
      prayer: 'Shops and attractions pause briefly at prayer times; plan meals and museum visits around them.',
      weather: 'October – March is the best season. In summer, visit outdoor spots early morning or after sunset.'
    }
  },
  footer: {
    about: 'TouristsGuide is an independent travel guide. Content is for planning purposes; always check official sources.',
    made: 'Built with care for travellers.'
  }
};
