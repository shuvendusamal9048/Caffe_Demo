import { TestimonialItem } from '../types';

/**
 * Illustrative sample testimonials for cafe demonstration.
 * Clearly flagged as sample demo content that real cafe owners can replace with their actual Google/Zomato reviews.
 */
export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    author: 'Ananya Pattnaik',
    role: 'Creative Director & Coffee Enthusiast',
    rating: 5,
    content: 'Finally, a space in Bhubaneswar that takes specialty pour-overs as seriously as its interior aesthetics. The calm ambient light and honest espresso make it my ultimate remote work sanctuary.',
    favoriteItem: 'Cappuccino & Warm Croissant',
    isSampleReview: true
  },
  {
    id: 't-2',
    author: 'Rohan Mohanty',
    role: 'Architect & Weekend Regular',
    rating: 5,
    content: 'The architectural simplicity and natural warmth of the cafe immediately slows your heart rate. Their cold coffee paired with the truffle fries is unmatched in the city.',
    favoriteItem: 'Cold Coffee & Herb Fries',
    isSampleReview: true
  },
  {
    id: 't-3',
    author: 'Dr. Sneha Ray',
    role: 'University Lecturer',
    rating: 5,
    content: 'BREW & BLOOM captures what a neighborhood cafe should truly be: polite baristas, no blaring noise, and masala chai that tastes like it was brewed with pure reverence.',
    favoriteItem: 'Masala Chai & Chocolate Brownie',
    isSampleReview: true
  }
];

