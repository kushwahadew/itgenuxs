"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
// import FloatingAgent from "@/components/FloatingAgent";
import { Button } from "@/components/ui/button";
import { CheckCircle, Brain, Cpu, Zap, Bot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import aiHero from "@/assets/ai-solutions-hero.png";

const AISolutions = () => {
  const features = [
    { icon: Brain, title: "Machine Learning", description: "Advanced ML models for predictive analytics" },
    { icon: Bot, title: "AI Automation", description: "Intelligent automation of business processes" },
    { icon: Cpu, title: "Data Analytics", description: "Deep insights from your business data" },
    { icon: Zap, title: "Real-time Processing", description: "Lightning-fast AI-powered decision making" },
  ];

  const packages = [
    {
      name: "AI Starter",
      price: "Custom",
      features: ["Basic AI model development", "Data preprocessing", "Simple automation", "Performance monitoring", "3 months support"],
    },
    {
      name: "AI Business Suite",
      price: "Custom",
      features: ["Advanced ML algorithms", "Custom AI integrations", "Process automation", "Real-time analytics", "API development", "6 months support"],
    },
    {
      name: "Enterprise AI",
      price: "Custom",
      features: ["Complex AI ecosystems", "Multi-model deployment", "Advanced security", "Scalable infrastructure", "Ongoing optimization", "24/7 support"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={aiHero}
            alt="AI Solutions Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              Cutting-edge AI and machine learning solutions to automate
              processes and enhance decision-making for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Explore AI Solutions
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                AI Consultation
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
              Intelligent <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Transform your business with AI solutions that learn, adapt, and optimize
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
              AI <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Intelligent solutions designed to scale with your business
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
                  <div className="text-4xl font-bold text-primary-light mb-4">{pkg.price}</div>
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
            Ready to Harness <span className="text-gradient">AI Power</span>?
          </h2>
          <p className="text-xl text-foreground-secondary mb-8">
            Let's build intelligent solutions that transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">Start AI Project</Button>
            <Link href="/#contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">Contact Us</Button>
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

export default AISolutions;