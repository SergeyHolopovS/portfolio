import type { ComponentType } from 'react'
import { Container } from './components/Container'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Learning } from './components/sections/Learning'
import { Projects } from './components/sections/Projects'
import { Quote } from './components/sections/Quote'
import { Skills } from './components/sections/Skills'
import { Stats } from './components/sections/Stats'
import { siteConfig } from './config/site.config'
import type { SectionKey } from './config/types'

const SECTION_COMPONENTS: Record<SectionKey, ComponentType> = {
  stats: Stats,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  learning: Learning,
  quote: Quote,
  contact: Contact,
}

function App() {
  const sections = siteConfig.sectionOrder.filter((key) => siteConfig.sectionVisibility[key])

  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        {sections.map((key) => {
          const Section = SECTION_COMPONENTS[key]
          return <Section key={key} />
        })}
        <Footer />
      </Container>
    </>
  )
}

export default App
