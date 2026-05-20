'use client';

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Award, Compass, MapPin, ScrollText, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';
import BrandName from '@/components/ui/BrandName';

const storyCards = [
  {
    icon: MapPin,
    label: 'Rajasthan Roots',
    copy: 'Raised among desert villages, market rituals, temple bells and stories passed through generations.',
    stamp: 'Born in Rajasthan',
  },
  {
    icon: Award,
    label: 'Tourism Mastery',
    copy: 'Formal study in Tourism Administration from Jodhpur shaped into real-world hospitality instinct.',
    stamp: 'Jodhpur Trained',
  },
  {
    icon: Compass,
    label: 'Global Fluency',
    copy: 'European, American, Middle Eastern and Asia Pacific expectations translated into smooth Indian journeys.',
    stamp: 'Global Lens',
  },
  {
    icon: ScrollText,
    label: 'Story-Led Design',
    copy: 'Rituals, artisans, private introductions and hidden cultural moments replace ordinary checklists.',
    stamp: 'Bespoke Access',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AboutManu() {
  const ref = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: '50%', y: '50%' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [-30, 36]);
  const stampY = useTransform(scrollYProgress, [0, 1], [48, -48]);

  return (
    <section
      ref={ref}
      onMouseMove={(event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const yPos = (event.clientY / window.innerHeight) * 100;
        setCursor({ x: `${x}%`, y: `${yPos}%` });
      }}
      onMouseLeave={() => setCursor({ x: '50%', y: '50%' })}
      style={{
        '--pointer-x': cursor.x,
        '--pointer-y': cursor.y,
      } as React.CSSProperties}
      className="interactive-section relative overflow-hidden bg-[#04060f] py-24 text-white md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--pointer-x)_var(--pointer-y),rgba(245,158,11,0.16),transparent_24%),linear-gradient(180deg,rgba(4,6,14,0.92),rgba(2,4,9,0.98))]" />
      <div className="absolute inset-0 bg-noise opacity-35" />
      <motion.div
        style={{ y: stampY }}
        className="pointer-events-none absolute -left-24 top-36 hidden h-72 w-72 rotate-[-14deg] rounded-full border border-amber-200/20 text-center lg:grid lg:place-items-center"
      >
        <span className="font-logo text-6xl text-amber-200/12">Rajasthan</span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-amber-300/75">
              <Sparkles className="h-4 w-4" />
              Guided by heritage, shaped by humanity
            </p>
            <h2 className="font-heading text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              The story behind <BrandName className="brand-name-hero" />.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/66 lg:justify-self-end">
            Born in the heart of Rajasthan, <BrandName /> shaped his life around culture,
            storytelling and the belief that luxury travel should honor people as much as place.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="relative min-h-[800px] lg:min-h-[860px]"
          >
            <motion.div
              style={{ y: portraitY }}
              className="absolute inset-x-0 top-6 overflow-hidden rounded-[2rem] border border-white/10 shadow-cinematic"
            >
              <img
                src="/manu_singh.png"
                alt="Rajasthani storyteller portrait representing Manu Singh's cultural roots"
                className="h-[700px] w-full object-cover lg:h-[760px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.72))]" />
            </motion.div>

            <div className="absolute left-6 top-0 z-20 rounded-full border border-amber-200/25 bg-black/45 px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-amber-200 shadow-luxury backdrop-blur-xl">
              Origin story
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="absolute bottom-0 left-6 right-6 z-30 rounded-[1.7rem] border border-amber-200/20 bg-[#070912]/88 p-7 shadow-cinematic backdrop-blur-2xl"
            >
              <p className="font-logo text-5xl text-amber-200">Manu Singh</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">A personal introduction to India&apos;s soul.</h3>
              <p className="mt-4 leading-relaxed text-white/70">
                Through village rituals, heritage sanctuaries and personal introductions,
                <BrandName short /> opens doors that traditional travel cannot reach.
              </p>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-luxury backdrop-blur-2xl"
            >
              <p className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
                Raised among desert forts, festivals and centuries of living tradition,
                <BrandName short /> brings guests beyond monuments into the lives of the people who shape India.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {storyCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.label}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-8% 0px' }}
                    whileHover={{ y: -8, rotate: index % 2 ? -1 : 1 }}
                    className="interactive-card card-glow relative min-h-[220px] overflow-hidden rounded-[1.7rem] border border-white/10 p-6 shadow-luxury"
                    style={{
                      '--card-rotate': index % 2 ? '1deg' : '-1deg',
                    } as React.CSSProperties}
                  >
                    <div className="absolute -right-4 top-5 rotate-12 rounded-full border border-amber-200/20 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-amber-200/35">
                      {item.stamp}
                    </div>
                    <div className="relative">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{item.label}</h3>
                      <p className="mt-3 leading-relaxed text-white/68">{item.copy}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-amber-200/20 bg-[#080a12]/90 p-8 shadow-cinematic backdrop-blur-2xl"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-400/12 blur-3xl" />
              <p className="font-logo text-5xl leading-none text-amber-200">Every journey should feel like an invitation.</p>
              <p className="mt-5 leading-relaxed text-white/70">
                This is the philosophy behind every ritual, hidden route and guest who steps into a journey with <BrandName />.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
