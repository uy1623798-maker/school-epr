import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import HeroStats from "@/components/hero/HeroStats";
import Gallery from "@/components/gallery/Gallery";
import TeacherSection from "@/components/teachers/TeacherSection";
import VideoSection from "@/components/video/VideoSection";
import FacilitySection from "@/components/facilities/FacilitySection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import AboutSection from "@/components/about/AboutSection";
import WhyChooseUs from "@/components/why-us/WhyChooseUs";
import Footer from "@/components/footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroStats />
      <Gallery />
      <TeacherSection />
      <VideoSection />
      <FacilitySection />
      <TestimonialSection />
      <AboutSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
}