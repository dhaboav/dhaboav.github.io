import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { updateHtmlLang } from '@/utils/langUtils';
import Project from '@/components/Project';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import BackToTop from '@/components/BackToTop';

export default function App() {
  const [langTrigger, setLangTrigger] = useState<number>(0);

  useEffect(() => {
    updateHtmlLang();
    const handleLangChange = () => {
      updateHtmlLang();
      setLangTrigger((prev) => prev + 1);
    };
    window.addEventListener('language-change', handleLangChange);
    return () => window.removeEventListener('language-change', handleLangChange);
  }, []);

  return (
    <div key={langTrigger}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
