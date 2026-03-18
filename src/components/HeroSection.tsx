import { motion } from "framer-motion";
import { MessageCircle, Star, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/5519933294772?text=Olá! Vi o site da TRENDS SALON e gostaria de agendar uma avaliação.";
const EASING = [0.25, 0.1, 0.25, 1] as const;

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center bg-hero-dark overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-hero-dark via-hero-dark/80 to-transparent z-10" />
        <img
          src={heroBg}
          alt="Beleza e estética"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASING as unknown as string }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-gold mb-6 tracking-widest uppercase text-sm font-bold">
            <Sparkles size={18} />
            <span>Estética Avançada em Indaiatuba</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-8 leading-[1.1] text-balance">
            Sua beleza merece o{" "}
            <span className="text-shimmer">melhor tratamento.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed max-w-2xl font-body">
            Especialistas em rejuvenescimento e bem-estar. Tecnologia de ponta e
            atendimento personalizado no novo endereço da TRENDS SALON.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-button font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} />
              Quero Agendar Avaliação Gratuita
            </motion.a>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 backdrop-blur-sm w-fit">
            <div className="flex -space-x-2">
              {["M", "F", "J"].map((l, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-hero-dark bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground"
                >
                  {l}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span className="text-primary-foreground font-bold">4.7 no Google</span>{" "}
              <span className="text-primary-foreground/50">(69 avaliações)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
