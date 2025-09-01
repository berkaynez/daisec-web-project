import { Button } from "@/components/ui/button";
import { Check, X, Zap, Camera, Wifi, DollarSign, Shield, Clock } from "lucide-react";

const competitors = [
  {
    name: "Traditional Security Systems",
    features: [
      { text: "Requires new cameras", available: false },
      { text: "Expensive hardware installation", available: false },
      { text: "Monthly monitoring fees", available: false },
      { text: "Complex setup process", available: false }
    ]
  },
  {
    name: "DaiSec Solution",
    features: [
      { text: "Works with existing cameras", available: true },
      { text: "No additional hardware needed", available: true },
      { text: "Direct cloud connection", available: true },
      { text: "5-minute setup", available: true }
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Save Thousands",
    description: "No need to replace your existing IP cameras or buy expensive hubs"
  },
  {
    icon: Camera,
    title: "Extend Camera Life",
    description: "Transform any old IP camera into a smart AI-powered security device"
  },
  {
    icon: Zap,
    title: "Instant AI Detection",
    description: "Human and motion detection with real-time notifications to your phone"
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Connect directly to cloud in under 5 minutes - no technical skills required"
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
            Why We're <span className="text-destructive">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlike other solutions that force you to buy new cameras, DaiSec works with your existing IP cameras. 
            <strong className="text-foreground"> No hubs. No gateways. Just direct cloud connection.</strong>
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-card rounded-2xl border shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">See The Difference</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {competitors.map((competitor, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${
                competitor.name === "DaiSec Solution" 
                  ? "border-destructive bg-destructive/5" 
                  : "border-muted bg-muted/30"
              }`}>
                <h4 className={`text-xl font-bold mb-4 ${
                  competitor.name === "DaiSec Solution" ? "text-destructive" : "text-muted-foreground"
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
                      <span className={feature.available ? "text-foreground" : "text-muted-foreground"}>
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
              Stop Buying New Cameras. Start Using What You Have.
            </h3>
            <p className="text-xl mb-8 opacity-90">
              DaiSec is the only solution that connects your existing IP cameras directly to the cloud 
              without any additional hardware. Save money, reduce waste, and get AI-powered security today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-destructive hover:bg-white/90">
                <Shield className="w-5 h-5 mr-2" />
                Test Your Cameras Now
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Wifi className="w-5 h-5 mr-2" />
                See Compatibility
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};