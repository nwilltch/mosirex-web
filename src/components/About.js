export const initAbout = () => {
  const main = document.querySelector('#main-content');
  const aboutSection = document.createElement('section');
  aboutSection.className = 'about-section bg-white py-24 lg:py-32 relative overflow-hidden';
  aboutSection.id = 'about';
  aboutSection.innerHTML = `
    <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
      <div class="relative group fade-in">
        <div class="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" class="w-full h-[600px] object-cover" alt="Team Collaboration">
          <div class="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>
        </div>
        
        <!-- Experience Badge -->
        <div class="absolute -bottom-8 -right-8 bg-primary text-white p-10 rounded-[3rem] shadow-2xl z-20 animate-float">
          <span class="block text-5xl font-black tracking-tighter">09+</span>
          <span class="block text-[0.65rem] font-bold uppercase tracking-[0.2em] opacity-80 leading-tight">Années d'Excellence<br>depuis 2015</span>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div class="space-y-12 fade-in stagger-2">
        <div class="space-y-4">
          <span class="text-primary font-black text-xs tracking-[0.3em] uppercase">NOTRE ADN</span>
          <h2 class="text-4xl lg:text-6xl font-heading font-black text-dark leading-[1.1] uppercase tracking-tighter text-balance">
            Concevoir le futur de votre <span class="text-primary">gestion.</span>
          </h2>
          <p class="text-lg text-slate-500 leading-relaxed max-w-xl">
            MOSIREX est un cabinet conseil de premier plan, spécialisé dans l’accompagnement stratégique et l’intégration de solutions ERP de classe mondiale.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="group p-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-premium hover:-translate-y-2 transition-all duration-500 text-balance">
            <div class="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">🚩</div>
            <h4 class="font-black text-dark uppercase tracking-widest text-xs mb-3">Notre Mission</h4>
            <p class="text-sm text-slate-500 leading-relaxed">
              Démocratiser l'accès aux technologies de gestion avancées pour catalyser la croissance des entreprises africaines.
            </p>
          </div>

          <div class="group p-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-premium hover:-translate-y-2 transition-all duration-500 text-balance">
            <div class="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-accent group-hover:text-white transition-all">👁️</div>
            <h4 class="font-black text-dark uppercase tracking-widest text-xs mb-3">Notre Vision</h4>
            <p class="text-sm text-slate-500 leading-relaxed">
              Devenir la référence continentale en ingénierie des processus et intégration de Systèmes d'Informations (SI).
            </p>
          </div>
        </div>

        <div class="pt-8 flex items-center gap-6">
          <a href="#services" class="text-dark font-black text-sm uppercase tracking-widest flex items-center gap-3 group">
            Découvrir nos métiers 
            <span class="w-10 h-10 rounded-full border border-dark flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-all">→</span>
          </a>
        </div>
      </div>
    </div>
  `;
  main.appendChild(aboutSection);
};
