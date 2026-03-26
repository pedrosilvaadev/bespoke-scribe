import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Fernanda D.", text: "Produtos das melhores marcas, profissionais excelentes, que atendem todas as necessidades do seu cabelo/couro cabeludo! E ainda com direito a cafezinho ou cappuccino excepcionais!!! Amo 😍", },
  { name: "Ricardo R.", text: "O salão é ótimo, bem localizado e tem um espaço amplo que conta com serviços de manicure e cabeleireiras. A equipe é altamente competente e capacitada, sempre em busca de novas técnicas e aprendizado.", },
  { name: "Daniela TR.", text: "Atendimento excelente. E corte da Lu perfeito além da simpatia. Acho o melhor corte de cabelo da cidade.\nTive uma excelente experiência.\nVocês fazem a diferença! Sucesso e nos vemos em breve", },
];

const TestimonialsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
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
            Nota 4.7 no Google com 69 avaliações verificadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { delay: i * 0.15, duration: 0.5 }}
              className="bg-card p-8 rounded-card justify-between flex flex-col focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestimonialsSection;
