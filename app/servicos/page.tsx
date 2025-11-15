import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </main>
  )
}
