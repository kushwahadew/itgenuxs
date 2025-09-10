"use client";
import { Calendar, Building, DollarSign, ShoppingCart, MapPin } from "lucide-react";

const roadmapData = [
  {
    id: 1,
    title: "ITGenixs",
    date: "May 1, 2025",
    description:
      "ITGenixs Pvt. Ltd. launched, specializing in innovative software development solutions.",
    icon: Building,
    color: "bg-pink-500",
    borderColor: "border-pink-500/20",
    delay: "0.1s",
  },
  {
    id: 2,
    title: "Registration",
    date: "September 1, 2025",
    description: "ITGenixs Pvt. Ltd. officially registered with government.",
    icon: Calendar,
    color: "bg-green-500",
    borderColor: "border-green-500/20",
    delay: "0.2s",
  },
  {
    id: 3,
    title: "Funding",
    date: "December 1, 2025",
    description:
      "ITGenixs Pvt. Ltd. secured 5 cr funding for development expenses.",
    icon: DollarSign,
    color: "bg-purple-500",
    borderColor: "border-purple-500/20",
    delay: "0.3s",
  },
  {
    id: 4,
    title: "Shopping",
    date: "February 1, 2026",
    description:
      "ITGenixs Pvt. Ltd. will launch shopping portal, featuring IT sector products.",
    icon: ShoppingCart,
    color: "bg-orange-500",
    borderColor: "border-orange-500/20",
    delay: "0.4s",
  },
  {
    id: 5,
    title: "Branches",
    date: "May 1, 2026",
    description: "ITGenixs Pvt Ltd will open branches across India.",
    icon: MapPin,
    color: "bg-blue-500",
    borderColor: "border-blue-500/20",
    delay: "0.5s",
  },
];

const Roadmap = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background via-background/90 to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Follow our journey from inception to expansion across India
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Curved Path Background (visible only on md+) */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
            <svg
              viewBox="0 0 1200 300"
              className="w-full h-48 md:h-64 opacity-20"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M50 150 Q300 50 600 150 T1150 150"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,5"
                className="text-primary animate-[dash_2s_ease-in-out_infinite]"
              />
            </svg>
          </div>

          {/* Roadmap Items */}
          <div
            className="
              flex md:grid md:grid-cols-5 gap-8 relative z-10 
              overflow-x-auto md:overflow-visible pb-4 md:pb-0 
              scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent
            "
          >
            {roadmapData.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center flex-shrink-0 w-72 md:w-auto animate-slide-up hover-lift"
                  style={{ animationDelay: item.delay }}
                >
                  {/* Pin/Marker */}
                  <div className="relative mb-6">
                    <div
                      className={`
                        w-20 h-20 ${item.color} rounded-full 
                        flex items-center justify-center 
                        shadow-lg shadow-black/20
                        animate-bounce-in
                        hover:scale-110 transition-transform duration-300
                        border-4 border-background
                      `}
                      style={{ animationDelay: item.delay }}
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-800">
                          {item.id}
                        </span>
                      </div>
                    </div>

                    {/* Icon Badge */}
                    <div
                      className={`
                        absolute -bottom-2 -right-2 w-8 h-8 
                        bg-background ${item.borderColor} border-2 
                        rounded-full flex items-center justify-center
                        shadow-sm
                      `}
                    >
                      <IconComponent className="w-4 h-4 text-foreground" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="card-gradient p-6 rounded-2xl border border-card-border text-center max-w-xs h-64 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <div className="text-sm text-primary font-semibold mb-3 px-3 py-1 bg-primary/10 rounded-full inline-block">
                      {item.date}
                    </div>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
