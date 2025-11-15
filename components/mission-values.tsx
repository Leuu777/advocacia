import { Card } from "@/components/ui/card"
import { Target, Heart, Shield } from 'lucide-react'

export function MissionValues() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
          Missão, Visão e Valores
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 border-border bg-white">
            <Target className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fornecer consultoria jurídica especializada e soluções eficazes que protejam os direitos e interesses de nossos clientes, promovendo segurança jurídica e excelência profissional.
            </p>
          </Card>

          <Card className="p-8 border-border bg-white">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecido como um escritório de referência em advocacia no Brasil, conhecido por expertise, integridade e compromisso com a satisfação dos clientes.
            </p>
          </Card>

          <Card className="p-8 border-border bg-white">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Integridade, competência técnica, comprometimento com resultados, confidencialidade absoluta e respeito aos direitos humanos e à ética profissional.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
