import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-black/5 bg-[#F0E491]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <div className="h-9 w-9 rounded-xl bg-[#31694E] text-[#F0E491] grid place-items-center font-bold shadow shadow-black/20">PPM</div>
          <p className="mt-3 text-sm text-[#658C58] max-w-sm">Ruang tumbuh untuk jiwa, ilmu, dan pengabdian. Lingkungan belajar yang hangat, modern, dan bernilai.</p>
        </div>
        <div>
          <div className="text-[#31694E] font-semibold">Navigasi</div>
          <ul className="mt-2 text-sm text-[#658C58] space-y-1">
            <li>Beranda</li>
            <li>Blog</li>
            <li>Profil</li>
          </ul>
        </div>
        <div>
          <div className="text-[#31694E] font-semibold">Kontak</div>
          <ul className="mt-2 text-sm text-[#658C58] space-y-1">
            <li>Email: ppm@example.com</li>
            <li>Telp: 0812-3456-7890</li>
            <li>Alamat: Komplek PPM, Kota</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-[#658C58] py-4">© {new Date().getFullYear()} PPM. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
