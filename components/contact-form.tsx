'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, preencha os campos obrigatórios')
      return
    }

    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: ''
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary">Formulário de Contato</h2>
      
      {error && (
        <div className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {submitted && (
        <div className="flex gap-3 p-4 bg-green-50 border border-green-200 rounded">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-green-800">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Nome *
          </label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            className="bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Telefone
          </label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className="bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Área de Interesse
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-border bg-white rounded text-foreground"
          >
            <option value="">Selecione uma área</option>
            <option value="civil">Direito Civil</option>
            <option value="penal">Direito Penal</option>
            <option value="trabalhista">Direito Trabalhista</option>
            <option value="familia">Direito de Família</option>
            <option value="empresarial">Direito Empresarial</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Assunto
          </label>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Qual é o assunto?"
            className="bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Mensagem *
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Descreva sua situação em detalhes"
            className="bg-white min-h-32"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium py-2"
        >
          Enviar Mensagem
        </Button>

        <p className="text-xs text-muted-foreground">
          Respeitamos sua privacidade. Seus dados serão utilizados apenas para responder sua solicitação.
        </p>
      </form>
    </div>
  )
}
