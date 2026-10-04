import { AboutSection } from '@/homepage/ui/AboutSection';
import { ContactSection } from '@/homepage/ui/ContactSection';
import { ExperienceSection } from '@/homepage/ui/ExperienceSection';
import { HeroSection } from '@/homepage/ui/HeroSection';
import { ProjectSection } from '@/homepage/ui/ProjectSection';

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
