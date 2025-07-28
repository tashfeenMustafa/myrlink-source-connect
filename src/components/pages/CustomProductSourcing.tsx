import { ArrowLeft, Package, Lightbulb, Users, Zap, Target, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../Navigation";
import Footer from "@/components/Footer";

const CustomProductSourcing = () => {
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
            <Package className="w-12 h-12 text-blue-300" />
            <div>
              <h1 className="text-4xl font-bold">Custom Product Sourcing</h1>
              <p className="text-blue-200 text-lg">Turn your ideas into reality with bespoke manufacturing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Bring Your Vision to Life</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether you have a unique product concept, need modifications to existing designs,
            or require specialized manufacturing solutions, our custom product sourcing service
            transforms your ideas into market-ready products.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transform concepts into prototypes with our network of innovative manufacturers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Exact specifications met through rigorous development and testing processes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fast-track your product development with our streamlined sourcing process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">What We Specialize In</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cog className="w-6 h-6" />
                  <span>Product Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Concept to prototype development</li>
                  <li>• Technical feasibility analysis</li>
                  <li>• Material selection and optimization</li>
                  <li>• Design for manufacturability</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-6 h-6" />
                  <span>Custom Manufacturing</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Small to large batch production</li>
                  <li>• Specialized tooling and molds</li>
                  <li>• Multi-material products</li>
                  <li>• Complex assembly requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-6 h-6" />
                  <span>Private Label</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Brand customization</li>
                  <li>• Packaging design and production</li>
                  <li>• Exclusive product variations</li>
                  <li>• Market positioning support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-6 h-6" />
                  <span>Product Modification</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Existing product improvements</li>
                  <li>• Feature additions or removals</li>
                  <li>• Cost optimization modifications</li>
                  <li>• Compliance adjustments</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Development Process</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-corporate-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Concept Analysis</h3>
                <p className="text-muted-foreground">Deep dive into your product vision, target market, and technical requirements.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-corporate-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Feasibility Study</h3>
                <p className="text-muted-foreground">Technical and commercial feasibility assessment with cost projections.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-corporate-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prototype Development</h3>
                <p className="text-muted-foreground">Create working prototypes and conduct testing and refinement cycles.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-corporate-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Production Setup</h3>
                <p className="text-muted-foreground">Establish manufacturing processes and quality control systems.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-corporate-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">5</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Market Launch</h3>
                <p className="text-muted-foreground">Support production scaling and market entry strategies.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-lg text-center">
              <h4 className="font-semibold">Consumer Electronics</h4>
            </div>
            <div className="bg-muted p-4 rounded-lg text-center">
              <h4 className="font-semibold">Home & Garden</h4>
            </div>
            <div className="bg-muted p-4 rounded-lg text-center">
              <h4 className="font-semibold">Health & Beauty</h4>
            </div>
            <div className="bg-muted p-4 rounded-lg text-center">
              <h4 className="font-semibold">Sports & Outdoor</h4>
            </div>
            <div className="bg-muted p-4 rounded-lg text-center">
              <h4 className="font-semibold">Automotive</h4>
            </div>
            <div className="bg-muted p-4 rounded-lg text-center">
              <h4 className="font-semibold">Industrial Equipment</h4>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-muted p-8 rounded-lg">
            <Lightbulb className="w-16 h-16 text-corporate-navy mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Have a Product Idea?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can turn your concept into a successful product.
            </p>
            <Button size="lg" className="bg-corporate-navy hover:bg-corporate-navy/90">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomProductSourcing;