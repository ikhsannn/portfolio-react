import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { experience, education, organization } from '../data/site.js'

function TimelineItem({ item, current }) {
  return (
    <li className="group relative pb-10 pl-8 last:pb-0">
      <span className="absolute top-0 bottom-0 left-[5px] w-px bg-slate-200 group-last:hidden" />
      <span
        className={`absolute top-1.5 left-0 h-[11px] w-[11px] rounded-full ring-4 ${
          current ? 'bg-accent ring-accent/15' : 'bg-slate-300 ring-slate-100'
        }`}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="text-lg font-bold">{item.role}</h4>
        <span className="text-sm font-medium whitespace-nowrap text-slate-400">{item.period}</span>
      </div>
      <p className="mt-0.5 font-medium text-slate-600">{item.company}</p>
      <ul className="mt-3 space-y-2">
        {item.points.map((p) => (
          <li key={p} className="flex gap-2.5 text-[15px] leading-relaxed text-slate-500">
            <i className="bi bi-check2 mt-0.5 text-accent" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </li>
  )
}

function Block({ title, icon, items, highlightFirst }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h3 className="mb-7 flex items-center gap-3 text-xl font-bold">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-base text-white">
          <i className={`bi ${icon}`} />
        </span>
        {title}
      </h3>
      <ol>
        {items.map((item, i) => (
          <TimelineItem key={item.role} item={item} current={highlightFirst && i === 0} />
        ))}
      </ol>
    </div>
  )
}

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle
        eyebrow="Experience"
        title="Where I have worked and studied"
        description="More than five years of building, shipping, and maintaining production web applications."
      />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal delay={100}>
          <Block title="Professional Experience" icon="bi-briefcase" items={experience} highlightFirst />
        </Reveal>
        <Reveal delay={200} className="space-y-6">
          <Block title="Education" icon="bi-mortarboard" items={education} />
          <Block title="Organization" icon="bi-people" items={organization} />
        </Reveal>
      </div>
    </Section>
  )
}
