import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroMain } from './components/HeroMain';
import { AISection } from './components/AISection';
import { SolutionsSection } from './components/SolutionsSection';
import { CompaniesSection } from './components/CompaniesSection';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { HeroTimeline } from './components/HeroTimeline';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TechStackSection } from './components/TechStackSection';
import { ContactSection } from './components/ContactSection';
import { AtlasModal } from './components/AtlasModal';
import { BlogCardStack } from './components/BlogCardStack';
import { AboutSection } from './components/AboutSection';
import { usePreloadImages } from './hooks/usePreloadImages';

// Preload all Atlas images
const ATLAS_IMAGES = [
  '/grease.png',
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
  '/7.png',
];

function App() {
  const [isAtlasOpen, setIsAtlasOpen] = useState(false);

  // Preload images on app mount
  const imagesLoaded = usePreloadImages(ATLAS_IMAGES);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navigation />
      <AtlasModal isOpen={isAtlasOpen} onClose={() => setIsAtlasOpen(false)} />

      <main>
        {/* Hero - includes services */}
        <HeroMain />

        {/* How We Help - Ask Slick */}
        <AISection />

        {/* Solutions - All capabilities */}
        <SolutionsSection />

        <CompaniesSection />

        {/* Portfolio / Work */}
        <div id="work">
          <PortfolioCarousel onAtlasClick={() => setIsAtlasOpen(true)} />
        </div>

        {/* Timeline / Process */}
        <div id="process">
          <HeroTimeline />
        </div>

        {/* Testimonials & Case Studies */}
        <TestimonialsSection />

        {/* About Haestus */}
        <div id="about">
          <AboutSection />
        </div>

        {/* Blog Articles */}
        <section id="blog" className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Latest Insights
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Strategic thinking on AI, payments, and building competitive advantage
              </p>
            </div>
            <BlogCardStack />
          </div>
        </section>

        {/* Tech Stack & Guarantees */}
        <TechStackSection />

        {/* Contact Form */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src="/biglogo.png" alt="Haestus" className="h-6 w-auto opacity-50" />
              <span className="text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Haestus. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="mailto:hello@haestus.com" className="hover:text-white transition-colors">
                hello@haestus.com
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
