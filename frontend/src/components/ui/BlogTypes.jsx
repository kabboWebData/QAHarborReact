import React from 'react'
import BlogTypeCard from './BlogTypeCard'

const BlogTypes = () => {
  return (
    <div className='flex flex-col md:flex-row my-6 items-center justify-center'>
      <BlogTypeCard/>
      <BlogTypeCard/>
      <BlogTypeCard/>
      
    </div>
  )
}

export default BlogTypes
