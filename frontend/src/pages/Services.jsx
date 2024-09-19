import React from 'react'
import ServiceHero from '../components/ui/ServiceHero'
import ServiceServices from '../components/ui/ServiceServices'
import ServiceSuccess from '../components/ui/SurviceSuccess'
import ServicePackage from '../components/ui/ServicePackage'

const Services = () => {
  return (
    <div>
      <ServiceHero />
      <ServiceServices />
      <ServiceSuccess />
      <ServicePackage />
    </div>
  )
}

export default Services
