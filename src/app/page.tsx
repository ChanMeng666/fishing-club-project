import { HeroSection } from "@/components/landing/hero-section";
import { RegistrationCta } from "@/components/landing/registration-cta";
import { FeaturesCards } from "@/components/landing/features-cards";
import { AboutSection } from "@/components/landing/about-section";
import { EventsSection } from "@/components/landing/events-section";
import { FaqAccordion } from "@/components/landing/faq-accordion";
import { GuidesShowcase } from "@/components/landing/guides-showcase";
import { ContactSection } from "@/components/landing/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RegistrationCta />
      <FeaturesCards />
      <AboutSection />
      <EventsSection />
      <FaqAccordion />
      <GuidesShowcase />
      <ContactSection />
    </>
  );
}
