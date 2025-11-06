import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Blog from './components/Blog';
import AuthProfile from './components/AuthProfile';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home');
  const [authMode, setAuthMode] = useState(null);

  const openAuth = (mode) => setAuthMode(mode);

  return (
    <div className="min-h-screen bg-white text-[#31694E]">
      <Navbar current={page} onNavigate={setPage} onAuthIntent={openAuth} />

      {page === 'home' && (
        <Landing onLogin={() => setAuthMode('login')} onSignup={() => setAuthMode('signup')} />
      )}

      {page === 'blog' && <Blog />}

      {page === 'account' && <AuthProfile />}

      <Footer />

      {authMode && (
        // lightweight modal for login/signup quick access
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4" onClick={() => setAuthMode(null)}>
          <div className="w-full max-w-md bg-white rounded-2xl p-6 border border-black/5 shadow-2xl shadow-black/30" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{authMode === 'login' ? 'Masuk' : 'Daftar'}</h3>
              <button className="text-[#31694E]" onClick={() => setAuthMode(null)}>✕</button>
            </div>
            <form className="mt-4 space-y-3">
              {authMode === 'signup' && (
                <input placeholder="Nama" className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#31694E]/40" />
              )}
              <input placeholder="Email" type="email" className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#31694E]/40" />
              <input placeholder="Kata Sandi" type="password" className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#31694E]/40" />
              <button className="w-full px-4 py-2 rounded-lg bg-[#31694E] text-[#F0E491] shadow-md shadow-black/20">{authMode === 'login' ? 'Masuk' : 'Buat Akun'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
