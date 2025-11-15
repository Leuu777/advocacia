import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Silva & Associados</h4>
            <p className="text-sm opacity-80">
              Escritório de advocacia especializado em soluções jurídicas eficazes e personalizadas com mais de 15 anos de experiência.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">Início</Link></li>
              <li><Link href="/sobre" className="opacity-80 hover:opacity-100 transition-opacity">Sobre</Link></li>
              <li><Link href="/areas" className="opacity-80 hover:opacity-100 transition-opacity">Áreas de Atuação</Link></li>
              <li><Link href="/servicos" className="opacity-80 hover:opacity-100 transition-opacity">Serviços</Link></li>
              <li><Link href="/blog" className="opacity-80 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+5511999999999" className="opacity-80 hover:opacity-100 transition-opacity">(11) 9 9999-9999</a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@silvaeassociados.com.br" className="opacity-80 hover:opacity-100 transition-opacity">contato@silvaeassociados.com.br</a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="opacity-80">São Paulo - SP</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>&copy; {currentYear} Silva & Associados. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:opacity-100 transition-opacity">Política de Privacidade</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">Termos de Uso</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">OAB Inscrição</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
