import React from 'react';
import { Coffee, ArrowRight, MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';

const InstagramIcon: React.FC = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso-950 text-cream-100 overflow-hidden relative">
      
      {/* Pre-Footer Final CTA Banner */}
      <div className="border-b border-espresso-800/80 py-16 lg:py-20 bg-gradient-to-b from-espresso-900 to-espresso-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-sage-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <Coffee className="w-4 h-4" />
              Visit Us Today
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-4 tracking-tight leading-tight">
              Your Next Favourite Coffee Spot Awaits.
            </h2>
            <p className="text-cream-200/80 text-base sm:text-lg font-light mb-8 max-w-xl mx-auto">
              Join us for slow sips, rich aroma, and relaxing moments in Bhubaneswar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sage-600 hover:bg-sage-500 text-cream-50 font-medium px-8 py-3.5 rounded-xl shadow-soft transition-all duration-200 group text-sm"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#visit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-espresso-800 hover:bg-espresso-700 text-cream-100 border border-espresso-700 font-medium px-7 py-3.5 rounded-xl transition-all duration-200 text-sm"
              >
                <MapPin className="w-4 h-4 text-sage-300" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sage-700 text-cream-50 flex items-center justify-center shadow-soft-sm">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream-50">
                {BUSINESS_CONFIG.brandName}
              </span>
            </div>
            <p className="text-sage-200 text-sm font-light mb-4 italic">
              "{BUSINESS_CONFIG.tagline}"
            </p>
            <p className="text-cream-300/80 text-xs leading-relaxed max-w-sm mb-6 font-light">
              A premium specialty cafe concept designed for slow living, ethical brews, and comforting artisanal delicacies in {BUSINESS_CONFIG.locationCity}, {BUSINESS_CONFIG.locationState}.
            </p>

            {/* Social Placeholder Icons */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile placeholder"
                className="w-9 h-9 rounded-lg bg-espresso-900 hover:bg-sage-700 text-cream-200 hover:text-cream-50 flex items-center justify-center transition-colors border border-espresso-800"
              >
                <InstagramIcon />
              </a>
              <a
                href={BUSINESS_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page placeholder"
                className="w-9 h-9 rounded-lg bg-espresso-900 hover:bg-sage-700 text-cream-200 hover:text-cream-50 flex items-center justify-center transition-colors border border-espresso-800"
              >
                <FacebookIcon />
              </a>
              <a
                href={BUSINESS_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile placeholder"
                className="w-9 h-9 rounded-lg bg-espresso-900 hover:bg-sage-700 text-cream-200 hover:text-cream-50 flex items-center justify-center transition-colors border border-espresso-800"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-semibold text-cream-100 mb-4 tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-cream-300">
              <li>
                <a href="#home" className="hover:text-cream-50 hover:underline transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-cream-50 hover:underline transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#story" className="hover:text-cream-50 hover:underline transition-colors">Our Story & Craft</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cream-50 hover:underline transition-colors">Visual Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cream-50 hover:underline transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-cream-50 hover:underline transition-colors">Contact & Directions</a>
              </li>
            </ul>
          </div>

          {/* Menu Highlights */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-base font-semibold text-cream-100 mb-4 tracking-wide">
              Featured Selections
            </h3>
            <ul className="space-y-2.5 text-xs text-cream-300">
              <li className="flex items-center justify-between">
                <span>Cappuccino (Double Shot)</span>
                <span className="font-mono text-sage-300">₹149</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Cold Coffee Vanille</span>
                <span className="font-mono text-sage-300">₹179</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Slow-Simmered Masala Chai</span>
                <span className="font-mono text-sage-300">₹79</span>
              </li>
              <li className="flex items-center justify-between">
                <span>French Butter Croissant</span>
                <span className="font-mono text-sage-300">₹119</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Dark Chocolate Brownie</span>
                <span className="font-mono text-sage-300">₹129</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Summary */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-base font-semibold text-cream-100 mb-4 tracking-wide">
              Location & Hours
            </h3>
            <div className="space-y-3 text-xs text-cream-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage-300 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.addressDisplay}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-warmAmber-300 shrink-0 mt-0.5" />
                <div>
                  <p>Mon–Fri: 08:00 AM – 10:30 PM</p>
                  <p>Sat–Sun: 07:30 AM – 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono">{BUSINESS_CONFIG.phonePlaceholder}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Demo Notice */}
        <div className="mt-12 pt-8 border-t border-espresso-800 text-xs text-cream-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} {BUSINESS_CONFIG.brandName}. All rights reserved. Fictional demo brand for presentation.
          </p>
          <div className="flex items-center gap-1 text-[11px] text-cream-400">
            <span>Built with care for small business cafe clients in Bhubaneswar</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
