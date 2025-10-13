
"use client"
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
// import FloatingAgent from "@/components/FloatingAgent";
import Roadmap from "../components/Roadmap";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <FloatingWhatsApp />
      {/* <FloatingAgent/> */}
    </div>
  );
};

export default Index;
