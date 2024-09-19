import React from "react";
import HEmployeeCard from "./HEmployeeCard";
import HOfferForm from "./HOfferForm";
const HomeOfferConsultant = () => {
  return (
    <div className="bg-blue-800">
      <div className="mx-20 bg-slate-50 flex flex-col md:flex-row">
        <div className="md:w-2/3 p-6">
          <p className="text-red-600">Future Proof Software</p>
          <h1 className="font-bold text-4xl">Gift to You</h1>
          <h1 className="font-bold text-4xl"> A Free QA Consultant</h1>
          <HOfferForm/>
        </div>
        <div className="md:w1/3 p-6">
          <p className="text-red-600">Who are going to assist you</p>
          <HEmployeeCard />
          <HEmployeeCard />
          <HEmployeeCard />
        </div>
      </div>
    </div>
  );
};

export default HomeOfferConsultant;
