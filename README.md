# BREW & BLOOM — Specialty Cafe & Roastery Demo Template
*Production-ready, high-converting static website template designed for cafes in Bhubaneswar, Odisha.*

---

## Overview

**BREW & BLOOM** is a specialty coffee shop website crafted with an editorial cafe aesthetic: warm cream tones, dark espresso typography, muted sage accents, and clean typography.

This project is structured as a **reusable client website template**. All cafe-specific information (brand name, location, contact, WhatsApp, Google Maps, opening hours, menu items, gallery photos, and reviews) is completely decoupled from the presentation components into simple TypeScript configuration files.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [How to Install Dependencies](#2-how-to-install-dependencies)
3. [How to Run Locally](#3-how-to-run-locally)
4. [How to Build for Production](#4-how-to-build-for-production)
5. [How to Change the Cafe Name and Branding](#5-how-to-change-the-cafe-name-and-branding)
6. [How to Change the Menu and Prices](#6-how-to-change-the-menu-and-prices)
7. [How to Configure WhatsApp Inquiries](#7-how-to-configure-whatsapp-inquiries)
8. [How to Configure Google Maps Directions](#8-how-to-configure-google-maps-directions)
9. [How to Deploy on Vercel](#9-how-to-deploy-on-vercel)
10. [How to Reuse the Template for Another Cafe](#10-how-to-reuse-the-template-for-another-cafe)
11. [Project Structure](#11-project-structure)

---

## 1. Prerequisites

Before running or deploying this project, make sure you have:
- **Node.js**: `v18.0.0` or later (tested on Node v24.x)
- **npm**: `v9.0.0` or later (comes with Node.js)
- A modern web browser (Chrome, Edge, Safari, Firefox)
- (Optional) A free [Vercel](https://vercel.com) account for 1-click cloud deployment

Verify your installation:
```bash
node -v
npm -v
```

---

## 2. How to Install Dependencies

From the project root directory, run:

```bash
npm install
```

All required dependencies (`react`, `react-dom`, `lucide-react`, `tailwindcss`, `vite`, `typescript`) will be installed automatically.

---

## 3. How to Run Locally

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173
```

---

## 4. How to Build the Production Version

To run the TypeScript type check and compile an optimized, minified production build:

```bash
npm run build
```

The output will be placed in the `/dist` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 5. How to Change the Cafe Name and Branding

All business branding is centralized in [`src/data/business.ts`](./src/data/business.ts).

Open `src/data/business.ts` and modify the following fields:

```typescript
export const BUSINESS_CONFIG: BusinessConfig = {
  brandName: 'YOUR CAFE NAME',          // e.g. "THE HICKORY ROAST"
  tagline: 'YOUR CUSTOM TAGLINE',       // e.g. "Slow Pours. Warm Stories."
  locationCity: 'Bhubaneswar',
  locationState: 'Odisha',
  locationCountry: 'India',

  // Address
  addressDisplay: 'Saheed Nagar, Bhubaneswar, Odisha',
  addressFull: 'Plot No. 104, Janpath Rd, Saheed Nagar, Bhubaneswar, Odisha 751007',

  // Story & Philosophy
  story: {
    headline: 'Your Cafe Headline',
    subheadline: 'Your cafe subtitle',
    paragraphs: [
      'Write your client’s roasting story here...',
      'Share details about their coffee beans and cafe ambience...'
    ],
    highlights: [ ... ]
  }
};
```

When you save the file, the entire website (Navbar, Hero, About, Footer, Page Meta) updates instantly without touching JSX code.

---

## 6. How to Change the Menu and Prices

Menu categories and items are configured in [`src/data/menu.ts`](./src/data/menu.ts).

Each item is strictly typed with:
- `id`: Unique identifier (string)
- `name`: Dish or drink name
- `category`: `'Signature Coffee'` | `'Tea & Refreshers'` | `'Bakery & Desserts'` | `'Cafe Favourites'`
- `price`: Number in INR (₹)
- `description`: 1-2 sentence description
- `imageUrl`: Direct image URL (Unsplash or hosted CDN)
- `isVegetarian`: `true` or `false`
- `isBestseller`: `true` or `false`
- `dietary`: Short badge tag (e.g., `'100% Arabica'`, `'Gluten-Free'`, `'House Spice'`)

### Example: Adding or Modifying a Menu Item
```typescript
{
  id: 'cappuccino',
  name: 'Artisan Cappuccino',
  category: 'Signature Coffee',
  price: 169, // Updated price in ₹
  description: 'Velvety microfoam over a double pull of high-elevation Chikmagalur Arabica.',
  imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80',
  isVegetarian: true,
  isBestseller: true,
  dietary: '100% Arabica'
}
```

The category filters, bestsellers filter, and search bar update dynamically.

---

## 7. How to Configure WhatsApp

To enable 1-click WhatsApp customer reservations and inquiries:

1. Open [`src/data/business.ts`](./src/data/business.ts).
2. Set `whatsAppNumber` to the client's phone number with the country code, without `+` or spaces (e.g., for India `+91 98765 43210`, enter `'919876543210'`).
3. Set `whatsAppPrefilledMessage` to your desired default greeting.

```typescript
whatsAppNumber: '919876543210',
whatsAppPrefilledMessage: 'Hello! I would like to reserve a table and enquire about your menu.',
```

The floating WhatsApp button and all menu inquiry buttons automatically construct a safe, URL-encoded `https://wa.me/` link.

---

## 8. How to Configure Google Maps

1. Open Google Maps in your browser and locate the client's cafe in Bhubaneswar.
2. Click **Share** > **Copy Link** (or use the full URL from the browser address bar).
3. Open [`src/data/business.ts`](./src/data/business.ts).
4. Update `googleMapsDirectionsUrl`:

```typescript
googleMapsDirectionsUrl: 'https://maps.google.com/?q=YOUR_CAFE_PLACE_ID',
```

*Fallback Safeguard:* If left empty (`''`), the template automatically redirects to a clean search for `Bhubaneswar, Odisha, India` so users never encounter a broken link.

---

## 9. How to Deploy on Vercel

This template is configured out of the box with `vercel.json` for free Vercel hosting.

### Method A: Deploy via Vercel CLI
```bash
# 1. Install Vercel CLI globally (if not already installed)
npm install -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy
vercel

# 4. For production release
vercel --prod
```

### Method B: Deploy via GitHub + Vercel Dashboard
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial cafe website demo"
   git branch -M main
   git remote add origin https://github.com/your-username/cafe-website-demo.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**. Your website will be live in under 60 seconds with SSL and global CDN.

---

## 10. How to Reuse the Template for Another Cafe

Follow this 5-minute checklist whenever onboarding a new cafe client:

1. **Clone or Copy**: Duplicate the project folder for the new client (e.g. `client-cafe-name/`).
2. **Branding (`src/data/business.ts`)**:
   - Change `brandName`, `tagline`, and `addressDisplay`.
   - Update `phonePlaceholder` and `whatsAppNumber`.
   - Update `googleMapsDirectionsUrl`.
   - Adjust `openingHours` and brand story highlights.
   - Set `isDemoMode: false` to hide the top client demo disclaimer.
3. **Menu Items (`src/data/menu.ts`)**:
   - Replace or adjust the food & drink items, categories, and prices.
4. **Visual Gallery (`src/data/gallery.ts`)**:
   - Replace image URLs with the cafe’s actual photos or custom curated Unsplash photography.
5. **Customer Reviews (`src/data/testimonials.ts`)**:
   - Paste authentic customer testimonials and Google Review ratings.
6. **Deploy**:
   - Connect the repo to Vercel and assign the client's custom domain (e.g. `www.clientcafe.in`).

---

## 11. Project Structure

```
cafe-website-demo/
├── dist/                          # Production build output
├── public/                        # Static public assets
├── src/
│   ├── components/                # Reusable presentation components
│   │   ├── AboutSection.tsx       # Brand story & craft philosophy
│   │   ├── DemoBanner.tsx         # Removable demo notice banner
│   │   ├── Footer.tsx             # Pre-footer CTA, links, and copyright
│   │   ├── GallerySection.tsx     # Photo grid with accessible Lightbox modal
│   │   ├── Hero.tsx               # Editorial hero with CTAs & badges
│   │   ├── ImageWithFallback.tsx  # Resilient image component with loading & fallback
│   │   ├── MenuCard.tsx           # Individual menu item card
│   │   ├── MenuSection.tsx        # Menu categories, search & filters
│   │   ├── Navbar.tsx             # Sticky responsive navigation with mobile drawer
│   │   ├── TestimonialsSection.tsx# Illustrative review cards & Google Review hook
│   │   ├── VisitSection.tsx       # Hours, address, map preview & inquiry form
│   │   └── WhatsAppButton.tsx     # High-conversion floating WhatsApp CTA
│   ├── data/                      # Central client configuration files
│   │   ├── business.ts            # Brand, contact, location & story settings
│   │   ├── gallery.ts             # Gallery images & captions
│   │   ├── menu.ts                # Menu categories, dishes & pricing (₹)
│   │   └── testimonials.ts        # Customer reviews data
│   ├── types/
│   │   └── index.ts               # Shared TypeScript interfaces
│   ├── App.tsx                    # Root layout component
│   ├── index.css                  # Tailwind styles & smooth scroll configuration
│   └── main.tsx                   # React DOM entry point
├── index.html                     # HTML5 template with SEO & Google Fonts
├── package.json                   # Scripts and project dependencies
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Custom cafe palette (cream, espresso, sage)
├── tsconfig.json                  # TypeScript compiler options
├── vercel.json                    # Vercel deployment configuration
└── README.md                      # Documentation & client onboarding guide
```

---

## License

MIT © All code is modular, customizable, and ready for commercial client projects.

