
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import PrincipalMessage from "@/components/principalmessage";

export default function PrincipalDesk() {
  return (
    <div>
      <Header/>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/aboutpage/vision_mission.jpg"
        title="Principal Desk"
        subtitle="Our vision is to cultivate young minds with excellence, integrity, and leadership, shaping them into responsible global citizens."
      />
      <PrincipalMessage />
      <Footer />
    </div>
  );
}
