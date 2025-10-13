"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingAgent from "@/components/FloatingAgent";
import { Button } from "@/components/ui/button";
import { CheckCircle, Palette, Layers, Image as ImageIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import graphicHero from "@/assets/graphic-design-hero.png";

const GraphicDesign = () => {
  const features = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Logos, color schemes, and complete brand packages",
    },
    {
      icon: ImageIcon,
      title: "Marketing Materials",
      description: "Brochures, flyers, and promotional graphics",
    },
    {
      icon: Layers,
      title: "Digital Graphics",
      description: "Social media graphics and web assets",
    },
    {
      icon: Sparkles,
      title: "Creative Concepts",
      description: "Unique visual solutions for every project",
    },
  ];

  const packages = [
    {
      name: "Brand Starter",
      price: "$799",
      features: [
        "Logo design (3 concepts)",
        "Business card design",
        "Letterhead design",
        "Basic brand guidelines",
        "2 revision rounds",
      ],
    },
    {
      name: "Complete Branding",
      price: "$2,299",
      features: [
        "Complete brand identity",
        "Marketing materials package",
        "Social media templates",
        "Brand style guide",
        "Print-ready files",
        "Unlimited revisions",
      ],
    },
    {
      name: "Enterprise Branding",
      price: "Custom",
      features: [
        "Comprehensive brand strategy",
        "Multi-platform materials",
        "Advanced brand guidelines",
        "Team training materials",
        "Ongoing design support",
        "Priority service",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={graphicHero}
            alt="Graphic Design Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Graphic <span className="text-gradient">Design</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              Creative visual solutions including branding, marketing materials, and digital graphics that make your business stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Design Project
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
              Creative <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              From concept to creation, we deliver visual designs that communicate your brand's unique story
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
              Design <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Professional design services for every budget and requirement
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

                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
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
            Ready to Create <span className="text-gradient">Visual Impact</span>?
          </h2>
          <p className="text-xl text-foreground-secondary mb-8">
            Let's design visuals that capture attention and communicate your brand effectively
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Design Project
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
      <FloatingAgent/>
    </div>
  );
};

export default GraphicDesign;
