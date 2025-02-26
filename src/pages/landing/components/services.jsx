import React from "react";
import { Link } from "react-router-dom";
import { ChefHat, Utensils, Truck } from "lucide-react";
import fruitsImg from "../../../assets/images/fruits.jpg";
import vegetablesImg from "../../../assets/images/vegetables.jpg";
import juicesImg from "../../../assets/images/juices.jpg";
import driedImg from "../../../assets/images/dry-foods.jpg";
import featuredImg from "../../../assets/images/featured.jpg";


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

const categories = [
  { id: 1, name: "Fruits", image: fruitsImg },
  { id: 2, name: "Vegetables", image: vegetablesImg },
  { id: 3, name: "Juices", image: juicesImg },
  { id: 4, name: "Dried", image: driedImg }
];

const Services = () => {
  return (
    <>
      {/* 🟢 Services Section (Fix Applied) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-6">Our Products & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 Categories Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left Images */}
            <div className="grid grid-cols-1 gap-4">
              {categories.slice(0, 2).map((category) => (
                <div key={category.id} className="relative group">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all">
                    <p className="text-white font-semibold text-lg">{category.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image & Button */}
            <div className="text-center">
              <img src={featuredImg} alt="Featured" className="w-full h-80 object-cover rounded-lg shadow-lg mb-4" />
              <h2 className="text-3xl font-bold text-green-600 mb-3">Fresh & Healthy</h2>
              <p className="text-gray-700 mb-4">Explore our range of fresh organic products.</p>
              <Link to="/more-products">
  <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
    See More
  </button>
</Link>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-1 gap-4">
              {categories.slice(2, 4).map((category) => (
                <div key={category.id} className="relative group">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all">
                    <p className="text-white font-semibold text-lg">{category.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

