# AGENT.md

## Purpose
This file defines the permanent operating rules for the AI agent 
building and maintaining this project. These rules apply to every 
session without exception.

---

## About the Operator
The user is a non-technical Creative Director, Product Owner, and 
Lead QA Engineer running a web design agency. They are not an 
engineer and must never be asked to debug code, read raw errors, 
or configure tools manually.

They think in:
- Brand aesthetics, tone, and visual rhythm
- User journeys and conversion performance
- Business outcomes, not technical implementation

**Communication Rule:** Translate all technical decisions into 
plain visual or business-outcome language. When a task is complete, 
tell the operator exactly what to look at in their browser to 
verify it.

---

## Project Scope
5-page portfolio website for Sofia Bodger — Senior Strategy Director 
transitioning to independent consultancy and entering the US market.

Pages: Home, About, Services, Case Studies, Contact

Full brand, aesthetic, audience, and content details are defined 
in PROJECT_CONTEXT.md. Read that file at the start of every session 
before touching any code.

---

## Core Optimization Principles
Prioritize decisions strictly in this order:

1. **Bold Aesthetic Intent:** Execute a distinct, unforgettable 
   visual direction. Zero generic AI output — no overused fonts 
   like Inter/Arial, no cliché gradients, no cookie-cutter layouts.

2. **Brand Continuity:** The brand identity, fonts, and color rules 
   in PROJECT_CONTEXT.md are the ultimate authority. Never override 
   them.

3. **Visual Consistency:** Header, Navigation, and Footer must be 
   identical and functional across all 5 pages at all times.

4. **Performance & SEO:** Sub-second page loads, zero visual layout 
   shifts, clean metadata for basic technical SEO.

---

## The 5-Stage Blueprint
All development follows this sequence strictly. Never skip ahead 
or mix stages:

- Stage 1: Architecture & Tech Stack (foundation, global style tokens)
- Stage 2: Structure & Wireframe (HTML skeleton, layout only)
- Stage 3: Styling & UI (CSS, visual design, responsiveness)
- Stage 4: Functionality & Interactivity (JavaScript, logic, forms)
- Stage 5: Production & Deployment (build check, final commit, push)

---

## The Single Task Rule
Only work on one specific task at a time. Never combine multiple 
fixes or features in a single session. Complete one task fully, 
pass all checks, and return to the operator before starting the next.

---

## The Anti-Technical Debt Protocol
1. **Systemic over Local:** Never write quick patches or 
   page-specific overrides for global elements (nav, headers, 
   footers, global spacing). Every fix must use global styling 
   variables or tokens.

2. **Impact Analysis:** Before modifying any file, identify which 
   other components or pages depend on that file and list them.

3. **Side Effect Check:** After any visual layout change, verify 
   the fix across all 5 pages on both desktop and mobile before 
   reporting back to the operator.

4. **Refresh Test:** Any spacing or layout fix must work correctly 
   on both click navigation AND hard refresh (CMD+R). Never rely 
   on JavaScript to apply base layout spacing.

5. **Zero Error Gate:** Never hand a task back to the operator 
   if it introduces console warnings, layout shifts, or build errors.

---

## The Verify-then-Commit Workflow
This is the mandatory sequence for every single task:

1. Complete the task in local files
2. Run a full build and health check — zero errors required
3. Report back: "Clean. Ready for your visual review on localhost."
4. List exactly what pages and elements the operator should check
5. Wait for operator visual confirmation before committing
6. Use Conventional Commits format for all commit messages:
   - feat: added portfolio grid layout
   - fix: resolved nav overlap on inner pages
   - chore: updated global spacing tokens
7. Never run git push unless the operator explicitly confirms 
   a milestone is complete and ready to deploy

---

## The UI/UX Pro Max Skill Rule
Only invoke the UI/UX Pro Max skill for:
- Building new sections or pages from scratch
- Making intentional visual design decisions
- Fixing layout bugs that require design judgment

Do NOT invoke it for:
- Content or copy fixes
- Link or button hookups
- Error fixes or build checks
- Routine code cleanup

---

## Version Control Workflow
- Never push directly to main without operator approval
- Use Atomic Commits — one commit per completed, verified task
- Never merge your own changes without operator instruction
- When a full page or milestone is verified by the operator, 
  push to GitHub and confirm the live preview link

---

## Image & Asset Rules
- All images must use WebP or AVIF format
- Every img and video tag must include explicit width and height 
  attributes to prevent layout shifts
- Use native lazy loading for all below-the-fold content
- Never link directly to uncompressed raw PNG or JPG files

---

## The Session Start Checklist
At the start of every session, before touching any code:
1. Read PROJECT_CONTEXT.md to ground in brand and scope
2. Read PROJECT_STATE.md to understand current progress
3. Confirm to the operator what is done, what is in progress, 
   and what is next
4. Wait for the operator to confirm the first task before 
   writing any code

---

## The Session End Checklist
At the end of every working session:
1. Update PROJECT_STATE.md with all completed tasks and 
   their commit messages
2. Log any known bugs or side effects spotted but not yet fixed
3. Log any design or approach decisions made during the session
4. Confirm to the operator that the state file has been updated 
   and the project is safe to close

---

## Definition of Done
A task is only complete when:
- The fix addresses the root system cause, not a local patch
- Zero build errors or console warnings
- Visually verified by the operator on localhost
- Checked across all 5 pages on desktop and mobile
- Works on both click navigation and hard refresh
- Committed with a clean conventional commit message

The website is only launch-ready when:
- All 5 pages look perfect on mobile and desktop
- Every internal link works with zero 404 errors
- HTML uses proper semantic structure
- All images are optimised and use correct aspect ratio dimensions
- The site compiles flawlessly with zero errors
- The operator has given final visual approval
