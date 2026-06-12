# PROJECT_CONTEXT.md

## Business Objective
Sofia Bodger, an elite Senior Strategy Director transitioning into independent freelance consultancy and entering the US market, requires an absolute tier-one digital flagship. This project delivers a high-end, premium portfolio and marketing website to serve as her primary digital headquarters, replacing manual CVs and Google Docs. 

The website aims to validate her expert credibility within 2 seconds of landing, position her as a premium strategic asset commanding a **$1,500 – $2,500 USD day rate**, and seamlessly convert high-value agency leaders into booked consultation calls.

---

## Target Audience & Core Message
*   **Target Audience:** Creative Directors, Founders, and Leadership at high-end agencies (e.g., Highsnobiety, Day Studio LA, The Yard) and culture-first brands seeking long-term strategic partnerships.
*   **Core Brand Takeaway:** *"Making Brands Culturally Alive."* Sofia brings a rare European perspective to the American market, synthesizing youth culture, fashion, music, and editorial insights to accurately forecast where culture is moving before anyone else does.

---

## Aesthetic Direction
*   **Visual Vibe:** "Fucking slick", ultra-clean, minimalist, and deeply immersive, heavily utilizing the pixel-perfect layout and interaction rules outlined in the `senior-strategist-portfolio-brief.md`[cite: 2].
*   **Typography Constraints:** System-wide implementation of `PP Neue Montreal` (Regular for body layout, Medium for headers)[cite: 2]. Sizing relies strictly on the **Fluid Type Scale** where `1rem = 0.078125vw` at a 1280px viewport—**zero absolute pixel values permitted**[cite: 2].
*   **Color Palette:** Sourced from the exact design tokens of `YARD – THE CREATIVE POWERHOUSE OF YOUTH CULTURE.html`[cite: 1]: Off-white background (`#f0f2f1`), dark primary text (`#1d1d1b`), deepest paneling (`#0f0f0d`), and muted elements (`#7c7c7c`)[cite: 2]. This monochrome architecture is injected with her signature **Cobalt Blue** brand accent variable token to flag high-end taste signals.
*   **Motion & Interaction:** Native integration of a smooth **Lenis Scroll Engine** combined with a dual-overlay horizontal wipe transition framework and a LERP-lagged dual-image custom desktop cursor[cite: 2].

---

## The 5-Page Scope

### 1. Homepage (`index.html`)
*   **Core Content Needs:** High-impact hero section featuring an edited compilation showreel video backdrop[cite: 1, 2]. Immediate value proposition text visible above the fold within a 2-second window[cite: 1, 2]. Word-splitting animation layout running the core tagline ("Senior brand strategist shaping culture.") paired with a looping block terminal cursor blink trigger[cite: 2]. Left-aligned `cta-play` icon driving showreel playback overlay configurations[cite: 2].

### 2. About (`about.html`)
*   **Core Content Needs:** Asymmetric lookbook style text and layout grids highlighting her 12+ years of premium agency background, her move from Europe to the US, and high-end client rosters. Narrative explicitly positions her as an independent strategic consultant rather than execution-level deck talent.

### 3. Services (`services.html`)
*   **Core Content Needs:** Displays a minimalist structural breakdown of high-leverage strategic capabilities (e.g., Narrative Architecture, Audience Intelligence, Brand Behavior)[cite: 2]. Integrates pre-qualification messaging layers to filter out low-leverage or low-budget agency inquiries.

### 4. Case Studies (`case-studies.html`)
*   **Core Content Needs:** Dense typographic grid layout tracking curated project case studies[cite: 2]. Renders full-width campaign text blocks utilizing standard list item structures[cite: 2]. Desktop layout activates a custom mouse-tracking dual image trailing container (`0.08` LERP grayscale leader / `0.05` LERP color trailer) to serve as a cinematic project preview mechanism[cite: 2].

### 5. Contact (`contact.html`)
*   **Core Content Needs:** A razor-sharp conversion portal integrating a persistent local time-zone clock synced to her active city destination rules[cite: 2]. Direct embedded configuration of an external scheduler scheduling calendar widget (`Calendly`/`Cal.com`) to eliminate back-and-forth emails.