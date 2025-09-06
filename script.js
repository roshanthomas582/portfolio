document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const contactForm = document.getElementById('contact-form');
    const signupForm = document.getElementById('signup-form');

    mainContent.addEventListener('mouseenter', () => {
        const hiddenSections = document.querySelectorAll('.hidden-section');
        hiddenSections.forEach(section => {
            section.classList.remove('hidden-section');
        });
    }, { once: true });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    });

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const email = document.getElementById('emailSignup').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address1 = document.getElementById('address1').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value.trim();
        const pincode = document.getElementById('pincode').value.trim();
        const country = document.getElementById('country').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (firstName === '' || lastName === '' || dob === '' || email === '' || phone === '' || address1 === '' || city === '' || state === '' || pincode === '' || country === '' || username === '' || password === '') {
            alert('Please fill in all required fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePhone(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
    
        if (!/^\d{6}$/.test(pincode)) {
            alert('Please enter a valid 6-digit pincode.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
    
        alert('Registration successful! Thank you for signing up.');
        signupForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(String(phone));
    }
});
