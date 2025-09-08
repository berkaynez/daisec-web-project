import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { 
  Zap, 
  Shield, 
  Crown, 
  CheckCircle,
  ArrowRight,
  Cpu,
  Wifi,
  Cloud,
  DollarSign,
  CreditCard,
  MessageSquare
} from 'lucide-react';

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for testing camera compatibility",
      icon: Zap,
      features: [
        "Live view only",
        "1-2 cameras",
        "No AI detection",
        "No recording",
        "Basic mobile app"
      ],
      cta: "Get Started Free",
      ctaTarget: "/support#contact",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Standard",
      price: isYearly ? "$8.49" : "$9.99",
      period: "per camera/month",
      description: "AI detection for supported cameras—no gateway required",
      icon: Shield,
      features: [
        "AI-powered detection",
        "Instant alerts",
        "30-day cloud storage",
        "Mobile notifications",
        "Email support",
        "No gateway required (supported cameras only)"
      ],
      cta: "Choose Standard",
      ctaTarget: "#checkout",
      variant: "cta" as const,
      popular: true
    },
    {
      name: "Gateway + Subscription",
      price: isYearly ? "$194" : "$140",
      period: isYearly ? "gateway + $5/month" : "gateway + $5/month",
      description: "Gateway device with reduced monthly cost",
      icon: Cpu,
      features: [
        "Raspberry Pi 4B + Coral USB",
        "Local AI processing",
        "Offline operation",
        "Unlimited cameras",
        "Local + cloud storage",
        "Priority support"
      ],
      cta: "Choose Gateway Deal",
      ctaTarget: "#checkout",
      variant: "cta" as const,
      popular: false
    },
    {
      name: "Premium All-In",
      price: isYearly ? "$21.25" : "$25",
      period: "per month",
      description: "Everything included with free gateway device",
      icon: Crown,
      features: [
        "Free gateway device",
        "Unlimited cameras",
        "Advanced AI models",
        "1-year cloud storage",
        "24/7 phone support",
        "Custom integrations"
      ],
      highlight: "Most Popular for New Installs",
      cta: "Choose Premium",
      ctaTarget: "#checkout",
      variant: "hero" as const,
      popular: false
    },
    {
      name: "One-Time Purchase",
      price: "$299",
      period: "lifetime",
      description: "Pay once, use forever with local processing",
      icon: Shield,
      features: [
        "Gateway device included",
        "Local AI processing",
        "No monthly fees ever",
        "Basic support included",
        "Offline operation"
      ],
      cta: "Buy Lifetime",
      ctaTarget: "#checkout",
      variant: "outline-cta" as const,
      popular: false
    }
  ];

  const handleCtaClick = (target: string) => {
    if (target.startsWith('#')) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(target);
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing - DaiSec</title>
        <meta name="description" content="DaiSec pricing plans: Free, Standard, Gateway + Subscription, Premium All-In, and One-Time Purchase. Choose the right plan for your security needs." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Simple, Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your <span className="text-destructive">Protection Level</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start free to test compatibility, then choose the plan that fits your needs. 
              All plans include AI detection and mobile alerts.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${!isYearly ? 'font-semibold' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
              <span className={`text-sm ${isYearly ? 'font-semibold' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                  Save 15%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative p-6 flex flex-col ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
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
                    <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.period}</div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.variant} 
                  className="w-full mt-auto" 
                  size="lg"
                  onClick={() => handleCtaClick(plan.ctaTarget)}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gateways Section */}
      <section id="gateways" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gateway Options</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the right gateway for your setup
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Raspberry Pi + Coral</h3>
              <p className="text-muted-foreground mb-4">Perfect for home users and small setups</p>
              <div className="text-2xl font-bold text-primary mb-4">$140</div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>1-2 cameras @ 5fps</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Easy setup</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Low power consumption</span>
                </li>
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/gateways')}
              >
                See Full Specs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Jetson Nano/Orin</h3>
              <p className="text-muted-foreground mb-4">Ideal for small businesses and larger setups</p>
              <div className="text-2xl font-bold text-primary mb-4">$299</div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>2-4 cameras @ 3fps</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>PoE support</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Advanced processing</span>
                </li>
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/gateways')}
              >
                See Full Specs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud-Only</h3>
              <p className="text-muted-foreground mb-4">No hardware required, direct camera connection</p>
              <div className="text-2xl font-bold text-primary mb-4">$0</div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>1-2 cameras @ 2fps</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Instant setup</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Automatic updates</span>
                </li>
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/gateways')}
              >
                See Full Specs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about DaiSec pricing
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Can I change my plan later?</h3>
              <p className="text-muted-foreground">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">What happens if I cancel?</h3>
              <p className="text-muted-foreground">
                You can cancel anytime with no penalties. Your service continues until the end of your billing period, and you'll retain access to your stored footage for 30 days.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact support for a full refund.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Checkout Stub */}
      <section id="checkout" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                This is a demo build. To proceed with your order, please contact our sales team.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => navigate('/support#contact')}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => navigate('/support#contact')}
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Talk to Expert
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;