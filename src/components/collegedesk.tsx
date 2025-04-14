'use client'
import React from 'react'

export default function VCDesk() {
  const sections = [
    {
      name: 'Prof. Ajay Kumar Sharma',
      title: "Hon'ble Vice Chancellor",
      university: 'MBM University',
      location: 'Jodhpur, Rajasthan',
      image: '/aboutus/principal.jpg', // Replace with real path
      message: `At MBM University, we strive to keep the quality of our academics, research and innovation at priority to keep up with the pace of the technological advancement. The university focuses on providing latest in-demand academic programmes and cutting-edge research opportunities...`,
    },
    {
      name: 'Prof. Ajay Kumar Sharma',
      title: "Hon'ble Vice Chancellor",
      university: 'MBM University',
      location: 'Jodhpur, Rajasthan',
      image: '/aboutus/chairman.jpg',
      message: `At MBM University, we strive to keep the quality of our academics, research and innovation at priority to keep up with the pace of the technological advancement. The university focuses on providing latest in-demand academic programmes and cutting-edge research opportunities...`,
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-[#2f3b4e]">From </span>
        <span className="text-red-600">Vice Chancellor&apos;s </span>
        <span className="text-[#2f3b4e]">Desk...</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 relative">
        {sections.map((sec, idx) => (
          <div key={idx} className="px-6 py-4 flex flex-col items-center text-center lg:text-left">
            <img
              src={sec.image}
              alt="Vice Chancellor"
              className="w-64 h-64 object-cover rounded-md border-4 border-[#2f3b4e] mb-4"
            />
            <h3 className="text-xl font-bold text-red-600">{sec.name}</h3>
            <p className="text-[#2f3b4e] font-semibold">{sec.title}</p>
            <p className="text-[#2f3b4e] font-semibold">{sec.university}</p>
            <p className="text-[#2f3b4e] font-semibold mb-6">{sec.location}</p>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed text-center">
              {sec.message}
            </p>
          </div>
        ))}

        {/* Divider */}
        {/* <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 border-l border-[#2f3b4e] border-dotted border-2"></div> */}

      </div>
    </section>
  )
}
