import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Nav } from '@/components/Nav'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'

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
