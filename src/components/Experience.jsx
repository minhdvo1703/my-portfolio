import experience from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-sans text-[12px] font-semibold text-accent uppercase tracking-[0.1em] mb-2">
          Background
        </p>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-text-base mb-12"
          style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical rule — desktop only, centered in the dot column (120px left col + 20px = 140px) */}
          <div
            className="hidden md:block absolute top-2 bottom-2 w-px bg-border-subtle"
            style={{ left: '140px' }}
          />

          <div className="space-y-10">
            {experience.map(job => (
              <div key={job.id} className="flex items-start">

                {/* Period — desktop left column (120px, right-aligned) */}
                <div className="hidden md:block w-[120px] shrink-0 text-right pr-6 pt-0.5">
                  <span className="font-sans text-[12px] text-text-muted">
                    {job.period}
                  </span>
                </div>

                {/* Dot — desktop center column (40px) */}
                <div className="hidden md:flex w-10 shrink-0 justify-center pt-1 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Content */}
                <div className="flex-1 pl-4 border-l-2 border-accent-light md:border-0 md:pl-6">
                  {/* Period above company — mobile only */}
                  <p className="md:hidden font-sans text-[12px] text-text-muted mb-1">
                    {job.period}
                  </p>

                  <p className="font-sans text-base font-semibold text-text-base leading-tight">
                    {job.company}
                  </p>
                  <p className="font-sans text-sm text-text-muted mt-0.5 mb-3">
                    {job.title}{job.location ? ` · ${job.location}` : ''}
                  </p>

                  <div className="space-y-1.5">
                    {job.bullets.slice(0, 2).map((bullet, i) => (
                      <p key={i}
                        className="font-sans text-[13px] text-text-muted"
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
