import { site } from '@/content/site.config'
import { cn } from '@/lib/cn'

const SEGMENT =
  'px-[14px] py-[9px] text-sm font-bold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white sm:px-[18px]'

export function Nav() {
  const { email, bookingUrl, monogram } = site.person

  return (
    <nav className="border-line bg-canvas/90 sticky top-0 z-20 border-b backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-[18px] font-extrabold tracking-[-0.02em] text-ink"
        >
          {monogram}
          <span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-[26px]">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden text-sm font-semibold text-muted transition-colors hover:text-ink sm:inline"
            >
              {item.label}
            </a>
          ))}
          <div
            role="group"
            aria-label="Contact"
            className="flex overflow-hidden rounded-full shadow-[0_4px_14px_rgba(14,21,38,.18)]"
          >
            <a
              href={`mailto:${email}`}
              className={cn(SEGMENT, 'bg-accent hover:bg-accent-hover text-white')}
            >
              Email me
            </a>
            {bookingUrl ? (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(SEGMENT, 'bg-ink hover:bg-ink-soft text-paper')}
              >
                Book a call
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  )
}
