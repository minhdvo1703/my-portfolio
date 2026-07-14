import useScrollReveal from '../hooks/useScrollReveal'

const SCHOOLS = [
  {
    id: 1,
    name: 'University of Chicago',
    degree: 'M.S. in Applied Data Science',
    gpa: 'GPA: 3.8 / 4.0',
    period: '2023 – 2024',
    accent: 'bg-accent/20',
    coursework: [
      'Data Engineering','Machine Learning','Deep Learning',
      'NLP & Text Analytics','Time Series','Big Data (PySpark)','Applied Statistics',
    ],
  },
  {
    id: 2,
    name: 'University of South Florida',
    degree: 'B.S. in Business Analytics and Information Systems',
    gpa: 'GPA: 3.8 / 4.0',
    period: '2019 – 2022',
    accent: 'bg-accent/15',
    coursework: [
      'Database Management','Business Intelligence','Data Visualization',
      'Statistics','Information Systems','Business Analytics',
    ],
  },
]

function EduCard({ school, delay }) {
  return (
    // fade-up wrapper isolates card's own transition-all
    <div className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      <div className="bg-surface border border-border-subtle rounded-xl overflow-hidden h-full
        hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(77,168,218,0.15)]
        transition-[transform,box-shadow] duration-200">

        <div className={`h-4 w-full ${school.accent}`} />

        <div className="p-6 space-y-2">
          <h3 className="font-sans text-lg font-semibold text-text-base" style={{ lineHeight: '1.2' }}>
            {school.name}
          </h3>
          <p className="font-serif text-sm text-text-base" style={{ fontStyle: 'normal' }}>
            {school.degree}
          </p>
          <p className="font-sans text-[13px] text-text-muted">{school.gpa}</p>
          <p className="font-sans text-[13px] text-text-muted">{school.period}</p>
          <div className="pt-3 flex flex-wrap gap-1.5">
            {school.coursework.map(c => (
              <span key={c}
                className="font-sans text-[11px] font-medium text-accent-dark bg-accent-light
                  px-2.5 py-0.5 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="py-24" ref={ref} style={{ background: '#FAFCFF' }}>
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="font-sans text-3xl md:text-4xl font-bold text-text-base mb-12"
          style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCHOOLS.map((s, i) => <EduCard key={s.id} school={s} delay={i * 100} />)}
        </div>

      </div>
    </section>
  )
}
