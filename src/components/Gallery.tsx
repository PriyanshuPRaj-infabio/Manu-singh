'use client';

import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight, Camera, Map, Sparkles, X } from 'lucide-react';
import { useRef, useState } from 'react';
import BrandName from '@/components/ui/BrandName';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/9179927/pexels-photo-9179927.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Amber Fort glowing above Jaipur at sunset',
    category: 'Heritage',
    caption: 'Private palace access with stories behind the stone.',
    layout: 'md:col-span-2 md:row-span-2',
    height: 'min-h-[460px]',
    depth: 46,
  },
  {
    src: 'https://images.pexels.com/photos/4937284/pexels-photo-4937284.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Travelers covered in Holi colors in Rajasthan',
    category: 'Festival',
    caption: 'Color, ritual, music, and a place inside the celebration.',
    layout: 'md:col-span-1',
    height: 'min-h-[260px]',
    depth: -34,
  },
  {
    src: 'https://images.pexels.com/photos/36418053/pexels-photo-36418053.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Camel safari crossing the Thar Desert at sunset',
    category: 'Desert',
    caption: 'Slow evenings in the Thar, built around silence and firelight.',
    layout: 'md:col-span-1',
    height: 'min-h-[260px]',
    depth: 28,
  },
  {
    src: 'https://images.unsplash.com/photo-1587538015441-75c593fbcafa?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Rajasthani elder in a red turban',
    category: 'People',
    caption: 'Human encounters that make the journey feel personal.',
    layout: 'md:col-span-1',
    height: 'min-h-[320px]',
    depth: -42,
  },
  {
    src: 'https://images.pexels.com/photos/33726142/pexels-photo-33726142.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Illuminated heritage palace courtyard at night',
    category: 'Luxury',
    caption: 'Palace stays chosen for atmosphere, service, and soul.',
    layout: 'md:col-span-2',
    height: 'min-h-[320px]',
    depth: 38,
  },
  {
    src: 'https://images.pexels.com/photos/33667487/pexels-photo-33667487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Elegant Rajasthan palace courtyard from above',
    category: 'Sanctuary',
    caption: 'Quiet heritage spaces that turn rest into part of the story.',
    layout: 'md:col-span-2 md:row-span-2',
    height: 'min-h-[460px]',
    depth: -30,
  },
  {
    src: 'https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?w=1000&q=80',
    alt: 'Indian artisan hands working with traditional textiles',
    category: 'Craft',
    caption: 'Workshops, makers, and craft traditions seen up close.',
    layout: 'md:col-span-1',
    height: 'min-h-[280px]',
    depth: 34,
  },
  {
    src: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80',
    alt: 'Taj Mahal reflected in morning light',
    category: 'Icon',
    caption: 'Famous places reframed with quiet timing and better context.',
    layout: 'md:col-span-1',
    height: 'min-h-[280px]',
    depth: -26,
  },
  {
    src: 'https://images.pexels.com/photos/28428787/pexels-photo-28428787.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Amber-lit fort walls at golden hour',
    category: 'Fort',
    caption: 'Late-day heritage walks timed for light, quiet and atmosphere.',
    layout: 'md:col-span-1',
    height: 'min-h-[280px]',
    depth: 22,
  },
  {
    src: 'https://images.pexels.com/photos/33667487/pexels-photo-33667487.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Palace courtyard designed for slow luxury',
    category: 'Palace',
    caption: 'Elegant stays where architecture becomes part of the itinerary.',
    layout: 'md:col-span-1',
    height: 'min-h-[280px]',
    depth: -18,
  },
  {
    src: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=1000&q=80',
    alt: 'Indian street market with rich color and texture',
    category: 'Market',
    caption: 'Local markets explored with context, taste and unhurried curiosity.',
    layout: 'md:col-span-1',
    height: 'min-h-[280px]',
    depth: 20,
  },
  {
    src: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1000&q=80',
    alt: 'Traditional Indian architectural arches',
    category: 'Architecture',
    caption: 'Layered spaces where craft, symmetry and silence carry the story.',
    layout: 'md:col-span-1',
    height: 'min-h-[280px]',
    depth: -24,
  },
  {
    src: 'https://images.pexels.com/photos/36033417/pexels-photo-36033417.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Camels crossing Jaisalmer dunes',
    category: 'Thar',
    caption: 'Desert movement paced around sunset, stars and stillness.',
    layout: 'md:col-span-1',
    height: 'min-h-[280px]',
    depth: 26,
  },
  {
    src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1000&q=80',
    alt: 'India monument glowing in warm light',
    category: 'Monument',
    caption: 'Iconic places approached with timing, privacy and human context.',
    layout: 'md:col-span-1',
    height: 'min-h-[280px]',
    depth: -20,
  },
];

