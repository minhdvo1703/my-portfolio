import skills from '../data/skills'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Skills() {
  const categories = Object.entries(skills)
  const ref = useScrollReveal()

  return (
    <section id="skills" className="py-24" ref={ref}
      style={{ background: 'rgba(184,221,239,0.12)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-sans text-[12px] font-semibold text-accent uppercase tracking-[0.1em] mb-2">
          Expertise
        </p>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-text-base mb-12"
          style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(([category, items], i) => (
            <div
              key={category}
              className="fade-up bg-surface border border-border-subtle rounded-xl p-5 space-y-3"
              style={{ transitionDelay: `${i * 80}ms` }}>

              <p className="font-sans text-[11px] font-semibold text-accent uppercase"
                style={{ letterSpacing: '0.08em' }}>
                {category}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {items.map(skill => (
                  <span key={skill}
                    className="font-sans text-[12px] font-medium text-accent-dark bg-accent-light
                      px-2.5 py-0.5"
                    style={{ borderRadius: '20px' }}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
