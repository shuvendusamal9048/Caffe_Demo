import { BusinessConfig } from '../types';

/**
 * ============================================================================
 * CENTRAL BUSINESS CONFIGURATION FILE
 * ============================================================================
 * 
 * To customize this template for a new cafe client:
 * 1. Update the BRAND, TAGLINE, and LOCATION details below.
 * 2. Replace the placeholder phone and WhatsApp numbers with verified client numbers.
 * 3. Add the exact Google Maps Place URL for directions.
 * 4. Adjust opening hours, story highlights, and social links.
 * 
 * All UI components throughout the website consume data from this single source.
 */

export const BUSINESS_CONFIG: BusinessConfig = {
  brandName: 'BREW & BLOOM',
  tagline: 'Good Coffee. Slow Moments.',
  locationCity: 'Bhubaneswar',
  locationState: 'Odisha',
  locationCountry: 'India',

  // Phone Configuration (Set to client phone when deploying for real business)
  phonePlaceholder: '+91 98XXX XXXXX (Demo Placeholder)',
  phoneDisplay: '+91 (0674) 255-DEMO',

  // WhatsApp Configuration:
  // Format with country code without '+' or special symbols (e.g., '919876543210').
  // When empty or set to placeholder, the UI provides a graceful demo interactive preview.
  whatsAppNumber: '919800000000', // Demo number placeholder
  whatsAppPrefilledMessage: 'Hello BREW & BLOOM! I would like to know more about your cafe menu and reserve a table.',

  // Address Details
  addressDisplay: 'Patia / Saheed Nagar Hub, Bhubaneswar, Odisha',
  addressFull: 'Plot No. 42, Green Avenue (Demo Location), Bhubaneswar, Odisha 751024, India',

  // Google Maps Directions Link:
  // If set to empty string or placeholder, the application automatically defaults to a verified
  // general map search for Bhubaneswar, Odisha to prevent broken 404 links.
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bhubaneswar%2C+Odisha%2C+India',

  // Opening Hours
  openingHours: [
    { days: 'Monday – Friday', hours: '08:00 AM – 10:30 PM', note: 'Kitchen opens at 8:30 AM' },
    { days: 'Saturday & Sunday', hours: '07:30 AM – 11:00 PM', note: 'Specialty Pour-over Bar open all day' },
  ],

  // Social handles
  socials: {
    instagram: 'https://instagram.com/brewandbloom.demo',
    facebook: 'https://facebook.com/brewandbloom.demo',
    twitter: 'https://twitter.com/brewandbloom_demo',
  },

  // About / Brand Story
  story: {
    headline: 'More Than Coffee. A Place to Belong.',
    subheadline: 'Crafted in the heart of Bhubaneswar, born out of deep reverence for slow mornings and honest beans.',
    paragraphs: [
      'In a world that is always in a hurry, BREW & BLOOM was envisioned as a quiet sanctuary. We believe that a truly remarkable cup of coffee is not rushed—it is carefully sourced from ethical single-origin estates across South India, ground with precision, and poured with intention.',
      'From the aroma of fresh morning roasts to the warm golden glow of our reading corners, every corner of our cafe is designed for meaningful conversations, quiet laptop sessions, or simply watching the afternoon light filter through the greenery.'
    ],
    highlights: [
      {
        title: 'Ethically Sourced Specialty Beans',
        description: '100% Arabica and high-elevation beans roasted in small batches to preserve nuanced tasting notes.',
        icon: 'Coffee'
      },
      {
        title: 'Slow, Welcoming Ambience',
        description: 'Thoughtful acoustic balance, warm ambient lighting, lush green plants, and comfortable seating.',
        icon: 'Sparkles'
      },
      {
        title: 'Fresh Daily Artisanal Bakes',
        description: 'Butter-flaky croissants, decadent brownies, and wholesome cafe favourites prepared fresh every morning.',
        icon: 'Croissant'
      }
    ],
    stats: [
      { number: '100%', label: 'Specialty Grade Arabica' },
      { number: '18+', label: 'Curated Brew & Bite Recipes' },
      { number: '0 Min', label: 'Rushed Moments' },
    ]
  },

  demoNotice: {
    bannerText: 'Demonstration Website Concept — Prepared for cafe clients in Bhubaneswar, Odisha. All business details & sample menus are fully customizable.',
    isDemoMode: true,
  }
};

