# PROJECT_STATE.md

## Current Sprint Phase
*   **Phase 0: Legacy Codebase Audit & Refactor — COMPLETE**
*   **Phase 1: Global Foundations & UI System — COMPLETE**
*   **Phase 2: Homepage Build-Out (Vibe Check Lock) — COMPLETE**
*   **Template Consolidation & Vibe Check — COMPLETE**

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
- [x] Design asymmetric lookbook grids highlighting strategic experience parameters
- [x] Deploy dynamic asset sections declaring her permanent US market expansion plans
- [x] Format narrative blocks targeting premium agency leadership personas

### 3. Services Page (`services.html`)
- [x] Code strategic tier matrix framing high-leverage consultancy items[cite: 2]
- [x] Embed contextual action targets routing traffic directly to calendar links

### 4. Case Studies Page (`case-studies.html`)
- [x] Format desktop flush typographical list layout displaying project metrics[cite: 2]
- [ ] Build desktop mouse tracking engine capturing trailing LERP coordinates[cite: 2]
- [x] Integrate scroll observers driving staggered line animations across text rows[cite: 2]

### 5. Contact Page (`contact.html`)
- [x] Embed primary booking system widget containers natively into layout panels
- [x] Synchronize persistent clock script components updating live city destination times[cite: 2]
- [x] Build minimal fallback form endpoint handlers to prevent communication loss

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

## Phase 1 Completed Tasks (Global Foundations & UI System)
- [x] **Typography upgrade:** Switched from Space Grotesk to Inter (closest free PP Neue Montreal match) across shared.css and all 8 HTML preload links. Weights: 400 (body), 500 (headers), 600 (emphasis)
- [x] **Footer marquee animation:** Added `animation: marquee 30s linear infinite` to `.marquee__list`; duplicated items in all 8 pages for seamless infinite scroll
- [x] **CSS design tokens:** Added `--content-padding` (12rem) and `--content-padding-dk` (20rem) layout variables
- [x] **Hardcoded padding purge:** Replaced ~35 hardcoded `12rem`/`20rem` padding values with CSS variable tokens for consistency
- [x] **CTA hover fix:** Updated `.cta-book:hover` to use `translate3d` instead of `translateX(5px)` for GPU acceleration

## Phase 2 Completed Tasks (Homepage Build-Out)
- [x] **Word-split text reveal:** Hero tagline wrapped in `.split-text > .word > .word-inner` markup; GSAP timeline animates `yPercent: 110 → 0` with staggered word reveal
- [x] **Showreel overlay:** Fixed-position modal with 16:9 video wrapper, backdrop click-to-close, ESC key handler, focus trap, `body.showreel-open` overflow lock, Lenis stop/start
- [x] **CTA Play trigger:** `.cta-play` button with play icon + "Play Showreel" label wired to overlay open
- [x] **Services preview section:** 3-column numbered grid (Brand Strategy / Cultural Intelligence / Creative Direction) with hover states and CTA to services page
- [x] **Works grid flush-list dividers:** `.work-divider` class adds `border-top` separators; inline styles removed
- [x] **GSAP animation ownership:** Removed CSS `keyframe` animations from `.hero-cta`, `.credibility-strip`, `.scroll-indicator` — GSAP timeline now exclusively controls hero element reveals
- [x] **no-js fallback:** `<html class="no-js">` removed by shared.js on DOMContentLoaded; CSS rule ensures `.word-inner` stays visible if GSAP fails
- [x] **Code review fixes:** Fixed opacity 0→0 conflict, showreel overlay DOM placement, visibility transition-delay, services preview redundant border-top

## Phase 3 Completed Tasks (Inner Pages Build-Out)
- [x] **About page:** GSAP hero word stagger reveal, timeline-item scroll reveal, value-item scroll reveal with reduced-motion guard
- [x] **Services page:** GSAP service-card stagger reveal, process-item stagger reveal, "Book a consultation" CTA section added
- [x] **Case Studies page:** ScrollTrigger-based case-study-item reveal with `.revealed` class toggle; 9 detailed case studies (H&M, Nike DFB, Nike Airtopia, Nike Mind Sets, Nike FlyEase, Foot Locker, Beats Daisy, Johnnie Walker, Audi)
- [x] **Contact page:** Live Amsterdam clock widget with DST detection, form handler separated into own script block, Calendly booking section
- [x] **CSS enhancements:** Phase 3 CSS additions — case-study-item scroll reveal, contact-clock widget, services-cta-section
- [x] **Browser vibe check passed** on all 4 inner pages — header/footer render, active nav correct, content sections load, no JS errors

