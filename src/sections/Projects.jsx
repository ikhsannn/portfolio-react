import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects, projectFilters, categoryLabel } from '../data/projects.js'

export function ProjectCard({ p }) {
  return (
    <Link
      to={`/projects/${p.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
        <img
          src={p.thumbnail}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur">
          {categoryLabel[p.category]}
        </span>
        {p.link && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> Live
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
          {p.client} · {p.year}
        </p>
        <h3 className="mt-1.5 flex items-start justify-between gap-3 text-lg leading-snug font-bold">
          {p.title}
          <i className="bi bi-arrow-up-right shrink-0 text-base text-slate-300 dark:text-slate-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <li key={t} className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <Section id="projects" muted>
      <SectionTitle
        eyebrow="Selected work"
        title="Projects I have built"
        description="Web platforms, desktop software, and interface design for companies, schools, and public institutions."
      />
      <Reveal delay={100} className="-mt-4 mb-10 overflow-x-auto pb-1">
        <div className="inline-flex gap-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1">
          {projectFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                filter === f.key ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {visible.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 4) * 80}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
