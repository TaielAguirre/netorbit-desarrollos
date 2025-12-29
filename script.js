// ============================================
// NetOrbit - Minimal JavaScript
// Professional & Subtle Interactions
// ============================================

// ============================================
// MOBILE NAVIGATION
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (href === '#' || href === '') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      const navbarHeight = 72;
      const targetPosition = target.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// WHATSAPP CLICK TRACKING
// ============================================
const whatsappButtons = document.querySelectorAll('a[href^="https://wa.me"]');

whatsappButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Track WhatsApp clicks (ready for analytics)
    console.log('WhatsApp CTA clicked');

    // If you add Google Analytics later:
    // gtag('event', 'whatsapp_click', {
    //   'event_category': 'engagement',
    //   'event_label': button.textContent.trim()
    // });
  });
});

// ============================================
// CONVERSION TRACKING
// ============================================
const whatsappButtons = document.querySelectorAll('.btn-whatsapp');

whatsappButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Google Ads conversion tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-17840926402/kd3tCPG_ptkbEMLdm7tC',
        'value': 1.0,
        'currency': 'ARS'
      });
      console.log('Google Ads conversion tracked');
    }

    // Meta Pixel (if configured later)
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }
  });
});

// ============================================
// ANIMATIONS OBSERVER
// ============================================
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(element => {
  observer.observe(element);
});

// ============================================
// SPOTLIGHT EFFECT (Bento Grid)
// ============================================
const bentoItems = document.querySelectorAll('.bento-item');

if (bentoItems) {
  document.addEventListener('mousemove', (e) => {
    bentoItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      item.style.setProperty('--x', `${x}px`);
      item.style.setProperty('--y', `${y}px`);
    });
  });
}

// ============================================
// ROTATING TEXT ANIMATION
// ============================================
const rotatingTextElements = document.querySelectorAll('.rotating-text');

rotatingTextElements.forEach(element => {
  const words = element.dataset.words.split(',');
  let currentWordIndex = 0;

  function updateText() {
    element.textContent = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }

  updateText(); // Set initial text
  setInterval(updateText, 3000); // Change text every 3 seconds
});

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('NetOrbit - High-end experience loaded');
});
