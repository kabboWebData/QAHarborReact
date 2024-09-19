import React from 'react';
import TeamworkImage from '../../assets/photos/hands.avif'; 

const MiddleAbout = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12 bg-orange-100 h-auto md:h-[80vh] font-sans">
      
      <div className="flex-1 flex justify-center items-center mb-6 md:mb-0 md:mr-8">
        <img
          src={TeamworkImage}
          alt="Teamwork"
          className="w-full md:w-3/4 h-auto md:h-5/6 rounded-lg object-cover"
        />
      </div>

      
      <div className="flex-1 max-w-full md:max-w-1/2 ml-0 md:ml-12 text-center md:text-left">
        <h4 className="text-red-500 text-lg mb-4">Who we are</h4>
        <h1 className="text-2xl md:text-xl font-bold text-black-900 mb-6">
          Welcome to EIT Limited, your partner in software excellence!
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-6">
          Delivering superior products, seeking customer recommendations, and
          providing error-free solutions globally for lasting value and competitive
          advantage.
        </p>
        <ul className="list-none p-0 space-y-4">
          <li className="flex items-center text-sm md:text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Provide a superior quality product and service
          </li>
          <li className="flex items-center text-sm md:text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Aim for customer recommendation
          </li>
          <li className="flex items-center text-sm md:text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Deliver market-defining high-quality, error-free solutions
          </li>
          <li className="flex items-center text-sm md:text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Serve clients around the world
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MiddleAbout;
