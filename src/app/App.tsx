import { HashRouter, Route, Routes } from 'react-router-dom';

import { BlogDetail } from '@/components/blog/BlogDetail';
import { BlogList } from '@/components/blog/BlogList';
import { AboutSection } from '@/components/home/AboutSection';
import { ContactSection } from '@/components/home/ContactSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { HeroSection } from '@/components/home/HeroSection';
import { ProjectSection } from '@/components/home/ProjectSection';
import { NotFound } from '@/components/layout/NotFound';
import { useI18n } from '@/i18n/useI18n';

import { Layout } from './Layout';

export default function App() {
  const { ui } = useI18n();
  const { sectionTitle, subtitle, backButtonLabel } = ui.notfoundPage;
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <ExperienceSection />
                  <ProjectSection />
                  <ContactSection />
                </>
              }
            />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Route>
          <Route
            path="*"
            element={
              <NotFound
                pageTitle={sectionTitle}
                pageDesc={subtitle}
                buttonLabel={backButtonLabel}
              />
            }
          />
        </Routes>
      </main>
    </HashRouter>
  );
}
