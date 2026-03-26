import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { val: "+9", label: "Anos de Experiência" },
  { val: "+2.500", label: "Clientes Atendidas" },
  { val: "+5k", label: "Procedimentos Realizados" },
  { val: "4.7/5", label: "Google (69 avaliações)" },
];

const TrustBar = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-surface border-y border-border py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-primary font-heading">{stat.val}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
