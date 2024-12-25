
import { ShoppingCart, User } from 'lucide-react';
import { useCartStore } from '@/stores/useCartStore';
import { useAuthStore } from '@/stores/useAuthStore';
import { ThemeToggle } from './layout/ThemeToggle';
import { Link } from 'react-router-dom';
function TopHeader() {
    
      const { isAuthenticated, user } = useAuthStore();
  return (
    <div>
     <div className='w-full  bg-background border-gray-400 border-b-[1px] flex justify-end items-center py-2'>

              <ThemeToggle />
        <Link to="/cart">
          <button   className="relative ">
            <ShoppingCart  className=" text-primary" />
           
              <span className="absolute right-2 bg-red-400 -top-2 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                2
              </span>
            
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
    </div>
  )
}

export default TopHeader