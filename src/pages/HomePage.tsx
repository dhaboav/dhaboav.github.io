import {
  BlogSection,
  AboutSection,
  HeroSection,
  ContactSection,
  ProjectSection,
} from '@/widgets/home';

export function HomePage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
