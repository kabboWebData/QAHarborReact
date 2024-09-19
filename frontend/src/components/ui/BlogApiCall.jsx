import React from "react";
import BlogApi from "./BlogApi";
const BlogApiCall = () => {
  return (
    <div>  
    <div  className='flex my-12 justify-center mx-20'>
      <BlogApi />
      <BlogApi />
      <BlogApi />
    </div>

    <div  className='flex my-12 justify-center mx-20'>
      <BlogApi />
      <BlogApi />
      <BlogApi />
    </div>

    <div  className='flex my-12 justify-center mx-20'>
      <BlogApi />
      <BlogApi />
      <BlogApi />
    </div>

    <div  className='flex my-12 justify-center mx-20' style={{marginRight:"750px"}}>
      <BlogApi />
      </div>

</div>
  );
};

export default BlogApiCall;
