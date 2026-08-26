import { site } from '@/content/site.config'

function Track({ 'aria-hidden': ariaHidden }: { 'aria-hidden'?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="font-display flex gap-11 pr-11 text-[15px] font-bold whitespace-nowrap text-faint"
    >
      {site.marquee.map((item) => (
        <span key={item} className="flex items-center gap-11">
          {item}
          <span className="text-accent">&#9670;</span>
        </span>
      ))}
    </div>
  )
}

/**
 * The endlessly scrolling tech strip.
 *
 * Two identical tracks sit side by side and the pair translates by exactly
 * -50%, so the second track lands where the first began and the loop is
 * invisible. The duplicate is hidden from screen readers.
 */
export function Marquee() {
  return (
    <div className="border-line bg-surface overflow-hidden border-y py-[18px]">
      <div data-marquee="" className="flex w-max [animation:marquee_26s_linear_infinite]">
        <Track />
        <Track aria-hidden />
      </div>
    </div>
  )
}
