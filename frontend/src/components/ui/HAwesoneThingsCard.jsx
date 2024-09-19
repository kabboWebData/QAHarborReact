import React from 'react'

const HAwesoneThingsCard = ({title,desc}) => {
  return (
    <div className='border border-black rounded m-4 text-center p-4 bg-orange-100'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='mt-6 text-gray-700 min-h-40'>
       {desc}
        </p>   
    </div>
  )
}

export default HAwesoneThingsCard
