'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type LoadingPhase = 'spinning' | 'morphing' | 'flying' | 'revealed';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState<LoadingPhase>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 'revealed';
    }
    return 'spinning';
  });
  const [flyTarget, setFlyTarget] = useState({ x: 0, y: 0 });
  const sparkRef = useRef<HTMLSpanElement>(null);

  // =========================================================================
  // 📸 DAFTAR FOTO PROFIL (LOKASI FILE)
  // Masukkan file foto kamu ke folder 'public' di VS Code.
  // Kamu tinggal ganti string nama file di bawah ini sesuai nama foto kamu.
  // Contoh: '/foto-saya.jpg', '/foto-kerja.png', dsb.
  // =========================================================================
  const profileImages = [
    '/foto_profile/profile1.jpg',
    '/foto_profile/profile2.jpg',
    '/foto_profile/profile3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (profileImages.length === 0) return;
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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const morphTimer = window.setTimeout(() => setLoadingPhase('morphing'), 2200);
    const flyTimer = window.setTimeout(() => {
      const spark = sparkRef.current?.getBoundingClientRect();
      if (spark) {
        setFlyTarget({
          x: spark.left + spark.width / 2 - window.innerWidth / 2,
          y: spark.top + spark.height / 2 - window.innerHeight / 2,
        });
      }
      setLoadingPhase('flying');
    }, 3400);
    const revealTimer = window.setTimeout(() => setLoadingPhase('revealed'), 5200);

    return () => {
      window.clearTimeout(morphTimer);
      window.clearTimeout(flyTimer);
      window.clearTimeout(revealTimer);
    };
  }, []);

  const loaderStyle = {
    '--fly-x': `${flyTarget.x}px`,
    '--fly-y': `${flyTarget.y}px`,
  } as React.CSSProperties;

  return (
    <div className={`site-shell min-h-screen bg-[#111310] text-stone-300 font-sans selection:bg-orange-500/30 selection:text-orange-100 ${loadingPhase === 'revealed' ? 'is-revealed' : 'is-loading'}`}>
      {loadingPhase !== 'revealed' && (
        <div className={`loading-screen loading-screen--${loadingPhase}`} aria-label="Loading Hiruu portfolio" role="status">
          <div className="loading-screen__halo" />
          <div className="loading-mark" style={loaderStyle}>
            <span className="loading-mark__spark" />
          </div>
        </div>
      )}
      
      {/* NAVBAR (Dibuat aman agar tidak menutupi info di bawahnya) */}
      <header className="w-full bg-[#111310]/90 backdrop-blur-xl border-b border-stone-700/40 sticky top-0 z-50">
        <div className="flex justify-between items-center py-4 px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          
          {/* LOGO BRAND */}
          <a href="#home" className="flex items-center gap-2 group">
            <span ref={sparkRef} className="brand-spark w-3 h-3 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" aria-hidden="true"></span>
            <span className="font-cursive text-3xl sm:text-4xl text-amber-200 tracking-wide font-normal">
              Hiruu
            </span>
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.24em] font-medium text-stone-500">
            <a href="#home" className="hover:text-orange-300 transition-colors">HOME</a>
            <a href="#about" className="hover:text-orange-300 transition-colors">ABOUT</a>
            <a href="#contact" className="hover:text-orange-300 transition-colors">SAY HELLO</a>
          </nav>

          {/* TOMBOL MOBILE TOGGLE (Hanya Icon Simpel, Tanpa Teks Menu/Close) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-orange-200 p-2 rounded-lg border border-stone-700/60 bg-stone-900/60 hover:bg-stone-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              /* Icon Silang (Close) */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Icon Garis 3 (Hamburger) */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

        </div>

        {/* DROPDOWN MENU MOBILE (Animasi halus, mendorong konten ke bawah) */}
        {isMenuOpen && (
          <nav className="md:hidden bg-[#151714] border-t border-stone-700/40 px-6 py-5 flex flex-col gap-4 text-xs font-light tracking-widest text-stone-300 animate-slide-down">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)} 
              className="hover:text-orange-300 transition-colors py-1"
            >
              HOME
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)} 
              className="hover:text-orange-300 transition-colors py-1"
            >
              ABOUT
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="hover:text-orange-300 transition-colors py-1"
            >
              SAY HELLO
            </a>
          </nav>
        )}
      </header>

      {/* CONTAINER UTAMA */}
      <div className="px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto space-y-28 py-10 sm:py-16">

        {/* HERO SECTION */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-2 sm:pt-6">
          
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <p className="text-orange-300/90 font-medium tracking-[0.25em] text-[10px] uppercase flex items-center gap-3">
              <span className="w-8 h-px bg-orange-400/70"></span>
              Welcome to my portfolio
            </p>

            {/* Nama & Subtitle */}
            <div>
              <h1 className="font-cursive text-7xl sm:text-8xl lg:text-[9.5rem] text-amber-200 font-normal leading-[0.85] drop-shadow-[0_2px_18px_rgba(251,191,36,0.18)]">
                Hiruu
              </h1>
              <h2 className="font-cursive text-2xl sm:text-4xl text-amber-100/85 tracking-wide font-normal mt-2">
                IT & Network Engineer
              </h2>
            </div>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-xl font-light pt-2">
              Passionate about technology, networking infrastructure, hardware engineering, and crafting digital experiences with precision and sophistication.
            </p>
            
            {/* Tombol Explore Work */}
            <div className="pt-1">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-4 px-6 sm:px-7 py-3 border border-amber-400/70 text-amber-200 rounded-full hover:bg-amber-400/10 hover:border-amber-300 transition shadow-[0_8px_30px_rgba(249,115,22,0.12)]"
              >
                <span className="font-cursive text-amber-200 text-xl sm:text-2xl font-normal leading-none pt-1">Explore Work</span>
                <span className="text-base">↗</span>
              </a>
            </div>

            {/* SOCIAL LINKS (Grid 2x2 di HP) */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 pt-3 sm:pt-4">
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
                  className="flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2.5 bg-stone-900/60 border border-stone-700/60 rounded-lg text-stone-400 hover:text-orange-200 hover:border-orange-500/50 transition text-xs font-light w-full sm:w-auto text-center"
                >
                  <Image src={s.icon} alt={s.name} width={14} height={14} className="w-3.5 h-3.5 opacity-60 invert shrink-0" />
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* SLIDER FOTO PROFIL (Sistem Panggilan Foto Mudah) */}
          <div className="lg:col-span-5 flex justify-center pt-4 lg:pt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-xs aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-900 shadow-[18px_22px_0_rgba(194,65,12,0.35),0_0_50px_rgba(0,0,0,0.45)] group rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-[#111310] via-transparent to-transparent z-10 opacity-50 pointer-events-none"></div>

              {profileImages.length > 0 ? (
                <Image
                  src={profileImages[currentIndex]}
                  alt={`Profile ${currentIndex + 1}`}
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out filter brightness-[0.95] contrast-[1.05]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-600 text-xs font-light">
                  No Image Available
                </div>
              )}

              {profileImages.length > 1 && (
                <>
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
                </>
              )}
            </div>
          </div>

        </section>

        {/* SCROLL DOWN INDICATOR */}
        <div className="flex flex-col items-center justify-center text-stone-600 text-[10px] tracking-[0.2em] gap-2 pt-2">
          <div className="w-4 h-7 border border-stone-700/70 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-orange-400/80 rounded-full animate-bounce"></div>
          </div>
          <span>SCROLL</span>
        </div>

        {/* SECTION ABOUT ME (SIAP DILANJUTKAN) */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* About Me */}
          <div className="p-6 sm:p-7 bg-stone-900/50 border border-stone-700/50 rounded-2xl space-y-4 sm:space-y-5 hover:border-orange-700/50 transition">
            <div className="flex items-center gap-2 text-orange-300">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
              <span className="font-cursive text-2xl text-amber-200 leading-none">About Me</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              I am a Computer and Network Engineering student with hands-on experience in IT. I have solved a wide range of hardware and software issues, worked with MikroTik and Cisco networks, developed websites, and handled industrial-scale cabling including fiber optic and Ethernet. I also achieved 3rd place in the provincial LKS competition.
            </p>
            <div className="space-y-2.5 pt-2 text-xs text-zinc-400 font-light">
              <div className="flex items-center gap-2.5">
                <span className="text-amber-400/70">📅</span> <span>27 January 2009</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-amber-400/70">📍</span> <span>Bandung,Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-amber-400/70">✉️</span> <span className="truncate">hylmanremar@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="p-6 sm:p-7 bg-stone-900/50 border border-stone-700/50 rounded-2xl space-y-4 sm:space-y-5 hover:border-orange-700/50 transition">
            <div className="flex items-center gap-2 text-orange-300">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
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
          <div className="p-6 sm:p-7 bg-stone-900/50 border border-stone-700/50 rounded-2xl space-y-4 sm:space-y-5 hover:border-orange-700/50 transition">
            <div className="flex items-center gap-2 text-orange-300">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
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

        {/* SAY HELLO */}
        <section id="contact" className="space-y-6 pt-2">
          <div className="flex items-center gap-2 text-orange-300">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span className="font-cursive text-2xl sm:text-3xl text-amber-200 leading-none">Say Hello</span>
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
                  <input type="text" placeholder="Your Name" className="w-full bg-stone-900/60 border border-stone-700/60 rounded-lg p-3 text-xs text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-orange-500/70 font-light" />
                  <input type="email" placeholder="Your Email" className="w-full bg-stone-900/60 border border-stone-700/60 rounded-lg p-3 text-xs text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-orange-500/70 font-light" />
                </div>
                <input type="text" placeholder="Subject" className="w-full bg-stone-900/60 border border-stone-700/60 rounded-lg p-3 text-xs text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-orange-500/70 font-light" />
                <textarea rows={4} placeholder="Your Message" className="w-full bg-stone-900/60 border border-stone-700/60 rounded-lg p-3 text-xs text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-orange-500/70 font-light"></textarea>
                <button type="button" className="px-6 py-2.5 border border-amber-400/70 text-amber-200 rounded-lg text-xs hover:bg-amber-400/10 hover:border-amber-300 transition">
                  <span className="font-cursive text-amber-200 text-xl">Send Message</span> →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-8 text-[11px] text-zinc-600 border-t border-amber-900/20 font-light tracking-wider">
          © 2026 Hiruu. Built with curiosity.
        </footer>

      </div>
    </div>
  );
}