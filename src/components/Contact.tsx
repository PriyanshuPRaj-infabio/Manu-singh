'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, CheckCircle2, Mail, MessageCircle, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import BrandName from '@/components/ui/BrandName';

const travelStyles = ['Heritage', 'Desert', 'Festival', 'Luxury', 'Bespoke'];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [travelStyle, setTravelStyle] = useState('Bespoke');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, travelStyle });
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#04050f] py-24 text-white md:py-36">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/33667487/pexels-photo-33667487.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-16" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.12),transparent_24%),linear-gradient(180deg,rgba(4,6,16,0.9),rgba(3,5,10,0.98))]" />
      <div className="absolute inset-0 bg-noise opacity-35" />

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
              <Sparkles className="h-4 w-4" />
              Private itinerary request
            </p>
            <h2 className="font-heading text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Begin your handcrafted India story.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/68 lg:justify-self-end">
            Share the feeling you want, the pace you prefer, and the moments you dream about.
            <BrandName short /> will shape the rest with care.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="space-y-5"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-amber-200/18 bg-[#070912]/88 p-8 shadow-cinematic backdrop-blur-2xl">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-400/12 blur-3xl" />
              <p className="font-logo text-6xl text-amber-200">Personal concierge</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">A dedicated guide for a refined experience.</h3>
              <p className="mt-4 leading-relaxed text-white/72">
                Plan private rituals, exclusive heritage access and curated luxury stays with direct guidance from <BrandName short />.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { icon: MessageCircle, title: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210', accent: 'bg-emerald-500' },
                { icon: Mail, title: 'Email', value: 'manu@indiapersonaltours.com', href: 'mailto:manu@indiapersonaltours.com', accent: 'bg-gradient-to-r from-amber-500 to-orange-500' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.055] px-6 py-5 shadow-luxury transition duration-300 hover:border-amber-300/30"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.accent} text-white shadow-sm`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-white/66">{item.value}</p>
                    </div>
                  </motion.a>
                );
              })}

              <motion.button
                whileHover={{ x: 6 }}
                className="flex w-full items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.055] px-6 py-5 text-left shadow-luxury transition duration-300 hover:border-amber-300/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white shadow-sm">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-white">Book a consultation</p>
                  <p className="text-sm text-white/66">Schedule a private planning call</p>
                </div>
              </motion.button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {['Direct guidance', 'Private access', 'Thoughtful pacing'].map((item) => (
                <div key={item} className="rounded-[1.2rem] border border-white/10 bg-black/30 p-4 text-sm text-white/64 shadow-luxury backdrop-blur-xl">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-amber-200" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07090f]/90 p-7 shadow-cinematic backdrop-blur-2xl md:p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="grid min-h-[560px] place-items-center text-center"
                >
                  <div>
                    <CheckCircle2 className="mx-auto mb-6 h-16 w-16 text-amber-200" />
                    <p className="font-logo text-6xl text-amber-200">Inquiry received</p>
                    <p className="mx-auto mt-5 max-w-md leading-relaxed text-white/70">
                      Thank you. <BrandName short /> will review your journey notes and respond with a thoughtful next step.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm text-white/70 transition hover:border-amber-300/30 hover:text-white"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.34em] text-amber-200/75">Choose your travel mood</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {travelStyles.map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => setTravelStyle(style)}
                          className={`rounded-full border px-4 py-2 text-sm transition ${
                            travelStyle === style
                              ? 'border-amber-300/50 bg-amber-300/15 text-amber-100'
                              : 'border-white/10 bg-white/[0.04] text-white/58 hover:border-amber-300/25'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  {[
                    { label: 'Your Name', name: 'name', type: 'text' },
                    { label: 'Email Address', name: 'email', type: 'email' },
                    { label: 'Phone Number (Optional)', name: 'phone', type: 'tel' },
                  ].map((field) => (
                    <label key={field.name} className="block">
                      <span className="text-sm text-amber-200/80">{field.label}</span>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.name !== 'phone'}
                        className="mt-3 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20"
                      />
                    </label>
                  ))}
                  <label className="block">
                    <span className="text-sm text-amber-200/80">Tell <BrandName short /> about your dream journey</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-3 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20"
                    />
                  </label>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-slate-950 shadow-cinematic"
                  >
                    <Send className="h-5 w-5" />
                    Send Private Request
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
