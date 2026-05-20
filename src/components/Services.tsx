'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Crown, Filter, Sparkles } from 'lucide-react';
import BrandName from '@/components/ui/BrandName';

const services = [
  {
    title: 'Heritage & Palace Access',
    description:
      <>Private access to forts, palaces and temples with <BrandName short /> as your guide, with immersive storytelling woven into every step.</>,
    tag: 'Signature',
    type: 'Heritage',
    image: 'https://images.pexels.com/photos/9179927/pexels-photo-9179927.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Amber Fort aerial view Jaipur sunset — photo by Jatin Verma',
    span: 'lg:col-span-2',
  },
  {
    title: 'Desert & Village Life',
    description:
      'Journey into the Thar through camel safari, nomadic camps and rural artisan villages far off any tourist trail.',
    tag: 'Immersive',
    type: 'Desert',
    image: 'https://images.pexels.com/photos/36418053/pexels-photo-36418053.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Camel safari at sunset Jaisalmer — photo by Sayan Samanta',
    span: 'lg:col-span-1',
  },
  {
    title: 'Luxury Heritage Stays',
    description:
      'Curated palace hotels and boutique havelis selected for their soul — where history meets contemporary comfort.',
    tag: 'Luxury',
    type: 'Luxury',
    image: 'https://images.pexels.com/photos/33726142/pexels-photo-33726142.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Illuminated palace courtyard in Jaisalmer at night — photo by Abhishek Navlakha',
    span: 'lg:col-span-1',
  },
  {
    title: 'Festival & Ceremony',
    description:
      'Witness Holi, Pushkar fair, Diwali and local rituals from intimate vantage points — no crowds, no barriers.',
    tag: 'Cultural',
    type: 'Festival',
    image: 'https://images.pexels.com/photos/4937284/pexels-photo-4937284.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Holi celebration in Pushkar India — photo by Kerry Bian',
    span: 'lg:col-span-2',
  },
  {
    title: 'People & Artisan Stories',
    description:
      'Meet weavers, potters, chefs and historians. These authentic encounters become the heartbeat of your journey.',
    tag: 'Authentic',
    type: 'People',
    image: 'https://images.unsplash.com/photo-1587538015441-75c593fbcafa?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Elderly Rajasthani man with red turban — photo by Nishant Aneja',
    span: 'lg:col-span-1',
  },
  {
    title: 'Fully Bespoke Itineraries',
    description:
      'No templates. Every journey is designed around your pace, passions and vision — from first idea to final farewell.',
    tag: 'Tailor-Made',
    type: 'Bespoke',
    image: 'https://images.pexels.com/photos/33667487/pexels-photo-33667487.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Suryagarh palace elegant courtyard aerial — photo by Abhishek Navlakha',
    span: 'lg:col-span-2',
  },
];

const filters = ['All', 'Heritage', 'Desert', 'Luxury', 'Festival', 'People', 'Bespoke'];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-6% 0px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="pointer"
      className={`group relative overflow-hidden rounded-[2rem] border border-white/8 shadow-cinematic cursor-pointer ${service.span}`}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        />
        {/* Base overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        {/* Hover amber accent overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-end p-7">
        {/* Tag */}
        <motion.span
          animate={{ opacity: hovered ? 0 : 1, y: hovered ? -8 : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-auto inline-flex self-start rounded-full border border-amber-300/25 bg-black/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-amber-200/80 backdrop-blur-sm"
        >
          {service.tag}
        </motion.span>

        {/* Title always visible */}
        <h3 className="text-xl md:text-2xl font-heading font-semibold text-white leading-snug mb-2">
          {service.title}
        </h3>

        {/* Description — slides up on hover */}
        <motion.p
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
          transition={{ duration: 0.35 }}
          className="text-sm text-white/75 leading-relaxed mb-4"
        >
          {service.description}
        </motion.p>

        {/* Arrow CTA */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300"
        >
          Enquire <ArrowUpRight className="h-3.5 w-3.5" />
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.45 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-400 to-transparent origin-left"
        />
      </div>
    </motion.article>
  );
}

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeService, setActiveService] = useState(services[0]);
  const visibleServices = activeFilter === 'All'
    ? services
    : services.filter((service) => service.type === activeFilter);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#03040a] text-white">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-amber-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-orange-600/5 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-amber-400/70 mb-4">
              What <BrandName short /> curates
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-[-0.03em] leading-tight">
              Signature{' '}
              <span className="text-gradient-gold">Experiences</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/55 leading-relaxed text-[15px]">
            Not tours. Cinematic travel narratives — intimate, grand, polished and authentic.
            Each crafted personally by <BrandName short />.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mb-10 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-white/60">
            <Filter className="h-4 w-4 text-amber-200" />
            Travel style
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2 text-sm transition duration-300 ${activeFilter === filter
                  ? 'border-amber-300/50 bg-amber-300/15 text-amber-100'
                  : 'border-white/10 bg-white/[0.035] text-white/56 hover:border-amber-300/25 hover:text-white'
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="grid grid-cols-1 gap-5 auto-rows-[320px] md:grid-cols-2 xl:grid-cols-3">
            {visibleServices.map((service, index) => (
              <div key={service.title} onMouseEnter={() => setActiveService(service)} onFocus={() => setActiveService(service)}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>

          <motion.aside
            key={activeService.title}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="sticky top-28 hidden overflow-hidden rounded-[2rem] border border-amber-200/20 bg-[#070912]/92 p-6 shadow-cinematic backdrop-blur-2xl lg:block"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200">
              <Crown className="h-6 w-6" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.34em] text-amber-200/70">{activeService.type} preview</p>
            <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-white">{activeService.title}</h3>
            <p className="mt-4 leading-relaxed text-white/66">{activeService.description}</p>
            <div className="mt-6 overflow-hidden rounded-[1.25rem]">
              <img src={activeService.image} alt={activeService.imageAlt} className="h-52 w-full object-cover" />
            </div>
            <div className="mt-6 grid gap-3">
              {['Private pacing', 'Local context', 'Luxury logistics'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/68">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
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
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Plan a Bespoke Journey
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
