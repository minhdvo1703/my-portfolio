import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const PROJECTS = [
  {
    id: 1,
    title: 'Divvy Bike Sharing Systems Analysis',
    description: '[Description coming soon]',
    tags: ['Python', 'SQL', 'ETL', 'BigQuery', 'Tableau'],
    accent: 'bg-accent/20',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Navigating AI Revolution — NLP Analysis',
    description: '[Description coming soon]',
    tags: ['Python', 'NLP', 'BERTopic', 'Sentiment Analysis'],
    accent: 'bg-accent/30',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Health Insurance Claim Prediction',
    description: '[Description coming soon]',
    tags: ['Python', 'Scikit-learn', 'Feature Engineering'],
    accent: 'bg-accent/15',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Chicago Trade Forecast — Time Series',
    description: '[Description coming soon]',
    tags: ['R', 'ARIMA', 'ETS', 'Forecasting'],
    accent: 'bg-accent/25',
    github: '#',
    demo: '#',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="bg-surface border border-border-subtle rounded-xl p-6 flex flex-col gap-4
      hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(77,168,218,0.15)]
      transition-all duration-200 cursor-default">

      {/* Colored header strip */}
      <div className={`h-4 -mx-6 -mt-6 rounded-t-xl ${project.accent}`} />

      {/* Title */}
      <h3 className="font-sans text-base font-semibold text-text-base leading-snug">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm text-text-muted flex-1" style={{ lineHeight: '1.3' }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span key={tag}
            className="font-sans text-[11px] font-medium text-accent-dark bg-accent-light
              px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-1">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-sans text-sm text-text-muted hover:text-accent transition-colors duration-200">
          <FaGithub size={14} /> GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-sans text-sm text-text-muted hover:text-accent transition-colors duration-200">
          <FaExternalLinkAlt size={12} /> Demo
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <p className="font-sans text-[12px] font-semibold text-accent uppercase tracking-[0.1em] mb-2">
          Work
        </p>

        {/* Section heading */}
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-text-base mb-12"
          style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
          Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
