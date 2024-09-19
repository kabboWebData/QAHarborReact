import React from 'react'
import BlogInfoCard from './BlogInfoCard'
import BlogSidebar from './BlogSidebar'

const BlogList = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center mx-12 md:mx-24'>
      <div className='md:w-2/3'>
        <BlogInfoCard/>
        <BlogInfoCard/>
        <BlogInfoCard/>
        <BlogInfoCard/>
        
      </div>
      <div className='md:w-1/3'>
        <BlogSidebar/>
      </div>
    </div>
  )
}

export default BlogList
