export const initHeader = () => {
  const header = document.querySelector('#site-header');
  header.innerHTML = `
    <div class="top-bar">
      <div class="container flex-between">
        <div class="contact-info">
          <span><i class="icon-email"></i> info@mosirex.com</span>
          <span><i class="icon-phone"></i> Yaoundé, Cameroun</span>
        </div>
        <div class="lang-switch">
          <a href="#" class="active">FR</a> | <a href="#">EN</a>
        </div>
      </div>
    </div>
    <nav class="main-nav">
      <div class="container flex-between">
        <div class="logo">
          <span class="logo-icon">M</span>
          <span class="logo-text">MOSIREX</span>
        </div>
        <ul class="nav-links">
          <li><a href="/" data-link>Accueil</a></li>
          <li><a href="#about">Qui sommes-nous</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#formation">Formation (CFPM)</a></li>
          <li><a href="/contact" data-link>Contact</a></li>
        </ul>
        <a href="#client-space" class="btn btn-primary-outline btn-sm">
          <i class="icon-user"></i> Espace Client
        </a>
      </div>
    </nav>
  `;
};
