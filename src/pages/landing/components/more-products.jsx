import React from "react";
import dairyImg from "../../../assets/images/dairy.jpg";
import nutsImg from "../../../assets/images/nuts.jpg";
import grainsImg from "../../../assets/images/grains.jpg";
import spicesImg from "../../../assets/images/spices.jpeg";
import tubersImg from "../../../assets/images/tubers.jpg";
import poultryImg from "../../../assets/images/poultry.jpg";


const products = [
  { id: 1, name: "Dairy Products", image: dairyImg, description: "Fresh dairy products, including milk, cheese, and yogurt." },
  { id: 2, name: "Healthy Nuts", image: nutsImg, description: "A variety of nuts rich in protein and essential nutrients." },
  { id: 3, name: "Whole Grains", image: grainsImg, description: "Nutritious whole grains, perfect for a balanced diet." },
  { id: 4, name: "Spices", image: spicesImg, description: "Aromatic and flavorful spices to enhance your meals." }, 
  { id: 5, name: "Tubers", image: tubersImg, description: "Organic tubers like yams and potatoes, perfect for hearty dishes." },
  { id: 6, name: "Poultry", image: poultryImg, description: "Locally bred birds, a good source of protein, vitamins, and minerals." }, 

];

const MoreProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-6">More Products</h2>
        <p className="text-gray-700 mb-8">Browse our expanded collection of fresh and organic products.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProducts;
