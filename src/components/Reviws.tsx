import { useEffect, useState } from "react";

export function Reviws() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const revies = [
    {
      id: 2,
      name: "mhantich",
      msg: "“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”",
    },
    {
      id: 1,
      name: "mhantich",
      msg: "“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”",
    },
    {
      id: 3,
      name: "mhantich",
      msg: "“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”",
    },
  ];
  return (
    <div className="relative py-10 lg:py-20 container h-[50vh]">
      
      {revies.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          {/* Image */}

          {/* Text Content */}
          <div className="relative z-10 flex items-center justify-center px-10 h-full">
            <div className="text-center w-full px-5 lg:px-20 lg:w-[50%] ">
              <h1
                className={` text-sm lg:text-2xl font-serif font-bold text-primary mb-6 transform transition-all duration-1000
                  ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
              >
                {slide.msg}
              </h1>
              <p
                className={`text-sm   font-serif text-primary transform transition-all duration-1000 delay-300
                  ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
              >
               by {slide.name}
              </p>
      
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {revies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${index === currentSlide ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
