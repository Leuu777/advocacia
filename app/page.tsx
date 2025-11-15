import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PracticeAreas } from "@/components/practice-areas"
import { Credentials } from "@/components/credentials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PracticeAreas />
      <Credentials />
      <CTA />
      <Footer />
    </main>
  )
}
