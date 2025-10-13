import React from "react";
import { Link } from "react-router-dom";
import produce1Img from "../../../assets/images/produce1.jpg";
import produce2Img from "../../../assets/images/Produce2.jpg";
import produce3Img from "../../../assets/images/produce3.jpg";
import produce4Img from "../../../assets/images/produce4.png";

const produceData = [
  {
    id: 1,
    name: "Fresh Cabbage",
    price: "GHS 12.00",
    image: produce1Img
  },
  {
    id: 2,
    name: "Fresh Lettuce",
    price: "GHS 15.00",
    image: produce2Img
  },
  {
    id: 3,
    name: "Mixed Fruits",
    price: "GHS 28.00",
    image: produce3Img
  },
  {
    id: 4,
    name: "Fresh Vegetables",
    price: "GHS 20.00",
    image: produce4Img
  }
];

const ProduceShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Fresh Farm Produce</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {produceData.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-4 transition-all duration-300 group" style={{boxShadow: '6px 6px 0px #16a34a'}}>
              {/* Product Image */}
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                
                {/* Price */}
                <div className="pt-2">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link to="/more-products">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProduceShowcase;
