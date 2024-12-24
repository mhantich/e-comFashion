import React from 'react';

const collections = [
  {
    id: 1,
    category: "CASUAL COLLECTION",
    title: "Street Wear.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.",
    image: "collection-item1.jpg",
    size: "large"
  },
  {
    id: 2,
    category: "BASIC COLLECTION",
    title: "Basic Shoes.",
    image: "collection-item2.jpg",
    size: "small"
  },
  {
    id: 3,
    category: "BEST SELLING PRODUCT",
    title: "Woolen Hat.",
    image: "collection-item3.jpg",
    size: "small"
  }
];

export default function CatiGrid() {
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Large Collection Card */}
      <div className="md:col-span-1 h-[600px] relative group overflow-hidden rounded-lg">
        <img
          src={`/images/${collections[0].image}`}
          alt="Street Wear Collection"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <span className="text-gray-200 mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            {collections[0].category}
          </span>
          <h2 className="text-5xl font-bold text-white mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {collections[0].title}
          </h2>
          <p className="text-gray-200 mb-6 max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            {collections[0].description}
          </p>
          <a 
            href="#" 
            className="text-white flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300 hover:underline"
          >
            Shop Collection <span>→</span>
          </a>
        </div>
      </div>

      {/* Right Column with Two Smaller Cards */}
      <div className="flex flex-col gap-6">
        {collections.slice(1).map((collection) => (
          <div key={collection.id} className="relative h-[290px] group overflow-hidden rounded-lg">
            <img
            src={`/images/${collection.image}`}
alt={collection.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-gray-200 mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {collection.category}
              </span>
              <h2 className="text-4xl font-bold text-white mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                {collection.title}
              </h2>
              <a 
                href="#" 
                className="text-white flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 hover:underline"
              >
                Shop Collection <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}