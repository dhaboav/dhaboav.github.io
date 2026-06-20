import {
  BlogSection,
  AboutSection,
  HeroSection,
  ContactSection,
  ProjectSection,
} from '@/widgets/home';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};
