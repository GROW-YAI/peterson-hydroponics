import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import deliveryImg from "../../../assets/images/Delivery.jpg";

const DeliverySection = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="bg-green-100 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Side - Delivery Image */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <img
                src={deliveryImg}
                alt="Delivery Person"
                loading="lazy"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                Fast & Reliable Delivery
              </h2>
              <p className="text-green-600 text-lg leading-relaxed mb-6">
                Fresh deliveries straight to your doorstep by our professional team
              </p>
              
              {/* CTA Button */}
              <div className="text-left">
                <Link to="/collection">
                  <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
