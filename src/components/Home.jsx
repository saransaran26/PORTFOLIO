import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Home() {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center'>
            <p className='text-pink-600'>My Name is,</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>SARAN CHAKRAVARTHY R</h1>
            <h1 className='text-[#8892b0] text-4xl sm:text-7xl'>I'm Full Stack Developer</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px] tracking-wide font-body'>I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
          <div>
            <button className='text-white group border-2 py-6 px-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Word
            <span className='group-hover:rotate-90 duration-300'><AiOutlineArrowRight className='ml-3 text-xl'/></span></button>
          </div>
        </div>
    </div>
  )
}

export default Home