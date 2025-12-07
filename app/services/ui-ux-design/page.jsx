"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
// import FloatingAgent from "@/components/FloatingAgent";
import { Button } from "@/components/ui/button";
import { CheckCircle, Palette, Users, Eye, Lightbulb } from "lucide-react";
import Link from "next/link"; // ✅ Use Next.js Link
import uiuxHero from "@/assets/ui-ux-design-hero.png";

const UIUXDesign = () => {
  const features = [
    {
      icon: Users,
      title: "User Research",
      description: "Deep understanding of your users and their needs",
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Innovative designs that solve real problems",
    },
    {
      icon: Eye,
      title: "Visual Excellence",
      description: "Beautiful interfaces that captivate and engage",
    },
    {
      icon: Palette,
      title: "Design Systems",
      description: "Consistent, scalable design frameworks",
    },
  ];

  const packages = [
    {
      name: "UI Design",
      price: "Custom",
      features: [
        "5-10 screen designs",
        "Responsive layouts",
        "Style guide creation",
        "Asset preparation",
        "2 revision rounds",
      ],
    },
    {
      name: "Full UX/UI Package",
      price: "Custom",
      features: [
        "User research & personas",
        "Wireframes & prototypes",
        "Complete UI design",
        "Usability testing",
        "Design system creation",
        "Unlimited revisions",
      ],
    },
    {
      name: "Enterprise Design",
      price: "Custom",
      features: [
        "Comprehensive user research",
        "Advanced prototyping",
        "A/B testing setup",
        "Design team training",
        "Ongoing design support",
        "Priority consultation",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${uiuxHero.src})` }} // ✅ .src for Next.js images
          role="img"
          aria-label="UI/UX Design Hero Background"
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            UI/UX <span className="text-gradient">Design</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto animate-fade-in">
            Beautiful, intuitive designs that enhance user engagement and drive
            conversions through thoughtful user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Design Project
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
              Design That <span className="text-gradient">Converts</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto animate-fade-in">
              Our design process focuses on creating experiences that users love
              and businesses benefit from.
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
              Design <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-xl text-foreground-secondary animate-fade-in">
              Professional design services tailored to your needs
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
            Ready to Create Amazing <span className="text-gradient">Designs</span>?
          </h2>
          <p className="text-xl text-foreground-secondary mb-8">
            Let's design experiences that your users will love and remember
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Design Project
            </Button>
            <Link href="/#contact" passHref>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <span>Contact Us</span>
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

export default UIUXDesign;
