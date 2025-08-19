import { Brain, Shield, Clock, Smartphone, AlertTriangle, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning distinguishes between family, pets, and real threats. No more barking dog alerts at 3 AM.",
    benefit: "95% fewer false alarms"
  },
  {
    icon: Clock,
    title: "Event-Based Recording",
    description: "Only records when something actually happens. Save storage, save money, catch what matters.",
    benefit: "10x storage efficiency"
  },
  {
    icon: Shield,
    title: "Instant Threat Response",
    description: "Real threats trigger immediate alerts with HD video evidence. Police respond 3x faster with video proof.",
    benefit: "3x faster response"
  },
  {
    icon: Smartphone,
    title: "Universal Camera Support",
    description: "Works with your existing cameras OR our premium hardware. One app controls everything seamlessly.",
    benefit: "Works with 200+ camera brands"
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "End-to-end encryption keeps your footage private. Only you have access - not even we can see it.",
    benefit: "Zero data breaches in 5 years"
  },
  {
    icon: AlertTriangle,
    title: "Smart Emergency Protocol",
    description: "Automatically contacts emergency services with your location and live video during break-ins.",
    benefit: "Average 4-minute response time"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Smart Homeowners Choose 
            <span className="text-primary"> SecureVision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional security systems annoy you with false alarms. 
            Ours uses AI to <strong className="text-foreground">actually protect what matters</strong>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-card border rounded-xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                {feature.benefit}
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Proof */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-card border rounded-full px-8 py-4 shadow-card">
            <div className="text-sm text-muted-foreground">Trusted by</div>
            <div className="text-2xl font-bold text-primary">50,000+</div>
            <div className="text-sm text-muted-foreground">happy customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};