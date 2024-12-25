import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function MobileNav() {
  return (
    <div className='inline lg:hidden '>

    <Sheet >
      <SheetTrigger asChild>
        <button
      
      >
          <Menu className=" text-primary" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
  
          <Link
            to="/store"
            className="text-lg font-serif hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-accent"
          >
            store
          </Link>
          <Link
            to="/about"
            className="text-lg font-serif hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-accent"
          >
            About
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
            </div>
  );
}