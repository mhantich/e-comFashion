import  { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf, MapPin, Plus, Minus } from 'lucide-react';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('Cream');
  const [quantity, setQuantity] = useState(2);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); 

  const images = [
    '/images/selling-products13.jpg',
    '/images/selling-products13.jpg',
    '/images/selling-products14.jpg',
    '/images/selling-products14.jpg',

  ];

  const colors = ['Black', 'Cream', 'Green', 'Blue', 'Red'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm breadcrumbs mb-6">
        <span className="text-gray-500">New Arrival</span>
        <ChevronRight className="w-4 h-4 mx-2 inline" />
        <span className="text-gray-500">Man</span>
        <ChevronRight className="w-4 h-4 mx-2 inline" />
        <span>New Relaxed Fit Sweatshirt Vol. III</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Image Gallery */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg bg-gray-100">
            <img
              src={images[currentImage]}
              alt="Product"
              className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <button 
              onClick={() => setCurrentImage(prev => prev > 0 ? prev - 1 : images.length - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentImage(prev => prev < images.length - 1 ? prev + 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`rounded-lg overflow-hidden ${currentImage === idx ? 'ring-2 ring-blue-500' : ''}`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-24 object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block text-sm mb-4">
            NEW ARRIVAL
          </div>
          
          <h1 className="text-3xl font-bold mb-4">New Relaxed Fit Sweatshirt Vol. III</h1>
          
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4].map(n => (
              <Star key={n} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">(4.5) 623 reviews · 1,919 Sold</span>
          </div>

          <div className="text-2xl font-bold mb-8">$ 899.00</div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">SELECT COLOR</h3>
              <div className="flex gap-2 flex-wrap">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border transition-all
                      ${selectedColor === color 
                        ? 'border-blue-500 bg-blue-50 text-blue-500' 
                        : 'border-gray-200 hover:border-blue-200'
                      }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">SELECT SIZE</h3>
              <div className="flex gap-2 flex-wrap">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-full border transition-all flex items-center justify-center
                      ${selectedSize === size 
                        ? 'border-blue-500 bg-blue-50 text-blue-500' 
                        : 'border-gray-200 hover:border-blue-200'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div className="flex items-center gap-2">
                  <span>New york, USA</span>
                  <button className="text-blue-500 text-sm hover:underline">
                    VISIT STORE
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    Only 5 Stocks Left!
                  </div>
                </div>

                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  Add To Cart
                </button>
                <button className="w-full bg-blue-50 text-blue-500 py-3 rounded-lg hover:bg-blue-100 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;