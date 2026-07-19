import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Hero from '../components/Hero'
import Education from '../components/Education'
import Contact from '../components/Contact'
import { experience } from '../data/experience'
import projects from '../data/projects'
import useScrollReveal from '../hooks/useScrollReveal'

const featured = projects.filter(p => p.featured)

const HR = () => <hr style={{ border: 'none', borderTop: '1px solid #E2EAF0', margin: 0 }} />

function ProjectCard({ project, delay }) {
  return (
    <div className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      <div className="bg-surface border border-border-subtle rounded-xl p-8 flex flex-col gap-3 h-full
        hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(77,168,218,0.15)]
        transition-[transform,box-shadow] duration-200 cursor-default">

        <div className="h-4 -mx-8 -mt-8 rounded-t-xl"
          style={{ background: project.accentGradient }} />

        <h3 className="font-sans text-[18px] font-semibold text-text-base leading-snug">
          {project.title}
        </h3>

        <p className="font-sans text-[17px] text-text-muted flex-1"
          style={{ lineHeight: '1.65', marginBottom: '4px' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag}
              className="font-sans text-[14px] font-medium text-accent-dark bg-accent-light
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

export default function HomePage() {
  const expRef = useScrollReveal()
  const projRef = useScrollReveal()

  return (
    <main>
      <Hero />
      <HR />

      {/* Condensed Experience */}
      <section id="experience" ref={expRef} className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="font-sans text-4xl md:text-5xl font-bold text-text-base mb-8"
            style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
            Experience
          </h2>

          <div className="divide-y divide-border-subtle">
            {experience.map((job, i) => (
              <div key={job.company}
                className="fade-up flex items-start justify-between gap-6 py-5"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div>
                  <p className="font-sans text-base font-semibold text-text-base leading-tight mb-0">
                    {job.company}
                  </p>
                  <p className="font-sans text-[15px] text-text-muted mb-0 mt-1">
                    {job.role}{job.location ? ` · ${job.location}` : ''}
                  </p>
                </div>
                <span className="font-sans text-[15px] text-text-muted shrink-0 pt-0.5 text-right">
                  {job.period}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/experience"
              className="font-sans text-[15px] font-medium text-accent hover:text-accent-dark transition-colors duration-200">
              View full experience →
            </Link>
          </div>
        </div>
      </section>

      <HR />

      {/* Featured Projects */}
      <section id="projects" ref={projRef} className="py-24" style={{ background: '#F5F9FF' }}>
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="font-sans text-4xl md:text-5xl font-bold text-text-base mb-8"
            style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
            Projects
          </h2>

          <div className="grid grid-cols-1 gap-5">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 80} />
            ))}
          </div>

          <div className="mt-8">
            <Link to="/projects"
              className="font-sans text-[15px] font-medium text-accent hover:text-accent-dark transition-colors duration-200">
              View all 5 projects →
            </Link>
          </div>
        </div>
      </section>

      <HR />
      <Education />
      <HR />
      <Contact />
    </main>
  )
}
