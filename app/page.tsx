'use client';

import { useCallback, useEffect, useState } from 'react';
import LoadingScreen from '@/app/components/LoadingScreen';
import DecorPetals from '@/app/components/DecorPetals';
import Topbar from '@/app/components/Topbar';
import Hero from '@/app/components/Hero';
import SignalStrip from '@/app/components/SignalStrip';
import Marquee from '@/app/components/Marquee';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Experience from '@/app/components/Experience';
import Work from '@/app/components/Work';
import Gallery from '@/app/components/Gallery';
import Testimonial from '@/app/components/Testimonial';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import CommandPalette from '@/app/components/CommandPalette';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isReady]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsPaletteOpen((open) => !open);
      }
      if (event.key === 'Escape') {
        setIsPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setIsPaletteOpen(false);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <main className={`portfolio-shell ${isReady ? 'is-ready' : 'is-loading'}`}>
      {!isReady && <LoadingScreen onEnter={() => setIsReady(true)} />}

      <DecorPetals />
      <div className="grain" aria-hidden="true" />
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <Topbar
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
        onOpenPalette={() => setIsPaletteOpen(true)}
        onNavigate={scrollTo}
      />

      <div className="page-wrap">
        <Hero onNavigate={scrollTo} />
        <SignalStrip />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Gallery />
        <Testimonial />
        <Contact />
        <Footer />
      </div>

      {isPaletteOpen && <CommandPalette onClose={() => setIsPaletteOpen(false)} onNavigate={scrollTo} />}
    </main>
  );
}