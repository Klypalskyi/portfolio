export type Cta = {
  label: string
  href: string
  variant?: 'solid' | 'accent' | 'outline'
  external?: boolean
}

export type Stat = {
  value: number
  suffix?: string
  label: string
}

export type HeroWord = {
  text: string
  accent?: boolean
}

export type FeaturedProject = {
  title: string
  description: string
  tags: string[]
  link: { label: string; href: string }
  preview:
    | { kind: 'iframe'; src: string; title: string }
    | { kind: 'image'; src: string; alt: string }
}

export type NdaProject = {
  category: string
  title: string
  description: string
  tags: string[]
  nda?: boolean
}

export type SkillGroup = {
  group: string
  items: string[]
}

export type ExperienceItem = {
  period: string
  company: string
  mode: string
  role: string
  summary: string
}

export type Phone = {
  label: string
  href: string
  flag: string[]
}

export type NavItem = { label: string; href: string }

export type Photo = {
  src: string
  alt: string
}

export type SiteConfig = {
  meta: {
    title: string
    description: string
    url: string
    ogImage: string | null
    keywords: string[]
  }
  flags: {
    openToWork: boolean
    showPhone: boolean
    motion: boolean
  }
  person: {
    name: string
    nameLines: string[]
    role: string
    location: string
    email: string
    bookingUrl: string
    phones: Phone[]
    monogram: string
    links: { label: string; href: string }[]
  }
  nav: NavItem[]
  hero: {
    badge: string
    eyebrow: string
    headline: HeroWord[]
    intro: string
    ctas: Cta[]
  }
  stats: Stat[]
  marquee: string[]
  work: {
    eyebrow: string
    featuredTitle: string
    featured: FeaturedProject
    ndaTitle: string
    ndaIntro: string
    nda: NdaProject[]
  }
  skills: {
    eyebrow: string
    title: string
    groups: SkillGroup[]
  }
  experience: {
    eyebrow: string
    title: string
    items: ExperienceItem[]
  }
  about: {
    eyebrow: string
    title: string
    photos: Photo[]
    paragraphs: string[]
    chips: string[]
  }
  contact: {
    eyebrow: string
    headline: string
    blurb: string
    ctas: Cta[]
    footerNote: string
  }
}
