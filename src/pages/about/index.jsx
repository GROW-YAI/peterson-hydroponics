import React from "react";
import innovator from "../../assets/images/PetersonCEO.png";

const About = () => {
  return (
    <div className="bg-green-100 overflow-x-hidden">
      {/* Section 1: About Peterson Farms with Diagonal Green Background */}
      <section className="relative overflow-hidden">
        {/* Green Diagonal Background */}
        <div className="absolute inset-0 bg-green-600">
          {/* Diagonal overlay - hidden on mobile, visible on desktop */}
          <div 
            className="hidden md:block absolute bottom-0 right-0 w-0 h-0"
            style={{
              borderBottom: '100vh solid #dcfce7',
              borderLeft: '50vw solid transparent'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl">
            <div className="p-4 sm:p-6">
            <h2 className="text-left text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Farm </h2>
              <p className="text-white - text-left text-sm sm:text-base leading-relaxed mb-3">
                Peterson Farms specializes in producing high-quality cabbage and lettuce. During the dry season, we utilize advanced hydroponic farming systems to plant and grow these vegetables on a large scale, ensuring a consistent supply of fresh produce year-round.
              </p>
              <p className="text-white text-sm - text-left sm:text-base leading-relaxed mb-4 sm:mb-6">
                Our farm operates with a direct-to-consumer approach. Buyers are welcome to visit the farm and purchase directly from us. Additionally, we supply fresh produce to local markets, making our vegetables accessible to the wider community.
              </p>
              
              <h2 className="- text-left  text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 mt-4 sm:mt-6">Our Mission</h2>
              <p className="text-white - text-left text-sm sm:text-base leading-relaxed">
                We aim to produce cabbage and lettuce at affordable prices during the dry season, addressing the scarcity of these essential vegetables. Our mission is to ensure that fresh, healthy produce is accessible to everyone, regardless of the season, while promoting sustainable agricultural practices in our region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About the CEO */}
      <section className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        <h2 className=" text-3xl font-bold text-green-600 mb-8 text-center">Meet Our CEO</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:items-stretch">
          {/* CEO Image Container */}
          <div className="w-full md:w-1/2 flex">
            <div className="bg-white rounded-lg shadow-md p-4 w-full flex items-center justify-center">
              <img 
                src={innovator}
                alt="Peterson Nyonyu - CEO"
                loading="lazy"
                className="w-full max-h-96 object-contain rounded-2xl"
              />
            </div>
          </div>
          
          {/* CEO Info Container */}
          <div className="w-full md:w-1/2 flex">
            <div className="bg-white rounded-lg shadow-md p-8 w-full flex flex-col justify-center">
              <h3 className="text-left text-xl font-bold text-green-600 mb-3">Peterson Nyonyu</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-3 text-left">
                Peterson Nyonyu is a young and ambitious entrepreneur from Atebubu-Amantin in the Bono East Region. He is the visionary founder and CEO of Peterson Farms, dedicated to tackling the challenge of limited access to green vegetables during the dry season.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-3 text-left">
                Through his innovative hydroponic farming system, Peterson has created a sustainable and chemical-free way to grow vegetables year-round. His breakthrough approach ensures that communities gain increased access to fresh, healthy produce, maintaining a steady supply even in dry seasons.
              </p>
              <p className="text-gray-700 text-base leading-relaxed text-left">
                Peterson's efforts are paving the way for sustainable agriculture and food security in the region, demonstrating that with innovation and dedication, it's possible to transform local farming practices and improve community well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;