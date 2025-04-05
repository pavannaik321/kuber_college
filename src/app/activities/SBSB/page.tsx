import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";


const SBSB = () => {
  return (
    <div>
        <Header/>
          <HeroSection
                     backgroundImage="/aboutpage/vision_mission.jpg"
                     title="Swatch Bharat & Shrest Bharat"
                     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
                   />
<div className="p-4 md:p-8 rounded-2xl shadow-xl mx-auto"> 
      <h2 className="text-3xl font-extrabold mb-6">Swatch Bharat & Shrest Bharat</h2>
      <div className="bg-gray-100 rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Ek Bharat Shreshth Bharat (EBSB):-</h3>
          <p className="text-gray-700 leading-relaxed">
            The spearhead project EBSB is planned to take up throughout the year. The activities are aimed to develop the core values of national integration, brotherhood and Unified Federal Republic of India.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Swachhata Campaign:-</h3>
          <p className="text-gray-700 leading-relaxed">
            The Swachhata Mission is being implemented in true spirit in this School. The weekly campus cleanings, plantation and making the campus paper free is the sole slogan of this campaign. The participation of all teachers and students have made this effort as a fruitful program and as expected by the CBSE.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SBSB;