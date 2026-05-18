'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Globe2, MapPin, Plane, Sparkles } from 'lucide-react';
import { CSSProperties, useState } from 'react';
import BrandName from '@/components/ui/BrandName';

const regions = [
  {
    name: 'Europe',
    description:
      'France, Italy, Spain, Germany, and the UK have shaped a clear feel for refined pacing, privacy, and quietly polished hospitality.',
    travelers: '400+',
    cue: 'Heritage, wine, architecture',
    position: { top: '18%', left: '27%' },
    arc: 'M330 210 C460 130 610 180 724 332',
  },
  {
    name: 'Americas',
    description:
      'Guests from the USA, Canada, and Brazil often seek comfort, story, and logistics that feel effortless from arrival to farewell.',
    travelers: '300+',
    cue: 'Comfort, clarity, depth',
    position: { top: '48%', left: '12%' },
    arc: 'M190 430 C370 330 560 372 724 332',
  },
  {
    name: 'Middle East',
    description:
      'UAE, Saudi, and Gulf guests are hosted with sensitivity around privacy, family rhythm, refined stays, and gracious service.',
    travelers: '100+',
    cue: 'Privacy, family, refinement',
    position: { top: '47%', left: '51%' },
    arc: 'M640 384 C666 360 694 344 724 332',
  },
  {
    name: 'Asia Pacific',
    description:
      'Japan, Australia, Singapore, and Southeast Asia bring a love for detail, hospitality, calm planning, and cultural bridges.',
    travelers: '200+',
    cue: 'Detail, calm, connection',
    position: { top: '58%', left: '76%' },
    arc: 'M962 486 C884 386 802 346 724 332',
  },
];

const statCards = [
  { value: '25+', label: 'Countries personally explored' },
  { value: '1k+', label: 'Global travelers hosted' },
  { value: '4', label: 'Continental guest networks' },
];

const globeMarkers = [
  { label: 'UK', top: '20%', left: '49.5%' },
  { label: 'France', top: '24%', left: '50.5%' },
  { label: 'Italy', top: '27%', left: '53.5%' },
  { label: 'Spain', top: '28%', left: '48.8%' },
  { label: 'Germany', top: '22%', left: '52.8%' },
  { label: 'USA', top: '29%', left: '23%' },
  { label: 'Canada', top: '19%', left: '20.5%' },
  { label: 'Brazil', top: '56%', left: '36%' },
  { label: 'UAE', top: '37%', left: '65%' },
  { label: 'Saudi', top: '37%', left: '62.5%' },
  { label: 'Japan', top: '30%', left: '88.3%' },
  { label: 'Australia', top: '64%', left: '87.2%' },
  { label: 'Singapore', top: '49%', left: '79%' },
  { label: 'Southeast Asia', top: '42%', left: '79%' },
];

const regionVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.94 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.15 + index * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function GlobalExposure() {
  const [activeRegion, setActiveRegion] = useState(regions[0].name);
  const [cursor, setCursor] = useState({ x: '50%', y: '50%' });
  const active = regions.find((region) => region.name === activeRegion) ?? regions[0];

  return (
    <section
      onMouseMove={(event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        setCursor({ x: `${x}%`, y: `${y}%` });
      }}
      onMouseLeave={() => setCursor({ x: '50%', y: '50%' })}
      style={{
        '--pointer-x': cursor.x,
        '--pointer-y': cursor.y,
      } as CSSProperties}
      className="interactive-section relative overflow-hidden bg-[#050711] py-24 text-white md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--pointer-x)_var(--pointer-y),rgba(245,158,11,0.16),transparent_22%),linear-gradient(180deg,rgba(4,6,16,0.96),rgba(3,5,12,0.99))]" />
      <div className="absolute inset-0 bg-noise opacity-30" />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.22, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="absolute -left-16 top-20 h-72 w-72 rounded-full border border-amber-300/30"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.18, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="absolute -right-20 bottom-24 h-96 w-96 rounded-full border border-orange-300/25"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-amber-300/75">
              <Globe2 className="h-4 w-4" />
              Global footprint, Indian soul
            </p>
            <h2 className="font-heading text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              A world of guests, guided by <BrandName className="brand-name-hero" />.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/66 lg:justify-self-end">
            International exposure gives each journey a rare balance: global standards, local trust,
            and the cultural sensitivity to make India feel personal from the first conversation.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b13]/88 p-5 shadow-cinematic backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1400')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_44%,rgba(245,158,11,0.22),transparent_18%)]" />
            <div className="absolute right-6 top-6 z-20 hidden w-[min(330px,42%)] rounded-[1.7rem] border border-white/10 bg-black/35 p-5 shadow-cinematic backdrop-blur-2xl md:block">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-amber-200/75">Revolving guest map</p>
                <Globe2 className="h-5 w-5 text-amber-200" />
              </div>
              <div className="world-globe mx-auto">
                <div className="globe-shine" />
                <div className="globe-map-track">
                  {[0, 1].map((copy) => (
                    <div key={copy} className="globe-map-panel">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                        alt=""
                        aria-hidden="true"
                        className="globe-world-map"
                      />
                      {globeMarkers.map((marker) => (
                        <span
                          key={marker.label}
                          className="globe-map-marker"
                          style={{ top: marker.top, left: marker.left } as CSSProperties}
                          title={marker.label}
                        >
                          <span className="sr-only">{marker.label}</span>
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="globe-grid" />
              </div>
              <p className="mt-4 text-center text-xs leading-relaxed text-white/56">
                Pins mark the countries and regions Manu serves most often.
              </p>
            </div>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1100 660" preserveAspectRatio="none">
              {regions.map((region, index) => (
                <motion.path
                  key={region.name}
                  d={region.arc}
                  fill="none"
                  stroke={activeRegion === region.name ? 'rgba(251,191,36,0.85)' : 'rgba(255,255,255,0.18)'}
                  strokeDasharray="8 14"
                  strokeLinecap="round"
                  strokeWidth={activeRegion === region.name ? 4 : 2}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeInOut' }}
                />
              ))}
            </svg>

            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[64%] top-[49%] z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber-200/35 bg-black/60 text-amber-200 shadow-cinematic backdrop-blur-2xl"
            >
              <MapPin className="h-9 w-9" />
            </motion.div>
            <div className="absolute left-[64%] top-[49%] z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/15 blur-3xl" />

            {regions.map((region, index) => (
              <motion.button
                key={region.name}
                custom={index}
                variants={regionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-8% 0px' }}
                type="button"
                onMouseEnter={() => setActiveRegion(region.name)}
                onFocus={() => setActiveRegion(region.name)}
                onClick={() => setActiveRegion(region.name)}
                className={`absolute z-30 rounded-[1.25rem] border px-4 py-3 text-left shadow-luxury backdrop-blur-xl transition duration-300 ${
                  activeRegion === region.name
                    ? 'border-amber-300/45 bg-amber-300/15 text-white'
                    : 'border-white/10 bg-black/35 text-white/72 hover:border-amber-300/35 hover:text-white'
                }`}
                style={region.position}
              >
                <span className="block text-[10px] uppercase tracking-[0.28em] text-amber-200/75">{region.travelers}</span>
                <span className="mt-1 block text-lg font-semibold">{region.name}</span>
              </motion.button>
            ))}

            <div className="absolute bottom-5 left-5 right-5 z-30 grid gap-4 rounded-[1.6rem] border border-white/10 bg-black/55 p-5 shadow-cinematic backdrop-blur-2xl md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.34em] text-amber-200/75">Active region</p>
                <h3 className="mt-2 font-heading text-3xl font-bold text-white">{active.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/68">{active.description}</p>
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-luxury backdrop-blur-2xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-3xl font-bold leading-tight">Cultural fluency that guests can feel.</h3>
              <p className="mt-4 text-white/66 leading-relaxed">
                <BrandName /> understands how different travelers define comfort, privacy, pace, food,
                luxury, and meaning, then translates that into deeply Indian journeys.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {statCards.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: 'easeOut' }}
                  className="rounded-[1.5rem] border border-white/10 bg-[#070a12]/80 p-5 shadow-luxury"
                >
                  <p className="font-heading text-4xl font-black text-gradient-gold">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/52">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="grid gap-4 rounded-[1.6rem] border border-amber-300/15 bg-amber-300/8 p-5 shadow-luxury sm:grid-cols-[auto_1fr_auto] sm:items-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/35 text-amber-200">
                <Plane className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Designed for international ease</p>
                <p className="text-sm text-white/58">Arrival rhythm, dietary care, access, timing, and context handled with grace.</p>
              </div>
              <ArrowUpRight className="hidden h-5 w-5 text-amber-200 sm:block" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
