type Dot = {
  x: number;
  y: number;
  s: number;
  color: string;
};

type SpiderLilySideProps = {
  className?: string;
  style?: React.CSSProperties;
};

const VIEW_W = 72;
const VIEW_H = 96;
const BX = 36;
const BY = 78;

const PETAL_ANGLES = [-80, -55, -30, -8, 15, 42, 70];
const STAMENS = [
  { angle: -16, length: 50 },
  { angle: -8, length: 46 },
  { angle: 0, length: 53 },
  { angle: 8, length: 46 },
  { angle: 16, length: 50 },
];

const BASE = '#8F0000';
const BODY = '#FF1A1A';
const TIP = '#FF3030';

const deg = (d: number) => (d * Math.PI) / 180;

const pt = (angle: number, r: number) => ({
  x: BX + r * Math.sin(deg(angle)),
  y: BY - r * Math.cos(deg(angle)),
});

function px(x: number, y: number, size: number, color: string): Dot {
  const s = Math.max(1, Math.round(size));
  return {
    x: Math.round(x) - Math.floor((s - 1) / 2),
    y: Math.round(y) - Math.floor((s - 1) / 2),
    s,
    color,
  };
}

function colorFor(t: number) {
  if (t < 0.28) return BASE;
  if (t < 0.72) return BODY;
  return TIP;
}

function buildPetal(angle: number): Dot[] {
  const dots: Dot[] = [];
  const segs = 14;

  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const r = 5 + t * 29;
    const ang = angle + t * t * 26 + Math.sin(t * Math.PI * 7) * 1.7 * t;
    const p = pt(ang, r);
    const perp = deg(ang) + Math.PI / 2;
    const color = colorFor(t);

    dots.push(px(p.x, p.y, 1, color));
    if (i % 3 === 1) {
      dots.push(px(p.x + Math.cos(perp) * 1.3, p.y + Math.sin(perp) * 1.3, 1, color));
    }
    if (i % 3 === 2) {
      dots.push(px(p.x - Math.cos(perp) * 1.3, p.y - Math.sin(perp) * 1.3, 1, color));
    }
  }

  const sign = angle >= 0 ? 1 : -1;
  const claw = [
    { d: 46, r: 33 },
    { d: 72, r: 27 },
    { d: 96, r: 20 },
    { d: 112, r: 14 },
  ];
  for (const c of claw) {
    const p = pt(angle + sign * c.d, c.r);
    dots.push(px(p.x, p.y, 1, TIP));
  }
  const hook = pt(angle + sign * 118, 11);
  dots.push(px(hook.x, hook.y, 2, TIP));

  return dots;
}

function buildStamen(angle: number, length: number): Dot[] {
  const dots: Dot[] = [];
  const segs = 20;

  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const r = 8 + t * (length - 8);
    const wob = Math.sin(t * Math.PI * 3) * 1.2;
    const p = pt(angle + wob, r);
    dots.push(px(p.x, p.y, 1, BODY));
  }

  const anther = pt(angle, length + 2);
  dots.push(px(anther.x, anther.y, 2, TIP));
  return dots;
}

function buildCore(): Dot[] {
  const dots: Dot[] = [];
  for (let i = 0; i < 7; i++) {
    const a = i * 55 - 60;
    const r = 1.6 + (i % 3) * 1.1;
    const p = pt(a, r);
    dots.push(px(p.x, p.y, 1, i % 3 === 0 ? TIP : BODY));
  }
  return dots;
}

export default function SpiderLilySide({ className = '', style }: SpiderLilySideProps) {
  const dots: Dot[] = [];

  for (const angle of PETAL_ANGLES) {
    dots.push(...buildPetal(angle));
  }
  for (const stamen of STAMENS) {
    dots.push(...buildStamen(stamen.angle, stamen.length));
  }
  dots.push(...buildCore());

  return (
    <svg
      className={className}
      style={style}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
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