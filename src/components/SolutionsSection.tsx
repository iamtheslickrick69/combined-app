import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Bot, CreditCard, Globe, Smartphone, Link, Wrench } from 'lucide-react';

const solutions = [
  {
    title: 'Web Applications',
    description: 'Fast, scalable web apps built with modern frameworks.',
    features: ['Custom development', 'CMS integration', 'API development', 'Cloud hosting'],
    color: '#0cc0df',
    icon: Globe,
  },
  {
    title: 'SEO & Content',
    description: 'Dominate search results with AI-powered content.',
    features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Analytics tracking'],
    color: '#0cc0df',
    icon: FileText,
  },
  {
    title: 'Custom AI Bots',
    description: 'Intelligent assistants that know your business inside and out.',
    features: ['Custom training', 'Multi-platform', '24/7 availability', 'Human handoff'],
    color: '#a855f7',
    icon: Bot,
  },
  {
    title: 'API Integrations',
    description: 'Seamlessly connect your tools and automate workflows.',
    features: ['REST & GraphQL', 'Webhooks', 'Data sync', 'Custom connectors'],
    color: '#a855f7',
    icon: Link,
  },
  {
    title: 'Payment Systems',
    description: 'Seamless payment flows that maximize conversion.',
    features: ['Stripe integration', 'Subscription billing', 'Invoicing', 'Revenue analytics'],
    color: '#10b981',
    icon: CreditCard,
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform apps that users love.',
    features: ['iOS & Android', 'Push notifications', 'Offline support', 'App Store deployment'],
    color: '#f59e0b',
    icon: Smartphone,
  },
];

export function SolutionsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Wrench className="w-5 h-5 text-[#0cc0df]" />
              <span className="text-sm font-medium text-gray-300">Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
              Everything You Need to Ship
            </h2>
            <p className="text-lg text-gray-400">
              From concept to launch, we've got you covered.
            </p>
          </motion.div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#1A1C20] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${solution.color}20` }}
                >
                  <solution.icon className="w-6 h-6" style={{ color: solution.color }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: solution.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${solution.color}10 0%, transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
