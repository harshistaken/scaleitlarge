# ScaleItLarge Replica — Project Guide

Pixel-accurate, mobile-first rebuild of https://www.scaleitlarge.com in Next.js 16 + Tailwind v4 + Framer Motion.

## Stack

- Next.js 16 (App Router, Turbopack), React 19
- Tailwind CSS v4 (`@theme` directive, no `tailwind.config.ts`)
- Framer Motion 12 (all animations — no GSAP/Lenis/Lottie)
- `next/font` for Google fonts; local woff2 for Clash Display
- `@hugeicons/react` for any UI icons
- TypeScript strict, `@/*` path alias
- `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)

## Design tokens

All in `src/app/globals.css` via `@theme`. Use Tailwind utility classes (`bg-bg`, `text-muted`, `bg-accent`) — don't hardcode hex.

```
--color-bg:        #0a0a0a   /* page background */
--color-surface:   #121212   /* cards, sections */
--color-surface-2: #1c1c1c   /* hovered surface */
--color-border:    rgb(255 255 255 / 0.08)
--color-text:      #ffffff
--color-muted:     #adb1b8   /* secondary text */
--color-subtle:    #5a6165   /* tertiary text */
--color-accent:    #ffc013   /* brand yellow */
--color-accent-ink: #050505  /* text-on-yellow */
```

## Typography

Load via `src/lib/fonts.ts`, assign variables to `<html>` in `layout.tsx`.

| Font             | Source                          | Role                                   | Variable         |
| ---------------- | ------------------------------- | -------------------------------------- | ---------------- |
| Unbounded 400/500/600 | `next/font/google`         | Display + H1–H4 + FAQ questions        | `--font-unbounded` |
| Patrick Hand 400 | `next/font/google`              | Testimonials only (handwritten feel)   | `--font-patrick` |
| Helvetica Now Display 400/500 | licensed (Monotype), system fallbacks | Body copy + nav + pills  | `--font-helvetica` |
| Clash Display 500 | `next/font/local` (Fontshare)   | Button labels only                     | `--font-clash`   |

Sizes (desktop → mobile):
- Hero H1: 48px → 28px, Unbounded 600
- Giant wordmark (CTA): 190px → fluid, Unbounded 400 with gradient text-clip
- "WORKED WITH" ticker: 120px → scaled, Unbounded 400, color `rgb(28 28 28)`
- Section title: 32px → 24px, Unbounded 600
- Card title: 24px → 20px, Unbounded 600
- Pill label: 18px, Unbounded 600
- Body: 18px → 14px, Inter 400, line-height 1.4–1.5
- Small/meta: 14px → 12px, Inter 400, color `--muted`
- Button: ~14–16px, Clash Display 500
- Testimonial: 12px, Patrick Hand 400

## Breakpoints (matches SIL's Framer build)

- Mobile: up to 809px (mobile-first = default)
- Tablet: `min-[810px]:`
- Desktop: `min-[1200px]:`
- Large: `min-[1440px]:`

Container max-width 1440px, centered, with `px-6 md:px-10` gutters.

## Animation rules

- Hero word-stagger: each word starts `opacity:0.001; filter:blur(10px); translateY(10px)` → animate to `1 / 0 / 0`, stagger ~60ms, duration ~600ms.
- Section reveal: `whileInView` with `once: true`, `amount: 0.2`, fade-up 12px over 400ms.
- Marquee: CSS `@keyframes` translateX, respect `prefers-reduced-motion`.
- Button hover: conic-gradient border sweep + inner sheen (replicate Framer's "Border-Shine").
- Custom cursor: only on `@media (pointer: fine)` — `<CustomCursor />` gated via `useIsMobile` or matchMedia.
- ALL animated components must honour `prefers-reduced-motion`.

## Mobile-first rules

- Default styles target 360px width. Add `min-[810px]:` and above only to extend.
- Tap targets ≥ 48×48px.
- Nav collapses to hamburger + full-viewport drawer on `< 810px`.
- All grids collapse to 1-column stack on mobile.
- Use `<details>/<summary>` for FAQ (free a11y + keyboard) styled with Tailwind.
- YouTube embeds: thumbnail first, iframe mounted only on user click.

## File structure

```
src/
  app/
    layout.tsx         # html/body + fonts, global providers
    page.tsx           # single-scroll landing: renders all sections in order
    globals.css        # @theme tokens, keyframes, base styles
  components/
    primitives/        # Container, Section, Pill, Button, RevealOnScroll, Marquee
    sections/          # Nav, Hero, WorkedWith, Services, WhyUs, HowWeWork,
                       # Videos, AdVideos, Testimonials, Pricing, CustomPlan,
                       # Faq, FinalCta, Footer
  lib/
    utils.ts           # cn()
    fonts.ts           # next/font instances
    use-is-mobile.ts   # SSR-safe pointer-fine detection
  content/             # services.ts, testimonials.ts, pricing.ts, faq.ts, videos.ts
public/
  assets/              # rehosted images from framerusercontent.com
  fonts/               # ClashDisplay-Medium.woff2
```

## Conventions

- Server components by default; `"use client"` only when needed (Framer Motion, interactive state, event handlers, browser APIs).
- No barrel `index.ts` files.
- Minimal comments — only for non-obvious why.
- All CTA links → `https://calendly.com/rahul-scaleitlarge/30min`.
- External links: `target="_blank" rel="noopener noreferrer"`.

## External links

- Primary CTA: https://calendly.com/rahul-scaleitlarge/30min
- Source of truth (for comparison): https://www.scaleitlarge.com/

## Phase progress

- [x] Phase 0 — foundation (deps, fonts, tokens, layout, utils)
- [ ] Phase 1 — sections (mobile-first, then tablet/desktop extensions)
- [ ] Phase 2 — polish (cursor, shine effects, a11y, perf)
- [ ] Phase 3 — side-by-side verification vs live site
