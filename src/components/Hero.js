export const initHero = () => {
  const main = document.querySelector('#main-content');
  const heroSection = document.createElement('section');
  heroSection.className = 'hero-section';
  heroSection.innerHTML = `
    <div class="container hero-grid">
      <div class="hero-content">
        <span class="hero-tag">SAGE DE DROIT CAMEROUNAIS</span>
        <h1 class="hero-title">Votre solution,<br><span class="text-accent">notre passion...</span></h1>
        <p class="hero-subtitle">
          Expertise en Management et Systèmes d'Information (ERP). 
          Nous accompagnons les entreprises dans leur transformation digitale depuis 2015.
        </p>
        
        <div class="hero-btns">
          <button class="btn btn-primary">Demander une démo</button>
          <button class="btn btn-primary-outline">En savoir plus</button>
        </div>
        
        <div class="hero-trust-strip">
          <div class="trust-avatars">
            <img src="https://ui-avatars.com/api/?name=JD&background=random" alt="User">
            <img src="https://ui-avatars.com/api/?name=AS&background=random" alt="User">
            <img src="https://ui-avatars.com/api/?name=MK&background=random" alt="User">
          </div>
          <p>+10 Clients bénéficient déjà de notre expertise dans toute l’Afrique Francophone</p>
        </div>
      </div>
      
      <div class="hero-stats-container">
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">10+</span>
            <span class="stat-label">ANNÉES D'EXPERTISE</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">07</span>
            <span class="stat-label">PARTENAIRES ÉDITEURS</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">80+</span>
            <span class="stat-label">FORMATIONS DISP.</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">30+</span>
            <span class="stat-label">CLIENTS ACTIFS</span>
          </div>
        </div>
      </div>
    </div>
  `;
  main.appendChild(heroSection);
};
