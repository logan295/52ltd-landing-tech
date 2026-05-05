'use client'

import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const cards = [
  {
    number: '01',
    headline: 'The search has been open too long',
    body: 'Generic recruiters filter by keywords. We filter by capability. First candidates delivered within 5–7 days of intake.',
  },
  {
    number: '02',
    headline: 'You\'re seeing resumes, not candidates',
    body: 'Every person we send is pre-vetted with portfolio review, technical screening, and cultural fit assessment before you ever see them.',
  },
  {
    number: '03',
    headline: 'The last hire didn\'t stick',
    body: 'Bad hires are expensive. Our process includes behavioral interviews, values alignment screening, and a 45-day placement guarantee.',
  },
]

export default function PainPoints() {
  useScrollReveal()

  const [activeCard, setActiveCard] = useState(0)
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]

  useEffect(() => {
    const observers = cardRefs.map((ref, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveCard(i) },
        { threshold: 0.6 }
      )
      if (ref.current) observer.observe(ref.current)
      return observer
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section
      className="section-dark"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
        background: 'transparent',
      }}
    >
      <div className="container">
        <p className="reveal section-label" style={{ fontFamily: 'var(--font-primary)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', display: 'block' }}>
          Sound Familiar?
        </p>
        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
            fontWeight: 700,
            color: 'var(--color-white)',
            marginBottom: '48px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          We hear this every day.
        </h2>

        <div
          className="reveal reveal-stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.number}
              ref={cardRefs[i]}
              style={{
                padding: '40px 32px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: '2px solid var(--color-blue)',
                transition: 'box-shadow 300ms ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 1px rgba(0,146,203,0.3), 0 20px 60px rgba(0,0,0,0.4)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-blue)',
                  letterSpacing: '0.08em',
                  lineHeight: 1,
                  marginBottom: '1rem',
                  userSelect: 'none',
                }}
              >
                {card.number}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: 'var(--color-white)',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {card.headline}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.65)',
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '2.5rem',
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              onClick={() => {
                setActiveCard(i)
                cardRefs[i].current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }}
              style={{
                width: activeCard === i ? '28px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                background: activeCard === i ? 'var(--color-blue)' : 'rgba(255,255,255,0.2)',
                transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                boxShadow: activeCard === i ? '0 0 12px rgba(0,146,203,0.5)' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
