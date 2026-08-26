import type { Cta } from '@/content/types'
import { cn } from '@/lib/cn'
import { externalProps, isExternal } from '@/lib/links'

const VARIANTS = {
  solid:
    'bg-ink text-paper hover:bg-ink-soft hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(14,21,38,.25)]',
  accent: 'bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5',
  outline:
    'bg-surface text-ink border border-line hover:border-accent hover:text-accent hover:-translate-y-0.5',
} as const

/** Variants for the dark footer, where the light `outline` would disappear. */
const NIGHT_VARIANTS = {
  solid: 'bg-paper text-ink hover:-translate-y-0.5',
  accent: 'bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5',
  outline:
    'border border-night-line text-paper hover:border-night-faint hover:-translate-y-0.5',
} as const

type PillProps = Cta & {
  /** Use the dark-footer palette. */
  night?: boolean
  className?: string
}

/** The rounded link button used for every call to action on the page. */
export function Pill({ label, href, variant = 'outline', external, night, className }: PillProps) {
  const palette = night ? NIGHT_VARIANTS : VARIANTS
  const openInNewTab = external ?? isExternal(href)

  return (
    <a
      href={href}
      {...(openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : externalProps(href))}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold transition-[transform,box-shadow,background-color,border-color,color] duration-200',
        palette[variant],
        className,
      )}
    >
      {label}
    </a>
  )
}
