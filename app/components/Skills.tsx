import SpiderLily from './SpiderLily';

type SkillGroup = {
  id: string;
  label: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    id: 'network',
    label: 'Network & IT',
    skills: ['MikroTik', 'TCP/IP', 'Fiber Optic', 'Hardware repair', 'Software repair', 'Avometer', 'Soldering'],
  },
  {
    id: 'linux',
    label: 'Linux & Systems',
    skills: ['Debian', 'Ubuntu', 'Arch', 'Linux Mint', 'WSL', 'Linux administration'],
  },
  {
    id: 'web',
    label: 'Web & Programming',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Python'],
  },
  {
    id: 'server',
    label: 'Server & Database',
    skills: ['MariaDB', 'MySQL', 'Apache2'],
  },
  {
    id: 'design',
    label: 'Design & Multimedia',
    skills: ['Photography', 'Drone pilot', 'Graphic design', 'Canva', 'OBS', 'CapCut'],
  },
  {
    id: 'languages',
    label: 'Languages',
    skills: ['English', 'Arabic', 'Japanese', 'German'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section content-section reveal-on-scroll reveal-from-right">
      <div className="section-label">
        <SpiderLily className="lily-mark" />
        <span>03</span>
        <span>Skill signals</span>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div className="skill-card" key={group.id}>
            <div className="skill-card__head">
              <span className="skill-card__label">{group.label}</span>
              <span className="skill-card__num">0{index + 1}</span>
            </div>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}