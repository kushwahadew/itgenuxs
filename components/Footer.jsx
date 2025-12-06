
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";  // ✅ Next.js Link

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1G8XgseZ9V/", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/itgenix-technology-pvt-ltd/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/itgenixs_pvt.ltd?igsh=MnBpejAwNGsyZzl4", label: "Instagram" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
    { name: "Privacy Policy", href: "tncandpp/PrivacyPolicy" },
    { name: "Terms of Service", href: "tncandpp/TermsAndConditions" }
  ];

  const services = [
    { name: "Website Development", link: "/services/web-development" },
    { name: "Mobile App Development", link: "/services/mobile-development" },
    { name: "UI/UX Design", link: "/services/ui-ux-design" },
    { name: "SEO & Digital Marketing", link: "/services/seo-marketing" },
    { name: "AI Software Solutions", link: "/services/ai-solutions" },
    { name: "Graphic Design", link: "/services/graphic-design" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully! 🚀");
  };

  return (
    <footer className="bg-background border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">ITGenixs</h3>
              <p className="text-foreground-secondary leading-relaxed">
                Empowering businesses with next-generation IT solutions. 
                Your trusted partner for digital transformation.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-foreground-secondary">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@itgenixs.com</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground-secondary">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+91 9471357164</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground-secondary">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Ranchi, Jharkhand, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}  // ✅ Use href instead of to
                      className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.link}  // ✅ Use href instead of to
                    className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-foreground-secondary hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div>
              <p className="text-sm text-foreground-secondary mb-4">
                Stay updated with our latest news and offers
              </p>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="flex-1 px-3 py-2 bg-card border border-card-border rounded-lg text-sm focus:outline-none focus:border-primary"
                  required
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-foreground-secondary text-center md:text-left">
              © {currentYear} ITGenixs Pvt. Ltd. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm text-foreground-secondary">
              <Link href="tncandpp/PrivacyPolicy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="tncandpp/TermsAndConditions" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
