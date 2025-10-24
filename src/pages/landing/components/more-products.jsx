import React, { useState, useEffect } from "react";
import produce3Img from "../../../assets/images/produce3.jpg";
import produce4Img from "../../../assets/images/produce4.png";

const produceItems = [
  {
    id: 1,
    image: produce3Img,
    title: "Fresh Cabbage",
    description: "Our premium cabbage is grown using advanced hydroponic systems, ensuring crisp texture and rich nutrients. Perfect for salads, stir-fries, and traditional dishes."
  },
  {
    id: 2,
    image: produce4Img,
    title: "Fresh Lettuce",
    description: "Vibrant, leafy green lettuce harvested fresh from our farms. Packed with vitamins and minerals, ideal for healthy salads and sandwiches."
  }
];

const MoreProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % produceItems.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentItem = produceItems[currentIndex];

  return (
    <div className="py-16 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-green-600 mb-12 text-center">Our Produce</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-8 transition-all duration-500">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              loading="lazy"
              className="w-full max-h-72 object-contain rounded-lg shadow-md transition-opacity duration-500"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-3xl font-bold text-green-600 mb-4 transition-opacity duration-500">
              {currentItem.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed transition-opacity duration-500">
              {currentItem.description}
            </p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {produceItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-green-600 w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
