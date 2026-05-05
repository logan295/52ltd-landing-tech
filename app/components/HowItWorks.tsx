'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Deep Intake',
    body: 'We understand the role, team dynamics, and priorities',
  },
  {
    number: '02',
    title: 'Calibrated Shortlist',
    body: '3–5 highly qualified, culture-matched candidates delivered',
  },
  {
    number: '03',
    title: 'Interview Support',
    body: 'Coordinated scheduling and candidate prep',
  },
  {
    number: '04',
    title: 'Offer Advisory',
    body: 'Competitive comp guidance and negotiation support',
  },
  {
    number: '05',
    title: 'On/Off-boarding',
    body: 'Performance monitoring, relationship management, and ongoing check-ins',
  },
]

export default function HowItWorks() {
  useScrollReveal()

  return (
    <section
      id="how-it-works"
      style={{
        background: 'transparent',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .steps-grid {
          position: relative;
        }
        .steps-grid::before {
          content: '';
          position: absolute;
          top: 28px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(0,146,203,0.3), transparent);
          pointer-events: none;
          z-index: 0;
        }
        @media (max-width: 768px) {
          .steps-grid::before { display: none; }
        }
        .step-inner {
          position: relative;
          z-index: 1;
          padding-top: 0;
          border-top: 2px solid transparent;
          transition: border-color 200ms ease, padding-top 200ms ease;
        }
        .step-inner:hover {
          border-top-color: var(--color-blue);
          padding-top: 16px;
        }
      `}} />

        <div className="container">
          <p className="reveal section-label" style={{ fontFamily: 'var(--font-primary)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', display: 'block' }}>
            How It Works
          </p>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              fontWeight: 700,
              color: 'var(--color-white)',
              marginBottom: '1.5rem',
              maxWidth: '540px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            From intake to offer in days, not months.
          </h2>

          <div className="reveal" style={{ marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(0,146,203,0.15)',
              border: '1px solid rgba(0,146,203,0.4)',
              color: 'var(--color-blue)',
              padding: '8px 20px',
              borderRadius: '9999px',
              fontFamily: 'var(--font-primary)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              2–3 Weeks Average
            </span>
          </div>

          <div
            className="reveal reveal-stagger steps-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2rem',
            }}
          >
            {steps.map((step) => (
              <div key={step.number} className="step-inner">
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3.5rem',
                    fontWeight: 700,
                    lineHeight: 1,
                    color: 'var(--color-blue-light)',
                    opacity: 1,
                    textShadow: '0 0 60px rgba(130,206,244,0.5)',
                    marginBottom: '12px',
                    userSelect: 'none',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-white)',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: '1.0625rem',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.75,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}
