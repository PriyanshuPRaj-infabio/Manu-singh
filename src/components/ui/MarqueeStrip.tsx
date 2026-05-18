'use client';

import { motion } from 'framer-motion';

const ITEMS = [
  'Heritage',
  'Rajasthan',
  'Cinematic Journeys',
  'Cultural Depth',
  'Luxury',
  'Ritual & Story',
  'Authentic India',
  'Private Access',
  'Slow Travel',
  'Desert Forts',
];

interface MarqueeStripProps {
  speed?: number;
  className?: string;
  light?: boolean;
}

export default function MarqueeStrip({ speed = 28, className = '', light = false }: MarqueeStripProps) {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className={`relative overflow-hidden py-5 ${light ? 'bg-white/5' : 'bg-white/[0.03]'} border-y border-white/8 ${className}`}
      aria-hidden
    >
      <motion.div
        className="flex whitespace-nowrap gap-0"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-4 px-6 text-xs uppercase tracking-[0.36em] font-medium ${
              light ? 'text-amber-900/60' : 'text-amber-300/40'
            }`}
          >
            {item}
            <span className={`h-1 w-1 rounded-full ${light ? 'bg-amber-700/30' : 'bg-amber-500/30'}`} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
