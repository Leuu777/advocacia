import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Principais Mudanças no Direito Trabalhista em 2025",
    excerpt: "Conheça as alterações legislativas que afetarão as relações trabalhistas no próximo ano e como se adequar.",
    date: "15 de novembro, 2025",
    author: "Dr. Felipe Santos",
    category: "Direito Trabalhista"
  },
  {
    id: 2,
    title: "Guia Completo: Divórcio Litigioso vs. Consensual",
    excerpt: "Entenda as diferenças entre os procedimentos de divórcio e qual é a melhor opção para seu caso.",
    date: "12 de novembro, 2025",
    author: "Dra. Amanda Costa",
    category: "Direito de Família"
  },
  {
    id: 3,
    title: "Proteção de Dados: LGPD e suas Implicações Jurídicas",
    excerpt: "Saiba como a Lei Geral de Proteção de Dados impacta empresas e indivíduos no Brasil.",
    date: "8 de novembro, 2025",
    author: "Dr. Marcus Silva",
    category: "Direito Empresarial"
  },
  {
    id: 4,
    title: "Direitos do Consumidor: O que você precisa saber",
    excerpt: "Conheça seus direitos como consumidor e como se proteger de práticas comerciais abusivas.",
    date: "5 de novembro, 2025",
    author: "Dra. Carolina Mendes",
    category: "Direito Civil"
  },
  {
    id: 5,
    title: "Contrato de Compra e Venda: Cláusulas Essenciais",
    excerpt: "Guia prático sobre as cláusulas mais importantes em contratos de compra e venda imobiliária.",
    date: "1 de novembro, 2025",
    author: "Dr. Marcus Silva",
    category: "Direito Empresarial"
  },
  {
    id: 6,
    title: "Medidas Protetivas: Como Solicitar e se Proteger",
    excerpt: "Informações sobre medidas protetivas de urgência e como acessá-las quando necessário.",
    date: "28 de outubro, 2025",
    author: "Dra. Carolina Mendes",
    category: "Direito Penal"
  }
]

export function BlogGrid() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="p-6 border-border bg-secondary hover:shadow-lg transition-shadow flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 flex-grow">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              <div className="space-y-2 mb-4 text-sm text-muted-foreground border-t border-border pt-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
              </div>
              <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Ler Artigo
                <ArrowRight size={16} />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
