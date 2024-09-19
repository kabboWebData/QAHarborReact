import React, { useState, useEffect } from 'react';

// Import the images correctly
import test1 from '../../assets/photos/test.png'; // Ensure these paths are valid
import test2 from '../../assets/photos/test.png';
import test3 from '../../assets/photos/test.png';
import test4 from '../../assets/photos/test.png';
import test5 from '../../assets/photos/test.png';

const testimonials = [test1, test2, test3, test4, test5];

const Testimon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation

  const handleNextClick = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false); // End animation
    }, 500); // Time delay for animation to complete
  };

  const handlePrevClick = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false); // End animation
    }, 500); // Time delay for animation to complete
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-12 font-sans">
      {/* Testimonial Carousel */}
      <h2 className="text-red-500">Testimonials</h2> <br/>

      <div className="flex justify-center items-center w-4/5 p-5 bg-gray-100 rounded-lg mb-12">
        <button 
          className="text-4xl bg-none border-none cursor-pointer mx-3 text-white"
          onClick={handlePrevClick}
        >
          {'<'}
        </button>
        <img
          src={testimonials[currentIndex]}
          alt={`Testimonial ${currentIndex + 1}`}
          className={`max-w-md max-h-72 object-cover rounded-lg transition-opacity duration-500 ease-in-out ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        />
        <button 
          className="text-4xl bg-none border-none cursor-pointer mx-3 text-white"
          onClick={handleNextClick}
        >
          {'>'}
        </button>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between w-full px-16">
        <div className="flex-1 bg-yellow-400 p-8 text-center">
          <h3 className="text-gray-800 mb-6">
            Discover our expertise, driven by innovation
          </h3>
          <p className="text-gray-600">
            In ensuring Software Quality Assurance.
          </p> <br/>
          <button className="bg-blue-700 text-white px-4 py-1 rounded-md mt-2">
            Book Consultancy
          </button>
        </div>
        <div className="flex-1 bg-red-400 p-8 text-center">
          <h3 className="text-white mb-6">
            "EVOLVING TO EXCELLENCE"
          </h3>
          <p className="text-white">
            Delighting customers through superior software quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimon;
