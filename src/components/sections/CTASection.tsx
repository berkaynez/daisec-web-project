import { Button } from "@/components/ui/button";
import { Shield, Clock, Phone } from "lucide-react";
export const CTASection = () => {
  return <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>Limited Time: Get Started in 60 Seconds</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-primary">Actually Protect</span>
            <br />
            What Matters Most?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 50,000+ families who chose smart security over false alarms. 
            <strong className="text-foreground"> Start your free trial today</strong> - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="animate-scale-in">
              <Shield className="w-5 h-5 mr-2" />
              Start Free Trial Now
            </Button>
            <Button variant="outline-cta" size="xl" className="animate-scale-in">
              <Phone className="w-5 h-5 mr-2" />
              Talk to Expert
            </Button>
          </div>
          
          {/* Final Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>30-day money back guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-5 h-5 text-accent" />
              <span>Setup in under 5 minutes</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};