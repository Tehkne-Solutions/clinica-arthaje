import type { Metadata } from 'next'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { arthajetheme } from '@/theme/theme'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clínica ArThaJe | Fisioterapia e Estética em Itambacuri-MG',
  description: 'Dra. Hildete Ferreira (CREFITO 430943-F) oferece tratamentos avançados de fisioterapia e estética em Itambacuri. Agende sua consulta.',
  keywords: 'Fisioterapia Itambacuri, Estética Itambacuri, Dra. Hildete Ferreira, Clínica ArThaJe, CEP 39830-000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={arthajetheme}>
          <CssBaseline />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
