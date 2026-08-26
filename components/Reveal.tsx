import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type RevealProps = {
  children: ReactNode
  /** Milliseconds to stagger this element behind its neighbours. */
  delay?: number
  className?: string
  as?: ElementType
  id?: string
}

/**
 * Fades and lifts its children into view on scroll.
 *
 * Renders on the server as a plain element; the animation is applied by
 * `MotionEffects` at runtime. With motion off it is a transparent wrapper.
 */
export function Reveal({ children, delay = 0, className, as, id }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag
      id={id}
      data-reveal=""
      className={cn(className)}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
