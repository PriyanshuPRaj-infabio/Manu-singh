'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useRef, useState } from 'react';
import BrandName from '@/components/ui/BrandName';

const testimonials = [
  {
    name: 'Sarah & Michael',
    location: 'London, UK',
    journey: 'Heritage Honeymoon',
    text: <><BrandName short /> gave us the India we never knew existed. Beyond the tourist trail, we found authentic connections and moments that will stay with us forever.</>,
    image: 'https://c8.alamy.com/comp/3A1J0B0/foreigner-couple-navalgrah-rajasthan-india-asia-3A1J0B0.jpg',
    backdrop: 'https://images.pexels.com/photos/9179927/pexels-photo-9179927.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Jean-Pierre',
    location: 'Paris, France',
    journey: 'Cultural Immersion',
    text: <>This was the most authentic experience I have ever had. <BrandName short /> bridges culture and luxury with a subtle, cinematic sensibility.</>,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80',
    backdrop: 'https://images.pexels.com/photos/4937284/pexels-photo-4937284.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    journey: 'Slow Rajasthan',
    text: 'We did not just see India. We felt it. Every day felt carefully composed and profoundly memorable.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&q=80',
    backdrop: 'https://images.pexels.com/photos/36418053/pexels-photo-36418053.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursor, setCursor] = useState({ x: '50%', y: '50%' });
  const active = testimonials[activeIndex];
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const stripX = useTransform(scrollYProgress, [0, 1], ['7%', '-7%']);
  const imageY = useTransform(scrollYProgress, [0, 1], [-36, 36]);

  return (
    <section
      ref={ref}
      onMouseMove={(event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        setCursor({ x: `${x}%`, y: `${y}%` });
      }}
      onMouseLeave={() => setCursor({ x: '50%', y: '50%' })}
      style={{
        '--pointer-x': cursor.x,
        '--pointer-y': cursor.y,
      } as React.CSSProperties}
      className="interactive-section relative overflow-hidden bg-[#03050c] py-24 text-white md:py-36"
    >
      <motion.div
        key={active.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${active.backdrop}')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--pointer-x)_var(--pointer-y),rgba(245,158,11,0.16),transparent_24%),linear-gradient(180deg,rgba(4,6,16,0.93),rgba(4,6,16,0.98))]" />
      <div className="absolute inset-0 bg-noise opacity-38" />

      <motion.div
        style={{ x: stripX }}
        className="pointer-events-none absolute left-[-5%] top-20 hidden w-[110%] rotate-2 border-y border-white/8 bg-black/20 py-4 text-center backdrop-blur-sm lg:block"
      >
        <span className="font-heading text-5xl font-black uppercase tracking-[0.18em] text-white/[0.04]">
          London Paris Tokyo private journeys
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-amber-300/75">
              <Quote className="h-4 w-4" />
              Traveler narratives
            </p>
            <h2 className="font-heading text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Stories that stay after the road ends.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/66 lg:justify-self-end">
            Fewer reviews, more real memory. Each note speaks to the emotional pace,
            cultural access and quiet care inside a journey with <BrandName />.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            style={{ y: imageY }}
            className="relative h-[560px] overflow-hidden rounded-[2rem] border border-white/10 shadow-cinematic"
          >
            <motion.img
              key={active.image}
              src={active.image}
              alt={active.name}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/24 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="rounded-full border border-white/12 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-amber-200 backdrop-blur w-fit">
                {active.journey}
              </p>
              <h3 className="mt-4 font-logo text-6xl text-white">{active.name}</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-white/56">{active.location}</p>
            </div>
          </motion.div>

          <div className="flex min-h-[560px] flex-col justify-between gap-6">
            <motion.article
              key={active.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative flex min-h-[390px] flex-col justify-center overflow-hidden rounded-[2rem] border border-amber-200/18 bg-[#070912]/88 p-8 shadow-cinematic backdrop-blur-2xl md:min-h-[420px] md:p-10"
            >
              <Quote className="mb-8 h-12 w-12 text-amber-200/70" />
              <p className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
                “{active.text}”
              </p>
              <div className="mt-8 flex gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </motion.article>

            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -6 }}
                  className={`rounded-[1.4rem] border p-4 text-left shadow-luxury transition duration-300 ${activeIndex === index
                      ? 'border-amber-300/45 bg-amber-300/14'
                      : 'border-white/10 bg-white/[0.045] hover:border-amber-300/25'
                    }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.28em] text-amber-200/70">{testimonial.location}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-white/52">{testimonial.journey}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
