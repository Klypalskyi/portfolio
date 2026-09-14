'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'

function eventName(anchor: HTMLAnchorElement): string | null {
  const href = anchor.href
  if (href.startsWith('mailto:')) return 'Email'
  if (href.startsWith('https://cal.com/')) return 'Book a call'
  if (/^https:\/\/(www\.)?github\.com\//.test(href)) return 'GitHub'
  if (/^https:\/\/(www\.)?linkedin\.com\//.test(href)) return 'LinkedIn'
  if (/^https?:\/\//.test(href) && anchor.origin !== window.location.origin) return 'Outbound link'
  return null
}

function locationOf(anchor: HTMLAnchorElement): string {
  if (anchor.closest('nav')) return 'header'
  if (anchor.closest('footer')) return 'contact'
  const section = anchor.closest('header[id], section[id]')
  if (!section) return 'page'
  return section.id === 'top' ? 'hero' : section.id
}

export function ClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null
      if (!(anchor instanceof HTMLAnchorElement)) return
      const name = eventName(anchor)
      if (!name) return
      track(name, {
        location: locationOf(anchor),
        ...(name === 'Outbound link' ? { url: anchor.href } : {}),
      })
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
