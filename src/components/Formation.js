export const initFormation = () => {
  const main = document.querySelector('#main-content');
  const formationSection = document.createElement('section');
  formationSection.className = 'formation-section py-24 lg:py-32 bg-white relative';
  formationSection.id = 'formation';
  formationSection.innerHTML = `
    <div class="container mx-auto px-6 space-y-24">
      <!-- Header Section -->
      <div class="relative bg-dark rounded-[4rem] p-12 lg:p-24 overflow-hidden shadow-2xl fade-in">
        <div class="relative z-10 max-w-3xl space-y-8">
          <span class="inline-block bg-primary text-white text-[0.65rem] font-black px-5 py-2 rounded-full tracking-[0.3em] uppercase">AGRÉMENT MINEFOP № 0148/f/MINEFOP</span>
          <h2 class="text-4xl lg:text-7xl font-heading font-black text-white leading-tight uppercase tracking-tighter">
            Centre de Formation Professionnelle <span class="text-primary text-glow">MOSIREX.</span>
          </h2>
          <p class="text-slate-400 text-xl leading-relaxed max-w-2xl">
            Développez l'excellence opérationnelle de vos équipes avec nos programmes certifiants en Management, ERP et Technologies de l'Information.
          </p>
          <div class="flex flex-wrap gap-6 pt-6">
            <button class="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all transform hover:-translate-y-1">
              Télécharger le catalogue 2026
            </button>
            <button class="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-dark transition-all transform hover:-translate-y-1">
              Formation sur-mesure
            </button>
          </div>
        </div>
        <!-- Abstract Decoration -->
        <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
      
      <!-- Domains Grid -->
      <div class="grid lg:grid-cols-3 gap-16 items-start fade-in stagger-2">
        <div class="space-y-6 lg:sticky lg:top-32">
          <span class="text-primary font-black text-xs tracking-[0.3em] uppercase">DISCIPLINES</span>
          <h3 class="text-4xl font-heading font-black text-dark uppercase tracking-tighter">Nos Domaines d'Expertise.</h3>
          <p class="text-slate-500 leading-relaxed text-lg">
            Une offre pédagogique rigoureuse conçue pour répondre aux standards internationaux de certification et aux réalités du marché CEMAC.
          </p>
        </div>

        <div class="lg:col-span-2 grid md:grid-cols-2 gap-8">
          <!-- ERP Card -->
          <div class="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-premium transition-all duration-500 group">
            <div class="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center text-xl shadow-sm font-black border border-slate-100 mb-8 group-hover:bg-primary group-hover:text-white transition-all">ERP</div>
            <h4 class="text-2xl font-black text-dark uppercase tracking-tighter mb-6">Solutions ERP & Gestion</h4>
            <ul class="space-y-4 text-slate-500 text-sm font-medium">
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Sage Comptabilité & Paie RH</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Odoo Functional Consultant</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-primary rounded-full"></span> SAP Business One / S4HANA</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Microsoft Dynamix 365</li>
            </ul>
          </div>

          <!-- Mgt Card -->
          <div class="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-premium transition-all duration-500 group">
            <div class="w-16 h-16 bg-white text-accent rounded-2xl flex items-center justify-center text-xl shadow-sm font-black border border-slate-100 mb-8 group-hover:bg-accent group-hover:text-white transition-all">MGT</div>
            <h4 class="text-2xl font-black text-dark uppercase tracking-tighter mb-6">Audit & Management</h4>
            <ul class="space-y-4 text-slate-500 text-sm font-medium">
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-accent rounded-full"></span> Contrôle de Gestion Appliqué</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-accent rounded-full"></span> Audit Interne & Risques S.I</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-accent rounded-full"></span> Gestion de Projet (PMP)</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-accent rounded-full"></span> QHSE & RSE en Entreprise</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Schedule Section -->
      <div class="bg-slate-950 rounded-[4rem] p-10 lg:p-20 overflow-hidden relative fade-in">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 relative z-10 border-b border-white/10 pb-10">
           <div class="space-y-2">
             <h3 class="text-3xl font-heading font-black text-white uppercase tracking-tighter">Calendrier Académique <span class="text-primary italic">2026.</span></h3>
             <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Sessions en présentiel (Yaoundé) & Hybride</p>
           </div>
           <a href="#" class="bg-white/5 text-white border border-white/10 px-8 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-dark transition-all">Tout le calendrier →</a>
        </div>

        <div class="space-y-6 relative z-10">
          <div class="bg-white/5 hover:bg-white/10 p-8 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 transition-all border border-white/5 group hover:border-primary/30">
            <div class="text-center md:text-left">
              <div class="text-3xl font-black text-primary tracking-tighter leading-none mb-1">12 - 15 MAI</div>
              <div class="text-[0.6rem] text-slate-500 font-bold uppercase tracking-widest leading-none mt-2">DURÉE : 4 JOURS INTENSIFS</div>
            </div>
            <div class="flex-1 text-center md:text-left space-y-2">
              <h4 class="text-white text-xl font-black tracking-tight leading-tight group-hover:text-primary transition-colors uppercase">Audit & Contrôle de Gestion Stratégique</h4>
              <p class="text-slate-400 text-sm uppercase tracking-widest font-bold">Lieu : Campus Mosirex, Rue Emergence</p>
            </div>
            <div class="flex flex-col gap-3">
              <span class="bg-primary/20 text-primary border border-primary/30 px-6 py-2 rounded-full text-[0.65rem] font-black uppercase tracking-widest text-center">Inter-entreprise</span>
              <button class="bg-white text-dark px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">S'inscrire</button>
            </div>
          </div>

          <div class="bg-white/5 hover:bg-white/10 p-8 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 transition-all border border-white/5 group hover:border-primary/30">
            <div class="text-center md:text-left">
              <div class="text-3xl font-black text-primary tracking-tighter leading-none mb-1">03 - 07 JUIN</div>
              <div class="text-[0.6rem] text-slate-500 font-bold uppercase tracking-widest leading-none mt-2">DURÉE : 5 JOURS (HYBRIDE)</div>
            </div>
            <div class="flex-1 text-center md:text-left space-y-2">
              <h4 class="text-white text-xl font-black tracking-tight leading-tight group-hover:text-primary transition-colors uppercase">Microsoft Azure Administrator (AZ-104)</h4>
              <p class="text-slate-400 text-sm uppercase tracking-widest font-bold">Lieu : Hybride (Présentiel / Cloud Lab)</p>
            </div>
            <div class="flex flex-col gap-3">
              <span class="bg-accent/20 text-accent border border-accent/30 px-6 py-2 rounded-full text-[0.65rem] font-black uppercase tracking-widest text-center">Certification Pro</span>
              <button class="bg-white text-dark px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">S'inscrire</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  main.appendChild(formationSection);
};
