import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Smartphone, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 hero-gradient animate-gradient-shift" />
      
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-2xl rotate-45 animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary/20 rounded-xl rotate-12 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-white/15 rounded-lg -rotate-12 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Businesses with{" "}
            <span className="text-gradient">Next-Gen IT Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with cutting-edge web development, mobile apps, AI software, and comprehensive digital marketing strategies.
          </p>
        </div>

        {/* Service Icons */}
        <div className="flex justify-center space-x-8 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-2 hover-lift">
              <Code className="w-8 h-8 text-primary-light" />
            </div>
            <span className="text-sm text-foreground-secondary">Web Dev</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-2 hover-lift">
              <Smartphone className="w-8 h-8 text-accent" />
            </div>
            <span className="text-sm text-foreground-secondary">Mobile Apps</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-2 hover-lift">
              <Zap className="w-8 h-8 text-primary-light" />
            </div>
            <span className="text-sm text-foreground-secondary">AI Software</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-bounce-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg" className="group">
            Get a Free Consultation
            <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
          </Button>
          <Button variant="outline-hero" size="lg">
            Explore Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;