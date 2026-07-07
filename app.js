/* ============================================================
   CAFE AMORE — HOME PAGE JAVASCRIPT v2
   app.js — Animations, interactions, navigation
   ============================================================ */

'use strict';

// ── Navigation ───────────────────────────────────────────────
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const heroBg = document.getElementById('heroBg');

// Scroll-based nav state
function handleNavScroll() {
  const scrollY = window.scrollY;
  nav.classList.toggle('scrolled', scrollY > 60);
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

// Hero background slow-zoom on load
if (heroBg) {
  window.addEventListener('load', () => {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
  });
}

// Mobile menu toggle
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    hamburger.classList.toggle('open', !isOpen);
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close mobile nav on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Scroll Indicator ────────────────────────────────────────
const heroScroll = document.getElementById('heroScroll');
if (heroScroll) {
  heroScroll.addEventListener('click', () => {
    const dishesEl = document.getElementById('dishes');
    if (dishesEl) dishesEl.scrollIntoView({ behavior: 'smooth' });
  });
  heroScroll.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') heroScroll.click();
  });
}

// ── Scroll Reveal (IntersectionObserver) ─────────────────────
function initReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

initReveal();

// ── Gallery Lightbox ─────────────────────────────────────────
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const galleryItems  = document.querySelectorAll('.gallery-strip-item');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { if (lightboxImg) lightboxImg.src = ''; }, 300);
}

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('.gallery-strip-img');
    if (img) openLightbox(img.src, img.alt);
  });
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') item.click();
  });
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ── Gallery Strip Navigation ──────────────────────────────────
const galleryStrip = document.getElementById('galleryStrip');
const galleryNext  = document.getElementById('galleryNext');

if (galleryStrip && galleryNext) {
  galleryNext.addEventListener('click', () => {
    const itemWidth = galleryStrip.querySelector('.gallery-strip-item')?.offsetWidth || 260;
    galleryStrip.scrollBy({ left: itemWidth + 16, behavior: 'smooth' });
  });

  // Loop back to start when end is reached
  galleryStrip.addEventListener('scroll', () => {
    const maxScroll = galleryStrip.scrollWidth - galleryStrip.clientWidth;
    if (galleryStrip.scrollLeft >= maxScroll - 10) {
      setTimeout(() => {
        galleryStrip.scrollTo({ left: 0, behavior: 'smooth' });
      }, 400);
    }
  });
}

// ── Parallax Hero ─────────────────────────────────────────────
const heroSection = document.querySelector('.hero');
if (heroSection && heroBg) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          heroBg.style.transform = `scale(1) translateY(${scrolled * 0.22}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ── Active nav link on scroll ─────────────────────────────────
const sections = ['dishes', 'about', 'gallery', 'reservation', 'visit'];
const navLinks  = document.querySelectorAll('.nav-link');

function setActiveNav() {
  const scrollY = window.scrollY + window.innerHeight / 3;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const { top, bottom } = el.getBoundingClientRect();
    const elTop    = top + window.scrollY;
    const elBottom = bottom + window.scrollY;
    if (scrollY >= elTop && scrollY < elBottom) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}

window.addEventListener('scroll', setActiveNav, { passive: true });

// ── Newsletter form ───────────────────────────────────────────
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    if (emailInput && emailInput.value) {
      emailInput.value = '';
      emailInput.placeholder = 'Thank you! ✓';
      setTimeout(() => { emailInput.placeholder = 'Enter your email'; }, 3000);
    }
  });
}

// ── Smooth page load ──────────────────────────────────────────
document.documentElement.classList.add('page-loaded');
