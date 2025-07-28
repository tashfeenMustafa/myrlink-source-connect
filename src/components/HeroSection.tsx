import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white text-black">
      {/* Background Image with Overlay */}
      {/* <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Global sourcing and procurement" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div> */}
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-black animate-fade-in">
        <img src={logo} alt="MyrLink Logo" className="mb-8 mx-auto w-32 md:w-48" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Source Directly
          <br />
          <span className="text-yellow-300">from Asia</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
          We're based in Canada — but we help businesses across North America to save money.
        </p>
        
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            With over 15 years of experience and boots on the ground in Hong Kong and Shenzhen, 
            MyrLink bridges the gap between Asian manufacturers and Western businesses. 
            We handle everything from factory inspections to final delivery, ensuring quality 
            products at unbeatable prices.
          </p>
        </div>
        
        <Button 
          asChild
          variant="cta" 
          size="lg" 
          className="px-12 py-6 text-lg rounded-full animate-slide-up"
        >
          <a href="#contact">
            Get a Free Cost Estimate
          </a>
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70">
        <div className="animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.84L12 13.42l4.59-4.58L18 10.25l-6 6-6-6z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;