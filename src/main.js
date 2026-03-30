import './style.css'
import './styles/variables.css'
import { initHeader } from './components/Header.js'
import { initHero } from './components/Hero.js'
import { initAbout } from './components/About.js'
import { initServices } from './components/Services.js'
import { initERP } from './components/ERP.js'
import { initFormation } from './components/Formation.js'
import { initTrust } from './components/Trust.js'
import { initContact } from './components/Contact.js'
import { initContactPage } from './components/ContactPage.js'
import { initDashboard } from './components/Dashboard.js'
import { initFooter } from './components/Footer.js'

// Main application logic for MOSIREX
document.querySelector('#app').innerHTML = `
  <div class="main-layout">
    <header id="site-header" class="header"></header>
    <main id="main-content"></main>
    <footer id="site-footer" class="footer"></footer>
  </div>
`

// Components initialization
initHeader()
initHero()
initAbout()
initServices()
initTrust()
initERP()
initFormation()
initContact()
initContactPage()
initDashboard()
initFooter()

// Pathname Router
const render = () => {
  const path = window.location.pathname;
  const hash = window.location.hash;
  const sections = document.querySelectorAll('#main-content > section');
  
  const homepageSections = [
    'hero-section', 
    'about-section', 
    'services-section', 
    'trust-section', 
    'erp-comparison-section', 
    'formation-section', 
    'contact-banner-section'
  ];

  sections.forEach(s => {
    // Default: hide everything
    s.style.display = 'none';

    if (path === '/contact') {
      if (s.classList.contains('contact-page-section')) s.style.display = 'block';
    } else if (hash === '#client-space') {
      if (s.classList.contains('dashboard-section')) s.style.display = 'block';
    } else {
      // Home path /
      if (homepageSections.some(cls => s.classList.contains(cls))) {
        s.style.display = 'block';
        if (s.classList.contains('hero-section')) s.style.display = 'flex';
      }
    }
  });

  // Re-run animation observer for visible sections
  document.querySelectorAll('section').forEach(section => {
    if (section.style.display !== 'none') observer.observe(section);
  });
};

// Handle clicks for routing
document.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link) return;
  
  const url = new URL(link.href);
  const isInternal = url.origin === window.location.origin;
  
  if (isInternal && link.hasAttribute('data-link')) {
    e.preventDefault();
    history.pushState(null, null, url.pathname);
    render();
  } else if (isInternal && url.hash && window.location.pathname !== '/') {
    // Navigating from /contact back to a homepage section
    e.preventDefault();
    history.pushState(null, null, '/' + url.hash);
    render();
  }
});

window.addEventListener('popstate', render);
window.addEventListener('hashchange', render);

// Initial Render
render();

// Apply animations on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

console.log('MOSIREX Application Initialized')
