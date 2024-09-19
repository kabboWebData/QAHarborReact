import React from "react";
import SSuccessCard from "./SSuccessCard";
import FollowSuccessData from "../../data/FollowSuccessData.json"
const ServiceSuccess = () => {
  return (
    <div className="bg-orange-200 p-12">
      <h1 className="text-4xl font-bold text-center my-4">
        We Follow Your Success
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          FollowSuccessData.map((data)=>(
            <div key={data.id}>
              <SSuccessCard id={data.id}
              title={data.title}
              desc={data.description}/>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ServiceSuccess;
