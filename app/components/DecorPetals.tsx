import SpiderLily from './SpiderLily';

const spots = [
  { top: '16%', left: '3%', size: 18, rotate: -16, opacity: 0.13, duration: 9, delay: 0 },
  { top: '30%', right: '5%', size: 12, rotate: 26, opacity: 0.11, duration: 11, delay: 1.2 },
  { top: '56%', left: '7%', size: 14, rotate: 14, opacity: 0.11, duration: 10, delay: 2.4 },
  { top: '72%', right: '4%', size: 20, rotate: -8, opacity: 0.13, duration: 12, delay: 0.6 },
  { top: '86%', left: '48%', size: 11, rotate: 30, opacity: 0.1, duration: 9.5, delay: 3 },
  { bottom: '5%', right: '14%', size: 14, rotate: -24, opacity: 0.11, duration: 10.5, delay: 1.8 },
];

type Spot = (typeof spots)[number];

function spotStyle(spot: Spot): React.CSSProperties {
  const pos: React.CSSProperties = {};
  if (spot.top !== undefined) pos.top = spot.top;
  if (spot.bottom !== undefined) pos.bottom = spot.bottom;
  if (spot.left !== undefined) pos.left = spot.left;
  if (spot.right !== undefined) pos.right = spot.right;
  return {
    ...pos,
    width: `${spot.size}px`,
    height: `${spot.size * 2.4}px`,
    opacity: spot.opacity,
    transform: `rotate(${spot.rotate}deg)`,
    '--drift-duration': `${spot.duration}s`,
    '--drift-delay': `${spot.delay}s`,
  } as React.CSSProperties;
}

export default function DecorPetals() {
  return (
    <>
      {spots.map((spot, index) => (
        <SpiderLily key={index} className="decor-petal" style={spotStyle(spot)} />
      ))}
    </>
  );
}