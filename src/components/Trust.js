export const initTrust = () => {
  const main = document.querySelector('#main-content');
  const trustSection = document.createElement('section');
  trustSection.className = 'trust-section';
  trustSection.innerHTML = `
    <div class="container">
      <div class="trust-content">
        <h3>Ils nous font confiance</h3>
        <p>Une présence solide auprès des plus grandes organisations au Cameroun et à l'International.</p>
        
        <div class="logo-grid">
          <span>SPP-TCHAD</span>
          <span>EGIS CAMEROUN</span>
          <span>SOPECAM</span>
          <span>AFRICELL</span>
          <span>FDC</span>
          <span>CENTRE PASTEUR</span>
          <span>GROUPE CAD</span>
        </div>
        
        <a href="#" class="btn-text-large">Voir tous nos clients historiques →</a>
      </div>
    </div>
  `;
  main.appendChild(trustSection);
};
