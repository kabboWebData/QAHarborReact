import React from 'react'
import BadgeLogos from '../../assets/photos/BadgeLogos.png'

const HBadges = () => {
  return (
    <div className='text-center my-5'>
      <h1 className='text-red-500'>Globally Trusted By</h1>
      <img src={BadgeLogos} alt="badges" className='w-full my-4' />
    </div>
  )
}

export default HBadges
