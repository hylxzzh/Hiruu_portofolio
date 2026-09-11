import Image from 'next/image';
import SpiderLilyPixel from './SpiderLilyPixel';

const photos = [
  { src: '/foto_profile/profile1.jpg', alt: 'Hylman portrait' },
  { src: '/foto_profile/profile2.jpg', alt: 'Hylman field portrait' },
  { src: '/foto_profile/profile3.jpg', alt: 'Hylman casual portrait' },
];

export default function About() {
  return (
    <section id="about" className="about-section content-section reveal-on-scroll reveal-from-left">
      <div className="section-label">
        <SpiderLilyPixel className="lily-mark" />
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
          <p>
            On the network side I live inside MikroTik, TCP/IP, and Linux — Debian, Ubuntu, Arch — tracing packets the
            way a photographer reads light. Competing at the provincial Fiber Optic LKS taught me that precision under
            pressure is a habit, not a skill.
          </p>
          <p>
            Off the clock I fly drones and shoot documentary frames from the field. Both worlds share the same rule:
            understand the signal before you trust the noise.
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

      <div className="about-gallery">
        {photos.map((photo, index) => (
          <figure className="about-photo" key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 760px) 90vw, (max-width: 960px) 46vw, 30vw"
              className="about-photo__img"
            />
            <figcaption className="about-photo__index">
              0{index + 1} / 0{photos.length}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}