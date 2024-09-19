import React, { useState } from 'react';

const CourseFilter = () => {
  const [courseTypeOpen, setCourseTypeOpen] = useState(true);
  const [categoryOpen, setCategoryOpen] = useState(true);

  return (
    <div className="w-64 p-4 rounded-lg bg-white">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">Filter</span>
      </div>

      {/* Course Type Section */}
      <div>
        <button
          className="flex justify-between w-full text-left"
          onClick={() => setCourseTypeOpen(!courseTypeOpen)}
        >
          <span className="font-medium">Course Type</span>
          <span>{courseTypeOpen ? '-' : '+'}</span>
        </button>
        {courseTypeOpen && (
          <div className="pl-4 mt-2 space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" /> All Course
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Carrier Track Program
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Foundation Course
            </label>
          </div>
        )}
      </div>

      <hr className="my-4" />

      {/* Category Section */}
      <div>
        <button
          className="flex justify-between w-full text-left"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          <span className="font-medium">Category</span>
          <span>{categoryOpen ? '-' : '+'}</span>
        </button>
        {categoryOpen && (
          <div className="pl-4 mt-2 space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" /> Career Skills
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Free Courses
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Product Management
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Web and App Development
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Digital Marketing
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Data Science and Analysis
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Software and Tools
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseFilter;
