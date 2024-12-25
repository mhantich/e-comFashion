import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProtectedRoute } from '@/routes/ProtectedRoute';

// Public Pages
import { Home } from '@/pages/Home';
import { ProductDetails } from '@/pages/ProductDetails';
import { Cart } from '@/pages/Cart';
import { Checkout } from '@/pages/Checkout';
import { Login } from '@/pages/Login';

// Protected Pages
import { Profile } from '@/pages/Profile';
import { OrderHistory } from '@/pages/OrderHistory';

// Admin Pages
import { AdminDashboard } from '@/pages/admin/Dashboard';
import { ManageProducts } from '@/pages/admin/ManageProducts';
import { ManageOrders } from '@/pages/admin/ManageOrders';
import { ManageUsers } from '@/pages/admin/ManageUsers';
import AboutUsSection from './pages/AboutUsSection';
import ShopLayout from './pages/ShopLayout';
import { Regester } from './pages/Regester';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUsSection />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/store" element={<ShopLayout />} />

          {/* Protected User Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/orders"
            element={
              <ProtectedRoute>
                <OrderHistory />
              </ProtectedRoute>
            }
          />

          {/* Protected Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ManageProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ManageOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ManageUsers />
              </ProtectedRoute>
            }
          />
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Regester />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;