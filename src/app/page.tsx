'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import UniversityNavbar from '@/components/header'
import { FaCalendarAlt, FaNewspaper, FaExternalLinkAlt } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import About from '@/components/aboutus'
import StatsSection from '@/components/StatsSection'
import VCDesk from '@/components/collegedesk'
import Footer from '@/components/footer'
import CampusGlimpses from '@/components/CampusGlimpses'
import AdmissionForm from '@/components/form'
import Testimonials from '@/components/testimonial'
// import Image from 'next/image'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    loop: true,
  })
  return (
    <div>

    <div className="bg-gradient-to-b from-[#d8e4ee] to-white text-gray-900 pb-6">
      {/* Top nav bar */}
      {/* <div className="bg-[#2a3642] text-white text-sm px-8 py-2 flex justify-center">
        <div className="flex items-center gap-8 font-medium">
          <FaTh className="text-lg" />
          <span className="cursor-pointer">About MBM</span>
          <span className="cursor-pointer">Academics & Research</span>
          <span className="cursor-pointer">For Students</span>
          <span className="cursor-pointer">University Offices</span>
          <span className="cursor-pointer relative">
            Important Links <span className="ml-1">▼</span>
          </span>
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto px-6 flex justify-end">
      <UniversityNavbar />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Logo & School Name */}
        <div className="flex flex-col justify-between">
          <img src="/school_logo.png" alt="School Logo" className="h-15" />
          {/* <span className="text-lg font-bold text-green-900">DELHI WORLD SCHOOL</span> */}
        </div>
   
   <div>

      {/* Portal links */}
      <div className="flex justify-center items-center gap-6 text-[#1a3c5a] font-semibold text-base py-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <FaCalendarAlt /> <span>Admission Updates</span>
        </div>
        <div className="border-l border-gray-400 h-6" />
        <div className="flex items-center gap-2 cursor-pointer">
          <FaNewspaper /> <span>Latest News</span>
        </div>
        <div className="border-l border-gray-400 h-6" />
        <div className="flex items-center gap-2 cursor-pointer">
          <FaExternalLinkAlt /> <span>MBM IUMS Portal</span>
        </div>
      </div>

      {/* Logo + Welcome text */}
      <div className="text-end">
        <h1 className="text-5xl font-bold">
          <span className="text-red-600">HIMALAYA</span>{' '}
          <span className="text-[#1e2a39]">COLLEGE</span>
        </h1>
        <p className="text-xl mt-2 font-semibold text-[#1e2a39]">
          WELCOME TO{' '}
          <span className="text-red-600">
            <Typewriter
              words={['LEGACY', 'FUTURE', 'HIMALAYA COLLEGE']}
              loop={true}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </span>
        </p>
      </div>
    </div>
    </main>

    </div>

         {/* Main Content */}
         <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#243b58] mb-2">
            Republic Day Celebration <br />
            <span className="text-red-600">@MBM</span>
          </h2>
          <hr className="border-t border-gray-400 my-4 w-3/4" />
          <p className="text-gray-700 leading-relaxed max-w-xl">
            Celebration of 76th National Republic Day on 26 January, 2025 was marked by exemplary parade by NCC and NSS troops followed by cultural performances by our students.
          </p>
        </div>

        {/* Right Section - Carousel */}
        <div className="flex-1 w-full max-w-xl">
  <div
    ref={sliderRef}
    className="keen-slider rounded-xl overflow-hidden border-4 border-[#1e2a39]"
  >
    <div className="keen-slider__slide number-slide1">
      <img
        src="/carousel_image/mou1.jpeg"
        alt="MoU Signing 1"
        className="w-full h-72 object-cover"
      />
    </div>
    <div className="keen-slider__slide number-slide2">
      <img
        src="/carousel_image/mou2.jpeg"
        alt="MoU Signing 2"
        className="w-full h-72 object-cover"
      />
    </div>
  </div>
</div>

      </main>
      <StatsSection />
      <About />
      <VCDesk />
      <Testimonials />
      <AdmissionForm />
      <CampusGlimpses />
      <Footer />
    </div>
  )
}













