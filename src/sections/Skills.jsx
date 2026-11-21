import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { skillGroups } from '../data/site.js'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle
        eyebrow="Skills"
        title="Tools and technologies I work with"
        description="A practical stack for shipping complete products, from interface design to deployment."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 100} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7">
            <h3 className="mb-5 flex items-center gap-3 text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft dark:bg-accent/15 text-accent">
                <i className={`bi ${g.icon}`} />
              </span>
              {g.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 py-1.5 pr-3 pl-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
                    <img src={s.icon} alt="" className="h-5 w-5 object-contain" loading="lazy" />
                  </span>
                  {s.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
