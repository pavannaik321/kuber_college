import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";


const MorningAssembly = () => {
  return (
    <div>
        <Header/>
          <HeroSection
                     backgroundImage="/aboutpage/vision_mission.jpg"
                     title="Morning Assembly"
                     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
                   />
    <div className="p-6 md:p-12 bg-gray-100">
      {/* Section 1: Art in Education */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Morning Assembly</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
          The morning assembly of the School is the platform in which all students are given an opportunity to express their thoughts and individuality. It is taken to consideration that each and every student of our School participates in the assembly programmes like thoughts, news items, articles, G.K questions, community songs, book review and quiz programmes within 15 minutes on routine bases and as per the schedule prepared.
          </p>
        
        </div>
      </div>
      

  
    </div>
    <Footer />
    </div>
  );
};

export default MorningAssembly;