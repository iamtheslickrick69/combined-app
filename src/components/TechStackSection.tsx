import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Cloud, Code, Layers, ArrowRight } from 'lucide-react';

const techCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code,
    color: '#A855F7',
    tools: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description: 'Modern, performant interfaces that load fast and convert.',
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Cloud,
    color: '#0EA5E9',
    tools: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
    description: 'Scalable APIs that handle millions of requests.',
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: Cpu,
    color: '#10B981',
    tools: ['OpenAI', 'Claude', 'LangChain', 'Pinecone', 'Custom RAG'],
    description: 'Intelligence layers trained on your data.',
  },
  {
    id: 'infra',
    label: 'Infrastructure',
    icon: Layers,
    color: '#F59E0B',
    tools: ['Vercel', 'AWS', 'Cloudflare', 'Docker', 'GitHub Actions'],
    description: 'Deploy anywhere, scale automatically.',
  },
];

const guarantees = [
  {
    icon: Zap,
    title: '48-72hr Deployment',
    description: 'Production-ready in days, not months. We move fast because your competition does too.',
  },
  {
    icon: Shield,
    title: 'Money-Back Guarantee',
    description: "If it doesn't work as promised, you don't pay. Simple as that.",
  },
  {
    icon: Code,
    title: 'Full Code Ownership',
    description: 'You own 100% of the code. No vendor lock-in, no licensing fees, no strings attached.',
  },
];

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const currentCategory = techCategories.find(c => c.id === activeCategory)!;

  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                How We Build
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
            >
              Modern stack.
              <br />
              Proven results.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 mb-12"
            >
              We use the same tools that power the world's best products.
              No legacy tech, no technical debt, no compromises.
            </motion.p>

            {/* Tech Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techCategories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      isActive
                        ? 'bg-white/10 border-white/20 text-white'
                        : 'bg-transparent border-white/10 text-gray-500 hover:text-gray-300 hover:border-white/20'
                    }`}
                  >
                    <Icon className="w-4 h-4" style={{ color: isActive ? category.color : undefined }} />
                    <span className="text-sm font-medium">{category.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Details */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <p className="text-gray-400 mb-4">{currentCategory.description}</p>
              <div className="flex flex-wrap gap-2">
                {currentCategory.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Guarantees */}
            <div className="space-y-6 pt-8 border-t border-white/10">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <guarantee.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{guarantee.title}</h3>
                    <p className="text-gray-500 text-sm">{guarantee.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visualization */}
          <div className="relative h-[600px] border border-white/10 rounded-2xl bg-[#0a0a0b] overflow-hidden">
            {/* Grid Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Animated Tech Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                {/* Central Icon */}
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${currentCategory.color}20`, border: `1px solid ${currentCategory.color}40` }}
                >
                  <currentCategory.icon className="w-10 h-10" style={{ color: currentCategory.color }} />
                </div>

                {/* Orbiting Tools */}
                {currentCategory.tools.map((tool, i) => {
                  const angle = (i * 360) / currentCategory.tools.length;
                  const radius = 120;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="absolute px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 whitespace-nowrap"
                      style={{
                        left: `calc(50% + ${x}px - 40px)`,
                        top: `calc(50% + ${y}px - 12px)`,
                      }}
                    >
                      {tool}
                    </motion.div>
                  );
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ left: '-100px', top: '-100px', width: '300px', height: '300px' }}>
                  {currentCategory.tools.map((_, i) => {
                    const angle = (i * 360) / currentCategory.tools.length;
                    const radius = 120;
                    const x = Math.cos((angle * Math.PI) / 180) * radius + 150;
                    const y = Math.sin((angle * Math.PI) / 180) * radius + 150;

                    return (
                      <motion.line
                        key={i}
                        x1="150"
                        y1="150"
                        x2={x}
                        y2={y}
                        stroke={currentCategory.color}
                        strokeOpacity="0.2"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      />
                    );
                  })}
                </svg>
              </motion.div>
            </div>

            {/* Status Label */}
            <div className="absolute bottom-4 left-4 text-[10px] text-gray-600 font-mono">
              STACK: {currentCategory.label.toUpperCase()}
              <br />
              TOOLS: {currentCategory.tools.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
