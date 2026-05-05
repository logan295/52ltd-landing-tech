'use client'

const ICONS = Array.from({ length: 25 }, (_, i) => `/icons/icon-${i}.svg`)
const ANIMS = ['float-up', 'float-down', 'float-left', 'float-right']

export default function IconGrid({ opacity = 0.25, invert = true, inset = '-80px' }: { opacity?: number; invert?: boolean; inset?: string }) {
  const total = 42
  const items = Array.from({ length: total }, (_, i) => ({
    src: ICONS[i % ICONS.length],
    anim: ANIMS[i % ANIMS.length],
    duration: 5 + (i % 5),
    fadeDelay: i * 0.06,
    floatDelay: i * 0.06 + 0.6,
  }))

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float-up {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-down {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes float-left {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(-14px); }
        }
        @keyframes float-right {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(14px); }
        }
        .icon-grid-wrap {
          position: absolute;
          inset: -80px;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          opacity: ${opacity};
        }
        .icon-grid-inner {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-auto-rows: 160px;
          width: 100%;
          height: 100%;
        }
        .icon-grid-inner > div:nth-child(14n+8),
        .icon-grid-inner > div:nth-child(14n+9),
        .icon-grid-inner > div:nth-child(14n+10),
        .icon-grid-inner > div:nth-child(14n+11),
        .icon-grid-inner > div:nth-child(14n+12),
        .icon-grid-inner > div:nth-child(14n+13),
        .icon-grid-inner > div:nth-child(14n+14) {
          transform: translateX(50%);
        }
      `}} />
      <div className="icon-grid-wrap" style={{ inset }}>
        <div className="icon-grid-inner">
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={item.src}
                alt=""
                width={140}
                height={140}
                style={{
                  objectFit: 'contain',
                  filter: invert ? 'brightness(0) invert(1)' : 'none',
                  opacity: 0,
                  animation: `fade-in 0.5s ease forwards ${item.fadeDelay}s, ${item.anim} ${item.duration}s ease-in-out ${item.floatDelay}s infinite`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
