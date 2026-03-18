import { motion } from "framer-motion";
import { Clock, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519933294772?text=Olá! Vi a promoção de inauguração da TRENDS SALON e gostaria de garantir meu desconto.";

const PromoSection = () => (
  <div className="bg-accent py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-accent-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
          Oferta de Inauguração: Novo Endereço 🎉
        </h2>
        <p className="text-xl opacity-90 mb-8 font-body">
          Ganhe 15% de desconto na sua primeira Limpeza de Pele ou Peeling este mês.
        </p>
        <div className="inline-flex items-center gap-4 bg-background/10 px-6 py-3 rounded-full backdrop-blur-md border border-background/20 mb-8">
          <Clock size={20} />
          <span className="font-bold tracking-widest uppercase text-sm">
            Vagas Limitadas para esta semana
          </span>
        </div>
        <br />
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-background text-accent px-10 py-4 rounded-button font-bold text-lg shadow-lg hover:opacity-90 transition-opacity mt-4"
        >
          <MessageCircle size={20} />
          Quero Garantir meu Desconto
        </motion.a>
        <p className="mt-4 text-sm opacity-70">✓ Sem compromisso · ✓ Resposta em até 2h</p>
      </motion.div>
    </div>
  </div>
);

export default PromoSection;
