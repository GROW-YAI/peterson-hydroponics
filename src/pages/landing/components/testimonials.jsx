import React from "react";
import vivianImg from "../../../assets/images/PetersonTestimonial2.jpg";
import vivian2Img from "../../../assets/images/PetersonTestimonial3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Vivian Bilite",
    position: "Fashion Designer",
    testimonial: "Vegetables retain their vibrant color of green and stay fresh for long periods of time.",
    image: vivianImg
  },
  {
    id: 2,
    name: "Joseph Nakoja", 
    position: "Farmer",
    testimonial: "The lettuce and cabbage are crunchy and cheap; the price is worth the pleasure of eating them.",
    image: vivian2Img
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2" style={{color: '#16a34a'}}>What does Customers say?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(0, 2).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1 group"
              style={{boxShadow: '6px 6px 0px #16a34a'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '8px 8px 0px #16a34a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '6px 6px 0px #16a34a';
              }}
            >
              {/* Testimonial Text */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-base group-hover:text-gray-900 transition-colors duration-300">
                  "{testimonial.testimonial}"
                </p>
              </div>

              {/* Profile Section */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-green-200"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm group-hover:text-green-700 transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
