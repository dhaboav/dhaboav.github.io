import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { updateHtmlLang } from '@/utils/langUtils';
import BackToTop from '@/components/BackToTop';
import Home from '@/pages/Home';
import BlogDetail from '@/components/blogs/BlogDetail';
import BlogList from '@/pages/BlogList';
import NotFound from '@/pages/NotFound';

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
      <HashRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </HashRouter>
    </div>
  );
}
