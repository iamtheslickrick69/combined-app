import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ChevronRight, ChevronLeft, ArrowRight, Globe, Bot, Smartphone, Database } from 'lucide-react';

const serviceTypes = [
  { id: 'webapp', label: 'Web App', icon: Globe, duration: '72 Hours' },
  { id: 'aibot', label: 'Custom AI Bot', icon: Bot, duration: '7 Days' },
  { id: 'mobile', label: 'Mobile App', icon: Smartphone, duration: '6 Weeks' },
  { id: 'crm', label: 'Custom CRM', icon: Database, duration: '8 Weeks' },
];

// Service-specific card content
const serviceCardContent = {
  webapp: {
    discovery: {
      duration: 'Day 1',
      you: ['Share your vision', 'Approve the plan'],
      haestus: ['Deep-dive session', 'Architecture mapped', 'Development begins'],
      tagline: 'Let\'s align on the vision.',
    },
    build: {
      duration: '48-72 Hours',
      you: ['Review live progress', 'Test the beta'],
      haestus: ['AI-powered development', 'Production deployment', 'Live demo ready'],
      tagline: '72 hours. Shipped. Done.',
    },
    perfect: {
      duration: 'Days 3-14',
      you: ['Request changes', 'Launch with confidence'],
      haestus: ['Iterate on feedback', 'Performance tuning', 'Full handoff'],
      tagline: 'Polished to perfection.',
    },
  },
  aibot: {
    discovery: {
      duration: 'Days 1-2',
      you: ['Define use cases', 'Provide training data'],
      haestus: ['Analyze workflows', 'Design bot personality', 'Map integrations'],
      tagline: 'Understanding your brain.',
    },
    build: {
      duration: 'Days 3-5',
      you: ['Test conversations', 'Approve responses'],
      haestus: ['Model training', 'Fine-tuning', 'API integration'],
      tagline: 'Your AI, learning fast.',
    },
    perfect: {
      duration: 'Days 6-7',
      you: ['Final testing', 'Go live'],
      haestus: ['Accuracy tuning', 'Deployment', 'Handoff docs'],
      tagline: 'Smart and ready to work.',
    },
  },
  mobile: {
    discovery: {
      duration: 'Week 1',
      you: ['Define features', 'Approve designs'],
      haestus: ['UX research', 'Wireframes', 'Technical spec'],
      tagline: 'Mapping the experience.',
    },
    build: {
      duration: 'Weeks 2-4',
      you: ['Review builds', 'Beta testing'],
      haestus: ['iOS + Android dev', 'Backend APIs', 'TestFlight ready'],
      tagline: 'Building for both platforms.',
    },
    perfect: {
      duration: 'Weeks 5-6',
      you: ['Final approval', 'App Store assets'],
      haestus: ['Bug fixes', 'Store submission', 'Launch support'],
      tagline: 'Ready for the App Store.',
    },
  },
  crm: {
    discovery: {
      duration: 'Weeks 1-2',
      you: ['Map your processes', 'Define requirements'],
      haestus: ['Workflow analysis', 'Data modeling', 'Integration planning'],
      tagline: 'Understanding your business.',
    },
    build: {
      duration: 'Weeks 3-6',
      you: ['Review modules', 'Test workflows'],
      haestus: ['Custom modules', 'Data migration', 'Integrations built'],
      tagline: 'Your system, your way.',
    },
    perfect: {
      duration: 'Weeks 7-8',
      you: ['Team training', 'Go live'],
      haestus: ['User training', 'Final polish', 'Ongoing support'],
      tagline: 'Your team\'s command center.',
    },
  },
};

