import { PhotoCarousel } from '@/components/PhotoCarousel'
import { Reveal } from '@/components/Reveal'
import { Tag } from '@/components/ui/Tag'
import { site } from '@/content/site.config'

export function About() {
  const { eyebrow, title, photos, paragraphs, chips } = site.about

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
          {photos.length ? <PhotoCarousel photos={photos} /> : null}
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
