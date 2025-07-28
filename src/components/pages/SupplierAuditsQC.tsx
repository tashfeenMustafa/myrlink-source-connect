// Template-based page for Supplier Audits & QC
import { ArrowLeft, ShieldCheck, ClipboardList, SearchCheck, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const SupplierAuditsQC = () => {
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
            <ShieldCheck className="w-12 h-12 text-green-300" />
            <div>
              <h1 className="text-4xl font-bold">Supplier Audits & QC</h1>
              <p className="text-blue-200 text-lg">Trust but verify—ensure your suppliers meet expectations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Reduce Risk, Increase Confidence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our supplier audit and quality control services are designed to give you confidence in every link of your supply chain. From pre-engagement factory assessments to in-production inspections and final shipment checks, we verify that your partners are capable, compliant, and delivering as promised.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <ClipboardList className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Factory Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Evaluate capacity, quality systems, certifications, and ethical practices before committing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <SearchCheck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>In-Process Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor production runs to catch defects early and ensure compliance with your specifications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Final QC & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full shipment inspections and documentation to verify quality and prevent costly returns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Audit & QC Process</h2>
          <div className="space-y-8">
            {[
              ["Pre-Audit Planning", "Define criteria, compliance benchmarks, and audit scope based on your product and market."],
              ["On-Site Factory Audit", "Assess supplier operations, workforce, quality systems, and certifications in person."],
              ["Audit Report & Risk Rating", "Receive a comprehensive scorecard with documentation, photos, and red flags highlighted."],
              ["In-Production QC", "Conduct inspections during key production stages to monitor quality and consistency."],
              ["Final Inspection & Approval", "Before shipping, verify the finished product matches specifications and passes all tests."]
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
            <h3 className="text-2xl font-bold mb-4">Want Trusted Partners and Verified Goods?</h3>
            <p className="text-muted-foreground mb-6">
              Let our audit and inspection experts protect your investment from day one.
            </p>
            <Button size="lg" className="bg-corporate-navy hover:bg-corporate-navy/90">
              Request a Supplier Audit
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SupplierAuditsQC;