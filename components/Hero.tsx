import { CountUp } from '@/components/CountUp'
import { HeroCanvas } from '@/components/HeroCanvas'
import { Reveal } from '@/components/Reveal'
import { Pill } from '@/components/ui/Pill'
import { site } from '@/content/site.config'

/**
 * One word of the hero headline, sliding up from behind a clipping mask.
 *
 * Each word needs its own `overflow: hidden` box, which means the words are
 * separate elements and JSX swallows the whitespace between them — hence the
 * explicit trailing space, placed outside the mask so it is never clipped.
 */
function MaskedWord({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <>
      <span className="mb-[-0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
        <span
          data-word=""
          className="inline-block"
          style={{ '--word-delay': `${index * 90}ms` } as React.CSSProperties}
        >
          {children}
        </span>
      </span>{' '}
    </>
  )
}

export function Hero() {
  const { person, hero, stats, flags } = site

  return (
    <header id="top" className="relative overflow-hidden">
      <HeroCanvas />

      <div className="relative mx-auto max-w-[1100px] px-5 pt-[72px] pb-14 sm:px-8 sm:pt-[110px] sm:pb-[90px]">
        {flags.openToWork ? (
          <Reveal className="bg-ok-bg text-ok-text mb-[30px] inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold">
            <span className="bg-ok-dot h-[7px] w-[7px] rounded-full [animation:pulse-dot_2s_ease-in-out_infinite]" />
            {hero.badge}
          </Reveal>
        ) : null}

        <Reveal
          delay={60}
          className="mb-[22px] text-xs font-extrabold tracking-[0.16em] text-faint uppercase"
        >
          {hero.eyebrow}
        </Reveal>

        <h1 className="font-display m-0 mb-2.5 text-[44px] leading-[1.04] font-extrabold tracking-[-0.035em] sm:text-[76px]">
          {person.nameLines.map((line, i) => (
            <MaskedWord key={line} index={i}>
              {line}
            </MaskedWord>
          ))}
        </h1>

        <p className="font-display m-0 mb-[30px] text-[27px] leading-[1.12] font-extrabold tracking-[-0.03em] text-faint sm:text-[44px]">
          {hero.headline.map((word, i) => (
            <MaskedWord key={`${word.text}-${i}`} index={person.nameLines.length + i}>
              <span className={word.accent ? 'text-accent' : undefined}>{word.text}</span>
            </MaskedWord>
          ))}
        </p>

        <Reveal
          delay={240}
          className="m-0 mb-[38px] max-w-[56ch] text-[18px] leading-relaxed text-pretty text-muted"
        >
          {hero.intro}
        </Reveal>

        <Reveal delay={330} className="mb-[70px] flex flex-wrap items-center gap-3.5">
          {hero.ctas.map((cta) => (
            <Pill key={cta.href + cta.label} {...cta} />
          ))}
        </Reveal>

        <Reveal
          delay={420}
          className="border-line bg-line grid grid-cols-2 gap-px overflow-hidden rounded-2xl border shadow-[0_8px_30px_rgba(14,21,38,.05)] sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-6 py-[22px]">
              <div className="font-display text-[30px] font-extrabold tracking-[-0.02em]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-[13px] font-medium text-muted">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </header>
  )
}
