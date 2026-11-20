import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import useTyped from '../hooks/useTyped.js'
import { btnPrimary, btnSecondary } from '../components/buttons.js'
import { container } from '../components/container.js'
import { hero, contact } from '../data/site.js'

export default function Hero() {
  const typed = useTyped(hero.typed)

  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Latar: grid halus + cahaya lembut */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-rose-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-sky-200/40 blur-3xl"
      />

      <div className={`relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] ${container}`}>
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {hero.availability}
          </span>

          <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl 2xl:text-7xl">
            {hero.greeting} <span className="text-accent">{hero.name}</span>
          </h1>

          <p className="mt-4 h-8 text-xl font-semibold text-slate-800 sm:text-2xl" aria-live="polite">
            {typed}
            <span className="typed-cursor ml-0.5 font-light text-accent" aria-hidden="true">
              |
            </span>
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">{hero.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={{ hash: '#projects' }} className={btnPrimary}>
              View my work <i className="bi bi-arrow-right" />
            </Link>
            <Link to={{ hash: '#contact' }} className={btnSecondary}>
              Get in touch
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <i className={`bi ${s.icon}`} />
              </a>
            ))}
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-6">
            {hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col px-4 first:pl-0">
                <dt className="text-xs leading-snug text-slate-500">{s.label}</dt>
                <dd className="order-first text-3xl font-extrabold tracking-tight text-slate-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-[85%] max-w-[420px]">
            <div className="absolute inset-x-0 bottom-0 h-[82%] rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-950 shadow-2xl shadow-slate-900/20" />
            <div className="absolute inset-x-0 bottom-0 h-[82%] overflow-hidden rounded-[2.5rem]">
              <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/40 blur-3xl" />
            </div>
            <img
              src={hero.photo}
              alt="Ikhsan Abdillah"
              className="absolute inset-x-0 bottom-0 mx-auto h-full w-auto object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_88%,transparent)]"
              fetchPriority="high"
            />
            <div className="absolute -left-6 bottom-10 hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <p className="text-xs text-slate-500">Main stack</p>
              <p className="text-sm font-bold text-slate-900">Laravel · CodeIgniter</p>
            </div>
            <div className="absolute -right-4 top-[30%] hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <p className="flex items-center gap-1.5 text-sm font-bold text-slate-900">
                <i className="bi bi-geo-alt-fill text-accent" /> Jakarta, ID
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
