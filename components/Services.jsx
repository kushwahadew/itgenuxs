import { 
  Code2, 
  Smartphone, 
  Palette, 
  Search, 
  Brain, 
  PenTool, 
  Globe, 
  MessageSquare, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies like React, Node.js, and cloud deployment.",
    features: ["MERN Stack", "Responsive Design", "SEO Optimized"],
    link: "/services/web-development"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    features: ["React Native", "Flutter", "Native iOS/Android"],
    link: "/services/mobile-development"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user engagement and drive conversions.",
    features: ["User Research", "Prototyping", "Design Systems"],
    link: "/services/ui-ux-design"
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Comprehensive SEO, SMO, and SMM strategies to boost your online visibility and growth.",
    features: ["SEO Optimization", "Social Media", "PPC Campaigns"],
    link: "/services/seo-marketing"
  },
  {
    icon: Brain,
    title: "AI Software Solutions",
    description: "Cutting-edge AI and machine learning solutions to automate processes and enhance decision-making.",
    features: ["Machine Learning", "AI Automation", "Data Analytics"],
    link: "/services/ai-solutions"
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Creative visual solutions including branding, marketing materials, and digital graphics.",
    features: ["Brand Identity", "Marketing Materials", "Digital Graphics"],
    link: "/services/graphic-design"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Comprehensive IT solutions designed to elevate your business and drive digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-gradient p-8 rounded-2xl border border-card-border hover-lift hover-glow group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-8 h-8 text-primary-light" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              
              <p className="text-foreground-secondary mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-foreground-secondary">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <Link href={service.link} passHref>
                <Button as="a" variant="outline" size="sm" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center space-x-2 text-foreground-secondary">
            <Globe className="w-5 h-5" />
            <span>Ready to transform your business?</span>
            <MessageSquare className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
