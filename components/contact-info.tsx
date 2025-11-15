import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary">Informações de Contato</h2>

      <Card className="p-6 border-border bg-white">
        <div className="flex gap-4 mb-8">
          <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-foreground mb-2">Telefone</h3>
            <p className="text-muted-foreground">(11) 3000-1234</p>
            <p className="text-muted-foreground">(11) 9 9999-9999 (WhatsApp)</p>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">contato@silvaeassociados.com.br</p>
            <p className="text-muted-foreground">consulta@silvaeassociados.com.br</p>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-foreground mb-2">Endereço</h3>
            <p className="text-muted-foreground">
              Av. Paulista, 1234<br />
              Conjunto 1200<br />
              São Paulo - SP, 01311-100
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-foreground mb-2">Horário de Atendimento</h3>
            <p className="text-muted-foreground">
              Segunda a Sexta<br />
              08:00 - 18:00
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-border bg-secondary">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-foreground mb-2">Resposta Rápida</h3>
            <p className="text-muted-foreground text-sm">
              Sua mensagem será respondida em até 24 horas úteis. Para assuntos urgentes, ligue diretamente ou envie mensagem via WhatsApp.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-border bg-white">
        <h3 className="font-bold text-foreground mb-3">Encontre-nos</h3>
        <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground text-center">
            Mapa (integração com Google Maps pode ser adicionada)
          </p>
        </div>
      </Card>
    </div>
  )
}
