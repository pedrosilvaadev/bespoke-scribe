import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519933294772?text=Olá! Vi o site da TRENDS SALON e gostaria de agendar.";

const faqs = [
  { q: "Qual o valor da avaliação inicial?", a: "Nossa avaliação estética inicial é gratuita e sem compromisso. Analisamos seu tipo de pele e objetivos para recomendar o melhor protocolo personalizado." },
  { q: "Quais procedimentos vocês oferecem para rejuvenescimento?", a: "Oferecemos botox, preenchimento facial, peeling químico, limpeza de pele profunda e protocolos combinados para rejuvenescimento completo." },
  { q: "O botox dói? Quanto tempo dura o efeito?", a: "O procedimento é minimamente invasivo e utilizamos anestésicos tópicos para seu conforto. O efeito costuma durar entre 4 a 6 meses, dependendo do organismo." },
  { q: "É possível parcelar os tratamentos?", a: "Sim! Parcelamos em até 10x sem juros no cartão de crédito. Também aceitamos Pix com desconto especial e boleto bancário." },
  { q: "Qual a diferença entre preenchimento e harmonização facial?", a: "O preenchimento trata áreas específicas (lábios, bigode chinês). A harmonização é um conjunto de procedimentos que equilibra o rosto como um todo." },
  { q: "Os procedimentos são seguros?", a: "Todos os nossos procedimentos utilizam produtos certificados pela ANVISA e são realizados por profissionais especializados em ambiente esterilizado." },
  { q: "Vocês atendem homens também?", a: "Sim! Temos protocolos específicos para o público masculino, incluindo botox, limpeza de pele e harmonização facial." },
  { q: "Como faço para agendar?", a: "whatsapp" },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  const isWhatsapp = answer === "whatsapp";

  return (
    <div className="border-b border-border py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left py-2 group"
      >
        <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors font-heading">
          {question}
        </span>
        <ChevronDown
          className={`transform transition-transform text-accent flex-shrink-0 ml-4 ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {isWhatsapp ? (
              <div className="text-muted-foreground leading-relaxed pb-4 font-body">
                O agendamento é rápido pelo nosso WhatsApp. Clique no botão abaixo:{" "}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-whatsapp font-bold hover:underline mt-2"
                >
                  <MessageCircle size={16} /> Quero Agendar pelo WhatsApp
                </a>
              </div>
            ) : (
              <p className="text-muted-foreground leading-relaxed pb-4 font-body">{answer}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => (
  <div className="bg-surface overflow-hidden">
    <section id="faq" className="py-20 md:py-32 px-6 md:px-12 max-w-4xl mx-auto ">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Dúvidas Frequentes
        </h2>
        <p className="text-muted-foreground font-body">
          Tudo o que você precisa saber antes do seu procedimento.
        </p>
      </div>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  </div>

);

export default FAQSection;
