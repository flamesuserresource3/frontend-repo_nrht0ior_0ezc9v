import React from 'react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#31694E]">{title}</h2>
    {subtitle && (
      <p className="mt-2 text-[#658C58]">{subtitle}</p>
    )}
  </div>
);

export const TentangPPM = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Tentang PPM" subtitle="Mengenal nilai dan budaya Pondok Pesantren Mahasiswa" />
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-[#F0E491]/40 rounded-2xl border border-black/5 shadow-sm shadow-black/10">
          <p className="text-[#31694E] leading-relaxed">
            PPM adalah ruang belajar, berproses, dan mengabdi bagi mahasiswa. Berlandaskan nilai-nilai keislaman yang rahmatan lil ‘alamin, kami mendorong santri menjadi insan berilmu, berakhlak, dan berdampak.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {['Kajian Rutin','Mentoring','Pengabdian Sosial','Tahsin & Tahfiz'].map((item) => (
            <div key={item} className="p-4 rounded-xl border border-black/5 bg-white shadow-md shadow-black/10">
              <div className="text-[#31694E] font-semibold">{item}</div>
              <p className="text-sm text-[#658C58] mt-1">Kegiatan terjadwal yang membentuk karakter dan kompetensi.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const VisiMisi = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Visi & Misi" />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          {t:'Visi',d:'Mencetak cendekiawan muslim yang berintegritas, visioner, dan bermanfaat bagi ummat.'},
          {t:'Misi',d:'Menumbuhkan budaya ilmiah, penguatan akhlak, dan pengabdian berkelanjutan.'},
          {t:'Nilai',d:'Ikhlas, disiplin, peduli, saling menguatkan, dan terus belajar.'}
        ].map((box) => (
          <div key={box.t} className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg shadow-black/10">
            <div className="text-[#31694E] font-semibold">{box.t}</div>
            <p className="text-[#658C58] mt-2 text-sm leading-relaxed">{box.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const KegiatanRutin = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Kegiatan Rutin" />
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {t:'Kajian Kitab',img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'},
          {t:'Mentoring',img:'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop'},
          {t:'Tahsin Qur\'an',img:'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop'},
          {t:'Pengabdian',img:'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop'}
        ].map((k) => (
          <div key={k.t} className="group rounded-2xl overflow-hidden border border-black/5 bg-white shadow-lg shadow-black/10">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={k.img} alt={k.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-4">
              <div className="text-[#31694E] font-semibold">{k.t}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const StrukturPengurus = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Struktur Pengurus" />
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {n:'Ketua',p:'Ahmad'},
          {n:'Wakil',p:'Bilal'},
          {n:'Sekretaris',p:'Citra'},
          {n:'Bendahara',p:'Dina'},
        ].map((s) => (
          <div key={s.n} className="p-6 text-center rounded-2xl bg-[#F0E491]/40 border border-black/5 shadow-md shadow-black/10">
            <div className="mx-auto h-16 w-16 rounded-full bg-[#31694E] text-[#F0E491] grid place-items-center font-bold">{s.p[0]}</div>
            <div className="mt-3 text-[#31694E] font-semibold">{s.p}</div>
            <div className="text-[#658C58] text-sm">{s.n}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Sections() {
  return null;
}
