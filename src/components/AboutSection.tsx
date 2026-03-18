import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clinicImg from "@/assets/clinic-interior.jpg";

const WHATSAPP_LINK = "https://wa.me/5519933294772?text=Olá! Vi o site da TRENDS SALON e gostaria de saber mais.";

const items = [
  "Equipamentos Certificados ANVISA",
  "Protocolos Personalizados",
  "Ambiente Esterilizado e Seguro",
  "Especialistas em Harmonização",
];

const AboutSection = () => (
  <section id="sobre" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -30 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="aspect-[4/5] bg-muted rounded-card overflow-hidden shadow-2xl">
          <img
            src={clinicImg}
            alt="Interior da clínica TRENDS SALON"
            className="w-full h-full object-cover"
            width={1024}
            height={1280}
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-card text-primary-foreground shadow-xl hidden md:block max-w-xs">
          <p className="italic text-lg font-body">
            "Nossa missão é realçar a beleza que já existe em você."
          </p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 30 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-button font-bold hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Conheça nossa História
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
