import React from 'react'

const Hero = ({
    title = "Become a Software Engineer",
    subtitle = "Find the right job that fits your skill set"
}) => {
  return (
    <section className='bg-indigo-700 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col items-center sm:px-6 lg:px-8'>
        <div className='text-center'>
            <h1 className='text-4xl text-white font-extrabold sm:text-x5l md:text-6xl'>{title}</h1>
            <p className='my-4 text-xl text-white'>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
