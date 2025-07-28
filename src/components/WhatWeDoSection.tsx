import { Factory, Search, Cog, Truck, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhatWeDoSection = () => {
  const services = [
    {
      icon: <Factory className="w-8 h-8 text-corporate-blue" />,
      title: "Direct Factory Sourcing",
      description: "Bypass middlemen and source directly from verified manufacturers. Our established relationships ensure competitive pricing and reliable supply chains for your products."
    },
    {
      icon: <Search className="w-8 h-8 text-corporate-blue" />,
      title: "Custom Product Sourcing",
      description: "Need something specific? Our expert team specializes in finding hard-to-source products and materials, leveraging our extensive network across Asia."
    },
    {
      icon: <Cog className="w-8 h-8 text-corporate-blue" />,
      title: "OEM/ODM Manufacturing",
      description: "From concept to production, we manage your private label and custom manufacturing projects with precision, ensuring quality standards that meet Western expectations."
    },
    {
      icon: <Truck className="w-8 h-8 text-corporate-blue" />,
      title: "End-to-End Procurement",
      description: "Complete procurement management including negotiation, quality control, logistics coordination, and delivery tracking. One partner, one total solution."
    },
    {
      icon: <Shield className="w-8 h-8 text-corporate-blue" />,
      title: "Supplier Audits & QC",
      description: "Comprehensive factory inspections, supplier verification, and ongoing quality assurance programs to protect your business and brand reputation."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive sourcing and procurement services designed to save you time, 
            money, and reduce risk in your international business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 shadow-sm hover:shadow-lg hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-corporate-gray-light rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Industry Expertise
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We serve diverse industries including electronics, textiles, home goods, 
              automotive parts, machinery, and consumer products. Our team's deep understanding 
              of manufacturing processes and regulatory requirements ensures smooth operations 
              regardless of your industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;