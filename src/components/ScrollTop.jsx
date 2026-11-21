import { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 shadow-lg backdrop-blur transition-all duration-300 hover:border-slate-900 dark:hover:border-slate-400 hover:text-slate-900 dark:hover:text-slate-50 ${
        show ? 'visible opacity-100' : 'invisible translate-y-3 opacity-0'
      }`}
    >
      <i className="bi bi-arrow-up text-lg" />
    </button>
  )
}
