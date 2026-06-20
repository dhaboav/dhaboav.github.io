import { HashRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from '@/shared/ui';
import { HomePage, BlogPage, BlogPostPage } from '@/pages';
import { MainLayout } from './layouts/MainLayout';

export default function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
