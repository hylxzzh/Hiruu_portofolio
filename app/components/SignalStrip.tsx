export default function SignalStrip() {
  return (
    <section className="signal-strip reveal-on-scroll" aria-label="Current status">
      <div>
        <span>Now</span>
        <strong>IT &amp; Network Engineer</strong>
      </div>
      <div>
        <span>Focus</span>
        <strong>Linux · Fiber Optic · Design</strong>
      </div>
      <div>
        <span>Based</span>
        <strong>Bandung, Indonesia</strong>
      </div>
      <div className="signal-arrow" aria-hidden="true">
        ↓
      </div>
    </section>
  );
}