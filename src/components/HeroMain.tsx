import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Globe, Database, Smartphone, Bot } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const oldWay = [
  '6-month discovery phases',
  'Endless stakeholder meetings',
  'Scope creep & change orders',
  'Billed by the hour',
];

const newWay = [
  'V1 delivered in 72 hours',
  'One kickoff call, then we ship',
  'Fixed scope, no surprises',
  'Pay for outcomes, not time',
];

const services = [
  {
    id: 'web',
    label: 'Web Apps',
    icon: Globe,
    color: '#0cc0df',
    headline: 'Sites That Actually Convert',
    features: ['Custom design & dev', 'CMS integration', 'Analytics & tracking', 'Admin dashboard'],
    proof: '40+ sites launched — average 3.2x increase in conversions',
  },
  {
    id: 'data',
    label: 'Data',
    icon: Database,
    color: '#a855f7',
    headline: 'Your Data, Working For You',
    features: ['Real-time dashboards', 'Automated reports', 'REST & GraphQL APIs', 'Admin portals'],
    proof: 'Currently powering 2M+ daily transactions across client systems',
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: Smartphone,
    color: '#10b981',
    headline: 'Apps People Actually Use',
    features: ['iOS + Android apps', 'Push notifications', 'Offline mode', 'Analytics built-in'],
    proof: '50K+ combined downloads across client apps',
  },
  {
    id: 'ai',
    label: 'AI Agents',
    icon: Bot,
    color: '#f59e0b',
    headline: 'Employees That Never Sleep',
    features: ['Custom-trained agent', 'Conversation flows', 'CRM integrations', 'Analytics dashboard'],
    proof: 'Agents handling 10K+ conversations/month for clients',
  },
];

export function HeroMain() {
  const [activeTab, setActiveTab] = useState<'old' | 'new'>('new');
  const [activeService, setActiveService] = useState(services[0]);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 z-10">
        {/* Logo + Badge - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-28 -mt-16"
        >
          <motion.img
            src="/biglogo.png"
            alt="Haestus"
            className="h-20 md:h-24 w-auto"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="w-px h-12 bg-white/30"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#0cc0df]/30 bg-[#0cc0df]/5"
          >
            <span className="text-lg md:text-xl font-medium text-[#0cc0df]">#1 AI Implementation</span>
          </motion.div>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto w-full">
          {/* LEFT SIDE - Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:pr-10 lg:border-r lg:border-white/20 flex flex-col items-center text-center"
          >
            <div>
              {/* Headline */}
              <h1 className="text-4xl md:text-[2.8rem] lg:text-[3.4rem] font-medium tracking-tight text-white mb-4 whitespace-nowrap">
                The Age of Execution.
              </h1>
              <p className="text-xl text-gray-500 italic mb-12">
                show, don't tell
              </p>

              {/* Old vs New Toggle */}
              <div className="mb-8 flex flex-col items-center">
                <div className="inline-flex items-center p-1.5 rounded-xl bg-white/5 border border-white/10 mb-8">
                  <button
                    onClick={() => setActiveTab('old')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === 'old'
                        ? 'bg-white text-black'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    The Old Way
                  </button>
                  <button
                    onClick={() => setActiveTab('new')}
                    className={`flex items-center justify-center px-6 py-2.5 rounded-lg transition-all duration-300 ${
                      activeTab === 'new'
                        ? 'bg-white'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <img
                      src="/biglogo.png"
                      alt="Haestus"
                      className={`h-5 w-auto transition-all duration-300 ${
                        activeTab === 'new' ? 'invert' : 'opacity-50 hover:opacity-80'
                      }`}
                    />
                  </button>
                </div>

              {/* Toggle Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4 text-left"
                >
                  {(activeTab === 'old' ? oldWay : newWay).map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: activeTab === 'old' ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-3 text-lg ${
                        activeTab === 'old' ? 'text-gray-500' : 'text-gray-300'
                      }`}
                    >
                      {activeTab === 'old' ? (
                        <span className="w-2 h-2 rounded-full bg-red-500/50" />
                      ) : (
                        <Check className="w-5 h-5 text-emerald-500" />
                      )}
                      <span className={activeTab === 'new' ? 'text-white' : ''}>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Services + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:pl-10"
          >
            {/* Vertical Tabs + Content */}
            <div className="flex gap-6 mb-6">
              {/* Tab List */}
              <div className="flex flex-col gap-1">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isActive = activeService.id === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service)}
                      className={`flex items-center gap-3 px-5 py-3.5 rounded-lg text-left transition-all duration-200 ${
                        isActive
                          ? 'bg-white/[0.08] border-l-2'
                          : 'hover:bg-white/[0.02] border-l-2 border-transparent'
                      }`}
                      style={{ borderColor: isActive ? service.color : 'transparent' }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: isActive ? service.color : '#6b7280' }}
                      />
                      <span className={`text-base font-medium ${isActive ? 'text-white' : 'text-gray-500'}`}>
                        {service.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Content Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 bg-white/[0.02] border border-white/10 rounded-xl p-8 min-w-[280px] relative"
                >
                  {/* Subtle glow effect */}
                  <div
                    className="absolute -inset-1 rounded-xl blur-xl opacity-15 -z-10 transition-colors duration-300"
                    style={{ backgroundColor: activeService.color }}
                  />

                  <h3
                    className="text-xl font-semibold mb-5"
                    style={{ color: activeService.color }}
                  >
                    {activeService.headline}
                  </h3>

                  <div className="space-y-3 mb-6">
                    {activeService.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-gray-400">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: activeService.color }}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 italic pt-2">{activeService.proof}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 max-w-md">
              <button
                onClick={scrollToWork}
                className="flex-1 px-6 py-3 rounded-xl border border-white/20 text-white text-base font-medium hover:bg-white/5 transition-colors"
              >
                See Our Work
              </button>
              <button
                onClick={scrollToContact}
                className="flex-1 px-6 py-3 rounded-xl bg-white text-black text-base font-medium hover:bg-gray-100 transition-colors"
              >
                Connect
              </button>
            </div>
          </motion.div>
        </div>

        {/* Before/After Comparison Trigger */}
        <div className="mt-12 flex justify-center">
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
}

