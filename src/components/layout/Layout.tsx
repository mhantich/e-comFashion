import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Toaster } from '@/components/ui/toaster';
import Footer from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Header />
      <main className="  ">
        <Outlet />
      </main>
      <Toaster />
      <Footer/>
    </div>
  );
}