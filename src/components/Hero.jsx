import React from 'react';

const Hero = ({ onPrimary, onSecondary }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0E491] via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#31694E] tracking-tight">
              Pondok Pesantren Mahasiswa
            </h1>
            <p className="mt-4 text-lg text-[#658C58] max-w-prose">
              Ruang tumbuh untuk jiwa, ilmu, dan pengabdian.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onPrimary}
                className="px-5 py-3 rounded-lg bg-[#31694E] text-[#F0E491] shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                Masuk
              </button>
              <button
                onClick={onSecondary}
                className="px-5 py-3 rounded-lg bg-[#BBC863] text-[#31694E] shadow-md shadow-black/10 hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Daftar
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-white border border-black/5 shadow-xl shadow-black/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop"
                alt="Kegiatan PPM"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#F0E491] text-[#31694E] px-4 py-2 rounded-lg shadow-md shadow-black/10 hidden sm:block">
              Lingkungan Islami, modern, dan nyaman
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
