'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

const roles = [
  'UX Researcher',
  'UX Engineer',
  'Product Designer',
  'UX Lead',
  'Content Designer',
  'UX/UI Designer',
  'UX Strategist',
  'Interaction Designer',
  'Design Systems Lead',
  'Product Manager',
]

const stats = [
  { value: '20+', label: 'Years placing creative & digital talent' },
  { value: '2–3 wks', label: 'Average time from intake to placement' },
  { value: '45-day', label: 'Placement guarantee' },
  { value: '3–5', label: 'Vetted candidates delivered per search' },
]

export default function Hero() {
  useScrollReveal()

  return (
    <section
      className="section-dark"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 20px)',
        paddingBottom: '80px',
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 40% 50%, rgba(27,36,40,0.85) 0%, rgba(27,36,40,0.4) 60%, transparent 100%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
      {/* Decorative background gradients */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-200px',
          right: '-200px',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,146,203,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-200px',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(130,206,244,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '820px' }}>
          <p
            className="reveal section-label"
            style={{ fontFamily: 'var(--font-primary)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', display: 'block' }}
          >
            Boutique UX &amp; Product Talent
          </p>

          <h1
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--color-white)',
              marginBottom: '1.75rem',
            }}
          >
            The right UX hire,<br />
            <span style={{ color: 'var(--color-blue-light)', textShadow: '0 0 80px rgba(0,146,203,0.3)' }}>without the search.</span>
          </h1>

          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '1.25rem',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '32px',
              maxWidth: '560px',
            }}
          >
            52 Limited connects growing companies with senior UX professionals, vetted by recruiters who actually understand the craft.
          </p>

          <div
            className="reveal"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '36px' }}
          >
            {roles.map((role) => (
              <span
                key={role}
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '36px',
                  padding: '0 18px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(0,146,203,0.12)',
                  border: '1px solid rgba(0,146,203,0.3)',
                  color: 'var(--color-blue-light)',
                  letterSpacing: '0.01em',
                }}
              >
                {role}
              </span>
            ))}
          </div>

          <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a
              href="#get-started"
              className="btn btn-primary"
              style={{ height: '56px', padding: '0 40px', fontSize: '0.875rem', borderRadius: '6px', animation: 'pulse-glow 3s ease-in-out infinite' }}
            >
              Book a Call
            </a>
            <a
              href="#how-it-works"
              style={{
                height: '56px',
                padding: '0 40px',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.85)',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                transition: 'all 300ms ease',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.color = '#FFFFFF'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Divider above stats */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '2rem' }} />

        <div
          className="reveal reveal-stagger"
          style={{
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '0',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '32px 40px',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              style={{
                paddingRight: i < stats.length - 1 ? '2rem' : '0',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                paddingLeft: i > 0 ? '2rem' : '0',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--color-blue)',
                  lineHeight: 1,
                  marginBottom: '0.375rem',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.55)',
                  letterSpacing: '0.02em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
