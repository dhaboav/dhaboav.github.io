import { AboutSection } from '@/modules/homepage/ui/about-section';
import { ContactSection } from '@/modules/homepage/ui/contact-section';
import { ExperienceSection } from '@/modules/homepage/ui/experience-section';
import { HeroSection } from '@/modules/homepage/ui/hero-section';
import { ProjectSection } from '@/modules/homepage/ui/project-section';

function Homepage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}

export { Homepage };
