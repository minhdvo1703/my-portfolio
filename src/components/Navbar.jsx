import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'About',      to: '/about' },
  { label: 'Projects',   to: '/projects' },
  { label: 'Experience', to: '/experience' },
]

export default function Navbar() {
  const [menuOpen, setMenu] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border-subtle"
        style={{ background: 'rgba(250,252,255,0.88)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Brand */}
          <Link to="/"
            className="font-sans font-semibold text-text-base text-base tracking-tight hover:text-accent transition-colors duration-200">
            Minh Vo
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, to }) => {
              const isActive = pathname === to
              return (
                <li key={label}>
                  <Link to={to}
                    className={`font-sans text-sm font-medium transition-colors duration-200 pb-0.5 border-b-2
                      ${isActive
                        ? 'text-accent border-accent'
                        : 'text-text-base border-transparent hover:text-accent'}`}>
                    {label}
                  </Link>
                </li>
              )
            })}
            <li>
              <a href="/my-portfolio/assets/Minh_Vo_resume_BIA.pdf"
                target="_blank" rel="noopener noreferrer"
                className="font-sans text-sm font-medium text-text-base border-b-2 border-transparent
                  hover:text-accent transition-colors duration-200">
                Resume
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenu(o => !o)}
            aria-label="Toggle menu">
            <span className={`block w-5 h-0.5 bg-text-base transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-text-base transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-text-base transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>

        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-base flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={label} to={to}
              onClick={() => setMenu(false)}
              className="font-sans text-2xl font-semibold text-text-base hover:text-accent transition-colors duration-200">
              {label}
            </Link>
          ))}
          <a href="/my-portfolio/assets/Minh_Vo_resume_BIA.pdf"
            target="_blank" rel="noopener noreferrer"
            onClick={() => setMenu(false)}
            className="font-sans text-2xl font-semibold text-text-base hover:text-accent transition-colors duration-200">
            Resume
          </a>
        </div>
      )}
    </>
  )
}
