import React from 'react';
import QaCarrierImage from '../../assets/photos/QaCarrier.png';

const QaCarrier = () => {
  return (
    <div style={{padding:"100px"}} className="container mx-auto p-4">
      
      <div className="flex flex-col md:flex-row items-center justify-center p-8 ">
        <div className="flex-1 w-full md:w-2/5 mb-6 md:mb-0 md:mr-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Grow Your SQA Career with Quality Opportunities
          </h1>
          <p className="text-md text-gray-600">
            Find top software quality assurance jobs, connect with leading employers, and advance your career with our platform for SQA professionals.
          </p>
          <br />

          <div className="flex flex-col md:flex-row justify-center items-center mb-4">
  <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 border border-gray-200 p-2 rounded-md shadow-md">
    <input
      type="text"
      placeholder="Search..."
      className="px-4 py-2 w-full md:w-80 border-0 outline-none"
    />
    <select className="px-4 py-2 border-0 bg-transparent outline-none">
      <option>Choose Location</option>
      <option>Location 2</option>
      <option>Location 3</option>
      <option>Location 4</option>
    </select>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-auto">
      Search
    </button>
  </div>
</div>

          
         
          
        </div>

    
        <div style={{marginLeft:"150px"}} className="flex-1 w-full md:w-2/5">
          <img
            style={{ height: "300px", width: "320px" }}
            src={QaCarrierImage}
            alt="SQA Career"
            className="w-full h-72 rounded-md object-cover"
          />
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        
        <div className="flex flex-col items-center justify-center p-6 bg-white border rounded-lg shadow-md">
          <span className="text-5xl text-gray-800 mb-2">6</span>
          <p className="text-lg text-gray-600">Total Posted SQA Jobs</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white border rounded-lg shadow-md">
          <span className="text-5xl text-gray-800 mb-2">1</span>
          <p className="text-lg text-gray-600">Total Active SQA Jobs</p>
        </div>

        
        <div className="flex flex-col items-center justify-center p-6 bg-white border rounded-lg shadow-md">
          <span className="text-5xl text-gray-800 mb-2">134</span>
          <p className="text-lg text-gray-600">Applicants Applied</p>
        </div>

       
        <div className="flex flex-col items-center justify-center p-6 bg-white border rounded-lg shadow-md">
          <span className="text-5xl text-gray-800 mb-2">22</span>
          <p className="text-lg text-gray-600">Ongoing Interviews</p>
        </div>
      </div>
    </div>
  );
};

export default QaCarrier;
