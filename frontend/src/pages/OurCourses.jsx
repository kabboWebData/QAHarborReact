import React from 'react'
import CourseCard from '../components/ui/CourseCard'
import CourseFilter from '../components/ui/CourseFilter'
const OurCourses = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center mx-12'>
        <div><CourseFilter/></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
      
    </div>
  )
}

export default OurCourses
