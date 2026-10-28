import React from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-espresso-950 font-sans selection:bg-sage-200 selection:text-espresso-950 antialiased">
      {/* Top Demo Notification for Prospective Clients */}
      <DemoBanner />

      {/* Sticky Main Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Featured Menu with Category Filters */}
        <MenuSection />

        {/* Brand Story & Highlights */}
        <AboutSection />

        {/* Visual Gallery with Accessible Lightbox */}
        <GallerySection />

        {/* Illustrative Customer Impressions */}
        <TestimonialsSection />

        {/* Location, Timings, Directions & Reservation Inquiry */}
        <VisitSection />
      </main>

      {/* Final Closing CTA and Footer */}
      <Footer />

      {/* Floating High-Conversion WhatsApp CTA */}
      <WhatsAppButton />
    </div>
  );
};

export default App;

