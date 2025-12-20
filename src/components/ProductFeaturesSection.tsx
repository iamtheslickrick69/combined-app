import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Bot, Database, ChevronRight, ArrowRight } from 'lucide-react';

type ServiceKey = 'data' | 'web' | 'mobile' | 'ai' | null;

interface ServiceData {
  key: ServiceKey;
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  expandedContent: {
    headline: string;
    columns: {
      title: string;
      items: string[];
    }[];
    proof: string;
    cta: string;
  };
}

const services: ServiceData[] = [
  {
    key: 'data',
    title: 'Data Systems',
    description: 'Architecture that handles millions of records seamlessly',
    icon: Database,
    accentColor: '#0cc0df',
    expandedContent: {
      headline: 'Your Data, Working For You',
      columns: [
        { title: "What's Included", items: ['Real-time dashboards', 'Automated reports', 'REST & GraphQL APIs', 'Admin portals'] },
        { title: 'Our Stack', items: ['PostgreSQL', 'Redis caching', 'AWS / Vercel', 'Node.js'] },
        { title: 'The Result', items: ['Sub-100ms queries', '99.9% uptime', 'Scales to millions', 'Zero data loss'] },
      ],
      proof: 'Currently powering 2M+ daily transactions across client systems',
      cta: 'Architect Your System',
    },
  },
  {
    key: 'web',
    title: 'Web Applications',
    description: 'Custom-built, conversion-optimized digital experiences',
    icon: Globe,
    accentColor: '#a855f7',
    expandedContent: {
      headline: 'Sites That Actually Convert',
      columns: [
        { title: 'What You Get', items: ['Custom design & dev', 'CMS integration', 'Analytics & tracking', 'Admin dashboard'] },
        { title: 'Built With', items: ['Next.js / React', 'Tailwind CSS', 'Vercel hosting', 'Headless CMS'] },
        { title: 'Performance', items: ['95+ Lighthouse scores', '< 2s load times', 'SEO-optimized', 'Mobile-first'] },
      ],
      proof: '40+ sites launched — average 3.2x increase in conversions',
      cta: 'Start Your Build',
    },
  },
  {
    key: 'mobile',
    title: 'Mobile Apps',
    description: 'Native & cross-platform apps that users actually download',
    icon: Smartphone,
    accentColor: '#10b981',
    expandedContent: {
      headline: 'Apps People Actually Use',
      columns: [
        { title: 'What You Get', items: ['iOS + Android apps', 'Push notifications', 'Offline mode', 'Analytics built-in'] },
        { title: 'Built With', items: ['React Native', 'Swift / Kotlin', 'Firebase', 'Expo'] },
        { title: 'Delivery', items: ['App Store submission', 'TestFlight beta', '6-12 week timeline', 'Ongoing support'] },
      ],
      proof: '50K+ combined downloads across client apps',
      cta: 'Build Your App',
    },
  },
  {
    key: 'ai',
    title: 'AI Agents',
    description: '24/7 autonomous workers that handle real business tasks',
    icon: Bot,
    accentColor: '#f59e0b',
    expandedContent: {
      headline: 'Employees That Never Sleep',
      columns: [
        { title: 'What You Get', items: ['Custom-trained agent', 'Conversation flows', 'CRM integrations', 'Analytics dashboard'] },
        { title: 'Powered By', items: ['OpenAI / Claude', 'LangChain', 'Custom RAG', 'Vector DBs'] },
        { title: 'Capabilities', items: ['24/7 availability', 'Multi-language', 'Learns over time', 'Human handoff'] },
      ],
      proof: 'Agents handling 10K+ conversations/month for clients',
      cta: 'Deploy Your Agent',
    },
  },
];

export function ProductFeaturesSection() {
  const [activeService, setActiveService] = useState<ServiceKey>(null);

  const handleRowClick = (key: ServiceKey) => {
    setActiveService(activeService === key ? null : key);
  };

  return (
    <section className="max-w-[1000px] mx-auto px-6 pt-0 pb-32 bg-black">
      {/* Command Palette Accordion */}
      <div className="bg-[#111214] border border-white/10 rounded-xl overflow-hidden">
        {services.map((service, index) => {
          const isActive = activeService === service.key;
          const Icon = service.icon;

          return (
            <div key={service.key}>
              {/* Row */}
              <motion.div
                onClick={() => handleRowClick(service.key)}
                className={`group relative flex items-center justify-between px-6 py-5 cursor-pointer transition-colors duration-150 ${
                  index !== 0 ? 'border-t border-white/5' : ''
                } ${isActive ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                  style={{ backgroundColor: service.accentColor }}
                />

                {/* Left: Icon + Title + Description */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <Icon
                    className="w-5 h-5 flex-shrink-0 transition-colors duration-200"
                    style={{ color: isActive ? service.accentColor : '#6b7280' }}
                  />
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className={`font-medium transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {service.title}
                    </span>
                    <span className="hidden md:block text-sm text-gray-600 truncate">
                      {service.description}
                    </span>
                  </div>
                </div>

                {/* Right: Arrow */}
                <motion.div
                  animate={{ rotate: isActive ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </motion.div>
              </motion.div>

              {/* Expanded Panel */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 pt-4 border-t border-white/5">
                      {/* Headline */}
                      <motion.h3
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl font-semibold text-white mb-8"
                      >
                        {service.expandedContent.headline}
                      </motion.h3>

                      {/* Three Columns */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {service.expandedContent.columns.map((column, colIndex) => (
                          <motion.div
                            key={column.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + colIndex * 0.08 }}
                          >
                            <h4
                              className="text-xs font-semibold uppercase tracking-wider mb-4"
                              style={{ color: service.accentColor }}
                            >
                              {column.title}
                            </h4>
                            <ul className="space-y-2">
                              {column.items.map((item, itemIndex) => (
                                <motion.li
                                  key={item}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + colIndex * 0.08 + itemIndex * 0.03 }}
                                  className="text-sm text-gray-400 flex items-center gap-2"
                                >
                                  <span
                                    className="w-1 h-1 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: service.accentColor }}
                                  />
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>

                      {/* Proof + CTA Row */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-white/5"
                      >
                        <p className="text-sm text-gray-600 italic">
                          {service.expandedContent.proof}
                        </p>
                        <button
                          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-black transition-opacity hover:opacity-90"
                          style={{ backgroundColor: service.accentColor }}
                        >
                          {service.expandedContent.cta}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
