export const initAbout = () => {
  const main = document.querySelector('#main-content');
  const aboutSection = document.createElement('section');
  aboutSection.className = 'about-section';
  aboutSection.id = 'about';
  aboutSection.innerHTML = `
    <div class="container">
      <div class="about-grid">
        <div class="about-text">
          <span class="section-tag">L'ORGANE MOSIREX</span>
          <h2 class="section-title">Accompagner votre croissance avec précision.</h2>
          <p class="section-desc">
            MOSIREX (Management et Organisation des Systèmes d'Information aux Réseaux d'Expertises) est une SARL créée en 2015. 
            Nous sommes nés de l'idée de résoudre les problèmes complexes de gestion d'entreprise grâce à des solutions métiers et technologiques innovantes.
          </p>
          
          <div class="mission-vision">
            <div class="mv-item">
              <div class="mv-icon"><i class="icon-mission"></i></div>
              <div>
                <h4>Notre Mission</h4>
                <p>Apporter notre savoir-faire métier et solutions technologiques pour le développement et la rentabilité de votre entreprise.</p>
              </div>
            </div>
            <div class="mv-item">
              <div class="mv-icon"><i class="icon-vision"></i></div>
              <div>
                <h4>Notre Vision</h4>
                <p>Être le leader des solutions de management et gestion SI dans la zone CEMAC et en Afrique Francophone.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="values-card-container">
          <div class="values-card">
            <div class="values-header">
              <h3>Nos Valeurs Fondamentales</h3>
              <i class="icon-shield"></i>
            </div>
            <ul class="values-list">
              <li>
                <div class="v-icon"><i class="icon-team"></i></div>
                <div>
                  <strong>Esprit d'équipe</strong>
                  <span>Le collaborateur est au coeur de chaque projet réussi.</span>
                </div>
              </li>
              <li>
                <div class="v-icon"><i class="icon-handshake"></i></div>
                <div>
                  <strong>Respect des engagements</strong>
                  <span>La transparence et l'équité guident nos relations.</span>
                </div>
              </li>
              <li>
                <div class="v-icon"><i class="icon-quality"></i></div>
                <div>
                  <strong>Travail de Qualité</strong>
                  <span>Un souci constant du détail et de la précision.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
  main.appendChild(aboutSection);
};
