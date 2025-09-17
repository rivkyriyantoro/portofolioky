import { Navigation } from "@/components/navigation"
import { AnimatedTechHero } from "@/components/animated-tech-hero"
import { TechnologiesSection } from "@/components/technologies-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="">
        <AnimatedTechHero />
        <TechnologiesSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}