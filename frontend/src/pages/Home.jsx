import React from 'react'
import Hero from '../components/ui/Hero'
import HomeServices from '../components/ui/HomeServices'
import HBadges from '../components/ui/HBadges'
import HomeSharedExperience from '../components/ui/HomeSharedExperience'
import HomeAwesomeThings from '../components/ui/HomeAwesomeThings'
import HomeBlueBadges from '../components/ui/HomeBlueBadges'
import HomeSchedule from '../components/ui/HomeSchedule'
import HomeExperts from '../components/ui/HomeExperts'
import HomeAPIImages from '../components/ui/HomeAPIImages'
import HomeOfferConsultant from '../components/ui/HomeOfferConsultant'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeServices/>
      <HBadges/>
      <HomeSharedExperience/>
      <HomeAwesomeThings/>
      <HomeBlueBadges/>
      <HomeSchedule/>
      <HomeExperts/>
      <HomeAPIImages/>
      <HomeOfferConsultant />
    </div>
  )
}

export default Home
