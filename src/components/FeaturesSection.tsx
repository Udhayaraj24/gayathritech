import { Cog, Zap, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Precision Engineering",
    description: "Our machines are built with unparalleled accuracy and attention to detail.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Maximize productivity with industry-leading speed and efficiency.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Built to last with robust construction and minimal maintenance needs.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert technical assistance available around the clock.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium text-sm mb-4 tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for <span className="text-gradient-accent">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver industrial automation solutions that exceed expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:glow-primary transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
