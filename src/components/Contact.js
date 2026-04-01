export const initContact = () => {
  const main = document.querySelector('#main-content');
  const contactSection = document.createElement('section');
  contactSection.className = 'contact-banner-section bg-dark py-24 lg:py-32 relative overflow-hidden';
  contactSection.id = 'contact';
  contactSection.innerHTML = `
    <!-- Mesh Gradient Background -->
    <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
       <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#0076B9_0%,transparent_50%)]"></div>
       <div class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#00AEEF_0%,transparent_50%)]"></div>
    </div>

    <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
      <div class="text-white space-y-12 fade-in">
        <div class="space-y-6">
          <span class="text-primary font-black text-xs tracking-[0.3em] uppercase">START TODAY</span>
          <h2 class="text-5xl lg:text-7xl font-heading font-black leading-[1.1] uppercase tracking-tighter">
            Prêt à optimiser votre <span class="text-primary-light">gestion ?</span>
          </h2>
          <p class="text-white/70 text-xl leading-relaxed max-w-lg">
            Contactez nos consultants pour une analyse stratégique de vos besoins ou pour rejoindre l'une de nos sessions CFPM.
          </p>
        </div>
        
        <div class="space-y-8 pt-4">
          <div class="flex items-start gap-8 group">
            <div class="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl">📞</div>
            <div class="space-y-1 pt-1">
              <span class="block font-black text-xl uppercase tracking-tight">+237 670 00 00 00</span>
              <p class="text-white/40 text-xs font-bold uppercase tracking-widest leading-none mt-1">Lundi - Samedi • 08h00 - 18h00</p>
            </div>
          </div>
          <div class="flex items-start gap-8 group">
            <div class="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl">✉️</div>
            <div class="space-y-1 pt-1">
              <span class="block font-black text-xl uppercase tracking-tight underline decoration-primary underline-offset-4">info@mosirex.com</span>
              <p class="text-white/40 text-xs font-bold uppercase tracking-widest leading-none mt-1">Réponse garantie sous 2 heures</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="relative fade-in stagger-2">
        <div class="bg-white/10 backdrop-blur-3xl rounded-[4rem] p-12 lg:p-16 shadow-premium-dark border border-white/10 relative z-20">
          <h3 class="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-10">Restons en contact.</h3>
          <form id="main-contact-form" class="space-y-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-3">
                <label class="text-[0.65rem] font-black text-white/50 uppercase tracking-[0.2em] pl-2">Nom & Prénom</label>
                <input type="text" placeholder="JEAN DUPONT" class="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-[2rem] text-white/80 focus:ring-2 focus:ring-primary/20 focus:bg-white/10 outline-none transition-all placeholder:text-white/20">
              </div>
              <div class="space-y-3">
                <label class="text-[0.65rem] font-black text-white/50 uppercase tracking-[0.2em] pl-2">Email Pro</label>
                <input type="email" placeholder="JEAN@SOCIETE.COM" class="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-[2rem] text-white/80 focus:ring-2 focus:ring-primary/20 focus:bg-white/10 outline-none transition-all placeholder:text-white/20">
              </div>
            </div>
            
            <div class="space-y-3">
              <label class="text-[0.65rem] font-black text-white/50 uppercase tracking-[0.2em] pl-2">Objet de votre demande</label>
              <select class="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-[2rem] text-white/80 appearance-none outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white/10 cursor-pointer">
                <option class="bg-dark">Audit & Conseil Stratégique</option>
                <option class="bg-dark">Intégration ERP (SAGE/ODOO)</option>
                <option class="bg-dark">Formation Certifiante CFPM</option>
                <option class="bg-dark">Autre demande</option>
              </select>
            </div>
            
            <div class="space-y-3">
              <label class="text-[0.65rem] font-black text-white/50 uppercase tracking-[0.2em] pl-2">Message</label>
              <textarea placeholder="DÉCRIVEZ VOTRE PROJET..." class="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-[2rem] h-40 resize-none text-white/80 focus:ring-2 focus:ring-primary/20 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"></textarea>
            </div>
            
            <button type="submit" class="w-full bg-primary text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] shadow-2xl shadow-primary/30 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] transition-all">
              Envoyer ma demande
            </button>
          </form>
        </div>
        <!-- Decoration -->
        <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  `;
  main.appendChild(contactSection);
};
