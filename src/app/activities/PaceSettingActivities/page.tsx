import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const PaceSettingActivities = () => {
  return (
    <div>
        <Header />
            <HeroSection
             backgroundImage="/aboutpage/vision_mission.jpg"
             title="Pace Setting Activities"
             subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
           />
 <div className="p-4 md:p-6 rounded-lg shadow-md mx-auto"> 
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Pace Setting Activities</h2>
      <div className="bg-gray-100 rounded-lg p-4 space-y-4">
        <p className="text-gray-700 leading-relaxed">
          A sub-committee under miscellaneous activities committee is constituted for the effective implementation of pace setting activities. Under the guidence of Mrs. Megha Nayak, IT Teacher cum CCA Incharge and also under the Supervision of Principal / Vice Principal / Senior Most Teacher, various activities will be choked out during each of the Academic year.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The following pace setting activities are suggested to be undertaken during the year:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li className="text-gray-700 leading-relaxed">
            An extension programme of population education related to subjects like Pulse Polio drive, HIV/AIDS, Corona Awareness, Observance of Deworming day, Environmental day, Yoga day etc.,
          </li>
          <li className="text-gray-700 leading-relaxed">
            Organizing of workshops on various subjects involving teachers of different subjects and the teachers of other local schools.
          </li>
          <li className="text-gray-700 leading-relaxed">
            Arrangement of <strong>Guest Lectures / Seminars</strong> on various syllabus related and general subjects - particularly on <strong>Carrier Guidance</strong> of the students for IX & X std students.
          </li>
          <li className="text-gray-700 leading-relaxed">
            <strong>Tree plantation and beautification of campus</strong> in the existing site.
          </li>
          <li className="text-gray-700 leading-relaxed">
            Adopt the neighboring village / locality for:
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li className="text-gray-700 leading-relaxed">
                <strong>Health and hygiene</strong> awareness Campaigns.
              </li>
              <li className="text-gray-700 leading-relaxed">
                Organizing <strong>Swachha Bharat Campaigns</strong> to make India as <strong>EBSB</strong>.
              </li>
              <li className="text-gray-700 leading-relaxed">
                Extend Library and Computer facilities to nearby school children.
              </li>
              <li className="text-gray-700 leading-relaxed">
                Organize matches /athletic activities involving other schools in the district.
              </li>
              <li className="text-gray-700 leading-relaxed">
                Science club will organize <strong>Science Model Exhibition</strong> cum debate competition regarding <strong>Evils of Pollution</strong> by involving other schools of the district.
              </li>
              <li className="text-gray-700 leading-relaxed">
                Inter-school painting competition (Block/Taluk/Dist. levels).
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default PaceSettingActivities;
