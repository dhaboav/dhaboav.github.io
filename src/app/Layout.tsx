import { Outlet } from 'react-router-dom';

import { BackToTop } from '@/components/layout/BackToTop';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
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
