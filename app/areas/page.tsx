import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Scale, Gavel, Users, Briefcase, Heart, FileText } from 'lucide-react'

const practiceAreas = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Atuamos em contratos, responsabilidade civil, indenizações e questões de propriedade.",
    details: [
      "Contratos comerciais e civis",
      "Responsabilidade civil",
      "Indenizações",
      "Questões de propriedade",
      "Sucessões"
    ]
  },
  {
    icon: Gavel,
    title: "Direito Penal",
    description: "Defesa criminal especializada com foco em direitos do acusado e recursos judiciais.",
    details: [
      "Defesa em processos criminais",
      "Recursos judiciais",
      "Mediação penal",
      "Questões de segurança",
      "Direitos constitucionais"
    ]
  },
  {
    icon: Users,
    title: "Direito Trabalhista",
    description: "Expertise em relações trabalhistas, rescisões e questões previdenciárias.",
    details: [
      "Reclamações trabalhistas",
      "Negociação de rescisões",
      "Questões previdenciárias",
      "Direitos do trabalhador",
      "Benefícios"
    ]
  },
  {
    icon: Heart,
    title: "Direito de Família",
    description: "Soluções pacíficas para questões familiares com sensibilidade e profissionalismo.",
    details: [
      "Divórcio litigioso e consensual",
      "Guarda de menores",
      "Pensão alimentícia",
      "Mediação familiar",
      "Sucessões hereditárias"
    ]
  },
  {
    icon: Briefcase,
    title: "Direito Empresarial",
    description: "Assessoria completa para constituição, operação e reorganização de empresas.",
    details: [
      "Constituição de empresas",
      "Fusões e aquisições",
      "Questões societárias",
      "Conformidade legal",
      "Contratos comerciais"
    ]
  },
  {
    icon: FileText,
    title: "Consultoria Jurídica",
    description: "Pareceres especializados e orientação estratégica para proteção de direitos.",
    details: [
      "Pareceres jurídicos",
      "Avaliação de riscos",
      "Consultoria preventiva",
      "Análise de documentos",
      "Orientação estratégica"
    ]
  }
]

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Áreas de Atuação
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cobrimos as principais áreas do direito com profissionalismo, dedicação e resultados comprovados
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card key={index} className="p-8 border-border bg-secondary hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.details.map((detail, dIndex) => (
                      <li key={dIndex} className="text-foreground text-sm flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Sua Situação Não se Encaixa?
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato conosco. Podemos ajudar em muitas outras questões jurídicas ou indicar o profissional adequado.
          </p>
          <Link 
            href="/contato"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity"
          >
            Agende uma Consulta
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
