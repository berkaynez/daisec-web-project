import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  limitations?: string[];
  cta: string;
  ctaTarget: string;
  variant: 'default' | 'hero' | 'cta' | 'outline-cta';
  popular?: boolean;
  highlight?: string;
  originalPrice?: string;
  savings?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  limitations,
  cta,
  ctaTarget,
  variant,
  popular = false,
  highlight,
  originalPrice,
  savings,
  icon: Icon
}) => {
  const handleCtaClick = () => {
    if (ctaTarget.startsWith('#')) {
      // Scroll to section on current page
      const element = document.querySelector(ctaTarget);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to page
      window.location.href = ctaTarget;
    }
  };

  return (
    <div 
      className={`relative bg-card border rounded-2xl p-6 shadow-pricing hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up flex flex-col ${
        popular ? 'border-primary shadow-lg scale-105' : ''
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}
      
      {highlight && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
            {highlight}
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="mb-4">
          {originalPrice && (
            <div className="text-sm text-muted-foreground line-through mb-1">
              {originalPrice}
            </div>
          )}
          <div className="text-3xl font-bold text-foreground">{price}</div>
          <div className="text-sm text-muted-foreground">{period}</div>
        </div>
        
        {savings && (
          <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
            {savings}
          </div>
        )}
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
        
        {limitations && (
          <>
            <li className="border-t pt-3 mt-3">
              <span className="text-xs text-muted-foreground font-medium">Limitations:</span>
            </li>
            {limitations.map((limitation, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                <span>{limitation}</span>
              </li>
            ))}
          </>
        )}
      </ul>
      
      <Button 
        variant={variant} 
        className="w-full mt-auto" 
        size="lg"
        onClick={handleCtaClick}
      >
        {cta}
      </Button>
    </div>
  );
};

export default PlanCard;
