'use client'

import Image from 'next/image'

const textStyle: React.CSSProperties = {
  fontFamily: 'var(--font-primary)',
  fontSize: '0.8125rem',
  fontWeight: 400,
  color: 'rgba(255,255,255,0.75)',
  lineHeight: 1.8,
}

export default function Footer() {
  return (
    <>
      {/* Line texture band */}
      <div style={{
        width: '100%',
        height: '240px',
        position: 'relative',
        overflow: 'hidden',
        background: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAcCAYAAACtQ6WLAAAABmJLR0QA/wD/AP+gvaeTAAAAIklEQVQokWP4DwGzGLAAJmyCo5KjktSUnM3AwHAIn6JBAwAhKwkdJuo7QgAAAABJRU5ErkJggg==") repeat #1B2428`,
        backgroundSize: '7px 28px',
        backgroundPosition: '0 0',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(27,36,40,0.55)',
        }} />
      </div>

      <footer style={{ background: '#1B2428', padding: '80px 40px 48px' }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .footer-main {
            display: block;
            max-width: 1200px;
            margin: 0 auto;
          }
          .footer-divider {
            border: none;
            border-top: 1px solid rgba(255,255,255,0.1);
            margin: 48px auto 32px;
            max-width: 1200px;
          }
          .footer-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            flex-wrap: wrap;
            gap: 1rem;
          }
          .footer-social {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            flex-wrap: wrap;
          }
          .footer-link {
            font-family: var(--font-primary);
            font-size: 0.8125rem;
            font-weight: 500;
            color: rgba(255,255,255,0.85);
            text-decoration: none;
            line-height: 1.8;
            transition: color 200ms ease;
          }
          .footer-link:hover { color: #ffffff; }
          @media (max-width: 560px) {
            .footer-bottom {
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}} />

        {/* 5-column main content */}
        <div className="footer-main">
          {/* Column 1 — logo + contact */}
          <div>
            <Image
              src="/logos/circle/logo-circle-white.png"
              alt="52 Limited"
              width={120}
              height={120}
              style={{ width: '72px', height: '72px', objectFit: 'contain', marginBottom: '20px' }}
            />
            <p style={textStyle}>4605 SW Poplar Ln</p>
            <p style={textStyle}>Portland, OR 97225</p>
            <p style={{ ...textStyle, marginTop: '12px' }}>
              <a href="tel:5035170052" className="footer-link">503.517.0052</a>
            </p>
            <p style={textStyle}>
              <a href="mailto:info@52ltd.com" className="footer-link">info@52ltd.com</a>
            </p>
          </div>

        </div>

        <hr className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/52-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">YouTube</a>
            <a
              href="https://52ltd.com/mailinglist"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontSize: '0.8125rem',
                fontWeight: 500,
                fontFamily: 'var(--font-primary)',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            >
              Join the 52 Mailing List
            </a>
          </div>
          <p style={{ ...textStyle, color: 'rgba(255,255,255,0.5)' }}>
            Copyright &copy; 52 Limited
          </p>
        </div>
      </footer>
    </>
  )
}
