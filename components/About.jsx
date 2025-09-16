import { Target, Eye } from "lucide-react";
import Image from "next/image";
import HappyClients from "./HappyClients";

const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">ITGenixs</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Founded in 2025, ITGenixs Pvt. Ltd. is dedicated to providing affordable, advanced technology solutions that empower businesses to thrive in the digital age.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="card-gradient p-8 rounded-2xl border border-card-border hover-lift animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-foreground-secondary leading-relaxed">
              To democratize advanced technology by making cutting-edge IT solutions accessible and affordable for businesses of all sizes. We bridge the gap between innovation and implementation, ensuring every organization can leverage the power of modern technology to achieve their goals.
            </p>
          </div>

          {/* Vision */}
          <div
            className="card-gradient p-8 rounded-2xl border border-card-border hover-lift animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-foreground-secondary leading-relaxed">
              To become the leading IT partner in India and beyond, recognized for our innovation, reliability, and commitment to client success. We envision a future where technology barriers are eliminated, and every business can compete at the highest level.
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-bounce-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2025</div>
            <div className="text-foreground-secondary">Founded</div>
          </div>
          <div className="text-center animate-bounce-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50+</div>
            <div className="text-foreground-secondary">Projects</div>
          </div>
          <div className="text-center animate-bounce-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-foreground-secondary">Support</div>
          </div>
          <div className="text-center animate-bounce-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-foreground-secondary">Satisfaction</div>
          </div>
        </div>

        {/* Expert Team Section */}
        <div className="mb-16">
          <div
            className="text-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-3xl font-bold mb-4 text-foreground">Our Expert Team</h3>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Meet our passionate team of developers, designers, and digital strategists who bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div
              className="card-gradient p-6 rounded-2xl border border-card-border hover-lift animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20 relative">
                <Image
                  src="/team-developer.png"
                  alt="Development Team"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2 text-center">
                Development Team
              </h4>
              <p className="text-foreground-secondary text-center">
                Full-stack developers specializing in modern web technologies and scalable solutions.
              </p>
            </div>

            {/* Team Member 2 */}
            <div
              className="card-gradient p-6 rounded-2xl border border-card-border hover-lift animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20 relative">
                <Image
                  src="/team-designer.png"
                  alt="Design Team"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2 text-center">
                Design Team
              </h4>
              <p className="text-foreground-secondary text-center">
                Creative designers focused on user experience and beautiful, functional interfaces.
              </p>
            </div>

            {/* Team Member 3 */}
            <div
              className="card-gradient p-6 rounded-2xl border border-card-border hover-lift animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20 relative">
                <Image
                  src="/team-strategist.png"
                  alt="Strategy Team"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2 text-center">
                Strategy Team
              </h4>
              <p className="text-foreground-secondary text-center">
                Digital strategists who align technology solutions with business objectives.
              </p>
            </div>
          </div>
        </div>

        {/* Happy Clients Section */}
      
          <HappyClients />
      </div>
    </section>
  );
};

export default About;
