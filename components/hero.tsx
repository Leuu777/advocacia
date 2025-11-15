import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded text-sm font-medium">
              Desde 2015 ao seu serviço
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Expertise Jurídica com Credibilidade e Clareza
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Escritório especializado em direito civil, penal, trabalhista, família e empresarial. Oferecemos soluções jurídicas eficazes e personalizadas para pessoas físicas e jurídicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/contato"
                className="bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity text-center"
              >
                Agendar Consulta
              </Link>
              <Link 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-6 py-3 rounded font-medium hover:bg-primary hover:text-primary-foreground transition-all text-center"
              >
                WhatsApp
              </Link>
            </div>
          </div>
          <div className="relative h-80 md:h-96 bg-muted rounded-lg overflow-hidden">
            <Image
              src="/professional-office-environment-with-lawyers.jpg"
              alt="Escritório de advocacia"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
