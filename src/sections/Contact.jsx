import Reveal from '../components/Reveal.jsx'
import { container } from '../components/container.js'
import { contact } from '../data/site.js'

export default function Contact() {
  const items = [
    { icon: 'bi-envelope', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: 'bi-telephone', label: 'Phone', value: contact.phone, href: contact.phoneHref },
    { icon: 'bi-geo-alt', label: 'Location', value: contact.location },
  ]

  return (
    <section id="contact" className={`bg-white dark:bg-slate-950 pb-20 md:pb-28 ${container}`}>
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-slate-950 dark:bg-slate-900 dark:ring-1 dark:ring-white/10 px-6 py-14 text-center sm:px-12 md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/40 blur-3xl" />
        <div className="relative">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-rose-300 uppercase">Contact</p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">{contact.text}</p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5"
            >
              <i className="bi bi-envelope" /> Email me
            </a>
            <a
              href={contact.socials[0].href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <i className="bi bi-linkedin" /> Connect on LinkedIn
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-3 text-left md:grid-cols-[1.4fr_1fr_1fr]">
            {items.map((it) => {
              const body = (
                <>
                  <i className={`bi ${it.icon} text-lg text-rose-300`} />
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-400">{it.label}</span>
                    <span className="block text-sm font-medium break-all text-white">{it.value}</span>
                  </span>
                </>
              )
              const cls = 'flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5'
              return it.href ? (
                <a key={it.label} href={it.href} className={`${cls} transition-colors hover:bg-white/10`}>
                  {body}
                </a>
              ) : (
                <div key={it.label} className={cls}>
                  {body}
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <i className={`bi ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
