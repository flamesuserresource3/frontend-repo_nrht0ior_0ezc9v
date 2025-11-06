import React, { useMemo, useState } from 'react';

const initialPosts = [
  { id: 3, title: 'Pengabdian Sosial Desa Binaan', tag: 'Kegiatan Sosial', date: '2025-01-20', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop', excerpt: 'Santri PPM berkolaborasi dalam bakti sosial dan edukasi masyarakat.' },
  { id: 2, title: 'Jadwal Ngaji Semester Genap', tag: 'Jadwal Ngaji', date: '2024-12-14', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop', excerpt: 'Update halaqah tahsin, tahfiz, dan kajian kitab tiap pekan.' },
  { id: 1, title: 'Mentoring Perdana 1446 H', tag: 'Mentoring', date: '2024-11-02', image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop', excerpt: 'Mentoring santri baru dengan kakak pembina di asrama.' },
];

const Card = ({ post }) => (
  <article className="rounded-2xl overflow-hidden bg-white border border-black/5 shadow-lg shadow-black/10">
    <div className="aspect-[16/10] overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
    </div>
    <div className="p-5">
      <div className="text-xs uppercase tracking-wide text-[#658C58]">{post.tag} • {new Date(post.date).toLocaleDateString('id-ID')}</div>
      <h3 className="mt-1 font-semibold text-[#31694E]">{post.title}</h3>
      <p className="mt-2 text-sm text-[#658C58]">{post.excerpt}</p>
    </div>
  </article>
);

const AddPostForm = ({ onCancel, onAdd }) => {
  const [form, setForm] = useState({ title: '', tag: '', date: '', image: '', excerpt: '' });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.title || !form.date) return;
    onAdd(form);
  };

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl border border-black/5 shadow-lg shadow-black/10">
      <h3 className="text-lg font-semibold text-[#31694E]">Tambah Postingan</h3>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        <input name="title" placeholder="Judul" value={form.title} onChange={change} className="px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#31694E]/40" />
        <input name="tag" placeholder="Kategori / Tag" value={form.tag} onChange={change} className="px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#31694E]/40" />
        <input name="date" type="date" value={form.date} onChange={change} className="px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#31694E]/40" />
        <input name="image" placeholder="URL Gambar" value={form.image} onChange={change} className="px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#31694E]/40" />
        <textarea name="excerpt" placeholder="Deskripsi singkat" value={form.excerpt} onChange={change} className="sm:col-span-2 px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#31694E]/40" />
      </div>
      <div className="mt-4 flex gap-3">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg text-[#31694E] hover:bg-[#BBC863]/30">Batal</button>
        <button className="px-4 py-2 rounded-lg bg-[#31694E] text-[#F0E491] shadow-md shadow-black/20">Simpan</button>
      </div>
    </form>
  );
};

const Blog = () => {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const latest = useMemo(() => [...posts].sort((a,b) => new Date(b.date) - new Date(a.date)), [posts]);

  const addPost = (data) => {
    const id = Math.max(0, ...posts.map(p => p.id)) + 1;
    setPosts([{ id, ...data }, ...posts]);
    setShowForm(false);
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#31694E]">Blog PPM</h2>
          <button onClick={() => setShowForm(true)} className="px-4 py-2 rounded-lg bg-[#31694E] text-[#F0E491] shadow-md shadow-black/20">Tambah Postingan</button>
        </div>

        {showForm && (
          <div className="mt-6">
            <AddPostForm onCancel={() => setShowForm(false)} onAdd={addPost} />
          </div>
        )}

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
