import React from 'react';
import { SAMPLE_TESTIMONIALS } from '../data/testimonials';
import { Star, MessageSquareQuote, Info, ExternalLink } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      id="testimonials" 
      aria-label="Customer Impressions"
      className="py-16 lg:py-24 bg-cream-100/60 border-t border-cream-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sage-100 text-sage-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Illustrative Reviews</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-4 tracking-tight">
            Loved for Quiet Sips & Thoughtful Brews
          </h2>

          <p className="text-base sm:text-lg text-espresso-600 font-light leading-relaxed">
            Here is how real customer feedback and Google Reviews will be showcased for your cafe.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {SAMPLE_TESTIMONIALS.map((review) => (
            <article
              key={review.id}
              className="bg-cream-50 border border-cream-200/90 rounded-2xl p-6 sm:p-7 shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Demo Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warmAmber-400 text-warmAmber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-espresso-500 bg-cream-200/80 px-2 py-0.5 rounded">
                    Demo Concept
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-espresso-700 text-sm leading-relaxed italic mb-6 font-light">
                  "{review.content}"
                </p>
              </div>

              {/* Author & Favorite Item */}
              <div className="pt-4 border-t border-cream-200/70">
                <h3 className="font-serif text-base font-bold text-espresso-950">
                  {review.author}
                </h3>
                <p className="text-xs text-sage-800 font-medium mb-1">
                  {review.role}
                </p>
                <p className="text-[11px] text-espresso-500">
                  Favorite Order: <span className="font-medium text-espresso-700">{review.favoriteItem}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Demo Review Customization Callout */}
        <div className="bg-cream-200/70 rounded-2xl p-4 sm:p-6 border border-cream-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-espresso-700 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cream-100 flex items-center justify-center shrink-0 text-espresso-600">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-espresso-900">
                Ready to link your cafe's authentic Google Reviews?
              </p>
              <p className="text-espresso-600 mt-0.5">
                We can connect your verified Google Business Profile ratings and automated review badges upon client onboarding.
              </p>
            </div>
          </div>

          <a
            href="#visit"
            className="inline-flex items-center gap-1.5 bg-espresso-800 hover:bg-espresso-900 text-cream-50 px-4 py-2 rounded-xl font-medium shrink-0 transition-colors shadow-soft-sm"
          >
            <span>Configure Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

