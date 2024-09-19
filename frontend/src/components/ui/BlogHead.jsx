import React from 'react';
import news from '../../assets/photos/news.jpg';

const BlogHead = () => {
  return (
    <div className="flex flex-row justify-center items-center pt-6 px-12 bg-[#033e73] text-white h-auto">
      {/* Text Section */}
      <div className="flex-1 mr-8 text-left ">
        <p className="text-red-500 text-md font-bold mb-4 uppercase">Our Blog</p>
        <h1 className="text-3xl font-bold mb-5">Great Tips & Suggestions About SQA</h1>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center px-5  md:mt-5">
        <img src={news} alt="News" className="w-72 h-auto rounded-t-3xl" />
      </div>
    </div>
  );
};

export default BlogHead;