import React from 'react'

import HeadAbout from '../components/ui/HeadAbout'

import WelcomeAbout from '../components/ui/WelcomeAbout'

import MiddleAbout from '../components/ui/MiddleAbout'
import VisionAbout from '../components/ui/VisionAbout'
import Strategy from '../components/ui/Strategy'
import Testimon from '../components/ui/Testimon'





const AboutUs = () => {
  return (
    <div>
    <HeadAbout/> 
    <WelcomeAbout/> <br/>
    <MiddleAbout/> <br/>
    <VisionAbout/> <br/> 
    <Strategy/>
    <Testimon/>

    </div>
  )
}

export default AboutUs
