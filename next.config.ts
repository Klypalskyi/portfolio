import type { NextConfig } from 'next'
import { basePath } from './lib/basePath'

/**
 * The site ships as a fully static export — no Node server at runtime — so it
 * can be hosted straight from GitHub Pages.
 */
const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  // Trailing slashes make GitHub Pages resolve /work/ -> /work/index.html.
  trailingSlash: true,
  images: {
    // next/image's optimizer needs a server; a static export has none.
    unoptimized: true,
  },
}

export default nextConfig
