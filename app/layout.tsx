import type { Metadata, Viewport } from 'next'
import { Manrope, Sora } from 'next/font/google'
import { MotionEffects } from '@/components/MotionEffects'
import { site } from '@/content/site.config'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.meta.url),
  title: site.meta.title,
  description: site.meta.description,
  keywords: site.meta.keywords,
  authors: [{ name: site.person.name }],
  creator: site.person.name,
  openGraph: {
    type: 'website',
    url: site.meta.url,
    title: site.meta.title,
    description: site.meta.description,
    siteName: site.person.name,
    ...(site.meta.ogImage ? { images: [{ url: site.meta.ogImage }] } : {}),
  },
  twitter: {
    card: site.meta.ogImage ? 'summary_large_image' : 'summary',
    title: site.meta.title,
    description: site.meta.description,
    ...(site.meta.ogImage ? { images: [site.meta.ogImage] } : {}),
  },
  alternates: { canonical: site.meta.url },
}

export const viewport: Viewport = {
  themeColor: '#F3F5F9',
}

/**
 * Runs before first paint so `[data-reveal]` elements are hidden from the very
 * first frame instead of flashing in and then jumping. If motion is off, the
 * class is never added and the CSS leaves everything visible.
 */
const MOTION_BOOTSTRAP = `
(function () {
  try {
    if (${site.flags.motion} && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('motion');
    }
  } catch (e) {}
})();
`

/** Structured data so search engines read the page as a person, not a blog. */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.person.name,
  jobTitle: site.person.role,
  email: `mailto:${site.person.email}`,
  url: site.meta.url,
  address: { '@type': 'PostalAddress', addressLocality: site.person.location },
  sameAs: site.person.links.map((link) => link.href),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOTSTRAP }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        {children}
        <MotionEffects />
      </body>
    </html>
  )
}
