export interface PersonDetails {
  name: string;
  shortName: string;
  role: 'Groom' | 'Bride';
  hometown: string;
  district: string;
  state: string;
  parents: string;
}

export interface StoryMilestone {
  id: string;
  yearOrDate: string;
  title: string;
  location: string;
  description: string;
}

export interface WeddingEventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  description: string;
  icon: 'rings' | 'garland' | 'cheers';
  image: string;
}

export interface VenueItem {
  id: string;
  eventLabel: string;
  name: string;
  address: string;
  city: string;
  state: string;
  dateAndTime: string;
  image: string;
  googleMapsUrl: string;
  culture: 'kerala' | 'tamilnadu';
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  featured?: boolean;
}

export interface RsvpOption {
  id: 'accept' | 'maybe' | 'decline';
  label: string;
  shortLabel: string;
}

export interface WeddingConfig {
  couple: {
    groom: PersonDetails;
    bride: PersonDetails;
    initials: string;
    portraitImage: string;
  };
  envelope: {
    invitationText: string;
    cardScriptTitle: string;
    openButtonLabel: string;
    skipButtonLabel: string;
  };
  hero: {
    familiesLine: string;
    invitedLine: string;
    displayDate: string;
    isoDate: string;
    displayLocation: string;
    panoramaImage: string;
  };
  story: {
    sectionLabel: string;
    heading: string;
    shortIntro: string;
    extendedNarrative: string;
    ctaLabel: string;
    milestones: StoryMilestone[];
  };
  culturalUnion: {
    heading: string;
    subtitle: string;
    description: string;
    keralaLabel: string;
    tamilNaduLabel: string;
  };
  eventsSection: {
    heading: string;
    subtitle: string;
    events: WeddingEventItem[];
  };
  venuesSection: {
    heading: string;
    subtitle: string;
    venues: VenueItem[];
  };
  gallerySection: {
    heading: string;
    subtitle: string;
    photos: GalleryPhoto[];
  };
  rsvpSection: {
    label: string;
    heading: string;
    subtitle: string;
    deadlineText: string;
    options: RsvpOption[];
    guestCountOptions: string[];
  };
  footer: {
    heading: string;
    message: string;
    bilingualBlessing: {
      malayalam: string;
      tamil: string;
    };
  };
  audio: {
    src: string;
    title: string;
  };
}
