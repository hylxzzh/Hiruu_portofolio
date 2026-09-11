import SpiderLilyPixel from './SpiderLilyPixel';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Placeholder for a recommendation — a colleague who turns messy situations into clear, calm systems.',
    name: 'Placeholder',
    role: 'Network team · Replace me',
  },
  {
    quote:
      'Placeholder for a mentor or client — imagine a line about reliability, speed, or attention to detail.',
    name: 'Placeholder',
    role: 'Mentor · Replace me',
  },
  {
    quote:
      'Placeholder for a teammate — someone who saw both the technical fix and the human behind it.',
    name: 'Placeholder',
    role: 'Project partner · Replace me',
  },
];

export default function Testimonial() {
  return (
    <section id="testimonial" className="testimonial-section content-section reveal-on-scroll reveal-from-right">
      <div className="section-heading">
        <div className="section-label">
          <SpiderLilyPixel className="lily-mark" />
          <span>07</span>
          <span>Signal received</span>
        </div>
        <p>
          What people say after
          <br />
          things start working.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <figure className="testimonial-card" key={`${item.quote.slice(0, 16)}`}>
            <blockquote>{item.quote}</blockquote>
            <figcaption>
              <cite>
                {item.name} — {item.role}
              </cite>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}