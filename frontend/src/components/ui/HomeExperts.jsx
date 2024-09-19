import React from "react";
import Expert from "../../assets/photos/Expert.png";

const HomeExperts = () => {
  return (
    <div className="bg-orange-100 px-4 pt-4 md:px-20 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={Expert} alt="expert" className="w-full md:w-auto" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h4 className="text-red-500 text-lg md:text-xl">Need QA Expert For Your Product?</h4>
        <h1 className="font-bold text-2xl md:text-4xl mt-2 md:mt-4">
          We Are Prompt To Onboard The Best QA Experts You Need
        </h1>
        <h4 className="text-gray-500 text-sm md:text-base mt-2 md:mt-4">
          Hey Buddy! Stop Looking Around. Let Us Make your QA
          Recruitment Easier and hassle-free.
        </h4>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-2 mt-4 font-medium">Hire Expert</button>
      </div>
    </div>
  );
};

export default HomeExperts;
