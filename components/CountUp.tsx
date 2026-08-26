'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  value: number
  suffix?: string
}

/**
 * Counts from 0 to `value` over one second when it first scrolls into view.
 *
 * The final number is rendered on the server too, so the stat is correct
 * before hydration and for anyone without JS.
 */
export function CountUp({ value, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!document.documentElement.classList.contains('motion')) return

    let frame = 0
    setDisplay(0)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer.unobserve(entry.target)

          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / 1000, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(value * eased))
            if (progress < 1) frame = requestAnimationFrame(step)
          }
          frame = requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
