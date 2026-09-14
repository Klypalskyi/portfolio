'use client'

import { useEffect } from 'react'

export function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('motion')) return

    const words = Array.from(document.querySelectorAll<HTMLElement>('[data-word]'))
    const heroTimer = window.setTimeout(() => {
      words.forEach((el) => el.classList.add('is-visible'))
    }, 60)

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
