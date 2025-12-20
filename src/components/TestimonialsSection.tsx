import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Haestus delivered our entire payment platform in 72 hours. What we thought would take months was live and processing transactions before the week was over.",
    author: "Marcus Chen",
    role: "CEO",
    company: "PaymentFlow",
    industry: "Fintech",
    metric: "72hr delivery",
    image: null,
  },
  {
    quote: "Our AI customer service agent handles 10,000+ conversations monthly. It paid for itself in the first week. The ROI is insane.",
    author: "Sarah Mitchell",
    role: "Head of Operations",
    company: "TechScale",
    industry: "SaaS",
    metric: "10K+ conversations/mo",
    image: null,
    featured: true,
  },
  {
    quote: "They built our mobile app for iOS and Android in 6 weeks. Both apps hit the app store on the same day. No delays, no excuses.",
    author: "James Rodriguez",
    role: "Founder",
    company: "FitTrack Pro",
    industry: "Health & Fitness",
    metric: "6 week delivery",
    image: null,
  },
  {
    quote: "The custom CRM they built handles our entire sales pipeline. 50 users, thousands of deals, zero downtime. It just works.",
    author: "Emily Watson",
    role: "VP Sales",
    company: "GrowthForce",
    industry: "B2B Services",
    metric: "50+ daily users",
    image: null,
  },
];

const caseStudies = [
  {
    title: "Payment Processing Platform",
    description: "Full-stack fintech solution with Stripe integration",
    result: "72hr build → $2M processed in month 1",
    color: "#A855F7",
  },
  {
    title: "AI Support Agent",
    description: "24/7 autonomous customer service bot",
    result: "Reduced support tickets by 73%",
    color: "#10B981",
  },
  {
    title: "E-commerce Mobile App",
    description: "iOS + Android native shopping experience",
    result: "50K downloads in first quarter",
    color: "#0EA5E9",
  },
];

export function TestimonialsSection() {
  return (
    <section id="work" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-medium text-amber-300 uppercase tracking-wider">
              Proof of Work
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight"
            >
              Results speak
              <br />
              louder than pitches
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 max-w-md"
            >
              We don't do case studies with vanity metrics. Here's what our clients
              actually say about working with us.
            </motion.p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-[#111113] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all ${
                testimonial.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-white/10 mb-6" />

              {/* Quote */}
              <p className={`text-gray-300 mb-8 leading-relaxed ${
                testimonial.featured ? 'text-xl md:text-2xl' : 'text-lg'
              }`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-white font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-medium">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="hidden sm:block px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-xs font-medium text-gray-400">{testimonial.metric}</span>
                </div>
              </div>

              {/* Stars */}
              <div className="absolute top-8 right-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Recent Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#111113] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all cursor-pointer"
            >
              <div
                className="w-3 h-3 rounded-full mb-4"
                style={{ backgroundColor: study.color }}
              />
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                {study.title}
              </h4>
              <p className="text-gray-500 text-sm mb-4">{study.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400">{study.result}</span>
                <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
