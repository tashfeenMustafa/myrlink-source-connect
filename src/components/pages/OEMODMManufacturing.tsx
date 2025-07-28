// Template-based page for OEM/ODM Manufacturing
import { ArrowLeft, Package, Layers, Settings2, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const OEMODMManufacturing = () => {
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
              <h1 className="text-4xl font-bold">OEM/ODM Manufacturing</h1>
              <p className="text-blue-200 text-lg">From idea to production—custom solutions made simple</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Turn Concepts into Quality Products</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether you're starting with a sketch or detailed specs, our OEM/ODM services connect you with vetted factories capable of custom manufacturing. We manage the process from prototyping to mass production—ensuring your product vision becomes reality.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Package className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Product Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From design files or concepts, we help refine specifications for manufacturability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Layers className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Prototyping & Sampling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Test and iterate on samples before moving to full-scale production.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Settings2 className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Mass Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scale with confidence—our partner factories deliver consistent quality at volume.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Our OEM/ODM Workflow</h2>
          <div className="space-y-8">
            {[
              ["Initial Consultation", "Define your product vision, target specs, and timeline."],
              ["Factory Matching", "We identify qualified factories based on your industry and needs."],
              ["Sample Production", "Receive samples and iterate to meet your expectations."],
              ["Tooling & Pre-Production", "Confirm final specs and prepare for scale."],
              ["Full Production & QC", "Mass manufacture with ongoing quality checks and reporting."]
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
            <Factory className="w-16 h-16 text-corporate-navy mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Need Custom Manufacturing?</h3>
            <p className="text-muted-foreground mb-6">
              Work with our team to bring your product to life—faster, smarter, and more cost-effectively.
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

export default OEMODMManufacturing;