import React from 'react';

const QaJobs = () => {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-center text-xl font-semibold mb-4">Latest Jobs</h3>
      <div className="border border-gray-300 rounded-lg shadow-md p-6 w-full md:w-11/12 lg:w-10/12 mx-auto">
        <div className="flex flex-col space-y-4">
         
          <div className="flex flex-col space-y-2">
            <img
              src=" " // Add your logo URL here
              alt="Logo"
              className="w-10 h-10 mb-2"
            />
            <div className="text-lg font-bold">API Test Engineer (SQA/Sr. SQA Engineer)</div>
            <div className="flex justify-between items-center">
              <div className="text-blue-500 text-sm">EIT Limited</div>
              <div className="flex space-x-6">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                  Full Time
                </span>
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs">
                  On Site
                </span>
              </div>
              <div className="ml-auto">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-lg text-xs">
                  Negotiable
                </span>
              </div>
            </div>
            <p className="text-sm mt-2">
              Key Responsibilities: Conducting API testing using tools such as Postman, SoapUI, and RestAssured...
            </p>
          </div>

          <div className="flex justify-between items-center">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-lg text-xs">
              Experience: 3Y to 6Y
            </span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-lg text-xs">
              Deadline: 15.09.2024
            </span>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xs">
                Save
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xs">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QaJobs;
