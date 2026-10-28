export type MenuCategory = 
  | 'All'
  | 'Signature Coffee'
  | 'Tea & Refreshers'
  | 'Bakery & Desserts'
  | 'Cafe Favourites';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  price: number; // In INR (₹)
  description: string;
  imageUrl: string;
  isVegetarian?: boolean;
  isBestseller?: boolean;
  dietary?: string; // e.g. "Pure Arabica", "Freshly Baked", "Oat Milk Option Available"
  servingSize?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Coffee Craft' | 'Latte Art' | 'Atmosphere' | 'Bakes & Treats' | 'Slow Moments';
  imageUrl: string;
  aspect?: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  avatarUrl?: string;
  rating: number;
  content: string;
  favoriteItem: string;
  isSampleReview: boolean;
}

export interface BusinessConfig {
  brandName: string;
  tagline: string;
  locationCity: string;
  locationState: string;
  locationCountry: string;
  phonePlaceholder: string;
  phoneDisplay: string;
  whatsAppNumber: string; // e.g. "919876543210" or empty string if using placeholder
  whatsAppPrefilledMessage: string;
  addressDisplay: string;
  addressFull: string;
  googleMapsDirectionsUrl: string; // Empty string triggers fallback to city search
  openingHours: {
    days: string;
    hours: string;
    note?: string;
  }[];
  socials: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
  story: {
    headline: string;
    subheadline: string;
    paragraphs: string[];
    highlights: {
      title: string;
      description: string;
      icon: 'Coffee' | 'Sparkles' | 'Croissant' | 'Heart' | 'Clock' | 'ShieldCheck';
    }[];
    stats: {
      number: string;
      label: string;
    }[];
  };
  demoNotice: {
    bannerText: string;
    isDemoMode: boolean;
  };
}

