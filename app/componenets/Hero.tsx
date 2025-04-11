import React from 'react'
import heroImage from '@/public/hero.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="bg-white">
  <div className="relative isolate overflow-hidden ">
    <div className=" pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 justify-center items-center  lg:gap-x-8 lg:px-8 lg:py-20">
      <div className="px-6 lg:px-0 lg:pt-4">
          <div className="">
            
            <h1 className="mt-10 text-[48px]   text-heading">Strategic Consulting for Sustainable Success</h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">At Alie Services, we provide expert business consulting tailored to help startups, small businesses, and established enterprises scale efficiently.</p>
           <button className='bg-lightBlue text-white mt-8'>Get Started</button>
          </div>
      </div>
      <div className="">
      
    <Image src={heroImage} height={700} width={700} alt='hero image' />
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32"></div>
  </div>
</div>

  )
}

export default Hero