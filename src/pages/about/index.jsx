import React from "react";
import innovator from "../../assets/images/PetersonCEO.png";

const About = () => {
  return (
    <div className="bg-green-100 overflow-x-hidden">
      {/* Section 1: About Peterson Farms */}
      <section className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">About Peterson Farms</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Our Farm</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Peterson Farms specializes in producing high-quality cabbage and lettuce. During the dry season, we utilize advanced hydroponic farming systems to plant and grow these vegetables on a large scale, ensuring a consistent supply of fresh produce year-round.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our farm operates with a direct-to-consumer approach. Buyers are welcome to visit the farm and purchase directly from us. Additionally, we supply fresh produce to local markets, making our vegetables accessible to the wider community.
          </p>
          
          <h2 className="text-2xl font-bold text-green-600 mb-4 mt-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We aim to produce cabbage and lettuce at affordable prices during the dry season, addressing the scarcity of these essential vegetables. Our mission is to ensure that fresh, healthy produce is accessible to everyone, regardless of the season, while promoting sustainable agricultural practices in our region.
          </p>
        </div>
      </section>

      {/* Section 2: About the CEO */}
      <section className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Meet Our CEO</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* CEO Image */}
            <div className="w-full md:w-1/3 bg-green-50 rounded-lg overflow-hidden">
              <img 
                src={innovator}
                alt="Peterson Nyonyu - CEO"
                loading="lazy"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* CEO Info */}
            <div className="w-full md:w-2/3 text-gray-700 text-lg leading-relaxed">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Peterson Nyonyu</h3>
              <p className="mb-4">
                Peterson Nyonyu is a young and ambitious entrepreneur from Atebubu-Amantin in the Bono East Region. He is the visionary founder and CEO of Peterson Farms, dedicated to tackling the challenge of limited access to green vegetables during the dry season.
              </p>
              <p className="mb-4">
                Through his innovative hydroponic farming system, Peterson has created a sustainable and chemical-free way to grow vegetables year-round. His breakthrough approach ensures that communities gain increased access to fresh, healthy produce, maintaining a steady supply even in dry seasons.
              </p>
              <p>
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
