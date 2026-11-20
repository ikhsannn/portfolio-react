# Portofolio Ikhsan Abdillah (React + Tailwind)

Versi React dari portofolio lama (HTML + Bootstrap). Konten dan gambar diambil dari versi lama, desainnya diperbarui, dan sekarang pakai:

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router** untuk halaman detail project (`/projects/zetta`, `/projects/lovo`, dst.)
- **Swiper** untuk slider testimoni & screenshot project
- **Bootstrap Icons**

## Jalankan di laptop

Butuh Node.js 20 ke atas.

```bash
npm install
npm run dev        # buka http://localhost:5173
npm run build      # hasil build ke folder dist/
npm run preview    # cek hasil build
```

## Struktur penting

```
src/
  data/site.js        <- semua teks: hero, about, resume, skills, services, testimoni, kontak
  data/projects.js    <- daftar project + isi halaman detailnya
  sections/           <- tiap section halaman utama (Hero, About, Experience, Projects, ...)
  pages/              <- Home, ProjectDetail, NotFound
  components/         <- Navbar, Footer, Lightbox, dll
public/assets/        <- gambar & CV (dipanggil dengan path /assets/...)
vercel.json           <- setting Vercel (biar link /projects/... nggak 404)
```
