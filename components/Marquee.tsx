import { site } from '@/content/site.config'

const REPEATS = 4

const SECONDS_PER_PASS = 26

function Track({ 'aria-hidden': ariaHidden }: { 'aria-hidden'?: boolean }) {
  const items = Array.from({ length: REPEATS }, () => site.marquee).flat()

  return (
    <div
      aria-hidden={ariaHidden}
      className="font-display flex gap-11 pr-11 text-[15px] font-bold whitespace-nowrap text-faint"
    >
      {items.map((item, i) => (
        <span key={`${i}-${item}`} className="flex items-center gap-11">
          {item}
          <span className="text-accent">&#9670;</span>
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="border-line bg-surface overflow-hidden border-y py-[18px]">
      <div
        data-marquee=""
        className="flex w-max [animation:marquee_var(--marquee-duration)_linear_infinite]"
        style={{ '--marquee-duration': `${REPEATS * SECONDS_PER_PASS}s` } as React.CSSProperties}
      >
        <Track />
        <Track aria-hidden />
      </div>
    </div>
  )
}
