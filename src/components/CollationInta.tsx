import { Card } from "./ui/card";

export function CollationInta (){
    const brands = [
        {
          image: "insta-image2.jpg",
        },
        {
          image: "insta-image3.jpg",
        },
        {
          image: "insta-image1.jpg",
        },
        {
          image: "insta-image4.jpg",
        },
        {
          image: "insta-image5.jpg",
        },
        {
          image: "insta-image6.jpg",
        },
      ];
    return (
        <div>
   <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">Instagram Post</h2>
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
      {brands.map((product,index) => (
        <Card key={index} className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow group relative">
          <div className="overflow-hidden bg-gray-100 relative">
            <img
              src={`/images/${product.image}`}
              alt={product.image}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay that appears on hover */}
        
          </div>
      
        </Card>
      ))}
    </div>
    </section>
        </div>
    )
}