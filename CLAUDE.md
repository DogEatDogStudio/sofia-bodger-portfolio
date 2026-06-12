# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the site

No build step. Serve locally with:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

All changes are immediately visible on refresh. There are no tests, linters, or compilation steps.

## Architecture

This is a **pure static site** — HTML, CSS, and JS only. No framework, no bundler, no package.json.

### File layout

- `shared.css` — the entire design system: CSS variables, reset, layout, every component. Single file, ~64KB.
- `shared.js` — a single IIFE that runs on every page. Handles: template injection (header/footer/menus/cursor divs), Lenis smooth scroll, GSAP ScrollTrigger wiring, custom cursor, live clock, mobile menu, page transition overlays, and the works-list hover effect.
- `index.html` — homepage. Contains only `<head>` + `<body data-page="index">` + `<main>` content + page-specific inline `<script>`.
- All other pages follow the same pattern: no duplicated header/footer HTML — those are injected by `shared.js`.

### Template injection

`shared.js` calls `injectTemplates()` on DOMContentLoaded. It reads `document.body.getAttribute('data-page')` to set the correct nav active state, then writes the header, mobile menu, footer, cursor wrappers, and transition overlays directly into the DOM. **Do not add header/footer HTML to page files** — they will be duplicated.

### The fluid type scale

`shared.css` sets `font-size` on `:root` to a `vw` fraction at each breakpoint (e.g. `0.078125vw` at 1024px, which makes `1rem ≈ 1px` at that width). **All sizing values in the codebase are in `rem`, never `px`.** A value of `16rem` equals roughly 16px on a 1024px screen. Never introduce raw `px` values.

### Homepage scroll-over effect

The homepage hero uses `position: fixed` (not sticky). A `<div class="hero-spacer">` (height: 100vh) immediately before `.index-works` holds the document space the fixed hero vacates. `.index-works` has `position: relative; z-index: 10; background: var(--bg-light)` so it slides over the dark fixed hero as the user scrolls. The footer uses `.index-page .footer { margin-top: 0 }` to close the gap — all spacing between works and footer is handled by `padding-bottom` on `.index-works`.

### CSS design tokens

All colours, spacing, and typography values are CSS custom properties defined in the `:root` block at the top of `shared.css`. Key tokens:

| Token | Value | Use |
|-------|-------|-----|
| `--bg-light` | `#F0F2F1` | Content panels, works section background |
| `--bg-dark` | `#121212` | Body background, footer |
| `--bg-medium` | `#1D1D1B` | Hero background |
| `--text-dark` | `#1D1D1B` | Text on light panels |
| `--text-light` | `#F0F2F1` | Text on dark sections |
| `--tertiary` | `#6F94B1` | Cobalt blue brand accent |
| `--accent` | `#FFFFFF` | CTA accent (to be updated to cobalt) |
| `--content-padding` | `12rem` | Mobile horizontal padding |
| `--content-padding-dk` | `20rem` | Desktop horizontal padding |

### External dependencies (CDN, no local copies)

Loaded via `<script>` tags in each HTML `<head>`:
- **GSAP** + **ScrollTrigger** — animations and scroll-driven reveals
- **Lenis** `v1.1.13` — smooth scroll (document mode, no wrapper element)

Lenis is connected to GSAP via `lenis.on('scroll', ScrollTrigger.update)` in `shared.js`. Page-specific GSAP animations must call `gsap.registerPlugin(ScrollTrigger)` in their own inline script block.

### Page-specific scripts

Each HTML file has a single inline `<script>` block at the bottom for page-specific behaviour (showreel overlay, word-split hero animation, form handling, etc.). `shared.js` must be loaded before this block.

### Nav active state

Each page sets `data-page` on `<body>` (e.g. `data-page="about"`). `shared.js` uses this to add the active class to the matching nav item. Case study detail pages use `data-page="case-studies"` so the Case Studies nav item stays highlighted.

### Thinking pages

`thinking-brands.html`, `thinking-audience.html`, `thinking-subculture.html` are editorial articles. They are linked from the header's "Thinking" button and footer, but are **not** part of the main 5-page nav. They use `data-page="thinking"`.

### Case study pages

`case-study-*.html` are individual detail pages (9 total). `case-studies.html` is the listing page that links to them. Detail pages include prev/next navigation and `<link rel="prev/next">` pagination tags for SEO.

## Git workflow

Ray (the project owner) does not manage git. Claude commits and pushes to GitHub after every meaningful chunk of work. Remote: `https://github.com/DogEatDogStudio/sofia-bodger-portfolio.git`, branch: `feature/legacy-refactor-shell`. Never commit `.claude/`.
