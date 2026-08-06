const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
  window.addEventListener(
    'scroll',
    () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 600);
    },
    { passive: true }
  );
}
