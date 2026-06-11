/* ========================================
   SHARED.JS — Sofia Bodger Portfolio
   Global scripts: Lenis, GSAP, Cursor, Clock, Menu
   ======================================== */

(function () {
  'use strict';

  // ========================================
  // TEMPLATE INJECTION — Header, Footer, Mobile Menu
  // ========================================
  const SVG_LOGO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 61" fill="currentColor"><text x="0" y="45" font-size="40" font-weight="500" letter-spacing="-2">SOFIA</text><text x="180" y="45" font-size="40" font-weight="400" letter-spacing="-1" opacity="0.5">BODGER</text></svg>';
  const ARROW_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="currentColor" d="M9.5 7H2v-1h7.5l-4-4V7zm4.5 4.5l-7-7 1-1 7 7-1 1z"/></svg>';

  const NAV_ITEMS = [
    { file: 'index.html', label: 'Work', index: 0 },
    { file: 'about.html', label: 'About', index: 1 },
    { file: 'services.html', label: 'Services', index: 2 },
    { file: 'case-studies.html', label: 'Case Studies', index: 3 },
    { file: 'contact.html', label: 'Contact', index: 4 },
  ];

  const THINKING_ITEMS = [
    { file: 'thinking-brands.html', label: 'Why Brands Lose Cool' },
    { file: 'thinking-audience.html', label: 'The Audience Is The Brief' },
    { file: 'thinking-subculture.html', label: 'Subculture As Signal' },
  ];

  function injectTemplates() {
    const page = document.body.getAttribute('data-page') || '';
    const isIndex = page === 'index';

    // --- Cursor divs ---
    let cursorHTML = '<div class="cursor-dot" aria-hidden="true"></div><div class="cursor-ring" aria-hidden="true"></div>';
    if (isIndex || page === 'case-studies') {
      cursorHTML += '<div class="media-cursor-wrapper" aria-hidden="true"><div class="img-wrapper"><img src="" alt=""></div></div>';
    }
    if (page === 'case-studies') {
      cursorHTML += '<div class="media-cursor-wrapper media-cursor-trail" aria-hidden="true"><div class="img-wrapper"><img src="" alt=""></div></div>';
    }

    // --- Transition overlays ---
    const transitionsHTML = '<div class="transitions-overlays" aria-hidden="true"><div class="transition-overlay"></div><div class="transition-overlay transition-overlay-2"><svg viewBox="0 0 200 60" fill="currentColor"><text x="0" y="45" font-size="40" font-weight="500" letter-spacing="-2">SOFIA</text><text x="110" y="45" font-size="40" font-weight="400" letter-spacing="-1" opacity="0.5">BODGER</text></svg></div></div>';

    // --- Desktop nav ---
  const desktopNavItems = NAV_ITEMS.map(item => {
    const active = page === item.file.replace('.html', '');
    const isActive = active ? ' class="is-active"' : '';
    const ariaCurrent = active ? ' aria-current="page"' : '';
    return '<li style="--index:' + item.index + '"><a href="' + item.file + '"' + isActive + ariaCurrent + '><span class="link-text">' + item.label + '</span></a></li>';
  }).join('');

    // --- Mobile nav ---
  const mobileNavItems = NAV_ITEMS.map(item => {
    const active = page === item.file.replace('.html', '');
    const isActive = active ? ' class="is-active"' : '';
    const ariaCurrent = active ? ' aria-current="page"' : '';
    return '<li style="--index:' + item.index + '"><a href="' + item.file + '"' + isActive + ariaCurrent + '>' + item.label + '</a></li>';
  }).join('');

    // --- Header ---
    const headerHTML = '<header class="layout-header lh"><div class="wrapper"><div class="top"><div class="logo-wrapper"><div class="logo-outer"><a href="index.html" aria-label="Sofia Bodger - Home">' + SVG_LOGO + '</a></div></div><div class="right"><button aria-controls="menu-mobile" aria-expanded="false" aria-label="Open menu"></button></div><div class="right -dk"><div class="location"><span>Amsterdam, NL</span></div><span class="live-clock" id="live-clock"></span><a href="thinking.html" class="initiatives-btn"><span class="decorator"><i></i><i></i><i></i></span><span class="label-text" data-label="Thinking">Thinking</span></a></div></div><nav style="--items:5" class="menu -dk"><ul>' + desktopNavItems + '</ul></nav></div></header>';

    // --- Mobile menu ---
    const contactLinks = '<ul><li><a href="mailto:sofiabodger@me.com">sofiabodger@me.com</a></li><li><a href="tel:+316214206136">+31 6 2142 06136</a></li></ul>';
    const mobileMenuHTML = '<div id="menu-mobile" class="menu-mobile" role="dialog" aria-label="Navigation menu"><div class="outer" data-lenis-prevent=""><div class="inner"><div class="views"><div class="view view-base"><div class="menus"><ul>' + mobileNavItems + '</ul>' + contactLinks + '</div><div class="menu-footer"><a href="contact.html" class="mobile-book-cta">Book a consultation ' + ARROW_SVG + '</a><div><p>Amsterdam, NL</p></div><div><p>Senior Strategy Director</p></div></div></div></div></div></div></div>';

    // --- Footer ---
    const footerNavItems = NAV_ITEMS.map(item =>
      '<li><a href="' + item.file + '" class="hover-link"><span data-label="' + item.label + '">' + item.label + '</span></a></li>'
    ).join('');
    const footerThinkingItems = THINKING_ITEMS.map(item =>
      '<li><a href="' + item.file + '" class="hover-link"><span data-label="' + item.label + '">' + item.label + '</span></a></li>'
    ).join('');

    const marqueeInner = '<div class="marquee__item">Book a consultation</div><div class="marquee__item">—</div><div class="marquee__item">Making brands culturally alive</div><div class="marquee__item">—</div><div class="marquee__item">Book a consultation</div><div class="marquee__item">—</div><div class="marquee__item">Making brands culturally alive</div><div class="marquee__item">—</div><div class="marquee__item">Book a consultation</div><div class="marquee__item">—</div><div class="marquee__item">Making brands culturally alive</div><div class="marquee__item">—</div>';

    const footerHTML = '<footer class="footer"><div class="logo-wrapper-footer"><div class="footer-logo-track">' + SVG_LOGO + SVG_LOGO + '</div></div><div class="menus"><div class="main-menu"><ul>' + footerNavItems + '</ul></div><div class="initiatives-menu"><ul>' + footerThinkingItems + '</ul></div><div class="legals"><ul class="menu"><li><a href="mailto:sofiabodger@me.com" class="hover-link"><span data-label="sofiabodger@me.com">sofiabodger@me.com</span></a></li><li><a href="tel:+316214206136" class="hover-link"><span data-label="+31 6 2142 06136">+31 6 2142 06136</span></a></li></ul></div></div><div class="bottom-text"><a href="contact.html"><span>Making brands</span></a><a href="contact.html"><span>culturally alive</span></a></div><div class="marquee-2" aria-hidden="true"><a href="contact.html" class="marquee-link" tabindex="-1"><div class="marquee"><div class="marquee__list">' + marqueeInner + marqueeInner + '</div></div></a></div></footer>';

    // --- Inject all shared elements ---
    const sharedBefore = cursorHTML + transitionsHTML + headerHTML + mobileMenuHTML;
    document.body.insertAdjacentHTML('afterbegin', sharedBefore);

    const mainEl = document.querySelector('main');
    if (mainEl) {
      mainEl.insertAdjacentHTML('afterend', footerHTML);
    }
  }

  injectTemplates();

  // ========================================
  // LENIS SMOOTH SCROLL
  // ========================================
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  });
  window.__lenis = lenis;

  // Connect Lenis to GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  // ========================================
  // REDUCED MOTION CHECK
  // ========================================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ========================================
  // PAGE LOAD TRANSITION
  // ========================================
  function playPageTransition() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.transition-overlay, .transition-overlay-2').forEach(o => {
        o.style.display = 'none';
      });
      return;
    }

    const overlay = document.querySelector('.transition-overlay');
    const overlay2 = document.querySelector('.transition-overlay-2');
    if (!overlay || !overlay2) return;

    gsap.timeline()
      .set(overlay, { clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)' })
      .set(overlay2, { clipPath: 'inset(0% 0 0 0)' })
      .to(overlay, {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        duration: 0.8,
        ease: 'power4.inOut',
      })
      .to(overlay2, {
        clipPath: 'inset(0% 0 100% 0)',
        duration: 0.6,
        ease: 'power4.inOut',
      }, '-=.4')
      .set('body', { overflow: '' });
  }

  // ========================================
  // SCROLL REVEAL ANIMATIONS
  // ========================================
  function initScrollReveals() {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      if (prefersReducedMotion) {
        el.classList.add('revealed');
        return;
      }
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('revealed'),
        once: true,
      });
    });
  }

