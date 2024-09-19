import React from "react";
import Img from "../../assets/photos/blog_type.jpg";

const BlogTypeCard = () => {
  return (
    <div className="m-5">
      <div className="relative">
        <img src={Img} alt="Sample" className="h-full w-auto" />
        <div className="absolute top-0 left-0 ">
          <div className="bg-black bg-opacity-80 hover:bg-orange-500 hover:bg-opacity-80 transition-colors mx-7 w-full text-center items-center text-white p-4 mt-4 ml-5 rounded">
            <h2 className="text-3xl font-bold border-b-2 py-6 border-white">
              Social Life 
            </h2>
            <h4 className="px-6 pb-7 pt-4">Enjoy your social life together</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTypeCard;
