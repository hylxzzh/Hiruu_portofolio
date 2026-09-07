import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-slate-200 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-slate-900">
        <div className="flex items-center gap-2 font-bold text-lg text-white tracking-wider">
          <span className="text-blue-500 font-mono">&lt;/&gt;</span> PORTFOLIO
        </div>
        <div className="flex gap-8 text-sm font-medium tracking-wide">
          <a href="#home" className="text-blue-500 border-b-2 border-blue-500 pb-1">HOME</a>
          <a href="#about" className="text-slate-400 hover:text-white transition">ABOUT</a>
          <a href="#contact" className="text-slate-400 hover:text-white transition">CONTACT ME</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        
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

            {/* Social Icons */}
            <div className="flex gap-5 pt-4 text-slate-400 text-xl">
              <a href="#" className="hover:text-blue-500 transition">🐙</a>
              <a href="#" className="hover:text-blue-500 transition">💼</a>
              <a href="#" className="hover:text-blue-500 transition">📷</a>
              <a href="#" className="hover:text-blue-500 transition">✉️</a>
            </div>
          </div>

          {/* Profile Image Frame */}
<div className="lg:col-span-5 flex justify-center">
  <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-slate-900/50 shadow-2xl shadow-blue-500/10">
    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10 opacity-60"></div>
    
    {/* Tag foto profil kamu */}
    <img 
      src="/foto-profil.jpg" 
      alt="Foto Profil" 
      className="w-full h-full object-cover"
    />
  </div>
</div>
        {/* SCROLL DOWN INDICATOR */}
        <div className="flex flex-col items-center justify-center text-slate-500 text-xs gap-2 pt-4">
          <div className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          </div>
          <span>SCROLL DOWN</span>
        </div>

        {/* 3-COLUMN INFO SECTION (ABOUT, SKILLS, EXPERIENCE) */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* About Me */}
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
                <span>✉️</span> <span className="text-xs text-slate-400">yourmail@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span>🌐</span> <span>Indonesia, English</span>
              </div>
            </div>
          </div>

          {/* Skills */}
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

          {/* Experience */}
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

        {/* MY PROJECTS / SERVICES */}
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
                <span className="text-blue-500">✉️</span> yourmail@example.com
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

      </div>

      {/* FOOTER */}
      <footer className="text-center py-8 text-xs text-slate-600 border-t border-slate-900 mt-12">
        © 2026 Your Name. All rights reserved.
      </footer>
    </div>
  );
}