export default function DenimHero() {
  return (
    <div className="relative  container min-h-screen  ">
      <div className="    mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {/* Image Section */}
        <div  className="relative w-full hidden lg:inline h-[80vh] lg:h-screen">
          <img
            src="/images/model.jpg"
            alt="Denim Collection"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="flex  flex-col justify-center lg:pl-12 py-12 lg:py-0">
          <div className="space-y-6 max-w-xl">
            {/* Category Text with Animation */}
            <span className="text-primary text-lg tracking-wider animate-fade-in">
              DENIM COLLECTION
            </span>

            {/* Main Title with Animation */}
            <h1 className="text-5x text-primary lg:text-7xl font-bold leading-tight animate-slide-up">
              The Casual Selection.
            </h1>

            {/* Description with Animation */}
            <p className="text-primary text-lg leading-relaxed animate-fade-in-delay">
              Vel non viverra ligula odio ornare turpis mauris. Odio aliquam,
              tincidunt ut vitae elit risus. Tempor egestas condimentum et ac
              rutrum dui, odio.
            </p>

            {/* CTA Button with Animation */}
            <div className="pt-4 animate-fade-in-delay-2">
              <a
                href="#collection"
                className="inline-flex items-center group text-lg font-medium"
              >
                Shop Collection
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}