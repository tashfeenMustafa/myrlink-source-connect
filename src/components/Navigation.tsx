import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const serviceItems = [
    {
      title: "Direct Factory Sourcing",
      href: "/services/direct-factory-sourcing",
      description: "Connect directly with manufacturers for better pricing and quality control."
    },
    {
      title: "Custom Product Sourcing",
      href: "/services/custom-product-sourcing",
      description: "Tailored sourcing solutions for your specific product requirements."
    },
    {
      title: "Quality Assurance",
      href: "/services/quality-assurance",
      description: "Comprehensive quality control and inspection services."
    },
    {
      title: "Logistics & Shipping",
      href: "/services/logistics-shipping",
      description: "End-to-end logistics solutions for your supply chain."
    },
    {
      title: "Market Research",
      href: "/services/market-research",
      description: "In-depth market analysis and supplier evaluation services."
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#about">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About Us
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <a href="#services">
                    Services
                    </a>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px]">
                      <div className="grid gap-2">
                        {serviceItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                          >
                            <div className="text-sm font-medium leading-none group-hover:underline">
                              {item.title}
                            </div>
                            <div className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {item.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#testimonials">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Testimonials
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#case-studies">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Case Studies
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#contact">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact Us
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>

              {/* Mobile Services Submenu */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-foreground mb-2">
                  <a
                    href="#services"
                    className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                </div>
                <div className="pl-4 space-y-1">
                  {serviceItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#testimonials"
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#case-studies"
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;