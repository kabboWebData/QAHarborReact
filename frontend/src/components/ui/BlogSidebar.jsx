import React from "react";
import writer from "../../assets/photos/blog_writer.png";
import banner from "../../assets/photos/ads-banner.jpg";
import BlogPostSmallCard from "./BlogPostSmallCard";

const BlogSidebar = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-slate-50 mt-4 p-6 justify-start w-full mx-12">
        <div className="flex items-center">
          <img src={writer} alt="" className="rounded-full h-44 w-44" />
        </div>

        <h1 className="text-2xl text-center font-bold text-blue-500">
          Charlie Barber
        </h1>
        <h3 className="text-center">Senior Blog Writer</h3>
        <div>
          <h1 className="text-center">Social Media Icons</h1>
        </div>
        <p className="text-center">
          Boot camps have its supporters and its detractors. Some people do not
          understand why you should have to spend money on boot camp when you
          can get. Boot camps have its supporters and its detractors.
        </p>
        <h2 className="bg-orange-500 text-white text-2xl w-full text-center py-2">
          Popular Posts
        </h2>
        <div className="w-full my-2">
          <BlogPostSmallCard />
          <BlogPostSmallCard />
          <BlogPostSmallCard />
          <BlogPostSmallCard />
        </div>
        <img src={banner} alt="" />
      </div>
      <div className="flex flex-col bg-slate-50  mb-4 p-6 justify-start w-full mx-12">
        <div className="mx-2 my-4">
          <h1 className="text-xl my-2 font-bold">Post Categories</h1>
          <ul className="flex flex-col justify-start mx-2">
            <li>Technology</li>
            <li>Fashion</li>
            <li>Architechture</li>
            <li>Fashion</li>
            <li>Food</li>
            <li>Lifestyle</li>
            <li>Art</li>
            <li>Adventure</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl my-2 font-bold">Newsletter</h1>
          <p>
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought.
          </p>
        </div>
        <div className="flex">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-l-md w-full"
          />
          <button className="bg-orange-500 text-white hover:bg-orange-600 px-3 rounded-r-md py-2">
            Subscribe
          </button>
        </div>
        <h1>You can unsubscribe any time</h1>
        <h2 className="bg-orange-500 text-white text-2xl w-full text-center py-2">
          Tag Clouds
        </h2>
        <div className="mx-2 my-4">
          <ul className="flex flex-col justify-start mx-2">
            <li>Technology</li>
            <li>Fashion</li>
            <li>Architechture</li>
            <li>Fashion</li>
            <li>Food</li>
            <li>Lifestyle</li>
            <li>Art</li>
            <li>Adventure</li>
          </ul>
        </div>
      </div>     
    </>
  );
};

export default BlogSidebar;
