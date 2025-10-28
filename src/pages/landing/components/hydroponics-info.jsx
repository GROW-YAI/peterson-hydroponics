import React from "react";
import { Link } from "react-router-dom";
import hydroponicsImg from "../../../assets/images/Hydroponics Farming.jpg";

const HydroponicsInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-green-600 text-center md:text-left mb-12">
          About Hydroponics Farming
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={hydroponicsImg}
              alt="Hydroponics Farming"
              loading="lazy"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed text-lg">
              Hydroponics is a revolutionary method of growing plants without soil, using nutrient-rich water solutions. 
              This innovative farming system provides a sustainable and chemical-free way to grow vegetables year-round.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              With this breakthrough technology, communities gain increased access to fresh, healthy produce, ensuring a steady 
              supply even in dry seasons. Our hydroponic farming efforts are paving the way for sustainable agriculture and food 
              security in the region.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center md:justify-start">
              <Link to="/about-us">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HydroponicsInfo;
