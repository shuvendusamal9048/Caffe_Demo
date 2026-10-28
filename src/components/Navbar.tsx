import React, { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#visit' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-50/95 backdrop-blur-md shadow-soft border-b border-cream-200/70 py-3.5' 
          : 'bg-cream-50/80 backdrop-blur-sm border-b border-cream-200/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a 
            href="#home" 
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-600 rounded-lg p-1"
            aria-label={`${BUSINESS_CONFIG.brandName} - Return to top`}
          >
            <div className="w-10 h-10 rounded-full bg-espresso-800 text-cream-50 flex items-center justify-center shadow-soft-sm group-hover:bg-sage-700 transition-colors duration-300">
              <Coffee className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-espresso-950 group-hover:text-espresso-800 transition-colors">
                {BUSINESS_CONFIG.brandName}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-sage-700 font-semibold -mt-1 hidden sm:block">
                Specialty Cafe & Roastery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-espresso-700 hover:text-espresso-950 hover:underline hover:underline-offset-8 hover:decoration-sage-500 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#visit"
              className="inline-flex items-center gap-2 bg-espresso-800 hover:bg-espresso-900 text-cream-50 text-sm font-medium px-5 py-2.5 rounded-full shadow-soft-sm hover:shadow-soft transition-all duration-200 active:scale-95 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-espresso-800"
            >
              <MapPin className="w-4 h-4 text-sage-300 group-hover:text-sage-200" />
              <span>Visit Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#visit"
              className="inline-flex items-center text-xs font-semibold text-espresso-800 bg-cream-200 px-3 py-1.5 rounded-full hover:bg-cream-300 transition-colors"
            >
              Visit
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-espresso-800 hover:text-espresso-950 hover:bg-cream-200/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-600"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-cream-100/98 border-b border-cream-300 shadow-soft-lg px-4 pt-3 pb-6 animate-fadeIn transition-all"
        >
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-base font-medium text-espresso-800 hover:text-espresso-950 hover:bg-cream-200/60 px-3 py-2.5 rounded-lg transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
            <div className="pt-3 border-t border-cream-200/80">
              <a
                href="#visit"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-espresso-800 text-cream-50 font-medium py-3 rounded-xl shadow-soft-sm hover:bg-espresso-900 transition-colors"
              >
                <MapPin className="w-4 h-4 text-sage-300" />
                <span>Find Us in Bhubaneswar</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

