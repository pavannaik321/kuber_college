import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const ArtEducation = () => {
  return (
    <div>
        <Header/>
          <HeroSection
                     backgroundImage="/aboutpage/vision_mission.jpg"
                     title="Art In Education"
                     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
                   />
    <div className="p-6 md:p-12 bg-gray-100">
      {/* Section 1: Art in Education */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Art in Education</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            Art education constitutes an important area of co-curricular activity for the holistic development of the learners. 
            It helps to explore various means of communication and develops individuals in creative and productive ways. 
            Through different forms of art, learners enhance their skills in visual, performing, and linguistic arts such as music, dance, drama, painting, modeling, sculpture, poetry, and writing.
          </p>
        </div>
      </div>
      
      {/* Section 2: Objectives */}
      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Objectives of Art in Education in Himalaya</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <li>Inculcation of time-tested and enduring universal values.</li>
          <li>Community integration through Arts.</li>
          <li>Exploring the community environment, local history, and geography for social and cultural preservation.</li>
          <li>Providing opportunities through Art in Education for Social and National Development.</li>
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ArtEducation;