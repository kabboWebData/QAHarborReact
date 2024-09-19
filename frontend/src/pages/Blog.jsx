import React from 'react'
import BlogHead from '../components/ui/BlogHead'
import Pagination from '../components/ui/Pagination'






import BlogTypes from '../components/ui/BlogTypes'
import BlogList from '../components/ui/BlogList'

const Blog = () => {
  return (
    <div>
      <BlogHead/>
      <BlogTypes/>
      <BlogList />
      <Pagination/>
    
    </div>
  )
}

export default Blog
