import { ArrowLeft, Factory, CheckCircle, Globe, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const DirectFactorySourcing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-corporate-navy text-white py-6">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-4">
            <Factory className="w-12 h-12 text-blue-300" />
            <div>
              <h1 className="text-4xl font-bold">Direct Factory Sourcing</h1>
              <p className="text-blue-200 text-lg">Connect directly with verified manufacturers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Direct Factory Sourcing?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Cut out the middleman and connect directly with trusted manufacturers across Asia.
            Our direct factory sourcing service gives you access to competitive pricing,
            better quality control, and faster production timelines.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Save 15-30% by eliminating trading company markups and connecting directly with manufacturers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access our vetted network of 500+ factories across China, Vietnam, India, and other Asian markets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every factory undergoes rigorous auditing and quality certification before joining our network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Process</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-corporate-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Requirements Analysis</h3>
                <p className="text-muted-foreground">We analyze your product specifications, quality standards, and production requirements.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-corporate-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Factory Matching</h3>
                <p className="text-muted-foreground">We identify and shortlist the best-suited factories from our vetted network.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-corporate-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Direct Introduction</h3>
                <p className="text-muted-foreground">We facilitate direct communication and negotiations between you and the manufacturer.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-corporate-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">We provide continuous support throughout the production and delivery process.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Lower production costs</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Better quality control</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Faster communication</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Customization flexibility</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Verified factory credentials</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Production monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Risk mitigation</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-muted p-8 rounded-lg">
            <Clock className="w-16 h-16 text-corporate-navy mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Connect with Factories?</h3>
            <p className="text-muted-foreground mb-6">
              Let us help you find the perfect manufacturing partner for your business needs.
            </p>
            <Button size="lg" className="bg-corporate-navy hover:bg-corporate-navy/90">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DirectFactorySourcing;