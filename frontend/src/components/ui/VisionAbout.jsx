import React from 'react';
import TeamworkImage from '../../assets/photos/smile.jpg'; 

const VisionAbout = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12 bg-white h-auto md:h-[80vh] font-sans">
      
      <div className="flex-1 max-w-full md:max-w-1/2 mb-6 md:mb-0 ml-0 md:ml-20 text-center md:text-left">
        <h4 className="text-red-500 text-sm mb-4">Our Vision</h4>
        <h1 className="text-2xl md:text-xl font-bold text-black-900 mb-6">
          Client satisfaction is always here!
        </h1>
        <p className="text-xs md:text-sm leading-relaxed text-gray-600 mb-6">
          Optimizing satisfaction, leveraging rapid testing, emphasizing continuous improvement, fostering teamwork, innovation, and efficient automation across STLC and SDLC.
        </p>
        <ul className="list-none p-0 space-y-4">
          <li className="flex items-center text-sm md:text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Deliver the best customer satisfaction
          </li>
          <li className="flex items-center text-sm md:text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Leverage our abilities for rapid and cost-effective testing services
          </li>
          <li className="flex items-center text-sm md:text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Emphasize continuous improvement
          </li>
          <li className="flex items-center text-sm md:text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Foster teamwork, innovation, and automation efficiency
          </li>
          <li className="flex items-center text-sm md:text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Apply these principles across STLC and SDLC
          </li>
        </ul>
      </div>

      
      <div className="flex-1 flex justify-center items-center mr-0 md:mr-10">
        <img
          src={TeamworkImage}
          alt="Teamwork"
          className="w-full md:w-3/4 h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default VisionAbout;
