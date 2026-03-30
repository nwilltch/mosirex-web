export const initFooter = () => {
  const footer = document.querySelector('#site-footer');
  footer.innerHTML = `
    <div class="footer-main">
      <div class="container grid-footer">
        <div class="footer-brand">
          <div class="logo white">
            <span class="logo-icon">M</span>
            <span class="logo-text">MOSIREX</span>
          </div>
          <p class="brand-desc">
            Cabinet conseil spécialisé dans l'organisation des entreprises et 
            l'implémentation de solutions ERP de premier rang.
          </p>
          <div class="social-links">
            <a href="#"><i class="icon-fb"></i></a>
            <a href="#"><i class="icon-in"></i></a>
            <a href="#"><i class="icon-tw"></i></a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Audit & Contrôle de gestion</a></li>
            <li><a href="#">Intégration ERP (Sage, SAP)</a></li>
            <li><a href="#">Développement d'applications</a></li>
            <li><a href="#">Certifications Microsoft/Oracle</a></li>
          </ul>
        </div>
        
        <div class="footer-links">
          <h4>Formation</h4>
          <ul>
            <li><a href="#">Mosirex Académie (CFPM)</a></li>
            <li><a href="#">Séminaires d'entreprise</a></li>
            <li><a href="#">E-Learning Platform</a></li>
            <li><a href="#">Espace Étudiants</a></li>
          </ul>
        </div>
        
        <div class="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Recevez l'actualité des ERP et nos prochains séminaires.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Votre email">
            <button type="submit"><i class="icon-send"></i></button>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container flex-between">
        <p>© 2024 MOSIREX SARL. Tous droits réservés.</p>
        <div class="legal-links">
          <a href="#">Mentions Légales</a>
          <a href="#">Politique de Confidentialité</a>
        </div>
      </div>
    </div>
  `;
};
