import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle } from "lucide-react";

const heroBadges = [
  "Local SEO for Ranchi",
  "Website Design & Speed",
  "Google Ads & Case Studies",
];

const BlogHero = ({ onContactClick, onScrollToBlogs }) => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Brand Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">ITGENIXS Digital Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Digital Marketing & SEO Tips for{" "}
            <span className="text-gradient-primary">Ranchi Businesses</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            8 short, practical blogs written for local businesses in Jharkhand. Learn how to rank higher on Google, speed up your website and grow on a small budget.
          </p>

          {/* Hero Badges */}
          <div className="flex flex-wrap justify-center gap-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {heroBadges.map((badge, index) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border hover:border-primary/50 transition-colors cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" onClick={onContactClick}>
              <MessageCircle className="w-5 h-5" />
              Talk to a Digital Expert
            </Button>
            <Button variant="heroOutline" size="xl" onClick={onScrollToBlogs}>
              Read Latest Blogs
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
