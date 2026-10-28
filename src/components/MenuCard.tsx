import React from 'react';
import { MenuItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Star, Leaf } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onSelect?: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <article 
      className="group bg-cream-100/90 hover:bg-cream-100 border border-cream-200/90 hover:border-cream-300 rounded-2xl overflow-hidden shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col h-full focus-within:ring-2 focus-within:ring-sage-600"
    >
      {/* Item Image with Fallback */}
      <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
        <ImageWithFallback
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          fallbackText={item.name}
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {item.isBestseller ? (
            <span className="inline-flex items-center gap-1 bg-espresso-900/90 text-warmAmber-300 backdrop-blur-sm text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
              <Star className="w-3 h-3 fill-warmAmber-400 text-warmAmber-400" />
              Bestseller
            </span>
          ) : <span />}

          {item.isVegetarian && (
            <span 
              className="inline-flex items-center gap-1 bg-cream-50/95 text-sage-800 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm border border-sage-200"
              title="Vegetarian preparation"
            >
              <Leaf className="w-2.5 h-2.5 text-sage-600" />
              Veg
            </span>
          )}
        </div>

        {/* Dietary / Specialty Tag at bottom of image */}
        {item.dietary && (
          <div className="absolute bottom-2 left-3">
            <span className="bg-espresso-950/75 backdrop-blur-md text-cream-100 text-[10px] font-medium px-2 py-0.5 rounded-md">
              {item.dietary}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Header with Title & Price */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-serif text-lg font-bold text-espresso-950 group-hover:text-espresso-800 transition-colors leading-snug">
              {item.name}
            </h3>
            <span className="font-serif text-lg font-bold text-sage-700 shrink-0">
              ₹{item.price}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-espresso-600 font-light leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Bottom meta */}
        <div className="mt-4 pt-3 border-t border-cream-200/60 flex items-center justify-between text-xs text-espresso-500">
          <span className="capitalize">{item.category}</span>
          <span className="text-[11px] text-sage-700 font-medium tracking-wide">
            Freshly prepared
          </span>
        </div>
      </div>
    </article>
  );
};

