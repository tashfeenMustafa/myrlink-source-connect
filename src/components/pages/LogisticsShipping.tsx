// Template-based page for Logistics & Shipping
import { ArrowLeft, Truck, Plane, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../Navigation";
import Footer from "@/components/Footer";

const LogisticsShipping = () => {
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
            <Truck className="w-12 h-12 text-blue-300" />
            <div>
              <h1 className="text-4xl font-bold">Logistics & Shipping</h1>
              <p className="text-blue-200 text-lg">Seamless delivery from factory to destination</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Reliable Global Logistics Solutions</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We manage the complete logistics and shipping process to ensure your goods arrive safely, on time, and with full transparency. From factory pickup to final delivery, we handle documentation, customs clearance, and coordination every step of the way.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Plane className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Multi-Modal Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sea, air, rail, and truck freight options tailored to your timeline and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track shipments in real-time and stay ahead of delays with proactive updates.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Global Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Delivery solutions for North America, Europe, Asia, and emerging markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Shipping Process</h2>
          <div className="space-y-8">
            {[
              ["Pickup & Coordination", "Goods collected directly from the factory or warehouse."],
              ["Customs & Compliance", "Handle paperwork, duties, and regulatory clearance."],
              ["Freight Booking", "Choose optimal routes and rates for your delivery needs."],
              ["Tracking & Communication", "Live shipment tracking with regular updates."],
              ["Final Delivery", "End-to-end delivery to your warehouse or designated location."]
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
            <Truck className="w-16 h-16 text-corporate-navy mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Need Hassle-Free Shipping?</h3>
            <p className="text-muted-foreground mb-6">
              Let us simplify your logistics with expert coordination and global reach.
            </p>
            <Button size="lg" className="bg-corporate-navy hover:bg-corporate-navy/90">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LogisticsShipping;