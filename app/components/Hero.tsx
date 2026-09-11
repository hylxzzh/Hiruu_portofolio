'use client';

import SpiderLilyPixel from './SpiderLilyPixel';

export default function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
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
        <div className="bloom">
          <SpiderLilyPixel />
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