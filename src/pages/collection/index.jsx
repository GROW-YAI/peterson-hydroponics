import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import motorkingImg from "../../assets/images/PetersonMotorking.png";
import busImg from "../../assets/images/PetersonBus.png";
import marketImg from "../../assets/images/PetersonMarket.jpg";

const deliveryTypes = [
  {
    id: 1,
    title: "Aboboyaa Delivery",
    image: motorkingImg,
    description: "This service targets customers who buy in a large quantity and stay in nearer places. This comes at an unstable fee. Prices are calculated per distance."
  },
  {
    id: 2,
    title: "Bus Delivery",
    image: busImg,
    description: "Some of our customers are living in the cities and places very far from the farms. If you are one of this kind, we would package the vegetables and deliver them to you after buying from us. A lot of buses operate in these places. Through them vegetables will be delivered quickly and safely. Fees for this service depends on the quantity of the produce and the amount to be charged by the bus operators."
  },
  {
    id: 3,
    title: "Market Delivery",
    image: marketImg,
    description: "Our delivery also focuses on retail buyers and vegetables sellers in the nearby market places. We deliver vegetables to these sellers. Additionally, we sell at consumer level during market days."
  }
];

const Collection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deliveryTypes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deliveryTypes.length) % deliveryTypes.length);
  };

  return (
    <div className="py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-600 mb-6">Our Services</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            We offer delivery services in addition to the crop production. It comes in three folds. 
            Our customers and consumers come from near and far.
          </p>
        </div>

        {/* Delivery Slideshow */}
        <div className="relative bg-green-50 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            {/* Image Section */}
            <div className="w-full md:w-2/5">
              <img
                src={deliveryTypes[currentSlide].image}
                alt={deliveryTypes[currentSlide].title}
                loading="lazy"
                className="w-full h-48 md:h-80 object-contain rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
                {deliveryTypes[currentSlide].title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {deliveryTypes[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons - Side positioned on desktop, bottom on mobile */}
          {deliveryTypes.length > 1 && (
            <>
              {/* Desktop Navigation - Side positioned */}
              <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="bg-white text-green-600 p-3 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-green-600 text-xs font-medium">Previous</span>
              </div>
              <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-2">
                <button
                  onClick={nextSlide}
                  className="bg-white text-green-600 p-3 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
                <span className="text-green-600 text-xs font-medium">Next</span>
              </div>
            </>
          )}

          {/* Mobile Navigation - Bottom positioned */}
          {deliveryTypes.length > 1 && (
            <div className="flex md:hidden justify-center gap-6 mt-6">
              <button
                onClick={prevSlide}
                className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-lg shadow-md hover:bg-green-600 hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
                <span className="text-sm font-medium">Previous</span>
              </button>
              <button
                onClick={nextSlide}
                className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-lg shadow-md hover:bg-green-600 hover:text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <span className="text-sm font-medium">Next</span>
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* Slide Indicators */}
          {deliveryTypes.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {deliveryTypes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-green-600 w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;