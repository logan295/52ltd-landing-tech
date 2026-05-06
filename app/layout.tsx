import type { Metadata } from 'next'
import './globals.css'
import PageBackground from './components/PageBackground'
import IconGrid from './components/IconGrid'

export const metadata: Metadata = {
  title: '52 Limited — Brand & Creative Talent',
  description: '52 Limited places Art Directors, Brand Designers, and Creative Directors with companies building world-class in-house design teams. Boutique. Senior-led. Nationally.',
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
        <IconGrid />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
