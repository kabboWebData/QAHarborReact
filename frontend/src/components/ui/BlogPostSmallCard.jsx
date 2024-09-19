import React from 'react'
import img from "../../assets/photos/blog_img.jpg"

const BlogPostSmallCard = () => {
  return (
    <div className='flex items-center border border-gray-300 bg-slate-50 rounded shadow-sm my-4'>
        <div>
            <img src={img} className='h-12 w-12 m-2 rounded-sm' alt="" />
        </div>
        <div className='items-start px-3'>
            <h1 className='text-xl'>Here goes the Title</h1>
            <p>Update 2 minutes ago</p>
        </div>
      
    </div>
  )
}

export default BlogPostSmallCard
