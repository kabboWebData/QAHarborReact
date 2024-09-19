import React from 'react'
import Sharlok from '../../assets/photos/Sharlok.png'
const HEmployeeCard = () => {
  return (
    <div className='bg-blue-300 border border-blue-400 rounded mx-4 my-4 flex p-4'>
      <div>
        <img src={Sharlok} className='rounded-full h-16 mr-4 border border-blue-800 w-16'/>
      </div>
      <div>
        <h1 className='font-bold text-xl'>Employee Name</h1>
        <h2>Employee Designation</h2>
      </div>
    </div>
  )
}

export default HEmployeeCard
