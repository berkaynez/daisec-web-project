import { Button } from "@/components/ui/button";
import { Check, X, Zap, Camera, Wifi, DollarSign, Shield, Clock } from "lucide-react";

const competitors = [
  {
    name: "Traditional DVR Systems",
    features: [
      { text: "High hardware costs", available: false },
      { text: "Complex installation", available: false },
      { text: "Limited AI features", available: false },
      { text: "Poor mobile access", available: false }
    ]
  },
  {
    name: "New Smart Cameras",
    features: [
      { text: "Very expensive replacement", available: false },
      { text: "Waste existing cameras", available: false },
      { text: "Multiple brand compatibility", available: false },
      { text: "Scalability challenges", available: false }
    ]
  },
  {
    name: "DaiSec",
    features: [
      { text: "Reuse existing cameras", available: true },
      { text: "Plug-and-play Gateway", available: true },
      { text: "Advanced AI detection", available: true },
      { text: "Easy scaling & management", available: true }
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Lower Total Cost",
    description: "Reuse existing cameras with our Gateway devices. No expensive replacements needed."
  },
  {
    icon: Camera,
    title: "Multi-brand Support",
    description: "ONVIF/RTSP compatible with most IP cameras. Works with your existing setup."
  },
  {
    icon: Zap,
    title: "AI Where It Matters",
    description: "Advanced human & motion detection with smart notifications and event logs."
  },
  {
    icon: Clock,
    title: "Plug-and-Play Setup",
    description: "Connect Gateway to network, auto-discover cameras, start AI detection in minutes."
  }
];

export const WhyDifferentSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Revolutionary Technology
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why <span className="text-destructive">DaiSec</span> is Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't ask you to replace your cameras. We <strong className="text-foreground">upgrade</strong> them with <strong className="text-destructive">DaiSec</strong>. 
            Plug-and-play setup, AI detection, and cloud access for your existing IP/web cameras.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-card rounded-2xl border shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">See The Difference</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {competitors.map((competitor, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${
                competitor.name === "DaiSec" 
                  ? "border-destructive bg-destructive/5 scale-105" 
                  : "border-muted bg-muted/30"
              }`}>
                <h4 className={`text-lg font-bold mb-4 ${
                  competitor.name === "DaiSec" ? "text-destructive" : "text-muted-foreground"
                }`}>
                  {competitor.name}
                </h4>
                <div className="space-y-3">
                  {competitor.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {feature.available ? (
                        <Check className="w-5 h-5 text-destructive flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={feature.available ? "text-foreground" : "text-muted-foreground text-sm"}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-destructive/10 rounded-2xl p-6 mb-4 group-hover:bg-destructive/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-destructive mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bold Value Statement */}
        <div className="bg-gradient-to-r from-destructive to-destructive/80 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Your Existing Cameras. Smarter in Minutes.
            </h3>
            <p className="text-xl mb-8 opacity-90">
              DaiSec adds AI detection, cloud access, and mobile alerts to legacy cameras—
              simple setup, pro-grade reliability. Reuse, don't rebuy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-destructive hover:bg-white/90">
                <Shield className="w-5 h-5 mr-2" />
                Choose Your Gateway
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Wifi className="w-5 h-5 mr-2" />
                See Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};