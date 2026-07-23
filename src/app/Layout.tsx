import { Outlet } from 'react-router-dom';
import { Footer, Navbar, BackToTop } from '@/widgets/layout';

export function Layout() {
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
