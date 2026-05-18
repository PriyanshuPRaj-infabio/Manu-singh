'use client';

import dynamic from 'next/dynamic';
import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';
import { ArrowDown, Compass } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import BrandName from '@/components/ui/BrandName';

// Three.js scene — SSR disabled
const ParticleScene = dynamic(() => import('@/components/ui/ParticleScene'), {
  ssr: false,
  loading: () => null,
});

const heroHighlights = [
  {
    label: 'Founder & Curator',
    detail: 'Crafting cinematic Indian journeys for global travelers.',
  },
  {
    label: 'Rajasthan Origin',
    detail: 'Raised in rural Rajasthan with deep cultural roots.',
  },
  {
    label: '23 Years',
    detail: 'Decades of experience designing private, authentic tours.',
  },
];

const badgeItems = [
  { value: '23+', label: 'Years of Expertise' },
  { value: '500+', label: 'Journeys Curated' },
  { value: '40+', label: 'Countries Reached' },
];

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.4 + i * 0.12, ease: 'easeOut' },
  }),
};

const highlightVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.4 + i * 0.1, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const [cursor, setCursor] = useState({ x: '50%', y: '50%' });

  return (
    <section
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setCursor({ x: `${x}%`, y: `${y}%` });
      }}
      onMouseLeave={() => setCursor({ x: '50%', y: '50%' })}
      style={{
        '--pointer-x': cursor.x,
        '--pointer-y': cursor.y,
      } as React.CSSProperties}
      className="interactive-section relative min-h-screen overflow-hidden text-white"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://images.pexels.com/photos/9179927/pexels-photo-9179927.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-royal-rajasthan-4088/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,6,12,0.55)_0%,rgba(4,5,10,0.72)_50%,rgba(3,4,8,0.97)_100%)]" />
      <div className="hero-fog" />
      <div className="hero-spotlight" />
      <div className="absolute inset-0 bg-noise opacity-40" />

      {/* Three.js golden particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <ParticleScene />
      </div>

      {/* Decorative route path */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 z-[3] pointer-events-none hidden lg:block"
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="none">
          <motion.path
            d="M 140 680 C 320 520 520 340 780 360 C 960 380 1060 620 1320 560"
            stroke="rgba(245,158,11,0.18)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, delay: 0.8, ease: 'easeInOut' }}
          />
          <motion.circle cx="1320" cy="552" r="10" fill="rgba(245,158,11,0.9)"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.5 }} />
          <motion.circle cx="140" cy="680" r="8" fill="rgba(248,231,160,0.8)"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }} />
        </svg>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-[4] mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-28 pt-32 lg:px-8">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-amber-400/50" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-amber-300/70 font-medium">
            India Personal Tours · Est. 2001
          </span>
          <span className="h-px w-10 bg-amber-400/50" />
        </motion.div>

        {/* ── HERO NAME — primary focal point ── */}
        <div className="mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black leading-[0.88] tracking-[-0.04em] text-[clamp(3.8rem,10vw,9rem)]"
          >
            <span className="text-gradient-gold">Manu</span>
            <br />
            <span className="text-white">Singh</span>
          </motion.h1>

          {/* Founder title — large, visible, elegant */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="mt-4 flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300 backdrop-blur-sm">
              Founder
            </span>
            <span className="h-px w-6 bg-amber-400/40" />
            <span className="rounded-full border border-white/15 bg-white/6 px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
              Luxury Travel Specialist
            </span>
            <span className="h-px w-6 bg-amber-400/40" />
            <span className="rounded-full border border-white/15 bg-white/6 px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
              Cultural Storyteller
            </span>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: 'easeOut' }}
          className="mb-10 max-w-2xl text-lg md:text-xl text-white/65 leading-relaxed"
        >
          Born in rural Rajasthan. Shaped by 23 years of luxury travel. <BrandName short /> turns India&apos;s
          hidden culture into luminous, unforgettable journeys.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="mb-16 flex flex-wrap gap-4"
        >
          <MagneticButton
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Compass className="h-5 w-5" />
            Begin Your Journey
          </MagneticButton>

          <MagneticButton
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover His Story
          </MagneticButton>
        </motion.div>

        {/* ── Stats + Highlights row ── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1px_1fr_1px_1fr] lg:items-start">
          {/* Stats */}
          {badgeItems.map((badge, i) => (
            <motion.div
              key={badge.label}
              custom={i}
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start lg:items-center text-center"
            >
              <span className="text-5xl md:text-6xl font-heading font-black text-gradient-gold leading-none">
                {badge.value}
              </span>
              <span className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        {/* ── Highlight cards ── */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {heroHighlights.map((item, index) => (
            <motion.div
              key={item.label}
              custom={index}
              variants={highlightVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -6, scale: 1.02 }}
              data-cursor="pointer"
              className="card-glow interactive-card rounded-[1.75rem] border border-white/10 p-5 shadow-luxury"
            >
              <p className="text-[10px] uppercase tracking-[0.36em] text-amber-300/80 mb-2">{item.label}</p>
              <p className="text-sm text-white/72 leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-[5] -translate-x-1/2"
      >
        <MagneticButton
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-4 text-center shadow-luxury backdrop-blur-xl"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-200/60">Scroll to discover</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4 text-amber-300/80" />
          </motion.div>
        </MagneticButton>
      </motion.div>
    </section>
  );
}
