import { getHomepageData } from '@/lib/sanity.queries'
import { getServerLanguage } from '@/lib/language'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Hero from '@/components/Sections/Hero'
import About from '@/components/Sections/About'
import Projects from '@/components/Sections/Projects'
import Skills from '@/components/Sections/Skills'
import Contact from '@/components/Sections/Contact'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const language = await getServerLanguage()
  console.log(`[SERVER] Home page loading with language: ${language}`)
  const data = await getHomepageData(language)

  return (
    <>
      <Header />
      <main>
        {data?.profile && <Hero profile={data.profile} />}
        {data?.about && <About about={data.about} />}
        {data?.projects && data.projects.length > 0 && <Projects projects={data.projects} />}
        {data?.skills && data.skills.length > 0 && <Skills skills={data.skills} />}
        <Contact />
      </main>
      {data?.socialLinks && <Footer socialLinks={data.socialLinks} />}
    </>
  )
}
