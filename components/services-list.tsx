import { Card } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: "Consultoria Jurídica",
    description: "Orientação profissional sobre questões legais, análise de contratos e avaliação de risco jurídico.",
    highlights: ["Análise de contratos", "Pareceres jurídicos", "Avaliação de riscos", "Consultoria preventiva"]
  },
  {
    title: "Advocacia Contenciosa",
    description: "Representação em processos judiciais de qualquer natureza, com estratégia focada em resultados.",
    highlights: ["Defesa em processos", "Recursos judiciais", "Mediação e conciliação", "Arbitragem"]
  },
  {
    title: "Direito Contratual",
    description: "Elaboração, revisão e negociação de contratos comerciais e relacionados.",
    highlights: ["Contratos comerciais", "Contratos de parceria", "Documentação legal", "Cláusulas especializadas"]
  },
  {
    title: "Assessoria Empresarial",
    description: "Suporte completo para constituição, reorganização e operação de empresas.",
    highlights: ["Constituição de empresas", "Fusões e aquisições", "Questões societárias", "Conformidade legal"]
  },
  {
    title: "Direito Trabalhista",
    description: "Representação em questões trabalhistas e previdenciárias, tanto para empresas quanto colaboradores.",
    highlights: ["Reclamações trabalhistas", "Questões previdenciárias", "Rescisões contratuais", "Negociações"]
  },
  {
    title: "Direito de Família",
    description: "Assistência em questões familiares, com abordagem sensível e resolução pacífica.",
    highlights: ["Divórcio litigioso", "Guarda de menores", "Pensão alimentícia", "Mediação familiar"]
  }
]

export function ServicesList() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 border-border bg-secondary hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
