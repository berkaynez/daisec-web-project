import { Button } from "@/components/ui/button";
import { Shield, Eye, Zap } from "lucide-react";
import heroImage from "@/assets/hero-camera-system.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                <span>Trusted by 50K+ homes</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Smart Security 
              <span className="text-primary"> That Actually</span>
              <br />
              <span className="text-accent">Protects</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              AI-powered monitoring that learns your routine and alerts you only when it matters. 
              <strong className="text-foreground">Stop false alarms</strong> and start feeling secure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" className="animate-scale-in">
                Start Free Trial
              </Button>
              <Button variant="outline-cta" size="xl" className="animate-scale-in">
                <Eye className="w-5 h-5 mr-2" />
                See Live Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span>30-day money back</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Bank-level encryption</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Smart Security Camera System with AI monitoring"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-card border shadow-card rounded-xl p-4 animate-scale-in">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Live Protection</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card border shadow-card rounded-xl p-4 animate-scale-in">
                <div className="text-sm">
                  <div className="font-medium text-accent">$124,000</div>
                  <div className="text-muted-foreground">Theft prevented this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};