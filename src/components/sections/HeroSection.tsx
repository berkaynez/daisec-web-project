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
                <span>Upgrade your old cameras in 10 minutes</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Turn Old Cameras Into
              <span className="text-primary"> Smart, AI-Powered</span>
              <br />
              <span className="text-accent">Security</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              With <strong className="text-destructive font-bold">DaiSec</strong>, connect your legacy IP/web cams to the cloud, add human & motion detection, and get instant alerts—
              <strong className="text-foreground">without replacing your system</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" className="animate-scale-in">
                Choose Your Gateway
              </Button>
              <Button variant="outline-cta" size="xl" className="animate-scale-in">
                <Eye className="w-5 h-5 mr-2" />
                Talk to Expert
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