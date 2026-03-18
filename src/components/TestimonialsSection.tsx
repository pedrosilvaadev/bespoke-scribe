import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Mariana S.", text: "Tinha muitas manchas de acne e baixa autoestima. Depois de 3 sessões de peeling na Trends Salon, minha pele está outra! Meu marido não acreditou na diferença. Super recomendo o novo espaço!", proc: "Peeling Químico" },
  { name: "Fernanda L.", text: "Atendimento impecável! A equipe é muito atenciosa e carinhosa. O resultado do meu botox ficou super natural — ninguém percebeu que fiz, só que estou mais jovem. Melhor de Indaiatuba!", proc: "Botox" },
  { name: "Juliana R.", text: "Já indiquei para todas as minhas amigas e colegas de trabalho. A limpeza de pele é a mais completa que já fiz. O ambiente é maravilhoso e me senti muito segura!", proc: "Limpeza de Pele" },
];

const TestimonialsSection = () => (
  <div className="bg-surface overflow-hidden">
    <section id="depoimentos" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          O que nossas clientes dizem
        </h2>
        <div className="flex justify-center gap-1 text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" size={20} />
          ))}
        </div>
        <p className="text-muted-foreground font-body">
          Nota 4.7 no Google baseada em 69 avaliações reais.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-card p-8 rounded-card"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-muted-foreground italic mb-6 leading-relaxed font-body">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                {t.name[0]}
              </div>
              <div>
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-accent font-bold uppercase tracking-widest">
                  {t.proc}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default TestimonialsSection;
