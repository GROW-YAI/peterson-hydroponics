import React from "react";
import { ChefHat, Utensils, Truck } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <ChefHat size={40} className="text-green-600" />,
    title: "Professional Chefs",
    description: "Our highly skilled chefs create delicious meals with fresh ingredients to satisfy your cravings."
  },
  {
    id: 2,
    icon: <Utensils size={40} className="text-green-600" />,
    title: "Quality Ingredients",
    description: "We use only the finest ingredients to ensure every bite is full of flavor and nutrition."
  },
  {
    id: 3,
    icon: <Truck size={40} className="text-green-600" />,
    title: "Fast Delivery",
    description: "Enjoy quick and reliable delivery right to your doorstep, ensuring fresh and hot meals every time."
  }
  
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-6">Our Services</h2>
        <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          We take pride in providing top-notch culinary experiences with fresh ingredients and speedy service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
