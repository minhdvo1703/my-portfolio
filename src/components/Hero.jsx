import useScrollReveal from '../hooks/useScrollReveal'

const TECH_BADGES = [
  'Business Intelligence','Data Analytics','SQL','Tableau','Power BI','Python','Excel',
]

export default function Hero() {
  const ref = useScrollReveal(0.05) // lower threshold — hero is full-height

  return (
    <section id="hero" ref={ref}
      className="min-h-screen flex flex-col justify-center pt-16"
      style={{ background: 'var(--hero-gradient)' }}>
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">

        {/* Two-column layout */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* LEFT column — no delay */}
          <div className="fade-up flex-1 md:basis-3/5 space-y-6">
            <p className="font-sans text-[13px] font-semibold text-accent uppercase tracking-[0.1em]">
              Data Science · Analytics · Business Intelligence
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-text-base"
              style={{ lineHeight: '1', letterSpacing: '-0.02em' }}>
              Turning data into decisions.
            </h1>

            <p className="font-sans text-[17px] text-text-muted"
              style={{ lineHeight: '1.3' }}>
              Hi, I'm Minh — you can call me Claire. I'm a data scientist and analytics
              professional from Vietnam, based in Houston, TX. I build pipelines, models,
              and dashboards that help teams move faster and decide smarter.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#projects"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-sans text-sm font-semibold text-white bg-accent hover:bg-accent-dark
                  rounded-full px-[26px] py-[11px] transition-colors duration-200">
                View Projects
              </a>
              <a href="/my-portfolio/assets/Minh_Vo_resume_BIA.pdf"
                target="_blank" rel="noopener noreferrer"
                className="font-sans text-sm font-semibold text-accent border border-[1.5px] border-accent
                  rounded-full px-[26px] py-[11px] bg-transparent hover:bg-accent-light
                  transition-colors duration-200">
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT column — 150ms delay */}
          <div className="fade-up md:basis-2/5 flex justify-center md:justify-end"
            style={{ transitionDelay: '150ms' }}>
            <img
              src="/my-portfolio/assets/profile.jpg"
              alt="Minh Vo"
              className="rounded-full w-64 h-64 object-cover object-top flex-shrink-0"
              style={{ border: '3px solid #4DA8DA' }}
            />
          </div>

        </div>

        {/* Tech badges band */}
        <div className="mt-16 flex flex-wrap gap-2">
          {TECH_BADGES.map(tech => (
            <span key={tech}
              className="font-sans text-[12px] font-medium text-accent-dark bg-accent-light
                px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
