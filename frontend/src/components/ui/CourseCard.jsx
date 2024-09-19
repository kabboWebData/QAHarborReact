import React from 'react'
import CourseIcon from '../../assets/photos/CourseIcon.jpg'
import { FaVideo } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const CourseCard = () => {
  return (
    <div className='border border-black m-4 font-bold rounded-lg'>
        <div>
            <img src={CourseIcon} alt="" className='rounded-lg w-full h-54' />
        </div>
        <div className='p-4'>
            <h1 className='text-xl pb-2'>Digital Marketing</h1>
            <h1 className='text-red-500'>$ 34</h1>
            <div className='flex justify-between'>
              <div className='flex items-center'>
                <FaVideo/>
              <h1 className='ml-2'>80 Lessons</h1>
              </div>
                <div className='flex items-center'>
                  <IoPeopleSharp/>
                <h1 className='ml-2'>1023 Students</h1>
                </div>
                
            </div>
        </div>

      
    </div>
  )
}

export default CourseCard
