export const initDashboard = () => {
  const dashboardSection = document.getElementById('client-dashboard') || document.createElement('section');
  dashboardSection.className = 'dashboard-section bg-slate-50 min-h-screen py-16 pb-32 hidden';
  dashboardSection.id = 'client-dashboard';
  dashboardSection.innerHTML = `
    <div class="container mx-auto px-6 space-y-12">
      <!-- Welcome Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-white p-10 lg:p-14 rounded-[4rem] shadow-premium border border-slate-100 fade-in">
        <div class="space-y-4">
          <span class="text-primary font-black text-[0.6rem] tracking-[0.3em] uppercase bg-primary/5 px-5 py-2 rounded-full border border-primary/10">ESPACE CLIENT SÉCURISÉ</span>
          <h2 class="text-4xl lg:text-5xl font-heading font-black text-dark tracking-tighter leading-none uppercase">
            Bienvenue, <span class="text-primary uppercase">Egis Cameroun.</span>
          </h2>
          <p class="text-slate-500 text-lg max-w-lg">Gérez vos déploiements ERP, suivez vos tickets support et accédez à vos ressources exclusives.</p>
        </div>
        <div class="flex items-center gap-6 p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100">
          <div class="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl shadow-primary/20">EC</div>
          <div class="space-y-1">
            <strong class="text-dark block text-lg font-black uppercase tracking-tight leading-none">Egis S.A.</strong>
            <span class="text-slate-400 text-[0.65rem] uppercase tracking-widest font-black">Partenaire Gold (FR-104)</span>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-12 fade-in stagger-2">
        <!-- Projects Column -->
        <div class="lg:col-span-2 space-y-8">
          <div class="flex justify-between items-end px-4">
            <h3 class="text-2xl font-heading font-black text-dark uppercase tracking-tighter">Projets en cours.</h3>
            <span class="text-xs font-black text-primary uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">Historique →</span>
          </div>

          <div class="space-y-6">
            <!-- Project 1 -->
            <div class="bg-white p-10 rounded-[3rem] shadow-premium border border-slate-100 space-y-8 hover:border-primary/20 transition-all group">
              <div class="flex justify-between items-start">
                <div class="space-y-2">
                  <h4 class="text-xl font-black text-dark uppercase tracking-tight">Implémentation SAGE 100 Cloud</h4>
                  <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Phase : Migration de données (Comptabilité)</p>
                </div>
                <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-[0.65rem] font-black uppercase tracking-widest">En cours</span>
              </div>
              <div class="space-y-4">
                <div class="flex justify-between items-end">
                   <span class="text-xs font-black text-slate-400 uppercase tracking-widest">Progression Globale</span>
                   <span class="text-2xl font-black text-primary tracking-tighter">65%</span>
                </div>
                <div class="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-primary rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(0,118,185,0.4)]" style="width: 65%;"></div>
                </div>
              </div>
            </div>

            <!-- Project 2 -->
            <div class="bg-white p-10 rounded-[3rem] shadow-premium border border-slate-100 space-y-8 hover:border-primary/20 transition-all opacity-80 scale-95 group">
              <div class="flex justify-between items-start">
                <div class="space-y-2">
                  <h4 class="text-xl font-black text-dark uppercase tracking-tight opacity-60">Audit S.I & Sécurité</h4>
                  <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Phase : Rédaction rapport final</p>
                </div>
                <span class="bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-[0.65rem] font-black uppercase tracking-widest">Finalisation</span>
              </div>
              <div class="space-y-4">
                <div class="flex justify-between items-end">
                   <span class="text-xs font-black text-slate-400 uppercase tracking-widest">Progression Globale</span>
                   <span class="text-2xl font-black text-green-600 tracking-tighter">92%</span>
                </div>
                <div class="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(34,197,94,0.4)]" style="width: 92%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Actions -->
        <div class="space-y-8">
          <div class="bg-dark rounded-[3.5rem] p-10 shadow-2xl space-y-10 border border-white/5 relative overflow-hidden group">
            <div class="relative z-10 space-y-8">
              <div class="flex justify-between items-center">
                <h3 class="text-xl font-heading font-black text-white uppercase tracking-tighter">Facturation.</h3>
                <div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl">💶</div>
              </div>
              <div class="space-y-2">
                <span class="block text-[0.6rem] text-slate-400 font-black uppercase tracking-widest">Total Impayé</span>
                <span class="block text-4xl font-black text-white tracking-tighter">2,450,000 <span class="text-xs text-primary">XAF</span></span>
              </div>
              <button class="w-full bg-primary text-white py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-xl shadow-primary/20">Accéder aux comptes</button>
            </div>
            <!-- Decoration -->
            <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:scale-125 transition-transform"></div>
          </div>

          <div class="bg-slate-900 rounded-[3.5rem] p-10 shadow-2xl space-y-8 border border-white/5 relative overflow-hidden group">
            <div class="relative z-10 space-y-6">
              <div class="flex justify-between items-center">
                <h3 class="text-xl font-heading font-black text-white uppercase tracking-tighter">Support 24/7.</h3>
                <div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl">🛡️</div>
              </div>
              <p class="text-slate-400 text-sm font-medium leading-relaxed">Accès prioritaire à nos consultants experts pour la résolution de vos incidents techniques.</p>
              <button class="w-full border-2 border-white/10 text-white py-4 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-dark transition-all">Ouvrir un ticket</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Resource Center -->
      <div class="bg-white p-12 lg:p-20 rounded-[4.5rem] shadow-premium border border-slate-100 space-y-12 fade-in">
        <div class="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-100 pb-10">
          <div class="space-y-3">
             <span class="text-primary font-black text-[0.6rem] tracking-[0.3em] uppercase">LIBRAIRIE</span>
             <h3 class="text-3xl font-heading font-black text-dark uppercase tracking-tighter leading-none">Centre de Ressources.</h3>
          </div>
          <button class="text-dark font-black text-xs uppercase tracking-widest underline decoration-2 underline-offset-8 decoration-primary hover:text-primary transition-colors">Tout voir</button>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div class="flex items-center gap-6 group cursor-pointer hover:bg-slate-50 p-4 rounded-3xl transition-all">
            <div class="w-16 h-16 bg-blue-50 text-blue-500 rounded-[1.5rem] flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm">📄</div>
            <div class="space-y-1 pt-1">
              <strong class="text-dark block font-black uppercase text-xs tracking-tight">Guide : Migration SAGE</strong>
              <span class="text-slate-400 text-[0.65rem] font-bold uppercase tracking-widest">PDF • v.2.4 • 1.2MB</span>
            </div>
          </div>
          <div class="flex items-center gap-6 group cursor-pointer hover:bg-slate-50 p-4 rounded-3xl transition-all">
            <div class="w-16 h-16 bg-purple-50 text-purple-500 rounded-[1.5rem] flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm">📀</div>
            <div class="space-y-1 pt-1">
              <strong class="text-dark block font-black uppercase text-xs tracking-tight">Odoo : Les fondamentaux</strong>
              <span class="text-slate-400 text-[0.65rem] font-bold uppercase tracking-widest">VIDEO • 15 MIN • 1080P</span>
            </div>
          </div>
          <div class="flex items-center gap-6 group cursor-pointer hover:bg-slate-50 p-4 rounded-3xl transition-all">
            <div class="w-16 h-16 bg-green-50 text-green-500 rounded-[1.5rem] flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm">🔐</div>
            <div class="space-y-1 pt-1">
              <strong class="text-dark block font-black uppercase text-xs tracking-tight">Plan de Continuité (PCA)</strong>
              <span class="text-slate-400 text-[0.65rem] font-bold uppercase tracking-widest">MODÈLE • DOCX • 450KB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  if (!document.getElementById('client-dashboard')) {
     document.getElementById('main-content').appendChild(dashboardSection);
  }
};
