# Portofolio Ikhsan Abdillah (React + Tailwind)

Versi React dari portofolio lama (HTML + Bootstrap). Konten dan gambar diambil dari versi lama (kalimatnya sudah dirapikan), desainnya diperbarui, dan sekarang pakai:

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router** untuk halaman detail project (`/projects/zetta`, `/projects/lovo`, dst.)
- **Swiper** untuk slider testimoni & screenshot project
- **Bootstrap Icons** (ikon yang sama dengan versi lama)

## Dark mode & light mode

Tombol bulan/matahari di navbar. Pilihan disimpan di browser (localStorage). Kalau pengunjung belum pernah milih, tema ikut setting HP/laptop mereka. Kodenya ada di `src/hooks/useTheme.js`; warna gelap pakai class `dark:` Tailwind di tiap komponen.

## Logo saat link dibagikan (favicon & preview)

- Favicon, ikon iPhone (`apple-touch-icon.png`), dan gambar preview (`og-image.png`) semuanya logo **S** SANSITE, ada di `public/assets/img/`.
- Meta preview (`og:image`, `twitter:image`) ada di `index.html`. URL lengkapnya diisi otomatis saat build di Vercel dari domain production project.
- Kalau pakai domain sendiri, tambahkan Environment Variable `SITE_URL` (misal `https://namadomain.com`) di Vercel > Settings > Environment Variables, lalu redeploy.

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

Mau ganti teks? Edit `src/data/site.js`. Mau tambah project? Tambah satu objek di `src/data/projects.js` dan taruh gambarnya di `public/assets/img/portfolio/<nama>/`.

## Deploy ke Vercel

### Cara 1: lewat GitHub (paling enak, auto-deploy tiap push)

1. Bikin repo baru di GitHub (misal `portfolio-react`), jangan centang "Add README".
2. Di folder project ini:
   ```bash
   git init
   git add .
   git commit -m "Portfolio React + Tailwind"
   git branch -M main
   git remote add origin https://github.com/<username>/portfolio-react.git
   git push -u origin main
   ```
3. Buka https://vercel.com/new, login pakai GitHub, lalu **Import** repo tadi.
4. Vercel otomatis deteksi **Vite**. Pastikan:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Klik **Deploy**. Tunggu ±1 menit, langsung live di `https://<nama-project>.vercel.app`.
6. Ke depannya tiap `git push` ke `main` otomatis deploy ke production. Branch lain jadi preview URL.

### Cara 2: lewat Vercel CLI (tanpa GitHub)

```bash
npm install -g vercel
vercel login          # login pakai email / GitHub
vercel                # deploy pertama: jawab pertanyaan setup (Enter aja semua, default sudah benar)
vercel --prod         # naikin ke production
```

Setelah `vercel --prod`, URL production muncul di terminal.

### Pasang domain sendiri (opsional)

Vercel Dashboard > Project > **Settings > Domains** > Add domain, lalu pasang record DNS (A / CNAME) persis seperti yang ditampilkan Vercel di halaman itu.
