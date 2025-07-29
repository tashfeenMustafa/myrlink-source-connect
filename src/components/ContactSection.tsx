import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-corporate-blue" />,
      title: "Phone",
      content: "+1 (647) 691 6799",
      subtitle: "Available 9 AM - 6 PM EST"
    },
    {
      icon: <Mail className="w-6 h-6 text-corporate-blue" />,
      title: "Email",
      content: "info@myrlink.ca",
      subtitle: "Response within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-corporate-blue" />,
      title: "Address",
      content: "4551 Zimmerman Ave, Niagara Falls, ON L2E 2P2",
      subtitle: "Niagara Falls, Canada"
    },
    {
      icon: <Clock className="w-6 h-6 text-corporate-blue" />,
      title: "Business Hours",
      content: "Mon-Fri: 9 AM - 5 PM EST",
      subtitle: "Extended hours for Asia timezone"
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to reduce your procurement costs and streamline your supply chain? 
            Let's discuss how MyrLink can transform your sourcing operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Request a Free Cost Estimate
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Tell us about your sourcing needs *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-2"
                      placeholder="Describe the products you need to source, quantities, timeline, and any specific requirements..."
                    />
                  </div>
                  
                  <Button type="submit" variant="cta" className="w-full">
                    Get Free Estimate
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium">
                          {info.content}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <Card className="bg-corporate-blue text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="w-8 h-8 text-yellow-300" />
                    <div>
                      <h4 className="font-semibold text-lg">Proudly part of the Niagara Falls Innovation Hub</h4>
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Member of Canada's leading innovation ecosystem, 
                    demonstrating our commitment to excellence and business integrity.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h4 className="font-semibold text-foreground mb-4">Why Choose MyrLink?</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Average Response Time</span>
                    <span className="font-semibold text-corporate-blue">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Client Satisfaction</span>
                    <span className="font-semibold text-corporate-blue">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">On-Time Delivery</span>
                    <span className="font-semibold text-corporate-blue">99.2%</span>
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

export default ContactSection;