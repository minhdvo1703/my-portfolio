import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import projects from '../data/projects'
import useScrollReveal from '../hooks/useScrollReveal'

function ProjectCard({ project, delay }) {
  return (
    <div className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      {/* gap-4 → gap-3: tighter between related card elements */}
      <div className="bg-surface border border-border-subtle rounded-xl p-8 flex flex-col gap-3 h-full
        hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(77,168,218,0.15)]
        transition-[transform,box-shadow] duration-200 cursor-default">

        <div
          className="h-4 -mx-8 -mt-8 rounded-t-xl"
          style={{ background: project.accentGradient }}
        />

        <h3 className="font-sans text-base font-semibold text-text-base leading-snug">
          {project.title}
        </h3>

        <p className="font-sans text-[15px] text-text-muted flex-1"
          style={{ lineHeight: '1.65', marginBottom: '4px' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag}
              className="font-sans text-[13px] font-medium text-accent-dark bg-accent-light
                px-2.5 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-sans text-sm font-medium text-accent hover:text-accent-dark transition-colors duration-200">
            <FaGithub size={14} /> GitHub
          </a>
          <a href={project.slides} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-sans text-sm font-medium text-accent hover:text-accent-dark transition-colors duration-200">
            <FaExternalLinkAlt size={12} /> Slides
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="py-24" ref={ref} style={{ background: '#F5F9FF' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* mb-12 → mb-8 */}
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-text-base mb-8"
          style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
