import Hero from '@/components/Hero';
import About from '@/components/About';
import Project from '@/components/Project';
import Blog from '@/components/blogs/Blog';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Blog />
      <Contact />
    </>
  );
}
