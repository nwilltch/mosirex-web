export const initServices = () => {
  const main = document.querySelector('#main-content');
  const servicesSection = document.createElement('section');
  servicesSection.className = 'services-section py-24 lg:py-32 bg-white relative';
  servicesSection.id = 'services';
  servicesSection.innerHTML = `
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 fade-in">
        <div class="space-y-4 max-w-2xl">
          <span class="text-primary font-black text-xs tracking-[0.3em] uppercase">NOS EXPERTISES</span>
          <h2 class="text-4xl lg:text-6xl font-heading font-black text-dark leading-tight uppercase tracking-tighter">
            Des solutions sur-mesure pour <span class="text-primary">chaque enjeu.</span>
          </h2>
        </div>
        <p class="text-slate-500 text-lg leading-relaxed max-w-md">
          Nous couvrons l’ensemble de la chaîne de valeur de votre organisation, de l’audit de gestion à l’intégration SI.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in stagger-2">
        <!-- Service Card 1 -->
        <div class="group relative bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-premium hover:-translate-y-4 transition-all duration-700 staggered-child">
          <div class="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">📊</div>
          <h4 class="font-black text-2xl mb-4 text-dark uppercase tracking-tighter leading-none">Conseil<br>Management</h4>
          <p class="text-sm text-slate-500 mb-10 leading-relaxed text-balance">
            Audit de performance, contrôle de gestion stratégique et optimisation des processus financiers.
          </p>
          <div class="pt-6 border-t border-slate-200/50">
            <a href="#" class="text-primary-dark font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
              Explorer le métier <span>→</span>
            </a>
          </div>
        </div>

        <!-- Service Card 2 -->
        <div class="group relative bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-premium hover:-translate-y-4 transition-all duration-700 staggered-child">
          <div class="w-16 h-16 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">⚙️</div>
          <h4 class="font-black text-2xl mb-4 text-dark uppercase tracking-tighter leading-none">Systèmes<br>d'Information</h4>
          <p class="text-sm text-slate-500 mb-10 leading-relaxed text-balance">
            Intégration d'ERP leaders (SAGE, Odoo, SAP) et architecture de données sécurisée.
          </p>
          <div class="pt-6 border-t border-slate-200/50">
            <a href="#" class="text-primary-dark font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
              Nos solutions <span>→</span>
            </a>
          </div>
        </div>

        <!-- Service Card 3 -->
        <div class="group relative bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-premium hover:-translate-y-4 transition-all duration-700 staggered-child">
          <div class="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">🎓</div>
          <h4 class="font-black text-2xl mb-4 text-dark uppercase tracking-tighter leading-none">Formations<br>Certifiantes</h4>
          <p class="text-sm text-slate-500 mb-10 leading-relaxed text-balance">
            Centre CFPM agréé MINEFOP. Montée en compétences de vos ressources humaines.
          </p>
          <div class="pt-6 border-t border-slate-200/50">
            <a href="#" class="text-primary-dark font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
              Le catalogue <span>→</span>
            </a>
          </div>
        </div>

        <!-- Service Card 4 -->
        <div class="group relative bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-premium hover:-translate-y-4 transition-all duration-700 staggered-child">
          <div class="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">🏆</div>
          <h4 class="font-black text-2xl mb-4 text-dark uppercase tracking-tighter leading-none">Accompagnement<br>Certification</h4>
          <p class="text-sm text-slate-500 mb-10 leading-relaxed text-balance">
            Préparation intensive aux certifications internationales (Microsoft, Oracle, SAP).
          </p>
          <div class="pt-6 border-t border-slate-200/50">
            <a href="#" class="text-primary-dark font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
              S'inscrire <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  main.appendChild(servicesSection);
};
