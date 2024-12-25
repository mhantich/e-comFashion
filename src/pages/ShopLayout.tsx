import { Eye, Search, ShoppingCart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { demoProductsSelling } from '@/data/data';
import Paralllax from './Paralllax';

const ShopLayout = () => {
  const categories = ['All', 'Shoes', 'Tshirts', 'Pants', 'Hoodie', 'Outer', 'Jackets', 'Accessories'];
  


  const tags = ['White', 'Cheap', 'Branded', 'Modern', 'Simple'];
  const brands = ['Nike', 'Adidas', 'Puma', 'Spike'];
  const priceRanges = [
    'Less than $10',
    '$10- $20',
    '$20- $30',
    '$30- $40',
    '$40- $50'
  ];

  return (
    <div>
<Paralllax title="store" />
    <div className="container mx-auto px-4 py-8">
      {/* Top Categories */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-8 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              className="text-primary hover:bg-gray-300 "
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="md:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {demoProductsSelling.map((product) => (
        <Card key={product.id} className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow group relative">
          <div className="overflow-hidden bg-gray-100 relative">
            <img
              src={`/images/${product.image}`}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay that appears on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
              <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                <Eye className="w-4 h-4" />
                View Details
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-xl text-primary">${product.price.toFixed(2)}</p>
          </div>
        </Card>
      ))}
    </div>
        </div>

        {/* Sidebar Filters */}
        <div className="md:w-1/4">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 pr-10 border border-gray-200 rounded"
                />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Tags</h3>
            <div className="space-y-2">
              {tags.map((tag) => (
                  <div key={tag} className="flex items-center">
                  <label className="text-gray-600 hover:text-black cursor-pointer">
                    {tag}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Brands</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center">
                  <label className="text-gray-600 hover:text-black cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Filter By Price</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <div key={range} className="flex items-center">
                  <label className="text-gray-600 hover:text-black cursor-pointer">
                    {range}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
              </div>
  );
};

export default ShopLayout;