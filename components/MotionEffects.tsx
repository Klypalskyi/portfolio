'use client'

import { useEffect } from 'react'

/**
 * Drives every scroll-triggered animation on the page.
 *
 * Mounted once in the layout. It does not render anything — it attaches a
 * single IntersectionObserver for all `[data-reveal]` elements and kicks off
 * the hero headline on load.
 *
 * The `motion` class on <html> is set by a blocking script in the document
 * head (see app/layout.tsx) so hidden elements never flash visible first.
 * If that class is absent — motion disabled in the config, reduced-motion
 * preference, or no JS — this component does nothing and the page is simply
 * shown as-is.
 */
export function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('motion')) return

    // Hero headline: slide each word up on load, staggered.
    const words = Array.from(document.querySelectorAll<HTMLElement>('[data-word]'))
    const heroTimer = window.setTimeout(() => {
      words.forEach((el) => el.classList.add('is-visible'))
    }, 60)

    // Everything else: reveal as it scrolls into view, once.
    const revealables = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 },
    )
    revealables.forEach((el) => observer.observe(el))

    return () => {
      window.clearTimeout(heroTimer)
      observer.disconnect()
    }
  }, [])

  return null
}
