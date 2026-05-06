'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

const roles = [
  'Software Engineer',
  'Frontend Engineer',
  'Backend Engineer',
  'Full Stack Engineer',
  'DevOps Engineer',
  'Engineering Manager',
  'Staff Engineer',
  'Platform Engineer',
  'Cloud Architect',
  'Data Engineer',
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
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '20px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '820px' }}>
          <p
            className="reveal section-label"
            style={{ fontFamily: 'var(--font-primary)', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-blue)', marginBottom: '20px', display: 'block' }}
          >
            Technology &amp; Engineering Talent
          </p>

          <h1
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--color-navy)',
              marginBottom: '1.75rem',
              maxWidth: '760px',
            }}
          >
            Build the engineering team<br />
            <span style={{ color: '#1B2428' }}>your product needs.</span>
          </h1>

          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '1.25rem',
              lineHeight: 1.75,
              color: 'rgba(27,36,40,0.7)',
              marginBottom: '32px',
              maxWidth: '520px',
            }}
          >
            52 Limited places Software Engineers, DevOps leads, and Engineering Managers with companies scaling world-class technical teams. Boutique. Senior-led. Nationally.
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
                  background: 'rgba(0,146,203,0.08)',
                  border: '1px solid rgba(0,146,203,0.2)',
                  color: 'var(--color-blue)',
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
              style={{ height: '56px', padding: '0 40px', fontSize: '0.875rem', borderRadius: '6px' }}
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
                border: '1px solid rgba(27,36,40,0.25)',
                color: 'rgba(27,36,40,0.8)',
                background: 'rgba(27,36,40,0.04)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                transition: 'all 300ms ease',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(27,36,40,0.08)'
                e.currentTarget.style.borderColor = 'rgba(27,36,40,0.5)'
                e.currentTarget.style.color = '#1B2428'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(27,36,40,0.04)'
                e.currentTarget.style.borderColor = 'rgba(27,36,40,0.25)'
                e.currentTarget.style.color = 'rgba(27,36,40,0.8)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              See How It Works
            </a>
          </div>
        </div>

        <div
          className="reveal reveal-stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(27,36,40,0.1)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              style={{
                paddingLeft: i === 0 ? '0' : '32px',
                paddingRight: '32px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(27,36,40,0.1)' : 'none',
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
                  color: 'rgba(27,36,40,0.55)',
                  letterSpacing: '0.02em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
