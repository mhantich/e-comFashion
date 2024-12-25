import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Regester = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="hidden lg:inline  relative w-full md:w-1/2  p-8">
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src="/images/selling-products13.jpg"
              alt="Shoe"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Animated overlay effect */}
        
          </div>
        </div>

        {/* Right Side - Regester Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <p className="text-gray-600 mb-8">
              Log in now to explore all the features and benefits of our platform and see what's new.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your Name
                </label>
                <input
                  type="Name"
        
                  placeholder="johndoe@mail.domain"
                  className="w-full px-4 py-3 rounded-lg border text-white border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your Last Name
                </label>
                <input
                  type="lastName"
                 
             
                  placeholder="johndoe@mail.domain"
                  className="w-full px-4 py-3 rounded-lg border text-white border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@mail.domain"
                  className="w-full px-4 py-3 rounded-lg border text-white border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border text-white border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember my account</span>
                </label>
                <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200"
              >
                Regester
              </button>

              <div className="text-center text-sm text-gray-600">
                You have an account?{' '}
                <Link to="/login" className="text-orange-500 hover:text-orange-600 font-medium">
                  login Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

