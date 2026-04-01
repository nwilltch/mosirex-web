export const initHero = () => {
  const main = document.querySelector('#main-content');
  const heroSection = document.createElement('section');
  heroSection.className = 'hero-section min-h-[90vh] flex items-center relative overflow-hidden bg-slate-50 pt-32 pb-20';
  heroSection.id = 'hero-section';
  heroSection.innerHTML = `
    <!-- Mesh Background -->
    <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-blue/10 rounded-full blur-[150px]"></div>
      <div class="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px] animate-float"></div>
    </div>

    <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div class="space-y-10 fade-in">
        <div class="space-y-3 staggered-child">
          <span class="inline-block px-4 py-1.5 bg-primary/10 text-primary font-black text-[0.7rem] tracking-[0.2em] uppercase rounded-full border border-primary/20">
            SAGE DE DROIT CAMEROUNAIS
          </span>
          <h1 class="text-6xl lg:text-8xl font-heading font-black text-dark leading-[0.9] uppercase tracking-tighter text-balance">
            Votre solution,<br><span class="text-primary">notre passion.</span>
          </h1>
        </div>
        
        <p class="text-xl text-slate-500 max-w-lg leading-relaxed text-balance staggered-child">
          Expertise de haut niveau en Management et Systèmes d'Informations (ERP). 
          Nous transformons la complexité en performance opérationnelle depuis 2015.
        </p>
        
        <div class="flex flex-wrap gap-5 pt-4 staggered-child">
          <button class="group relative bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all transform hover:-translate-y-1 overflow-hidden">
            <span class="relative z-10">Demander une démo</span>
            <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </button>
          <button class="px-10 py-5 rounded-2xl border-2 border-slate-200 text-dark font-bold text-lg hover:border-primary hover:text-primary hover:bg-primary/5 transition-all transform hover:-translate-y-1">
            En savoir plus
          </button>
        </div>
        
        <div class="flex items-center gap-6 pt-10 border-t border-slate-200/50 staggered-child">
          <div class="flex -space-x-4">
            <img class="w-12 h-12 rounded-2xl border-4 border-white shadow-md" src="https://ui-avatars.com/api/?name=JD&background=0076B9&color=fff" alt="User">
            <img class="w-12 h-12 rounded-2xl border-4 border-white shadow-md" src="https://ui-avatars.com/api/?name=AS&background=0A1128&color=fff" alt="User">
            <img class="w-12 h-12 rounded-2xl border-4 border-white shadow-md" src="https://ui-avatars.com/api/?name=MK&background=3B82F6&color=fff" alt="User">
          </div>
          <p class="text-sm text-slate-400 font-bold max-w-[200px] leading-tight uppercase tracking-widest">
            Expertise reconnue dans toute l’Afrique Francophone
          </p>
        </div>
      </div>
      
      <div class="relative flex justify-center lg:justify-end fade-in stagger-2">
        <!-- Main Stats Card (Floating) -->
        <div class="animate-float relative z-20">
          <div class="grid grid-cols-2 gap-8 bg-white/80 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] shadow-premium border border-white/50 max-w-md">
            <div class="space-y-2">
              <span class="block text-5xl font-black text-primary tracking-tighter">10+</span>
              <span class="block text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.2em] leading-tight">Années<br>d'Expertise</span>
            </div>
            <div class="space-y-2">
              <span class="block text-5xl font-black text-primary tracking-tighter">07</span>
              <span class="block text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.2em] leading-tight">Partners<br>Editeurs</span>
            </div>
            <div class="space-y-2">
              <span class="block text-5xl font-black text-primary tracking-tighter">80+</span>
              <span class="block text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.2em] leading-tight">Formations<br>Disponibles</span>
            </div>
            <div class="space-y-2">
              <span class="block text-5xl font-black text-primary tracking-tighter">30+</span>
              <span class="block text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.2em] leading-tight">Clients<br>Actifs</span>
            </div>
          </div>
          
          <!-- Secondary decorative card -->
          <div class="absolute -bottom-8 -left-8 bg-dark text-white p-6 rounded-[2rem] shadow-2xl border border-white/10 z-30 transition-transform hover:scale-105 hidden md:block animate-pulse">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold">✓</div>
              <div>
                <span class="block text-[0.6rem] text-slate-400 font-bold uppercase tracking-widest">Solution</span>
                <span class="block font-bold">Hautement Sécurisée</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Decorative background elements -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
    </div>
  `;
  main.appendChild(heroSection);
};
