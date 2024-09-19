import React from 'react'

const HSharedExperienceCard = ({title,desc}) => {
  return (
    <div className='border border-black rounded m-4 text-center p-4'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='mt-6 text-gray-700'>
        {desc}
        </p>   
    </div>
  )
}

export default HSharedExperienceCard
