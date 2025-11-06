import React from 'react';

const Navbar = ({ current, onNavigate, onAuthIntent }) => {
  const linkBase =
    'px-4 py-2 rounded-md text-sm font-medium transition-colors';
  const active = 'bg-[#31694E] text-white shadow-md shadow-black/10';
  const inactive =
    'text-[#31694E] hover:bg-[#BBC863]/30 hover:text-[#31694E]';

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-[#31694E] text-[#F0E491] grid place-items-center font-bold shadow shadow-black/20">PPM</div>
          <span className="text-[#31694E] font-semibold tracking-wide hidden sm:block">Pondok Pesantren Mahasiswa</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            className={`${linkBase} ${current === 'home' ? active : inactive}`}
            onClick={() => onNavigate('home')}
          >
            Beranda
          </button>
          <button
            className={`${linkBase} ${current === 'blog' ? active : inactive}`}
            onClick={() => onNavigate('blog')}
          >
            Blog PPM
          </button>
          <button
            className={`${linkBase} ${current === 'account' ? active : inactive}`}
            onClick={() => onNavigate('account')}
          >
            Profil & Akun
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onAuthIntent('login')}
            className="px-4 py-2 text-sm rounded-md text-[#31694E] hover:bg-[#BBC863]/30 transition-colors"
          >
            Masuk
          </button>
          <button
            onClick={() => onAuthIntent('signup')}
            className="px-4 py-2 text-sm rounded-md bg-[#31694E] text-[#F0E491] shadow-md shadow-black/20 hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            Daftar
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2">
          <button
            className={`${linkBase} ${current === 'home' ? active : inactive}`}
            onClick={() => onNavigate('home')}
          >
            Beranda
          </button>
          <button
            className={`${linkBase} ${current === 'blog' ? active : inactive}`}
            onClick={() => onNavigate('blog')}
          >
            Blog
          </button>
          <button
            className={`${linkBase} ${current === 'account' ? active : inactive}`}
            onClick={() => onNavigate('account')}
          >
            Akun
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
