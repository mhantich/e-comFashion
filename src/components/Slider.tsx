import { Button } from '@/components/ui/button';
import {  ArrowBigRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, title: "Summer ", second:'Collection', image: "banner2.jpg" },
    { id: 2, title: "Autumn  ", second:'Styles',   image: "banner1.jpg" },
    { id: 3, title: "Winter ",second:'Fashion',   image: "banner2.jpg"}
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Image */}
          <div className="absolute inset-0">
            <img
              src={`/images/${slide.image}`}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 flex items-center justify-start px-10 h-full">
            <div className="text-start">
              <h1 
                className={`text-8xl font-serif font-bold text-primary mb-6 transform transition-all duration-1000
                  ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {slide.title} <br /> {slide.second}
              </h1>
              <p 
                className={`text-4xl   font-serif text-primary transform transition-all duration-1000 delay-300
                  ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                Discover the Latest Trends
              </p>
            <Button className={` text-md capitlize font-serif py-8 px-2 bg-primary/75 rounded-none mt-5 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}` }>See all Collaction <ArrowBigRightIcon/> </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}




