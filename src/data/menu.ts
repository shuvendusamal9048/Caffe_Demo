import { MenuItem } from '../types';

/**
 * ============================================================================
 * CAFE MENU DATA
 * ============================================================================
 * 
 * Contains all menu categories and items.
 * Easily customized for another cafe by modifying prices, descriptions, or adding items.
 */

export const MENU_ITEMS: MenuItem[] = [
  // --- Signature Coffee ---
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'Signature Coffee',
    price: 149,
    description: 'Double shot of rich espresso topped with equal parts steamed milk and velvety microfoam.',
    imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: true,
    dietary: '100% Arabica'
  },
  {
    id: 'cafe-latte',
    name: 'Cafe Latte',
    category: 'Signature Coffee',
    price: 159,
    description: 'Smooth espresso harmoniously blended with gently steamed milk and a delicate layer of foam.',
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: false,
    dietary: 'Artisan Latte Art'
  },
  {
    id: 'classic-americano',
    name: 'Classic Americano',
    category: 'Signature Coffee',
    price: 119,
    description: 'Pure double espresso pulled long over hot filtered water, unveiling subtle cocoa and caramel notes.',
    imageUrl: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: false,
    dietary: 'Zero Sugar • Pure Black'
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    category: 'Signature Coffee',
    price: 179,
    description: 'Signature chilled brew blended with creamy milk, slow-churned vanilla ice cream, and espresso drizzle.',
    imageUrl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: true,
    dietary: 'Summer Crowd Favourite'
  },

  // --- Tea & Refreshers ---
  {
    id: 'masala-chai',
    name: 'Masala Chai',
    category: 'Tea & Refreshers',
    price: 79,
    description: 'Slow-simmered Assam whole leaf tea infused with freshly crushed cardamom, ginger, cloves, and cinnamon.',
    imageUrl: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: true,
    dietary: 'House Spice Blend'
  },
  {
    id: 'iced-lemon-tea',
    name: 'Iced Lemon Tea',
    category: 'Tea & Refreshers',
    price: 99,
    description: 'Crisp brewed Darjeeling tea shaken over ice with fresh Meyer lemon juice, mint leaves, and raw honey.',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: false,
    dietary: 'Refreshing & Citrusy'
  },
  {
    id: 'matcha-iced-latte',
    name: 'Ceremonial Matcha Latte',
    category: 'Tea & Refreshers',
    price: 189,
    description: 'Shaded stone-ground Japanese Uji matcha whisked with oat milk and a gentle whisper of raw agave.',
    imageUrl: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: false,
    dietary: 'Antioxidant Rich'
  },

  // --- Bakery & Desserts ---
  {
    id: 'butter-croissant',
    name: 'Butter Croissant',
    category: 'Bakery & Desserts',
    price: 119,
    description: 'Classic French laminated pastry, hand-rolled with cultured French butter for feather-light honeycomb layers.',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: true,
    dietary: 'Baked Fresh Every Morning'
  },
  {
    id: 'chocolate-brownie',
    name: 'Chocolate Brownie',
    category: 'Bakery & Desserts',
    price: 129,
    description: 'Rich 70% dark Belgian chocolate fudge brownie with toasted walnuts and a crackly, glossy top crust.',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: true,
    dietary: 'Warm Served With Ganache'
  },
  {
    id: 'cinnamon-swirl-roll',
    name: 'Warm Cinnamon Swirl Roll',
    category: 'Bakery & Desserts',
    price: 139,
    description: 'Soft brioche dough coiled around brown sugar and Ceylon cinnamon, crowned with cream cheese glaze.',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: false,
    dietary: 'Chef Signature Treat'
  },

  // --- Cafe Favourites ---
  {
    id: 'grilled-sandwich',
    name: 'Grilled Sandwich',
    category: 'Cafe Favourites',
    price: 169,
    description: 'Toasted sourdough stuffed with melted mozzarella, charred bell peppers, sun-dried tomatoes, and basil pesto.',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: true,
    dietary: 'Artisanal Sourdough'
  },
  {
    id: 'veggie-burger',
    name: 'Veggie Burger',
    category: 'Cafe Favourites',
    price: 179,
    description: 'Crisp herb-crusted potato and edamame patty, baby spinach, cheddar slice, and roasted garlic aioli on brioche.',
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: true,
    dietary: 'Handmade Brioche Bun'
  },
  {
    id: 'parmesan-herb-fries',
    name: 'Truffle & Herb Fries',
    category: 'Cafe Favourites',
    price: 149,
    description: 'Golden skin-on handcut fries tossed in aromatic rosemary salt, parmesan shavings, and smoked paprika.',
    imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80',
    isVegetarian: true,
    isBestseller: false,
    dietary: 'Perfect Coffee Companion'
  }
];

