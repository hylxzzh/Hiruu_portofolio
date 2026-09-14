'use client';

import { useState } from 'react';
import SpiderLilyPixel from './SpiderLilyPixel';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('hylmanremar@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormState('success');
        event.currentTarget.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const buttonLabel = formState === 'sending' ? 'Sending…' : formState === 'success' ? 'Sent ✓' : 'Send Message ↗';

  return (
    <section id="contact" className="contact-section content-section reveal-on-scroll">
      <div className="contact-panel">
        <div className="contact-meta">
          <SpiderLilyPixel className="lily-mark" />
          <span>08</span>
          <span>Open channel</span>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="eyebrow">Have a problem worth solving?</p>
            <h2>
              Let&apos;s make
              <br />
              <em>something reliable.</em>
            </h2>
            <p className="contact-copy">Tell me what is tangled, what matters, and where you want to go next.</p>

            <div className="mini-contact-list">
              <a href="mailto:hylmanremar@gmail.com">hylmanremar@gmail.com</a>
              <a href="https://www.linkedin.com/in/hylmanremarhiru/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/hylxzzh/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.instagram.com/hylman_remar/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" aria-label="Subject" required />
            <textarea name="message" rows={5} placeholder="Your Message" aria-label="Your Message" required />
            <div className="form-actions">
              <button type="submit" className="button button--solid" disabled={formState === 'sending'}>
                {buttonLabel}
              </button>
              <button type="button" className="text-link" onClick={copyEmail}>
                {copied ? 'Email copied' : 'Copy email'} <span>{copied ? '✓' : '+'}</span>
              </button>
            </div>
            <p className={`form-status ${formState === 'success' ? 'is-success' : ''} ${formState === 'error' ? 'is-error' : ''}`}>
              {formState === 'idle' && <>&nbsp;</>}
              {formState === 'sending' && 'Sending your message…'}
              {formState === 'success' && 'Message sent. Thanks for reaching out.'}
              {formState === 'error' && 'Something went wrong. Please try again or email me directly.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}