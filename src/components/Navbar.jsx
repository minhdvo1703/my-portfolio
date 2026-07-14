import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About',      href: '#hero' },
  { label: 'Experience', href: '#experience' },
  // { label: 'Skills',     href: '#skills' },  // temporarily hidden
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',   href: '#contact' },
  // { label: 'Hobbies', href: '#hobbies' },  // temporarily hidden
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenu] = useState(false)

  useEffect(() => {
    const sectionIds = ['hero', 'experience', 'projects', 'education', 'contact']
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-50% 0px -45% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenu(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border-subtle"
        style={{ background: 'rgba(250,252,255,0.88)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Brand */}
          <a href="#hero"
            onClick={e => handleLink(e, '#hero')}
            className="font-sans font-semibold text-text-base text-base tracking-tight hover:text-accent transition-colors duration-200">
            Minh Vo
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <li key={label}>
                  <a href={href}
                    onClick={e => handleLink(e, href)}
                    className={`font-sans text-sm font-medium transition-colors duration-200 pb-0.5 border-b-2
                      ${isActive
                        ? 'text-accent border-accent'
                        : 'text-text-base border-transparent hover:text-accent'}`}>
                    {label}
                  </a>
                </li>
              )
            })}
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
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href}
              onClick={e => handleLink(e, href)}
              className="font-sans text-2xl font-semibold text-text-base hover:text-accent transition-colors duration-200">
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
