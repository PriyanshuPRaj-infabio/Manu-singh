'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';
import BrandName from '@/components/ui/BrandName';

const NAV_LINKS = [
  { name: 'About',      href: '#about'      },
  { name: 'Experience', href: '#experience' },
  { name: 'Services',   href: '#services'   },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Global',     href: '#global'     },
  { name: 'Stories',    href: '#stories'    },
  { name: 'Gallery',    href: '#gallery'    },
  { name: 'Contact',    href: '#contact'    },
];

/* ──────────────────────────────────────────────────────────────────── */
/* Magnetic desktop link                                                */
/* ──────────────────────────────────────────────────────────────────── */
function MagneticLink({
  link,
  isActive,
  onClick,
}: {
  link: (typeof NAV_LINKS)[number];
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [delta, setDelta] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setDelta({
      x: (e.clientX - (r.left + r.width  / 2)) * 0.22,
      y: (e.clientY - (r.top  + r.height / 2)) * 0.38,
    });
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setDelta({ x: 0, y: 0 })}
      animate={{ x: delta.x, y: delta.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      data-cursor="pointer"
      className={`relative py-1 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-amber-300 ${
        isActive ? 'text-amber-400' : 'text-white/65'
      }`}
    >
      {link.name}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-0.5 left-0 right-0 h-px bg-amber-400"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
}

/* ──────────────────────────────────────────────────────────────────── */
/* Main Navigation                                                      */
/* ──────────────────────────────────────────────────────────────────── */
export default function Navigation() {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [menuOpen,   setMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /* scroll state */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* active section via IntersectionObserver */
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-38% 0px -58% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Top bar ── */}
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isScrolled ? 'rgba(5,7,13,0.92)' : 'transparent',
          backdropFilter:   isScrolled ? 'blur(24px)'        : 'none',
          borderBottom:     isScrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            data-cursor="pointer"
            className="text-2xl font-heading font-bold text-white/95 tracking-tight"
          >
            <BrandName />
          </motion.a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <MagneticLink
                key={link.name}
                link={link}
                isActive={activeSection === link.href.slice(1)}
                onClick={() => scrollTo(link.href)}
              />
            ))}
            <MagneticButton
              onClick={() => scrollTo('#contact')}
              className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
            >
              Start Journey
            </MagneticButton>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            data-cursor="pointer"
            className="lg:hidden flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="block h-px w-5 bg-white origin-center"
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              className="block h-px w-5 bg-white origin-center"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="block h-px w-5 bg-white origin-center"
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Fullscreen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#020409]/97 backdrop-blur-2xl lg:hidden"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-amber-500/8 blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-orange-500/6 blur-3xl" />
            </div>

            {/* Links */}
            <div className="relative flex flex-1 flex-col items-center justify-center gap-7 px-8 pt-24">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 44 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{
                    duration: 0.48,
                    delay: i * 0.055,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  onClick={() => scrollTo(link.href)}
                  data-cursor="pointer"
                  className={`text-4xl font-heading font-bold tracking-tight transition-colors hover:text-amber-400 ${
                    activeSection === link.href.slice(1)
                      ? 'text-amber-400'
                      : 'text-white/80'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.48,
                  delay: NAV_LINKS.length * 0.055 + 0.05,
                }}
                className="mt-4"
              >
                <button
                  onClick={() => scrollTo('#contact')}
                  data-cursor="pointer"
                  className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-9 py-4 text-lg font-semibold text-white shadow-lg"
                >
                  Start Journey
                </button>
              </motion.div>
            </div>

            {/* Footer info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="pb-10 text-center text-xs uppercase tracking-[0.32em] text-white/30"
            >
              India Personal Tours · Est. 2001
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
