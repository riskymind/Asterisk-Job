import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from './Card'

const HomeCard = () => {
  return (
    <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg'>
                <Card>
                    <h2 className='text-2xl font-bold'>For Developers</h2>
                    <p className='mt-2 mb-4'>Browse our React jobs and start your career today</p>
                    <NavLink to="/jobs" className='inline-block bg-black text-white px-4 py-2 hover:bg-gray-700 rounded-lg'>Browse Jobs</NavLink>
                </Card>

                <Card bg='bg-indigo-100'>
                    <h2 className='text-2xl font-bold'>For Employers</h2>
                    <p className='mt-2 mb-4'>List your job to find the perfect developer for the role</p>
                    <NavLink to="/add-job" className='inline-block bg-indigo-500 text-white px-4 py-2 hover:bg-indigo-600 rounded-lg'>Add Jobs</NavLink>
                </Card>
            </div>
        </div>
    </section> 
  )
}

export default HomeCard