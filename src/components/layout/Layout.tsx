import { Link, Outlet } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import { ThemeToggle } from './ThemeToggle';
import { ShoppingCart, User } from 'lucide-react';
import { useCartStore } from '@/stores/useCartStore';
import { useAuthStore } from '@/stores/useAuthStore';

export function Layout() {
  const { isAuthenticated, user } = useAuthStore();
  const { itemCount } = useCartStore();


  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className='w-full gap-2 bg-background  flex justify-end items-center py-2'>

              <ThemeToggle />
        <Link to="/cart">
          <button   className="relative">
            <ShoppingCart  className=" text-primary" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </Link>
        {isAuthenticated && (
          <Link to={user?.role === 'admin' ? '/admin' : '/profile'}>
            <button >
              <User className=" text-primary" />
            </button>
          </Link>
        )}
      </div>
      <Header />
      <main className="  ">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}