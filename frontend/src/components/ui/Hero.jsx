import Sharlok from "..//../assets/photos/Sharlok.png"


import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 mx-24">
      <div className="flex-1 md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl text-center md:text-5xl font-bold align-middle text-gray-800 mb-4">
          Testing Today For A
        </h1>
        <p className="text-lg text-center text-gray-600 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt repellat, sit aperiam error iure labore sequi sed eum aspernatur dolore adipisci nisi illo quia qui? Quas laborum asperiores possimus repudiandae repellendus obcaecati, autem laboriosam reiciendis sequi commodi, animi repellat ut at. Omnis cupiditate laudantium hic ratione praesentium aliquid ipsam quam.
         </p>
        <div className="flex items-center flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Service
          </button>
          <button className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition duration-300">
            Hire Experts
          </button>
        </div>
      </div>
      <div className="flex-1 md:w-1/2 text-center">
        <img
          src={Sharlok}
          alt="Descriptive Alt Text"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
