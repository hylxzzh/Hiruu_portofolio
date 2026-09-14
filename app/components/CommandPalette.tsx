'use client';

import { useState } from 'react';

const items = [
  { id: 'home', num: '01', label: 'Home' },
  { id: 'about', num: '02', label: 'About' },
  { id: 'skills', num: '03', label: 'Skills' },
  { id: 'experience', num: '04', label: 'Experience' },
  { id: 'work', num: '05', label: 'Selected work' },
  { id: 'gallery', num: '06', label: 'Gallery' },
  { id: 'testimonial', num: '07', label: 'Testimonials' },
  { id: 'contact', num: '08', label: 'Contact' },
];

type CommandPaletteProps = {
  onClose: () => void;
  onNavigate: (id: string) => void;
};

export default function CommandPalette({ onClose, onNavigate }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter((item) => `${item.label} ${item.id}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="modal-backdrop palette-backdrop" onClick={onClose}>
      <div
        className="command-palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="palette-input">
          <span>⌕</span>
          <input
            autoFocus
            placeholder="Where should we go?"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => event.key === 'Escape' && onClose()}
          />
        </div>
        {filteredItems.map((item) => (
          <button key={item.id} type="button" onClick={() => onNavigate(item.id)}>
            <span>{item.num}</span>
            {item.label} <kbd>↵</kbd>
          </button>
        ))}
        {filteredItems.length === 0 && <p className="palette-empty">No channel found.</p>}
      </div>
    </div>
  );
}