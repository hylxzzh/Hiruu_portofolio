import SpiderLily from './SpiderLily';

const tags = ['Aerial · drone', 'Event coverage', 'Studio', 'Landscape', 'Portrait', 'Behind the scenes'];

export function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <circle cx="12" cy="13.5" r="4" />
      <path d="M9 7l1.5-2.2h3L15 7" />
    </svg>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section content-section reveal-on-scroll reveal-from-left">
      <div className="section-heading">
        <div className="section-label">
          <SpiderLily className="lily-mark" />
          <span>06</span>
          <span>Lens work</span>
        </div>
        <p>
          Photography &amp; drone captures.
          <br />
          Frames from the field.
        </p>
      </div>

      <div className="gallery-grid">
        {tags.map((tag) => (
          <div className="gallery-tile" key={tag}>
            <CameraIcon />
            <span className="gallery-tile__tag">{tag}</span>
          </div>
        ))}
      </div>
      <p className="gallery-note">Placeholder grid — real photographs coming soon.</p>
    </section>
  );
}