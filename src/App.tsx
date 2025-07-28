import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DirectFactorySourcing from "./components/pages/DirectFactorySourcing";
import CustomProductSourcing from "./components/pages/CustomProductSourcing";
import OEMODMManufacturing from "./components/pages/OEMODMManufacturing";
import EndToEndProcurement from "./components/pages/EndToEndProcurement";
import SupplierAuditsQC from "./components/pages/SupplierAuditsQC";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfService from "./components/pages/TermsOfService";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/direct-factory-sourcing" element={<DirectFactorySourcing />} />
          <Route path="/services/custom-product-sourcing" element={<CustomProductSourcing />} />
          <Route path="/services/oem-odm-manufacturing" element={<OEMODMManufacturing />} />
          <Route path="/services/end-to-end-procurement" element={<EndToEndProcurement />} />
          <Route path="/services/supplier-audits-qc" element={<SupplierAuditsQC />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
