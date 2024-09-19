import React from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/photos/blog_img.jpg";

const BlogInfoCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col mx-4 items-end">
        <h1 className="font-bold my-5">Food,Technology,Politics,Lifestyle</h1>
        <div>
          <div className="flex flex-row md:flex-col">
            <div>Mark wiens</div>
            <div>12 Dec, 2017</div>
          </div>
          <div className="flex flex-row md:flex-col">
            <div>Mark wiens</div>
            <div>12 Dec, 2017</div>
          </div>
        </div>
      </div>
      <div className="mx-2">
        <img src={Img} alt="" />
        <h1 className="text-4xl my-4">
          Astronomy Binoculars A Great Alternative
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          reprehenderit earum accusantium ipsum fuga quae voluptate ducimus
          velit eos dolorem nostrum ea, dolore debitis necessitatibus in beatae
          cupiditate error iste ipsa quam. Ad accusamus magnam officia! Quisquam
          nulla deserunt tempore quas illo neque mollitia eaque architecto
          quibusdam sed, perspiciatis odit.
        </p>
        <h5 href=" " className="font-bold my-6"><Link to="/blog/1">View More</Link></h5>
      </div>
    </div>
  );
};

export default BlogInfoCard;
