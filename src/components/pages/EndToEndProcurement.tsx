// Template-based page for End-to-End Procurement
import { ArrowLeft, ShoppingCart, SearchCheck, DollarSign, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const EndToEndProcurement = () => {
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
            <ShoppingCart className="w-12 h-12 text-blue-300" />
            <div>
              <h1 className="text-4xl font-bold">End-to-End Procurement</h1>
              <p className="text-blue-200 text-lg">Complete sourcing to delivery management—handled for you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Procurement Made Seamless</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our end-to-end procurement service eliminates complexity in international sourcing. From identifying trusted suppliers to managing payments, logistics, and delivery, we act as your on-the-ground partner throughout the entire procurement lifecycle.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <SearchCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Supplier Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tap into our verified supplier network to find the right match for your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Payment & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We handle contracts, currency exchange, and secure payments so you don’t have to.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Truck className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Shipping & Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Logistics, customs, and final-mile coordination—fully managed and transparent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Procurement Process</h2>
          <div className="space-y-8">
            {[
              ["Requirement Gathering", "Understand your goals, volumes, quality expectations, and timelines."],
              ["Supplier Matching", "Shortlist and engage with manufacturers that meet your criteria."],
              ["Quotation & Negotiation", "We obtain quotes, compare terms, and negotiate on your behalf."],
              ["Procurement & QC", "Place orders, oversee production, and conduct quality inspections."],
              ["Logistics & Handover", "Coordinate shipping and deliver goods to your destination hassle-free."]
            ].map(([title, desc], i) => (
              <div className="flex items-start space-x-6" key={i}>
                <div className="bg-corporate-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">{i + 1}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-muted p-8 rounded-lg">
            <CheckCircle className="w-16 h-16 text-corporate-navy mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready for Stress-Free Procurement?</h3>
            <p className="text-muted-foreground mb-6">
              Let us manage every step of your sourcing process so you can focus on growing your business.
            </p>
            <Button size="lg" className="bg-corporate-navy hover:bg-corporate-navy/90">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EndToEndProcurement;