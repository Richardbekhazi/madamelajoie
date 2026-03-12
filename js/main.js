// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile nav when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== Scroll-reveal animation =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to sections
document.querySelectorAll('.section').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// ===== Order form handling =====
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(orderForm);
  const data = Object.fromEntries(formData.entries());

  // For now, show a confirmation message
  // Later: connect to Formspree, Cloudflare Workers, or email API
  const btn = orderForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;

  btn.textContent = 'Message Sent! ✓';
  btn.disabled = true;
  btn.style.background = '#4caf50';
  btn.style.borderColor = '#4caf50';

  // Build mailto fallback
  const subject = encodeURIComponent('Cake Order Request - ' + data.cakeType);
  const body = encodeURIComponent(
    'Name: ' + data.name + '\n' +
    'Email: ' + data.email + '\n' +
    'Phone: ' + (data.phone || 'N/A') + '\n' +
    'Cake Type: ' + data.cakeType + '\n' +
    'Event Date: ' + data.date + '\n\n' +
    'Message:\n' + data.message
  );
  window.location.href = 'mailto:hello@madamelajoie.com?subject=' + subject + '&body=' + body;

  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
    btn.style.background = '';
    btn.style.borderColor = '';
    orderForm.reset();
  }, 3000);
});

// ===== Set min date to today for the date picker =====
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
