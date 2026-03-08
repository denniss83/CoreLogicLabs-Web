// ─── Sticky Navbar ───────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ─── Mobile Hamburger Menu ────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close nav when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// ─── Smooth Scroll for Anchor Links ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ─── Scroll Reveal (IntersectionObserver) ────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Animated Counter ─────────────────────────────────────────────────────────
function animateCounter(el, target, suffix, format, duration) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    let display;
    if (format === 'K') {
      display = (current / 1000).toFixed(current >= 1000 ? 0 : 1).replace(/\.0$/, '') + 'K';
    } else {
      display = String(current);
    }
    el.textContent = display + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const statsSection = document.getElementById('stats');
let statsAnimated = false;

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        document.querySelectorAll('[data-target]').forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const format = el.getAttribute('data-format') || '';
          animateCounter(el, target, suffix, format, 1500);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

if (statsSection) {
  statsObserver.observe(statsSection);
}

// ─── Contact Form (Formspree AJAX) ───────────────────────────────────────────
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('[type="submit"]');
    const successMsg = document.getElementById('form-success');
    submitBtn.disabled = true;
    submitBtn.textContent = '…';
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        contactForm.reset();
        if (successMsg) successMsg.style.display = 'block';
        setTimeout(() => { if (successMsg) successMsg.style.display = 'none'; }, 5000);
      }
    } catch (_) {}
    submitBtn.disabled = false;
    // Restore button text from i18n
    const lang = localStorage.getItem('cll_lang') || 'en';
    submitBtn.textContent = lang === 'tr' ? 'Mesaj Gönder' : lang === 'pt' ? 'Enviar Mensagem' : 'Send Message';
  });
}
