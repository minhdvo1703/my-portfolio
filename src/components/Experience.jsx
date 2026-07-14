import { experience } from '../data/experience'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-24 bg-bg-base" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="font-sans text-4xl md:text-5xl font-bold text-text-base mb-12"
          style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
          Experience
        </h2>

        <div className="relative">
          {/* Vertical rule — desktop only */}
          <div
            className="hidden md:block absolute top-2 bottom-2 w-px bg-border-subtle"
            style={{ left: '140px' }}
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <div
                key={job.company}
                className="fade-up flex items-start"
                style={{ transitionDelay: `${i * 100}ms` }}>

                {/* Period — desktop left column */}
                <div className="hidden md:block w-[120px] shrink-0 text-right pr-6 pt-0.5">
                  <span className="font-sans text-[12px] text-text-muted">{job.period}</span>
                </div>

                {/* Dot — desktop center */}
                <div className="hidden md:flex w-10 shrink-0 justify-center pt-1 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Content */}
                <div className="flex-1 pl-4 border-l-2 border-accent-light md:border-0 md:pl-6">
                  <p className="md:hidden font-sans text-[12px] text-text-muted mb-1">{job.period}</p>
                  <p className="font-sans text-base font-semibold text-text-base leading-tight">
                    {job.company}
                  </p>
                  <p className="font-sans text-sm text-text-muted mt-0.5 mb-3">
                    {job.role}{job.location ? ` · ${job.location}` : ''}
                  </p>
                  <div className="space-y-1.5">
                    {job.highlights.slice(0, 2).map((bullet, j) => (
                      <p key={j} className="font-sans text-[13px] text-text-muted"
                        style={{ lineHeight: '1.5' }}>
                        — {bullet}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
