import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const ICT = () => {
  return (
    <div>
        <Header />
            <HeroSection
             backgroundImage="/aboutpage/vision_mission.jpg"
             title="ICT in Teaching Learning Process"
             subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
           />
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">ICT in Teaching Learning Process</h2>
      <div className="mt-4 p-4 bg-gray-200 rounded-lg">
        <p className="text-gray-700">
        Each teacher will be convinced to go the classes only with proper teaching/A.V. Aids. Wherever necessary, these will be prepared indigenously. Besides teaching/A.V.Aids, as envisaged by CBSE Computer Literacy Program, it will be ensured that every teacher is encouraged to use Computers in Teaching Learning Process. It is mandatory for every teacher to become Computer Literate and will cover minimum of 30% of lessons through the usage of Computers. Students will be exposed and trained by the teachers in the usage of ICT in their Learning Process.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ICT;
