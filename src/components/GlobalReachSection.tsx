import { useEffect, useState } from "react";
import worldMap from "@/assets/world-map.jpg";

const GlobalReachSection = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    suppliers: 0,
    savings: 0
  });

  const stats = [
    { key: 'experience', target: 20, suffix: '+', label: 'Years Experience' },
    { key: 'suppliers', target: 100, suffix: '+', label: 'Vetted Suppliers' },
    { key: 'savings', target: 2, suffix: 'M+', label: 'Millions Saved' }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat) => {
        let currentValue = 0;
        const increment = stat.target / steps;
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= stat.target) {
            currentValue = stat.target;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [stat.key]: Math.floor(currentValue)
          }));
        }, stepDuration);
      });
    };

    // Start animation when component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('global-reach-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="global-reach-section" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Global Reach, Local Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategically positioned across key markets to serve your international 
            sourcing needs with unparalleled efficiency and cultural understanding.
          </p>
        </div>

        {/* World Map with Stats Overlay */}
        <div className="relative mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img 
              src={worldMap} 
              alt="Global reach map showing Asia and North America" 
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/40 to-transparent"></div>
            
            {/* Animated Stats Overlays */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.key} 
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">
                      {counters[stat.key as keyof typeof counters]}{stat.suffix}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          {/* Canada Headquarters */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-card">
            <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L8.5 8H1l6 4.5L4.5 20L12 16l7.5 4L17 12.5l6-4.5h-7.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Canadian Headquarters
            </h3>
            <p className="text-muted-foreground mb-4">
              Niagara Falls Innovation Hub
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Strategic planning & operations</li>
              <li>• Client relationship management</li>
              <li>• North American logistics</li>
              <li>• Regulatory compliance</li>
            </ul>
          </div>

          {/* Hong Kong Office */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-card">
            <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Hong Kong Operations
            </h3>
            <p className="text-muted-foreground mb-4">
              Financial & logistics hub
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• International trade facilitation</li>
              <li>• Banking & financial services</li>
              <li>• Customs & documentation</li>
              <li>• Regional coordination</li>
            </ul>
          </div>

          {/* Shenzhen Office */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-card">
            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Shenzhen Manufacturing
            </h3>
            <p className="text-muted-foreground mb-4">
              Manufacturing & quality control
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Factory inspections & audits</li>
              <li>• Quality control oversight</li>
              <li>• Supplier relationship management</li>
              <li>• Production monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;