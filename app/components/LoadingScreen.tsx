'use client';

import { useState } from 'react';
import SpiderLily from './SpiderLily';
import SpiderLilyPixel from './SpiderLilyPixel';

type Petal = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  sway: number;
  spin: number;
};

type Phase = 'idle' | 'raining' | 'leaving';

function makePetals(count: number): Petal[] {
  return Array.from({ length: count }, () => {
    const dir = Math.random() > 0.5 ? 1 : -1;
    return {
      left: Math.random() * 100,
      size: 12 + Math.random() * 18,
      delay: Math.random() * 1.4,
      duration: 2.2 + Math.random() * 2.6,
      sway: dir * (28 + Math.random() * 64),
      spin: dir * (300 + Math.random() * 520),
    };
  });
}

const FALLING_PETALS = makePetals(34);

export default function LoadingScreen({ onEnter }: { onEnter: () => void }) {
  const [phase, setPhase] = useState<Phase>('idle');

  const petalStyle = (petal: Petal): React.CSSProperties =>
    ({
      left: `${petal.left}%`,
      width: `${petal.size}px`,
      height: `${petal.size * 2.5}px`,
      '--petal-delay': `${petal.delay}s`,
      '--petal-duration': `${petal.duration}s`,
      '--petal-sway': `${petal.sway}px`,
      '--petal-spin': `${petal.spin}deg`,
    }) as React.CSSProperties;

  const handleStart = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onEnter();
      return;
    }
    setPhase('raining');
    window.setTimeout(() => setPhase('leaving'), 1600);
    window.setTimeout(onEnter, 2300);
  };

  const showGate = phase === 'idle';
  const showRain = phase !== 'idle';

  return (
    <div className={`loading-screen loading-screen--${phase}`} role="status" aria-label="Welcome to the Hiruu portfolio">
      <button type="button" className="loading-lily" onClick={handleStart} aria-label="Enter the Hiruu portfolio">
        <SpiderLilyPixel />
      </button>
      <div className="loading-screen__text">
        <strong>HIRUU</strong>
        <small>Signal is clear.</small>
        <span className="loading-screen__desc">IT &amp; Network Engineer — Bandung, Indonesia</span>
      </div>

      {showRain && (
        <div className="petal-rain" aria-hidden="true">
          {FALLING_PETALS.map((petal, index) => (
            <span key={index} className="petal-falling" style={petalStyle(petal)}>
              <SpiderLily />
            </span>
          ))}
        </div>
      )}

      {showGate && (
        <div className="loading-screen__gate">
          <small>tap the flower</small>
        </div>
      )}
    </div>
  );
}