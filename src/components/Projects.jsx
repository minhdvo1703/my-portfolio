import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import projects from '../data/projects'
import useScrollReveal from '../hooks/useScrollReveal'

function ProjectCard({ project, delay }) {
  return (
    // fade-up wrapper keeps the card's own transition-all isolated
    <div className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      <div className="bg-surface border border-border-subtle rounded-xl p-6 flex flex-col gap-4 h-full
        hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(77,168,218,0.15)]
        transition-[transform,box-shadow] duration-200 cursor-default">

        {/* Gradient header strip */}
        <div
          className="h-4 -mx-6 -mt-6 rounded-t-xl"
          style={{ background: project.accentGradient }}
        />

        <h3 className="font-sans text-base font-semibold text-text-base leading-snug">
          {project.title}
        </h3>

        <p className="font-sans text-sm text-text-muted flex-1" style={{ lineHeight: '1.3' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag}
              className="font-sans text-[11px] font-medium text-accent-dark bg-accent-light
                px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-1">
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
    <section id="projects" className="py-24 bg-bg-base" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-sans text-[12px] font-semibold text-accent uppercase tracking-[0.1em] mb-2">
          Work
        </p>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-text-base mb-12"
          style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
