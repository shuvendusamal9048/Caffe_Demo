import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Navigation, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';

export const VisitSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    message: '',
    guests: '2',
    preferredTime: ''
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.phonePlaceholder);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneOrEmail) return;
    setFormSubmitted(true);
  };

  // WhatsApp link preparation
  const whatsAppHref = BUSINESS_CONFIG.whatsAppNumber
    ? `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${encodeURIComponent(
        BUSINESS_CONFIG.whatsAppPrefilledMessage
      )}`
    : '#';

  // Google Maps directions fallback to Bhubaneswar search if unspecified
  const mapsHref = BUSINESS_CONFIG.googleMapsDirectionsUrl || 
    'https://www.google.com/maps/search/?api=1&query=Bhubaneswar%2C+Odisha%2C+India';

  return (
    <section 
      id="visit" 
      aria-label="Visit and Contact Details"
      className="py-16 lg:py-24 bg-cream-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sage-100 text-sage-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Our Cafe</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-4 tracking-tight">
            Slow Down & Sip With Us
          </h2>

          <p className="text-base sm:text-lg text-espresso-600 font-light leading-relaxed">
            Conveniently nestled in Bhubaneswar, ready to welcome you for your morning espresso or peaceful evening unwind.
          </p>
        </div>

        {/* Main Grid: Details + Map & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Business Location & Timings Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-cream-100/90 border border-cream-200/90 rounded-2xl p-6 shadow-soft-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-espresso-950 mb-1">
                    Cafe Address
                  </h3>
                  <p className="text-sm font-medium text-espresso-800 mb-1">
                    {BUSINESS_CONFIG.addressDisplay}
                  </p>
                  <p className="text-xs text-espresso-500 font-light mb-3">
                    {BUSINESS_CONFIG.addressFull}
                  </p>
                  
                  {/* Google Maps Button */}
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-espresso-800 hover:bg-espresso-900 text-cream-50 text-xs font-medium px-4 py-2 rounded-xl transition-colors shadow-soft-sm"
                  >
                    <Navigation className="w-3.5 h-3.5 text-sage-300" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-cream-100/90 border border-cream-200/90 rounded-2xl p-6 shadow-soft-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-warmAmber-100 text-warmAmber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg font-bold text-espresso-950">
                      Opening Hours
                    </h3>
                    <span className="text-[10px] uppercase font-semibold text-espresso-500 bg-cream-200 px-2 py-0.5 rounded">
                      Demo Schedule
                    </span>
                  </div>

                  <div className="space-y-3">
                    {BUSINESS_CONFIG.openingHours.map((schedule, idx) => (
                      <div key={idx} className="flex flex-col text-sm border-b border-cream-200/60 pb-2 last:border-b-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-espresso-900">{schedule.days}</span>
                          <span className="font-semibold text-sage-800">{schedule.hours}</span>
                        </div>
                        {schedule.note && (
                          <span className="text-[11px] text-espresso-500 font-light mt-0.5">
                            {schedule.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Instant WhatsApp Enquiries */}
            <div className="bg-cream-100/90 border border-cream-200/90 rounded-2xl p-6 shadow-soft-sm">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-espresso-950 mb-0.5">
                    Connect & Reservations
                  </h3>
                  <p className="text-xs text-espresso-500 font-light">
                    Demo phone placeholder for client configuration.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {/* Phone placeholder with copy action */}
                <div className="flex items-center justify-between bg-cream-50 p-3 rounded-xl border border-cream-200">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-espresso-500" />
                    <span className="text-xs font-mono font-medium text-espresso-800">
                      {BUSINESS_CONFIG.phonePlaceholder}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="text-xs font-medium text-sage-700 hover:text-sage-900 flex items-center gap-1"
                    title="Copy demo number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct WhatsApp Action Button */}
                <a
                  href={whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium py-3 px-4 rounded-xl shadow-soft-sm hover:shadow-soft transition-all duration-200 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Preview + Table / Event Enquiry Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Map Visual Mockup */}
            <div className="rounded-2xl overflow-hidden border border-cream-300 shadow-soft-sm bg-cream-200 relative aspect-[16/9] sm:aspect-[21/9]">
              <div 
                className="w-full h-full bg-[#E8ECE2] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
              >
                {/* Decorative Map Grid Lines */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#3F5639 1px, transparent 1px), radial-gradient(#3F5639 1px, #E8ECE2 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px'
                  }}
                />

                <div className="relative z-10 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-espresso-800 text-cream-50 mx-auto flex items-center justify-center shadow-soft mb-3 animate-bounce">
                    <MapPin className="w-6 h-6 text-sage-300" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-espresso-950 mb-1">
                    {BUSINESS_CONFIG.brandName} • Bhubaneswar
                  </h4>
                  <p className="text-xs text-espresso-600 font-light mb-4">
                    Easily accessible in the prime cafe corridor of Bhubaneswar, Odisha.
                  </p>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-espresso-900 text-cream-50 text-xs font-semibold px-4 py-2 rounded-xl shadow-soft hover:bg-espresso-800 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Reservation or Table Enquiry Form */}
            <div className="bg-cream-100/90 border border-cream-200/90 rounded-2xl p-6 sm:p-8 shadow-soft-sm">
              <h3 className="font-serif text-xl font-bold text-espresso-950 mb-1">
                Reserve a Table or Send an Inquiry
              </h3>
              <p className="text-xs text-espresso-600 font-light mb-6">
                Planning a coffee date, quiet workspace session, or small gathering? Send us a quick note.
              </p>

              {formSubmitted ? (
                <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 text-center animate-fadeIn">
                  <CheckCircle className="w-10 h-10 text-sage-600 mx-auto mb-2" />
                  <h4 className="font-serif text-lg font-bold text-espresso-900 mb-1">
                    Demo Inquiry Received!
                  </h4>
                  <p className="text-xs text-espresso-600 max-w-md mx-auto mb-4 font-light">
                    In the live version for your cafe, submissions can be routed directly to your business email, WhatsApp, or Google Sheet.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phoneOrEmail: '', message: '', guests: '2', preferredTime: '' });
                    }}
                    className="text-xs font-semibold text-sage-700 underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitForm} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-espresso-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Priyadarshi Dash"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-espresso-900 text-xs focus:outline-none focus:ring-1 focus:ring-sage-600 focus:border-sage-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact" className="block text-xs font-medium text-espresso-700 mb-1">
                        Phone or Email *
                      </label>
                      <input
                        type="text"
                        id="contact"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={formData.phoneOrEmail}
                        onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-espresso-900 text-xs focus:outline-none focus:ring-1 focus:ring-sage-600 focus:border-sage-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guests" className="block text-xs font-medium text-espresso-700 mb-1">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-espresso-900 text-xs focus:outline-none focus:ring-1 focus:ring-sage-600 focus:border-sage-600 transition-colors"
                      >
                        <option value="1">1 Person (Quiet work session)</option>
                        <option value="2">2 People (Coffee date)</option>
                        <option value="3-4">3 to 4 People (Small group)</option>
                        <option value="5+">5+ People (Group gathering)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-xs font-medium text-espresso-700 mb-1">
                        Preferred Date & Time
                      </label>
                      <input
                        type="text"
                        id="time"
                        placeholder="e.g. Today around 5:00 PM"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-espresso-900 text-xs focus:outline-none focus:ring-1 focus:ring-sage-600 focus:border-sage-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-espresso-700 mb-1">
                      Notes / Dietary Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Special coffee preference, outdoor seating request, or general question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-espresso-900 text-xs focus:outline-none focus:ring-1 focus:ring-sage-600 focus:border-sage-600 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-espresso-500">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Demo form preview — no live server needed</span>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-espresso-800 hover:bg-espresso-900 text-cream-50 text-xs font-semibold px-5 py-2.5 rounded-xl shadow-soft transition-all duration-200"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Demo Inquiry</span>
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

