import type { SiteConfig } from './types'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EVERYTHING ON THE SITE LIVES HERE.
 *
 *  To update the portfolio you should only ever need to edit this one file.
 *  Add a job → add an object to `experience.items`.
 *  Add a project → add an object to `work.nda`.
 *  Take the site off the market → set `flags.openToWork` to false.
 *
 *  Field-by-field documentation is in `content/types.ts`.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const site: SiteConfig = {
  meta: {
    title: 'Mykhailo Klypalskyi — Sr. Fullstack Software Developer',
    description:
      'Senior full stack and product engineer with 7+ years delivering scalable web applications and leading teams. Enterprise e-commerce, global music analytics, fintech.',
    url: 'https://klypalskyi.github.io/portfolio',
    ogImage: null,
    keywords: [
      'Mykhailo Klypalskyi',
      'Full Stack Engineer',
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Engineering Manager',
    ],
  },

  flags: {
    openToWork: true,
    showPhone: false,
    motion: true,
  },

  person: {
    name: 'Mykhailo Klypalskyi',
    nameLines: ['Mykhailo', 'Klypalskyi'],
    role: 'Sr. Fullstack Software Developer',
    location: 'Cambrils, Spain',
    email: 'klypalskyi@gmail.com',
    monogram: 'MK',
    // Deliberately empty: phone numbers are not published in this repo.
    // To show one, add { label, href: 'tel:…', flag: [...] } here and set
    // flags.showPhone to true. `flag` is a list of horizontal stripe colours,
    // top to bottom — e.g. ['#0057B7', '#FFD700'] for Ukraine.
    phones: [],
    links: [
      { label: 'GitHub', href: 'https://github.com/Klypalskyi' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/mike-klypalskyi' },
    ],
  },

  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
  ],

  hero: {
    badge: 'Open to new opportunities',
    eyebrow: 'Sr. Fullstack Software Developer · Cambrils, Spain',
    headline: [
      { text: 'builds' },
      { text: 'platforms', accent: true },
      { text: 'that' },
      { text: 'ship.' },
    ],
    intro:
      'Senior full stack and product engineer with 7+ years delivering scalable web applications and leading teams. Most of the work lives behind NDAs — enterprise e-commerce, a global music analytics programme, fintech — so this page shows the shape of it.',
    ctas: [
      { label: 'klypalskyi@gmail.com', href: 'mailto:klypalskyi@gmail.com', variant: 'solid' },
      { label: 'GitHub', href: 'https://github.com/Klypalskyi', variant: 'outline' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/mike-klypalskyi', variant: 'outline' },
    ],
  },

  stats: [
    { value: 7, suffix: '+', label: 'years shipping production software' },
    { value: 6, label: 'engineers managed as EM' },
    { value: 40, suffix: '%', label: 'fewer production bugs' },
    { value: 25, suffix: '%', label: 'faster team delivery' },
  ],

  marquee: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'GraphQL',
    'PostgreSQL',
    'Snowflake',
    'Docker',
    'Kafka',
    'NX',
    'Redux',
    'Zustand',
  ],

  work: {
    eyebrow: 'Featured work',
    featuredTitle: 'The one I can show',
    featured: {
      title: 'GoMotopia',
      description:
        'Powersports marketplace. I designed and implemented the full-stack architecture — frontend, backend, and database — integrated Algolia for fast vehicle search, and wired SendGrid for transactional email, working directly with the client on UX.',
      tags: ['Full-stack architecture', 'Algolia', 'SendGrid'],
      link: { label: 'Visit gomotopia.com', href: 'https://www.gomotopia.com' },
      preview: {
        kind: 'iframe',
        src: 'https://www.gomotopia.com',
        title: 'gomotopia.com live preview',
      },
    },
    ndaTitle: 'The rest, under NDA',
    ndaIntro: "Client names stay confidential, but the industries and stacks don't have to.",
    nda: [
      {
        category: 'Health tech · Clinical trials',
        title: 'Multi-tenant clinical trial platform',
        description:
          'Multi-tenant platform for hospital research departments, replacing a legacy internal system. I ship features end to end — spec, Spring Boot API, React admin UI, Playwright journey — most recently DB-persisted staff burnout assessments behind a public response link, and an org-scoped disease taxonomy customers manage themselves.',
        tags: ['Java 25', 'Spring Boot', 'React 19', 'PostgreSQL', 'Playwright'],
      },
      {
        category: 'E-commerce · Enterprise',
        title: 'Network-marketing platform migration',
        description:
          'Led the full migration from AngularJS to Next.js — then Pages Router to App Router — across a 120+ component system, plus user and payment data migration from Exigo to Magento.',
        tags: ['Next.js', 'App Router', 'Redux', 'Zustand', 'Magento'],
      },
      {
        category: 'Music · Analytics',
        title: 'Global music analytics programme',
        description:
          'Production GraphQL at scale, an infra-aware internal AI wrapper that turns Jira tasks into implementation (+25% delivery speed), and a team Snowflake cost-optimization projected at ~$700K/yr.',
        tags: ['GraphQL', 'Snowflake', 'Node.js', 'AI tooling'],
      },
      {
        category: 'E-commerce · Greenfield',
        title: 'Second commerce platform architecture',
        description:
          'Designed the greenfield Next.js + NX monorepo frontend: shared design system, typed API clients, and modular boundaries.',
        tags: ['Next.js', 'NX monorepo', 'TypeScript'],
      },
      {
        category: 'Construction · Marketplace',
        title: 'Live bidding for building developments',
        description:
          'Real-time auctions with multiple concurrent rooms connecting developments, suppliers, and subcontractors.',
        tags: ['Real-time bidding', 'WebSockets', 'Node.js'],
      },
      {
        category: 'Fintech',
        title: 'Financial dashboard',
        description:
          'UI components for a financial dashboard product: filtering, pagination, and sorting across large datasets.',
        tags: ['Frontend', 'Data tables'],
      },
      {
        category: 'Banking · Security',
        title: 'Card fraud operations tooling',
        description:
          'Optimized suspicious-activity handling with a web interface and SQL views, plus streamlined quarterly fraud reporting.',
        tags: ['SQL', 'Internal tools'],
      },
    ],
  },

  skills: {
    eyebrow: 'Skills',
    title: 'Stack & tools',
    groups: [
      { group: 'Languages', items: ['TypeScript', 'JavaScript', 'SQL'] },
      {
        group: 'Frontend',
        items: ['React', 'Next.js', 'Redux', 'Zustand', 'Angular 2+', 'AngularJS'],
      },
      { group: 'Backend', items: ['Node.js', 'Nest.js', 'Express'] },
      {
        group: 'Data',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake', 'GraphQL', 'REST'],
      },
      { group: 'Infra & tooling', items: ['Docker', 'Kafka', 'NX monorepo', 'Snyk'] },
      {
        group: 'AI / productivity',
        items: ['Prompt engineering', 'AI-augmented workflows', 'AI framework design'],
      },
    ],
  },

  experience: {
    eyebrow: 'Experience',
    title: 'Seven years, five teams',
    items: [
      {
        period: 'Aug 2020 — Present',
        company: 'Techery',
        mode: 'Hybrid',
        role: 'Sr. Full Stack Engineer → Team Lead → Engineering Manager',
        summary:
          'Enterprise e-commerce and a global music analytics programme. Led the AngularJS → Next.js migration, App Router transition, greenfield NX monorepo architecture, CMS release automation, and an internal AI wrapper. Promoted to EM: six engineers, an assessment system used for salary reviews, technical interviews.',
      },
      {
        period: 'Jan 2020 — Dec 2020',
        company: 'GoMotopia',
        mode: 'Remote',
        role: 'Full Stack Engineer',
        summary:
          'Full-stack architecture for gomotopia.com — frontend, backend, database — with Algolia vehicle search and SendGrid transactional email.',
      },
      {
        period: 'Dec 2019 — Jul 2020',
        company: 'Fyutura',
        mode: 'Hybrid',
        role: 'Full Stack Engineer',
        summary:
          'Bid system for building developments: live auctions with real-time bidding across multiple rooms, plus a step-by-step modular refactoring plan.',
      },
      {
        period: 'Mar 2019 — Sep 2019',
        company: 'SDK.Finance',
        mode: 'Remote',
        role: 'Frontend Engineer',
        summary: 'Financial dashboard UI: filtering, pagination, and sorting components.',
      },
      {
        period: 'Sep 2018 — Nov 2019',
        company: 'Idea Bank',
        mode: 'On site',
        role: 'Full Stack Engineer · Card Security',
        summary:
          'Optimized suspicious-activity handling with a web interface and SQL views; streamlined quarterly fraud and achievement reporting.',
      },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'Engineer first, manager when it helps',
    // Drop a photo in /public and set this to e.g. '/portrait.jpg'.
    portrait: null,
    portraitAlt: 'Mykhailo Klypalskyi',
    paragraphs: [
      "I've spent the last six years at Techery growing from senior engineer to team lead to engineering manager of six — while staying hands-on: migrating an AngularJS platform to Next.js and then to App Router, designing a greenfield NX monorepo architecture, and building an internal AI wrapper that reads Jira tasks and drives implementation.",
      'I care about measurable outcomes: 25% faster delivery through sprint ownership models, 40% fewer production bugs, 2+ hours saved per release through CMS migration automation. Based in Cambrils, Spain; working remotely across distributed teams.',
    ],
    chips: ['English', 'Ukrainian · native'],
  },

  contact: {
    eyebrow: 'Contact',
    headline: "Let's talk",
    blurb:
      'Open to senior full stack and engineering-lead roles. The fastest way to reach me is email.',
    ctas: [
      { label: 'klypalskyi@gmail.com', href: 'mailto:klypalskyi@gmail.com', variant: 'accent' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/mike-klypalskyi', variant: 'outline' },
      { label: 'GitHub', href: 'https://github.com/Klypalskyi', variant: 'outline' },
    ],
    footerNote: 'Cambrils, Spain',
  },
}

export default site
