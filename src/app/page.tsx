import AboutUs from "@/components/aboutus";
import HeroCarousel from "@/components/carousel";
import Footer from "@/components/footer";
import AdmissionForm from "@/components/form";
import Header from "@/components/header";
import StatsSection from "@/components/StatsSection";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroCarousel />
      <StatsSection />
      <WhyChooseUs />
      <AboutUs />
      <AdmissionForm />
      <Testimonial />
      <Footer />
    </div>
  );
}
