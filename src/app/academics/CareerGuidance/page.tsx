import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const CareerGuidance = () => {
  return (
    <div>
        <Header />
            <HeroSection
             backgroundImage="/aboutpage/vision_mission.jpg"
             title="Career Guidance"
             subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
           />
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Career Guidance</h2>
      <div className="mt-4 p-4 bg-gray-200 rounded-lg">
        <p className="text-gray-700">
        National Education Policy (NEP-2020), envisages that the curriculum and Pedagogy of the Institutions must develop among the students the conscious awareness of one’s roles and responsibilities in a changing world. Vocational and career counseling should be made available to all students and help them in identifying their interest, talent and devise appropriate career pathways. Therefore, our School has initiated to hold career and counseling classes at the tag end of each Academic year by inviting resource persons . This will enable the students to choose their line of interested areas in their future endeavors.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default CareerGuidance;
