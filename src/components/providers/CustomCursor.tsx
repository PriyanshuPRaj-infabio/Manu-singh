'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorState = 'default' | 'pointer' | 'drag' | 'text';

const RING_SIZES: Record<CursorState, { w: number; h: number; r: number }> = {
  default: { w: 36, h: 36, r: 999 },
  pointer: { w: 58, h: 58, r: 999 },
  drag:    { w: 76, h: 28, r: 999 },
  text:    { w: 3,  h: 36, r: 2   },
};

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>('default');
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const ringX = useSpring(mouseX, { stiffness: 140, damping: 18, mass: 0.55 });
  const ringY = useSpring(mouseY, { stiffness: 140, damping: 18, mass: 0.55 });

  useEffect(() => {
    // Skip on touch-only devices
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      const dataCursor = target.closest('[data-cursor]') as HTMLElement | null;
      if (dataCursor?.dataset.cursor) {
        setState(dataCursor.dataset.cursor as CursorState);
      } else if (target.closest('a, button, [role="button"], label')) {
        setState('pointer');
      } else if (target.closest('h1, h2, h3, h4, h5, h6, p, span')) {
        setState('text');
      } else {
        setState('default');
      }
    };

    const onLeave  = () => setVisible(false);
    const onEnter  = () => setVisible(true);
    const onDown   = () => setPressed(true);
    const onUp     = () => setPressed(false);

    window.addEventListener('mousemove',  onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);

    return () => {
      window.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
    };
  }, [mouseX, mouseY]);

  const { w, h, r } = RING_SIZES[state];
  const scale = pressed ? 0.78 : 1;

  return (
    <>
      {/* Spring-lagged outer ring */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[9998] pointer-events-none border border-amber-400/75"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
          backgroundColor:
            state === 'pointer'
              ? 'rgba(245,158,11,0.10)'
              : 'transparent',
        }}
        animate={{
          width:        w * scale,
          height:       h * scale,
          borderRadius: r,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 26, mass: 0.45 }}
      />

      {/* Instant inner dot */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-amber-400"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width:   state === 'text' || state === 'pointer' ? 0 : pressed ? 3 : 6,
          height:  state === 'text' || state === 'pointer' ? 0 : pressed ? 3 : 6,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}
