import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListings />
      <ViewAllJobs />
    </div>
  )
}

export default App