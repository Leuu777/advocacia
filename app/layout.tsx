import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Silva & Associados - Advocacia Especializada | Direito Civil, Penal, Trabalhista, Família e Empresarial',
  description: 'Escritório de advocacia em São Paulo especializado em direito civil, penal, trabalhista, família e empresarial. Mais de 15 anos de experiência e 500+ clientes satisfeitos. Consultoria jurídica e defesa em processos judiciais.',
  keywords: 'advocacia, advogado, direito civil, direito penal, direito trabalhista, direito de família, direito empresarial, São Paulo',
  authors: [{ name: 'Silva & Associados' }],
  creator: 'Silva & Associados',
  publisher: 'Silva & Associados',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://silvaeassociados.com.br',
    title: 'Silva & Associados - Advocacia Especializada',
    description: 'Escritório de advocacia especializado em direito civil, penal, trabalhista, família e empresarial.',
    siteName: 'Silva & Associados',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silva & Associados - Advocacia Especializada',
    description: 'Escritório de advocacia especializado em múltiplas áreas do direito.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', content: '#001a4d' },
    { media: '(prefers-color-scheme: dark)', content: '#ffffff' },
  ],
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
