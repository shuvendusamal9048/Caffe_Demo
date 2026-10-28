import React, { useState } from 'react';
import { Info, X, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';

export const DemoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || !BUSINESS_CONFIG.demoNotice.isDemoMode) {
    return null;
  }

  return (
    <aside 
      aria-label="Demo website disclaimer"
      className="bg-espresso-900 text-cream-100 text-xs py-2 px-4 border-b border-espresso-800 transition-all duration-300 relative z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-flex items-center gap-1 bg-sage-600/90 text-cream-50 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider shrink-0">
            <Sparkles className="w-3 h-3" />
            Client Demo
          </span>
          <p className="truncate text-cream-200">
            <span className="font-semibold text-cream-100">Sample Cafe Website:</span> {BUSINESS_CONFIG.demoNotice.bannerText}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#visit"
            className="hidden sm:inline-flex items-center gap-1 text-sage-300 hover:text-cream-50 underline underline-offset-2 transition-colors font-medium"
          >
            <Info className="w-3 h-3" />
            Customize This Template
          </a>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss demo notice"
            className="text-cream-400 hover:text-cream-100 p-1 rounded hover:bg-espresso-800 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

