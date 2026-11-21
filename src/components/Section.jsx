import { container } from './container.js'

export default function Section({ id, muted = false, className = '', children }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${muted ? 'bg-slate-50 dark:bg-slate-900/50' : 'bg-white dark:bg-slate-950'} ${className}`}>
      <div className={container}>{children}</div>
    </section>
  )
}
