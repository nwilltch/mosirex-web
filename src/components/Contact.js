export const initContact = () => {
  const main = document.querySelector('#main-content');
  const contactSection = document.createElement('section');
  contactSection.className = 'contact-banner-section';
  contactSection.id = 'contact';
  contactSection.innerHTML = `
    <div class="container contact-grid-main">
      <div class="contact-info-left">
        <h2 class="contact-title">Prêt à optimiser votre gestion ?</h2>
        <p class="contact-subtitle">
          Contactez nos experts pour une analyse gratuite de vos besoins en systèmes d'informations ou pour rejoindre l'une de nos sessions de formation.
        </p>
        
        <div class="contact-details">
          <div class="detail-item">
            <span class="detail-icon">📞</span>
            <div class="detail-text">
              <p>+237 670 00 00 00 (Yaoundé)</p>
            </div>
          </div>
          <div class="detail-item">
            <span class="detail-icon">✉️</span>
            <div class="detail-text">
              <p>info@mosirex.com</p>
            </div>
          </div>
          <div class="detail-item">
            <span class="detail-icon">📍</span>
            <div class="detail-text">
              <p>Nkol-Eton, Rue Emergence, Sis à 300m Carrefour Nkol-Eton, Yaoundé, Cameroun</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="contact-form-right">
        <div class="request-form-card">
          <h3>Envoyez-nous un message</h3>
          <form id="main-contact-form">
            <div class="form-row">
              <div class="form-group">
                <label>Nom complet</label>
                <input type="text" placeholder="Votre nom" required>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" placeholder="votre@email.com" required>
              </div>
            </div>
            
            <div class="form-group">
              <label>Sujet</label>
              <select>
                <option>Audit & Conseil</option>
                <option>Intégration ERP</option>
                <option>Formation Pro</option>
                <option>Autre</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Message</label>
              <textarea placeholder="Comment pouvons-nous vous aider ?"></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary btn-block">
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>
    </div>
  `;
  main.appendChild(contactSection);
};
