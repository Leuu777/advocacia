'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">S&A</span>
          </div>
          <span className="font-semibold text-primary text-lg hidden sm:inline">Silva & Associados</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-primary transition-colors text-sm">
            Início
          </Link>
          <Link href="/sobre" className="text-foreground hover:text-primary transition-colors text-sm">
            Sobre
          </Link>
          <Link href="/areas" className="text-foreground hover:text-primary transition-colors text-sm">
            Áreas de Atuação
          </Link>
          <Link href="/servicos" className="text-foreground hover:text-primary transition-colors text-sm">
            Serviços
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition-colors text-sm">
            Blog
          </Link>
          <Link href="/contato" className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity">
            Contato
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-border py-4 px-4 space-y-3">
          <Link href="/" className="block text-foreground hover:text-primary transition-colors py-2">
            Início
          </Link>
          <Link href="/sobre" className="block text-foreground hover:text-primary transition-colors py-2">
            Sobre
          </Link>
          <Link href="/areas" className="block text-foreground hover:text-primary transition-colors py-2">
            Áreas de Atuação
          </Link>
          <Link href="/servicos" className="block text-foreground hover:text-primary transition-colors py-2">
            Serviços
          </Link>
          <Link href="/blog" className="block text-foreground hover:text-primary transition-colors py-2">
            Blog
          </Link>
          <Link href="/contato" className="block bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity">
            Contato
          </Link>
        </nav>
      )}
    </header>
  )
}
