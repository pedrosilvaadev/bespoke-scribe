import { motion, useReducedMotion } from "framer-motion";
import { Award, CheckCircle2, MessageCircle, ShieldCheck, Star } from "lucide-react";
import clinicImg from "@/assets/clinic.jpg";

const WHATSAPP_LINK = "https://wa.me/5519933294772?text=Olá! Vi o site da TRENDS SALON e gostaria de saber mais.";

const items = [
  "Equipamentos Certificados ANVISA",
  "Protocolos Personalizados",
  "Ambiente Esterilizado e Seguro",
  "Especialistas em Harmonização",
];

const trustHighlights = [
  { icon: Star, value: "4.7/5", label: "Google (69 avaliações)" },
  { icon: Award, value: "+9", label: "Anos de experiência" },
  { icon: ShieldCheck, value: "100%", label: "Foco em biossegurança" },
];

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="sobre" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
          initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-muted rounded-card overflow-hidden shadow-2xl">
            <img
              src={clinicImg}
              alt="Espaço da clínica TRENDS SALON em Indaiatuba"
              className="w-full h-full object-cover"
              width={1024}
              height={1280}
              loading="lazy"
              decoding="async"
            />
          </div>



          <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-card text-primary-foreground shadow-xl hidden md:block max-w-xs">
            <p className="italic text-lg font-body">
              "Nossa missão é realçar a beleza que já existe em você."
            </p>
          </div>
        </motion.div>

        <motion.div
          whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
          initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-surface border border-border text-foreground/90 text-sm font-semibold">
            <ShieldCheck size={16} className="text-accent" />
            Contexto, seguranca e resultado real
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
            Excelência e Cuidado em Cada Detalhe
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-body">
            Na TRENDS SALON, combinamos ciência e arte para oferecer resultados
            naturais e duradouros. Nosso novo espaço em Indaiatuba foi projetado
            para oferecer o máximo de conforto e privacidade.
          </p>
          <ul className="space-y-4 mb-8">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {trustHighlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.label}
                  className="rounded-card border border-border bg-card p-4"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Icon size={16} />
                    <span className="font-heading font-bold text-lg">{highlight.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body">{highlight.label}</p>
                </div>
              );
            })}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-button font-bold text-base shadow-lg hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-opacity"
            aria-label="Conhecer protocolos da clínica no WhatsApp"
          >
            <MessageCircle size={18} />
            Conhecer Protocolos da Clinica
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
