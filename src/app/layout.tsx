import { Outlet } from 'react-router-dom';

import { BackToTop } from '@/modules/layout/ui/back-to-top';
import { Footer } from '@/modules/layout/ui/footer';
import { Navbar } from '@/modules/layout/ui/navbar';
import { Toaster } from '@/ui/toast';

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