// ========================================
// MOBILE MENU
  // ========================================
  const menuBtn = document.querySelector('.right button[aria-controls="menu-mobile"]');
  const menuMobile = document.getElementById('menu-mobile');

  if (menuBtn && menuMobile) {
    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
      menuMobile.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('lenis-stopped', !isOpen);
      if (!isOpen) lenis.stop(); else lenis.start();
    });

    menuMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuMobile.classList.remove('is-open');
        document.body.classList.remove('lenis-stopped');
        lenis.start();
      });
    });
  }

  // ========================================
  // ESCAPE KEY HANDLER
  // ========================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuMobile?.classList.contains('is-open')) {
      menuBtn?.setAttribute('aria-expanded', 'false');
      menuMobile.classList.remove('is-open');
      document.body.classList.remove('lenis-stopped');
      lenis.start();
    }
  });

  // ========================================
  // CUSTOM CURSOR
  // ========================================
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  const mediaCursorWrapper = document.querySelector('.media-cursor-wrapper:not(.media-cursor-trail)');
  const mediaCursorImg = mediaCursorWrapper?.querySelector('img');
  // Dual-trail for case studies: grayscale leader (0.08 LERP) + color trailer (0.05 LERP)
  const trailWrapper = document.querySelector('.media-cursor-trail');
  const trailImg = trailWrapper?.querySelector('img');
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let mediaX = 0, mediaY = 0, mediaTargetX = 0, mediaTargetY = 0;
  let trailX = 0, trailY = 0, trailTargetX = 0, trailTargetY = 0;
  let cursorVisible = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    }
    if (!cursorVisible) {
      cursorVisible = true;
      cursorDot?.classList.remove('cursor--hidden');
      cursorRing?.classList.remove('cursor--hidden');
    }
  });

  document.addEventListener('mouseleave', () => {
    cursorDot?.classList.add('cursor--hidden');
    cursorRing?.classList.add('cursor--hidden');
    mediaCursorWrapper?.classList.remove('visible');
  });

  document.addEventListener('mouseenter', () => {
    if (cursorVisible) {
      cursorDot?.classList.remove('cursor--hidden');
      cursorRing?.classList.remove('cursor--hidden');
    }
  });

  function animateCursors() {
    // Ring follow with lag
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    if (cursorRing) {
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
    }
    // Media cursor follow (grayscale leader - 0.08 LERP)
    mediaX += (mediaTargetX - mediaX) * 0.08;
    mediaY += (mediaTargetY - mediaY) * 0.08;
    if (mediaCursorWrapper?.classList.contains('visible')) {
      mediaCursorWrapper.style.transform = `translate(${mediaX - 102}px, ${mediaY - 78}px)`;
    }
    // Trail cursor follow (color trailer - 0.05 LERP)
    trailX += (trailTargetX - trailX) * 0.05;
    trailY += (trailTargetY - trailY) * 0.05;
    if (trailWrapper?.classList.contains('visible')) {
      trailWrapper.style.transform = `translate(${trailX - 102}px, ${trailY - 78}px)`;
    }
    requestAnimationFrame(animateCursors);
  }
  animateCursors();

  // ========================================
  // WORKS HOVER EFFECT (index page only)
  // ========================================
  const works = document.querySelector('.works');
  const workItems = document.querySelectorAll('.work');

  if (works && workItems.length) {
    workItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        cursorDot?.classList.add('cursor--work');
        cursorRing?.classList.add('cursor--work');
        const img = item.querySelector('.medias img[data-cursor-img]');
        if (img && mediaCursorImg && mediaCursorWrapper) {
          mediaCursorImg.src = img.getAttribute('data-cursor-img');
          mediaCursorWrapper.classList.add('visible');
        }
      });

      item.addEventListener('mousemove', (e) => {
        mediaTargetX = e.clientX;
        mediaTargetY = e.clientY;
      });

      item.addEventListener('mouseleave', () => {
        cursorDot?.classList.remove('cursor--work');
        cursorRing?.classList.remove('cursor--work');
        mediaCursorWrapper?.classList.remove('visible');
      });
    });
  }

  // ========================================
  // CASE STUDIES HOVER EFFECT (dual-trail image preview)
  // ========================================
  const caseStudyItems = document.querySelectorAll('.case-study-item');
  if (caseStudyItems.length && trailWrapper && mediaCursorWrapper) {
    caseStudyItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const img = item.querySelector('.media-wrapper img');
        if (img) {
          const src = img.getAttribute('src');
          // Grayscale leader
          if (mediaCursorImg) { mediaCursorImg.src = src; }
          mediaCursorWrapper.classList.add('visible');
          // Color trailer
          if (trailImg) { trailImg.src = src; }
          trailWrapper.classList.add('visible');
        }
        cursorDot?.classList.add('cursor--work');
        cursorRing?.classList.add('cursor--work');
      });
      item.addEventListener('mousemove', (e) => {
        mediaTargetX = e.clientX;
        mediaTargetY = e.clientY;
        trailTargetX = e.clientX;
        trailTargetY = e.clientY;
      });
      item.addEventListener('mouseleave', () => {
        mediaCursorWrapper.classList.remove('visible');
        trailWrapper.classList.remove('visible');
        cursorDot?.classList.remove('cursor--work');
        cursorRing?.classList.remove('cursor--work');
      });
    });
  }

  // ========================================
  // LINK HOVER CURSOR STATES
  // ========================================
  document.querySelectorAll('a, button, [role="button"], .hover-link').forEach(el => {
    if (el.closest('.work')) return;
    el.addEventListener('mouseenter', () => {
      cursorDot?.classList.add('cursor--link');
      cursorRing?.classList.add('cursor--link');
    });
    el.addEventListener('mouseleave', () => {
      cursorDot?.classList.remove('cursor--link');
      cursorRing?.classList.remove('cursor--link');
    });
  });

  // ========================================
  // MAGNETIC BUTTON EFFECT
  // ========================================
  document.querySelectorAll('.cta-book, .mobile-book-cta, .submit-btn, .util-button, .initiatives-btn').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  // ========================================
  // HIDE CURSOR IN MOBILE MENU OVERLAY
  // ========================================
  if (menuMobile) {
    new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          if (menuMobile.classList.contains('is-open')) {
            cursorDot?.classList.add('cursor--hidden');
            cursorRing?.classList.add('cursor--hidden');
            mediaCursorWrapper?.classList.remove('visible');
          } else {
            cursorDot?.classList.remove('cursor--hidden');
            cursorRing?.classList.remove('cursor--hidden');
          }
        }
      });
    }).observe(menuMobile, { attributes: true });
  }

  // ========================================
  // LIVE CLOCK (Amsterdam)
  // ========================================
  function updateClock() {
    const now = new Date();
    const month = now.getMonth();
    const isDST = month >= 2 && month <= 9 && (month > 2 || now.getDate() >= 25) && (month < 9 || now.getDate() < 25);
    const time = now.toLocaleTimeString('en-GB', {
      timeZone: 'Europe/Amsterdam',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    const clockEl = document.getElementById('live-clock');
    if (clockEl) clockEl.textContent = time + (isDST ? ' CEST' : ' CET');
  }
  updateClock();
  setInterval(updateClock, 1000);

  // ========================================
  // DOM READY
  // ========================================
  document.addEventListener('DOMContentLoaded', () => {
    // Remove no-js class (enables CSS fallbacks if JS fails)
    document.documentElement.classList.remove('no-js');
    document.body.classList.add('page-finish');
    playPageTransition();
    initScrollReveals();
  });
})();
