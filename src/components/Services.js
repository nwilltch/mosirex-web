export const initServices = () => {
  const main = document.querySelector('#main-content');
  const servicesSection = document.createElement('section');
  servicesSection.className = 'services-section';
  servicesSection.id = 'services';
  servicesSection.innerHTML = `
    <div class="container">
      <div class="section-header-centered">
        <h2 class="section-title highlight">Nos Domaines de Spécialité</h2>
        <p class="section-subtitle">
          De l'audit à l'implémentation de solutions ERP complexes, nous couvrons l'ensemble des besoins de gestion de l'entreprise moderne.
        </p>
      </div>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="s-icon blue"><i class="icon-mgmt"></i></div>
          <h3>Conseil Management</h3>
          <p>Audit & Contrôle de gestion, Comptabilité, Finance, Fiscalité et Management de projets.</p>
          <a href="#" class="btn-text">En savoir plus →</a>
        </div>
        <div class="service-card">
          <div class="s-icon green"><i class="icon-it"></i></div>
          <h3>Systèmes d'info</h3>
          <p>Distributeur et expert ERP : SAP, Microsoft, Sage, Tomate, Odoo, Silae et Open-bee.</p>
          <a href="#" class="btn-text">Voir nos solutions →</a>
        </div>
        <div class="service-card">
          <div class="s-icon purple"><i class="icon-edu"></i></div>
          <h3>Formations Pro</h3>
          <p>Centre agréé par le MINEFOP. Formations certifiantes entreprise et séminaires thématiques.</p>
          <a href="#" class="btn-text">Consulter le catalogue →</a>
        </div>
        <div class="service-card">
          <div class="s-icon orange"><i class="icon-cert"></i></div>
          <h3>Certifications</h3>
          <p>Accompagnement à l'acquisition de certifications Microsoft, Oracle, Isolae et Gage.</p>
          <a href="#" class="btn-text">Découvrir →</a>
        </div>
      </div>
      
      <div class="clients-strip">
        <p>Ils nous font confiance</p>
        <div class="logo-carousel">
          <span>SPP-TCHAD</span>
          <span>EGIS CAMEROUN</span>
          <span>SOPECAM</span>
          <span>AFRICELL</span>
          <span>RDC</span>
          <span>CENTRE PASTEUR</span>
        </div>
      </div>
    </div>
  `;
  main.appendChild(servicesSection);
};
