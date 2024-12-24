import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useCartStore } from '@/stores/useCartStore';
import { useAuthStore } from '@/stores/useAuthStore';

export function Header() {
  const { itemCount } = useCartStore();
  const { isAuthenticated, user } = useAuthStore();

  return (
    <header className=" w-full  top-0 z-20 ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
            logo
        </Link>

        <nav className="flex-1 flex font-serif justify-center items-center gap-6">
          <Link to="/products" className="text-primary">
            Products
          </Link>
          <Link to="/search" className="text-primary">
            Search
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/cart">
            <Button   className="relative">
              <ShoppingCart />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1  text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          {isAuthenticated ? (
            <Link to={user?.role === 'admin' ? '/admin' : '/profile'}>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}