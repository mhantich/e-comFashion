
export function Brands() {
  const brands = [
    {
      image: "brand3.png",
    },
    {
      image: "brand2.png",
    },
    {
      image: "brand3.png",
    },
    {
      image: "brand4.png",
    },
  ];

  return (
    <section className="   mx-auto py-20">
   
      <div className="  container">
        
      <div style={{
        // backgroundColor:'#D1D5DB'
      }}className="grid grid-cols-1    md:grid-cols-2 lg:grid-cols-4  gap-10">
        {brands.map((product,index) => (
     
            <div key={index}  className="overflow-hidden py-5 lg:py-20   relative">
              <img
                src={`/images/${product.image}`}
                alt={product.image}
                className=" h-full w-[200px] mx-auto  group-hover:scale-105 transition-transform duration-300"
              />

          
            </div>
     
         
        ))}
      </div>
      </div>

    </section>
  );
}
