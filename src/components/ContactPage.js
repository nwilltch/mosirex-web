export const initContactPage = () => {
  const main = document.querySelector('#main-content');
  const contactPage = document.createElement('section');
  contactPage.className = 'contact-page-section';
  contactPage.id = 'contact-page';
  contactPage.innerHTML = `
    <div class="container contact-page-grid">
      <div class="contact-page-left">
        <h1 class="contact-page-title">Découvrez la puissance d'une gestion <span class="text-accent">optimisée</span></h1>
        <p class="contact-page-subtitle">
          Planifiez une démonstration personnalisée avec nos experts ERP et découvrez comment nos solutions peuvent transformer votre flux de travail.
        </p>
        
        <div class="contact-features-list">
          <div class="contact-feature-item">
            <div class="cf-icon"><i class="icon-expert"></i></div>
            <div class="cf-text">
              <h4>Conseils d'Experts</h4>
              <p>Un consultant métier dédié pour répondre à vos problématiques spécifiques.</p>
            </div>
          </div>
          <div class="contact-feature-item">
            <div class="cf-icon"><i class="icon-arch"></i></div>
            <div class="cf-text">
              <h4>Architecture sur mesure</h4>
              <p>Découvrez comment l'ERP s'intègre parfaitement à vos outils actuels.</p>
            </div>
          </div>
          <div class="contact-feature-item">
            <div class="cf-icon"><i class="icon-roi"></i></div>
            <div class="cf-text">
              <h4>Estimation du ROI</h4>
              <p>Analysez le gain de productivité potentiel pour votre organisation.</p>
            </div>
          </div>
        </div>
        
        <div class="contact-testimonial-box">
          <p>"L'implémentation d'Odoo par MOSIREX a réduit nos délais de facturation de 40% en seulement trois mois."</p>
          <div class="testimonial-author">
            <img src="https://ui-avatars.com/api/?name=JD&background=334155&color=fff" alt="Directeur Général">
            <div class="author-info">
              <strong>Directeur Général</strong>
              <span>PME Industrielle, Douala</span>
            </div>
          </div>
          <div class="quote-icon-large">”</div>
        </div>
      </div>
      
      <div class="contact-page-right">
        <div class="request-form-card-large">
          <h3>Formulaire de Demande</h3>
          <form id="contact-page-form">
            <div class="form-row">
              <div class="form-group">
                <label>Prénom & Nom</label>
                <input type="text" placeholder="Ex: Jean Dupont" required>
              </div>
              <div class="form-group">
                <label>Adresse Email Professionnelle</label>
                <input type="email" placeholder="jean@entreprise.com" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Nom de l'Entreprise</label>
                <input type="text" placeholder="Votre Société S.A." required>
              </div>
              <div class="form-group">
                <label>Numéro de Téléphone</label>
                <input type="tel" placeholder="+237 ..." required>
              </div>
            </div>
            
            <div class="form-group">
              <label>Solution d'intérêt</label>
              <div class="solution-grid-chips">
                <button type="button" class="chip-btn">SAGE</button>
                <button type="button" class="chip-btn">ODOO</button>
                <button type="button" class="chip-btn">SAP</button>
                <button type="button" class="chip-btn">MICROSOFT</button>
                <button type="button" class="chip-btn">TOMATE</button>
                <button type="button" class="chip-btn">AUTRE</button>
              </div>
            </div>
            
            <div class="form-group">
              <label>Taille de l'organisation</label>
              <select>
                <option>1-10 employés (TPE)</option>
                <option>11-50 employés (PME)</option>
                <option>51-250 employés (ETI)</option>
                <option>250+ employés (GE)</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Message ou besoins spécifiques</label>
              <textarea placeholder="Décrivez brièvement vos enjeux actuels..."></textarea>
            </div>
            
            <div class="form-check-mini">
              <input type="checkbox" id="consent-contact">
              <label for="consent-contact">J'accepte d'être contacté par un expert MOSIREX pour organiser cette démonstration.</label>
            </div>
            
            <button type="submit" class="btn btn-primary btn-block">
              Confirmer ma demande de démo →
            </button>
          </form>
        </div>
      </div>
    </div>
  `;
  main.appendChild(contactPage);
};
