import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
  id?: string
}

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
