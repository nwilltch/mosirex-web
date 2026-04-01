export const initHeader = () => {
  const header = document.querySelector('#site-header');
  header.innerHTML = `
    <div id="top-bar" class="bg-dark text-white text-[0.65rem] font-bold uppercase tracking-widest border-b border-white/5 py-2.5 transition-all duration-500">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div class="flex gap-8">
          <span class="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-default">
            <span class="text-primary-light">EMAIL:</span> info@mosirex.com
          </span>
          <span class="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-default">
            <span class="text-primary-light">LOC:</span> Yaoundé, Cameroun
          </span>
        </div>
        <div class="flex gap-4 items-center">
          <a href="#" class="text-primary-light hover:text-white transition-colors">FR</a>
          <span class="opacity-20">|</span>
          <a href="#" class="opacity-50 hover:opacity-100 transition-all">EN</a>
        </div>
      </div>
    </div>
    
    <nav id="navbar" class="sticky top-0 z-50 transition-all duration-500 py-6">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div class="flex items-center gap-4 cursor-pointer group" onclick="window.location.href='/'">
          <div class="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-2xl font-black text-2xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">M</div>
          <div class="flex flex-col -space-y-1">
            <span class="font-heading font-black text-2xl text-dark tracking-tighter group-hover:text-primary transition-colors">MOSIREX</span>
            <span class="text-[0.6rem] font-bold text-slate-400 tracking-[0.2em] uppercase">Expertise ERP</span>
          </div>
        </div>

        <ul class="hidden lg:flex gap-12 font-heading font-bold text-[0.9rem] uppercase tracking-wider">
          <li><a href="/" data-link class="nav-link relative py-2 text-dark hover:text-primary transition-colors">Accueil</a></li>
          <li><a href="#about" class="nav-link relative py-2 text-dark hover:text-primary transition-colors">Qui sommes-nous</a></li>
          <li><a href="#services" class="nav-link relative py-2 text-dark hover:text-primary transition-colors">Services</a></li>
          <li><a href="#formation" class="nav-link relative py-2 text-dark hover:text-primary transition-colors">Formation (CFPM)</a></li>
          <li><a href="/contact" data-link class="nav-link relative py-2 text-dark hover:text-primary transition-colors">Contact</a></li>
        </ul>

        <div class="flex items-center gap-6">
          <a href="#client-space" class="group relative px-7 py-3 bg-dark text-white rounded-2xl font-bold text-sm overflow-hidden transition-all hover:bg-primary shadow-xl shadow-dark/10">
            <span class="relative z-10 uppercase tracking-widest">Espace Client</span>
            <div class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          <button class="lg:hidden text-dark text-3xl">☰</button>
        </div>
      </div>
    </nav>
  `;

  // Navigation Link Hover Styles
  const style = document.createElement('style');
  style.textContent = `
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-blue);
      transition: width 0.3s ease;
    }
    .nav-link:hover::after {
      width: 100%;
    }
    .header-scrolled #navbar {
      @apply py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm;
    }
    .header-scrolled #top-bar {
      @apply -translate-y-full opacity-0 h-0 py-0 border-none overflow-hidden;
    }
  `;
  document.head.appendChild(style);
};
