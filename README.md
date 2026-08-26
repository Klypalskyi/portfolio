# Portfolio — Mykhailo Klypalskyi

Personal portfolio site. One page, statically exported, deployed to GitHub Pages
on every push to `main`.

**Live:** https://klypalskyi.github.io/portfolio/

---

## Updating the site

**Everything you can see on the page lives in [`content/site.config.ts`](content/site.config.ts).**
That is the only file you need to touch for a normal update. Change it, commit,
push — the site rebuilds and redeploys itself.

Every field is documented in [`content/types.ts`](content/types.ts), and your
editor will autocomplete them. If you get a field wrong, `npm run build` fails
with a clear message instead of shipping a broken page.

### Common edits

| I want to…                        | Do this                                                          |
| --------------------------------- | ---------------------------------------------------------------- |
| Add a job                         | Add an object to `experience.items` (newest first)                |
| Add a project                     | Add an object to `work.nda`                                       |
| Swap the featured project         | Edit `work.featured`                                              |
| Change a stat                     | Edit `stats` — `value` is the number it counts up to              |
| Add a skill                       | Add a string to the right group in `skills.groups`                |
| Hide the "Open to opportunities" badge | Set `flags.openToWork` to `false`                            |
| Hide phone numbers                | Set `flags.showPhone` to `false`                                  |
| Turn off all animation            | Set `flags.motion` to `false`                                     |
| Add your photo                    | Drop it in `public/`, set `about.portrait` to `'/your-photo.jpg'` |
| Change the scrolling tech strip   | Edit the `marquee` array                                          |
| Update SEO / social preview       | Edit `meta`                                                       |

### Featured project preview

`work.featured.preview` takes one of two shapes:

```ts
// A live iframe of the site
preview: { kind: 'iframe', src: 'https://example.com', title: 'example.com preview' }

// A screenshot from /public
preview: { kind: 'image', src: '/example-screenshot.png', alt: 'Example dashboard' }
```

Use `image` if the site you want to show blocks embedding (some set
`X-Frame-Options`), or if you just want a faster-loading card.

### Changing the colours or fonts

Design tokens are declared once in the `@theme` block at the top of
[`app/globals.css`](app/globals.css) — every colour, font, and easing curve on
the page resolves to one of them. Change a token there and it propagates
everywhere. Fonts are loaded in [`app/layout.tsx`](app/layout.tsx) via
`next/font`.

---

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script              | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Dev server with hot reload                       |
| `npm run build`     | Static export into `out/`                        |
| `npm run lint`      | ESLint                                           |
| `npm run typecheck` | TypeScript, no emit                              |

To preview exactly what gets deployed:

```bash
npm run build
npx serve out
```

---

## Deployment

Pushing to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
static export and publishes it to GitHub Pages. Nothing to run by hand.

### Custom domain

1. Add your domain in **Settings → Pages → Custom domain** and point a `CNAME`
   record at `klypalskyi.github.io`.
2. Add a `public/CNAME` file containing just the domain, so the setting survives
   redeploys.
3. Update `meta.url` in `content/site.config.ts` to the new URL.

The base path handles itself: on a custom domain the site is served from the
root, and `actions/configure-pages` passes an empty prefix instead of
`/portfolio`.

---

## How it's built

| | |
| --- | --- |
| Framework | Next.js 15, App Router, `output: 'export'` |
| Language | TypeScript, strict |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Fonts | Sora (display) + Manrope (body) via `next/font` |
| Hosting | GitHub Pages via GitHub Actions |

### Layout

```
app/
  layout.tsx        Metadata, fonts, JSON-LD, motion bootstrap
  page.tsx          Section order
  globals.css       Design tokens + keyframes
components/
  Nav Hero Marquee Work Skills Experience About Contact
  Reveal            Scroll-reveal wrapper (server)
  MotionEffects     The single observer that drives reveals (client)
  CountUp Tilt HeroCanvas
  ui/               Pill, Tag, SectionHeading
content/
  site.config.ts    ← all content lives here
  types.ts          Field documentation
lib/
  basePath.ts       GitHub Pages URL prefix
```

### Motion

Animation is opt-in at three levels, in this order:

1. `flags.motion` in the config — the master switch.
2. The visitor's `prefers-reduced-motion` setting, which always wins.
3. JavaScript being available at all.

A tiny blocking script in `<head>` adds a `motion` class to `<html>` before
first paint, so revealed elements are hidden from frame one rather than
flashing in and jumping. If any of the three levels says no, the class is never
added and the page renders as plain, fully-visible HTML.

---

Design originated in [Claude Design](https://claude.ai/design) and was rebuilt
here as production React.
