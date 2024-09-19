import React from 'react';
import TeamworkImage from '../../assets/photos/hand.jpg'; // Adjust the path to your image accordingly

const Strategy = () => {
  return (
    <div className="flex justify-between items-center p-12 bg-gray-200 h-[80vh] font-sans">
      {/* Image section moved to the left */}
      <div className="flex-1 flex justify-center items-center mr-8">
        <img src={TeamworkImage} alt="Teamwork" className="w-3/4 h-[90%] rounded-lg object-cover" />
      </div>

      {/* Text section moved to the right */}
      <div className="flex-1 max-w-1/2 ml-12">
        <h4 className="text-red-500 text-lg mb-6">Our Vision</h4>
        <h1 className="text-xl font-bold text-black-900 mb-6">We Can Do A Lot For You</h1>
        <p className="text-sm leading-relaxed text-gray-600 mb-6">
          Exceeding expectations, delivering quality service, and cultivating sustainable customer relationships.
        </p>
        <ul className="list-none p-0 space-y-4">
          <li className="flex items-center text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Exceed customer expectations
          </li>
          <li className="flex items-center text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Provide quality service
          </li>
          <li className="flex items-center text-base text-gray-800">
            <span className="text-black mr-2">✔</span>Maintain sustainable customer relationships
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Strategy;
