import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const activeItem = activeItemIndex !== null ? GALLERY_ITEMS[activeItemIndex] : null;

  const handleClose = useCallback(() => {
    setActiveItemIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => (prev! > 0 ? prev! - 1 : GALLERY_ITEMS.length - 1));
    }
  }, [activeItemIndex]);

  const handleNext = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => (prev! < GALLERY_ITEMS.length - 1 ? prev! + 1 : 0));
    }
  }, [activeItemIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;

      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    if (activeItemIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeItemIndex, handleClose, handlePrev, handleNext]);

  return (
    <section 
      id="gallery" 
      aria-label="Cafe Visual Moments Gallery"
      className="py-16 lg:py-24 bg-cream-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sage-100 text-sage-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Journal</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-4 tracking-tight">
            Moments Captured at Brew & Bloom
          </h2>

          <p className="text-base sm:text-lg text-espresso-600 font-light leading-relaxed">
            From the hiss of the steam wand to gentle afternoon conversations, take a glimpse into our daily rhythm.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item: GalleryItem, index: number) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItemIndex(index)}
              className="group relative rounded-2xl overflow-hidden shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 aspect-[4/3] bg-cream-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-600 cursor-pointer"
              aria-label={`View full photo: ${item.title}`}
            >
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                fallbackText={item.title}
              />

              {/* Hover Overlay with Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-900/30 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-cream-50">
                <span className="text-[11px] font-semibold text-sage-300 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-cream-100 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-200/90 line-clamp-2 mt-1 font-light">
                  {item.caption}
                </p>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream-50/20 backdrop-blur-md flex items-center justify-center text-cream-50">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Accessible Lightbox Modal */}
        {activeItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing ${activeItem.title}`}
            className="fixed inset-0 z-50 bg-espresso-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
            onClick={handleClose}
          >
            {/* Modal Container */}
            <div 
              className="relative max-w-4xl w-full bg-cream-50 rounded-2xl overflow-hidden shadow-soft-xl border border-cream-200/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-espresso-900/60 hover:bg-espresso-900 text-cream-50 backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Left */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-espresso-900/60 hover:bg-espresso-900 text-cream-50 backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Navigation Right */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-espresso-900/60 hover:bg-espresso-900 text-cream-50 backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] bg-espresso-950 flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Caption and Index */}
              <div className="p-5 bg-cream-50 border-t border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-sage-700 uppercase tracking-wider">
                      {activeItem.category}
                    </span>
                    <span className="text-espresso-300">•</span>
                    <span className="text-xs text-espresso-500">
                      Photo {activeItemIndex! + 1} of {GALLERY_ITEMS.length}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-espresso-950">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-espresso-600 font-light mt-0.5">
                    {activeItem.caption}
                  </p>
                </div>

                <div className="text-xs text-espresso-400 text-right shrink-0">
                  <span>Use arrow keys or click outside to close</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

