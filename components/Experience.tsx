import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/content/site.config'

export function Experience() {
  const { eyebrow, title, items } = site.experience

  return (
    <section id="experience" className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20">
      <SectionHeading eyebrow={eyebrow} title={title} className="mb-12" />

      <ol className="m-0 flex list-none flex-col p-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <Reveal
              key={`${item.company}-${item.period}`}
              as="li"
              /* Mobile stacks date over body beside a single rail;
                 from `sm` the date moves into its own right-aligned column. */
              className="grid grid-cols-[18px_1fr] gap-x-3.5 sm:grid-cols-[200px_28px_1fr] sm:gap-x-5"
            >
              <p className="order-1 mb-1 text-[13px] font-bold text-faint sm:order-none sm:mb-0 sm:pt-1 sm:text-right">
                {item.period}
              </p>

              <div className="order-none row-span-2 flex flex-col items-center sm:row-span-1">
                <span className="border-accent bg-canvas mt-1 h-[11px] w-[11px] shrink-0 rounded-full border-[3px]" />
                {!isLast ? <span className="bg-line w-0.5 flex-1" /> : null}
              </div>

              <div className={`order-2 sm:order-none ${isLast ? '' : 'pb-11'}`}>
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <h3 className="font-display m-0 text-[21px] font-bold tracking-[-0.01em]">
                    {item.company}
                  </h3>
                  <span className="text-[13px] font-semibold text-faint">{item.mode}</span>
                </div>
                <p className="mt-1 mb-2.5 text-[14.5px] font-bold text-accent">{item.role}</p>
                <p className="m-0 max-w-[62ch] text-[14.5px] leading-relaxed text-pretty text-muted">
                  {item.summary}
                </p>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}
