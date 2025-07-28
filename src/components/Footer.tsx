import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-corporate-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MyrLink Ltd.</h3>
            <p className="text-blue-200 leading-relaxed mb-6">
              Your trusted partner for global product sourcing and procurement. 
              Bridging the gap between Asian manufacturers and businesses worldwide 
              with expertise, integrity, and results.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200 text-sm">Niagara Falls Innovation Hub, Ontario, Canada</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200 text-sm">+1 (365)-880-0155</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200 text-sm">info@myrlink.ca</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>
                <a href="/services/direct-factory-sourcing" className="hover:text-white transition-colors">
                  Direct Factory Sourcing
                </a>
              </li>
              <li>
                <a href="/services/custom-product-sourcing" className="hover:text-white transition-colors">
                  Custom Product Sourcing
                </a>
              </li>
              <li>
                <a href="/services/oem-odm-manufacturing" className="hover:text-white transition-colors">
                  OEM & ODM Manufacturing
                </a>
              </li>
              <li>
                <a href="/services/end-to-end-procurement" className="hover:text-white transition-colors">
                  End To End Procurement
                </a>
              </li>
              <li>
                <a href="/services/supplier-audits-qc" className="hover:text-white transition-colors">
                  Market Research
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-blue-200 text-sm">
              <div>Monday - Friday</div>
              <div className="font-medium">9:00 AM - 6:00 PM EST</div>
              <div className="mt-4">Extended hours available for Asian timezone coordination</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2025 MyrLink Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-blue-200 text-sm">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;