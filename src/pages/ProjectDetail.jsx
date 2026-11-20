import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { container } from '../components/container.js'
import NotFound from './NotFound.jsx'
import { projects, getProject, categoryLabel } from '../data/projects.js'

function CaseBlock({ label, children }) {
  return (
    <div>
      <h2 className="mb-3 flex items-center gap-3 text-xl font-bold">
        <span className="h-5 w-1 rounded-full bg-accent" />
        {label}
      </h2>
      <p className="text-[17px] leading-relaxed text-slate-600">{children}</p>
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    if (project) document.title = `${project.title} · Ikhsan Abdillah`
    return () => {
      document.title = 'Ikhsan Abdillah · Full-Stack Web Developer'
    }
  }, [project])

  if (!project) return <NotFound />

  const idx = projects.indexOf(project)
  const next = projects[(idx + 1) % projects.length]
  const gallery = project.images.map((src, i) => ({ src, title: `${project.title} (${i + 1}/${project.images.length})` }))

  const info = [
    { label: 'Client', value: project.client },
    { label: 'Category', value: categoryLabel[project.category] },
    { label: 'Year', value: project.year },
    { label: 'Role', value: project.role },
    { label: 'Visibility', value: project.visibility },
  ]

  return (
    <article className="bg-white pt-28 pb-20 md:pt-32">
      <div className={container}>
        <Reveal>
          <Link
            to={{ pathname: '/', hash: '#projects' }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
          >
            <i className="bi bi-arrow-left" /> All projects
          </Link>
          <p className="mt-8 text-sm font-semibold tracking-[0.18em] text-accent uppercase">
            {categoryLabel[project.category]}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-balance md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-500">{project.summary}</p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] xl:gap-14">
          <div className="min-w-0">
            <Reveal delay={100} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-2 shadow-sm sm:p-3">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop
                speed={600}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                pagination={{ clickable: true }}
                className="!pb-4"
              >
                {project.images.map((src, i) => (
                  <SwiperSlide key={src}>
                    <button
                      type="button"
                      className="block w-full cursor-zoom-in overflow-hidden rounded-2xl"
                      onClick={() => setLightboxIndex(i)}
                      aria-label="Enlarge screenshot"
                    >
                      <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full" />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Reveal>

            <Reveal delay={100} className="mt-14 max-w-4xl space-y-10">
              <CaseBlock label="Overview">{project.overview}</CaseBlock>
              <CaseBlock label="The Challenge">{project.challenge}</CaseBlock>
              <CaseBlock label="My Solution">{project.solution}</CaseBlock>
            </Reveal>
          </div>

          <Reveal delay={200} className="self-start lg:sticky lg:top-28">
            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-4 text-base font-bold">Project details</h3>
              <dl className="divide-y divide-slate-200 text-sm">
                {info.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 py-3">
                    <dt className="text-slate-500">{row.label}</dt>
                    <dd className="text-right font-semibold text-slate-900">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 mb-2.5 text-sm text-slate-500">Tech stack</p>
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <li key={t} className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700">
                    {t}
                  </li>
                ))}
              </ul>
              {project.link ? (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
                >
                  {project.link.label} <i className="bi bi-arrow-up-right" />
                </a>
              ) : (
                <p className="mt-6 flex items-center justify-center gap-2 rounded-full border border-dashed border-slate-300 px-6 py-3 text-sm font-medium text-slate-500">
                  <i className="bi bi-lock" /> Private client project
                </p>
              )}
            </aside>
          </Reveal>
        </div>

        <Reveal className="mt-20 border-t border-slate-200 pt-10">
          <Link to={`/projects/${next.slug}`} className="group flex items-center justify-between gap-6">
            <div>
              <p className="text-sm text-slate-500">Next project</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 transition-colors group-hover:text-accent md:text-3xl">
                {next.title}
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xl transition-all group-hover:translate-x-1 group-hover:border-slate-900">
              <i className="bi bi-arrow-right" />
            </span>
          </Link>
        </Reveal>
      </div>

      <Lightbox images={gallery} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />
    </article>
  )
}
