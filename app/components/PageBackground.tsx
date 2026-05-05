'use client'
import IconGrid from './IconGrid'

export default function PageBackground() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      background: '#1B2428',
      pointerEvents: 'none',
    }}>
      <IconGrid opacity={0.12} invert={true} />
    </div>
  )
}
