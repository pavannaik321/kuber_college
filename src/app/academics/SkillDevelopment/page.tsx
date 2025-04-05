import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const SkillDevelopment = () => {
  return (
    <div>
        <Header />
            <HeroSection
             backgroundImage="/aboutpage/vision_mission.jpg"
             title="Skill Development"
             subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
           />
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Skill Development</h2>
      <div className="mt-4 p-4 bg-gray-200 rounded-lg">
        <p className="text-gray-700">
        As per the revised CBSE curriculum, the schools have introduced additional Skill subjects/ Skill Modules w.e.f. the session 2020-2021 at secondary levels. If a student fails in any one of the three compulsory academic subjects (i.e. Science, Mathematics and Social Science) and passes in the Skill subject (offered as 6th optional subject), then it will be replaced by the Skill subject and result of Class X Board examination will be computed accordingly. The learner to ensure and care should be taken that Computer Application (Code 165), Information Technology (Code 402), Artificial Intelligence (Code 417) and Media (Code 415) cannot be taken together.
        </p>
        <p className="mt-8 text-gray-700">
        Since 2020-21, this School has introduced Information Technology (402) as an additional Subject and deserved students of the School got benefited out of the provision made by the CBSE board.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SkillDevelopment;
