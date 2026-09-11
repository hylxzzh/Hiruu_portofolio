const values = [
  'INTENT',
  'TRUST',
  'INTEGRITY',
  'INNOVATION',
  'SECURITY',
  'RESILIENCE',
  'EMPOWERMENT',
  'COLLABORATION',
  'EXPERTISE',
  'TRANSPARENCY',
  'COMMITMENT',
];

export default function Marquee() {
  const track = [...values, ...values];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((value, index) => (
          <span className="marquee__item" key={`${value}-${index}`}>
            {value}
            <span className="marquee__sep">■</span>
          </span>
        ))}
      </div>
    </div>
  );
}