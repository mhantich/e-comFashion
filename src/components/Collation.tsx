import { Card } from "@/components/ui/card";
import { Eye, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { Link } from "react-router-dom";

interface CollationProps {
  products: Product[];
  title: string; // Add this line to include the title property

}
export default function Collation({ products, title }: CollationProps) {
  return (
    <section className="max-w-7xl font-serif capitalize mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold ">{title}</h2>
        <a href="#" className="text-lg hover:underline flex items-center">
          View All Products 
          <span className="ml-2">→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
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
                <Link to='products/1'>  View Details</Link>
              
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
    </section>
  );
}