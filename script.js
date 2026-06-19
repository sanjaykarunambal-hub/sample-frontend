// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.about-img, .about-text, .service-card, .contact-inner');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// stagger service cards slightly
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.06}s`;
});

// ===== Contact form =====
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic front-end only validation/demo handling.
  // This is a static site, so no data is actually sent anywhere —
  // wire this up to your backend or a form service (e.g. Formspree) to go live.
  const submitBtn = form.querySelector('button[type="submit"]');
  const btnText = submitBtn.querySelector('.btn-text');
  const originalText = btnText.textContent;

  btnText.textContent = 'Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    form.style.display = 'none';
    successMessage.classList.add('show');
    btnText.textContent = originalText;
    submitBtn.disabled = false;
  }, 600);
});