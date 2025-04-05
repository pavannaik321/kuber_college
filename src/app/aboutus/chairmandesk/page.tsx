import ChairmanMessage from "@/components/chairmanmessage";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";

export default function ChairmanDesk() {
  return (
    <div>
      <Header/>
            {/* Hero Section */}
            <HeroSection
              backgroundImage="/aboutpage/vision_mission.jpg"
              title="Chairman Desk"
              subtitle="Our vision is to cultivate young minds with excellence, integrity, and leadership, shaping them into responsible global citizens."
            />
            <ChairmanMessage />
      <Footer />
    </div>
  );
}
