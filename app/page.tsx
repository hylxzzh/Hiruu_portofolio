import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 md:p-24 font-sans">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
        <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
          IT Engineer & Hardware Specialist
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Halo, Saya <span className="text-blue-500">[Hylman]</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
          Berfokus pada pemeliharaan infrastruktur IT, pemecahan masalah perangkat keras, dan sistem keamanan CCTV.
        </p>
      </section>

      {/* Stats & Achievements Section */}
      <section className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Prestasi */}
        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl relative overflow-hidden">
          <div className="text-3xl font-bold text-amber-400 mb-2">🏆 Juara 3</div>
          <h2 className="text-xl font-semibold mb-1">LKS Tingkat Provinsi</h2>
          <p className="text-sm text-slate-400">
            Teruji secara kompetitif dalam bidang Lomba Kompetensi Siswa skala provinsi.
          </p>
        </div>

        {/* Card Track Record Magang */}
        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
          <h2 className="text-xl font-semibold mb-1">Kasus Hardware Selesai</h2>
          <p className="text-sm text-slate-400">
            Pengalaman magang menangani 10 laptop, 8 HP, 2 kamera, dan 5 CCTV.
          </p>
        </div>
      </section>
    </main>
  );
}