const HOBBIES = [
  { emoji: '🍜', label: '[Hobby 1]', desc: '[One line description coming soon]' },
  { emoji: '✈️',  label: '[Hobby 2]', desc: '[One line description coming soon]' },
  { emoji: '📷', label: '[Hobby 3]', desc: '[One line description coming soon]' },
  { emoji: '📚', label: '[Hobby 4]', desc: '[One line description coming soon]' },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-16" style={{ background: 'rgba(184,221,239,0.12)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-sans text-[12px] font-semibold text-accent uppercase tracking-[0.1em] mb-2">
          Life
        </p>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-text-base mb-10"
          style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
          Beyond the Data
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {HOBBIES.map(({ emoji, label, desc }) => (
            <div key={label} className="bg-surface rounded-xl border border-border-subtle p-5 space-y-2
              hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(77,168,218,0.12)]
              transition-all duration-200">
              <div className="text-3xl">{emoji}</div>
              <p className="font-sans text-sm font-semibold text-text-base">{label}</p>
              <p className="font-sans text-xs text-text-muted" style={{ lineHeight: '1.3' }}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
