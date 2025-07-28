// Template-based page for Market Research
import { ArrowLeft, BarChart3, Search, Globe2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const MarketResearch = () => {
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
            <BarChart3 className="w-12 h-12 text-blue-300" />
            <div>
              <h1 className="text-4xl font-bold">Market Research</h1>
              <p className="text-blue-200 text-lg">Make data-driven sourcing and expansion decisions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Stay Ahead with Strategic Insights</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our Market Research services equip you with the intelligence needed to enter new markets, choose the right suppliers, and adapt your product strategy. With feet on the ground in Asia and access to global trends, we provide research that’s practical and timely.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Search className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Supplier Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identify and verify suppliers based on capability, pricing, and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Market Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access reports on product demand, competitive landscape, and seasonal shifts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Opportunity Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Find untapped markets and niches for expansion or new product launches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Research Process</h2>
          <div className="space-y-8">
            {[
              ["Discovery Call", "Understand your product goals and market interests."],
              ["Desk + Field Research", "Combine online research with local sourcing insights."],
              ["Supplier Profiling", "Shortlist vendors with performance, pricing, and capacity data."],
              ["Competitor & Trend Analysis", "Study demand cycles and competitive pricing."],
              ["Reporting & Recommendations", "Receive actionable insights tailored to your goals."]
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
            <BarChart3 className="w-16 h-16 text-corporate-navy mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Want Deeper Market Insights?</h3>
            <p className="text-muted-foreground mb-6">
              Let us help you explore your next opportunity with confidence.
            </p>
            <Button size="lg" className="bg-corporate-navy hover:bg-corporate-navy/90">
              Start Your Research
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MarketResearch;
