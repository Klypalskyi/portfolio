/**
 * Types for `content/site.config.ts`.
 *
 * These exist so your editor autocompletes every field and TypeScript tells you
 * — at build time — if a section is missing something. You should rarely need
 * to touch this file: add content in `site.config.ts` instead.
 */

/** A link rendered as a pill button. */
export type Cta = {
  label: string
  href: string
  /** `solid` = dark filled, `accent` = brand filled, `outline` = bordered. */
  variant?: 'solid' | 'accent' | 'outline'
  /** Opens in a new tab. Inferred for external URLs when omitted. */
  external?: boolean
}

/** One of the four animated numbers under the hero. */
export type Stat = {
  /** The number it counts up to. */
  value: number
  /** Appended to the number, e.g. '+' or '%'. */
  suffix?: string
  label: string
}

/** A word in the animated hero headline. */
export type HeroWord = {
  text: string
  /** Renders the word in the brand colour. */
  accent?: boolean
}

/** The one non-NDA project, shown large with a live preview. */
export type FeaturedProject = {
  title: string
  description: string
  tags: string[]
  link: { label: string; href: string }
  preview:
    /** Renders a live <iframe> of the site. */
    | { kind: 'iframe'; src: string; title: string }
    /** Renders a screenshot from /public. */
    | { kind: 'image'; src: string; alt: string }
}

/** A confidential project, shown as a card in the grid. */
export type NdaProject = {
  /** Small uppercase label, e.g. 'E-commerce · Enterprise'. */
  category: string
  title: string
  description: string
  tags: string[]
  /** Shows the amber NDA marker. Default true. */
  nda?: boolean
}

export type SkillGroup = {
  group: string
  items: string[]
}

export type ExperienceItem = {
  /** Free text, e.g. 'Aug 2020 — Present'. */
  period: string
  company: string
  /** e.g. 'Hybrid', 'Remote', 'On site'. */
  mode: string
  role: string
  summary: string
}

export type Phone = {
  label: string
  href: string
  /** Two or three horizontal stripes drawn as a small flag. Top to bottom. */
  flag: string[]
}

export type NavItem = { label: string; href: string }

export type SiteConfig = {
  /** SEO and social-share metadata. */
  meta: {
    title: string
    description: string
    /** Canonical URL of the deployed site, no trailing slash. */
    url: string
    /** Path under /public, or null to skip the social image. */
    ogImage: string | null
    keywords: string[]
  }
  /** Switches you can flip without touching any component. */
  flags: {
    /** Shows the pulsing 'Open to new opportunities' badge. */
    openToWork: boolean
    /** Shows phone numbers in the footer. */
    showPhone: boolean
    /** Master switch for all animation. Users with
     *  `prefers-reduced-motion` always get the static version. */
    motion: boolean
  }
  person: {
    name: string
    /** Split so the hero can animate each line separately. */
    nameLines: string[]
    role: string
    location: string
    email: string
    phones: Phone[]
    /** Rendered as the 'MK.' mark in the nav. */
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
  /** The scrolling tech strip under the hero. */
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
    /** Path under /public, or null for a placeholder frame. */
    portrait: string | null
    portraitAlt: string
    paragraphs: string[]
    chips: string[]
  }
  contact: {
    eyebrow: string
    headline: string
    blurb: string
    ctas: Cta[]
    /** Right-hand side of the footer bottom bar. */
    footerNote: string
  }
}
