import { Card } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

const credentials = [
  {
    number: "15+",
    label: "Anos de Experiência"
  },
  {
    number: "500+",
    label: "Clientes Satisfeitos"
  },
  {
    number: "2000+",
    label: "Casos Resolvidos"
  },
  {
    number: "98%",
    label: "Taxa de Aprovação"
  }
]

export function Credentials() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Números que Falam por Si
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma trajetória de sucesso construída com credibilidade e resultados comprovados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <Card key={index} className="p-8 text-center bg-white border-border">
              <div className="text-4xl font-bold text-primary mb-2">
                {credential.number}
              </div>
              <p className="text-muted-foreground font-medium">
                {credential.label}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-primary mb-6">Certificações e Reconhecimentos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">OAB - Ordem dos Advogados do Brasil</p>
                <p className="text-muted-foreground text-sm">Inscritos regularizados e em dia</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Certificação em Mediação</p>
                <p className="text-muted-foreground text-sm">Especialistas em resolução de conflitos</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Associado ABRADE</p>
                <p className="text-muted-foreground text-sm">Associação Brasileira de Direito Empresarial</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">ISO 9001</p>
                <p className="text-muted-foreground text-sm">Certificação de gestão da qualidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
