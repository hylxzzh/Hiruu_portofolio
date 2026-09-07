'use client'; // <-- WAJIB DI NEXT.JS BIAR BISA PAKAI useState

import React, { useState, useEffect } from 'react';

export default function Home() {
  // 1. DEKLARASI STATE UNTUK MENU MOBILE
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array foto di folder public/
  const profileImages = [
    '/profile.jpg',
    '/profile2.jpg',
    '/profile3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide foto profil
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
    <div className="min-h-screen bg-[#080808] text-slate-200 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* NAVBAR MINIMALIS (TANPA HIRE ME) */}
      <header className="sticky top-0 bg-[#080808]/90 backdrop-blur-md z-50 border-b border-slate-900/60">
        <div className="flex justify-between items-center py-5 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          
          {/* LOGO BRAND */}
          <a href="#home" className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span>Hiruu<span className="text-blue-500">.</span></span>
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest font-semibold text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">HOME</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </nav>

          {/* TOMBOL TOGGLE MOBILE */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 border border-slate-800 rounded-lg bg-slate-900/40"
          >
            {isMenuOpen ? "CLOSE ✕" : "MENU ☰"}
          </button>

        </div>

        {/* DROPDOWN MOBILE */}
        {isMenuOpen && (
          <nav className="md:hidden bg-[#0d0d0d] border-b border-slate-800/80 px-6 py-5 flex flex-col gap-4 text-xs font-semibold tracking-wider text-slate-300">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              HOME
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              ABOUT
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              PROJECTS
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              CONTACT
            </a>
          </nav>
        )}
      </header>

      {/* CONTAINER UTAMA */}
      <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto space-y-16 py-8">

        {/* HERO SECTION */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          
          <div className="lg:col-span-7 space-y-6">
            <p className="text-blue-500 font-semibold tracking-widest text-sm uppercase">HELLO, I'M</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight">
              Hiruu.
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-500">
              IT & NETWORK ENGINEER
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl">
              Passionate about technology, networking, hardware engineering, and building digital solutions that make an impact.
            </p>
            
            <div className="pt-2">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500/50 rounded-lg text-blue-400 hover:bg-blue-500/10 transition font-medium text-sm">
                VIEW MY WORK <span>→</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition text-sm font-medium"
              >
                <img src="/icons/github.svg" alt="GitHub" className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition text-sm font-medium"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition text-sm font-medium"
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="w-4 h-4" />
                <span>Instagram</span>
              </a>

              <a 
                href="mailto:hylmanremar@gmail.com" 
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition text-sm font-medium"
              >
                <img src="/icons/email.svg" alt="Email" className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* SLIDER FOTO PROFIL */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-slate-900/50 shadow-2xl shadow-blue-500/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10 opacity-40 pointer-events-none"></div>

              <img
                src={profileImages[currentIndex]}
                alt={`Profile ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 text-xs"
              >
                ❮
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 text-xs"
              >
                ❯
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {profileImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? 'w-6 bg-blue-500'
                        : 'w-2 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* SCROLL DOWN INDICATOR */}
        <div className="flex flex-col items-center justify-center text-slate-500 text-xs gap-2 pt-4">
          <div className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          </div>
          <span>SCROLL DOWN</span>
        </div>

        {/* ABOUT, SKILLS, EXPERIENCE */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0d0d0d] border border-slate-800/80 rounded-2xl space-y-6">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> ABOUT ME
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              I'm a technology enthusiast with a focus on networking, hardware troubleshooting, server administration, and web development. 3rd Place LKS Provincial Winner.
            </p>
            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <span>📅</span> <span>12 March 2004</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span> <span>Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <span>✉️</span> <span className="text-xs text-slate-400">hylmanremar@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span>🌐</span> <span>Indonesia, English</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#0d0d0d] border border-slate-800/80 rounded-2xl space-y-6">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> SKILLS
            </div>
            <div className="space-y-4 text-sm">
              {[
                { name: 'Hardware Troubleshooting', level: '90%' },
                { name: 'CCTV & Network Config', level: '85%' },
                { name: 'MikroTik & Routing', level: '80%' },
                { name: 'Web Development', level: '75%' },
                { name: 'Linux Administration', level: '70%' },
              ].map((skill, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>{skill.name}</span>
                    <span className="text-slate-500">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-[#0d0d0d] border border-slate-800/80 rounded-2xl space-y-6">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> EXPERIENCE
            </div>
            <div className="relative border-l border-slate-800 pl-4 space-y-6 text-sm">
              <div className="relative">
                <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span className="text-xs text-blue-400 font-semibold">2023 - Present</span>
                <h4 className="font-bold text-white mt-0.5">IT Hardware & Network (Intern)</h4>
                <p className="text-xs text-slate-500">PT. Sumber Koneksi Indonesia</p>
                <p className="text-xs text-slate-400 mt-1">Repaired 10 laptops, 8 phones, 5 CCTVs, and 2 cameras.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span className="text-xs text-blue-400 font-semibold">2023</span>
                <h4 className="font-bold text-white mt-0.5">3rd Place LKS Provincial</h4>
                <p className="text-xs text-slate-500">Lomba Kompetensi Siswa</p>
                <p className="text-xs text-slate-400 mt-1">Competed in IT network & system administration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTER STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#0d0d0d] border border-slate-800/80 rounded-2xl text-center">
          <div>
            <div className="text-2xl font-extrabold text-white">25+</div>
            <div className="text-xs text-slate-500 uppercase mt-1">Hardware Fixed</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">3rd</div>
            <div className="text-xs text-slate-500 uppercase mt-1">LKS Provincial</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">5+</div>
            <div className="text-xs text-slate-500 uppercase mt-1">CCTV Setups</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">24/7</div>
            <div className="text-xs text-slate-500 uppercase mt-1">Support & Maint</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> MY SERVICES & PROJECTS
            </div>
            <a href="#" className="text-xs text-blue-500 hover:underline flex items-center gap-1">VIEW ALL PROJECTS →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Hardware Repair', desc: 'Troubleshooting & fixing laptops, smartphones, and camera gear.' },
              { title: 'CCTV Infrastructure', desc: 'Setup, wiring, and network configuration for security cameras.' },
              { title: 'Network Configuration', desc: 'Design and implementation of network for small businesses.' },
              { title: 'Web Development', desc: 'Responsive website design using Next.js and Tailwind CSS.' }
            ].map((p, i) => (
              <div key={i} className="p-5 bg-[#0d0d0d] border border-slate-800/80 rounded-2xl hover:border-blue-500/50 transition space-y-3 group">
                <div className="text-blue-500 text-2xl">⚡</div>
                <h3 className="font-bold text-white text-base">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                <div className="pt-2">
                  <span className="text-xs text-blue-500 group-hover:translate-x-1 transition-transform inline-block">VIEW PROJECT →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT ME */}
        <section id="contact" className="space-y-6 pt-6">
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> CONTACT ME
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <span className="text-blue-500">✉️</span> hylmanremar@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">📞</span> +62 812 3456 7890
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">📍</span> Indonesia
              </div>
            </div>

            <div className="lg:col-span-8">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-[#0d0d0d] border border-slate-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500" />
                  <input type="email" placeholder="Your Email" className="w-full bg-[#0d0d0d] border border-slate-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500" />
                </div>
                <input type="text" placeholder="Subject" className="w-full bg-[#0d0d0d] border border-slate-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500" />
                <textarea rows={4} placeholder="Your Message" className="w-full bg-[#0d0d0d] border border-slate-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500"></textarea>
                <button type="button" className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/10 transition">
                  SEND MESSAGE →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-8 text-xs text-slate-600 border-t border-slate-900 mt-12">
          © 2026 Hiruu. All rights reserved.
        </footer>

      </div>
    </div>
  );
}