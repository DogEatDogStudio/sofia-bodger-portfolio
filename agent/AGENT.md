# AGENT.md

## Purpose
This file defines behavior rules for the AI agent executing our 14-Day Web Sprint (5-Page Website Portfolio)[cite: 2]. It commands the agent to autonomously deliver a production-grade, launch-ready website wrapped in unforgettable, high-fidelity visual design[cite: 2].

---

## Scope & Deliverables
The agent must keep tasks strictly aligned with the sprint parameters to eliminate scope creep[cite: 2]:
1. **Front-end Development:** Build a complete, launch-ready 5-page website[cite: 2]. (Skip wireframes and mockups; build directly in code[cite: 2]).
2. **Technical SEO:** Setup basic search meta tags and clean site structures[cite: 2].
3. **Deployment Instructions:** Provide a plain-English checklist for live domain routing[cite: 2].

---

## About the Operator
The user is a non-technical creative director and marketing expert.
They think in:
* Brand aesthetics, tone, and visual rhythm
* User journeys and conversion performance[cite: 2]
* Absolute simplicity

**Communication Rule:** Never ask the user to debug code, configure tools, or read code errors. Translate all technical steps into visual or business-outcome choices.

---

## Core Optimization Principles
Prioritize decisions strictly in this order:
1. **Bold Aesthetic Intent:** Execute a distinct, unforgettable visual direction[cite: 2]. Absolutely **zero generic AI-slop** (no overused fonts like Inter/Arial, no cliché purple gradients, no cookie-cutter layouts)[cite: 2].
2. **Brand Continuity Override:** The specific brand identity, fonts, and color rules defined in PROJECT_CONTEXT.md are the ultimate authority[cite: 2]. If a client demands a clean corporate layout, execute it with extreme precision and typographic restraint rather than forced asymmetry[cite: 2].
3. **Visual Consistency:** Ensure the Header, Navigation, and Footer are identical and functional across all 5 pages.
4. **Performance & SEO:** Sub-second page loads, zero visual layout shifts, and clean metadata for basic technical SEO[cite: 2].

---

## Website Build Workflow

### Step 1: Establish the Style & Shell
Before building pages, set up the universal brand colors, typography fonts, and a single global layout containing the site header and footer.

### Step 2: Build the Homepage First
Build the complete, high-fidelity homepage. Once done, halt and ask the user for a **"Vibe Check."** Do not proceed to the other pages until the user gives visual approval on the homepage layout.

### Step 3: Batch the Remaining Pages
After the homepage vibe is approved, roll out the remaining 4 pages **maximum 2 at a time**. Pause between batches to ensure the output code is complete, fully realized, and never truncated with placeholders due to system length limits. Ensure all pages inherit the global header/footer shell.

---

## Tracking File Behavior Rules
The agent must treat the markdown tracking files as its living operational brain:
* **Read Context First:** Before touching a line of code at the start of a session, the agent must read `PROJECT_CONTEXT.md` to ground itself in the client's unique brand, vibe, and scope targets[cite: 2].
* **Update State Dynamically:** The moment a component, page section, or full page is completed and verified, the agent must immediately open `PROJECT_STATE.md` and check off the corresponding task item (`- [x]`).
* **No Hidden Steps:** If a new requirement is uncovered, log it in the "Technical Requirements Check" section of `PROJECT_STATE.md` before writing the code for it.

---

## Version Control & Vercel Deployment Workflow
To ensure safe deployment and follow the operator's review process, the agent must strictly adhere to this branching and Pull Request (PR) pipeline:
* **Never Work on Main:** Writing code or pushing commits directly to the `main` branch is strictly forbidden. 
* **Feature Branching:** Always create a descriptive branch for new tasks (e.g., `feature/homepage-hero` or `feature/about-page`).
* **Atomic Commits:** Commit work incrementally with clear descriptions as sections are completed.
* **Pull Request Creation:** When a layout batch or page is ready for review, push the feature branch and open a Pull Request (PR). This automatically triggers a Vercel preview deployment.
* **Zero Autonomous Merging:** The agent is strictly forbidden from merging its own PRs. 
* **The Vercel Review Loop:** The operator will check the live Vercel preview link. If the preview is bad, the agent must implement requested revisions directly on the same feature branch. The operator will handle the final merge manually when satisfied.

---

## Image & Asset Optimization Guardrails (Platform-Agnostic Static Specification)
To guarantee sub-second load times and zero layout shifts regardless of the final production hosting platform, the agent must strictly follow these rules:
* **Pre-Optimized Local Assets:** Direct the operator to place highly compressed modern formats (WebP/AVIF) into a dedicated local `assets/images/` folder. Never link directly to massive raw `.png` or `.jpg` source files.
* **Layout Shift Prevention:** Every `<img>` and `<video>` tag must feature explicit `width=""` and `height=""` aspect-ratio attributes to prevent visual layout shifts (CLS) during page loading sequences.
* **Responsive Picture Arrays:** Implement semantic HTML5 `<picture>` structures with progressive media source fallbacks and enforce native browser lazy loading (`loading="lazy"`) for all below-the-fold content modules.

---

## Domain Launch & Deployment Guardrails
For live launch routing, the agent must never ask the user to use terminal deployment scripts[cite: 2]. 
1. The agent will first provide instructions on how to use a web-based drag-and-drop deployment platform (e.g., Netlify Drop or Vercel dashboard) to upload the compiled production folder.
2. Once the platform generates the live project endpoints, the agent will present a clean, copy-pasteable checklist of the exact DNS records (A Records, CNAME values) for the operator to insert into their domain registrar (e.g., GoDaddy, Namecheap)[cite: 2].

---

## Definition of Done
The website is only complete when:
* **Visual Check:** All 5 pages look perfect across mobile and desktop devices. No text clipping or broken layouts.
* **Flawless Navigation:** Every internal link works perfectly when clicked (no 404 errors).
* **SEO & Semantics:** HTML uses proper structural elements (`<main>`, `<section>`, `<nav>`)[cite: 2]. Page titles and meta descriptions are set up correctly for Google indexing[cite: 2].
* **Asset Optimized:** All image elements utilize explicit aspect-ratio dimensions and utilize the optimized structural asset directory (`assets/images/`) as defined in the Image Guardrails.output formats.
* **Launch Ready:** The site compiles flawlessly, and the custom domain integration checklist is provided[cite: 2].

---

## Output Format (For Layout Deliveries)

### Objective
The specific page being delivered and its conversion goal[cite: 2].

### Aesthetic Strategy
The visual tone executed and how it beautifully adapts from desktop to mobile.

### Code Delivery
Clean, fully functional, production-ready website code.

### Next Step
Clear prompt instructions telling the operator exactly what to look at or check next.