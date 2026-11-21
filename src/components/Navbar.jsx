import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems, about } from '../data/site.js'
import { container } from './container.js'
import useTheme from '../hooks/useTheme.js'

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const go = (href) => {
    setOpen(false)
    if (onHome) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? 'border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-lg'
          : scrolled
            ? 'border-b border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg'
            : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className={`flex h-20 items-center justify-between ${container}`}>
        <Link to="/" onClick={() => onHome && window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Home">
          <img src="/assets/img/sansite-color.webp" alt="SANSITE" className="h-12 w-auto dark:hidden" />
          <img src="/assets/img/sansite-white.webp" alt="SANSITE" className="hidden h-12 w-auto dark:block" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => {
            const active = onHome && activeSection === item.href.slice(1)
            return (
              <Link
                key={item.href}
                to={{ pathname: '/', hash: item.href }}
                onClick={() => go(item.href)}
                className={`relative rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors xl:px-4 xl:text-base ${
                  active ? 'text-slate-900 dark:text-slate-50' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 xl:inset-x-4 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-white"
          >
            <i className={`bi ${isDark ? 'bi-sun' : 'bi-moon-stars'}`} />
          </button>
          <a
            href={about.cv}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-accent dark:bg-accent dark:hover:bg-accent-dark sm:inline-flex"
          >
            <i className="bi bi-download" /> Resume
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xl text-slate-800 dark:text-slate-200 lg:hidden"
          >
            <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? 'max-h-[480px]' : 'max-h-0'}`}>
        <nav className={`space-y-1 pt-2 pb-5 ${container}`} aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={{ pathname: '/', hash: item.href }}
              onClick={() => go(item.href)}
              className={`block rounded-xl px-4 py-3 text-base font-medium ${
                onHome && activeSection === item.href.slice(1) ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={about.cv}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-slate-900 dark:bg-accent px-4 py-3 text-sm font-semibold text-white"
          >
            <i className="bi bi-download" /> Download Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
