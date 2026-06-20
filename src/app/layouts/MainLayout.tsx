import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '@/widgets';
import { BackToTop } from '@/shared/ui';

export function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
