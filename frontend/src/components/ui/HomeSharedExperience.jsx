import React from "react";
import HSharedExperienceCard from "./HSharedExperienceCard";
import SharedExpData from "../../data/SharedExpData.json";
const HomeSharedExperience = () => {
  return (
    <div className="text-center px-12 mt-12">
      <h4 className="text-red-500 text-xl">Testimonials</h4>
      <h1 className="text-4xl font-bold my-3">Shared Successfull Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SharedExpData.map((review) => (
          <div key={review.id}>
            <HSharedExperienceCard
              title={review.title}
              desc={review.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSharedExperience;
