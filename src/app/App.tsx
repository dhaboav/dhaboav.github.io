import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage, BlogPage, BlogPostPage, NotFoundPage } from '@/pages';
import { Layout } from './Layout';

export default function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
