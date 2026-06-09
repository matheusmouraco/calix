import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calix Family Office',
  description: 'Family Office & Consultoria de Investimentos. Representamos os interesses da sua família com independência total.',
  openGraph: {
    title: 'Calix Family Office',
    description: 'Gestão inteligente do patrimônio familiar com independência total e ética rigorosa.',
    url: 'https://calix-fo.vercel.app',
    siteName: 'Calix Family Office',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
