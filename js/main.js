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
const COOLDOWN_MS = 5 * 1000; // 5 seconds between submissions

orderForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Check cooldown — prevent spam
  const lastSubmit = localStorage.getItem('lastOrderSubmit');
  if (lastSubmit && Date.now() - Number(lastSubmit) < COOLDOWN_MS) {
    const secs = Math.ceil((COOLDOWN_MS - (Date.now() - Number(lastSubmit))) / 1000);
    alert('Please wait ' + secs + ' second(s) before submitting another order.');
    return;
  }

  const btn = orderForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const formData = new FormData(orderForm);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      btn.textContent = 'Order Sent! ✓';
      btn.style.background = '#4caf50';
      btn.style.borderColor = '#4caf50';
      orderForm.reset();
      localStorage.setItem('lastOrderSubmit', Date.now().toString());
    } else {
      btn.textContent = 'Error — Try Again';
      btn.style.background = '#e53935';
      btn.style.borderColor = '#e53935';
    }
  } catch {
    btn.textContent = 'Error — Try Again';
    btn.style.background = '#e53935';
    btn.style.borderColor = '#e53935';
  }

  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
    btn.style.background = '';
    btn.style.borderColor = '';
  }, 4000);
});

// ===== Set min date to today for the date picker =====
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
