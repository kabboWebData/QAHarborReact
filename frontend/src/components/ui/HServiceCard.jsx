import React from 'react';
import { GrDocumentTest } from "react-icons/gr";

const HServiceCard = ({title,desc}) => {
  return (
    <div className='flex flex-col items-center justify-center bg-white p-4 rounded mx-6 my-4 w-full max-w-64'>
        <GrDocumentTest size={24} color='red' className='m-4'/>
      <h1 className='text-xl font-semibold mb-2'>{title}</h1>
      
      <p className='text-base text-gray-700 text-center mt-4'>
        {desc}
        </p>
    </div>
  );
};

export default HServiceCard;
