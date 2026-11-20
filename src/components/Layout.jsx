import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollTop from './ScrollTop.jsx'
import { navItems } from '../data/site.js'

const sectionIds = ['hero', ...navItems.map((n) => n.href.slice(1))]

export default function Layout() {
  const [activeSection, setActiveSection] = useState('hero')
  const { pathname, hash } = useLocation()

  // Pindah halaman / klik menu: scroll ke section yang dituju atau ke atas
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  // Scroll spy: tandai menu aktif sesuai section yang sedang dilihat
  useEffect(() => {
    if (pathname !== '/') return
    const onScroll = () => {
      const pos = window.scrollY + 140
      let current = 'hero'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos) current = id
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = 'contact'
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
