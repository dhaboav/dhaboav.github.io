import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { updateHtmlLang } from '@/utils/langUtils';

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
      </main>
      <Footer />
    </div>
  );
}
