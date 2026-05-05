import type { Metadata } from 'next'
import './globals.css'
import PageBackground from './components/PageBackground'

export const metadata: Metadata = {
  title: '52 Limited — Boutique Digital Staffing & Recruiting',
  description: 'Portland-based boutique staffing agency specializing in creative, digital, and technology talent placement.',
  keywords: 'digital staffing, creative recruiting, technology talent, Portland, boutique agency',
  openGraph: {
    title: '52 Limited',
    description: 'Boutique digital staffing & recruiting agency.',
    url: 'https://52ltd.com',
    siteName: '52 Limited',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
