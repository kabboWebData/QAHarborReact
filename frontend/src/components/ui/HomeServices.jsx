import React from "react";
import HServiceCard from "./HServiceCard";
import ServiceData from "../../data/ServiceData.json";

const HomeServices = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-900 p-6">
      <h4 className="text-red-600 text-lg">Software Quality Assurance</h4>
      <h1 className="font-bold text-4xl text-white mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ServiceData.map((service) => (
          <div key={service.id}>
            <HServiceCard 
              title={service.title} 
              desc={service.description} 
            />
          </div>
        ))}
      </div>
      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded mt-6">
        GO Somewhere ..
      </button>
    </div>
  );
};

export default HomeServices;
