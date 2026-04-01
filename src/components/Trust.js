export const initTrust = () => {
  const main = document.querySelector('#main-content');
  const trustSection = document.createElement('section');
  trustSection.className = 'trust-section py-20 bg-slate-50 relative overflow-hidden border-y border-slate-100';
  trustSection.id = 'trust';
  trustSection.innerHTML = `
    <div class="container mx-auto px-6 mb-12">
      <div class="flex flex-col md:flex-row justify-between items-end gap-6">
        <div class="space-y-4">
          <span class="text-primary font-black text-xs tracking-[0.3em] uppercase">RÉFÉRENCES</span>
          <h2 class="text-3xl font-heading font-black text-dark uppercase tracking-tighter">
            Ils nous font <span class="text-primary">confiance.</span>
          </h2>
        </div>
        <p class="text-slate-400 text-sm font-bold uppercase tracking-widest max-w-[200px] leading-tight">
          +50 Projets ERP livrés avec succès
        </p>
      </div>
    </div>

    <!-- Infinite Scroll Wrapper -->
    <div class="relative flex overflow-hidden group">
      <div class="flex gap-12 animate-scroll whitespace-nowrap py-4">
        <!-- Logo instances (x2 for seamless loop) -->
        ${[1, 2].map(() => `
          <div class="flex items-center gap-12">
            <span class="logo-box">SPP-TCHAD</span>
            <span class="logo-box">EGIS CAMEROUN</span>
            <span class="logo-box">SOPECAM</span>
            <span class="logo-box">AFRICELL</span>
            <span class="logo-box">FDC</span>
            <span class="logo-box">CENTRE PASTEUR</span>
            <span class="logo-box">GROUPE CAD</span>
            <span class="logo-box font-serif">SNH</span>
            <span class="logo-box">TRADEX</span>
          </div>
        `).join('')}
      </div>
    </div>

    <style>
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 40s linear infinite;
      }
      .animate-scroll:hover {
        animation-play-state: paused;
      }
      .logo-box {
        @apply text-2xl font-heading font-black text-slate-300 transition-all duration-500 cursor-default px-8 py-4 rounded-2xl border border-transparent grayscale hover:grayscale-0 hover:text-primary hover:border-primary/20 hover:bg-white hover:shadow-xl;
        text-transform: uppercase;
        letter-spacing: -0.05em;
      }
    </style>
  `;
  main.appendChild(trustSection);
};
