'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const profileImages = ['/foto_profile/profile1.jpg', '/foto_profile/profile2.jpg', '/foto_profile/profile3.jpg'];

export default function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [currentImage, setCurrentImage] = useState(0);
  const frameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentImage((image) => (image + 1) % profileImages.length), 4500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const frame = frameRef.current;
        if (frame) {
          frame.style.transform = `translateY(${window.scrollY * 0.12}px) rotate(2.5deg)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="hero section-grid">
      <div className="hero-copy reveal-on-scroll">
        <p className="eyebrow">
          <span className="status-dot" /> Available for thoughtful work <span className="eyebrow-year">/ 2026</span>
        </p>
        <h1>
          Human systems.
          <br />
          <em>Clear signals.</em>
        </h1>
        <p className="hero-intro">
          I&apos;m Hylman, an IT and network engineer who turns tangled infrastructure into dependable, understandable
          experiences.
        </p>
        <div className="hero-actions">
          <button className="button button--solid" onClick={() => onNavigate('work')}>
            Explore selected work <span>↘</span>
          </button>
          <button className="text-link" onClick={() => onNavigate('contact')}>
            Start a conversation <span>↗</span>
          </button>
        </div>
      </div>

      <div className="hero-aside reveal-on-scroll reveal-from-right reveal-delay-1">
        <div className="portrait-frame" ref={frameRef}>
          <Image
            src={profileImages[currentImage]}
            alt="Hylman profile"
            fill
            priority
            sizes="(max-width: 800px) 90vw, 36vw"
            className="portrait-image"
          />
          <div className="portrait-overlay">
            <span>01 / 03</span>
            <span>Bandung, ID</span>
          </div>
          <button
            className="portrait-next"
            onClick={() => setCurrentImage((image) => (image + 1) % profileImages.length)}
            aria-label="Next profile image"
          >
            ↗
          </button>
        </div>
        <div className="aside-note">
          <span>01</span>
          <p>
            Curious by default.
            <br />
            Precise when it matters.
          </p>
        </div>
      </div>
    </section>
  );
}