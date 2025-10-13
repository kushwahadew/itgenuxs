"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
// import FloatingAgent from "@/components/FloatingAgent";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code2, Smartphone, Zap, Shield, Globe, Phone, Mail, ShoppingCart, Search, BarChart, MessageSquare } from "lucide-react";
import Link from "next/link";
import webDevHero from "@/assets/web-development-hero.png";

const WebDevelopment = () => {
  const features = [
    {
      icon: Code2,
      title: "WordPress & Shopify",
      description: "Professional websites with modern CMS solutions",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect experience across all devices and screen sizes",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built-in SEO setup for better search rankings",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Ready",
      description: "Complete online store with product management",
    },
  ];

  const packages = [
    {
      name: "Basic Package",
      priceRange: "₹10,000 – ₹15,000",
      features: [
        "WordPress / Shopify Website (Up to 5 Pages)",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Product Listing (10 items)",
        "1-Month Support",
      ],
      highlight: false,
    },
    {
      name: "Standard Package",
      priceRange: "₹18,000 – ₹25,000",
      features: [
        "Dynamic Website (up to 10 Pages)",
        "On-Page SEO",
        "Product Listing (up to 30 items)",
        "Google My Business Setup",
        "1 Month Social Media Posting",
      ],
      highlight: true,
    },
    {
      name: "Premium Package",
      priceRange: "₹28,000 – ₹40,000",
      features: [
        "Ecommerce or Business Website",
        "Advanced SEO (On-page + Off-page)",
        "Product Catalog Listing",
        "Meta & Google Ads Setup",
        "Monthly Reporting & Support",
      ],
      highlight: false,
    },
  ];

  const addOns = [
    {
      icon: Globe,
      title: "Domain & Hosting Setup",
      description: "Complete domain registration and hosting configuration"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Integration",
      description: "Direct customer communication through WhatsApp"
    },
    {
      icon: Smartphone,
      title: "Social Media Account Setup",
      description: "Professional social media presence setup"
    },
    {
      icon: BarChart,
      title: "Google Analytics & Search Console",
      description: "Complete tracking and analytics implementation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${webDevHero.src})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Website & <span className="text-gradient">Digital Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              Professional WordPress, Shopify & custom websites with complete digital solutions. From basic websites to advanced e-commerce platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our{" "}
              <span className="text-gradient">Web Development</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              We build websites that not only look great but perform exceptionally well
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-gradient p-6 rounded-xl border border-card-border hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-24 px-6 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Service <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Comprehensive website solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`card-gradient p-8 rounded-2xl border hover-lift animate-slide-up ${pkg.highlight ? "scale-105 border-primary/50 border-2" : "border-card-border"
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-primary to-primary-light text-white text-sm px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary-light mb-4">
                    {pkg.priceRange}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-light mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/#contact">
                  <Button
                    className="w-full"
                    variant={pkg.highlight ? "default" : "outline"}
                  >
                    Choose This Package
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-bold mb-3 text-yellow-800">Important Notes:</h4>
            <ul className="space-y-2 text-yellow-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span className="text-sm">Final price depends on customization and project scope.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span className="text-sm">50% advance payment required to start the project.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span className="text-sm">Delivery timeline: 7 to 15 working days (based on package).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Available <span className="text-gradient">Add-ons</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Enhance your website with additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={addon.title}
                className="card-gradient p-6 rounded-xl border border-card-border hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <addon.icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">{addon.title}</h3>
                <p className="text-foreground-secondary text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="text-gradient">Website</span>?
          </h2>
          <p className="text-xl text-foreground-secondary mb-8">
            Get a professional website that drives results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link href="/#contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      {/* <FloatingAgent/> */}
    </div>
  );
};

export default WebDevelopment;