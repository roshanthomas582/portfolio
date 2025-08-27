// Grab DOM elements
const profilePhoto = document.getElementById('profile-photo');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');
const sections = document.querySelectorAll('.section');
const formInputs = contactForm.querySelectorAll('input, textarea');

// ================= Navbar Toggle =================
hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  navMenu.classList.toggle('active');
});

// Hide menu on outside click
document.body.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

// ================= Scroll Animations =================
window.addEventListener('scroll', () => {
  // Shrink profile photo
  if (window.scrollY > 50) {
    profilePhoto.classList.add('shrink');
  } else {
    profilePhoto.classList.remove('shrink');
  }

  // Hide nav menu on scroll
  navMenu.classList.remove('active');

  // Reveal sections
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });

  // Animate contact form separately
  const formRect = contactForm.getBoundingClientRect();
  if (formRect.top < window.innerHeight - 50) {
    contactForm.classList.add('visible');
  }
});

// ================= Contact Form Validation =================
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!message) {
    alert("Enter any message");
    return;
  }

  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email");
    return;
  }

  // If passed validation
  alert("Message sent");
  contactForm.reset();
});
