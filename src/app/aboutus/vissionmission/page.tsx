import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";

import Footer from "@/components/footer";
import Header from "@/components/header";
import MissionSection from "@/components/missionsection";


export default function VisionMission() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <HeroSection
        backgroundImage="/aboutpage/vision_mission.jpg"
        title="Vision and Mission"
        subtitle="Our vision is to cultivate young minds with excellence, integrity, and leadership, shaping them into responsible global citizens."
      />

<VisionSection />
<MissionSection />
      <Footer />
    </div>
  );
}

