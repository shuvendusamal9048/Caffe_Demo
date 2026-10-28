import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Encode the prefilled message
  const prefilled = encodeURIComponent(BUSINESS_CONFIG.whatsAppPrefilledMessage);
  const href = `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${prefilled}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-cream-50 border border-cream-200 text-espresso-900 text-xs px-3.5 py-2 rounded-2xl shadow-soft-lg flex items-center gap-2 animate-fadeIn max-w-[200px]">
          <span>Order or inquire directly on WhatsApp!</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-espresso-400 hover:text-espresso-800"
            aria-label="Dismiss hint"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BREW & BLOOM on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        {/* Pulse beacon */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none group-hover:opacity-0" />
        
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};

