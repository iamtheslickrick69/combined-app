import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Zap, Rocket, Wrench, FolderOpen, Check, ChevronRight, FileText, Bot, CreditCard, Globe, Smartphone, Link, Flame } from 'lucide-react';

type ItemKey = 'strategy' | 'rapid' | 'launch' | 'solutions' | 'atlas' | null;

const subMenuItems = [
  { icon: FileText, label: 'SEO & Content', description: 'Search-optimized content strategy' },
  { icon: Bot, label: 'Custom AI Bots', description: 'Trained on your data' },
  { icon: CreditCard, label: 'Payment Systems', description: 'Stripe, subscriptions, invoicing' },
  { icon: Globe, label: 'Web Applications', description: 'Next.js, React, full-stack' },
  { icon: Smartphone, label: 'Mobile Apps', description: 'iOS & Android native' },
  { icon: Link, label: 'API Integrations', description: 'Connect any service' },
];

const mainItems = [
  {
    key: 'strategy' as ItemKey,
    icon: Target,
    title: 'Strategy & Discovery',
    tag: 'Service',
    description: 'Identify highest-impact AI opportunities',
    expandable: false,
  },
  {
    key: 'rapid' as ItemKey,
    icon: Zap,
    title: 'Rapid Implementation',
    tag: 'Service',
    description: '48-72 hour deployment guarantee',
    expandable: false,
  },
  {
    key: 'launch' as ItemKey,
    icon: Rocket,
    title: 'Launch & Scale',
    tag: 'Service',
    description: 'Production-ready with monitoring',
    expandable: false,
  },
  {
    key: 'solutions' as ItemKey,
    icon: Wrench,
    title: 'Solutions',
    tag: 'Explore',
    description: 'View all capabilities →',
    expandable: true,
  },
  {
    key: 'atlas' as ItemKey,
    icon: FolderOpen,
    title: 'Atlas',
    tag: 'Portfolio',
    description: 'View all projects →',
    expandable: false,
    link: '/portfolio',
  },
];

interface WhatWeOfferSectionProps {
  onAtlasClick?: () => void;
}

export function WhatWeOfferSection({ onAtlasClick }: WhatWeOfferSectionProps) {
  const [selectedItem, setSelectedItem] = useState<ItemKey>(null);
  const [expandedSolutions, setExpandedSolutions] = useState(false);

  const handleItemClick = (item: typeof mainItems[0]) => {
    if (item.key === 'solutions') {
      setExpandedSolutions(!expandedSolutions);
      setSelectedItem(item.key);
    } else if (item.key === 'atlas' && onAtlasClick) {
      // Open Atlas modal
      onAtlasClick();
    } else {
      setSelectedItem(selectedItem === item.key ? null : item.key);
    }
  };

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-300">How We Help</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 tracking-tight">
              Built for Speed, Designed for Impact
            </h2>

            <p className="text-xl text-gray-400">
              Choose your path. We handle the rest.
            </p>
          </motion.div>

          {/* Command Palette Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#10A37F]/20 to-white/10 rounded-2xl blur-xl opacity-50" />

            <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Input Area */}
              <div className="p-4 border-b border-white/5 flex items-center gap-3">
                <div className="w-[2px] h-5 bg-[#10A37F] animate-pulse" />
                <span className="text-gray-400 text-lg">/What can we help with...</span>
              </div>

              {/* Items List */}
              <div className="p-2">
                {mainItems.map((item, index) => {
                  const isSelected = selectedItem === item.key;
                  const isExpanded = item.key === 'solutions' && expandedSolutions;

                  return (
                    <div key={item.key}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        onClick={() => handleItemClick(item)}
                        className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 relative ${
                          isSelected
                            ? 'bg-[#10A37F]/10 border-l-2 border-[#10A37F]'
                            : 'hover:bg-white/5 border-l-2 border-transparent hover:border-[#10A37F]/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-5 h-5 transition-colors ${isSelected ? 'text-[#10A37F]' : 'text-gray-500'}`} />
                          <span className={`font-medium transition-colors ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                            {item.title}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded border ${
                            item.tag === 'Explore'
                              ? 'bg-[#10A37F]/10 text-[#10A37F] border-[#10A37F]/20'
                              : 'bg-white/5 text-gray-500 border-white/5'
                          }`}>
                            {item.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                            {item.description}
                          </span>
                          {isSelected && !item.expandable && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            >
                              <Check className="w-4 h-4 text-[#10A37F]" />
                            </motion.div>
                          )}
                          {item.expandable && (
                            <motion.div
                              animate={{ rotate: isExpanded ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className="w-4 h-4 text-gray-500" />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>

                      {/* Expandable Sub-menu for Solutions */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-10 pr-2 py-2 space-y-1">
                              {subMenuItems.map((subItem, subIndex) => (
                                <motion.div
                                  key={subItem.label}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.05 }}
                                  className="group flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#10A37F]/10 border-l-2 border-transparent hover:border-[#10A37F]/50"
                                >
                                  <div className="flex items-center gap-3">
                                    <subItem.icon className="w-4 h-4 text-gray-500 group-hover:text-[#10A37F] transition-colors" />
                                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                      {subItem.label}
                                    </span>
                                  </div>
                                  <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
                                    {subItem.description}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
