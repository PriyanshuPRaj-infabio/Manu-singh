import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutManu from '@/components/AboutManu';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Services from '@/components/Services';
import TravelPhilosophy from '@/components/TravelPhilosophy';
import GlobalExposure from '@/components/GlobalExposure';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MarqueeStrip from '@/components/ui/MarqueeStrip';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <Hero />

        {/* Marquee accent between Hero → About */}
        <MarqueeStrip />

        <section id="about" className="relative z-10">
          <AboutManu />
        </section>
        <section id="experience" className="relative z-10">
          <ExperienceTimeline />
        </section>

        {/* Marquee accent (light) between Experience → Services */}
        <MarqueeStrip light speed={22} />

        <section id="services" className="relative z-10">
          <Services />
        </section>
        <section id="philosophy" className="relative z-10">
          <TravelPhilosophy />
        </section>
        <section id="global" className="relative z-10">
          <GlobalExposure />
        </section>
        <section id="stories" className="relative z-10">
          <Testimonials />
        </section>
        <section id="gallery" className="relative z-10">
          <Gallery />
        </section>
        <section id="contact" className="relative z-10">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
