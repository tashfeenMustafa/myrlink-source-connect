// Template-based page for Quality Assurance
import { ArrowLeft, ShieldCheck, ClipboardCheck, SearchCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../Navigation";
import Footer from "@/components/Footer";

const QualityAssurance = () => {
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
            <ShieldCheck className="w-12 h-12 text-blue-300" />
            <div>
              <h1 className="text-4xl font-bold">Quality Assurance</h1>
              <p className="text-blue-200 text-lg">Ensure product excellence at every stage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Rigorous Quality, Consistently Delivered</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our Quality Assurance service guarantees that your products meet international standards, customer expectations, and regulatory compliance. From on-site inspections to lab testing and final shipment validation, we help you reduce risk and boost brand trust.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <ClipboardCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Inspection Protocols</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Multiple inspection stages to detect issues early and maintain consistency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <SearchCheck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Supplier Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Thorough evaluations of facilities, compliance, and production capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Final QA Checks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quality verification before products leave the factory floor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Our QA Process</h2>
          <div className="space-y-8">
            {[
              ["Requirement Gathering", "Understand product specs and critical tolerances."],
              ["Factory Audit", "Evaluate facilities and production procedures."],
              ["In-Process Inspection", "Spot checks during production stages."],
              ["Final Inspection", "Random sampling based on AQL standards."],
              ["Report & Validation", "Detailed report and approval before shipment."]
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
            <ShieldCheck className="w-16 h-16 text-corporate-navy mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Need Reliable Quality Control?</h3>
            <p className="text-muted-foreground mb-6">
              Let us help you maintain quality and confidence in every shipment.
            </p>
            <Button size="lg" className="bg-corporate-navy hover:bg-corporate-navy/90">
              Book a QA Service
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QualityAssurance;