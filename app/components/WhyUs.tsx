'use client'

import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const differentiators = [
  {
    pill: 'PASSIVE CANDIDATES',
    title: 'Hard-to-Find Talent',
    body: 'Access to passive candidates not actively job searching. Deep networks in UX, product, and creative disciplines.',
  },
  {
    pill: 'VALUES-FIRST',
    title: 'Cultural Alignment',
    body: 'We assess fit, not just skills. Behavioral interviews, soft skills evaluation, and values alignment built into every search.',
  },
  {
    pill: '5–7 DAYS',
    title: 'Fast Turnaround',
    body: 'First qualified candidates within 5–7 days of intake. Typical placement in 2–3 weeks, not months.',
  },
  {
    pill: '4 MODELS',
    title: 'Flexible Models',
    body: 'Contract, contract-to-hire, direct hire, or payroll services. Choose the engagement model that fits your needs.',
  },
  {
    pill: 'ALL 50 STATES',
    title: 'Nationwide Coverage',
    body: 'Fully licensed and compliant to place talent in all 50 states. Remote, hybrid, and on-site placements supported.',
  },
  {
    pill: '3–5 CANDIDATES',
    title: 'Quality Over Volume',
    body: 'Relationship-driven specialists. We deliver 3–5 candidates who fit and perform, not a stack of resumes.',
  },
]

function WhyCard({ pill, title, body }: { pill: string; title: string; body: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: hovered ? 'rgba(0,146,203,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(0,146,203,0.3)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '20px',
        padding: '40px 36px',
        transition: 'all 250ms ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      {/* Corner gradient accent */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle at top right, rgba(0,146,203,0.12), transparent 70%)',
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 250ms ease',
        }}
      />

      {/* Pill label */}
      <span
        style={{
          display: 'inline-block',
          background: 'rgba(0,146,203,0.15)',
          border: '1px solid rgba(0,146,203,0.35)',
          color: 'var(--color-blue)',
          fontSize: '0.6875rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          padding: '4px 12px',
          borderRadius: '9999px',
          marginBottom: '16px',
          fontFamily: 'var(--font-primary)',
        }}
      >
        {pill}
      </span>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.375rem',
          fontWeight: 700,
          color: 'var(--color-white)',
          marginBottom: '12px',
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '0.9375rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.75,
        }}
      >
        {body}
      </p>
    </div>
  )
}

export default function WhyUs() {
  useScrollReveal()

  return (
    <section
      className="section-dark"
      style={{ paddingTop: '80px', paddingBottom: '80px', background: 'transparent' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .why-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 64px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .why-intro {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}} />

      <div className="container">
        {/* Intro: heading left, paragraph right */}
        <div className="why-intro">
          <div>
            <p
              className="reveal"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '20px',
                display: 'block',
              }}
            >
              Why 52 Limited
            </p>
            <h2
              className="reveal"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: 'var(--color-white)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Boutique by design. Senior-led by default.
            </h2>
          </div>
          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.75,
              paddingTop: '16px',
              margin: 0,
            }}
          >
            We built 52 Limited to be the agency we always wished existed. Senior recruiters on every search. Real relationships. Quality over volume.
          </p>
        </div>

        {/* 2-column card grid */}
        <div className="reveal reveal-stagger why-grid">
          {differentiators.map((item) => (
            <WhyCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
