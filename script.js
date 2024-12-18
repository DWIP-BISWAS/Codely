// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Initialize Netlify Identity
netlifyIdentity.init();

// Authentication Elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutLink = document.getElementById('logout-link');
const authLinks = document.getElementById('auth-links');
const logoutBtn = document.getElementById('logout-btn');

// Handle Login
loginBtn.addEventListener('click', () => {
    netlifyIdentity.open('login'); // Open login modal
});

// Handle Signup
signupBtn.addEventListener('click', () => {
    netlifyIdentity.open('signup'); // Open signup modal
});

// Handle Logout
logoutBtn.addEventListener('click', () => {
    netlifyIdentity.logout();
});

// Manage Login State Changes
netlifyIdentity.on('login', user => {
    alert(`Welcome, ${user.user_metadata.full_name || 'User'}!`);
    authLinks.style.display = 'none';
    logoutLink.style.display = 'block';
    netlifyIdentity.close();
});

netlifyIdentity.on('logout', () => {
    alert('You have logged out.');
    authLinks.style.display = 'block';
    logoutLink.style.display = 'none';
});
