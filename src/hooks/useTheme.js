import { useCallback, useEffect, useState } from 'react'

// Tema: 'light' / 'dark'. Kalau user belum pernah milih, ikut setting sistem (prefers-color-scheme).
const KEY = 'theme'
const media = () => window.matchMedia('(prefers-color-scheme: dark)')

function readSaved() {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

function apply(theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#020617' : '#ffffff')
}

export default function useTheme() {
  const [theme, setTheme] = useState(() => readSaved() ?? (media().matches ? 'dark' : 'light'))

  useEffect(() => apply(theme), [theme])

  // Selama user belum milih manual, ikuti perubahan tema sistem
  useEffect(() => {
    const mq = media()
    const onChange = (e) => {
      if (!readSaved()) setTheme(e.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(KEY, next)
      } catch {
        /* private mode: tetap ganti tema, cuma nggak disimpan */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
