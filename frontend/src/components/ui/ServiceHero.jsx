import React from 'react'
import Binary from '../../assets/photos/Binary.jpg'

const ServiceHero = () => {
  return (
    <div className="bg-blue-950">
        <div className='flex flex-col md:flex-row mx-36 pt-24 items-center'>
        <div className='md:w-2/3'>
        <p className='text-red-500'>Our Blog</p>
        <h1 className='text-3xl font-bold text-white'>
            Greate Tips and Suggetions About SQA
        </h1>
        </div>
        <div className="md:w-1/3">
        <img src={Binary} className='rounded-t-3xl min-h-52 min-w-52' alt="" />
        </div>
    </div>
    </div>
  )
}

export default ServiceHero
