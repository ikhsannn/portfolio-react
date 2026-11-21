import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Alamat website untuk meta og:image / og:url (preview link harus pakai URL lengkap).
// Urutan: SITE_URL (kalau diisi manual, misal domain sendiri) -> domain production Vercel -> URL deploy Vercel.
function siteUrl(mode) {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env }
  const raw = env.SITE_URL || env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL || ''
  if (!raw) return ''
  return (raw.startsWith('http') ? raw : `https://${raw}`).replace(/\/+$/, '')
}

export default defineConfig(({ mode }) => {
  const url = siteUrl(mode)
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'inject-site-url',
        transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', url),
      },
    ],
  }
})
