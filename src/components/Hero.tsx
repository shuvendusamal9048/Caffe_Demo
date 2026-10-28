import React from 'react';
import { ArrowRight, MapPin, Coffee, Sparkles, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      aria-label="Welcome to BREW & BLOOM"
      className="relative overflow-hidden pt-6 pb-16 lg:pt-14 lg:pb-24"
    >
      {/* Background subtle botanical / warm ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-sage-200/40 rounded-full blur-3xl -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-0 w-80 h-80 bg-cream-300/40 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 self-start bg-cream-200/80 border border-cream-300/70 text-espresso-700 px-3.5 py-1.5 rounded-full text-xs font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-sage-500 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-sage-600" />
              <span>{BUSINESS_CONFIG.locationCity}, {BUSINESS_CONFIG.locationState}</span>
              <span className="text-cream-400">•</span>
              <span className="text-espresso-600">Specialty Coffee Bar</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso-950 font-normal leading-[1.15] tracking-tight mb-6">
              Your Everyday Escape, <br />
              <span className="italic font-normal text-espresso-700">One Cup at a Time.</span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-lg sm:text-xl text-espresso-600 font-light leading-relaxed max-w-2xl mb-8">
              Thoughtfully brewed coffee, comforting bites, and little moments worth slowing down for in the heart of Bhubaneswar.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-espresso-800 hover:bg-espresso-900 text-cream-50 font-medium px-8 py-4 rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-espresso-800 text-base"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#visit"
                className="inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-cream-200 text-espresso-800 border border-cream-300 font-medium px-7 py-4 rounded-xl shadow-soft-sm hover:shadow-soft transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cream-400 text-base"
              >
                <MapPin className="w-4 h-4 text-sage-600" />
                <span>Find Us & Timings</span>
              </a>
            </div>

            {/* Trust and Feature Micro-Badges */}
            <div className="pt-6 border-t border-cream-300/60 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-espresso-900">Single Origin</p>
                  <p className="text-[11px] text-espresso-500">Estate Arabica Beans</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cream-200 text-espresso-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-espresso-900">Fresh Bakes</p>
                  <p className="text-[11px] text-espresso-500">Handcrafted Daily</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-warmAmber-100 text-warmAmber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-espresso-900">Open Daily</p>
                  <p className="text-[11px] text-espresso-500">8:00 AM – 10:30 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft-xl border-4 border-cream-100 bg-cream-200 aspect-[4/5] sm:aspect-[3/4]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Cozy specialty cafe interior with artisan coffee and warm timber tones"
                  className="w-full h-full object-cover"
                  fallbackText="BREW & BLOOM CAFE"
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid caption inside the photo frame */}
                <div className="absolute bottom-4 left-4 right-4 text-cream-50 p-3 bg-espresso-900/40 backdrop-blur-md rounded-xl border border-cream-50/15">
                  <p className="text-xs font-medium tracking-wide text-sage-200 uppercase">
                    Handcrafted in Odisha
                  </p>
                  <p className="font-serif text-sm sm:text-base text-cream-100 font-normal">
                    "Every pour tells a story of patience and honest flavor."
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Artisan Roasts */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-cream-50/95 backdrop-blur-sm border border-cream-200/80 rounded-2xl p-3 sm:p-4 shadow-soft-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-sage-700">Brewed With Care</div>
                  <div className="text-xs sm:text-sm font-bold text-espresso-900">Slow Pour-Overs & Lattes</div>
                </div>
              </div>

              {/* Floating Badge 2: Welcoming Atmosphere */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-cream-50/95 backdrop-blur-sm border border-cream-200/80 rounded-2xl py-2.5 px-4 shadow-soft-lg flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-espresso-800">Peaceful Ambience & Wi-Fi</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

