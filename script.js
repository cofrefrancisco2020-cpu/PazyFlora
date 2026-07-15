const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const setHeaderState = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
};

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const closeMenu = () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  menu?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

menuButton?.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  menu?.classList.toggle('is-open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const revealItems = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
}

if (!reducedMotion) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.055, 36);
        document.documentElement.style.setProperty('--hero-shift', `${shift}px`);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

const sceneButtons = document.querySelectorAll('[data-scene-button]');
const sceneImages = document.querySelectorAll('[data-scene]');
const sceneCopy = document.querySelector('[data-scene-copy]');
const sceneTexts = {
  day: 'Sol, agua y sombra fresca para vivir un día sin prisa.',
  night: 'Luces cálidas, cielo abierto y un ambiente que invita a quedarse.'
};

sceneButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const scene = button.dataset.sceneButton;
    sceneButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    sceneImages.forEach((image) => image.classList.toggle('is-active', image.dataset.scene === scene));
    if (sceneCopy) sceneCopy.textContent = sceneTexts[scene];
  });
});

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxCaption = document.querySelector('[data-lightbox-caption]');
const closeLightboxButton = document.querySelector('[data-lightbox-close]');

const closeLightbox = () => {
  if (lightbox?.open) lightbox.close();
  document.body.classList.remove('lightbox-open');
};

document.querySelectorAll('[data-gallery-image]').forEach((item) => {
  item.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    lightboxImage.src = item.dataset.galleryImage;
    lightboxImage.alt = item.querySelector('img')?.alt || '';
    lightboxCaption.textContent = item.dataset.galleryCaption || '';
    lightbox.showModal();
    document.body.classList.add('lightbox-open');
  });
});

closeLightboxButton?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox?.addEventListener('close', () => document.body.classList.remove('lightbox-open'));

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
