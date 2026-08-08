import { Outlet } from 'react-router-dom';
import { Footer, Navbar, BackToTop } from '@/widgets/layout';
import { Toaster } from '@/shared/ui/toast';

export function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Toaster />
      <Footer />
      <BackToTop />
    </>
  );
}
