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
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <TestimonialSection />
      <CaseStudySection />
      <GlobalReachSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
