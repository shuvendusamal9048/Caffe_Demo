import React from 'react';
import { Coffee, Sparkles, Croissant, Heart, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutSection: React.FC = () => {
  const iconMap = {
    Coffee: Coffee,
    Sparkles: Sparkles,
    Croissant: Croissant,
    Heart: Heart,
    Clock: Sparkles,
    ShieldCheck: CheckCircle2,
  };

  return (
    <section 
      id="story" 
      aria-label="About BREW & BLOOM"
      className="py-16 lg:py-24 bg-cream-100/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Story & Layered Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story / Cafe Photos */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-cream-50 aspect-[4/5] bg-cream-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
                  alt="Cozy reading area and warm interior lighting at Brew and Bloom"
                  className="w-full h-full object-cover"
                  fallbackText="Cafe Sanctuary"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-3/5 rounded-2xl overflow-hidden shadow-soft-xl border-4 border-cream-50 aspect-square bg-cream-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
                  alt="Barista handcrafting a fresh pour-over brew"
                  className="w-full h-full object-cover"
                  fallbackText="Artisan Barista"
                />
              </div>

              {/* Decorative Experience Badge */}
              <div className="absolute top-6 left-6 bg-cream-50/95 backdrop-blur-md rounded-2xl p-4 shadow-soft border border-cream-200/80 max-w-[180px]">
                <p className="font-serif text-2xl font-bold text-espresso-950">100%</p>
                <p className="text-xs text-espresso-600 font-medium">
                  Ethically sourced beans from South Indian estates
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 bg-sage-100 text-sage-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Heart className="w-3.5 h-3.5 text-sage-700" />
              <span>Our Philosophy</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-6 leading-tight">
              {BUSINESS_CONFIG.story.headline}
            </h2>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-sage-800 font-medium mb-6">
              {BUSINESS_CONFIG.story.subheadline}
            </p>

            {/* Paragraphs */}
            <div className="space-y-4 text-espresso-700 font-light leading-relaxed mb-10 text-base">
              {BUSINESS_CONFIG.story.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Three Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-cream-300/80">
              {BUSINESS_CONFIG.story.highlights.map((highlight, idx) => {
                const IconComponent = iconMap[highlight.icon as keyof typeof iconMap] || Coffee;
                return (
                  <div key={idx} className="flex flex-col space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center shadow-soft-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-espresso-900 leading-snug">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-espresso-600 leading-relaxed font-light">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Customization Callout */}
            <div className="mt-8 bg-cream-50 p-4 rounded-xl border border-cream-200/90 flex items-center justify-between text-xs text-espresso-600">
              <p>
                <span className="font-semibold text-espresso-800">For Cafe Owners:</span> This story and philosophy section can be customized to feature your exact roasting journey and culinary highlights.
              </p>
              <a 
                href="#visit" 
                className="inline-flex items-center gap-1 font-semibold text-sage-700 hover:text-sage-900 shrink-0 ml-3"
              >
                <span>Edit Story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

