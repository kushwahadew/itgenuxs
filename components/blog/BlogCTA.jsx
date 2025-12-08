import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const BlogCTA = ({ onContactClick }) => {
  return (
    <section className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-8 p-8 md:p-12 rounded-3xl bg-gradient-card border border-border shadow-glow">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Calendar className="w-8 h-8 text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Need Help Implementing These Ideas?
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Turn these blog tips into real growth. Book a free 20-minute call with ITGENIXS and get a simple action plan for your business.
          </p>

          {/* CTA Button */}
          <Button variant="cta" size="xl" onClick={onContactClick}>
            Book Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Button>

          {/* Trust Indicator */}
          <p className="text-sm text-muted-foreground">
            🎯 No commitment required • 100% free consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
