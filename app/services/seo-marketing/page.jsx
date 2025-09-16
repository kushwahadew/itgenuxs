"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { CheckCircle, Search, TrendingUp, Target, BarChart, Instagram, Facebook, Globe, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import seoHero from "@/assets/seo-marketing-hero.png";

const SEOMarketing = () => {
  const features = [
    {
      icon: Instagram,
      title: "Social Media Post Designing",
      description: "Up to 10 custom-designed posts for Facebook, Instagram, etc.",
    },
    {
      icon: Facebook,
      title: "Meta Ads Setup",
      description: "Facebook + Instagram ad campaign setup & basic management",
    },
    {
      icon: Search,
      title: "Google Ads Setup",
      description: "Setup of 1 Google Ads campaign (Search or Display)",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Performance tracking and detailed campaign analytics",
    },
  ];

  const digitalMarketingPackage = {
    name: "Digital Marketing Package",
    originalPrice: "₹7,000/-",
    discount: "₹2,000 Discount Applied",
    finalPrice: "₹5,000/- Only",
    services: [
      {
        service: "Social Media Post Designing",
        description: "Up to 10 custom-designed posts for Facebook, Instagram, etc.",
        included: true
      },
      {
        service: "Meta Ads Setup",
        description: "Facebook + Instagram ad campaign setup & basic management",
        included: true
      },
      {
        service: "Google Ads Setup",
        description: "Setup of 1 Google Ads campaign (Search or Display)",
        included: true
      }
    ],
    terms: [
      "50% advance payment is required to begin the project.",
      "Remaining 50% is payable after ad campaign setup.",
      "Ad spend (budget for Meta & Google Ads) is not included.",
      "One revision is allowed per creative design."
    ]
  };

  const packages = [
    {
      name: "Startup Marketing",
      price: "₹15,000/mo",
      features: [
        "Basic SEO optimization",
        "Social media setup",
        "Google My Business",
        "Monthly reports",
        "Email support",
      ],
    },
    {
      name: "Growth Marketing",
      price: "₹35,000/mo",
      features: [
        "Advanced SEO strategy",
        "PPC campaign management",
        "Social media marketing",
        "Content creation",
        "Weekly reports",
        "Phone support",
      ],
    },
    {
      name: "Enterprise Marketing",
      price: "Custom",
      features: [
        "Comprehensive marketing strategy",
        "Multi-platform campaigns",
        "Advanced analytics",
        "Dedicated account manager",
        "Custom reporting",
        "24/7 support",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${seoHero.src})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Digital <span className="text-gradient">Marketing</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto animate-fade-in">
            Complete digital marketing services including social media management, Meta & Google Ads setup, and creative designing.
          </p>
        </div>
      </section>

      {/* Special Package Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Special <span className="text-gradient">Digital Marketing Package</span>
            </h2>
            <p className="text-xl text-foreground-secondary animate-fade-in">
              Limited time offer - Save ₹2,000 on our comprehensive digital marketing package
            </p>
          </div>

          <div className="card-gradient p-8 rounded-2xl border-2 border-primary/30 hover-lift animate-fade-in">
            {/* Package Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{digitalMarketingPackage.name}</h3>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-2xl text-foreground-secondary line-through">{digitalMarketingPackage.originalPrice}</span>
                <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">
                  {digitalMarketingPackage.discount}
                </span>
              </div>
              <div className="text-5xl font-bold text-gradient mb-2">
                {digitalMarketingPackage.finalPrice}
              </div>
            </div>

            {/* Services Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="text-left py-3 px-4 font-semibold">Service</th>
                    <th className="text-left py-3 px-4 font-semibold">Description</th>
                    <th className="text-center py-3 px-4 font-semibold">Included</th>
                  </tr>
                </thead>
                <tbody>
                  {digitalMarketingPackage.services.map((item, index) => (
                    <tr key={index} className="border-b border-card-border/50">
                      <td className="py-4 px-4 font-medium">{item.service}</td>
                      <td className="py-4 px-4 text-foreground-secondary">{item.description}</td>
                      <td className="py-4 px-4 text-center">
                        {item.included && <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Price Breakdown */}
            <div className="bg-background-secondary rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold mb-4">Price Breakdown</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Standard Package Price</span>
                  <span className="font-semibold">₹7,000/-</span>
                </div>
                <div className="flex justify-between items-center text-green-600">
                  <span>Special Discount</span>
                  <span className="font-semibold">₹2,000/-</span>
                </div>
                <div className="border-t border-card-border pt-2 mt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Final Payable Amount</span>
                    <span className="text-gradient">₹5,000/- Only ✅</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="text-center">
              <Link href="/#contact">
                <Button size="lg" className="text-lg px-12 py-6">
                  Get This Package Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              What's <span className="text-gradient">Included</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto animate-fade-in">
              Comprehensive digital marketing services to boost your online presence
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

      {/* Additional Packages Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Monthly <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-xl text-foreground-secondary animate-fade-in">
              Ongoing digital marketing solutions for sustained growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`card-gradient p-8 rounded-2xl border border-card-border hover-lift animate-slide-up ${index === 1 ? "scale-105 border-primary/50" : ""
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary-light mb-4">
                    {pkg.price}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-light mr-3" />
                      <span className="text-foreground-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/#contact">
                  <Button
                    className="w-full"
                    variant={index === 1 ? "default" : "outline"}
                  >
                    Choose Plan
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to <span className="text-gradient">Boost Your Business</span>?
          </h2>
          <p className="text-xl text-foreground-secondary mb-8 animate-fade-in">
            Contact us today to discuss your digital marketing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link href="/#contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default SEOMarketing;