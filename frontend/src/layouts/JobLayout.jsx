import React from 'react'
import JobNav from '../components/header/JobNav'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const JobLayout = () => {
  return (
    <div>
      <JobNav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default JobLayout
