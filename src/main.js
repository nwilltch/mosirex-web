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
initDashboard()
initFooter()

// Simple Router Logic
const sections = document.querySelectorAll('#main-content > section');
const showDashboard = (show) => {
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
    if (homepageSections.some(cls => s.classList.contains(cls))) {
      s.style.display = show ? 'none' : 'block';
      if (s.classList.contains('hero-section')) {
        s.style.display = show ? 'none' : 'flex';
      }
    }
    if (s.classList.contains('dashboard-section')) {
      s.style.display = show ? 'block' : 'none';
    }
  });
};

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  if (hash === '#client-space') {
    showDashboard(true);
  } else {
    showDashboard(false);
  }
});

// Initial load check
// Initial load check
if (window.location.hash === '#client-space') {
  showDashboard(true);
}

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
