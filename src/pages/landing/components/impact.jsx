import React from "react";
import { Award } from "lucide-react";

const impactData = [
  {
    id: 1,
    metric: "90%",
    description: "Less water usage",
    color: "text-green-600"
  },
  {
    id: 2,
    metric: "365",
    description: "Days of fresh produce",
    color: "text-green-600"
  },
  {
    id: 3,
    metric: "500+",
    description: "Families served",
    color: "text-green-600"
  },
  {
    id: 4,
    metric: "300%",
    description: "Higher crop yields",
    color: "text-green-600"
  }
];

const Impact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Agriculture
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through innovative hydroponics technology, we're creating sustainable solutions 
            that benefit communities, conserve resources, and ensure food security for the future.
          </p>
        </div>

        {/* Impact Cards Grid - Minimalist Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactData.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              {/* Metric */}
              <div className="mb-1">
                <span className="text-3xl font-bold text-gray-900">
                  {item.metric}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-xs font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
