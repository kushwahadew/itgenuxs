"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
// import FloatingAgent from "@/components/FloatingAgent";
import { Button } from "@/components/ui/button";
import { CheckCircle, Smartphone, Apple, MonitorSpeaker, Zap } from "lucide-react";
import Link from "next/link"; // ✅ Use Next.js Link
import mobileDevHero from "@/assets/mobile-development-hero.png";

const MobileDevelopment = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "React Native & Flutter for iOS and Android",
    },
    {
      icon: Apple,
      title: "Native Performance",
      description: "Native iOS and Android development for maximum performance",
    },
    {
      icon: MonitorSpeaker,
      title: "App Store Ready",
      description: "Complete deployment and app store optimization",
    },
    {
      icon: Zap,
      title: "Fast Development",
      description: "Rapid prototyping and agile development process",
    },
  ];

  const packages = [
    {
      name: "MVP App",
      price: "Custom",
      features: [
        "Cross-platform app (iOS & Android)",
        "5-10 core features",
        "Basic UI/UX design",
        "App store deployment",
        "3 months support",
      ],
    },
    {
      name: "Business App",
      price: "Custom",
      features: [
        "Advanced features & integrations",
        "Custom UI/UX design",
        "Backend API development",
        "Push notifications",
        "Analytics integration",
        "6 months support",
      ],
    },
    {
      name: "Enterprise App",
      price: "Custom",
      features: [
        "Complex functionality",
        "Multiple platform support",
        "Advanced security features",
        "Scalable architecture",
        "Ongoing maintenance",
        "Priority support",
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
          style={{ backgroundImage: `url(${mobileDevHero.src})` }} // ✅ use .src for Next image imports
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Mobile App <span className="text-gradient">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto animate-fade-in">
            Native and cross-platform mobile applications that deliver exceptional
            user experiences on iOS and Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your App
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Mobile App <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto animate-fade-in">
              From concept to app store, we create mobile experiences that users love.
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
              App Development <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-xl text-foreground-secondary animate-fade-in">
              Choose the perfect package for your mobile app vision
            </p>
          </div>

          {/* Scrollable on small screens */}
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
            Ready to Launch Your <span className="text-gradient">Mobile App</span>?
          </h2>
          <p className="text-xl text-foreground-secondary mb-8 animate-fade-in">
            Transform your idea into a successful mobile application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your App
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
      {/* <FloatingAgent/> */}
    </div>
  );
};

export default MobileDevelopment;
