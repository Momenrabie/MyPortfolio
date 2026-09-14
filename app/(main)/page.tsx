import { MarqueeStrip } from "@/components/common/marquee-strip";
import { AboutSection } from "@/components/sections/about/about-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { marquee } from "@/lib/content/marquee";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MarqueeStrip items={marquee} />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
