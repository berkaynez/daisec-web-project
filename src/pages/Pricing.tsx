import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeader } from '@/components/SectionHeader';
import { PlanCard } from '@/components/Pricing/PlanCard';
import { Calculator } from '@/components/Pricing/Calculator';
import { Accordion } from '@/components/Accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useHashScroll } from '@/hooks/useHashScroll';
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
  useHashScroll();
  const [isYearly, setIsYearly] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const yearlyDiscount = 0.15;

  const pricingPlans = [
    {
      name: "Free",
      price: isYearly ? "$0" : "$0",
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
      limitations: [
        "No alerts",
        "No cloud storage",
        "Community support only"
      ],
      cta: "Get Started Free",
      ctaTarget: "/support#contact",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Standard",
      price: isYearly ? `$${(9.99 * (1 - yearlyDiscount)).toFixed(2)}` : "$9.99",
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
      limitations: [
        "Limited to existing cameras",
        "Requires stable internet"
      ],
      cta: "Choose Standard",
      ctaTarget: "#checkout",
      variant: "cta" as const,
      popular: true
    },
    {
      name: "Gateway + Subscription",
      price: isYearly ? `$${(140 + (5 * 12 * (1 - yearlyDiscount))).toFixed(0)}` : "$140",
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
      price: isYearly ? `$${(25 * (1 - yearlyDiscount)).toFixed(2)}` : "$25",
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

  const gateways = [
    {
      name: 'Raspberry Pi + Coral',
      description: 'Perfect for home users and small setups',
      price: '$140',
      features: ['1-2 cameras @ 5fps', 'Easy setup', 'Low power consumption'],
      icon: Cpu
    },
    {
      name: 'Jetson Nano/Orin',
      description: 'Ideal for small businesses and larger setups',
      price: '$299',
      features: ['2-4 cameras @ 3fps', 'PoE support', 'Advanced processing'],
      icon: Wifi
    },
    {
      name: 'Cloud-Only',
      description: 'No hardware required, direct camera connection',
      price: '$0',
      features: ['1-2 cameras @ 2fps', 'Instant setup', 'Automatic updates'],
      icon: Cloud
    }
  ];

  const faqItems = [
    {
      id: '1',
      question: 'Can I change my plan later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      id: '2',
      question: 'What happens if I cancel?',
      answer: 'You can cancel anytime with no penalties. Your service continues until the end of your billing period, and you\'ll retain access to your stored footage for 30 days.'
    },
    {
      id: '3',
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, contact support for a full refund.'
    },
    {
      id: '4',
      question: 'How does the yearly discount work?',
      answer: 'Save 15% when you pay annually. The discount is automatically applied to your monthly rate, so you pay less per month.'
    },
    {
      id: '5',
      question: 'What cameras are supported?',
      answer: 'We support 200+ camera brands including Hikvision, Dahua, Axis, Bosch, and any ONVIF/RTSP compatible camera.'
    },
    {
      id: '6',
      question: 'Can I use my existing cameras?',
      answer: 'Absolutely! That\'s the main benefit of DaiSec. We upgrade your existing cameras with AI intelligence without requiring replacements.'
    }
  ];

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setShowCheckoutModal(true);
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
              <PlanCard
                key={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                limitations={plan.limitations}
                cta={plan.cta}
                ctaTarget={plan.ctaTarget}
                variant={plan.variant}
                popular={plan.popular}
                highlight={plan.highlight}
                icon={plan.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gateways Section */}
      <section id="gateways" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Gateway Options"
            description="Choose the right gateway for your setup"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {gateways.map((gateway, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <gateway.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{gateway.name}</h3>
                <p className="text-muted-foreground mb-4">{gateway.description}</p>
                <div className="text-2xl font-bold text-primary mb-4">{gateway.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {gateway.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = '/gateways'}
                >
                  See Full Specs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Cost Calculator"
            description="Estimate your monthly costs based on your setup"
          />
          
          <div className="max-w-4xl mx-auto">
            <Calculator />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Everything you need to know about DaiSec pricing"
          />
          
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Checkout Stub */}
      <section id="checkout" className="py-20">
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
                  onClick={() => setShowCheckoutModal(true)}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.location.href = '/support'}
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Talk to Expert
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="p-8 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Demo Build</h3>
            <p className="text-muted-foreground mb-6">
              This is a demonstration build. To proceed with your order for <strong>{selectedPlan}</strong>, 
              please contact our sales team.
            </p>
            <div className="space-y-3">
              <Button 
                className="w-full"
                onClick={() => window.location.href = '/support#contact'}
              >
                Contact Sales Team
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowCheckoutModal(false)}
              >
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Pricing;
