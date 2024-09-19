import React from "react";
import HAwesoneThingsCard from "./HAwesoneThingsCard";
import AwesomeThingsData from "../../data/AwesomeThingsData.json"
const HomeAwesomeThings = () => {
  return (
    <div className="text-center mt-12 px-12">
      <h4 className="text-red-500 text-xl">
        Some Awesome Things About Bug Resistance
      </h4>
      <h1 className="text-4xl font-bold my-3">
        Excellently Managed QA Services That <br />
        Adapt To Your Evolving Business Needs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {
          AwesomeThingsData.map((data)=>(
            <div key={data.id}>
              <HAwesoneThingsCard 
              title={data.title}
              desc={data.description}/>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HomeAwesomeThings;
