import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-blue-900 h-[70vh] p-5 text-white">
      <div className="max-w-full md:max-w-[50%] text-center md:text-left mb-5 md:mb-0">
        <h4 className="text-red-500 mb-5">About Us</h4>
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
          Partnering in Quality Assurance, Pioneering in Success
        </h1>
      </div>
      <div className="text-8xl md:text-9xl">
        <span role="img" aria-label="smiley">😃</span>
      </div>
    </div>
  );
};

export default App;
