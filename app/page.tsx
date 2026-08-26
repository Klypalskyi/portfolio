import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Nav } from '@/components/Nav'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'

/**
 * The whole portfolio is one page. Section order is fixed here; the content of
 * every section comes from `content/site.config.ts`.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Skills />
        <Experience />
        <About />
      </main>
      <Contact />
    </>
  )
}
