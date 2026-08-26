import { cn } from '@/lib/cn'

type TagProps = {
  children: React.ReactNode
  /** `accent` = indigo on lilac, `muted` = slate on grey, `outline` = bordered white. */
  tone?: 'accent' | 'muted' | 'outline'
}

const TONES = {
  accent: 'bg-accent-soft text-accent-deep font-bold text-xs px-3 py-[5px]',
  muted: 'bg-chip text-muted font-semibold text-xs px-[11px] py-1',
  outline: 'bg-surface border border-line text-ink font-semibold text-[13.5px] px-[13px] py-1.5',
} as const

/** A small rounded label used for tech stacks and languages. */
export function Tag({ children, tone = 'muted' }: TagProps) {
  return <span className={cn('inline-block rounded-full', TONES[tone])}>{children}</span>
}
