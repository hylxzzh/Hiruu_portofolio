import SpiderLilyPixel from './SpiderLilyPixel';

type Experience = {
  number: string;
  role: string;
  org: string;
  description: string;
};

const experiences: Experience[] = [
  {
    number: '01',
    role: 'Multimedia Creative',
    org: 'Multimedia — PPM Al Jumhuriyah, Subang',
    description:
      'Produced visual media and documentation for a community campus: photography, video, and design that supported daily operations and events.',
  },
  {
    number: '02',
    role: 'Humas / Public Relations',
    org: 'Humas — Al Hadiid, Cileungsi',
    description:
      'Covered events and managed public-facing media for the organization — turning moments into clear, shareable signals for the community.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section content-section reveal-on-scroll reveal-from-left">
      <div className="section-label">
        <SpiderLilyPixel className="lily-mark" />
        <span>04</span>
        <span>Field experience</span>
      </div>
      <div className="exp-list">
        {experiences.map((item) => (
          <article className="exp-row" key={item.number}>
            <span className="exp-row__num">{item.number}</span>
            <div>
              <h3 className="exp-row__role">{item.role}</h3>
              <p className="exp-row__org">{item.org}</p>
            </div>
            <p className="exp-row__desc">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}