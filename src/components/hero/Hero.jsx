/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../navbar/Navbar'
import hi from '../../assets/hi.png'
import CV from './CV.pdf'
import img from '../../assets/PIC 1.png'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[600px] sm:min-h-[720px] flex flex-col'>
      {/* Floating Gradient Blob */}
      <div className='absolute -top-20 right-0 md:h-[720px] md:w-[640px] h-[640px] w-[880px] bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 rounded-full transform rotate-12 shadow-[0_0_40px_rgb(255,165,0,0.7)] animate-pulse'></div>

      <Navbar /> 

      <section data-aos='fade-up' data-aos-delay='250' className='text-white body-font z-10'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>

          {/* Left Text */}
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative'>
{/* Hi Icon */}
<img 
  src={hi} 
  data-aos='fade-up' 
  data-aos-delay='400'
  className='absolute 
             top-[70%] left-[50%]   /* mobile: bottom area, centered */
             sm:top-[70%] sm:left-[65%] /* small screens */
             md:top-[-40px] md:left-[80%] /* medium screens */
             lg:top-[-60px] lg:left-[75%] /* large screens */
             transform -translate-x-1/2 -translate-y-1/2 
             w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 
             animate-bounce z-20'
/>

            {/* Title */}
            <h1 className='title-font sm:text-5xl text-3xl mb-4 font-bold text-white relative group'>
              Hi! I&apos;m <span className='text-orange-500'>Mariam</span>
              <span className='absolute left-0 -bottom-1 w-0 h-1 bg-orange- transition-all duration-500 group-hover:w-full'></span>
            </h1>

            {/* Description */}
            <p className='mb-8 leading-relaxed text-gray-200 text-base sm:text-lg'>
              Aspiring software engineer with hands-on experience in full-stack development, project collaboration, and agile methodologies. Strong foundation in computer science and a passion for building scalable, user-friendly applications.
            </p>

            {/* Download CV Button */}
            <div className='flex justify-center md:justify-start'>
              <a href={CV} download>
                <button className='inline-flex items-center text-white bg-gradient-to-r from-orange-500 to-yellow-400 border-0 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,165,0,0.7)]'>
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center relative mt-10 md:mt-0'>

            {/* Background Gradient Circle */}
            <div className='absolute w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-tr from-orange-500 via-yellow-400 to-red-500 rounded-full shadow-[0_0_70px_rgba(255,165,0,0.7)]'></div>

            {/* Hero Image */}
            <img 
              src={img} 
              alt="hero" 
              className='relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 object-cover object-center rounded-full shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_70px_rgba(255,165,0,0.8)] z-10'
              data-aos='fade-left'
              data-aos-delay='500'
            />
          </div>

        </div>
      </section>
    </div>
  )
}
