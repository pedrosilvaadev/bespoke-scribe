import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519933294772?text=Olá! Vi o site da TRENDS SALON e gostaria de saber mais.";

const FooterSection = () => (
  <footer className="bg-hero-dark text-primary-foreground pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-20">
      <div>
        <div className="text-2xl font-bold font-heading mb-6">TRENDS SALON</div>
        <p className="text-primary-foreground/60 leading-relaxed font-body">
          Sua beleza merece o melhor tratamento em Indaiatuba. Especialistas em estética avançada e bem-estar.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold">Links Rápidos</h4>
        <ul className="space-y-4 text-primary-foreground/60 font-body">
          {[
            { label: "Início", href: "#" },
            { label: "Procedimentos", href: "#servicos" },
            { label: "Sobre Nós", href: "#sobre" },
            { label: "Depoimentos", href: "#depoimentos" },
            { label: "Contato", href: "#contato" },
          ].map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-primary-foreground transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold">Contato</h4>
        <div className="space-y-3 text-primary-foreground/60 font-body">
          <a href="https://www.google.com/maps/place/TRENDS+SALON+(novo+endere%C3%A7o)/@-23.0876897,-47.2364554,15.75z/data=!4m15!1m8!3m7!1s0x94c8b35b6224430f:0x2f32b1c7fc361789!2sTRENDS+SALON+(novo+endere%C3%A7o)!8m2!3d-23.087289!4d-47.2378249!10e5!16s%2Fg%2F11cp7gk689!3m5!1s0x94c8b35b6224430f:0x2f32b1c7fc361789!8m2!3d-23.087289!4d-47.2378249!16s%2Fg%2F11cp7gk689?authuser=0&hl=pt&entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">📍 Av. Domingos Ferrarezzi, 2102 - Jardim Monte Verde, Indaiatuba - SP, 13348-875</a>
          <p>
            📞{" "}
            <a href="tel:+551933294772" className="hover:text-primary-foreground transition-colors">
              (19) 3329-4772
            </a>
          </p>
          <p>🕐 Seg-Sex: 09h-19h · Sáb: 09h-13h</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-primary-foreground px-4 py-2 rounded-button font-bold text-sm mt-2 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-primary-foreground/5 text-center text-primary-foreground/40 text-sm font-body">
      <p>© 2025 TRENDS SALON. Todos os direitos reservados.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="#" className="hover:text-primary-foreground/70">Política de Privacidade</a>
        <span>|</span>
        <a href="#" className="hover:text-primary-foreground/70">Termos de Uso</a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
