import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { site } from '@/content/site.config'

export function Skills() {
  const { eyebrow, title, groups } = site.skills

  return (
    <section id="skills" className="border-line bg-surface-alt border-y">
      <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeading eyebrow={eyebrow} title={title} className="mb-10" />

        <div className="grid grid-cols-1 gap-[26px] md:grid-cols-3 md:gap-x-12 md:gap-y-9">
          {groups.map((group, index) => (
            <Reveal
              key={group.group}
              delay={(index % 3) * 70}
              className="flex flex-col gap-3"
            >
              <h3 className="m-0 text-[13px] font-extrabold tracking-[0.06em] uppercase">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} tone="outline">
                    {item}
                  </Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
