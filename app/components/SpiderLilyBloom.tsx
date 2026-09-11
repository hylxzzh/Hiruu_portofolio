'use client';

import SpiderLily from './SpiderLily';

const PETALS = 9;

export default function SpiderLilyBloom() {
  return (
    <div className="bloom" aria-hidden="true">
      {Array.from({ length: PETALS }).map((_, index) => (
        <SpiderLily
          key={index}
          className="bloom__petal"
          style={{ transform: `rotate(${(360 / PETALS) * index}deg)` }}
        />
      ))}
      <span className="bloom__core" />
    </div>
  );
}