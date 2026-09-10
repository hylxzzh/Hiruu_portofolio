'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type Category = 'Network' | 'Web' | 'Hardware';
type Project = { id: string; title: string; type: string; category: Category; year: string; description: string; details: string; stack: string[]; metric: string };

const projects: Project[] = [
  { id: 'rute-aman', title: 'Rute Aman', type: 'Network infrastructure', category: 'Network', year: '2025', description: 'A resilient MikroTik network plan built for fast diagnosis and calmer days.', details: 'Designed a segmented office network with clear VLAN boundaries, failover routing, and a monitoring map that makes a problem visible before it becomes a fire.', stack: ['MikroTik', 'VLAN', 'Winbox'], metric: '99.8% uptime' },
  { id: 'ruang-karya', title: 'Ruang Karya', type: 'Web experience', category: 'Web', year: '2025', description: 'A warm digital home for a creative community that needed less noise.', details: 'Translated a scattered content system into a compact editorial interface with thoughtful motion, accessible contrast, and a more human content rhythm.', stack: ['Next.js', 'TypeScript', 'CSS'], metric: '+42% engagement' },
  { id: 'sinyal-pulang', title: 'Sinyal Pulang', type: 'Hardware rescue', category: 'Hardware', year: '2024', description: 'Field notes from turning an unreliable CCTV system into a reliable set of eyes.', details: 'Audited power, cabling, storage, and camera placement for a multi-room installation, then documented the fix so the next repair does not start from zero.', stack: ['CCTV', 'Fiber optic', 'Diagnostics'], metric: '18 nodes restored' },
];
const profileImages = ['/foto_profile/profile1.jpg', '/foto_profile/profile2.jpg', '/foto_profile/profile3.jpg'];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'All' | Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [copied, setCopied] = useState(false);
  const visibleProjects = useMemo(() => activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setIsPaletteOpen((open) => !open); }
      if (event.key === 'Escape') { setIsPaletteOpen(false); setSelectedProject(null); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  useEffect(() => { const timer = window.setInterval(() => setCurrentImage((image) => (image + 1) % profileImages.length), 4500); return () => window.clearInterval(timer); }, []);

  const copyEmail = async () => { await navigator.clipboard.writeText('hylmanremar@gmail.com'); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };
  const scrollTo = (id: string) => { setIsPaletteOpen(false); setIsMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return <main className="portfolio-shell">
    <div className="grain" aria-hidden="true" />
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Hiruu home"><span className="brand-mark">+</span><span>HIRUU</span></a>
      <nav className={`nav-links ${isMenuOpen ? 'nav-links--open' : ''}`}><button onClick={() => scrollTo('about')}>About</button><button onClick={() => scrollTo('work')}>Work <span>03</span></button><button onClick={() => scrollTo('contact')}>Contact</button></nav>
      <div className="topbar-actions"><button className="palette-trigger" onClick={() => setIsPaletteOpen(true)} aria-label="Open command menu"><span>Search</span><kbd>Ctrl K</kbd></button><button className="menu-trigger" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Toggle navigation">{isMenuOpen ? 'Close' : 'Menu'}</button></div>
    </header>

    <div className="page-wrap">
      <section id="home" className="hero section-grid"><div className="hero-copy reveal-up"><p className="eyebrow"><span className="status-dot" /> Available for thoughtful work <span className="eyebrow-year">/ 2026</span></p><h1>Human systems.<br /><em>Clear signals.</em></h1><p className="hero-intro">I&apos;m Hylman, an IT and network engineer who turns tangled infrastructure into dependable, understandable experiences.</p><div className="hero-actions"><button className="button button--solid" onClick={() => scrollTo('work')}>Explore selected work <span>↘</span></button><button className="text-link" onClick={() => scrollTo('contact')}>Start a conversation <span>↗</span></button></div></div><div className="hero-aside reveal-up reveal-delay-1"><div className="portrait-frame"><Image src={profileImages[currentImage]} alt="Hylman profile" fill priority sizes="(max-width: 800px) 90vw, 36vw" className="portrait-image" /><div className="portrait-overlay"><span>01 / 03</span><span>Bandung, ID</span></div><button className="portrait-next" onClick={() => setCurrentImage((image) => (image + 1) % profileImages.length)} aria-label="Next profile image">↗</button></div><div className="aside-note"><span>01</span><p>Curious by default.<br />Precise when it matters.</p></div></div></section>
      <section className="signal-strip reveal-up reveal-delay-2" aria-label="Current status"><div><span>Now</span><strong>Learning Linux administration</strong></div><div><span>Focus</span><strong>Networks that feel invisible</strong></div><div><span>Based</span><strong>Bandung, Indonesia</strong></div><div className="signal-arrow" aria-hidden="true">↓</div></section>

      <section id="about" className="about-section content-section"><div className="section-label"><span>02</span><span>About the operator</span></div><div className="about-grid"><h2>Technical hands,<br /><em>human point of view.</em></h2><div className="about-copy"><p>I work across hardware, network infrastructure, and the web. The common thread is simple: make complicated things easier to trust.</p><p>From repairing a laptop to mapping a fiber installation, I like finding the quiet logic underneath the chaos.</p><div className="mini-stats"><div><strong>03+</strong><span>years learning</span></div><div><strong>03</strong><span>core disciplines</span></div><div><strong>01</strong><span>provincial LKS award</span></div></div></div></div></section>

      <section id="work" className="work-section content-section"><div className="section-heading"><div className="section-label"><span>03</span><span>Selected signals</span></div><p>Small projects, real constraints,<br />measurable outcomes.</p></div><div className="filter-row" role="tablist" aria-label="Filter projects">{(['All', 'Network', 'Web', 'Hardware'] as const).map((filter) => <button key={filter} role="tab" aria-selected={activeFilter === filter} className={activeFilter === filter ? 'filter-active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="project-list">{visibleProjects.map((project, index) => <article className="project-row" key={project.id} onClick={() => setSelectedProject(project)} tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && setSelectedProject(project)}><span className="project-number">0{index + 1}</span><div className="project-main"><p>{project.type} <span>/ {project.year}</span></p><h3>{project.title}</h3></div><p className="project-description">{project.description}</p><span className="project-metric">{project.metric}</span><span className="project-open">↗</span></article>)}</div></section>

      <section id="contact" className="contact-section content-section"><div className="contact-stamp"><span>04</span><span>Open channel</span></div><div><p className="eyebrow">Have a problem worth solving?</p><h2>Let&apos;s make<br /><em>something reliable.</em></h2><p className="contact-copy">Tell me what is tangled, what matters, and where you want to go next.</p><div className="contact-actions"><a className="button button--solid" href="mailto:hylmanremar@gmail.com?subject=Hello%20Hylman">Email me <span>↗</span></a><button className="text-link" onClick={copyEmail}>{copied ? 'Email copied' : 'Copy email'} <span>{copied ? '✓' : '+'}</span></button></div></div></section>
      <footer><span>HIRUU / 2026</span><span>Built with curiosity and clear signals.</span><a href="#home">Back to top ↑</a></footer>
    </div>

    {selectedProject && <div className="modal-backdrop" onClick={() => setSelectedProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project">×</button><p className="eyebrow">{selectedProject.type} / {selectedProject.year}</p><h2 id="project-title">{selectedProject.title}</h2><p>{selectedProject.details}</p><div className="modal-meta"><span>{selectedProject.metric}</span>{selectedProject.stack.map((item) => <span key={item}>{item}</span>)}</div></div></div>}
    {isPaletteOpen && <div className="modal-backdrop palette-backdrop" onClick={() => setIsPaletteOpen(false)}><div className="command-palette" role="dialog" aria-modal="true" aria-label="Command menu" onClick={(event) => event.stopPropagation()}><div className="palette-input"><span>⌕</span><input autoFocus placeholder="Where should we go?" onKeyDown={(event) => event.key === 'Escape' && setIsPaletteOpen(false)} /></div><button onClick={() => scrollTo('home')}><span>01</span>Home <kbd>↵</kbd></button><button onClick={() => scrollTo('about')}><span>02</span>About <kbd>↵</kbd></button><button onClick={() => scrollTo('work')}><span>03</span>Selected work <kbd>↵</kbd></button><button onClick={() => scrollTo('contact')}><span>04</span>Contact <kbd>↵</kbd></button></div></div>}
  </main>;
}