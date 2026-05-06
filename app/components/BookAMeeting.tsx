import CalEmbed from './CalEmbed'

export default function BookAMeeting() {
  return (
    <section
      id="book-a-meeting"
      style={{
        display: 'block',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
        background: '#FFFFFF',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-blue)',
              marginBottom: '20px',
              display: 'block',
              textAlign: 'center',
            }}
          >
            Schedule a Call
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              fontWeight: 700,
              color: 'var(--color-navy)',
              marginBottom: '0.75rem',
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Let&apos;s Talk
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '1.0625rem',
              color: 'rgba(27,36,40,0.6)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              lineHeight: 1.65,
            }}
          >
            Pick a time that works for you and we&apos;ll take it from there.
          </p>

          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(27,36,40,0.1)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(27,36,40,0.08), 0 2px 8px rgba(27,36,40,0.04)',
            }}
          >
            <CalEmbed />
          </div>
        </div>
      </div>
    </section>
  )
}
