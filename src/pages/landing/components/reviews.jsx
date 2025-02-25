import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    review:
      "Absolutely love this! The quality is top-notch and the service was fantastic. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Lee",
    review:
      "Great experience! The delivery was super fast, and the product exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    review:
      "Such an amazing product. Will definitely purchase again! The team is very responsive and helpful.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-green-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-green-500"
              />
              <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
              <p className="text-gray-600 mt-2">"{review.review}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
