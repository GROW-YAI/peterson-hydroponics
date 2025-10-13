import React from "react";
import jessicaImg from "../../../assets/images/Linda Carter.jpg";
import davidImg from "../../../assets/images/David Thompson.jpg";
import lindaImg from "../../../assets/images/John Smith.jpg";

const testimonials = [
  {
    id: 1,
    name: "Jessica Williams",
    position: "Regular Customer",
    testimonial: "The organic vegetables from this farm are the freshest I've ever used. The quality and taste are exceptional, and delivery is always on time.",
    image: jessicaImg
  },
  {
    id: 2,
    name: "David Thompson", 
    position: "Restaurant Owner",
    testimonial: "My restaurant now exclusively sources from Peterson Hydroponics. The consistent quality and freshness of their produce has elevated our dishes significantly.",
    image: davidImg
  },
  {
    id: 3,
    name: "Linda Carter",
    position: "Health Coach",
    testimonial: "I recommend Peterson Hydroponics to all my clients. The nutrient density and purity of their vegetables are exactly what health-conscious people need.",
    image: lindaImg
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">What does Customers say?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
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
