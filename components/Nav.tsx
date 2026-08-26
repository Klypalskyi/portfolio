import { site } from '@/content/site.config'

/** Sticky, translucent top bar. Section links collapse away on small screens. */
export function Nav() {
  return (
    <nav className="border-line bg-canvas/90 sticky top-0 z-20 border-b backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-[18px] font-extrabold tracking-[-0.02em] text-ink"
        >
          {site.person.monogram}
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
          <a
            href={`mailto:${site.person.email}`}
            className="bg-accent hover:bg-accent-hover rounded-full px-[18px] py-[9px] text-sm font-bold text-white transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(75,77,247,.35)]"
          >
            Email me
          </a>
        </div>
      </div>
    </nav>
  )
}
