export const initFooter = () => {
  const footer = document.querySelector('#site-footer');
  footer.innerHTML = `
    <footer class="bg-dark text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <!-- Decoration -->
      <div class="absolute bottom-0 left-0 w-full h-[50%] bg-[radial-gradient(circle_at_50%_150%,rgba(0,118,185,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div class="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-20 pb-24 relative z-10">
        <div class="space-y-10">
          <div class="flex items-center gap-4 cursor-pointer group" onclick="window.location.href='/'">
            <div class="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-2xl font-black text-2xl shadow-xl shadow-primary/20">M</div>
            <div class="flex flex-col -space-y-1">
              <span class="font-heading font-black text-2xl text-white tracking-tighter uppercase group-hover:text-primary transition-colors">MOSIREX</span>
              <span class="text-[0.6rem] font-black text-slate-500 tracking-[0.3em] uppercase">Expertise ERP</span>
            </div>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed max-w-[250px] font-medium uppercase tracking-wide">
            Votre partenaire stratégique pour la transformation numérique et l'excellence opérationnelle en Afrique.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all border border-white/10">in</a>
            <a href="#" class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all border border-white/10">fb</a>
            <a href="#" class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all border border-white/10">tw</a>
          </div>
        </div>

        <div class="space-y-10">
          <h4 class="text-xs font-black text-white/40 uppercase tracking-[0.3em]">Navigation</h4>
          <ul class="space-y-5 text-sm font-black uppercase tracking-widest">
            <li><a href="/" class="text-slate-300 hover:text-primary hover:pl-2 transition-all">Accueil</a></li>
            <li><a href="#about" class="text-slate-300 hover:text-primary hover:pl-2 transition-all">L'organe Mosirex</a></li>
            <li><a href="#services" class="text-slate-300 hover:text-primary hover:pl-2 transition-all">Expertises métiers</a></li>
            <li><a href="#formation" class="text-slate-300 hover:text-primary hover:pl-2 transition-all">CFPM Academy</a></li>
            <li><a href="/contact" class="text-slate-300 hover:text-primary hover:pl-2 transition-all">Nous contacter</a></li>
          </ul>
        </div>

        <div class="space-y-10">
          <h4 class="text-xs font-black text-white/40 uppercase tracking-[0.3em]">Légal & Aide</h4>
          <ul class="space-y-5 text-sm font-black uppercase tracking-widest">
            <li><a href="#" class="text-slate-300 hover:text-primary transition-colors">Mentions Légales</a></li>
            <li><a href="#" class="text-slate-300 hover:text-primary transition-colors">Confidentialité</a></li>
            <li><a href="#" class="text-slate-300 hover:text-primary transition-colors">Support Client</a></li>
            <li><a href="#" class="text-slate-300 hover:text-primary transition-colors">Recrutement</a></li>
          </ul>
        </div>

        <div class="space-y-10">
          <h4 class="text-xs font-black text-white/40 uppercase tracking-[0.3em]">Newsletter</h4>
          <p class="text-slate-400 text-sm font-medium uppercase tracking-wide leading-relaxed">
            Recevez l'actualité des ERP et nos prochains séminaires CFPM.
          </p>
          <form class="relative group">
            <input type="email" placeholder="VOTRE EMAIL" class="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-[2rem] focus:ring-2 focus:ring-primary/50 outline-none transition-all pr-16 text-xs font-black uppercase tracking-widest placeholder:text-white/20">
            <button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-2xl font-black hover:scale-110 active:scale-95 transition-all shadow-xl shadow-primary/20">
              →
            </button>
          </form>
        </div>
      </div>

      <div class="container mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-[0.65rem] font-black uppercase tracking-[0.3em] text-white/30">
        <p>© 2026 MOSIREX. Excellence is our standard.</p>
        <p>Design by <span class="text-primary-light">Antigravity Premium Team</span></p>
      </div>
    </footer>
  `;
};
