'use client'

import { useEffect, useRef } from 'react'

// Blank/empty icons excluded: 1, 3, 7, 8, 12, 18, 20
const ICONS = [0, 2, 4, 5, 6, 9, 10, 11, 13, 14, 15, 16, 17, 19, 21, 22, 23, 24].map(
  (n) => `/icons/icon-${n}.svg`
)

const CELL      = 220
const ICON_SIZE = 75
const AMPLITUDE = 8

function seededRand(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

function pickIcon(
  grid: number[][],
  row: number,
  col: number,
  cols: number,
  idx: number
): number {
  const forbidden = new Set<number>()
  const neighbors: [number, number][] = [[-1, -1], [-1, 0], [-1, 1], [0, -1]]
  for (const [dr, dc] of neighbors) {
    const nr = row + dr
    const nc = col + dc
    if (nr >= 0 && nc >= 0 && nc < cols && grid[nr]?.[nc] !== undefined && grid[nr][nc] !== -1) {
      forbidden.add(grid[nr][nc])
    }
  }
  for (let attempt = 0; attempt < ICONS.length; attempt++) {
    const candidate = Math.floor(seededRand(idx * 100 + attempt) * ICONS.length)
    if (!forbidden.has(candidate)) return candidate
  }
  for (let i = 0; i < ICONS.length; i++) {
    if (!forbidden.has(i)) return i
  }
  return 0
}

function buildSubgrid(
  container: HTMLElement,
  cells: { img: HTMLImageElement; phase: number; speed: number }[],
  colorFilter: string,
  offsetX: number,
  offsetY: number,
  idxStart: number
): number {
  const cols = Math.ceil(window.innerWidth  / CELL) + 2
  const rows = Math.ceil(window.innerHeight / CELL) + 2
  const grid: number[][] = Array.from({ length: rows }, () => new Array(cols).fill(-1))

  let idx = idxStart
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      const iconIndex = pickIcon(grid, rowIndex, colIndex, cols, idx)
      grid[rowIndex][colIndex] = iconIndex

      const img = document.createElement('img')
      img.src = ICONS[iconIndex]
      img.alt = ''
      img.style.position   = 'absolute'
      img.style.left       = `${colIndex * CELL + offsetX}px`
      img.style.top        = `${rowIndex * CELL + offsetY}px`
      img.style.width      = `${ICON_SIZE}px`
      img.style.height     = `${ICON_SIZE}px`
      img.style.objectFit  = 'contain'
      img.style.opacity    = '0.15'
      img.style.filter     = colorFilter
      img.style.willChange = 'transform'
      container.appendChild(img)

      const period = (8 + seededRand(idx + 200) * 6) * 1000
      cells.push({
        img,
        phase: seededRand(idx + 100) * Math.PI * 2,
        speed: (Math.PI * 2) / period,
      })
      idx++
    }
  }
  return idx
}

export default function IconGrid({ invert = false }: { opacity?: number; invert?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef       = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const colorFilter = invert
      ? 'brightness(0) invert(1)'
      : 'brightness(0) saturate(100%) invert(14%) sepia(15%) saturate(500%) hue-rotate(155deg)'

    type Cell = { img: HTMLImageElement; phase: number; speed: number }
    let cells: Cell[] = []

    function build() {
      cancelAnimationFrame(rafRef.current)
      container!.innerHTML = ''
      cells = []

      const half = ICON_SIZE / 2

      // Grid A: icons centered on (col*CELL, row*CELL), starting half-clipped at top-left
      const idxAfterA = buildSubgrid(
        container!, cells, colorFilter,
        -(half),        // offsetX: center icon on grid point, clip at left edge
        -(half),        // offsetY: center icon on grid point, clip at top edge
        0
      )

      // Grid B: same grid shifted by CELL/2 in both axes (fills the gaps between A icons)
      buildSubgrid(
        container!, cells, colorFilter,
        (CELL / 2) - half,
        (CELL / 2) - half,
        idxAfterA
      )

      const total = cells.length
      console.log('[IconGrid] total icons:', total)

      function tick(ts: number) {
        for (let i = 0; i < cells.length; i++) {
          const { img, phase, speed } = cells[i]
          const y = Math.sin(ts * speed + phase) * AMPLITUDE
          img.style.transform = `translateY(${y.toFixed(2)}px)`
        }
        rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    build()
    window.addEventListener('resize', build)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', build)
      container.innerHTML = ''
    }
  }, [invert])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 0,
        padding: 0,
        border: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
