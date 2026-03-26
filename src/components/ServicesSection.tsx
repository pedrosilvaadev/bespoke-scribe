import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Droplets, Syringe, Hand, Scissors, Heart } from "lucide-react";

type Category = "todos" | "rosto" | "corpo";

const services = [
  { title: "Limpeza de Pele", desc: "Remoção de impurezas e hidratação profunda para um rosto radiante.", price: "180", cat: "rosto" as const, icon: <Droplets size={24} /> },
  { title: "Botox", desc: "Suavização de linhas de expressão com resultado natural e seguro.", price: "850", cat: "rosto" as const, icon: <Syringe size={24} /> },
  { title: "Peeling Químico", desc: "Renovação celular para tratar manchas e textura da pele.", price: "250", cat: "rosto" as const, icon: <Sparkles size={24} /> },
  { title: "Preenchimento Facial", desc: "Volume e contorno natural para lábios, maçãs do rosto e mandíbula.", price: "1.200", cat: "rosto" as const, icon: <Heart size={24} /> },
  { title: "Drenagem Linfática", desc: "Redução de inchaço e melhora da circulação corporal.", price: "150", cat: "corpo" as const, icon: <Hand size={24} /> },
  { title: "Massagem Modeladora", desc: "Auxílio na redução de medidas e contorno corporal definido.", price: "160", cat: "corpo" as const, icon: <Scissors size={24} /> },
];

const tabs: { label: string; value: Category }[] = [
  { label: "Todos", value: "todos" },
  { label: "Rosto", value: "rosto" },
  { label: "Corpo", value: "corpo" },
];

const ServicesSection = () => {
  const [active, setActive] = useState<Category>("todos");
  const filtered = active === "todos" ? services : services.filter((s) => s.cat === active);

  return (
    <section id="servicos" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Nossos Procedimentos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-body">
          Tratamentos de alta performance para rosto e corpo com resultados comprovados.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${
              active === tab.value
                ? "bg-primary text-primary-foreground"
                : "bg-surface text-muted-foreground hover:bg-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {filtered.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-card p-8 rounded-card flex flex-col transition-shadow"
              style={{ boxShadow: "var(--shadow-card)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
            >
              <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground font-heading">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow leading-relaxed font-body">
                {service.desc}
              </p>
              {/* <div className="pt-6 border-t border-border flex justify-between items-center">
                <span className="text-sm text-muted-foreground">A partir de</span>
                <span className="text-xl font-bold text-accent">R$ {service.price}</span>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="text-center text-sm text-muted-foreground mt-8">
        💳 Parcelamos em até 10x sem juros · Aceitamos Pix, cartão e boleto
      </p>
    </section>
  );
};

export default ServicesSection;
