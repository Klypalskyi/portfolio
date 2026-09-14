const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const basePath = raw === '/' ? '' : raw.replace(/\/+$/, '')

export function withBasePath(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}
