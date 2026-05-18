'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[9997] h-[2px] origin-left bg-gradient-to-r from-amber-500 via-orange-400 to-amber-400 pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
