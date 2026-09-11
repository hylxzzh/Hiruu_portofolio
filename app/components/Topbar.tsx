'use client';

import Clock from './Clock';

type TopbarProps = {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onOpenPalette: () => void;
  onNavigate: (id: string) => void;
};

export default function Topbar({ isMenuOpen, onToggleMenu, onOpenPalette, onNavigate }: TopbarProps) {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Hiruu home">
        <span className="brand-mark" aria-hidden="true" />
        <span>HIRUU</span>
      </a>
      <nav className={`nav-links ${isMenuOpen ? 'nav-links--open' : ''}`} aria-label="Main navigation">
        <button onClick={() => onNavigate('about')}>About</button>
        <button onClick={() => onNavigate('skills')}>Skills</button>
        <button onClick={() => onNavigate('work')}>Work</button>
        <button onClick={() => onNavigate('contact')}>Contact</button>
      </nav>
      <div className="topbar-actions">
        <Clock />
        <button className="palette-trigger" onClick={onOpenPalette} aria-label="Open command menu">
          <span>Search</span>
          <kbd>Ctrl K</kbd>
        </button>
        <button className="menu-trigger" onClick={onToggleMenu} aria-label="Toggle navigation">
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  );
}