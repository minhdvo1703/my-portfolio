import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa'

const SOCIAL = [
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/minhvo-0317/', label: 'LinkedIn' },
  { Icon: FaGithub,   href: 'https://github.com/minhdvo1703',           label: 'GitHub' },
  { Icon: FaEnvelope, href: 'mailto:minhdvo0317@gmail.com',             label: 'Email' },
  { Icon: FaFileAlt,  href: '#',                                        label: 'Resume' },
]

export default function Footer() {
  return (
    <footer className="py-10" style={{ background: '#0F172A' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-5">

        {/* Social icons */}
        <div className="flex items-center gap-6">
          {SOCIAL.map(({ Icon, href, label }) => (
            <a key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="transition-colors duration-200"
              style={{ color: '#B8DDEF' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4DA8DA')}
              onMouseLeave={e => (e.currentTarget.style.color = '#B8DDEF')}>
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-sans text-[13px]" style={{ color: '#94A3B8' }}>
          © 2025 Minh Vo
        </p>

      </div>
    </footer>
  )
}
