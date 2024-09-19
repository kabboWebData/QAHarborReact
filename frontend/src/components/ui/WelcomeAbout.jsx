import React from 'react';
import welcome from '../../assets/photos/welcome.jpg';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12 bg-gray-100 h-auto md:h-screen m-4">
      
      <div className="flex-1 max-w-full md:max-w-1/2 mb-8 md:mb-0 md:mr-8 text-center md:text-left">
        <h4 className="text-red-500 text-lg mb-4">Who we are</h4>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl text-black-900 mb-6">
          Welcome to EIT Limited, your partner in software excellence!
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
          At QAHarbor, we're not just code breakers; we're creators of quality.
          Our dedicated team navigates the complexities of coding seas, transforming
          challenges into triumphs. With precision-driven Quality Assurance solutions,
          we ensure your software journey is smooth and your success stories are written
          in every line of code. Join us in the pursuit of excellence, where innovation
          meets assurance. EIT Limited — where your code finds clarity and success sets sail.
        </p>
        <button className="bg-gray-700 text-white rounded-md py-2 px-4 hover:bg-gray-600">
          Let's Talk
        </button>
      </div>

    
      <div className="flex-1 relative max-w-full md:max-w-2/5">
        <img
          src={welcome}
          alt="Welcome Image"
          className="w-full h-64 md:h-96 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default App;
