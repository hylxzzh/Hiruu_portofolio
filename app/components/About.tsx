import SpiderLily from './SpiderLily';

export default function About() {
  return (
    <section id="about" className="about-section content-section reveal-on-scroll reveal-from-left">
      <div className="section-label">
        <SpiderLily className="lily-mark" />
        <span>02</span>
        <span>About the operator</span>
      </div>
      <div className="about-grid">
        <h2>
          Technical hands,
          <br />
          <em>human point of view.</em>
        </h2>
        <div className="about-copy">
          <p>
            I work across hardware, network infrastructure, and the web. The common thread is simple: make complicated
            things easier to trust.
          </p>
          <p>
            From repairing a laptop to mapping a fiber installation, I like finding the quiet logic underneath the
            chaos.
          </p>
          <div className="mini-stats">
            <div>
              <strong>03+</strong>
              <span>years learning</span>
            </div>
            <div>
              <strong>03</strong>
              <span>core disciplines</span>
            </div>
            <div>
              <strong>03</strong>
              <span>LKS Provinsi · Fiber Optic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}