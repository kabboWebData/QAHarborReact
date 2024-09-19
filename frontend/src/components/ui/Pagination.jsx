import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center mt-5 p-8">
      {/* Previous Button */}
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 border border-gray-300 ${
          currentPage === 1 ? 'cursor-not-allowed text-gray-400 bg-white font-bold' : 'cursor-pointer text-blue-600 bg-white'
        }`}
      >
        Previous
      </button>

      {/* Page Buttons */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index + 1)}
          className={`px-4 py-2 border border-gray-300 ${
            currentPage === index + 1 ? 'bg-gray-100 text-blue-600 font-bold' : 'bg-white text-black'
          } cursor-pointer`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 border border-gray-300 ${
          currentPage === totalPages ? 'cursor-not-allowed text-gray-400 bg-white font-bold' : 'cursor-pointer text-blue-600 bg-white'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
