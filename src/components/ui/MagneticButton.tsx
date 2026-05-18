'use client';

import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Magnetic pull strength (0–1). Default: 0.28 */
  strength?: number;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
  'data-cursor'?: string;
}

export default function MagneticButton({
  children,
  className,
  strength = 0.28,
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
  'data-cursor': dataCursor = 'pointer',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setDelta({
        x: (e.clientX - (rect.left + rect.width  / 2)) * strength,
        y: (e.clientY - (rect.top  + rect.height / 2)) * strength,
      });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setDelta({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      data-cursor={dataCursor}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: delta.x, y: delta.y, scale: hovered ? 1.04 : 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20, mass: 0.5 }}
      className={cn('relative overflow-hidden', className)}
    >
      {children}
    </motion.button>
  );
}
