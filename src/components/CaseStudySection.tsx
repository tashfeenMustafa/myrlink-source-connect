import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Clock, Award } from "lucide-react";

const CaseStudySection = () => {
  const caseStudies = [
    {
      icon: <TrendingDown className="w-8 h-8 text-green-600" />,
      industry: "Electronics Startup",
      challenge: "Needed to source custom IoT sensors for a new product launch",
      solution: "Connected with specialized manufacturer in Shenzhen, managed prototype development and quality testing",
      results: [
        "45% cost reduction vs. North American suppliers",
        "3-month faster time-to-market",
        "Ongoing partnership for scaled production"
      ],
      quote: "MyrLink turned our sourcing nightmare into a competitive advantage."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      industry: "Home Goods Distributor", 
      challenge: "Existing supplier quality issues threatening customer relationships",
      solution: "Comprehensive supplier audit, alternative sourcing, and implementation of quality control protocols",
      results: [
        "99% reduction in customer complaints",
        "25% lower procurement costs",
        "Diversified supplier base for risk mitigation"
      ],
      quote: "They saved our business and our reputation."
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Case Study Snapshots
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from businesses that partnered with MyrLink to transform 
            their procurement operations and bottom line.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="shadow-card border-0 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  {study.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {study.industry}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Challenge:</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Our Solution:</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <blockquote className="border-l-4 border-corporate-blue pl-4 italic text-foreground">
                    "{study.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl p-8 shadow-card animate-fade-in">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Proven Track Record
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-corporate-blue mb-2">200+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-corporate-blue mb-2">35%</div>
              <div className="text-muted-foreground">Average Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-corporate-blue mb-2">6 Months</div>
              <div className="text-muted-foreground">Average Time Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-corporate-blue mb-2">97%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;