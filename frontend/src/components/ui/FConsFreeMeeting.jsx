import React from "react";
import HEmployeeCard from "./HEmployeeCard";

const FConsFreeMeeting = () => {
  return (
    <div className="text-center my-6">
      <p className="text-red-500">Free Meeting</p>
      <h1 className="text-4xl font-bold">
        Revolutionize your Software through
      </h1>
      <h1 className="text-4xl font-bold">
        Quality Assurance with just a few clicks
      </h1>
      <div className="flex flex-col justify-center mx-12 my-4 md:flex-row">
        <HEmployeeCard/>
        <HEmployeeCard/>
        <HEmployeeCard/>
      </div>
    </div>
  );
};

export default FConsFreeMeeting;
