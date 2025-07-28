import { CheckCircle, Globe, Factory, Shield } from "lucide-react";
import teamPortrait from "@/assets/team-portrait.jpg";

const WhoWeAreSection = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-corporate-blue" />,
      title: "20+ Years of Global Experience",
      description: "Established relationships with manufacturers across Asia"
    },
    {
      icon: <Factory className="w-6 h-6 text-corporate-blue" />,
      title: "Boots on the Ground",
      description: "Physical presence in Hong Kong and Shenzhen for direct oversight"
    },
    {
      icon: <Shield className="w-6 h-6 text-corporate-blue" />,
      title: "Quality Assurance",
      description: "Personal factory inspections and comprehensive supplier audits"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-corporate-blue" />,
      title: "End-to-End Service",
      description: "From initial sourcing to final delivery and quality control"
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Who We Are
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              MyrLink is a Canada-based global procurement specialist with deep roots in Asia. 
              Founded with the vision of making international sourcing accessible and reliable, 
              we've earned a reputation for delivering exceptional value to businesses of all sizes.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our unique position with offices in Canada and operational hubs in Hong Kong and 
              Shenzhen allows us to provide unparalleled service and cultural understanding 
              that traditional brokers simply cannot match.
            </p>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src={teamPortrait} 
                alt="MyrLink professional team" 
                className="w-full h-[600px] object-cover rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/20 to-transparent rounded-2xl"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-corporate-blue">100+</div>
                      <div className="text-sm text-muted-foreground">Vetted Suppliers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-corporate-blue">$2M+</div>
                      <div className="text-sm text-muted-foreground">Client Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-corporate-blue">98%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;