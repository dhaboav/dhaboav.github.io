import { HashRouter, Route, Routes } from 'react-router-dom';

import { Homepage } from '@/homepage/page';
import { BlogContentPage } from '@/modules/blog/page/blog-content-page';
import { BlogListPage } from '@/modules/blog/page/blog-list-page';
import { useI18n } from '@/shared/i18n/useI18n';
import { NotFound } from '@/shared/ui/not-found';

import { Layout } from './layout';

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
