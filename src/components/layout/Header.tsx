import { Link } from 'react-router-dom';
import { MobileNav } from '../MobileNav';

export function Header() {


  return (
    <header className="w-full top-0 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
     
        <Link to="/" className="text-2xl font-bold">
          logo
        </Link>
      </div>

      <nav className="flex-1 hidden md:flex font-serif justify-center items-center gap-6">

     
        <Link
          to="/about"
          className="text-foreground hover:text-primary transition-colors"
        >
          About
        </Link>
        <Link
          to="/store"
          className="text-foreground hover:text-primary transition-colors"
        >
          Store
        </Link>
      </nav>

      <div className="flex items-center gap-1">
        <Link to="/login">
            <button>Login</button>
          </Link>
        <MobileNav />

     
      </div>
    </div>
  </header>
  );
}