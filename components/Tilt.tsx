'use client'

import { useRef, type ReactNode } from 'react'

type TiltProps = {
  children: ReactNode
  className?: string
}

/**
 * Tips a card a few degrees toward the cursor, and settles back on leave.
 *
 * Pointer-driven only — it never runs on touch devices (no mousemove) and is
 * skipped entirely when motion is off.
 */
export function Tilt({ children, className }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)

  const enabled = () =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('motion')

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || !enabled()) return
    const rect = el.getBoundingClientRect()
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -5
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 5
    el.style.transition = 'transform .08s linear'
    el.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)'
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  )
}
