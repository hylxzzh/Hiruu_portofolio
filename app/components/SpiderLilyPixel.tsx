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

const VIEW = 96;
const CX = VIEW / 2;
const CY = VIEW / 2;
const PETALS = 6;
const STAMEN_COUNT = 6;
const PETAL_INNER = 9;
const PETAL_MID = 34;
const STAMEN_INNER = 14;
const STAMEN_OUTER = 44;

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

function px(x: number, y: number, size: number, color: string): Dot {
  const s = Math.max(1, Math.round(size));
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
    const r = PETAL_INNER + t * (PETAL_MID - PETAL_INNER);
    const bend = t * t * 42;
    const wave = Math.sin(t * Math.PI * 8) * 1.6 * t;
    const ang = baseAngle + bend + wave;
    const p = pt(ang, r);
    const perp = rad(ang) + Math.PI / 2;
    const color = colorFor(t);

    dots.push(px(p.x, p.y, 1, color));
    if (i % 3 === 1) {
      dots.push(px(p.x + Math.cos(perp) * 1.4, p.y + Math.sin(perp) * 1.4, 1, color));
    }
    if (i % 3 === 2) {
      dots.push(px(p.x - Math.cos(perp) * 1.4, p.y - Math.sin(perp) * 1.4, 1, color));
    }
  }

  const claw = [
    { a: 60, r: 38 },
    { a: 82, r: 34 },
    { a: 98, r: 29 },
    { a: 110, r: 25 },
    { a: 116, r: 21 },
  ];
  for (const c of claw) {
    const p = pt(baseAngle + c.a, c.r);
    dots.push(px(p.x, p.y, 1, TIP));
  }
  const hook = pt(baseAngle + 118, 18);
  dots.push(px(hook.x, hook.y, 2, TIP));

  return dots;
}

function buildStamen(baseAngle: number): Dot[] {
  const dots: Dot[] = [];
  const segs = 22;

  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const r = STAMEN_INNER + t * (STAMEN_OUTER - STAMEN_INNER);
    const wob = Math.sin(t * Math.PI * 3) * 1.6;
    const p = pt(baseAngle + wob, r);
    dots.push(px(p.x, p.y, 1, BODY));
  }

  const anther = pt(baseAngle, STAMEN_OUTER + 2);
  dots.push(px(anther.x, anther.y, 2, TIP));
  return dots;
}

function buildCore(): Dot[] {
  const dots: Dot[] = [];
  for (let i = 0; i < 8; i++) {
    const a = (360 / 8) * i;
    const r = 2.6 + (i % 3) * 1.5;
    const p = pt(a, r);
    dots.push(px(p.x, p.y, 1, i % 3 === 0 ? TIP : BODY));
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
      viewBox={`0 0 ${VIEW} ${VIEW}`}
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