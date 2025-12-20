import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const principles = [
  {
    number: '01',
    title: 'Turns pain into mastery',
    description: 'Instead of dwelling on rejection, he channeled it into becoming the best.',
  },
  {
    number: '02',
    title: 'Builds for legends',
    description: "Achilles' armor. Zeus' thunderbolts. Every hero depended on his craft.",
  },
  {
    number: '03',
    title: 'Creation outlasts power',
    description: 'Lightning fades. Systems endure. The world runs on builders.',
  },
  {
    number: '04',
    title: 'Works while others posture',
    description: "While Olympus drowns in drama, he's in the forge doing the work.",
  },
];

export function AboutSection() {
  const [typedText, setTypedText] = useState('');
  const signature = '— ISR';

  return (
    <section className="bg-black">
      {/* Intro Section - Full viewport */}
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-[30deg]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-[20deg]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[#0cc0df] text-sm font-mono tracking-widest">LEVERAGING AI</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl text-white font-light leading-relaxed"
          >
            <span className="text-gray-400">Hephaestus was the Greek god of fire, metalworking, and craftsmanship.</span>
            {' '}
            <span className="text-white font-medium">Thrown from Olympus, crippled, underestimated</span>
            <span className="text-gray-400">—yet he became the </span>
            <span className="text-[#0cc0df] font-medium">master craftsman of the gods.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <span className="text-gray-600 text-sm">Scroll to continue</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-2 mx-auto w-6 h-10 border border-gray-700 rounded-full flex justify-center"
            >
              <motion.div className="w-1 h-2 bg-gray-600 rounded-full mt-2" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Principles - Each one full viewport */}
      {principles.map((principle, index) => (
        <div key={principle.number} className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div
              className="absolute text-[30vw] font-black text-white/[0.02] leading-none"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              {principle.number}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100, scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#0cc0df] font-mono text-lg mb-4 block"
            >
              {principle.number}
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            >
              {principle.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 font-light"
            >
              {principle.description}
            </motion.p>
          </motion.div>
        </div>
      ))}

      {/* Mission - Grand Finale */}
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0cc0df]/5 to-transparent"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs text-gray-600 uppercase tracking-[0.3em] mb-12 block"
          >
            Our Mission
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-4"
          >
            The age of AI is the rematch between David and Goliath.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl text-[#0cc0df] font-medium leading-tight mb-16"
          >
            We're the ones making the slingshots.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 1 }}
            className="text-gray-500 text-xl italic"
          >
            — ISR
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
