import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, Shield } from "lucide-react";

const pricingPlans = [
  {
    name: "Free Plan",
    price: "$0",
    period: "forever",
    description: "Basic live view for budget-conscious users",
    icon: Shield,
    features: [
      "Live view only",
      "1-2 cameras supported",
      "Basic mobile app",
      "Community support"
    ],
    limitations: [
      "No AI detection",
      "No recording",
      "Limited camera compatibility"
    ],
    cta: "Start Free",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Standard Plan",
    price: "$14.99",
    period: "per camera/month",
    description: "Connect supported IP cameras directly—no gateway required",
    icon: Zap,
    features: [
      "AI-powered detection",
      "Event-based recording",
      "30-day cloud storage",
      "Mobile alerts",
      "Email support",
      "No gateway required (supported cameras only)"
    ],
    limitations: [
      "Limited to existing cameras",
      "Limited camera compatibility",
      "No hardware included"
    ],
    cta: "Choose Standard",
    variant: "default" as const,
    popular: false
  },
  {
    name: "Gateway + Subscription",
    price: "$140",
    originalPrice: "$200",
    period: "gateway + $5/month",
    description: "Best value with our smart gateway",
    icon: Star,
    features: [
      "Smart gateway device included",
      "Works with ANY camera brand",
      "AI detection & recording",
      "Unlimited cloud storage",
      "Priority support",
      "Mobile + web access"
    ],
    cta: "Get Gateway Deal",
    variant: "cta" as const,
    popular: true
  },
  {
    name: "Premium All-In",
    price: "$0",
    period: "hardware + $25/month",
    description: "Complete system with premium hardware",
    icon: Crown,
    features: [
      "FREE gateway device ($200 value)",
      "Premium camera hardware",
      "Advanced AI analytics",
      "Unlimited everything",
      "24/7 monitoring support",
      "Professional installation"
    ],
    cta: "Go Premium",
    variant: "hero" as const,
    popular: false,
    highlight: "Most Popular for New Installs"
  },
  {
    name: "One-Time Purchase",
    price: "$340",
    period: "lifetime access",
    description: "Own it forever with no monthly fees",
    icon: Shield,
    features: [
      "Gateway device included",
      "Lifetime software access",
      "Local storage only",
      "One-time payment",
      "No monthly fees ever",
      "Basic support included"
    ],
    cta: "Buy Lifetime",
    variant: "outline-cta" as const,
    popular: false
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Protection Level</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From basic monitoring to complete security systems - find the perfect fit for your home and budget.
          </p>
          
          {/* Limited Time Offer Banner */}
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold animate-pulse">
            <Zap className="w-4 h-4" />
            <span>Limited Time: 30% off first 3 months!</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card border rounded-2xl p-6 shadow-pricing hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    {plan.highlight}
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through mb-1">
                      {plan.originalPrice}
                    </div>
                  )}
                  <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
                
                {plan.savings && (
                  <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                    {plan.savings}
                  </div>
                )}
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                
                {plan.limitations && (
                  <>
                    <li className="border-t pt-3 mt-3">
                      <span className="text-xs text-muted-foreground font-medium">Limitations:</span>
                    </li>
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground">•</div>
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </>
                )}
              </ul>
              
              <Button 
                variant={plan.variant} 
                className="w-full" 
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Money Back Guarantee */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-card border rounded-2xl px-8 py-6 shadow-card">
            <Shield className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="font-semibold text-foreground">30-Day Money-Back Guarantee</div>
              <div className="text-sm text-muted-foreground">Not satisfied? Get a full refund, no questions asked.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};