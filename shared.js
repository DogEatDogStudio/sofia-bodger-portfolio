/* ========================================
   SHARED.JS — Sofia Bodger Portfolio
   Global scripts: Lenis, GSAP, Cursor, Clock, Menu
   ======================================== */

(function () {
  'use strict';

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
  // HEADER SCROLL BEHAVIOR
  // ========================================
  const header = document.querySelector('.layout-header');
  let ticking = false;

  function updateHeader() {
    header.classList.toggle('menu-visible', window.scrollY > 100);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

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
  const mediaCursorWrapper = document.querySelector('.media-cursor-wrapper');
  const mediaCursorImg = mediaCursorWrapper?.querySelector('img');
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let mediaX = 0, mediaY = 0, mediaTargetX = 0, mediaTargetY = 0;
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
    // Media cursor follow
    mediaX += (mediaTargetX - mediaX) * 0.1;
    mediaY += (mediaTargetY - mediaY) * 0.1;
    if (mediaCursorWrapper?.classList.contains('visible')) {
      mediaCursorWrapper.style.transform = `translate(${mediaX - 102}px, ${mediaY - 78}px)`;
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
        works.style.color = 'rgba(29, 29, 27, 0.2)';
        item.style.color = '#1d1d1b';
        const copy = item.querySelector('.copy');
        if (copy) copy.style.opacity = '1';
        // Cursor work state
        cursorDot?.classList.add('cursor--work');
        cursorRing?.classList.add('cursor--work');
        // Media cursor preview
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
        works.style.color = '#1d1d1b';
        item.style.color = '';
        const copy = item.querySelector('.copy');
        if (copy) copy.style.opacity = '0';
        cursorDot?.classList.remove('cursor--work');
        cursorRing?.classList.remove('cursor--work');
        mediaCursorWrapper?.classList.remove('visible');
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
  // HERO PARALLAX (index page only)
  // ========================================
  function initHeroParallax() {
    if (prefersReducedMotion) return;
    const heroBg = document.querySelector('.index-hero .background .media');
    if (!heroBg) return;
    gsap.to(heroBg, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.index-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // ========================================
  // DOM READY
  // ========================================
  document.addEventListener('DOMContentLoaded', () => {
    // Remove no-js class (enables CSS fallbacks if JS fails)
    document.documentElement.classList.remove('no-js');
    document.body.classList.add('page-finish');
    playPageTransition();
    initScrollReveals();
    initHeroParallax();
  });
})();
