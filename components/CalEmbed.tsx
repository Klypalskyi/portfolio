'use client'

import { CAL_NAMESPACE } from '@/lib/cal'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

type CalWindow = Window & { Cal?: { ns?: Record<string, { instance?: unknown }> } }

function calReady() {
  return Boolean((window as CalWindow).Cal?.ns?.[CAL_NAMESPACE]?.instance)
}

export function CalEmbed() {
  useEffect(() => {
    getCalApi({ namespace: CAL_NAMESPACE }).then((cal) => {
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#4b4df7' },
          dark: { 'cal-brand': '#6366f1' },
        },
      })
    })

    const onClick = (event: MouseEvent) => {
      const trigger = event.target instanceof Element ? event.target.closest('[data-cal-link]') : null
      if (!trigger) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
        event.stopPropagation()
        return
      }
      if (calReady()) event.preventDefault()
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
