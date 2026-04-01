export const initERP = () => {
  const main = document.querySelector('#main-content');
  const erpSection = document.createElement('section');
  erpSection.className = 'erp-section py-24 lg:py-32 bg-slate-50 relative overflow-hidden';
  erpSection.id = 'solutions';
  erpSection.innerHTML = `
    <!-- Background Decoration -->
    <div class="absolute inset-0 z-0 opacity-30 pointer-events-none">
       <div class="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto px-6 space-y-20 relative z-10">
      <div class="text-center max-w-3xl mx-auto space-y-6 fade-in">
        <span class="text-primary font-black text-xs tracking-[0.3em] uppercase">SOLUTIONS ERP</span>
        <h2 class="text-4xl lg:text-7xl font-heading font-black text-dark leading-[1.1] uppercase tracking-tighter">
          L'excellence opérationnelle par les <span class="text-primary underline decoration-sky-300 decoration-8 underline-offset-8">ERPs.</span>
        </h2>
        <p class="text-slate-500 text-xl leading-relaxed">
          De l'audit de vos besoins à l'intégration finale, nous déployons les technologies de gestion les plus performantes du marché mondial.
        </p>
      </div>
      
      <div class="fade-in stagger-2">
        <div class="bg-white/70 backdrop-blur-xl rounded-[4rem] shadow-premium overflow-hidden border border-white/50">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-dark/5">
                  <th class="p-10 text-xs font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">Solution ERP</th>
                  <th class="p-10 text-xs font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">Cible Entreprise</th>
                  <th class="p-10 text-xs font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">Points Forts</th>
                  <th class="p-10 text-xs font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 text-center">Niveau d'Expertise</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50/50 transition-colors group">
                  <td class="p-10">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-black text-primary text-xl">S</div>
                      <span class="text-xl font-black text-dark tracking-tight">SAGE 100 / Cloud</span>
                    </div>
                  </td>
                  <td class="p-10 font-bold text-slate-500 uppercase text-xs">PME / PMI Industrielles</td>
                  <td class="p-10 text-slate-600 font-medium">Comptabilité, Paie, Gestion Commerciale, Trésorerie</td>
                  <td class="p-10 text-center">
                    <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest">Master Partner</span>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50 transition-colors group">
                  <td class="p-10">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-black text-purple-600 text-xl">O</div>
                      <span class="text-xl font-black text-dark tracking-tight">Odoo Enterprise</span>
                    </div>
                  </td>
                  <td class="p-10 font-bold text-slate-500 uppercase text-xs">TPE / PME Agiles</td>
                  <td class="p-10 text-slate-600 font-medium">Modularité totale, CRM, E-commerce, Production</td>
                  <td class="p-10 text-center">
                    <span class="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-xs font-black uppercase tracking-widest">Expert Certifié</span>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50 transition-colors group">
                  <td class="p-10">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-black text-blue-700 text-xl">S</div>
                      <span class="text-xl font-black text-dark tracking-tight">SAP Business One</span>
                    </div>
                  </td>
                  <td class="p-10 font-bold text-slate-500 uppercase text-xs">Grandes Entreprises</td>
                  <td class="p-10 text-slate-600 font-medium">Standard mondial, BI, Analytics, Multi-filiales</td>
                  <td class="p-10 text-center">
                    <span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest">Consultant Sênior</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div class="bg-primary rounded-[4rem] p-16 lg:p-24 text-center space-y-12 shadow-2xl relative overflow-hidden fade-in">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div class="relative z-10 space-y-6">
          <h3 class="text-3xl lg:text-5xl font-heading font-black text-white tracking-tighter uppercase">Besoin d'un accompagnement <span class="text-dark bg-white px-4">personnalisé ?</span></h3>
          <p class="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Nos experts sont à votre écoute pour vous recommander la solution la plus adaptée à votre secteur d'activité.
          </p>
        </div>
        <div class="relative z-10 pt-4">
           <button class="bg-dark text-white px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all">
             Prendre rendez-vous avec un consultant
           </button>
        </div>
      </div>
    </div>
  `;
  main.appendChild(erpSection);
};
