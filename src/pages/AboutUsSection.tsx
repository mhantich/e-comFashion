import { Brands } from "@/components/Brands";
import { CollationInta } from "@/components/CollationInta";
import Parallaxeffect from "../components/parallaxeffect";
import { Reviws } from "@/components/Reviws";

const AboutUsSection = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <Parallaxeffect title='About us'/>
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
                metus nibh sit era. Nulla adipiscing pharetra pellentesque
                maecenas odio eros at. Et libero vulputate amet duis erat
                volutpat vitae eget.
              </p>

              <p>
                Sed vitae metus nibh sit era. Nulla adipiscing pharetra
                pellentesque maecenas odio eros at.
              </p>

              <p>
                Sed vitae metus nibh sit era. Nulla adipiscing pharetra
                pellentesque maecenas odio eros at. Et libero vulputate amet
                duis erat volutpat vitae eget. Quam libero etiam et in ac at
                quis. Risus augue curabitur diam senectus congue velit et.
              </p>
            </div>

            <button className="  border-2 border-gray-400 px-8 py-4 inline-flex items-center group transition-colors">
              <p className="text-primary ">SHOP OUR STORE </p>
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Reviws />
      <Brands />
      <CollationInta />
    </div>
  );
};

export default AboutUsSection;
