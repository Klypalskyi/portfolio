'use client'

import { useEffect, useRef } from 'react'

const GRID_GAP = 32 // px between dots
const CURSOR_RADIUS = 200 // px of influence around the pointer
const MAX_PUSH = 24 // px a dot is shoved away at the centre

/**
 * The drifting dot field behind the hero.
 *
 * Dots wander on a slow sine, and bulge away from the cursor. With motion off
 * it paints one static frame instead of animating, so the texture is still
 * there but nothing moves.
 */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const animated = document.documentElement.classList.contains('motion')
    const pointer = { x: -9999, y: -9999 }
    let time = 0
    let frame = 0

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      if (!width || !height) return

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr
        canvas.height = height * dpr
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)
      time += 0.008

      for (let gx = GRID_GAP / 2; gx < width; gx += GRID_GAP) {
        for (let gy = GRID_GAP / 2; gy < height; gy += GRID_GAP) {
          let x = gx + Math.sin(time * 2 + gx * 0.02 + gy * 0.015) * 2.5
          let y = gy + Math.cos(time * 1.6 + gx * 0.013) * 2.5

          const dx = x - pointer.x
          const dy = y - pointer.y
          const distance = Math.hypot(dx, dy)

          let proximity = 0
          if (distance < CURSOR_RADIUS) {
            proximity = 1 - distance / CURSOR_RADIUS
            const push = proximity * proximity * MAX_PUSH
            x += (dx / (distance || 1)) * push
            y += (dy / (distance || 1)) * push
          }

          ctx.beginPath()
          ctx.arc(x, y, 1.1 + proximity * 1.7, 0, Math.PI * 2)
          ctx.fillStyle =
            proximity > 0
              ? `rgba(75, 77, 247, ${(0.1 + proximity * 0.5).toFixed(3)})`
              : 'rgba(107, 119, 160, 0.1)'
          ctx.fill()
        }
      }
    }

    const onPointerMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }

    if (!animated) {
      // One static frame, redrawn only if the viewport changes size.
      draw()
      const resizeObserver = new ResizeObserver(() => draw())
      resizeObserver.observe(canvas)
      return () => resizeObserver.disconnect()
    }

    window.addEventListener('mousemove', onPointerMove)

    // Stop burning frames once the hero has scrolled away.
    let visible = true
    const visibility = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible && !frame) frame = requestAnimationFrame(tick)
      },
      { threshold: 0 },
    )
    visibility.observe(canvas)

    function tick() {
      draw()
      frame = visible ? requestAnimationFrame(tick) : 0
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onPointerMove)
      visibility.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
