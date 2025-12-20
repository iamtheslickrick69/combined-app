import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Calendar, ArrowRight, Check, Loader2 } from 'lucide-react';

const projectTypes = [
  { id: 'webapp', label: 'Web App', time: '72 hours' },
  { id: 'aibot', label: 'AI Bot', time: '7 days' },
  { id: 'mobile', label: 'Mobile App', time: '6 weeks' },
  { id: 'crm', label: 'Custom CRM', time: '8 weeks' },
  { id: 'other', label: 'Something Else', time: 'TBD' },
];

export function ContactSection() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">We'll be in touch.</h2>
            <p className="text-gray-400 text-lg mb-8">
              Expect a response within 24 hours. We're excited to learn more about your project.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormState({ name: '', email: '', company: '', message: '' });
                setSelectedType(null);
              }}
              className="text-gray-500 hover:text-white transition-colors"
            >
              Submit another request →
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/5 via-transparent to-transparent blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-green-300 uppercase tracking-wider">
              Let's Build
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
          >
            Ready to move fast?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl mx-auto"
          >
            Tell us about your project. We'll get back to you within 24 hours
            with a plan and timeline.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Project Type Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <label className="block text-sm font-medium text-gray-400 mb-4">
              What are you building?
            </label>
            <div className="flex flex-wrap gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-3 rounded-xl border transition-all duration-200 ${
                    selectedType === type.id
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span className="font-medium">{type.label}</span>
                  <span className={`ml-2 text-xs ${selectedType === type.id ? 'text-gray-600' : 'text-gray-600'}`}>
                    ~{type.time}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Company
              </label>
              <input
                type="text"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Acme Inc (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Tell us about your project
              </label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="What problem are you solving? What's your timeline?"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <span className="text-gray-600 text-sm">
                or email us at{' '}
                <a href="mailto:hello@haestus.com" className="text-white hover:underline">
                  hello@haestus.com
                </a>
              </span>
            </div>
          </motion.form>

          {/* Alternative: Book a Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-12 border-t border-white/10 text-center"
          >
            <p className="text-gray-500 mb-4">Prefer to talk first?</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book a 15-min call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
