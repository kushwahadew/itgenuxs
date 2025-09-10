"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code2, Smartphone, Zap, Shield } from "lucide-react";
import Link from "next/link"; // ✅ FIXED for Next.js
import webDevHero from "@/assets/web-development-hero.png";

const WebDevelopment = () => {
  const features = [
    {
      icon: Code2,
      title: "Modern Tech Stack",
      description: "React, Node.js, TypeScript, and latest web technologies",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfect experience across all devices and screen sizes",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed, SEO, and user experience",
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Enterprise-grade security and scalability built-in",
    },
  ];

  const packages = [
    {
      name: "Starter Website",
      price: "$999",
      features: [
        "5-page responsive website",
        "Mobile-friendly design",
        "Basic SEO setup",
        "Contact form integration",
        "1 month support",
      ],
    },
    {
      name: "Business Website",
      price: "$2,499",
      features: [
        "10-page custom website",
        "Advanced animations",
        "CMS integration",
        "E-commerce ready",
        "Analytics setup",
        "3 months support",
      ],
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Performance optimization",
        "Ongoing maintenance",
        "Priority support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${webDevHero.src})` }} // ✅ Use .src for Next.js images
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Web <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              Custom, responsive websites built with modern technologies. From
              simple landing pages to complex web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our{" "}
              <span className="text-gradient">Web Development</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              We build websites that not only look great but perform
              exceptionally well
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-gradient">Package</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Transparent pricing for every business size
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`card-gradient p-8 rounded-2xl border border-card-border hover-lift animate-slide-up ${
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
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="text-gradient">Website</span>?
          </h2>
          <p className="text-xl text-foreground-secondary mb-8">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Project
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

export default WebDevelopment;
