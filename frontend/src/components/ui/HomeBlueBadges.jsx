import React from "react";
import JTI from "../../assets/photos/icon_jti.png";

const HomeBlueBadges = () => {
  return (
    <div className="bg-blue-950 px-4 py-12 md:px-24 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-white text-2xl md:text-3xl">50,000 Hours+</div>
            <p className="text-red-500 text-sm md:text-base">Quality Service Provided</p>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl md:text-3xl">80,000 Hours+</div>
            <p className="text-red-500 text-sm md:text-base">Quality Expert Augmentation</p>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl md:text-3xl">50+ Completed</div>
            <p className="text-red-500 text-sm md:text-base">Clients & Partners</p>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl md:text-3xl">100%</div>
            <p className="text-red-500 text-sm md:text-base">Client Satisfaction Rates</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-12 mt-8 md:mt-0">
        <div className="bg-white rounded-3xl p-6 md:p-12">
          <img src={JTI} className="w-full h-auto" alt="JTI" />
        </div>
      </div>
    </div>
  );
};

export default HomeBlueBadges;
