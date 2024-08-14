import React from 'react'
import { NavLink } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <section className='max-w-lg m-auto my-10 px-6'>
        <NavLink to="/jobs" className='block bg-black text-white text-center py-4 rounded-xl hover:bg-gray-700'>View All Jobs</NavLink>
    </section>
  )
}

export default ViewAllJobs