import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";

export default function AboutHimalaya() {
  return (
    <div>
      <Header/>
 {/* Hero Section */}
 <HeroSection
  backgroundImage="/aboutpage/vision_mission.jpg"
  title="About Himalaya"
  subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
/>
<HistorySection/>
      <Footer />
    </div>
  );
}
