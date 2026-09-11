type Dot = {
  x: number;
  y: number;
  s: number;
  color: string;
};

type SpiderLilyPixelProps = {
  className?: string;
  style?: React.CSSProperties;
};

const CX = 40;
const CY = 40;
const PETALS = 6;
const PETAL_INNER = 11;
const PETAL_OUTER = 36;
const STAMEN_COUNT = 6;
const STAMEN_INNER = 13;
const STAMEN_OUTER = 41;

const BASE = '#8F0000';
const BODY = '#FF1A1A';
const TIP = '#FF3030';

const rad = (deg: number) => ((deg - 90) * Math.PI) / 180;

const pt = (deg: number, r: number) => ({
  x: CX + r * Math.cos(rad(deg)),
  y: CY + r * Math.sin(rad(deg)),
});

function colorFor(t: number) {
  if (t < 0.28) return BASE;
  if (t < 0.72) return BODY;
  return TIP;
}

function px(x: number, y: number, r: number, color: string): Dot {
  const s = Math.max(1, Math.round(r * 2));
  return {
    x: Math.round(x) - Math.floor((s - 1) / 2),
    y: Math.round(y) - Math.floor((s - 1) / 2),
    s,
    color,
  };
}

function buildPetal(baseAngle: number): Dot[] {
  const dots: Dot[] = [];
  const segs = 18;

  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const r = PETAL_INNER + t * (PETAL_OUTER - PETAL_INNER);
    const bend = Math.sin(t * Math.PI * 1.6) * 16;
    const wave = Math.sin(t * Math.PI * 6) * 2.2 * t;
    const ang = baseAngle + bend + wave;
    const p = pt(ang, r);
    const perp = rad(ang) + Math.PI / 2;
    const halfW = 1.3 + 2.2 * (1 - Math.abs(2 * t - 1));
    const color = colorFor(t);

    dots.push(px(p.x, p.y, 1.05, color));
    for (const s of [-1, 1]) {
      dots.push(
        px(
          p.x + Math.cos(perp) * halfW * s,
          p.y + Math.sin(perp) * halfW * s,
          0.8 + 0.25 * (1 - t),
          color,
        ),
      );
    }
  }

  const tipAngle = baseAngle + Math.sin(Math.PI * 1.6) * 16 + 26;
  const tip = pt(tipAngle, PETAL_OUTER + 2);
  dots.push(px(tip.x, tip.y, 0.75, TIP));
  const tipSide = pt(tipAngle + 20, PETAL_OUTER + 4.5);
  dots.push(px(tipSide.x, tipSide.y, 0.6, TIP));

  return dots;
}

function buildStamen(baseAngle: number): Dot[] {
  const dots: Dot[] = [];
  const segs = 19;

  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const r = STAMEN_INNER + t * (STAMEN_OUTER - STAMEN_INNER);
    const wob = Math.sin(t * Math.PI * 3) * 2.5;
    const p = pt(baseAngle + wob, r);
    dots.push(px(p.x, p.y, t < 0.9 ? 0.55 : 0.6, BODY));
  }

  const anther = pt(baseAngle, STAMEN_OUTER + 1.2);
  dots.push(px(anther.x, anther.y, 1.35, TIP));
  return dots;
}

function buildCore(): Dot[] {
  const dots: Dot[] = [];
  for (let i = 0; i < 10; i++) {
    const a = (360 / 10) * i;
    const r = 3.2 + (i % 3) * 1.4;
    const p = pt(a, r);
    dots.push(px(p.x, p.y, i % 2 ? 1.0 : 0.75, i % 3 === 0 ? TIP : BODY));
  }
  return dots;
}

export default function SpiderLilyPixel({ className = '', style }: SpiderLilyPixelProps) {
  const dots: Dot[] = [];

  for (let k = 0; k < PETALS; k++) {
    dots.push(...buildPetal(k * 60));
  }
  for (let k = 0; k < STAMEN_COUNT; k++) {
    dots.push(...buildStamen(30 + k * 60));
  }
  dots.push(...buildCore());

  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      {dots.map((dot, index) => (
        <rect key={index} x={dot.x} y={dot.y} width={dot.s} height={dot.s} fill={dot.color} />
      ))}
    </svg>
  );
}