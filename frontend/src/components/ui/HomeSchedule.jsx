import React from "react";
import HScheduleForm from "./HScheduleForm";

const HomeSchedule = () => {
  return (
    <div className="my-12">
      <div className="text-center">
        <h4 className="text-red-500">Free Consultation</h4>
        <h1 className="text-3xl font-bold">Schedule Your Consultation</h1>
      </div>
      <div>
        <HScheduleForm />
      </div>
    </div>
  );
};

export default HomeSchedule;
