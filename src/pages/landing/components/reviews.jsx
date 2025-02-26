import React from "react";

const resources = [
  {
    id: 1,
    title: "Hydroponics Beginner Guide",
    description: "Learn the basics of hydroponics farming and how to get started.",
    link: "https://www.epicgardening.com/hydroponics-guide/",
  },
  {
    id: 2,
    title: "Hydroponic Systems Explained",
    description: "An in-depth look at different types of hydroponic systems and how they work.",
    link: "https://www.maximumyield.com/hydroponic-systems/2/993",
  },
  {
    id: 3,
    title: "Best Plants for Hydroponics",
    description: "A list of the best plants to grow using hydroponics.",
    link: "https://www.thespruce.com/best-plants-for-hydroponics-4775752",
  },
  {
    id: 4,
    title: "Nutrient Solutions for Hydroponics",
    description: "Learn about the essential nutrients required for a successful hydroponic setup.",
    link: "https://hydroponicway.com/hydroponic-nutrients-guide/",
  },
  {
    id: 5,
    title: "DIY Hydroponic Systems",
    description: "Step-by-step guides on how to build your own hydroponic system at home.",
    link: "https://www.hydroponicsdiyprojects.com/",
  },
  {
    id: 6,
    title: "Hydroponic Systems Explained",
    description: "An in-depth look at different types of hydroponic systems and how they work.",
    link: "https://www.maximumyield.com/hydroponic-systems/2/993",
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
