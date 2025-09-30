import React from "react";
import innovator from "../../assets/images/petersonNyonju.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 text-center max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-bold text-green-600 mb-4">About This Innovator</h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <img 
            src={innovator}
            alt="Innovator"
            loading="lazy"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        
        {/* Text Content */}
        <div className="w-full md:w-2/3 text-gray-700 text-lg leading-relaxed">
          <p>
            Meet Peterson; a young and ambitious entrepreneur from Atebubu-Amantin in the Bono East Region. He is tackling the challenge of limited access to green vegetables during the dry season. His innovative hydroponic farming system provides a sustainable and chemical-free way to grow vegetables year-round.
          </p>
          <p className="mt-4">
            With this breakthrough, his community gains increased access to fresh, healthy produce, ensuring a steady supply even in dry seasons. His efforts are paving the way for sustainable agriculture and food security in the region.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
