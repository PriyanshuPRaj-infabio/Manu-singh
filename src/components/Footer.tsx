'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Insights',
      links: ['Signature Journeys', 'Philosophy', 'Global Exposure', 'Travel Stories', 'Contact'],
    },
    {
      title: 'Collections',
      links: ['Luxury Escapes', 'Heritage Paths', 'Festival Chapters', 'Editorial Gallery', 'Traveler Stories'],
    },
    {
      title: 'Support',
      links: ['Planning Guide', 'Booking Details', 'Privacy', 'Terms', 'FAQs'],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#020409] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.12),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.08),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,14,0.96),rgba(2,4,9,0.98))]" />
      <div className="absolute inset-0 opacity-10 bg-noise" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.36em] text-amber-300/70">India Personal Tours</p>
            <h2 className="text-3xl font-heading font-bold text-white">Crafting cinematic journeys across India.</h2>
            <p className="max-w-sm text-white/70 leading-relaxed">
              Every experience is designed to feel intimate, luxurious and unforgettable — blending culture, rituals and heritage with modern storytelling.
            </p>
            <div className="flex gap-4">
              {[{ href: '#', label: 'Instagram' }, { href: '#', label: 'Facebook' }, { href: 'mailto:manu@indiapersonaltours.com', label: 'Email' }].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition"
                  aria-label={item.label}
                >
                  <Share2 className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-sm uppercase tracking-[0.32em] text-amber-300/80">{section.title}</h3>
              <ul className="space-y-3 text-sm text-white/70">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 flex justify-end">
  <div className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 transition-all duration-300 hover:bg-white/10">

    <a
      href="https://fabulousmedia.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-90 hover:opacity-100 transition-opacity"
      aria-label="FabulousMedia"
    >
      <img
        src="/fabulous-logo.png"
        alt="FabulousMedia"
        className="h-3 w-auto"
      />
    </a>

    <span className="h-3 w-px bg-white/30" />

    <a
      href="https://gocommercially.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-90 hover:opacity-100 transition-opacity"
      aria-label="GoCommercially"
    >
      <img
        src="/gocommercially-logo.png"
        alt="GoCommercially"
        className="h-3 w-auto"
      />
    </a>

  </div>
</div>

        <div className="mt-16 border-t border-white/10 pt-10 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-4"
          >
            <div className="mt-1 h-10 w-10 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-black">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-amber-200">Phone</p>
              <p className="text-white/70">+91 98765 43210</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="mt-1 h-10 w-10 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-black">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-amber-200">Email</p>
              <p className="text-white/70">manu@indiapersonaltours.com</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="mt-1 h-10 w-10 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-black">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-amber-200">Location</p>
              <p className="text-white/70">Rajasthan, India</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {currentYear} India Personal Tours. Crafted as a cinematic travel experience.
        </div>
      </div>
    </footer>
  );
}
