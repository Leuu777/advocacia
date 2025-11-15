import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Pronto para Resolver Sua Questão Jurídica?
        </h2>
        <p className="text-lg opacity-95 leading-relaxed">
          Entre em contato conosco hoje mesmo. Oferecemos consulta inicial sem compromisso para entender melhor sua necessidade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/contato"
            className="bg-primary-foreground text-primary px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity"
          >
            Agendar Consulta Gratuita
          </Link>
          <a 
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded font-medium hover:bg-primary-foreground hover:text-primary transition-all"
          >
            WhatsApp Direto
          </a>
        </div>
      </div>
    </section>
  )
}
