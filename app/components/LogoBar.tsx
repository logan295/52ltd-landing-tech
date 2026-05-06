'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

const logos = [
  { src: '/logos/clients/nike.png',             alt: 'Nike',            height: '100px' },
  { src: '/logos/clients/jordan.png',           alt: 'Jordan',          height: '120px' },
  { src: '/logos/clients/adidas.png',           alt: 'Adidas',          height: '72px'  },
  { src: '/logos/clients/cambia.png',           alt: 'Cambia',          height: '65px'  },
  { src: '/logos/clients/ebay.png',             alt: 'eBay',            height: '65px'  },
  { src: '/logos/clients/microsoft.png',        alt: 'Microsoft',       height: '140px' },
  { src: '/logos/clients/wieden-kennedy.png',   alt: 'Wieden+Kennedy',  height: '58px'  },
  { src: '/logos/clients/hanna-andersson.png',  alt: 'Hanna Andersson', height: '80px'  },
  { src: '/logos/clients/under-armour.png',     alt: 'Under Armour',    height: '72px'  },
  { src: '/logos/clients/dakine.svg',           alt: 'Dakine',          height: '130px' },
  { src: '/logos/clients/north-face.svg',       alt: 'The North Face',  height: '130px' },
  { src: '/logos/clients/jaguar-landrover.png', alt: 'JLR',             height: '65px'  },
  { src: '/logos/clients/vf-corporation.png',   alt: 'VF Corporation',  height: '72px'  },
]

const track = [...logos, ...logos, ...logos]

export default function LogoBar() {
  useScrollReveal()

  return (
    <section
      style={{
        display: 'block',
        background: '#EFF4F7',
        paddingTop: '60px',
        paddingBottom: '60px',
        overflow: 'hidden',
        borderTop: '1px solid rgba(27,36,40,0.08)',
        borderBottom: '1px solid rgba(27,36,40,0.08)',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.3333%); }
        }
      `}} />

      <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-navy)',
            marginBottom: '0.625rem',
          }}
        >
          We don&apos;t like to drop names so here are some logos.
        </h2>
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '1.0625rem',
            color: 'rgba(27,36,40,0.7)',
            lineHeight: 1.75,
          }}
        >
          Through contract, contract-to-hire, and direct hire, we&apos;ve worked with some of the
          world&apos;s most recognizable brands.
        </p>
      </div>

      <div
        style={{
          overflow: 'hidden',
          width: '100%',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            animation: 'marquee 50s linear infinite',
            willChange: 'transform',
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                height: '160px',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '100px',
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                style={{
                  height: logo.height,
                  width: 'auto',
                  maxWidth: '200px',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
