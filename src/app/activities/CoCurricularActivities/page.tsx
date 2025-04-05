import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const CoCurricularActivities = () => {
  return (
    <div>
        <Header />
            <HeroSection
             backgroundImage="/aboutpage/vision_mission.jpg"
             title="Co-Curricular Activities"
             subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
           />
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Co-Curricular Activities</h2>
      <div className="mt-4 p-4 bg-gray-200 rounded-lg">
        <p className="text-gray-700">
        On Saturdays and during various celebrations Co-Curricular/Co-Scholastic activities will be conducted on the basis of Inter House/Inter Class Competitions as per CBSE guide lines. It will be ensured that each child participates at least in two competitions in a year. Apart from these competitions, Morning Assembly Sessions will be used as Training Ground for the children to come on to the stage. The Librarian will prepare Roster of Assembly Duties in consultation with the HMs and House Captains. Separate Register on each activity will be maintained. A Circular will be taken well in advance to offer enough time for the preparation of children to develop healthy competition. In order to develop spirit of inquiry, Morning Assemblies will be “Theme Based”and monitored by the English Teachers.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default CoCurricularActivities;
