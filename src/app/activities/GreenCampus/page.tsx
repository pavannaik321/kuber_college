import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";


const GreenCampus = () => {
  return (
    <div>
        <Header/>
          <HeroSection
                     backgroundImage="/aboutpage/vision_mission.jpg"
                     title="Go Green Campus"
                     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
                   />
    <div className="p-6 md:p-12 bg-gray-100">
      {/* Section 1: Art in Education */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Go Green Campus</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
          In order to instill the awareness among the learners, as per the guidelines of CBSE, Students and Teachers will involve in conducting various activities to promote and conserve the Environment. The School Science Club, Eco Club and Social Science Club will play a vital role in this regard by conducting Awareness Programs like: Beautification of the Campus with diversified flora through Plantation Programs. Conduct of Awareness Programs like Elocution, Essay writing, Quiz, Singing and drawing Competitions at school and inter school levels. All the said activities will definitely enhances the requisite knowledge and awareness among the learners about his/their surroundings and try to ensure the Environment to be safe to live-in.
          </p>
        
        </div>
      </div>
      

  
    </div>
    <Footer />
    </div>
  );
};

export default GreenCampus;