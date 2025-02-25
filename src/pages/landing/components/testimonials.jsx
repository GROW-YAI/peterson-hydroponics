import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jessica Williams",
    position: "Food Blogger",
    testimonial: "The organic vegetables from this farm are the freshest I've ever used. You can taste the difference in every bite!"
  },
  {
    id: 2,
    name: "David Thompson",
    position: "Chef & Restaurant Owner",
    testimonial: "My restaurant now exclusively sources from this farm. The quality and flavor of these vegetables elevate every dish we serve."
  },
  {
    id: 3,
    name: "Linda Carter",
    position: "Nutritionist",
    testimonial: "I recommend these vegetables to all my clients. The nutrient density and purity are exactly what health-conscious people need."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-500 via-green-400 to-emerald-400">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">What Our Customers Say</h2>
        <p className="text-white text-lg mb-12 max-w-2xl mx-auto">
          Our community of chefs, nutritionists, and food lovers all agree — our vegetables make the difference!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-2xl font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-green-600 text-sm font-medium">{testimonial.position}</p>
              <div className="flex justify-center mt-4 text-green-500">
                <Quote size={24} />
              </div>
              <p className="text-gray-600 mt-4 italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;