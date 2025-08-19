import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Austin, TX",
    rating: 5,
    text: "Finally, a security system that actually works! No more false alarms from my neighbor's cat. When someone actually tried to break in, I got an instant alert with clear video. Police arrived in 6 minutes.",
    plan: "Gateway + Subscription",
    savings: "Saved $1,200 vs ADT"
  },
  {
    name: "Mike Chen",
    location: "San Diego, CA", 
    rating: 5,
    text: "The AI is incredible - it learned my family's routines in just 3 days. I travel for work and finally have peace of mind knowing my wife and kids are protected. The mobile app is so smooth.",
    plan: "Premium All-In",
    savings: "Prevented break-in worth $15K"
  },
  {
    name: "Emily Rodriguez",
    location: "Miami, FL",
    rating: 5,
    text: "Switched from Ring after constant false alarms. This system is so much smarter - it only alerts me for real threats. The cloud storage is unlimited and the video quality is crystal clear.",
    plan: "Standard Plan",
    savings: "95% fewer false alarms"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real Stories from <span className="text-primary">Protected Families</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of homeowners who sleep better knowing their families are truly protected.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-6">
                <div className="font-semibold text-foreground mb-1">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground mb-3">{testimonial.location}</div>
                
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Using: {testimonial.plan}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-medium text-accent">{testimonial.savings}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">Data Breaches</div>
          </div>
        </div>
      </div>
    </section>
  );
};