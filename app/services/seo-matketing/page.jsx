"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { CheckCircle, Search, TrendingUp, Target, BarChart } from "lucide-react";
import Link from "next/link"; // ✅ Next.js Link
import seoHero from "@/assets/seo-marketing-hero.png";

const SEOMarketing = () => {
  const features = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve search rankings and organic visibility",
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Engaging social campaigns across all platforms",
    },
    {
      icon: Target,
      title: "PPC Campaigns",
      description: "Targeted advertising for immediate results",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Data-driven insights and performance tracking",
    },
  ];

  const packages = [
    {
      name: "Startup Marketing",
      price: "$999/mo",
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
      price: "$2,499/mo",
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
          style={{ backgroundImage: `url(${seoHero.src})` }} // ✅ use .src
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            SEO & Digital <span className="text-gradient">Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto animate-fade-in">
            Comprehensive SEO, SMO, and SMM strategies to boost your online visibility and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-6">
              Boost Your Visibility
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Get Free Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Digital Marketing <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto animate-fade-in">
              Data-driven strategies that deliver measurable results and sustainable growth
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

      {/* Pricing Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Marketing <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-xl text-foreground-secondary animate-fade-in">
              Choose the perfect marketing strategy for your business goals
            </p>
          </div>

          {/* Scrollable on mobile */}
          <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`snap-center min-w-[300px] md:min-w-0 card-gradient p-8 rounded-2xl border border-card-border hover-lift animate-slide-up ${
                  index === 1 ? "scale-105 border-primary/50" : ""
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

                <Button
                  className="w-full"
                  variant={index === 1 ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Dominate <span className="text-gradient">Search Results</span>?
          </h2>
          <p className="text-xl text-foreground-secondary mb-8 animate-fade-in">
            Let's create a digital marketing strategy that drives real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Marketing Campaign
            </Button>
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
