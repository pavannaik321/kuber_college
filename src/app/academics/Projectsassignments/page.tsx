import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const ProjectsAssignments = () => {
  return (
    <div>
        <Header />
            <HeroSection
             backgroundImage="/aboutpage/vision_mission.jpg"
             title="Projects & Assignments"
             subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
           />
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Projects & Assignments</h2>
      <div className="mt-4 p-4 bg-gray-200 rounded-lg">
        <p className="text-gray-700">
          The Subject Teachers will assign Projects and Assignments after the
          completion of the chapters and as per the guidance of NCERT Textbooks
          and CBSE Board. This is in order to enrich the learning abilities in
          the concepts taught in the respective subjects. Students will complete
          the given tasks before the conduct of Periodic Week Tests and Terminal
          Tests which will enable the subject teachers to assess and award marks
          as per the guidelines of CBSE.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ProjectsAssignments;
