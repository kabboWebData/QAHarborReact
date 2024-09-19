import React from 'react'
import SServiceCard from './SServiceCard'

const ServiceServices = () => {
  return (
    <div>
        <div className='text-center my-4'>
            <p className='text-red-500'>Software Quality Assurance</p>
            <h1 className='text-3xl font-bold'>Our Services</h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-20">
        <SServiceCard/>
        <SServiceCard/>
        <SServiceCard/>
        <SServiceCard/>
        <SServiceCard/>
        <SServiceCard/>
        <SServiceCard/>
        <SServiceCard/>
      </div>
    </div>
  )
}

export default ServiceServices
