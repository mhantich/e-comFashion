import { CollationInta } from '@/components/CollationInta';
import { Reviws } from '@/components/Reviws';
import { useEffect, useState } from 'react';

const AboutUsSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>

    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 "
        style={{
            backgroundImage: 'url("/images/hero-image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${offset * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
        }}
        />

      {/* Overlay for slight white wash effect */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
            <span>Home</span>
            <span>/</span>
            <span>About</span>
          </div>
          <h1 className="text-6xl font-bold text-primary">About Us</h1>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img 
            src="/images/single-image1.jpg" 
            alt="Three models wearing Ultras clothing" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Content Section */}
        <div className="w-full font-serif md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-primary">
            How Was Ultras Store Started?
          </h2>
          
          <div className="space-y-4 text-primary">
            <p>
              Risus augue curabitur diam senectus congue velit et. Sed vitae 
              metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas 
              odio eros at. Et libero vulputate amet duis erat volutpat vitae eget.
            </p>
            
            <p>
              Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque 
              maecenas odio eros at.
            </p>
            
            <p>
              Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque 
              maecenas odio eros at. Et libero vulputate amet duis erat volutpat 
              vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur 
              diam senectus congue velit et.
            </p>
          </div>

          <button className="  px-8 py-4 inline-flex items-center group transition-colors">
                           <p className='text-white'>
                          SHOP OUR STORE   </p>  
            <svg 
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <Reviws />
       
     <CollationInta />

        </div>
  );
};

export default AboutUsSection;