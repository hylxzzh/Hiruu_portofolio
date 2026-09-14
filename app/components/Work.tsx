'use client';

import { useMemo, useState } from 'react';
import SpiderLilyPixel from './SpiderLilyPixel';

type Category = 'Network' | 'Web' | 'Hardware';
type Project = {
  id: string;
  title: string;
  type: string;
  category: Category;
  year: string;
  description: string;
  metric: string;
};

const projects: Project[] = [
  {
    id: 'rute-aman',
    title: 'Rute Aman',
    type: 'Network infrastructure',
    category: 'Network',
    year: '2025',
    description: 'A resilient MikroTik network plan built for fast diagnosis and calmer days.',
    metric: '99.8% uptime',
  },
  {
    id: 'ruang-karya',
    title: 'Ruang Karya',
    type: 'Web experience',
    category: 'Web',
    year: '2025',
    description: 'A warm digital home for a creative community that needed less noise.',
    metric: '+42% engagement',
  },
  {
    id: 'sinyal-pulang',
    title: 'Sinyal Pulang',
    type: 'Hardware rescue',
    category: 'Hardware',
    year: '2024',
    description: 'Field notes from turning an unreliable CCTV system into a reliable set of eyes.',
    metric: '18 nodes restored',
  },
];

const filters = ['All', 'Network', 'Web', 'Hardware'] as const;

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<'All' | Category>('All');

  const visibleProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  );

  const handleTabKeyDown = (event: React.KeyboardEvent) => {
    const current = filters.indexOf(activeFilter);
    let next = current;
    if (event.key === 'ArrowRight') next = (current + 1) % filters.length;
    else if (event.key === 'ArrowLeft') next = (current - 1 + filters.length) % filters.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = filters.length - 1;
    else return;
    event.preventDefault();
    setActiveFilter(filters[next]);
  };

  return (
    <section id="work" className="work-section content-section reveal-on-scroll reveal-from-right">
      <div className="section-heading">
        <div className="section-label">
          <SpiderLilyPixel className="lily-mark" />
          <span>05</span>
          <span>Selected signals</span>
        </div>
        <p>
          Small projects, real constraints,
          <br />
          measurable outcomes.
        </p>
      </div>

      <div className="filter-row" role="tablist" aria-label="Filter projects" onKeyDown={handleTabKeyDown}>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            id={`filter-tab-${filter}`}
            role="tab"
            aria-selected={activeFilter === filter}
            aria-controls="work-panel"
            tabIndex={activeFilter === filter ? 0 : -1}
            className={activeFilter === filter ? 'filter-active' : ''}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-list" id="work-panel" role="tabpanel" aria-labelledby={`filter-tab-${activeFilter}`}>
        {visibleProjects.map((project, index) => (
          <article className="project-row" key={project.id}>
            <span className="project-number">0{index + 1}</span>
            <div className="project-main">
              <p>
                {project.type} <span>/ {project.year}</span>
              </p>
              <h3>{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <span className="project-metric">{project.metric}</span>
            <span className="project-open">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}