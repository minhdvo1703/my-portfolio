import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" ref={ref}
      className="py-24 text-center"
      style={{ background: 'rgba(184, 221, 239, 0.08)' }}>
      <div className="max-w-2xl mx-auto px-6">

        <h2
          className="fade-up font-serif text-text-base"
          style={{ fontSize: '40px', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
          Let's talk
        </h2>

        {/* mt-3 → mt-4 */}
        <p
          className="fade-up font-sans text-text-muted mt-4"
          style={{ fontSize: '17px', lineHeight: '1.7', transitionDelay: '80ms' }}>
          Open to analytics, BI, and data science opportunities.
        </p>

        {/* mt-8 → mt-6 */}
        <div
          className="fade-up flex justify-center flex-wrap gap-4 mt-6"
          style={{ transitionDelay: '160ms' }}>
          <a
            href="mailto:minhdvo0317@gmail.com"
            className="font-sans text-sm font-semibold text-white bg-accent hover:bg-accent-dark
              rounded-full transition-colors duration-200"
            style={{ padding: '11px 28px' }}>
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/minhvo-0317/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-semibold text-accent border-[1.5px] border-accent
              rounded-full bg-transparent hover:bg-accent-light transition-colors duration-200"
            style={{ padding: '11px 28px' }}>
            View LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}
