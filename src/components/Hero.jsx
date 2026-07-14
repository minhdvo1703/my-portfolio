import useScrollReveal from '../hooks/useScrollReveal'

const TECH_BADGES = [
  'Business Intelligence','Data Analytics','SQL','Tableau','Power BI','Python','Excel',
]

export default function Hero() {
  const ref = useScrollReveal(0.05)

  return (
    <section id="hero" ref={ref}
      className="min-h-screen flex flex-col justify-center pt-16"
      style={{ background: 'var(--hero-gradient)' }}>
      {/* py-12 → py-24 (~102px with 17px base) */}
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">

        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

          {/* LEFT column — individual margins instead of uniform space-y */}
          <div className="fade-up flex-1 md:basis-3/5">
            <h1 className="font-serif text-text-base"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 80px)',
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
                marginBottom: 0,
              }}>
              Minh Vo
            </h1>

            <p className="font-sans font-semibold mb-0"
              style={{ fontSize: '16px', marginTop: '14px', color: '#1B4F72' }}>
              Business Intelligence · Data Analytics · Finance Analytics
            </p>

            <p className="font-sans text-[18px] text-text-muted mb-0"
              style={{ lineHeight: '1.7', marginTop: '22px' }}>
              Hi, I'm Minh — you can call me Claire. I'm a data scientist and analytics
              professional from Vietnam, based in Houston, TX. I build pipelines, models,
              and dashboards that help teams move faster and decide smarter.
            </p>

            {/* 32px gap between bio and CTA buttons */}
            <div className="flex flex-wrap gap-3" style={{ marginTop: '32px' }}>
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

          {/* RIGHT column */}
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

        {/* Tech badges */}
        <div className="mt-10 flex flex-wrap gap-2">
          {TECH_BADGES.map(tech => (
            <span key={tech}
              className="font-sans text-[13px] font-medium text-accent-dark bg-accent-light
                px-3 py-1.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
