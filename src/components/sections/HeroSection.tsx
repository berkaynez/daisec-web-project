import { Button } from "@/components/ui/button";
import { Shield, Eye, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-camera-system.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();
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
              <Button
                variant="hero"
                size="xl"
                className="animate-scale-in"
                onClick={() => {
                  const el = document.getElementById("pricing");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else navigate("/pricing");
                }}
              >
                Choose Your Plan
              </Button>
              <Button
                variant="outline-cta"
                size="xl"
                className="animate-scale-in"
                onClick={() => navigate("/contact")}
              >
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
          
          {/* Hero Image (replaced with detection.jpg and caption) */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="/images/detection.jpg"
                alt="DaiSec AI detects a person and packages in real-time"
                className="w-full rounded-xl shadow-lg ring-1 ring-black/5 object-cover"
                loading="eager"
              />
              <p className="text-xs text-gray-500 mt-2">Live AI detection — instant alert to your phone.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};