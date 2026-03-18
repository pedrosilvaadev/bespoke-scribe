import { motion } from "framer-motion";
import { ShieldCheck, Users, Trophy } from "lucide-react";

const items = [
  { icon: <ShieldCheck size={28} />, title: "Segurança Total", desc: "Protocolos rigorosos de higienização e produtos de marcas líderes mundiais certificados pela ANVISA." },
  { icon: <Users size={28} />, title: "Atendimento VIP", desc: "Você não é apenas um número. Cada plano de tratamento é único e personalizado para seus objetivos." },
  { icon: <Trophy size={28} />, title: "Tecnologia de Ponta", desc: "Investimos constantemente nos equipamentos mais modernos do mercado estético brasileiro." },
];

const DifferentialsSection = () => (
  <div className="bg-hero-dark py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
      {items.map((d, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex p-4 bg-primary-foreground/5 rounded-full text-gold mb-6">
            {d.icon}
          </div>
          <h3 className="text-xl font-bold mb-4 font-heading text-primary-foreground">{d.title}</h3>
          <p className="text-primary-foreground/60 leading-relaxed font-body">{d.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default DifferentialsSection;
