'use client';

import { motion, type Easing } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  /** Initial entrance delay in seconds */
  delay?: number;
  /** Per-word stagger in seconds */
  stagger?: number;
  /** Easing curve */
  ease?: Easing;
  /** Only animate once (on first viewport enter) */
  once?: boolean;
  /** Viewport margin */
  margin?: string;
}

export default function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.05,
  ease = 'easeOut' as Easing,
  once = true,
  margin = '-8% 0px',
}: SplitTextProps) {
  const words = text.split(' ');

  return (
    <span className={cn('inline', className)} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden leading-[1.05]"
        >
          <motion.span
            className={cn('inline-block will-change-transform', wordClassName)}
            initial={{ y: '108%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once, margin }}
            transition={{
              duration: 0.72,
              delay: delay + i * stagger,
              ease,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? <>&nbsp;</> : null}
        </span>
      ))}
    </span>
  );
}
