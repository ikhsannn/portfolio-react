import Reveal from './Reveal.jsx'

export default function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <Reveal className={`mb-12 max-w-3xl md:mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-accent uppercase">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-slate-500">{description}</p>}
    </Reveal>
  )
}
