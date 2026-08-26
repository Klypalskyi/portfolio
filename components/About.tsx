import { Reveal } from '@/components/Reveal'
import { Tag } from '@/components/ui/Tag'
import { site } from '@/content/site.config'
import { withBasePath } from '@/lib/basePath'

/** The portrait, or a labelled frame when no photo is configured yet. */
function Portrait() {
  const { portrait, portraitAlt } = site.about

  if (!portrait) {
    return (
      <div className="border-line bg-surface-alt flex h-[300px] w-full items-center justify-center rounded-2xl border border-dashed">
        <span className="text-[13px] font-semibold text-faint">
          Add a photo to /public and set <code>about.portrait</code>
        </span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, no optimizer
    <img
      src={withBasePath(portrait)}
      alt={portraitAlt}
      className="h-[300px] w-full rounded-2xl object-cover"
    />
  )
}

export function About() {
  const { eyebrow, title, paragraphs, chips } = site.about

  return (
    <section id="about" className="border-line bg-surface border-t">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-9 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <p className="mb-3 text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
            {eyebrow}
          </p>
          <h2 className="font-display m-0 mb-6 text-[29px] font-extrabold tracking-[-0.02em] sm:text-[36px]">
            {title}
          </h2>
          <Portrait />
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-center gap-[18px]">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`m-0 text-base leading-relaxed text-pretty ${index === 0 ? '' : 'text-muted'}`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-1.5 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <Tag key={chip}>{chip}</Tag>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
