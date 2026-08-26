/**
 * True for links that leave the site and should open in a new tab.
 * `mailto:` and `tel:` are handled by the OS, so they are not "external".
 */
export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href)
}

/** Props that make an anchor safe to open in a new tab. */
export function externalProps(href: string) {
  return isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}
