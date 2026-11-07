import type { WeddingConfig } from '../types/wedding';

/**
 * Central configuration object for the entire wedding invitation.
 * Update names, dates, venues, images, or audio paths here and all sections update automatically.
 */
export const weddingData: WeddingConfig = {
  couple: {
    groom: {
      name: 'Akshay Kumar N S',
      shortName: 'Akshay',
      role: 'Groom',
      hometown: 'Poochinipadam',
      district: 'Thrissur',
      state: 'Kerala',
      parents: 'Son of Smt. & Sri. N. S. Family, Thrissur',
    },
    bride: {
      name: 'Srinisha Balaji',
      shortName: 'Srinisha',
      role: 'Bride',
      hometown: 'Madurai',
      district: 'Madurai',
      state: 'Tamil Nadu',
      parents: 'Daughter of Smt. & Sri. Balaji Family, Madurai, Tamil Nadu',
    },
    initials: 'A & S',
    portraitImage: '/images/couple-portrait.png',
  },

  envelope: {
    invitationText: 'You Are Cordially Invited',
    cardScriptTitle: "You're Invited",
    openButtonLabel: 'Open Invitation',
    skipButtonLabel: 'Skip Animation',
  },

  hero: {
    familiesLine: 'Together with their families',
    invitedLine: 'YOU ARE INVITED TO THE WEDDING OF',
    displayDate: 'FRI, 20 NOV 2026',
    isoDate: '2026-11-20T09:30:00+05:30',
    displayLocation: 'MADURAI, TAMIL NADU & THRISSUR, KERALA',
    panoramaImage: '/images/hero-panorama.png',
  },

  story: {
    sectionLabel: 'Our Story',
    heading: 'Two Souls, One Beautiful Journey',
    shortIntro:
      'A Thrissur boy and a Madurai girl, brought together by destiny, bonded by warm laughter and shared values, and now ready to begin a sacred lifetime of togetherness.',
    extendedNarrative:
      'From the serene temple towns of Thrissur to the fragrant jasmine avenues of Madurai, our paths crossed and wove two rich heritages into a single melody. Through conversations over filter kaapi and evening chaya, we found a home in each other.',
    ctaLabel: 'Read Our Story',
    milestones: [
      {
        id: 'milestone-1',
        yearOrDate: 'First Chapter',
        title: 'When Paths Crossed',
        location: 'Across the Palakkad Gap',
        description:
          'What began as a warm introduction quickly blossomed into effortless conversations, discovering how beautifully our worlds complemented one another.',
      },
      {
        id: 'milestone-2',
        yearOrDate: 'Second Chapter',
        title: 'Chaya Meets Filter Kaapi',
        location: 'Moments of Togetherness',
        description:
          'Between the rhythmic pulse of Thrissur Pooram tales and the timeless grace of Madurai temple traditions, friendship deepened into enduring love.',
      },
      {
        id: 'milestone-3',
        yearOrDate: 'Third Chapter',
        title: 'Two Families, One Heart',
        location: 'Thrissur & Madurai',
        description:
          'With the blessings of our parents and elders, both families came together with auspicious thamboolam, smiles, and heartfelt prayers.',
      },
      {
        id: 'milestone-4',
        yearOrDate: 'November 20, 2026',
        title: 'The Sacred Beginning',
        location: 'Madurai & Thrissur',
        description:
          'Hand in hand before the sacred Nilavilakku and Agni, we step into forever surrounded by the people we cherish most.',
      },
    ],
  },

  culturalUnion: {
    heading: 'Two Cultures, One Celebration',
    subtitle: 'Kerala × Tamil Nadu',
    description:
      'A beautiful union of Kerala and Tamil Nadu traditions, celebrating our roots, families, and shared journey — where the golden weave of Kasavu meets the royal grandeur of Kanjeevaram silk, and the glow of the Nilavilakku embraces the fragrance of Madurai Malligai.',
    keralaLabel: 'Thrissur, Kerala • Land of Vadakkunnathan & Melam',
    tamilNaduLabel: 'Madurai, Tamil Nadu • Land of Sacred Gopurams & Jasmine',
  },

  eventsSection: {
    heading: 'Wedding Events',
    subtitle: 'We warmly invite you to grace our auspicious celebrations with your presence and blessings.',
    events: [
      {
        id: 'muhurtham',
        title: 'Muhurtham',
        subtitle: '(Sacred Knot & Thalikettu)',
        date: 'Fri, 20 Nov 2026',
        time: 'at 9:30 AM (9:15 – 10:15 AM)',
        venue: 'Meenakshi Sundareswarar Heritage Mandapam',
        location: 'Madurai, Tamil Nadu',
        description:
          'The sacred Thalikettu and Mangalya Dharanam ceremony amidst Nadaswaram melodies, Madurai Malligai garlands, and Vedic blessings.',
        icon: 'rings',
        image: '/images/event-muhurtham.png',
      },
      {
        id: 'ceremony',
        title: 'Wedding Ceremony & Kalyana Virundhu',
        subtitle: '(Pudamuri, Saptapadi & Feast)',
        date: 'Fri, 20 Nov 2026',
        time: 'at 11:00 AM onwards',
        venue: 'Meenakshi Sundareswarar Heritage Mandapam',
        location: 'Madurai, Tamil Nadu',
        description:
          'Exchange of garlands, seven sacred vows around the holy fire, and a grand festive feast served on tender banana leaves.',
        icon: 'garland',
        image: '/images/gallery-jasmine.png',
      },
      {
        id: 'reception',
        title: 'Reception',
        subtitle: '(Evening Celebration)',
        date: 'Sun, 22 Nov 2026',
        time: 'at 6:30 PM onwards',
        venue: 'Vadakkunnathan Heritage Convention Centre',
        location: 'Thrissur, Kerala',
        description:
          'An enchanting evening of music, warm hospitality, and joyous celebration as both families welcome you to bless the newlyweds.',
        icon: 'cheers',
        image: '/images/event-reception.png',
      },
    ],
  },

  venuesSection: {
    heading: 'The Venues',
    subtitle: 'Celebrating across two cherished cultural landmarks',
    venues: [
      {
        id: 'venue-wedding',
        eventLabel: 'Wedding & Muhurtham',
        name: 'Meenakshi Heritage Mandapam',
        address: 'Chithirai Heritage Avenue, Near Meenakshi Amman Kovil',
        city: 'Madurai',
        state: 'Tamil Nadu',
        dateAndTime: 'Friday, 20 Nov 2026 • 9:30 AM',
        image: '/images/venue-tamilnadu.png',
        googleMapsUrl: 'https://maps.google.com/?q=Meenakshi+Amman+Temple+Madurai+Tamil+Nadu',
        culture: 'tamilnadu',
      },
      {
        id: 'venue-reception',
        eventLabel: 'Grand Reception',
        name: 'Vadakkunnathan Heritage Centre',
        address: 'Swaraj Round, Poochinipadam Road',
        city: 'Thrissur',
        state: 'Kerala',
        dateAndTime: 'Sunday, 22 Nov 2026 • 6:30 PM',
        image: '/images/venue-kerala.png',
        googleMapsUrl: 'https://maps.google.com/?q=Vadakkunnathan+Temple+Thrissur+Kerala',
        culture: 'kerala',
      },
    ],
  },

  gallerySection: {
    heading: 'Gallery',
    subtitle: 'Glimpses of our journey, heritage, and sacred traditions',
    photos: [
      {
        id: 'gal-1',
        src: '/images/gallery-jasmine.png',
        alt: 'Fragrant Madurai Malligai Jasmine Blossoms',
        caption: 'Fragrant Madurai Malligai blossoms symbolizing purity and auspicious beginnings',
        category: 'Tradition',
      },
      {
        id: 'gal-2',
        src: '/images/couple-portrait.png',
        alt: 'Akshay & Srinisha in traditional Kasavu and Kanjeevaram attire',
        caption: 'Akshay & Srinisha — Two souls woven in gold and silk',
        category: 'Couple',
        featured: true,
      },
      {
        id: 'gal-3',
        src: '/images/gallery-lamp.png',
        alt: 'Sacred Kerala Brass Nilavilakku Oil Lamp',
        caption: 'The auspicious glow of the traditional brass Nilavilakku',
        category: 'Heritage',
      },
      {
        id: 'gal-4',
        src: '/images/gallery-gopuram.png',
        alt: 'Majestic Madurai Temple Gopuram in Golden Sunlight',
        caption: 'Timeless Madurai Gopuram architecture bathed in golden light',
        category: 'Architecture',
      },
      {
        id: 'gal-5',
        src: '/images/event-muhurtham.png',
        alt: 'Auspicious Wedding Garlands on Brass Plate',
        caption: 'Sacred jasmine garlands prepared for the Muhurtham',
        category: 'Ceremony',
      },
      {
        id: 'gal-6',
        src: '/images/venue-kerala.png',
        alt: 'Traditional Kerala Temple Architecture in Thrissur',
        caption: 'Serene heritage architecture of Thrissur, God’s Own Country',
        category: 'Kerala',
      },
    ],
  },

  rsvpSection: {
    label: 'RSVP',
    heading: 'We Would Love to Celebrate With You',
    subtitle: "We'd be delighted to have you celebrate with us!",
    deadlineText: 'Kindly respond by November 15, 2026',
    options: [
      {
        id: 'accept',
        label: 'Joyfully Accept',
        shortLabel: "I'll Be There",
      },
      {
        id: 'maybe',
        label: 'Maybe',
        shortLabel: 'Maybe',
      },
      {
        id: 'decline',
        label: 'Regretfully Decline',
        shortLabel: "Can't Make It",
      },
    ],
    guestCountOptions: ['1 Guest', '2 Guests', '3 Guests', '4+ Guests (Family)'],
  },

  footer: {
    heading: 'With Love and Blessings',
    message: 'Thank you for being a part of our special day.',
    bilingualBlessing: {
      malayalam: 'സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു',
      tamil: 'அன்புடன் அழைக்கிறோம்',
    },
  },

  audio: {
    // Drop your preferred MP3 or WAV file into public/audio/ and update this path if needed
    src: '/audio/asai-mugham.mp3',
    title: 'Wedding Instrumental',
  },
};
