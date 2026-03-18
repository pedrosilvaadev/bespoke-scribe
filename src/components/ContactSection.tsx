import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519933294772?text=Olá! Vi o site da TRENDS SALON e gostaria de falar com um especialista.";

const ContactSection = () => (
  <section id="contato" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
          Visite nosso novo endereço
        </h2>
        <div className="space-y-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-surface rounded-lg text-primary"><MapPin size={20} /></div>
            <div>
              <div className="font-bold text-foreground">Endereço</div>
              <p className="text-muted-foreground font-body">Indaiatuba - SP (Consulte o endereço completo via WhatsApp)</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-surface rounded-lg text-primary"><Phone size={20} /></div>
            <div>
              <div className="font-bold text-foreground">Telefone / WhatsApp</div>
              <a href="tel:+551933294772" className="text-muted-foreground font-body hover:text-primary transition-colors">(19) 3329-4772</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-surface rounded-lg text-primary"><Clock size={20} /></div>
            <div>
              <div className="font-bold text-foreground">Horário de Atendimento</div>
              <p className="text-muted-foreground font-body">Segunda a Sexta: 09h às 19h<br />Sábado: 09h às 13h</p>
            </div>
          </div>
        </div>
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-button font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={20} />
          Quero Falar com Especialista
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-[400px] bg-muted rounded-card overflow-hidden shadow-inner"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58852.74837588824!2d-47.25143384999999!3d-23.08985175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4ca646985f7d%3A0x6762331599553765!2sIndaiatuba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
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

export default ContactSection;
