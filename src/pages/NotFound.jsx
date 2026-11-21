import { Link } from 'react-router-dom'
import { btnPrimary } from '../components/buttons.js'

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-white dark:bg-slate-950 px-4 pt-16 text-center">
      <p className="text-8xl font-extrabold tracking-tight text-slate-200 dark:text-slate-800">404</p>
      <h1 className="mt-4 text-2xl font-bold">This page does not exist</h1>
      <p className="mt-2 mb-8 text-slate-500 dark:text-slate-400">The link may be broken or the page may have moved.</p>
      <Link to="/" className={btnPrimary}>
        Back to home
      </Link>
    </section>
  )
}
