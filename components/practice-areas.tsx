import { Card } from "@/components/ui/card"
import { Scale, Gavel, Users, Briefcase, Heart } from 'lucide-react'

const areas = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Contratos, responsabilidade civil, indenizações e questões de propriedade"
  },
  {
    icon: Gavel,
    title: "Direito Penal",
    description: "Defesa criminal, recursos e orientação em processos penais"
  },
  {
    icon: Users,
    title: "Direito Trabalhista",
    description: "Relações trabalhistas, rescisões e questões previdenciárias"
  },
  {
    icon: Heart,
    title: "Direito de Família",
    description: "Divórcio, guarda, pensão alimentícia e questões familiares"
  },
  {
    icon: Briefcase,
    title: "Direito Empresarial",
    description: "Contratos comerciais, fusões e constituição de empresas"
  },
]

export function PracticeAreas() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cobrimos as principais áreas do direito com profissionalismo e dedicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border bg-white">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground">
                  {area.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
