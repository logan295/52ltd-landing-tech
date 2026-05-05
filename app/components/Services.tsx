'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    label: 'CONTRACT',
    title: 'Contract',
    body: 'Specialized talent for defined periods. Scale up or down based on workload. No long-term commitment.',
  },
  {
    label: 'CONTRACT-TO-HIRE',
    title: 'Contract-to-Hire',
    body: 'Evaluate talent in your environment before a permanent offer. Typical 3–6 month trial. We handle payroll during the trial.',
  },
  {
    label: 'DIRECT HIRE',
    title: 'Direct Hire',
    body: 'Full-cycle recruiting for permanent roles. Sourcing, screening, interviewing, reference checks, and offer negotiation. You only pay when the candidate accepts.',
  },
  {
    label: 'PAYROLL SERVICES',
    title: 'Payroll Services',
    body: 'We manage payroll, benefits, workers\' comp, unemployment insurance, and tax compliance. Contractors are our W2 employees. 50-state coverage.',
  },
]

export default function Services() {
  useScrollReveal()

  return (
    <section
      style={{
        background: 'transparent',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .service-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: none;
          border-top: 3px solid var(--color-blue);
          padding: 40px 36px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.15);
          transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,146,203,0.15);
          border-top-color: var(--color-blue);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}} />

      <div className="container">
        <p className="reveal section-label" style={{ fontFamily: 'var(--font-primary)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-blue)', marginBottom: '20px', display: 'block' }}>
          Our Services
        </p>
        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
            fontWeight: 700,
            color: 'var(--color-white)',
            background: 'none',
            marginBottom: '0.75rem',
            maxWidth: '540px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Multiple ways to work with us.
        </h2>
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '540px',
            lineHeight: 1.75,
            marginBottom: '3rem',
          }}
        >
          Match your engagement model to your hiring strategy, timeline, and budget.
        </p>

        <div className="reveal-stagger services-grid">
          {services.map((item, i) => (
            <div
              key={item.title}
              className="service-card reveal"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--color-blue)',
                  marginBottom: '12px',
                  display: 'block',
                }}
              >
                {item.label}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: 'var(--color-navy)',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.9375rem',
                  color: 'rgba(27,36,40,0.65)',
                  lineHeight: 1.75,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
