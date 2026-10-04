import { HashRouter, Route, Routes } from 'react-router-dom';

import { BlogContentPage } from '@/blog/page/BlogContentPage';
import { BlogListPage } from '@/blog/page/BlogListPage';
import { Homepage } from '@/homepage/page';
import { useI18n } from '@/shared/i18n/useI18n';
import { NotFound } from '@/ui/NotFound';

import { Layout } from './Layout';

export default function App() {
  const { ui } = useI18n();
  const { sectionTitle, subtitle, backButtonLabel } = ui.notfoundPage;
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogContentPage />} />
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
