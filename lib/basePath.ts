/**
 * Where the site is served from.
 *
 * On GitHub Pages a project repo is served from `https://<user>.github.io/<repo>/`,
 * so every absolute URL needs the `/<repo>` prefix. The deploy workflow passes
 * that prefix in as NEXT_PUBLIC_BASE_PATH. Locally — and on a custom domain —
 * the variable is empty and the site lives at the root.
 *
 * Imported by both `next.config.ts` and the components, so the two can never
 * disagree.
 */
const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Normalised prefix: either '' or something like '/portfolio'. Never '/'. */
export const basePath = raw === '/' ? '' : raw.replace(/\/+$/, '')

/**
 * Prefixes a path from /public with the base path.
 *
 * Next rewrites URLs inside `next/link` and `next/image` automatically, but a
 * raw `<img src="/portrait.jpg">` in a static export served from `/portfolio/`
 * would 404 without this.
 */
export function withBasePath(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}
