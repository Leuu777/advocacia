import Image from "next/image"

export function AboutHero() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Sobre Silva & Associados
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundado em 2010, o escritório Silva & Associados surgiu com o propósito de oferecer consultoria jurídica de excelência, combinando conhecimento técnico profundo com atendimento personalizado.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ao longo de mais de 15 anos, consolidamos uma trajetória de sucesso baseada na confiança de nossos clientes, qualidade do trabalho desenvolvido e comprometimento com resultados.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa equipe é composta por profissionais experientes e altamente qualificados, dedicados a resolver as mais complexas questões jurídicas com eficiência e integridade.
            </p>
          </div>
          <div className="relative h-80 md:h-96 bg-muted rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?key=about1"
              alt="Escritório Silva & Associados"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