## Phase 2.5 Completed Tasks (Template Consolidation & Hero Polish)
- [x] **Hero video replaced (interim):** Broken Mixkit CDN video replaced with high-quality Unsplash still image (`photo-1497366216548`) with Ken Burns parallax animation. **Note:** Brief calls for showreel video bg — this is an interim solution; final showreel video to be sourced in Phase 3.
- [x] **Scroll parallax:** GSAP ScrollTrigger translates `.index-hero .background` at 18% scroll speed (`scrub: 0.5`) for depth effect; hero content fades out on scroll (`opacity: 0, y: -60` at 60% scroll)
- [x] **Reduced-motion guard:** Both parallax and fade-out animations wrapped in `prefers-reduced-motion: reduce` check
- [x] **Template consolidation:** Header, footer, mobile menu, cursor divs, and transition overlays injected from `shared.js` via `injectTemplates()` function. Reads `data-page` attribute on `<body>` to set active nav state per page.
- [x] **~1,350 lines of duplicated HTML removed** from all 8 pages — each page now contains only `<head>` + `<body data-page>` + `<main>` content + page-specific scripts
- [x] **All 8 pages verified:** Automated browser vibe check passed on Homepage, About, Services, Case Studies, Contact, and Thinking pages — header/footer render, active nav states correct, no JS errors (one benign CORB warning from font preloading)
- [x] **Code audit passed:** All 8 pages have perfectly balanced HTML tags inside `<main>`, shared.js passes Node.js syntax check, template injection ordering correct (runs before DOM queries)

## Phase 4 Completed Tasks (Browser Test & Bug Fixes)
- [x] **Broken Unsplash images fixed (case-studies.html):** 3 broken URLs replaced — Nike Mind Sets (photo-1502904550040), Nike FlyEase (photo-1552346154), Beats Daisy (photo-1511671782779)
- [x] **Image height attributes corrected:** All 9 case-study image `height` attributes updated to match actual intrinsic dimensions (prevents CLS)
- [x] **Johnnie Walker portrait fix:** Added Unsplash server-side crop params (`?w=800&fit=crop&h=450&q=80`) so the portrait image renders correctly in the 16:9 container
- [x] **Broken Beats image fixed (index.html):** Replaced dead cursor image URL in works grid with working replacement
- [x] **Contact form autocomplete:** Added `autocomplete="name"`, `autocomplete="email"`, `autocomplete="organization"` to form fields
- [x] **Browser tests passed** on all 8 pages — no broken images, no layout issues, no broken links

## Phase 4.5 Completed Tasks (Booking Integration — Prototype)
- [x] **Calendly inline widget (contact.html):** Replaced external link with embedded inline calendar widget (`calendly-inline-widget`) + `widget.js` script
- [x] **Calendly popup widget (services.html):** "Book a consultation" CTA upgraded with progressive enhancement — `href="contact.html"` is the no-JS fallback, JS listener triggers `Calendly.initPopupWidget()` when widget.js loads
- [x] **Widget container styles (shared.css):** Added responsive inline widget styles — `border-radius: 8rem`, `box-shadow`, mobile height `520px`
- [x] **Accessibility:** Replaced inline `onclick` with event listener pattern; added `role="button"` and `aria-label`; preserves graceful degradation
- [x] **Prototype placeholder (contact.html):** For client demo, replaced the Calendly inline widget (which 404s with placeholder URL) with a styled `.booking-placeholder` containing calendar icon + "Online booking coming soon" text + email CTA. Removed `widget.js` script to eliminate 404 and console error.

