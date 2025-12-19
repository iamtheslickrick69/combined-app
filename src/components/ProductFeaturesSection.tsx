import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Bot, Database, ChevronDown, ArrowRight } from 'lucide-react';

type ServiceKey = 'data' | 'web' | 'mobile' | 'ai' | null;

interface ServiceData {
  key: ServiceKey;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  colorHex: string;
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
    key: 'web',
    title: 'Web Applications',
    description: 'Custom-built, conversion-optimized digital experiences',
    icon: Globe,
    color: 'purple',
    colorHex: '#a855f7',
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
    color: 'emerald',
    colorHex: '#10b981',
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
    color: 'amber',
    colorHex: '#f59e0b',
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

const dataSystem: ServiceData = {
  key: 'data',
  title: 'Data Systems',
  description: 'Architecture that handles millions of records seamlessly',
  icon: Database,
  color: 'cyan',
  colorHex: '#0cc0df',
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
};

const colorClasses: Record<string, { gradient: string; glow: string; border: string; text: string }> = {
  cyan: {
    gradient: 'from-[#0cc0df] to-white',
    glow: 'from-[#0cc0df]/20 to-white/10',
    border: 'border-[#0cc0df]/50',
    text: 'text-[#0cc0df]',
  },
  purple: {
    gradient: 'from-[#a855f7] to-white',
    glow: 'from-[#a855f7]/20 to-white/10',
    border: 'border-[#a855f7]/50',
    text: 'text-[#a855f7]',
  },
  emerald: {
    gradient: 'from-[#10b981] to-white',
    glow: 'from-[#10b981]/20 to-white/10',
    border: 'border-[#10b981]/50',
    text: 'text-[#10b981]',
  },
  amber: {
    gradient: 'from-[#f59e0b] to-white',
    glow: 'from-[#f59e0b]/20 to-white/10',
    border: 'border-[#f59e0b]/50',
    text: 'text-[#f59e0b]',
  },
};

function ExpandedPanel({ service, onClose }: { service: ServiceData; onClose: () => void }) {
  const colors = colorClasses[service.color];

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className={`bg-[#0a0a0b] border ${colors.border} rounded-md p-8 md:p-10 mt-6`}>
        {/* Headline */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-white mb-8"
        >
          {service.expandedContent.headline}
        </motion.h3>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {service.expandedContent.columns.map((column, colIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + colIndex * 0.1 }}
            >
              <h4 className={`text-sm font-semibold uppercase tracking-wider ${colors.text} mb-4`}>
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + colIndex * 0.1 + itemIndex * 0.05 }}
                    className="text-gray-400 flex items-center gap-2"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient}`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Proof Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-sm mb-6 italic"
        >
          "{service.expandedContent.proof}"
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className={`group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r ${colors.gradient} text-black font-semibold hover:opacity-90 transition-opacity`}
        >
          {service.expandedContent.cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export function ProductFeaturesSection() {
  const [activeService, setActiveService] = useState<ServiceKey>(null);

  const handleCardClick = (key: ServiceKey) => {
    setActiveService(activeService === key ? null : key);
  };

  const dataColors = colorClasses[dataSystem.color];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-32 bg-black">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
          What We Build
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          From landing pages to enterprise AI — we build what moves your business forward.
        </p>
      </div>

      {/* Featured Card: Data Systems */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div
          onClick={() => handleCardClick('data')}
          className="relative group cursor-pointer"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${dataColors.glow} rounded-md blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className={`relative bg-[#141518] border ${activeService === 'data' ? dataColors.border : 'border-white/10'} rounded-md p-8 md:p-12 hover:border-white/20 transition-all`}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className={`w-16 h-16 rounded-md bg-gradient-to-br ${dataColors.gradient} p-[2px] flex-shrink-0`}>
                <div className="w-full h-full bg-[#141518] rounded-md flex items-center justify-center">
                  <Database className="w-8 h-8 text-[#0cc0df]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{dataSystem.title}</h3>
                <p className="text-lg text-gray-400">{dataSystem.description}</p>
              </div>
              <motion.div
                animate={{ rotate: activeService === 'data' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-gray-500" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Data Systems Expanded Panel - appears here, between featured and grid */}
        <AnimatePresence>
          {activeService === 'data' && (
            <ExpandedPanel service={dataSystem} onClose={() => setActiveService(null)} />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const colors = colorClasses[service.color];
          return (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => handleCardClick(service.key)}
              className="group relative cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${colors.glow} rounded-md blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`relative bg-[#141518] border ${activeService === service.key ? colors.border : 'border-white/10'} rounded-md p-8 hover:border-white/20 transition-all h-full`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-md bg-gradient-to-br ${colors.gradient} p-[2px]`}>
                    <div className="w-full h-full bg-[#141518] rounded-md flex items-center justify-center">
                      <service.icon className="w-7 h-7" style={{ color: service.colorHex }} />
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeService === service.key ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Panel for Grid Services - appears below the grid */}
      <AnimatePresence>
        {activeService && activeService !== 'data' && (
          <ExpandedPanel
            service={services.find((s) => s.key === activeService)!}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
