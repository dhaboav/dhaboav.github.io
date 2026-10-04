import { Outlet } from 'react-router-dom';

import { BackToTop } from '@/layout/ui/BackToTop';
import { Footer } from '@/layout/ui/Footer';
import { Navbar } from '@/layout/ui/Navbar';
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
