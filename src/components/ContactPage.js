export const initContactPage = () => {
  const main = document.querySelector('#main-content');
  const contactPage = document.createElement('section');
  contactPage.className = 'contact-page-section bg-white pt-40 pb-32 overflow-hidden';
  contactPage.id = 'contact-page';
  contactPage.innerHTML = `
    <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-24 relative">
      <!-- Left Column: Content -->
      <div class="space-y-16 fade-in">
        <div class="space-y-8">
          <span class="text-primary font-black text-xs tracking-[0.3em] uppercase">CONTACTEZ UN EXPERT</span>
          <h1 class="text-6xl lg:text-8xl font-heading font-black text-dark leading-[0.9] tracking-tighter uppercase transition-all duration-700 hover:text-primary">
            Concevons votre futur <span class="text-primary underline decoration-sky-300 decoration-8 underline-offset-8">digital.</span>
          </h1>
          <p class="text-slate-500 text-xl leading-relaxed max-w-xl">
            Nos experts ERP sont à votre disposition pour une démonstration personnalisée ou pour concevoir l’architecture SI de votre organisation.
          </p>
        </div>
        
        <div class="space-y-12">
          <div class="flex gap-10 group">
            <div class="w-20 h-20 bg-blue-50 text-blue-500 rounded-[2.5rem] flex items-center justify-center shrink-0 text-3xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-slate-100">👑</div>
            <div class="space-y-3 pt-3">
              <h4 class="text-2xl font-black text-dark uppercase tracking-tight">Conseils Stratégiques.</h4>
              <p class="text-slate-500 leading-relaxed font-medium">Un consultant métier dédié pour répondre à vos problématiques de rentabilité.</p>
            </div>
          </div>
          <div class="flex gap-10 group">
            <div class="w-20 h-20 bg-green-50 text-green-500 rounded-[2.5rem] flex items-center justify-center shrink-0 text-3xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-slate-100">🏗️</div>
            <div class="space-y-3 pt-3">
              <h4 class="text-2xl font-black text-dark uppercase tracking-tight">Architecture S.I.</h4>
              <p class="text-slate-500 leading-relaxed font-medium">Découvrez comment l’ERP s’intègre dynamiquement à vos flux opérationnels.</p>
            </div>
          </div>
        </div>
        
        <!-- Trust badge -->
        <div class="bg-dark rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden shadow-2xl group border border-white/5">
          <div class="relative z-10 space-y-6">
            <p class="text-white text-xl lg:text-2xl leading-relaxed font-medium relative z-10">
              "L’implémentation d’Odoo Enterprise par MOSIREX a permis une croissance de 40% de notre CA en seulement trois mois."
            </p>
            <div class="flex items-center gap-6 border-t border-white/10 pt-10">
              <img src="https://ui-avatars.com/api/?name=JD&background=3b82f6&color=fff" class="w-16 h-16 rounded-2xl border-4 border-white shadow-xl shadow-black/40" alt="Directeur Général">
              <div class="space-y-1">
                <strong class="text-white block text-lg font-black uppercase tracking-tight leading-none">DG Egis Cameroun</strong>
                <span class="text-slate-500 text-xs uppercase tracking-widest font-black">Secteur Industriel • Yaoundé</span>
              </div>
            </div>
          </div>
          <!-- Decoration -->
          <div class="absolute -right-10 -bottom-10 opacity-10 scale-150 rotate-12 transition-transform group-hover:scale-[1.6]">
             <svg width="200" height="200" viewBox="0 0 24 24" fill="white"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z"/></svg>
          </div>
        </div>
      </div>
      
      <!-- Right Column: Form -->
      <div class="relative fade-in stagger-2">
        <div class="bg-slate-50 rounded-[4.5rem] p-12 lg:p-20 shadow-premium border border-slate-100 space-y-12 sticky top-40 transition-all duration-700 hover:shadow-2xl">
          <div class="space-y-4 text-center">
             <h3 class="text-3xl font-heading font-black text-dark tracking-tighter leading-none uppercase">Formulaire de Demande.</h3>
             <span class="inline-block px-4 py-1.5 bg-primary/10 text-primary font-black text-[0.65rem] tracking-[0.3em] uppercase rounded-full">RÉPONSE SOUS 24H</span>
          </div>
          <form id="contact-page-form" class="space-y-10">
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-3">
                <label class="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] pl-4">Prénom & Nom</label>
                <input type="text" placeholder="JEAN DUPONT" class="w-full bg-white border border-slate-200 px-10 py-5 rounded-[2.5rem] focus:ring-4 focus:ring-primary/10 focus:border-primary/50 outline-none transition-all shadow-sm placeholder:text-slate-300">
              </div>
              <div class="space-y-3">
                <label class="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] pl-4">Email Pro</label>
                <input type="email" placeholder="JEAN@SOCIETE.COM" class="w-full bg-white border border-slate-200 px-10 py-5 rounded-[2.5rem] focus:ring-4 focus:ring-primary/10 focus:border-primary/50 outline-none transition-all shadow-sm placeholder:text-slate-300">
              </div>
            </div>
            
            <div class="space-y-4">
              <label class="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] pl-4 text-center block">Sélectionnez votre solution d'intérêt</label>
              <div class="flex flex-wrap justify-center gap-3">
                <button type="button" class="px-8 py-3 bg-white border border-slate-200 rounded-full text-[0.65rem] font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all">SAGE</button>
                <button type="button" class="px-8 py-3 bg-white border border-slate-200 rounded-full text-[0.65rem] font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all">ODOO</button>
                <button type="button" class="px-8 py-3 bg-white border border-slate-200 rounded-full text-[0.65rem] font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all">SAP One</button>
                <button type="button" class="px-8 py-3 bg-white border border-slate-200 rounded-full text-[0.65rem] font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all">Formations</button>
                <button type="button" class="px-8 py-3 bg-white border border-slate-200 rounded-full text-[0.65rem] font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all">Autre</button>
              </div>
            </div>
            
            <div class="space-y-3">
              <label class="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] pl-4">Message / Détails du projet</label>
              <textarea placeholder="DÉCRIVEZ VOS ENJEUX ACTUELS..." class="w-full bg-white border border-slate-200 px-10 py-6 rounded-[3rem] h-44 focus:ring-4 focus:ring-primary/10 focus:border-primary/50 outline-none transition-all shadow-sm resize-none placeholder:text-slate-300"></textarea>
            </div>
            
            <div class="flex items-center gap-5 pl-4">
              <input type="checkbox" id="consent" class="w-6 h-6 accent-primary rounded-lg cursor-pointer">
              <label for="consent" class="text-xs text-slate-500 font-bold leading-tight cursor-pointer">J'accepte d'être recontacté par un consultant senior MOSIREX.</label>
            </div>
            
            <button type="submit" class="w-full bg-primary text-white py-7 rounded-[3rem] font-black text-sm uppercase tracking-[0.4em] shadow-2xl shadow-primary/30 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] transition-all">
              Confirmer l'envoi
            </button>
          </form>
        </div>
        <!-- Decorative bg -->
        <div class="absolute -right-24 -top-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
    </div>
  `;
  main.appendChild(contactPage);
};
