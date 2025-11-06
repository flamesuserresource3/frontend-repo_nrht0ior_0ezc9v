import React, { useState } from 'react';

const Input = ({ label, name, type = 'text', value, onChange, placeholder }) => (
  <label className="block">
    <span className="text-sm text-[#31694E]">{label}</span>
    <input
      className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#31694E]/40"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </label>
);

const AuthModal = ({ mode = 'login', onClose, onSubmit }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); onSubmit({ ...form, mode }); };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 border border-black/5 shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#31694E]">{mode === 'login' ? 'Masuk' : 'Daftar'}</h3>
          <button onClick={onClose} className="text-[#31694E] hover:opacity-70">✕</button>
        </div>
        <form onSubmit={submit} className="mt-4 space-y-3">
          {mode === 'signup' && (
            <Input label="Nama" name="name" value={form.name} onChange={change} placeholder="Nama lengkap" />
          )}
          <Input label="Email" name="email" type="email" value={form.email} onChange={change} placeholder="email@kampus.ac.id" />
          <Input label="Kata Sandi" name="password" type="password" value={form.password} onChange={change} placeholder="••••••••" />
          <button className="w-full px-4 py-2 rounded-lg bg-[#31694E] text-[#F0E491] shadow-md shadow-black/20">{mode === 'login' ? 'Masuk' : 'Buat Akun'}</button>
        </form>
      </div>
    </div>
  );
};

const ProfileForm = ({ data, onChange }) => (
  <div className="grid sm:grid-cols-2 gap-4">
    <Input label="Nama" name="nama" value={data.nama} onChange={onChange} placeholder="Nama lengkap" />
    <Input label="NIM" name="nim" value={data.nim} onChange={onChange} placeholder="NIM" />
    <Input label="Jurusan/Fakultas" name="jurusan" value={data.jurusan} onChange={onChange} placeholder="Jurusan/Fakultas" />
    <Input label="Asal Daerah" name="asal" value={data.asal} onChange={onChange} placeholder="Kota/Kabupaten" />
    <Input label="No. HP" name="hp" value={data.hp} onChange={onChange} placeholder="08xxxxxxxxxx" />
    <Input label="Angkatan" name="angkatan" value={data.angkatan} onChange={onChange} placeholder="2023" />
    <label className="block sm:col-span-2">
      <span className="text-sm text-[#31694E]">Foto Profil (URL)</span>
      <input name="foto" value={data.foto} onChange={onChange} className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#31694E]/40" />
    </label>
  </div>
);

export const AuthProfile = ({}) => {
  const [auth, setAuth] = useState({ loggedIn: false, user: null });
  const [mode, setMode] = useState(null);
  const [profile, setProfile] = useState({ nama: '', nim: '', jurusan: '', asal: '', hp: '', angkatan: '', foto: '' });

  const onAuthSubmit = (payload) => {
    if (payload.mode === 'signup') {
      setAuth({ loggedIn: true, user: { name: payload.name || 'Santri Baru' } });
    } else {
      setAuth({ loggedIn: true, user: { name: 'Santri' } });
    }
    setMode(null);
  };

  const onChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-black/5 shadow-lg shadow-black/10 overflow-hidden">
          <div className="p-6 flex items-center gap-4 bg-[#F0E491]/40">
            <div className="h-16 w-16 rounded-full overflow-hidden bg-white border border-black/5">
              {profile.foto ? (
                <img src={profile.foto} alt="Profil" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full grid place-items-center text-[#31694E]">👤</div>
              )}
            </div>
            <div>
              <div className="text-[#31694E] font-semibold">{auth.loggedIn ? (auth.user?.name || 'Santri') : 'Belum Masuk'}</div>
              <div className="text-sm text-[#658C58]">Kelola data pribadi Anda</div>
            </div>
            <div className="ml-auto flex gap-2">
              {!auth.loggedIn ? (
                <>
                  <button onClick={() => setMode('login')} className="px-4 py-2 rounded-lg text-[#31694E] hover:bg-[#BBC863]/30">Masuk</button>
                  <button onClick={() => setMode('signup')} className="px-4 py-2 rounded-lg bg-[#31694E] text-[#F0E491] shadow-md shadow-black/20">Daftar</button>
                </>
              ) : (
                <button onClick={() => setAuth({ loggedIn: false, user: null })} className="px-4 py-2 rounded-lg text-[#31694E] hover:bg-[#BBC863]/30">Keluar</button>
              )}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#31694E] mb-4">Data Pribadi</h3>
            <ProfileForm data={profile} onChange={onChange} />
            <div className="mt-4 flex justify-end">
              <button className="px-5 py-2 rounded-lg bg-[#31694E] text-[#F0E491] shadow-md shadow-black/20">Simpan Perubahan</button>
            </div>
          </div>
        </div>
      </div>

      {mode && <AuthModal mode={mode} onClose={() => setMode(null)} onSubmit={onAuthSubmit} />}
    </section>
  );
};

export default AuthProfile;
