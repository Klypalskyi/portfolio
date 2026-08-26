import { Reveal } from '@/components/Reveal'
import { Pill } from '@/components/ui/Pill'
import { site } from '@/content/site.config'
import type { Phone } from '@/content/types'

/** A tel: link prefixed with a small CSS-drawn flag. */
function PhoneLink({ phone }: { phone: Phone }) {
  return (
    <a
      href={phone.href}
      className="border-night-line hover:border-night-faint inline-flex items-center gap-[9px] rounded-full border px-[22px] py-3 text-[15px] font-semibold text-paper transition-transform duration-200 hover:-translate-y-0.5"
    >
      <span
        aria-hidden="true"
        className="flex h-[13px] w-[18px] shrink-0 flex-col overflow-hidden rounded-[2.5px]"
      >
        {phone.flag.map((stripe, index) => (
          <span
            key={index}
            style={{ background: stripe, height: `${100 / phone.flag.length}%` }}
          />
        ))}
      </span>
      {phone.label}
    </a>
  )
}

export function Contact() {
  const { eyebrow, headline, blurb, ctas, footerNote } = site.contact
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-night">
      <div className="mx-auto max-w-[1100px] px-5 pt-20 pb-14 sm:px-8 sm:pt-[100px]">
        <Reveal className="text-night-faint mb-[18px] text-xs font-extrabold tracking-[0.16em] uppercase">
          {eyebrow}
        </Reveal>

        <Reveal delay={80}>
          <a
            href={`mailto:${site.person.email}`}
            className="font-display group m-0 mb-[22px] inline-flex items-center gap-[18px] text-[32px] leading-[1.1] font-extrabold tracking-[-0.03em] text-paper transition-colors hover:text-[#8B8DFC] sm:text-[54px]"
          >
            {headline}
            <span className="transition-transform duration-[250ms] group-hover:translate-x-4">
              &rarr;
            </span>
          </a>
        </Reveal>

        <Reveal
          delay={140}
          className="text-night-muted m-0 mb-9 max-w-[50ch] text-base leading-relaxed"
        >
          {blurb}
        </Reveal>

        <Reveal delay={200} className="flex flex-wrap items-center gap-3.5">
          {ctas.map((cta) => (
            <Pill key={cta.href + cta.label} {...cta} night />
          ))}
          {site.flags.showPhone
            ? site.person.phones.map((phone) => <PhoneLink key={phone.href} phone={phone} />)
            : null}
        </Reveal>

        <div className="border-night-line text-night-faint mt-[72px] flex justify-between gap-4 border-t pt-6 text-[13px]">
          <span>&copy; {year} {site.person.name}</span>
          <span>{footerNote}</span>
        </div>
      </div>
    </footer>
  )
}
