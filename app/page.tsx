'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const profileImages = [
    '/profile.jpg',
    '/profile2.jpg',
    '/profile3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [profileImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profileImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
  };

  return (
    <div className="min-h-screen bg-[#080807] text-zinc-300 font-sans selection:bg-amber-500/20 selection:text-amber-200">
      
      {/* NAVBAR MINIMALIS MEWAH */}
      <header className="sticky top-0 bg-[#080807]/85 backdrop-blur-md z-50 border-b border-amber-900/20">
        <div className="flex justify-between items-center py-5 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          
          {/* LOGO BRAND (Menggunakan Font Cursive Monsieur La Doulaise) */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
            <span className="font-cursive text-4xl text-amber-200 tracking-wide font-normal">
              Hiruu
            </span>
          </a>

          {/* MENU DESKTOP (Hanya 3 Point: HOME, ABOUT, SAY HELLO) */}
          <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] font-light text-zinc-400">
            <a href="#home" className="hover:text-amber-300 transition-colors">HOME</a>
            <a href="#about" className="hover:text-amber-300 transition-colors">ABOUT</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">SAY HELLO</a>
          </nav>

          {/* TOMBOL TOGGLE MOBILE */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-300/80 hover:text-amber-200 text-xs font-light uppercase tracking-widest px-3 py-1.5 border border-amber-900/40 rounded bg-amber-950/20"
          >
            {isMenuOpen ? "CLOSE ✕" : "MENU ☰"}
          </button>

        </div>

        {/* DROPDOWN MOBILE */}
        {isMenuOpen && (
          <nav className="md:hidden bg-[#0d0d0b] border-b border-amber-900/30 px-6 py-5 flex flex-col gap-4 text-xs font-light tracking-widest text-zinc-300">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-300 transition-colors">HOME</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-300 transition-colors">ABOUT</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-300 transition-colors">SAY HELLO</a>
          </nav>
        )}
      </header>

      {/* CONTAINER UTAMA */}
      <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto space-y-24 py-12">

        {/* HERO SECTION */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          
          <div className="lg:col-span-7 space-y-6">
            <p className="text-amber-400/90 font-light tracking-[0.25em] text-xs uppercase flex items-center gap-2">
              <span className="w-6 h-[1px] bg-amber-400/50"></span>
              Welcome to my portfolio
            </p>

            {/* Nama & Subtitle dengan Font Monsieur La Doulaise */}
            <div>
              <h1 className="font-cursive text-7xl sm:text-8xl lg:text-9xl text-amber-200 font-normal leading-none drop-shadow-[0_2px_10px_rgba(217,119,6,0.15)]">
                Hiruu
              </h1>
              <h2 className="font-cursive text-3xl sm:text-4xl text-amber-100/70 tracking-wide font-normal -mt-2">
                IT & Network Engineer
              </h2>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-xl font-light tracking-wide pt-2">
              Passionate about technology, networking infrastructure, hardware engineering, and crafting digital experiences with precision and sophistication.
            </p>
            
            {/* Tombol Explore Work dengan Font Monsieur La Doulaise */}
            <div className="pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-3 px-7 py-2 border border-amber-500/40 rounded-full text-amber-200 hover:bg-amber-500/10 hover:border-amber-400 transition shadow-[0_0_15px_rgba(217,119,6,0.05)]"
              >
                <span className="font-cursive text-2xl font-normal leading-none pt-1">Explore Work</span>
                <span className="text-xs">→</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { name: 'GitHub', link: 'https://github.com', icon: '/icons/github.svg' },
                { name: 'LinkedIn', link: 'https://linkedin.com', icon: '/icons/linkedin.svg' },
                { name: 'Instagram', link: 'https://instagram.com', icon: '/icons/instagram.svg' },
                { name: 'Email', link: 'mailto:hylmanremar@gmail.com', icon: '/icons/email.svg' },
              ].map((s, i) => (
                <a 
                  key={i}
                  href={s.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2 bg-[#0e0e0c] border border-amber-900/30 rounded-lg text-zinc-400 hover:text-amber-200 hover:border-amber-500/40 transition text-xs font-light"
                >
                  <img src={s.icon} alt={s.name} className="w-3.5 h-3.5 opacity-60 invert" />
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* SLIDER FOTO PROFIL (TANPA BORDER) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden bg-[#0e0e0c] shadow-[0_0_30px_rgba(0,0,0,0.8)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent z-10 opacity-40 pointer-events-none"></div>

              <img
                src={profileImages[currentIndex]}
                alt={`Profile ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out filter brightness-[0.95] contrast-[1.05]"
              />

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 border border-amber-500/30 hover:bg-amber-600/80 text-amber-200 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 text-xs"
              >
                ❮
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 border border-amber-500/30 hover:bg-amber-600/80 text-amber-200 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 text-xs"
              >
                ❯
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                {profileImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'w-5 bg-amber-400' : 'w-1.5 bg-zinc-600/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* SCROLL DOWN INDICATOR */}
        <div className="flex flex-col items-center justify-center text-zinc-600 text-[10px] tracking-[0.2em] gap-2">
          <div className="w-4 h-7 border border-amber-900/40 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-amber-400/80 rounded-full animate-bounce"></div>
          </div>
          <span>SCROLL</span>
        </div>

        {/* ABOUT, SKILLS, EXPERIENCE */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* About Me */}
          <div className="p-7 bg-[#0c0c0a] border border-amber-900/20 rounded-xl space-y-5 hover:border-amber-800/40 transition">
            <div className="flex items-center gap-2 text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="font-cursive text-2xl text-amber-200 leading-none">About Me</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              Technology enthusiast focusing on network administration, hardware systems, and modern web applications. 3rd Place LKS Provincial Winner.
            </p>
            <div className="space-y-2.5 pt-2 text-xs text-zinc-400 font-light">
              <div className="flex items-center gap-2.5">
                <span className="text-amber-400/70">📅</span> <span>12 March 2004</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-amber-400/70">📍</span> <span>Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-amber-400/70">✉️</span> <span>hylmanremar@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="p-7 bg-[#0c0c0a] border border-amber-900/20 rounded-xl space-y-5 hover:border-amber-800/40 transition">
            <div className="flex items-center gap-2 text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="font-cursive text-2xl text-amber-200 leading-none">Skills</span>
            </div>
            <div className="space-y-3.5 text-xs">
              {[
                { name: 'Hardware Troubleshooting', level: '90%' },
                { name: 'CCTV & Network Config', level: '85%' },
                { name: 'MikroTik & Routing', level: '80%' },
                { name: 'Web Development', level: '75%' },
                { name: 'Linux Administration', level: '70%' },
              ].map((skill, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-zinc-400 font-light">
                    <span>{skill.name}</span>
                    <span className="text-amber-400/60 text-[11px]">{skill.level}</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-1 overflow-hidden">
                    <div className="bg-amber-400/80 h-1 rounded-full" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="p-7 bg-[#0c0c0a] border border-amber-900/20 rounded-xl space-y-5 hover:border-amber-800/40 transition">
            <div className="flex items-center gap-2 text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="font-cursive text-2xl text-amber-200 leading-none">Experience</span>
            </div>
            <div className="relative border-l border-amber-900/30 pl-4 space-y-5 text-xs">
              
              <div className="relative">
                <span className="absolute -left-[20.5px] top-1 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]"></span>
                <span className="text-[10px] text-amber-400/80 font-light tracking-widest uppercase">2023 - Present</span>
                <h3 className="font-normal text-amber-100 mt-0.5">IT Hardware & Network (Intern)</h3>
                <p className="text-zinc-500 font-light">PT. Sumber Koneksi Indonesia</p>
                <p className="text-zinc-400 mt-1 font-light leading-relaxed">Repaired laptops, phones, CCTVs, and cameras.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[20.5px] top-1 w-2 h-2 rounded-full bg-amber-400/50"></span>
                <span className="text-[10px] text-amber-400/80 font-light tracking-widest uppercase">2023</span>
                <h3 className="font-normal text-amber-100 mt-0.5">3rd Place LKS Provincial</h3>
                <p className="text-zinc-500 font-light">Lomba Kompetensi Siswa</p>
                <p className="text-zinc-400 mt-1 font-light leading-relaxed">Competed in IT network & system admin.</p>
              </div>

            </div>
          </div>

        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#0c0c0a] border border-amber-900/20 rounded-xl text-center">
          <div>
            <div className="text-2xl font-light text-amber-200">25+</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-light">Hardware Fixed</div>
          </div>
          <div>
            <div className="text-2xl font-light text-amber-200">3rd</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-light">LKS Provincial</div>
          </div>
          <div>
            <div className="text-2xl font-light text-amber-200">5+</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-light">CCTV Setups</div>
          </div>
          <div>
            <div className="text-2xl font-light text-amber-200">24/7</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-light">Support & Maint</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="font-cursive text-3xl text-amber-200 leading-none">Services & Projects</span>
            </div>
            <a href="#" className="text-xs text-amber-400/80 hover:text-amber-300 font-light tracking-wider">VIEW ALL →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Hardware Repair', desc: 'Troubleshooting & fixing laptops, smartphones, and camera gear.' },
              { title: 'CCTV Infrastructure', desc: 'Setup, wiring, and network configuration for security cameras.' },
              { title: 'Network Config', desc: 'Design and implementation of network for small businesses.' },
              { title: 'Web Development', desc: 'Responsive website design using Next.js and Tailwind CSS.' }
            ].map((p, i) => (
              <div key={i} className="p-6 bg-[#0c0c0a] border border-amber-900/20 rounded-xl hover:border-amber-500/40 transition space-y-3 group">
                <div className="text-amber-400 text-base">✦</div>
                <h3 className="font-normal text-amber-100 text-sm">{p.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-light">{p.desc}</p>
                <div className="pt-2">
                  <span className="text-[11px] text-amber-400/80 group-hover:translate-x-1 transition-transform inline-block font-light">LEARN MORE →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SAY HELLO (CONTACT ME) */}
        <section id="contact" className="space-y-6 pt-4">
          <div className="flex items-center gap-2 text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="font-cursive text-3xl text-amber-200 leading-none">Say Hello</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-4 text-xs text-zinc-400 font-light">
              <div className="flex items-center gap-3">
                <span className="text-amber-400">✉</span> hylmanremar@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400">📞</span> +62 812 3456 7890
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400">📍</span> Indonesia
              </div>
            </div>

            <div className="lg:col-span-8">
              <form className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="Your Name" className="w-full bg-[#0c0c0a] border border-amber-900/30 rounded-lg p-3 text-xs text-amber-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 font-light" />
                  <input type="email" placeholder="Your Email" className="w-full bg-[#0c0c0a] border border-amber-900/30 rounded-lg p-3 text-xs text-amber-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 font-light" />
                </div>
                <input type="text" placeholder="Subject" className="w-full bg-[#0c0c0a] border border-amber-900/30 rounded-lg p-3 text-xs text-amber-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 font-light" />
                <textarea rows={4} placeholder="Your Message" className="w-full bg-[#0c0c0a] border border-amber-900/30 rounded-lg p-3 text-xs text-amber-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 font-light"></textarea>
                <button type="button" className="px-6 py-2.5 border border-amber-500/40 text-amber-200 rounded-lg text-xs hover:bg-amber-500/10 transition">
                  <span className="font-cursive text-xl">Send Message</span> →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-8 text-[11px] text-zinc-600 border-t border-amber-900/20 font-light tracking-wider">
          © 2026 Hiruu. All rights reserved.
        </footer>

      </div>
    </div>
  );
}