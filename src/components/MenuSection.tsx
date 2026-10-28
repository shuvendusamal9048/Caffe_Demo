import React, { useState, useMemo } from 'react';
import { MenuCategory } from '../types';
import { MENU_ITEMS } from '../data/menu';
import { MenuCard } from './MenuCard';
import { Coffee, Sparkles, Filter, Info, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [onlyBestsellers, setOnlyBestsellers] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories: MenuCategory[] = [
    'All',
    'Signature Coffee',
    'Tea & Refreshers',
    'Bakery & Desserts',
    'Cafe Favourites',
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesBestseller = !onlyBestsellers || item.isBestseller;
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesBestseller && matchesSearch;
    });
  }, [selectedCategory, onlyBestsellers, searchQuery]);

  // Construct whatsapp inquiry link
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsAppPrefilledMessage
  )}`;

  return (
    <section 
      id="menu" 
      aria-label="Our Featured Cafe Menu"
      className="py-16 lg:py-24 bg-cream-50/60 border-t border-cream-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sage-100 text-sage-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Coffee className="w-3.5 h-3.5" />
            <span>Curated Offerings</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-4 tracking-tight">
            Crafted for the Discerning Palate
          </h2>
          
          <p className="text-base sm:text-lg text-espresso-600 font-light leading-relaxed">
            Every roast is selected with care, and each bakery item is prepared fresh every morning to bring you honest, comforting flavor.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div 
            className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none"
            role="tablist"
            aria-label="Menu category filters"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-600 ${
                    isActive
                      ? 'bg-espresso-800 text-cream-50 shadow-soft-sm'
                      : 'bg-cream-100 hover:bg-cream-200/80 text-espresso-700 border border-cream-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Secondary Quick Filters: Bestseller toggle & Search */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => setOnlyBestsellers(!onlyBestsellers)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors ${
                onlyBestsellers
                  ? 'bg-warmAmber-100 border-warmAmber-300 text-espresso-900 font-semibold'
                  : 'bg-cream-100 border-cream-200 text-espresso-600 hover:bg-cream-200/60'
              }`}
              aria-pressed={onlyBestsellers}
            >
              <Sparkles className="w-3.5 h-3.5 text-warmAmber-600" />
              <span>Bestsellers Only</span>
            </button>

            {/* Quick search input */}
            <div className="relative flex-1 sm:flex-initial">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-44 px-3 py-2 text-xs rounded-xl bg-cream-100 border border-cream-200 text-espresso-900 placeholder:text-espresso-400 focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-500 transition-colors"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-espresso-400 hover:text-espresso-700"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-cream-100/60 rounded-2xl border border-cream-200/80 p-8">
            <Filter className="w-10 h-10 text-espresso-400 mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl font-semibold text-espresso-900 mb-1">
              No matching treats found
            </h3>
            <p className="text-sm text-espresso-600 mb-4">
              Try adjusting your search terms or category selection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setOnlyBestsellers(false);
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-sage-700 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Sample Disclaimer and WhatsApp Ordering Callout */}
        <div className="mt-12 pt-8 border-t border-cream-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-espresso-600">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-espresso-400 shrink-0" />
            <p>
              <span className="font-semibold text-espresso-800">Sample Demo Prices:</span> These represent fictional pricing for demo presentation. Easily update prices and items in <code className="bg-cream-200 px-1 py-0.5 rounded text-[11px] font-mono text-espresso-900">src/data/menu.ts</code>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-sage-600 hover:bg-sage-700 text-cream-50 px-4 py-2 rounded-lg font-medium transition-colors shadow-soft-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
