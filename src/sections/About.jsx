import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { btnPrimary } from '../components/buttons.js'
import { about, certificationsUrl } from '../data/site.js'

export default function About() {
  return (
    <Section id="about" muted>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24">
        <div>
          <SectionTitle eyebrow="About me" title={about.headline} />
          <Reveal delay={100} className="-mt-4 max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="border-l-2 border-accent pl-4 text-base text-slate-500 dark:text-slate-400 italic">{about.objective}</p>
          </Reveal>
          <Reveal delay={150} className="mt-8 flex flex-wrap items-center gap-5">
            <a href={about.cv} target="_blank" rel="noreferrer" className={btnPrimary}>
              <i className="bi bi-file-earmark-arrow-down" /> Download CV
            </a>
            <a
              href={certificationsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 underline-offset-4 hover:text-accent hover:underline"
            >
              View certifications <i className="bi bi-arrow-up-right" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={200} className="grid content-start gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-1 2xl:grid-cols-2">
          {about.facts.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft dark:bg-accent/15 text-lg text-accent">
                <i className={`bi ${f.icon}`} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500 uppercase">{f.label}</p>
                <p className="font-semibold text-slate-900 dark:text-slate-50 [overflow-wrap:anywhere]">{f.value}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