type GalleryImage = (typeof galleryImages)[number];

function HorizontalGalleryCard({
  item,
  index,
  onSelect,
}: {
  item: GalleryImage;
  index: number;
  onSelect: (item: GalleryImage) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(item)}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.75, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.018 }}
      whileTap={{ scale: 0.985 }}
      className="group relative h-[430px] w-[min(82vw,360px)] shrink-0 overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/35 text-left shadow-cinematic"
    >
      <div className="absolute -inset-y-8 inset-x-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105">
        <img src={item.src} alt="" className="h-full w-full object-cover" loading={index > 1 ? 'lazy' : 'eager'} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(251,191,36,0.22),transparent_30%)]" />
      </div>
      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-200 backdrop-blur">
            {item.category}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div>
          <h3 className="font-heading text-2xl font-bold leading-tight text-white md:text-3xl">{item.alt}</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/68">{item.caption}</p>
        </div>
      </div>
    </motion.button>
  );
}

function FloatingStrip({ progress }: { progress: MotionValue<number> }) {
  const x = useTransform(progress, [0, 1], ['-8%', '8%']);

  return (
    <motion.div
      style={{ x }}
      className="pointer-events-none absolute left-[-5%] top-24 hidden w-[110%] rotate-[-3deg] border-y border-amber-200/10 bg-black/20 py-4 text-center backdrop-blur-sm lg:block"
    >
      <span className="font-heading text-5xl font-black uppercase tracking-[0.18em] text-white/[0.035]">
        Rajasthan culture heritage luxury private access
      </span>
    </motion.div>
  );
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [cursor, setCursor] = useState({ x: '50%', y: '50%' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const headerY = useTransform(scrollYProgress, [0, 0.5], [30, -20]);
  const topRow = galleryImages.slice(0, 7);
  const bottomRow = galleryImages.slice(7);

  return (
    <section
      ref={sectionRef}
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
      className="interactive-section relative overflow-hidden bg-[#03050d] py-24 text-white md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.12),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),transparent_22%),linear-gradient(180deg,rgba(6,10,18,0.94),rgba(3,5,10,0.99))]" />
      <div className="absolute inset-0 bg-noise opacity-35" />
      <FloatingStrip progress={scrollYProgress} />

      <div className="relative z-10 mx-auto max-w-none px-0">
        <motion.div style={{ y: headerY }} className="mx-auto mb-16 grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-amber-300/75">
              <Camera className="h-4 w-4" />
              Cinematic field notes
            </p>
            <h2 className="font-heading text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              A gallery that feels like traveling with <BrandName className="brand-name-hero" />.
            </h2>
          </div>
          <div className="max-w-xl space-y-5 text-white/66 lg:justify-self-end">
            <p className="text-lg leading-relaxed">
              Scroll through heritage, festivals, desert silence, craft, and luxury sanctuaries,
              each frame chosen to feel close to the journeys he designs.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
                <Sparkles className="mb-3 h-5 w-5 text-amber-200" />
                Private access
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
                <Map className="mb-3 h-5 w-5 text-sky-200" />
                Story-led routes
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6 overflow-hidden">
          <div className="gallery-marquee-viewport">
            <div className="gallery-marquee-row">
              {[...topRow, ...topRow].map((item, index) => (
                <HorizontalGalleryCard key={`${item.src}-${index}`} item={item} index={index % topRow.length} onSelect={setSelected} />
              ))}
            </div>
          </div>
          <div className="gallery-marquee-viewport">
            <div className="gallery-marquee-row gallery-marquee-row-reverse">
              {[...bottomRow, ...bottomRow].map((item, index) => (
                <HorizontalGalleryCard key={`${item.src}-${index}`} item={item} index={index % bottomRow.length} onSelect={setSelected} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto mt-14 flex max-w-7xl justify-center"
        >
          <button
            type="button"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 px-9 py-4 text-base font-semibold text-slate-950 shadow-cinematic transition-all duration-300 hover:scale-105"
          >
            Build a Journey Like This
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-5 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              aria-label="Close selected gallery image"
              onClick={(event) => {
                event.stopPropagation();
                setSelected(null);
              }}
              className="absolute right-6 top-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.94, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#070910] shadow-cinematic"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selected.src} alt={selected.alt} className="max-h-[76vh] w-full object-cover" />
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-amber-200/75">{selected.category}</p>
                <h3 className="mt-2 font-heading text-3xl font-bold text-white">{selected.alt}</h3>
                <p className="mt-2 text-white/64">{selected.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
