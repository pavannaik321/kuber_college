'use client'
import React from 'react'

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-stretch">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/3 border-4 border-[#2f3b4e] rounded-md overflow-hidden flex">
          <img
            src="/carousel_image/mou2.jpeg"
            alt="MBM Intro"
            className="object-cover w-full h-auto lg:h-full"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#243b58] mb-4">
            <span className="text-red-600">MBM</span>{' '}
            <span className="text-[#243b58]">UNIVERSITY</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            A State University established by the Government of Rajasthan in September, 2021. 
            MBM is known for its pioneering academic programmes and high technical standards. 
            The university offers a gamut of courses both at PG and UG level. The university 
            is committed to providing its students with an education that combines rigorous 
            academic study and developing a far more ambitious, integrated and influential 
            environment that will best serve our nation.
          </p>
        </div>

      </div>
    </section>
  )
}
