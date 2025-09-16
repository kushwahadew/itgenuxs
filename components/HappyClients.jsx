"use client";
import Image from "next/image";

const clients = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations",
    image: "/client-sarah.png",
    review:
      "ITGenixs transformed our outdated website into a modern, efficient platform. The team was professional, responsive, and delivered beyond our expectations.",
  },
  {
    name: "Michael Chen",
    role: "CTO, Digital Solutions",
    image: "/client-michael.png",
    review:
      "Outstanding service and technical expertise. They completed our project on time and within budget. Highly recommended for any IT needs.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, StartUp Hub",
    image: "/client-priya.png",
    review:
      "The level of support and attention to detail from ITGenixs is exceptional. They truly understand business needs and deliver accordingly.",
  },
  // add more clients
];

const HappyClients = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-4 text-foreground">Happy Clients</h3>
        <p className="text-lg text-foreground-secondary mb-10 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients say about working with ITGenixs.
        </p>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex w-max animate-marquee hover:[animation-play-state:paused]"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm mx-3 flex-shrink-0 card-gradient p-6 rounded-2xl border border-card-border hover-lift"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary/20 relative">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-foreground font-semibold">{client.name}</div>
                    <div className="text-foreground-secondary text-sm">{client.role}</div>
                  </div>
                </div>
                <div className="flex text-primary-light mb-3">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-xl">
                      {star}
                    </span>
                  ))}
                </div>
                <p className="text-foreground-secondary italic">
                  "{client.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
