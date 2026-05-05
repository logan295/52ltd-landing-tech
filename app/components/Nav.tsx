'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        background: scrolled ? 'rgba(27,36,40,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="https://52ltd.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logos/ltd/logo-ltd-white.png"
            alt="52 Limited"
            width={140}
            height={36}
            style={{ height: '52px', width: 'auto' }}
          />
        </a>
        <a href="#get-started" className="btn btn-primary" style={{ height: '40px', padding: '0 20px', fontSize: '0.75rem', borderRadius: '6px' }}>
          Book a Call
        </a>
      </div>
    </nav>
  )
}
