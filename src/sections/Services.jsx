import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { services } from '../data/site.js'

export default function Services() {
  return (
    <Section id="services" muted>
      <SectionTitle eyebrow="Services" title="How I can help" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 80}
            className="group h-full rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white transition-colors duration-300 group-hover:bg-accent">
              <i className={`bi ${s.icon}`} />
            </span>
            <h3 className="mt-6 mb-2 text-lg font-bold">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-slate-500">{s.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
