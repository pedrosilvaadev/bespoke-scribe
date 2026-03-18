import { motion } from "framer-motion";

const stats = [
  { val: "+15", label: "Anos de Experiência" },
  { val: "+207", label: "Clientes Satisfeitos" },
  { val: "1.5k", label: "Procedimentos Realizados" },
  { val: "4.7/5", label: "Nota no Google" },
];

const TrustBar = () => (
  <div className="bg-surface border-y border-border py-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-primary font-heading">{stat.val}</div>
          <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TrustBar;
