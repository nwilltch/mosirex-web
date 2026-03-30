export const initERP = () => {
  const main = document.querySelector('#main-content');
  const erpSection = document.createElement('section');
  erpSection.className = 'erp-comparison-section';
  erpSection.id = 'erp-solutions';
  erpSection.innerHTML = `
    <div class="container">
      <div class="section-header-centered">
        <span class="section-tag">SOLUTIONS ERP</span>
        <h2 class="section-title">L'excellence opérationnelle par les <span class="text-accent">ERPs</span></h2>
        <p class="section-desc">
          De l'audit de vos besoins à l'intégration finale, MOSIREX vous accompagne avec les technologies de gestion les plus performantes du marché mondial.
        </p>
      </div>
      
      <div class="erp-matrix-container">
        <table class="erp-matrix">
          <thead>
            <tr>
              <th>Fonctionnalité</th>
              <th>SAP S/4HANA</th>
              <th>Sage X3</th>
              <th>Odoo Ent.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cible Entreprise</td>
              <td>Grandes Entreprises (GE)</td>
              <td>Moyennes/Grandes (MGE)</td>
              <td>Toutes Tailles (PME/GE)</td>
            </tr>
            <tr>
              <td>Temps d'implantation</td>
              <td>6 - 18 Mois</td>
              <td>4 - 9 Mois</td>
               <td>2 - 6 Mois</td>
            </tr>
            <tr>
              <td>Flexibilité UI</td>
              <td>Standardisée / Fixe</td>
              <td>Personnalisable</td>
              <td>Hautement Modulaire</td>
            </tr>
            <tr>
              <td>Conformité OHADA</td>
              <td><span class="status-check">Vérifié</span></td>
              <td><span class="status-check">Vérifié</span></td>
              <td><span class="status-check">Vérifié</span></td>
            </tr>
            <tr>
              <td>Support Multi-devices</td>
              <td>Natif (Fiori)</td>
              <td>Natif</td>
              <td>Natif</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="cta-banner blue">
        <h3>Besoin d'un accompagnement personnalisé ?</h3>
        <p>Nos experts certifiés sont à votre écoute pour vous recommander la solution la plus adaptée à votre secteur d'activité.</p>
        <div class="cta-btns">
          <a href="#" class="btn btn-white">Réserver un Audit Gratuit</a>
          <a href="#" class="btn btn-outline-white">Nous Contacter</a>
        </div>
      </div>
    </div>
  `;
  main.appendChild(erpSection);
};
