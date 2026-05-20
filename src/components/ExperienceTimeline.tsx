'use client';

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowUpRight, Castle, Flame, Moon, Route } from 'lucide-react';
import { useRef, useState } from 'react';

const timeline = [
  {
    step: '01',
    title: 'Prelude: Culture & Craft',
    description:
      'Begin with intimate artisan encounters, private heritage kitchens and immersive local stories from potters, block printers, and weavers.',
    tag: 'Day 1-2',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1639575668829-7e59e0195b06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Rajasthani elder with traditional red turban',
  },
  {
    step: '02',
    title: 'Act I: Luxury That Feels Local',
    description:
      'Stay in heritage havelis and palace sanctuaries chosen for soulful design, service and a sense of place.',
    tag: 'Day 3-5',
    icon: Castle,
    image: 'https://images.pexels.com/photos/33726142/pexels-photo-33726142.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Illuminated palace courtyard Jaisalmer at night',
  },
  {
    step: '03',
    title: 'Act II: Hidden Sanctuaries',
    description:
      'Glide through the Thar as golden dunes shift in evening light, then settle into off-map villages and desert camps.',
    tag: 'Day 6-8',
    icon: Moon,
    image: 'https://images.pexels.com/photos/36418053/pexels-photo-36418053.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Camel safari crossing Jaisalmer sand dunes at sunset',
  },
  {
    step: '04',
    title: 'Finale: An Epilogue Worth Remembering',
    description:
      'Close with amber-lit forts, rooftop dinners overlooking Jaipur and a private farewell ritual designed to last.',
    tag: 'Day 9-10',
    icon: Route,
    image: 'https://images.pexels.com/photos/9179927/pexels-photo-9179927.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Amber Fort Jaipur at sunset',
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = timeline[activeIndex];
  const ActiveIcon = active.icon;
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-54, 54]);
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.72], ['8%', '100%']);
  const titleX = useTransform(scrollYProgress, [0, 1], [38, -24]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#03040a] py-24 text-white md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.08),transparent_26%)]" />
      <div className="absolute inset-0 bg-noise opacity-30" />
      <motion.div
        style={{ x: titleX }}
        className="pointer-events-none absolute left-[-5%] top-20 hidden text-[10rem] font-black uppercase leading-none tracking-[0.08em] text-white/[0.025] lg:block"
      >
        Journey
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-amber-300/75">
              <Route className="h-4 w-4" />
              Curated journey flow
            </p>
            <h2 className="font-heading text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              The cinematic travel path.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/62 lg:justify-self-end">
            Each experience unfolds like a beautifully directed story: intimate, thoughtful,
            sensory and entirely unforgettable.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="sticky top-28 hidden overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 shadow-cinematic lg:block"
          >
            <motion.img
              key={active.image}
              src={active.image}
              alt={active.imageAlt}
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="h-[650px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200/25 bg-black/45 text-amber-200 backdrop-blur-xl">
                <ActiveIcon className="h-7 w-7" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/75">{active.tag}</p>
              <h3 className="mt-3 font-heading text-4xl font-bold leading-tight text-white">{active.title}</h3>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-white/10 md:block">
              <motion.div style={{ height: lineHeight }} className="absolute left-0 top-0 w-px bg-gradient-to-b from-amber-300 via-orange-500 to-transparent" />
            </div>

            <div className="space-y-5 md:pl-16">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;
                return (
                  <motion.button
                    key={item.step}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-8% 0px' }}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative w-full overflow-hidden rounded-[1.7rem] border p-5 text-left shadow-luxury transition duration-300 md:p-7 ${isActive
                        ? 'border-amber-300/35 bg-amber-300/12'
                        : 'border-white/10 bg-white/[0.045] hover:border-amber-300/25 hover:bg-white/[0.07]'
                      }`}
                  >
                    <div className="absolute -left-[3.25rem] top-7 hidden h-12 w-12 items-center justify-center rounded-full border border-amber-200/30 bg-[#070912] text-amber-200 md:flex">
                      {item.step}
                    </div>
                    <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/20 bg-black/30 text-amber-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.34em] text-amber-200/75">{item.tag}</p>
                        <h3 className="mt-2 font-heading text-3xl font-bold leading-tight text-white">{item.title}</h3>
                        <p className="mt-3 max-w-2xl leading-relaxed text-white/64">{item.description}</p>
                      </div>
                      <ArrowUpRight className={`hidden h-5 w-5 transition lg:block ${isActive ? 'text-amber-200' : 'text-white/24 group-hover:text-amber-200'}`} />
                    </div>
                    <div className="mt-5 overflow-hidden rounded-[1.2rem] lg:hidden">
                      <img src={item.image} alt={item.imageAlt} className="h-56 w-full object-cover" loading="lazy" />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-cursor="pointer"
            className="inline-flex items-center gap-3 rounded-full border border-amber-400/25 bg-amber-400/10 px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/16"
          >
            Design My Journey
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
