import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  intro?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, intro, className }: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      {eyebrow ? (
        <Reveal className="mb-3 text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
          {eyebrow}
        </Reveal>
      ) : null}
      <Reveal
        as="h2"
        delay={eyebrow ? 60 : 0}
        className="font-display m-0 text-[29px] font-extrabold tracking-[-0.02em] sm:text-[38px]"
      >
        {title}
      </Reveal>
      {intro ? (
        <Reveal delay={60} className="mt-3 max-w-[62ch] text-[15.5px] leading-relaxed text-muted">
          {intro}
        </Reveal>
      ) : null}
    </div>
  )
}
