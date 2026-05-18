'use client';

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Camera, Compass, Sparkles, Waves } from 'lucide-react';
import { useRef } from 'react';
import BrandName from '@/components/ui/BrandName';

const principles = [
  {
    icon: Compass,
    title: 'Presence before plans',
    copy: 'The route has structure, but the day still has enough air for conversation, chance, and wonder.',
  },
  {
    icon: Waves,
    title: 'A slower kind of luxury',
    copy: 'Heritage stays, private rituals, and quiet hours are paced so every place has time to land.',
  },
  {
    icon: Camera,
    title: 'Cinematic, not staged',
    copy: 'Light, texture, food, music, and people are composed into memories that still feel honest.',
  },
];

const pathMoments = ['Listen', 'Enter', 'Belong'];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.18 + index * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function TravelPhilosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-36, 36]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const pathX = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const quoteY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const compassRotate = useTransform(scrollYProgress, [0, 1], [-12, 18]);
  const revealWidth = useTransform(scrollYProgress, [0.14, 0.62], ['8%', '100%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#02040c] py-24 text-white md:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,14,0.94),rgba(2,4,9,0.98))]" />
      <motion.div
        style={{ x: pathX }}
        className="absolute left-[-8%] top-12 h-64 w-[116%] opacity-35"
        aria-hidden="true"
      >
        <svg className="h-full w-full" viewBox="0 0 1400 260" preserveAspectRatio="none">
          <motion.path
            d="M10 188 C190 28 330 206 506 108 C712 -6 818 230 1032 122 C1170 52 1262 64 1392 94"
            fill="none"
            stroke="rgba(251,191,36,0.34)"
            strokeDasharray="10 18"
            strokeLinecap="round"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-18% 0px' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-amber-300/75">
              <Sparkles className="h-4 w-4" />
              The philosophy
            </p>
            <h2 className="font-heading text-5xl font-black leading-[0.96] tracking-tight text-white md:text-7xl">
              Travel should feel personally opened by <BrandName className="brand-name-hero" />.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/68">
              Every route, stay, ritual, and private introduction is shaped around his instinct for emotion:
              luxury with cultural depth, warmth, and a sense of discovery that belongs to you.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-8% 0px' }}
                  whileHover={{ x: 10 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-luxury backdrop-blur-2xl transition-colors duration-300 hover:border-amber-300/35 hover:bg-white/[0.07]"
                >
                  <div className="relative flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/64">{item.copy}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[760px] md:min-h-[820px] lg:min-h-[860px]">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-x-0 top-10 overflow-hidden rounded-[2rem] border border-white/10 shadow-cinematic md:inset-x-8 lg:top-16"
          >
            <img
              src="https://images.pexels.com/photos/33667487/pexels-photo-33667487.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Rajasthan palace courtyard curated for a private travel experience"
              className="h-[500px] w-full object-cover md:h-[560px] lg:h-[600px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,12,0.06),rgba(2,4,12,0.7))]" />
          </motion.div>

          <motion.div
            style={{ rotate: compassRotate }}
            className="absolute right-4 top-0 hidden h-32 w-32 items-center justify-center rounded-full border border-amber-200/25 bg-black/45 text-amber-200 shadow-luxury backdrop-blur-2xl md:flex"
          >
            <Compass className="h-12 w-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="absolute left-0 top-[17%] z-20 w-[min(270px,52vw)] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/45 p-3 shadow-cinematic backdrop-blur-xl"
          >
            <img
              src="https://images.pexels.com/photos/4937284/pexels-photo-4937284.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Colorful Indian festival moment"
              className="h-44 w-full rounded-[1.1rem] object-cover"
            />
            <p className="mt-3 text-xs uppercase tracking-[0.26em] text-amber-200/75">Rituals with access</p>
          </motion.div>

          <motion.div
            style={{ y: quoteY }}
            className="absolute bottom-2 right-0 z-30 w-[min(430px,88vw)] rounded-[1.8rem] border border-amber-200/20 bg-[#060810]/88 p-7 shadow-cinematic backdrop-blur-2xl md:right-4 lg:bottom-6"
          >
            <p className="text-sm uppercase tracking-[0.34em] text-amber-200/75">Signature lens</p>
            <p className="mt-4 font-heading text-3xl font-bold leading-tight text-white">
              “Not another itinerary. A journey that carries his presence.”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/66">
              With <BrandName />, the design is human first: who you meet, what you feel, and what stays with you after the road ends.
            </p>
          </motion.div>

          <div className="absolute bottom-[300px] left-[12%] right-[10%] z-20 hidden md:block lg:bottom-[326px]">
            <div className="relative h-px bg-white/12">
              <motion.div style={{ width: revealWidth }} className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-300 to-orange-500" />
              <div className="absolute inset-x-0 -top-4 flex justify-between">
                {pathMoments.map((moment) => (
                  <span key={moment} className="rounded-full border border-white/12 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/70 backdrop-blur">
                    {moment}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
