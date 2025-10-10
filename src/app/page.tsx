import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { GallerySection } from "@/components/gallery-section";
import { ApparelsSection } from "@/components/apparels-section";
import GDPRConsent from "@/components/cookie-consent";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { TrainersSection } from "@/components/trainers-section";
import { PartnerSection } from "@/components/partners-section";
import { TestimonialsSection } from "@/components/testimonial-section";
import { Footer } from "@/components/footer-section";
import { FindUs } from "@/components/findus";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainersSection />
      <PartnerSection />
      <GallerySection />
      <ApparelsSection />
      <TestimonialsSection />
      <ContactSection />
      <FindUs />
      <Footer />
      <GDPRConsent />
    </div>
  );
}
