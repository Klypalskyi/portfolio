import { Reveal } from '@/components/Reveal'
import { Tilt } from '@/components/Tilt'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { site } from '@/content/site.config'
import { externalProps } from '@/lib/links'

function FeaturedPreview() {
  const { preview } = site.work.featured

  return (
    <div className="border-line bg-surface-alt absolute inset-3 overflow-hidden rounded-xl border">
      {preview.kind === 'iframe' ? (
        <iframe
          src={preview.src}
          title={preview.title}
          loading="lazy"
          // The preview is decorative: the adjacent link is the real way in.
          sandbox="allow-scripts allow-same-origin"
          className="block h-full w-full border-none"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- static export, no optimizer
        <img src={preview.src} alt={preview.alt} className="h-full w-full object-cover" />
      )}
    </div>
  )
}

export function Work() {
  const { eyebrow, featuredTitle, featured, ndaTitle, ndaIntro, nda } = site.work

  return (
    <section id="work" className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:pt-[90px] sm:pb-20">
      <SectionHeading eyebrow={eyebrow} title={featuredTitle} className="mb-[34px]" />

      <Reveal delay={120}>
        <Tilt className="border-line bg-surface grid grid-cols-1 overflow-hidden rounded-[20px] border shadow-[0_8px_30px_rgba(14,21,38,.05)] md:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[320px] p-3 md:min-h-[420px]">
            <FeaturedPreview />
          </div>

          <div className="flex flex-col justify-center gap-4 px-[22px] py-[26px] sm:px-10 sm:py-10">
            <h3 className="font-display m-0 text-[25px] font-bold tracking-[-0.02em]">
              {featured.title}
            </h3>
            <p className="m-0 text-[15.5px] leading-relaxed text-pretty text-muted">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <Tag key={tag} tone="accent">
                  {tag}
                </Tag>
              ))}
            </div>
            <a
              href={featured.link.href}
              {...externalProps(featured.link.href)}
              className="hover:text-accent-deep group mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-colors"
            >
              {featured.link.label}
              <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                &rarr;
              </span>
            </a>
          </div>
        </Tilt>
      </Reveal>

      <SectionHeading title={ndaTitle} intro={ndaIntro} className="mt-[70px] mb-[34px]" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {nda.map((project, index) => (
          <Reveal key={project.title} delay={index % 2 === 1 ? 80 : 0}>
            <Tilt className="border-line bg-surface flex h-full flex-col gap-3 rounded-2xl border px-[30px] py-7">
              <div className="flex items-center justify-between gap-3">
                <p className="m-0 text-[11px] font-extrabold tracking-[0.14em] text-faint uppercase">
                  {project.category}
                </p>
                {project.nda ?? true ? (
                  <span className="text-nda text-[11px] font-extrabold tracking-[0.1em]">NDA</span>
                ) : null}
              </div>

              <h3 className="font-display m-0 text-[19px] font-bold tracking-[-0.01em]">
                {project.title}
              </h3>
              <p className="m-0 text-[14.5px] leading-snug text-pretty text-muted">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-[7px] pt-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
