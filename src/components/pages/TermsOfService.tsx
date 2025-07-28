import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
            <FileText className="w-12 h-12 text-blue-300" />
            <div>
              <h1 className="text-4xl font-bold">Terms of Service</h1>
              <p className="text-blue-200 text-lg">Our service agreement and terms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="mb-8">
            <p className="text-muted-foreground">
              <strong>Last updated:</strong> January 2025
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the services of MyrLink Ltd. ("Company," "we," "our," or "us"),
              you agree to be bound by these Terms of Service ("Terms"). If you disagree with any
              part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Description of Services</h2>
            <p className="text-muted-foreground mb-4">
              MyrLink Ltd. provides product sourcing and procurement services, including:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Direct factory sourcing</li>
              <li>• Custom product sourcing and development</li>
              <li>• OEM/ODM manufacturing coordination</li>
              <li>• Supplier auditing and verification</li>
              <li>• Quality control and inspection services</li>
              <li>• Logistics and shipping coordination</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Service Agreements</h2>
            <p className="text-muted-foreground mb-4">
              Specific terms for each project will be outlined in separate service agreements.
              These terms include:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Project scope and deliverables</li>
              <li>• Pricing and payment terms</li>
              <li>• Timeline and milestones</li>
              <li>• Quality standards and specifications</li>
              <li>• Intellectual property rights</li>
              <li>• Liability and risk allocation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Client Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              As our client, you agree to:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Provide accurate and complete product specifications</li>
              <li>• Make timely payments as agreed</li>
              <li>• Respond promptly to requests for information or decisions</li>
              <li>• Comply with all applicable laws and regulations</li>
              <li>• Respect intellectual property rights of third parties</li>
              <li>• Provide necessary certifications and compliance documentation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Deposits may be required before work begins</li>
              <li>• Payments are due according to agreed milestones</li>
              <li>• Late payments may incur additional charges</li>
              <li>• All prices are subject to applicable taxes</li>
              <li>• Currency and payment methods will be specified per project</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              Intellectual property rights will be addressed as follows:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Client retains rights to their original designs and specifications</li>
              <li>• MyrLink retains rights to its methodologies and processes</li>
              <li>• Manufacturer rights will be clearly defined in agreements</li>
              <li>• Confidential information will be protected</li>
              <li>• Dispute resolution procedures are established</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quality Assurance</h2>
            <p className="text-muted-foreground">
              We strive to ensure product quality through our established processes. However,
              final responsibility for product compliance and quality rests with the client.
              We recommend independent testing and verification for critical applications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Our liability is limited to the fees paid for our services. We are not liable for
              indirect, consequential, or punitive damages. Specific liability limits will be
              outlined in individual service agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
            <p className="text-muted-foreground">
              We maintain strict confidentiality regarding client information, product designs,
              and business details. Non-disclosure agreements may be executed for sensitive projects.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Force Majeure</h2>
            <p className="text-muted-foreground">
              We are not liable for delays or failures due to circumstances beyond our reasonable
              control, including natural disasters, governmental actions, labor disputes, or
              supplier issues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground mb-4">
              Either party may terminate services under the following conditions:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Written notice as specified in service agreements</li>
              <li>• Immediate termination for material breach</li>
              <li>• Completion of project deliverables</li>
              <li>• Mutual agreement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
            <p className="text-muted-foreground">
              Disputes will be resolved through negotiation first, followed by mediation,
              and if necessary, arbitration under the laws of Ontario, Canada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of Ontario, Canada, and any disputes will
              be subject to the jurisdiction of Canadian courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. Changes will be effective
              upon posting to our website. Continued use of our services constitutes acceptance
              of modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold">MyrLink Ltd.</p>
              <p>Niagara Falls Innovation Hub</p>
              <p>Ontario, Canada</p>
              <p>Email: info@myrlink.ca</p>
              <p>Phone: +1 (365)-880-0155</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;