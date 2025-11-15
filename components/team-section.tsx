import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: "Dr. Marcus Silva",
    role: "Sócio Fundador - Direito Civil e Empresarial",
    bio: "Formado pela USP, especialista em direito civil com mais de 18 anos de experiência. Responsável pela área de direito civil e empresarial.",
    initials: "MS"
  },
  {
    name: "Dra. Carolina Mendes",
    role: "Sócia - Direito Penal e Criminal",
    bio: "Doutora em direito penal pela Universidade de São Paulo. Especialista em defesa criminal com 14 anos de atuação.",
    initials: "CM"
  },
  {
    name: "Dr. Felipe Santos",
    role: "Sócio - Direito Trabalhista",
    bio: "Especialista em direito do trabalho. Com 12 anos de experiência, atua em questões trabalhistas e previdenciárias.",
    initials: "FS"
  },
  {
    name: "Dra. Amanda Costa",
    role: "Associada - Direito de Família",
    bio: "Especialista em direito de família e sucessões. Formada pela PUC, com foco em mediação familiar.",
    initials: "AC"
  }
]

export function TeamSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Equipe de Profissionais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advogados experientes e comprometidos com a excelência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="p-6 border-border bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                {member.initials}
              </div>
              <h3 className="text-lg font-bold text-primary text-center mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-muted-foreground text-center mb-3">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {member.bio}
              </p>
              <div className="flex gap-3 justify-center">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
