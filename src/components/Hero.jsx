const TECH_BADGES = [
  'Python','SQL','Tableau','Power BI','R','PySpark','Excel','BigQuery','NLP',
]

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16"
      style={{ background: 'var(--hero-gradient)' }}>
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">

        {/* Two-column layout */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* LEFT: text (60%) */}
          <div className="flex-1 md:basis-3/5 space-y-6">
            {/* Eyebrow */}
            <p className="font-sans text-[13px] font-semibold text-accent uppercase tracking-[0.1em]">
              Data Science · Analytics · Business Intelligence
            </p>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-text-base"
              style={{ lineHeight: '1', letterSpacing: '-0.02em' }}>
              Turning data into decisions.
            </h1>

            {/* Sub-copy */}
            <p className="font-sans text-[17px] text-text-muted"
              style={{ lineHeight: '1.3' }}>
              Hi, I'm Minh — you can call me Claire. I'm a data scientist and analytics
              professional from Vietnam, based in Houston, TX. I hold an M.S. in Applied
              Data Science from the University of Chicago and a B.S. in Business Analytics
              from the University of South Florida. Currently at O'Connor &amp; Associates,
              I analyze commercial property portfolios at scale and build Power BI
              dashboards that track tax reduction outcomes across a $700M asset base.
              I build pipelines, models, and dashboards that help teams move faster and
              decide smarter.
            </p>

            {/* CTAs */}
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
              <a href="#"
                className="font-sans text-sm font-semibold text-accent border border-[1.5px] border-accent
                  rounded-full px-[26px] py-[11px] bg-transparent hover:bg-accent-light
                  transition-colors duration-200">
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT: photo placeholder (40%) */}
          <div className="md:basis-2/5 flex justify-center md:justify-end">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-accent-light
              flex items-center justify-center flex-shrink-0">
              <span className="font-sans font-normal text-accent-dark"
                style={{ fontSize: '44px' }}>
                MV
              </span>
            </div>
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