// Base card structure (colors stay the same)
const baseCards = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery',
    color: '#0EA5E9',
    bg: 'rgba(14, 165, 233, 0.15)',
    border: 'rgba(14, 165, 233, 0.5)',
  },
  {
    id: 'build',
    number: '02',
    title: 'Build & Ship',
    color: '#A855F7',
    bg: 'rgba(168, 85, 247, 0.15)',
    border: 'rgba(168, 85, 247, 0.5)',
  },
  {
    id: 'perfect',
    number: '03',
    title: 'Perfect',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.15)',
    border: 'rgba(16, 185, 129, 0.5)',
  },
  {
    id: 'intelligence',
    number: '04',
    title: 'Intelligence',
    color: '#FFFFFF',
    bg: 'rgba(255, 255, 255, 0.08)',
    border: 'rgba(255, 255, 255, 0.3)',
    isWhite: true,
    headline: 'We build intelligence layers.',
    subtext: 'Not dashboards. Not tools. Systems that think.',
    philosophy: 'Your business runs on data. We make it run smarter.',
  },
];

export function HeroTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [selectedService, setSelectedService] = useState(serviceTypes[0]);

  // Build dynamic cards based on selected service
  const cards = baseCards.map((baseCard) => {
    if (baseCard.isWhite) return baseCard;

    const serviceContent = serviceCardContent[selectedService.id as keyof typeof serviceCardContent];
    const cardContent = serviceContent[baseCard.id as keyof typeof serviceContent];

    return {
      ...baseCard,
      duration: cardContent.duration,
      you: cardContent.you,
      haestus: cardContent.haestus,
      tagline: cardContent.tagline,
    };
  });

  // Reset to first card when service changes
  const handleServiceChange = (service: typeof serviceTypes[0]) => {
    setSelectedService(service);
    setCurrentIndex(0);
    setDirection(1);
  };

  const goNext = () => {
    if (currentIndex < cards.length - 1) {
      setDirection(1);
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);

      if (nextIndex === cards.length - 1) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 1500);
      }
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isLastCard = currentIndex === cards.length - 1;

  // Calculate card positions in the fan
  const getCardStyle = (index: number) => {
    const relativeIndex = index - currentIndex;

    // Cards behind (to the right in the fan)
    if (relativeIndex > 0) {
      return {
        x: relativeIndex * 25,
        y: relativeIndex * 4,
        rotate: relativeIndex * 3,
        scale: 1 - relativeIndex * 0.02,
        opacity: Math.max(0.3, 1 - relativeIndex * 0.25),
        zIndex: cards.length - relativeIndex,
      };
    }

    // Current card (front)
    if (relativeIndex === 0) {
      return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        zIndex: cards.length,
      };
    }

    // Cards that went to back (already viewed)
    return {
      x: -30 + relativeIndex * 10,
      y: 10,
      rotate: -5,
      scale: 0.95,
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-3 tracking-tight">
            See the Process
          </h2>
          <p className="text-gray-500 mb-8">
            Select a service to see the timeline
          </p>

          {/* Service Type Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {serviceTypes.map((service) => {
              const Icon = service.icon;
              const isSelected = selectedService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceChange(service)}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    isSelected
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-gray-500 group-hover:text-white'}`} />
                  <span className="text-sm font-medium">{service.label}</span>
                  <span className={`text-xs ${isSelected ? 'text-gray-600' : 'text-gray-600'}`}>
                    {service.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Card Deck */}
        <div className="max-w-xl mx-auto">
          {/* Progress indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'w-8' : index < currentIndex ? 'w-4' : 'w-2'
                }`}
                style={{
                  backgroundColor: index <= currentIndex ? card.color : 'rgba(255,255,255,0.2)',
                  opacity: index <= currentIndex ? 1 : 0.4,
                }}
              />
            ))}
          </div>

          {/* Fanned Card Stack */}
          <div className="relative h-[420px] mx-auto" style={{ width: '100%', maxWidth: '480px' }}>
            <AnimatePresence mode="popLayout">
              {cards.map((card, index) => {
                const style = getCardStyle(index);
                const isVisible = index >= currentIndex - 1 && index <= currentIndex + 3;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={card.id}
                    initial={direction === 1
                      ? { x: 100, y: 20, rotate: 10, scale: 0.9, opacity: 0 }
                      : { x: -100, y: 0, rotate: -10, scale: 0.95, opacity: 0 }
                    }
                    animate={{
                      x: style.x,
                      y: style.y,
                      rotate: style.rotate,
                      scale: style.scale,
                      opacity: style.opacity,
                    }}
                    exit={direction === 1
                      ? { x: -150, y: 20, rotate: -15, scale: 0.9, opacity: 0 }
                      : { x: 150, y: 20, rotate: 15, scale: 0.9, opacity: 0 }
                    }
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 cursor-pointer"
                    style={{
                      zIndex: style.zIndex,
                      transformOrigin: 'center bottom',
                    }}
                    onClick={() => {
                      if (index === currentIndex + 1) goNext();
                      if (index === currentIndex - 1) goPrev();
                    }}
                  >
                    <motion.div
                      className="w-full h-full rounded-2xl border-2 p-8 flex flex-col shadow-2xl"
                      animate={{
                        boxShadow: card.isWhite && showConfetti
                          ? [
                              '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.3)',
                              '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px 8px rgba(255,255,255,0.4)',
                              '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.3)',
                            ]
                          : index === currentIndex
                            ? `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px ${card.border}`
                            : '0 10px 30px -10px rgba(0,0,0,0.3)',
                      }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeOut',
                      }}
                      style={{
                        backgroundColor: card.isWhite ? '#0a0a0b' : '#111113',
                        borderColor: card.isWhite && showConfetti ? 'rgba(255,255,255,0.8)' : card.border,
                      }}
                    >
                      {!card.isWhite ? (
                        // Regular step card
                        <>
                          <div className="flex items-start justify-between mb-6">
                            <span
                              className="text-6xl font-bold"
                              style={{ color: card.color }}
                            >
                              {card.number}
                            </span>
                            <span
                              className="text-xs px-3 py-1.5 rounded-full font-medium"
                              style={{
                                backgroundColor: card.bg,
                                color: card.color,
                                border: `1px solid ${card.border}`,
                              }}
                            >
                              {card.duration}
                            </span>
                          </div>

                          <h3 className="text-2xl font-semibold text-white mb-6">
                            {card.title}
                          </h3>

                          <div className="grid grid-cols-2 gap-6 flex-1">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full bg-white/50" />
                                <span className="text-xs font-medium text-white/50 uppercase tracking-wider">You</span>
                              </div>
                              <ul className="space-y-2">
                                {card.you.map((item) => (
                                  <li key={item} className="text-sm text-gray-400">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: card.color }}
                                />
                                <span
                                  className="text-xs font-medium uppercase tracking-wider"
                                  style={{ color: card.color }}
                                >
                                  Haestus
                                </span>
                              </div>
                              <ul className="space-y-2">
                                {card.haestus.map((item) => (
                                  <li key={item} className="text-sm text-gray-400">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="pt-6 border-t border-white/10 mt-auto">
                            <span
                              className="text-sm font-medium"
                              style={{ color: card.color }}
                            >
                              {card.tagline}
                            </span>
                          </div>
                        </>
                      ) : (
                        // White philosophy card - simplified content, CTA moved to nav
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/10 text-white/70 border border-white/20 mb-6 inline-block">
                            {card.duration}
                          </span>

                          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                            {card.headline}
                          </h3>

                          <p className="text-lg text-gray-400 mb-2">
                            {card.subtext}
                          </p>

                          <p className="text-gray-500">
                            {card.philosophy}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation - always shows Back/Next, plus Let's Build on last card */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg border font-medium transition-all duration-200 ${
                currentIndex === 0
                  ? 'border-white/5 text-gray-700 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-white/5'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            {!isLastCard ? (
              <button
                onClick={goNext}
                className="group flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ) : (
              <button className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-colors">
                <span>Let's Build</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          {/* Step counter */}
          <p className="text-center text-gray-600 text-sm mt-4">
            {currentIndex + 1} of {cards.length}
          </p>
        </div>

      </div>
    </section>
  );
}
