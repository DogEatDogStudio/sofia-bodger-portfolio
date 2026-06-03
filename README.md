# Sofia Bodger Portfolio

**Making Brands Culturally Alive** — A premium editorial portfolio website for Sofia Bodger, Senior Strategy Director specializing in brand strategy, cultural positioning, and creative direction.

## Overview

A 5-page freelance consultancy website built with a YARD-inspired editorial design philosophy:

- **Huge typography** with tight tracking and uppercase headings
- **Dark hero section** with GSAP-powered staggered text reveal
- **Smooth scroll** via Lenis with integrated GSAP ScrollTrigger
- **Cursor-follow media** preview on project hover (desktop)
- **Continuous marquee** text in the editorial footer
- **Cobalt blue** used strictly as an accent color
- **Fully responsive** design for mobile, tablet, and desktop

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Full-viewport hero, project index with cursor-follow media, about teaser, CTA |
| About | `about.html` | Bio, stats, expertise cards, experience timeline |
| Services | `services.html` | 6 service offerings, 4-step process, pricing tiers |
| Case Studies | `case-studies.html` | Category-filtered project grid, featured case study |
| Contact | `contact.html` | Contact info, Calendly booking embed, FAQ accordion |

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, fluid typography with `clamp()`, responsive grid/flexbox
- **GSAP + ScrollTrigger** — scroll-driven reveal animations, staggered hero text
- **Lenis** — buttery smooth scrolling with GSAP integration via `scrollerProxy`
- **Google Fonts** — Inter (clean sans-serif)

## Getting Started

### Quick Start (no build step required)

```bash
# Clone the repository
git clone https://github.com/DogEatDogStudio/sofia-bodger-portfolio.git
cd sofia-bodger-portfolio

# Start a local server
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Alternative Local Servers

```bash
# Using Node.js
npx serve .

# Using PHP
php -S localhost:8080

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

## Project Structure

```
├── index.html          # Homepage — hero, projects, about teaser, CTA, footer
├── about.html          # About page — bio, stats, expertise, timeline
├── services.html       # Services page — offerings, process, pricing
├── case-studies.html   # Case studies page — project grid, featured work
├── contact.html        # Contact page — info, Calendly embed, FAQ
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Key Interactions

- **Hero Text Reveal** — Staggered GSAP animation on page load with `power4.out` easing
- **Cursor-Follow Media** — Hovering project titles reveals a floating image that tracks the cursor (desktop only)
- **Scroll Reveals** — Sections fade in from below as they enter the viewport
- **Hover Link Effect** — Navigation links slide text upward on hover to reveal a duplicate label
- **Live Clock** — Real-time clock displayed in the hero section
- **Marquee Footer** — Continuous horizontal scrolling text banner
- **Mobile Menu** — Hamburger toggle with animated open/close states

## Booking Integration

The "Book Consultation" buttons integrate with [Calendly](https://calendly.com). Update the Calendly URL in all HTML files to point to your booking page:

```html
<!-- Search for this pattern across all files -->
href="https://calendly.com/your-link"
```

## Deployment

This is a static site — no build process required. Deploy to any static hosting provider:

- **GitHub Pages** — Push to a `gh-pages` branch or enable in repo settings
- **Netlify** — Connect the repo for automatic deploys
- **Vercel** — Import the project for zero-config deployment
- **Cloudflare Pages** — Connect and deploy

## Credits

- **Client:** Sofia Bodger — Senior Strategy Director
- **Design Philosophy:** Inspired by YARD editorial design — disciplined typography, negative space, motion-driven navigation
- **Built with:** [Codebuff](https://codebuff.com)

## License

All content and design assets are proprietary to Sofia Bodger / Dog Eat Dog Studio.
