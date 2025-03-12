import React from "react";
import { Quote } from "lucide-react";

// Array of profile images
const profileImages = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
];

const testimonials = [
  {
    id: 1,
    name: "Jessica Williams",
    position: "Food Blogger",
    testimonial: "The organic vegetables from this farm are the freshest I've ever used. You can taste the difference in every bite!",
    image: profileImages[0],
    accent: "emerald"
  },
  {
    id: 2,
    name: "David Thompson",
    position: "Chef & Restaurant Owner",
    testimonial: "My restaurant now exclusively sources from this farm. The quality and flavor of these vegetables elevate every dish we serve.",
    image: profileImages[1],
    accent: "yellow"
  },
  {
    id: 3,
    name: "Linda Carter",
    position: "Nutritionist",
    testimonial: "I recommend these vegetables to all my clients. The nutrient density and purity are exactly what health-conscious people need.",
    image: profileImages[2],
    accent: "rose"
  }
];

const Testimonials = () => {
  const getAccentClasses = (accent) => {
    const classes = {
      emerald: "from-emerald-400 to-green-300 border-emerald-300",
      yellow: "from-yellow-400 to-amber-300 border-yellow-300",
      rose: "from-rose-400 to-pink-300 border-rose-300"
    };
    return classes[accent] || classes.emerald;
  };

  return (
    <section className="py-8 bg-gradient-to-r from-yellow-600 via-green-500 to-emerald-500 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/10 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">What our users say</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-light">
          The harvest of happiness from those who experience our organic goodness every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group p-6 flex flex-col items-center justify-center"
            >
              {/* Actual Image */}
              <div className="flex justify-center mb-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full border-2 shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="text-green-600 mb-2 flex justify-center">
                <Quote size={16} />
              </div>

              <p className="text-gray-700 text-xs mb-3 italic line-clamp-3 max-w-xs text-center">
                "{testimonial.testimonial}"
              </p>

              <h3 className="text-base font-bold text-gray-900">{testimonial.name}</h3>
              <div className={`h-px w-8 my-1 mx-auto rounded-full bg-gradient-to-r ${getAccentClasses(testimonial.accent)}`}></div>
              <p className="text-green-600 text-xs font-medium">{testimonial.position}</p>

              {/* Circular accent at the bottom */}
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getAccentClasses(testimonial.accent)} mt-2`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
