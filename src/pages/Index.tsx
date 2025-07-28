import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TestimonialSection from "@/components/TestimonialSection";
import CaseStudySection from "@/components/CaseStudySection";   
import GlobalReachSection from "@/components/GlobalReachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div>
        <HeroSection />
      </div>
      <div id="about">
        <WhoWeAreSection />
      </div>
      <div id="services">
        <WhatWeDoSection />
      </div>
      <div id="testimonials">
        <TestimonialSection />
      </div>
      <div id="case-studies">
        <CaseStudySection />
      </div>
      <GlobalReachSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;