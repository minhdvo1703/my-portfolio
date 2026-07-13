import { useEffect, useRef } from 'react'

// Attaches to a container ref. When the container crosses the viewport
// threshold, adds 'visible' to every .fade-up descendant (triggering
// the CSS transition defined in index.css). Fires once per element.
export default function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.querySelectorAll('.fade-up').forEach(child => child.classList.add('visible'))
        obs.unobserve(el)
      }
    }, { threshold })

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return ref
}
