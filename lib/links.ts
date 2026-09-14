export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href)
}

export function externalProps(href: string) {
  return isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}
