export const initDashboard = () => {
  const main = document.querySelector('#main-content');
  const dashboardSection = document.createElement('section');
  dashboardSection.className = 'dashboard-section';
  dashboardSection.id = 'client-dashboard';
  dashboardSection.style.display = 'none'; // Hidden by default
  dashboardSection.innerHTML = `
    <div class="container container-dashboard">
      <div class="dashboard-header">
        <div class="welcome-box">
          <span class="user-id">ID Client: #MSX-2024-089</span>
          <h2>Bienvenue, <span class="text-accent">Egis Cameroun</span></h2>
          <p>Gérez vos projets ERP, accédez à vos ressources et contactez le support.</p>
        </div>
        <div class="client-logo-box">
          <div class="c-logo-placeholder">EC</div>
          <div>
            <strong>Egis Cameroun SA</strong>
            <span>Active depuis Jan. 2024</span>
          </div>
        </div>
      </div>
      
      <div class="dashboard-grid">
        <div class="grid-left">
          <div class="dash-card projects-card">
            <div class="card-header">
              <h3><i class="icon-proj"></i> Projets en cours</h3>
              <a href="#" class="btn-text">Voir tout</a>
            </div>
            <div class="project-item">
              <div class="proj-name">
                <strong>Implémentation Sage 100 Cloud</strong>
                <span>Phase : Migration des données historiques</span>
              </div>
              <div class="proj-progress">
                <div class="progress-bar"><div class="progress-fill" style="width: 65%;"></div></div>
                <span>65%</span>
              </div>
            </div>
            <div class="project-item">
              <div class="proj-name">
                <strong>Audit S.I & Sécurité</strong>
                <span>Phase : Rédaction du rapport final</span>
              </div>
              <div class="proj-progress">
                <div class="progress-bar green"><div class="progress-fill" style="width: 92%;"></div></div>
                <span>92%</span>
              </div>
            </div>
          </div>
          
          <div class="grid-flex">
            <div class="dash-card side-card">
              <div class="card-icon blue"><i class="icon-inv"></i></div>
              <h4>Dernières Factures</h4>
              <p>Consultez et téléchargez vos factures récentes.</p>
              <button class="btn btn-dark btn-sm">Accéder aux comptes</button>
            </div>
            <div class="dash-card side-card">
              <div class="card-icon orange"><i class="icon-support"></i></div>
              <h4>Support Technique</h4>
              <p>Besoin d'aide ? Ouvrez un ticket d'assistance.</p>
              <button class="btn btn-primary-outline btn-sm">Ouvrir un ticket</button>
            </div>
          </div>
        </div>
        
        <div class="grid-right">
          <div class="dash-card resources-card">
            <h3>Centre de Ressources</h3>
            <ul class="resource-list">
              <li>
                <div class="res-icon"><i class="icon-pdf"></i></div>
                <div>
                  <strong>Guide Utilisateur ERP</strong>
                  <span>PDF • 4.2 MB</span>
                </div>
              </li>
              <li>
                <div class="res-icon"><i class="icon-doc"></i></div>
                <div>
                  <strong>Notes de Mise à Jour</strong>
                  <span>v2.4.1 - Mars 2024</span>
                </div>
              </li>
              <li>
                <div class="res-icon"><i class="icon-video"></i></div>
                <div>
                  <strong>Tutoriels Vidéo</strong>
                  <span>12 vidéos disponibles</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div class="dash-card academy-card">
            <h3>CFPM Academy</h3>
            <p>Inscrivez vos collaborateurs à nos prochaines sessions de formation certifiantes.</p>
            <button class="btn btn-white btn-block">Voir les formations</button>
          </div>
        </div>
      </div>
    </div>
  `;
  main.appendChild(dashboardSection);
};
