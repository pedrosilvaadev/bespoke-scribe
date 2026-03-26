import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519933294772?text=Olá! Vi o site da TRENDS SALON e gostaria de falar com um especialista.";

const ContactSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contato" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
            Visite nosso novo endereço
          </h2>
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface rounded-lg text-primary"><MapPin size={20} /></div>
              <div>
                <div className="font-bold text-foreground">Endereço</div>
                <a
                  className="text-muted-foreground font-body hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm transition-colors"
                  href="https://www.google.com/maps/place/TRENDS+SALON+(novo+endere%C3%A7o)/@-23.0876897,-47.2364554,15.75z/data=!4m15!1m8!3m7!1s0x94c8b35b6224430f:0x2f32b1c7fc361789!2sTRENDS+SALON+(novo+endere%C3%A7o)!8m2!3d-23.087289!4d-47.2378249!10e5!16s%2Fg%2F11cp7gk689!3m5!1s0x94c8b35b6224430f:0x2f32b1c7fc361789!8m2!3d-23.087289!4d-47.2378249!16s%2Fg%2F11cp7gk689?authuser=0&hl=pt&entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">📍 Av. Domingos Ferrarezzi, 2102 - Jardim Monte Verde, Indaiatuba - SP, 13348-875</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface rounded-lg text-primary"><Phone size={20} /></div>
              <div>
                <div className="font-bold text-foreground">Telefone / WhatsApp</div>
                <a href="tel:+551933294772" className="text-muted-foreground font-body hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm transition-colors">(19) 3329-4772</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface rounded-lg text-primary"><Clock size={20} /></div>
              <div>
                <div className="font-bold text-foreground">Horário de Atendimento</div>
                <p className="text-muted-foreground font-body">Terça a Sexta: 08h às 18h<br />Sábado: 08h às 17h</p>
              </div>
            </div>
          </div>
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-button font-bold text-lg shadow-lg hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-opacity"
            aria-label="Falar com especialista no WhatsApp"
          >
            <MessageCircle size={20} />
            Quero Falar com Especialista
          </motion.a>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          className="h-[400px] bg-muted rounded-card overflow-hidden shadow-inner"
        >
          <iframe
            src="https://www.google.com/maps?q=Av.+Domingos+Ferrarezzi,+2102,+Jardim+Monte+Verde,+Indaiatuba+-+SP,+13348-875&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Localização TRENDS SALON em Indaiatuba"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
