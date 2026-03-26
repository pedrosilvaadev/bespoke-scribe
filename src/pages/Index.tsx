import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="bg-background text-foreground font-body antialiased">
      <FloatingWhatsApp />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <FAQSection />
      <ServicesSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
