export const CAL_NAMESPACE = 'intro-call'

const CAL_CONFIG = JSON.stringify({ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' })

export function calLinkFrom(href: string): string | null {
  const match = href.match(/^https:\/\/cal\.com\/([^?#]+?)\/?$/)
  return match ? match[1] : null
}

export function calTriggerProps(href: string) {
  const calLink = calLinkFrom(href)
  if (!calLink) return {}
  return {
    'data-cal-namespace': CAL_NAMESPACE,
    'data-cal-link': calLink,
    'data-cal-config': CAL_CONFIG,
  }
}
