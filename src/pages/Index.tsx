
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    // Set page title
    document.title = "YeboPets - Professional Pet Care Services in South Africa";
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
