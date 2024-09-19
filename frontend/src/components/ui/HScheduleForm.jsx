import React from "react";
import BR from "../../assets/photos/BR.png";

const HScheduleForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
  };

  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-12 my-6 shadow-lg rounded-lg border border-gray-200 bg-white">
      {/* Left Section */}
      <div className="flex-none md:w-1/3 flex flex-col items-center justify-center border-r-2 border-gray-200 p-6 md:p-12">
        <img src={BR} alt="Bug Resistance" className="h-16 mb-4" />
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">Bug Resistance</h1>
      </div>
      {/* Right Section */}
      <div className="flex-1 md:w-2/3 p-6 md:p-12">
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service:</label>
            <input type="hidden" value={"40 minutes | 40 min"} />
            <p className="text-sm text-gray-600">Bug Resistance Service (40 minutes)</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Choose Date:</label>
            <input
              type="date"
              id="date"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Select Time:</label>
            <div className="flex flex-wrap gap-2">
              {["09:00 AM","10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM","04:00 PM","05:00 PM"].map((time, index) => (
                <button
                  type="button"
                  key={index}
                  className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HScheduleForm;
