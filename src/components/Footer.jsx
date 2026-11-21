import { contact, certificationsUrl } from '../data/site.js'
import { container } from './container.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className={`flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-500 dark:text-slate-400 md:flex-row ${container}`}>
        <p>
          © {new Date().getFullYear()} Ikhsan Abdillah · <span className="font-semibold text-slate-700 dark:text-slate-300">SANSITE</span>{' '}
          Digital Portfolio
        </p>
        <div className="flex items-center gap-5">
          <a href={certificationsUrl} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-slate-50">
            Certifications
          </a>
          {contact.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="text-lg hover:text-slate-900 dark:hover:text-slate-50">
              <i className={`bi ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
