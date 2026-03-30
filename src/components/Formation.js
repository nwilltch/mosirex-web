export const initFormation = () => {
  const main = document.querySelector('#main-content');
  const formationSection = document.createElement('section');
  formationSection.className = 'formation-section';
  formationSection.id = 'formation';
  formationSection.innerHTML = `
    <div class="container">
      <div class="formation-hero">
        <div class="formation-hero-content">
          <span class="badge">AGREMENT MINEFOP</span>
          <h2 class="section-title white">Centre de Formation Professionnelle <span class="text-accent">MOSIREX</span></h2>
          <p class="white-70">Développez les compétences de vos équipes avec nos programmes certifiants en Management, ERP et Technologies de l'information.</p>
          <div class="formation-btns">
            <a href="#" class="btn btn-primary"><i class="icon-download"></i> Télécharger le catalogue PDF</a>
            <a href="#" class="btn btn-outline-white">Formation sur-mesure</a>
          </div>
        </div>
      </div>
      
      <div class="expertise-domains">
        <h3>Nos Domaines d'Expertise</h3>
        <div class="expertise-grid">
          <div class="expertise-card">
             <div class="exp-icon"><i class="icon-erp"></i></div>
             <h4>Solutions ERP & Gestion</h4>
             <ul>
               <li>Sage Comptabilité & Paie</li>
               <li>SAP Modules Financiers</li>
               <li>Gestion des stocks Odoo</li>
             </ul>
             <a href="#" class="btn-text">Voir les cours</a>
          </div>
          <div class="expertise-card">
             <div class="exp-icon"><i class="icon-audit"></i></div>
             <h4>Audit & Management</h4>
             <ul>
               <li>Contrôle de Gestion</li>
               <li>Audit Interne & Risques</li>
               <li>Management de Projets</li>
             </ul>
             <a href="#" class="btn-text">Voir les cours</a>
          </div>
          <div class="expertise-card">
             <div class="exp-icon"><i class="icon-it"></i></div>
             <h4>Certifications IT</h4>
             <ul>
               <li>Microsoft Azure & 365</li>
               <li>Oracle Database Admin</li>
               <li>Sage Certification</li>
             </ul>
             <a href="#" class="btn-text">Voir les cours</a>
          </div>
        </div>
      </div>
      
      <div class="upcoming-sessions">
        <div class="sessions-header">
           <h3>Prochaines Sessions (2026)</h3>
           <a href="#" class="btn-text">Tout le calendrier →</a>
        </div>
        <div class="sessions-list">
          <div class="session-item">
            <div class="session-date">12 - 15 Mai</div>
            <div class="session-info">
              <strong>Audit & Contrôle de Gestion Stratégique</strong>
              <span>Lieu : Siège Mosirex, Yaoundé</span>
            </div>
            <div class="session-tag inter">Inter-entreprise</div>
          </div>
          <div class="session-item">
            <div class="session-date">03 - 07 Juin</div>
            <div class="session-info">
              <strong>Microsoft Azure Administrator (AZ-104)</strong>
              <span>Lieu : Hybride (Présentiel / Online)</span>
            </div>
            <div class="session-tag cert">Certification</div>
          </div>
        </div>
      </div>
    </div>
  `;
  main.appendChild(formationSection);
};
