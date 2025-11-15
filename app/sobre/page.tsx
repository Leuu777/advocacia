import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { TeamSection } from "@/components/team-section"
import { MissionValues } from "@/components/mission-values"

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <MissionValues />
      <TeamSection />
      <Footer />
    </main>
  )
}
