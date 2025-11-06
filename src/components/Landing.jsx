import React, { useEffect } from 'react';
import Hero from './Hero';
import { TentangPPM, VisiMisi, KegiatanRutin, StrukturPengurus } from './Sections';

const Gallery = () => {
  const imgs = [
    'https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#31694E]">Galeri Kegiatan</h2>
          <p className="mt-2 text-[#658C58]">Momen kebersamaan santri PPM</p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {imgs.map((src, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-black/5 bg-white shadow-md shadow-black/10">
              <img src={src} alt={`Galeri ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Landing = ({ onLogin, onSignup }) => {
  return (
    <main>
      <Hero onPrimary={onLogin} onSecondary={onSignup} />
      <TentangPPM />
      <VisiMisi />
      <KegiatanRutin />
      <StrukturPengurus />
      <Gallery />
    </main>
  );
};

export default Landing;
