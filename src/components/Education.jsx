const SCHOOLS = [
  {
    id: 1,
    name: 'University of Chicago',
    degree: 'M.S. in Applied Data Science',
    period: '2023 – 2024',
    accent: 'bg-accent/20',
    coursework: [
      'Data Engineering',
      'Machine Learning',
      'Deep Learning',
      'NLP & Text Analytics',
      'Time Series',
      'Big Data (PySpark)',
      'Applied Statistics',
    ],
  },
  {
    id: 2,
    name: 'University of South Florida',
    degree: 'B.S. in Business Analytics and Information Systems',
    period: '2019 – 2022',
    accent: 'bg-accent/15',
    coursework: [
      'Database Management',
      'Business Intelligence',
      'Data Visualization',
      'Statistics',
      'Information Systems',
      'Business Analytics',
    ],
  },
]

function EduCard({ school }) {
  return (
    <div className="bg-surface border border-border-subtle rounded-xl overflow-hidden
      hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(77,168,218,0.15)]
      transition-all duration-200">

      {/* Header strip */}
      <div className={`h-4 w-full ${school.accent}`} />

      <div className="p-6 space-y-2">
        <h3 className="font-sans text-lg font-semibold text-text-base" style={{ lineHeight: '1.2' }}>
          {school.name}
        </h3>
        <p className="font-serif text-sm text-text-base" style={{ fontStyle: 'normal' }}>
          {school.degree}
        </p>
        <p className="font-sans text-[13px] text-text-muted">
          {school.period}
        </p>
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
  )
}

export default function Education() {
  return (
    <section id="education" className="py-24" style={{ background: '#FAFCFF' }}>
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-sans text-[12px] font-semibold text-accent uppercase tracking-[0.1em] mb-2">
          Background
        </p>

        <h2 className="font-sans text-3xl md:text-4xl font-bold text-text-base mb-12"
          style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCHOOLS.map(s => <EduCard key={s.id} school={s} />)}
        </div>

      </div>
    </section>
  )
}
