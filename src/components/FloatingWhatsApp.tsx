import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519933294772?text=Olá! Vi o site da TRENDS SALON e gostaria de agendar uma avaliação.";

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[9999] bg-whatsapp text-primary-foreground w-14 h-14 md:w-auto md:h-auto md:px-6 md:py-3 rounded-full flex items-center justify-center gap-2 shadow-xl animate-wa-pulse hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-opacity"
    aria-label="Agendar pelo WhatsApp"
  >
    <MessageCircle size={24} />
    <span className="hidden md:inline font-bold text-sm">Agendar Agora</span>
  </a>
);

export default FloatingWhatsApp;
