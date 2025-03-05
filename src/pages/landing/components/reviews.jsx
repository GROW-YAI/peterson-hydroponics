import React from "react";

const resources = [
  {
    id: 1,
    title: "Hydroponics Beginner Guide",
    description: "Next Gen Farming Without Soil and 90% Less Water.",
    link: "https://www.youtube.com/watch?v=3Ww2TP_tU7o",
  },
  {
    id: 2,
    title: "Best Plants for Hydroponics",
    description: "Grow EASY Hydroponics-Kratky method.",
    link: "https://www.youtube.com/watch?v=UnUxInGOmIM",
  },
  {
    id: 3,
    title: "Hydroponic Systems Explained",
    description: "How to grow many cherry tomatoes in plastic bottles.",
    link: "https://www.youtube.com/watch?v=py5veSGfGgE",
  },
  {
    id: 4,
    title: "Nutrient Solutions for Hydroponics",
    description: "Learn about indoor farming system.",
    link: "https://www.youtube.com/watch?v=CNCMktFHSq4",
  },
  {
    id: 5,
    title: "DIY Hydroponic Systems",
    description: "Step-by-step guide build at home.",
    link: "https://www.youtube.com/watch?v=3RA43nx1k2g",
  },
  {
    id: 6,
    title: "Build Your Own Hydroponic Systems",
    description: "Start from scratch.",
    link: "https://www.youtube.com/watch?v=dKYsZJsD9dI",
  },
 
];

const Resources = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-6">Hydroponics Resources</h2>
        <p className="text-gray-700 mb-8">Explore these resources to learn more about hydroponics farming.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-900">{resource.title}</h3>
              <p className="text-gray-600 mt-2">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 font-semibold mt-3 inline-block hover:underline"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
