import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
            <Shield className="w-12 h-12 text-blue-300" />
            <div>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-blue-200 text-lg">How we protect and handle your information</p>
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
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              MyrLink Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              myrlink.ca or engage our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="text-muted-foreground space-y-1 mb-4">
              <li>• Name and contact information (email, phone, address)</li>
              <li>• Company information and job title</li>
              <li>• Product specifications and sourcing requirements</li>
              <li>• Communication preferences</li>
              <li>• Payment and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• IP address and geographic location</li>
              <li>• Browser type and device information</li>
              <li>• Pages visited and time spent on site</li>
              <li>• Referral sources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• To provide and improve our sourcing and procurement services</li>
              <li>• To communicate with you about your projects and inquiries</li>
              <li>• To send updates about our services and industry insights</li>
              <li>• To process payments and manage accounts</li>
              <li>• To comply with legal obligations and protect our rights</li>
              <li>• To analyze website usage and improve user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share
              information in the following circumstances:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• With trusted manufacturing partners to fulfill your sourcing requests</li>
              <li>• With service providers who assist in our operations (payment processors, logistics)</li>
              <li>• When required by law or to protect our legal rights</li>
              <li>• In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Right to access and receive a copy of your data</li>
              <li>• Right to rectify inaccurate or incomplete information</li>
              <li>• Right to delete your personal information</li>
              <li>• Right to restrict or object to data processing</li>
              <li>• Right to data portability</li>
              <li>• Right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience
              and analyze site usage. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground">
              As we work with global suppliers and partners, your information may be transferred to and
              processed in countries other than your own. We ensure appropriate safeguards are in place
              for such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not directed to individuals under 18 years of age. We do not knowingly
              collect personal information from children under 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;