## Phase 4.6 Completed Tasks (Technical SEO)
- [x] **OpenGraph tags added to all 8 pages:** `og:title`, `og:description`, `og:type`, `og:site_name`, `og:locale`, `og:url`, `og:image`, `og:image:width` (1200), `og:image:height` (675), `og:image:alt`
- [x] **Twitter Card tags added to all 8 pages:** `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`
- [x] **Canonical URLs added to all 8 pages:** Absolute canonicals using `https://sofiabodger.com/` placeholder domain
- [x] **Extra meta tags:** `robots` (index, follow), `theme-color` (#0f0f0d)
- [x] **Article markup for thinking pages:** `article:author` meta added to thinking-audience, thinking-brands, thinking-subculture (og:type=article)
- [x] **Verified:** 10 og tags + 4 twitter tags + 1 canonical per page across all 8 files

## Phase 4.7 Completed Tasks (Structured Data)
- [x] **JSON-LD Person schema (index.html):** Added `Person` schema with `@id: "https://sofiabodger.com/#person"`, including `name`, `jobTitle`, `description`, `url`, `image`, `email`, `telephone`, `address` (PostalAddress), `sameAs` (LinkedIn), and `knowsAbout` (6 expertise areas)
- [x] **JSON-LD WebSite schema (index.html):** Added `WebSite` schema in `@graph` with `publisher` referencing the Person `@id` (not duplicating inline), plus `name`, `url`, `description`
- [x] **JSON-LD Person schema (about.html & contact.html):** Reused the same `@id` for entity consistency; about.html added `mainEntityOfPage` linking the Person to the About WebPage
- [x] **JSON-LD ProfessionalService schema (services.html):** Added `ProfessionalService` with `hasOfferCatalog` listing 6 services (Cultural Strategy, Brand Positioning, Cultural Intelligence, Creative Direction, Partnership & Talent, Speaking & Workshops), `provider` referencing Person `@id`, `areaServed: Global`, and `mainEntityOfPage`
- [x] **JSON-LD Article schema (3 thinking pages):** Added `Article` schemas to thinking-audience.html, thinking-brands.html, and thinking-subculture.html — each with `headline`, `description`, `author` (Person `@id` ref), `publisher` (Person `@id` ref), `datePublished`, `dateModified`, `url`, `image`, and `mainEntityOfPage`
- [x] **Validation:** All JSON-LD blocks verified as valid JSON across all 6 files; schema types confirmed: WebSite + Person (index), Person (about, contact), ProfessionalService (services), Article ×3 (thinking pages)

## Phase 4.8 Completed Tasks (Prototype Polish)
- [x] **Contact form success modal:** Replaced the brief "Sent!" button flash with a full-screen modal overlay containing a checkmark icon, "Message sent" heading, "We'll be in touch within 24 hours" message, and a Close CTA. Modal supports backdrop click, close button, and ESC key dismissal. Focus returns to the submit button on close to prevent aria-hidden focus warnings.

## Phase 4.9 Completed Tasks (Responsive Layout Check)
- [x] **Mobile (375px) tested:** index.html, case-studies.html, contact.html, thinking-audience.html, thinking-brands.html, thinking-subculture.html — all passed with no horizontal overflow, readable text, working mobile menu, and zero console errors
- [x] **Tablet (768px) tested:** index.html passed — hero readable, works thumbnails visible, services preview grid and thinking cards reflow correctly
- [x] **Desktop (1024px) tested:** about.html, services.html, contact.html passed — timelines/values grids and service cards reflow at breakpoints correctly
- [x] **Marquee overflow fix:** Added `overflow-x: hidden` to `html` element in shared.css to prevent infinite-marquee `width: max-content` from inflating document `scrollWidth` beyond viewport on desktop

## Phase 5 Completed Tasks (Final Browser Sweep — Demo Ready)
- [x] **All 8 pages HTTP 200 verified:** Every page serves correctly from the local dev server
- [x] **All image URLs verified:** Every Unsplash image URL across all pages returns HTTP 200 — zero broken images
- [x] **Console error check:** Zero console errors, warnings, or failed network requests on every page (tested via browser automation)
- [x] **Page title verification:** Every page has the correct `<title>` tag and renders as expected
- [x] **No inline JS error patterns:** No `console.error`, `console.warn`, `throw`, or `ReferenceError` patterns found in any page source
- [x] **Responsive overflow fix confirmed:** `overflow-x: hidden` on `html` prevents marquee width inflation on desktop

---

## Immediate Next Steps (Prototype Demo Priority)
1. **Showreel Video Background:** Source and integrate a working MP4 video for the hero background to replace the Ken Burns still image — this is the biggest visual upgrade for the client demo.
2. **Self-host OG image:** Download the hero image locally to eliminate Unsplash dependency for social previews (nice-to-have for prototype).

## Phase 6 Completed Tasks (Case Study Pages Split)
- [x] **9 individual case study pages created:** Each of the 9 case studies now has its own dedicated page with full content, hero image, approach/outcome sections, and prev/next navigation
  - `case-study-hm.html` — H&M Social Relaunch
  - `case-study-nike-dfb.html` — Nike DFB Women's Team
  - `case-study-nike-airtopia.html` — Nike Airtopia
  - `case-study-nike-mindsets.html` — Nike Mind Sets
  - `case-study-nike-flyease.html` — Nike FlyEase
  - `case-study-foot-locker.html` — Foot Locker
  - `case-study-beats-daisy.html` — Beats Daisy
  - `case-study-johnnie-walker.html` — Johnnie Walker Blonde
  - `case-study-audi.html` — Audi Synchronised Swimming
- [x] **Full SEO per page:** Each case study page has unique title, description, OpenGraph tags, Twitter Cards, canonical URL, and JSON-LD `Article` schema with `author`/`publisher` `@id` references to the canonical Person entity
- [x] **Prev/next navigation:** Each page links to adjacent case studies in the original order; first page has no prev, last page has no next; all pages link back to the listing page
- [x] **`<link rel="prev/next">` pagination tags:** Added to all 9 pages for SEO pagination signals
- [x] **`data-page="case-studies"` on all detail pages:** Case Studies nav item stays highlighted when viewing any individual case study
- [x] **`shared.css` updated:** Added `.case-study-single` styles (header, hero, body, detail blocks, nav) for the individual page layout
- [x] **`case-studies.html` converted to listing page:** Removed long-form `.case-study-detail` content from all 9 cards; added "Read case study →" CTA buttons linking to individual pages; preserved image hover cursor effect
- [x] **`index.html` works links updated:** All 5 homepage work links now point directly to individual case study pages instead of `case-studies.html#anchor`
- [x] **Browser tests passed:** Listing page, first case study (H&M), last case study (Audi), and homepage all verified — correct titles, images load, navigation works, zero console errors
- [x] **Code review passed:** Reviewer confirmed consistency, SEO completeness, and suggested minor fixes (empty span nav, prev/next link tags) which were applied

## Phase 7 Completed Tasks (Design Sweep & Web Standards Audit)
- [x] **CSS design tokens expanded:** Added 14 derived CSS variables (`--border-subtle`, `--border-light`, `--border-medium`, `--border-hover`, `--text-dark-muted`, `--text-dark-faint`, `--text-dark-ghost`, `--text-light-muted`, `--text-light-subtle`, `--text-light-ghost`, `--overlay-dark`, `--overlay-dark-light`, `--primary-hover`, `--focus-ring`) and replaced ~50 hardcoded `rgba()` / `#hex` values across shared.css with semantic tokens.
- [x] **Broken CSS variable references fixed:** `.thinking-section` and `.thinking-card` used non-existent `--bg` and `--text` variables; corrected to `--bg-light` and `--text-dark`.
- [x] **Dead CSS selectors removed:** Deleted `.no-js .word-inner` (never applied) and `.footer .thinking-link` (JS injects `.hover-link` instead).
- [x] **Heading hierarchy fixed across all pages:** Eliminated h1→h4 skips by promoting headings to proper levels:
  - **about.html:** `.timeline-content h4` → `h3`, `.value-item h4` → `h3`, `.section-label` → `h2` (Experience & Approach)
  - **services.html:** `.service-card h3` → `h2`, `.process-item h4` → `h3`, `.section-label` → `h2` (Process)
  - **thinking pages (×3):** `.case-study-detail h4` → `h2`
  - **case-study single pages (×9):** `.detail-block h4` → `h2`
- [x] **Inline styles eliminated:** Removed 15+ inline `style="…"` attributes from thinking pages (`border-top: none`, `margin-bottom`, back-link wrapper) and case-studies listing CTAs (`margin-top`, `display: inline-flex`); moved to dedicated CSS utility classes (`.thinking-article`, `.thinking-meta`, `.thinking-back`, `.case-study-read-btn`).
- [x] **Accessibility improvements:** Added `aria-current="page"` to active desktop and mobile nav links in shared.js; added `aria-hidden="true"` + `tabindex="-1"` to footer marquee and section marquees in about.html/services.html to hide decorative motion from screen readers.
- [x] **Browser verification passed:** All heading levels confirmed in DOM via automated browser tests; zero console errors across index.html, about.html, services.html, and thinking-audience.html.

## Post-Demo / Production Checklist
- [ ] Replace placeholder domain (`https://sofiabodger.com`) with actual production domain across all canonical, og:url, and JSON-LD `@id` references.
- [ ] Wire up real Calendly account slug in contact.html inline widget and services.html popup CTA.
- [ ] Replace fake `setTimeout` form submission with real backend (Formspree, Basin, etc.) or mailto fallback.
- [ ] Source and add actual showreel footage to the hero video background and showreel overlay.