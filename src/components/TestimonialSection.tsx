import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 gradient-dark text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Quote Icon */}
          <div className="mb-8">
            <Quote className="w-16 h-16 mx-auto text-yellow-300 opacity-80" />
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Why Our Clients Choose Us
          </h2>
          
          {/* Key Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-yellow-300 mb-4">Cultural Bridge</div>
              <p className="text-lg opacity-90 leading-relaxed">
                We eliminate language barriers and cultural misunderstandings that often 
                derail international business relationships.
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-yellow-300 mb-4">Risk Mitigation</div>
              <p className="text-lg opacity-90 leading-relaxed">
                Our on-ground presence and rigorous vetting process protect you from 
                unreliable suppliers and quality issues.
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-yellow-300 mb-4">Cost Savings</div>
              <p className="text-lg opacity-90 leading-relaxed">
                Direct factory relationships and expert negotiation consistently deliver 
                20-40% savings compared to traditional distributors.
              </p>
            </div>
          </div>
          
          {/* Main Testimonial Quote */}
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 italic">
            "MyrLink doesn't just source products – they build bridges between 
            worlds, ensuring Western businesses can confidently navigate Asian 
            manufacturing while maintaining quality standards and cost efficiency."
          </blockquote>
          
          {/* Client Benefits */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-semibold mb-6">The MyrLink Advantage</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Transparent pricing with no hidden fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Real-time project updates and communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Guaranteed quality with comprehensive inspections</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Flexible minimum order quantities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Secure payment terms and escrow options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Ongoing support and relationship management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;