# PROJECT_STATE.md

## Current Sprint Phase
*   **Phase 0: Legacy Codebase Audit & Refactor — COMPLETE**
*   **Phase 1: Global Foundations & UI System — COMPLETE**
*   **Phase 2: Homepage Build-Out (Vibe Check Lock) — COMPLETE**

---

## Global Architecture Checklist
- [x] **Fluid Scaling & Root Variable Setup:** Code exact `:root` fluid type parameters (`0.2666vw` scaling up to `0.0595vw` across target device breakpoints) inside global CSS sheets[cite: 2].
- [x] **Typography Ingestion:** Inject universal clean fonts (`PP Neue Montreal` family weights) with forced anti-aliasing rendering values (`-webkit-font-smoothing`)[cite: 2].
- [x] **Lenis Smooth Scroll Configuration:** Initialise the Lenis scroll package script loop, binding mouse mechanics and completely hiding native browser scrollbars[cite: 2].
- [x] **Dual-Overlay Transition Framework:** Code fixed DOM containers (`#page-transition-overlay` center polygon horizontal wipe and `#page-transition-overlay-2` bottom logo reveal clip)[cite: 2].
- [x] **Persistent Global Header Shell:** Implement shared navigation header elements featuring active-link opacity dims, slot-machine flip text logic (`.hover-link`), live local clock script execution, and the 3-dot interactive toggle macro button[cite: 2].

---

## Page Implementation Roadmap

### 1. Homepage (`index.html`)
- [x] Code full-bleed background video component layer under content overlays[cite: 2]
- [x] Implement word-splitting layout tracking tagline text configurations[cite: 2]
- [x] Map active click-events launching the cinematic showreel overlay frame[cite: 2]

### 2. About Page (`about.html`)
- [ ] Design asymmetric lookbook grids highlighting strategic experience parameters
- [ ] Deploy dynamic asset sections declaring her permanent US market expansion plans
- [ ] Format narrative blocks targeting premium agency leadership personas

### 3. Services Page (`services.html`)
- [ ] Code strategic tier matrix framing high-leverage consultancy items[cite: 2]
- [ ] Embed contextual action targets routing traffic directly to calendar links

### 4. Case Studies Page (`case-studies.html`)
- [ ] Format desktop flush typographical list layout displaying project metrics[cite: 2]
- [ ] Build desktop mouse tracking engine capturing trailing LERP coordinates[cite: 2]
- [ ] Integrate scroll observers driving staggered line animations across text rows[cite: 2]

### 5. Contact Page (`contact.html`)
- [ ] Embed primary booking system widget containers natively into layout panels
- [ ] Synchronize persistent clock script components updating live city destination times[cite: 2]
- [ ] Build minimal fallback form endpoint handlers to prevent communication loss

---

## Technical Requirements Check
- [ ] **Booking Integration:** Embed operational calendar structures (`Calendly` / `Cal.com`) directly into workspace layout trees.
- [ ] **Form Infrastructure:** Set up functional fallback form endpoints for custom contact queries.
- [ ] **Technical SEO System:** Inject universal meta tracking fields, page tags, open-graph link wrappers, and micro-device layout parameters.
- [ ] **Domain & Hosting Architecture:** Prepare deployment workflows targeting live market production domain names.

---

## Phase 0 Completed Tasks (Legacy Refactor Shell)
- [x] **Branch created:** `feature/legacy-refactor-shell` from `feature/revert-retro-design`
- [x] **Fluid type scale verified:** `shared.css` already implements YARD-exact scale (`0.078125vw` at 1024px+)
- [x] **Absolute pixel values purged:** Decorator component `--spacing`/`--i-size` converted from `px` to `rem`
- [x] **shared.js extracted:** ~200 lines of duplicated JS (Lenis, GSAP, cursor, clock, menu, transitions, magnetic buttons) consolidated from 8 pages into one IIFE module
- [x] **Lenis exposed on `window.__lenis`:** Page-specific scripts can access the Lenis instance for programmatic control
- [x] **Thinking pages footer fixed:** Added missing `initiatives-menu` and `marquee-2` sections to all 3 thinking pages
- [x] **All 8 pages updated:** HTML files now reference `shared.js` instead of inline scripts; page-specific scripts (works selector, contact form) retained as separate `<script>` blocks
- [x] **Code review passed:** No broken references, HTML structure intact across all pages

## Phase 2 Completed Tasks (Homepage Build-Out)
- [x] **Word-split text reveal:** Hero tagline wrapped in `.split-text > .word > .word-inner` markup; GSAP timeline animates `yPercent: 110 → 0` with staggered word reveal
- [x] **Showreel overlay:** Fixed-position modal with 16:9 video wrapper, backdrop click-to-close, ESC key handler, focus trap, `body.showreel-open` overflow lock, Lenis stop/start
- [x] **CTA Play trigger:** `.cta-play` button with play icon + "Play Showreel" label wired to overlay open
- [x] **Services preview section:** 3-column numbered grid (Brand Strategy / Cultural Intelligence / Creative Direction) with hover states and CTA to services page
- [x] **Works grid flush-list dividers:** `.work-divider` class adds `border-top` separators; inline styles removed
- [x] **GSAP animation ownership:** Removed CSS `keyframe` animations from `.hero-cta`, `.credibility-strip`, `.scroll-indicator` — GSAP timeline now exclusively controls hero element reveals
- [x] **no-js fallback:** `<html class="no-js">` removed by shared.js on DOMContentLoaded; CSS rule ensures `.word-inner` stays visible if GSAP fails
- [x] **Code review fixes:** Fixed opacity 0→0 conflict, showreel overlay DOM placement, visibility transition-delay, services preview redundant border-top

## Immediate Next Steps
1. **Inner Pages Build-Out (Phase 3):** Apply the same treatment to about.html, services.html, case-studies.html, and contact.html — each needs its own section-level animations and polish.
2. **Video Replacement:** The hero background video (Mixkit CDN) is broken. Replace with a working video source or a high-quality still image with Ken Burns parallax.
3. **Shared Template Partials:** Header/footer HTML is still duplicated across 8 pages. Consider a build-time partial system or JS-based injection to eliminate maintenance overhead.