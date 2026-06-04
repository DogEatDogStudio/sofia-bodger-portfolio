# PROJECT_STATE.md

## Current Sprint Phase
*   **Phase 0: Legacy Codebase Audit & Refactor — COMPLETE**
*   **Phase 1: Global Foundations & UI System — IN PROGRESS**

---

## Global Architecture Checklist
- [ ] **Fluid Scaling & Root Variable Setup:** Code exact `:root` fluid type parameters (`0.2666vw` scaling up to `0.0595vw` across target device breakpoints) inside global CSS sheets[cite: 2].
- [ ] **Typography Ingestion:** Inject universal clean fonts (`PP Neue Montreal` family weights) with forced anti-aliasing rendering values (`-webkit-font-smoothing`)[cite: 2].
- [ ] **Lenis Smooth Scroll Configuration:** Initialise the Lenis scroll package script loop, binding mouse mechanics and completely hiding native browser scrollbars[cite: 2].
- [ ] **Dual-Overlay Transition Framework:** Code fixed DOM containers (`#page-transition-overlay` center polygon horizontal wipe and `#page-transition-overlay-2` bottom logo reveal clip)[cite: 2].
- [ ] **Persistent Global Header Shell:** Implement shared navigation header elements featuring active-link opacity dims, slot-machine flip text logic (`.hover-link`), live local clock script execution, and the 3-dot interactive toggle macro button[cite: 2].

---

## Page Implementation Roadmap

### 1. Homepage (`index.html`)
- [ ] Code full-bleed background video component layer under content overlays[cite: 2]
- [ ] Implement word-splitting layout tracking tagline text configurations[cite: 2]
- [ ] Map active click-events launching the cinematic showreel overlay frame[cite: 2]

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

## Immediate Next Steps
1. **Vibe Check — Homepage Lock:** Confirm `index.html` structural layout (hero video, word-split tagline, CTA, works grid) renders correctly before proceeding to inner pages.
2. **Shared JS Refinement:** Consider extracting header/footer HTML into a template partial system to eliminate remaining duplication across 8 pages.
3. **Footer Marquee Animation:** The footer `.marquee__list` is currently static — add `animation: marquee 25s linear infinite` to match section marquee behavior.