'use client'

import { useEffect, useRef, useState } from 'react'
import type { Photo } from '@/content/types'
import { withBasePath } from '@/lib/basePath'
import { cn } from '@/lib/cn'

const ARROW =
  'bg-surface/85 text-ink absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_6px_18px_rgba(14,21,38,.18)] backdrop-blur transition-[transform,background-color] duration-200 hover:bg-surface hover:scale-105'

export function PhotoCarousel({ photos }: { photos: Photo[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const count = photos.length

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => setIndex(Math.round(track.scrollLeft / track.clientWidth))
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (target: number) => {
    const track = trackRef.current
    if (!track) return
    const next = (target + count) % count
    track.scrollTo({ left: next * track.clientWidth })
  }

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Photos">
      <div className="relative">
        <div
          ref={trackRef}
          tabIndex={0}
          className="flex h-[400px] snap-x snap-mandatory overflow-x-auto rounded-2xl [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-safe:scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              className="bg-surface-alt relative h-full w-full shrink-0 snap-center overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(photo.src)}
                alt=""
                aria-hidden="true"
                loading={i === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(photo.src)}
                alt={photo.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable={false}
                className="relative h-full w-full object-contain"
              />
            </div>
          ))}
        </div>

        {count > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => goTo(index - 1)}
              className={cn(ARROW, 'left-3')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => goTo(index + 1)}
              className={cn(ARROW, 'right-3')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="mt-4 flex justify-center gap-2">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className="flex h-6 items-center"
            >
              <span
                className={cn(
                  'block h-2 rounded-full transition-all duration-300',
                  i === index ? 'bg-accent w-6' : 'bg-line hover:bg-faint w-2',
                )}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
