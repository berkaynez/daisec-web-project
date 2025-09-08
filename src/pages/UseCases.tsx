import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Package, 
  TreePine, 
  Car, 
  Store, 
  Building, 
  Hammer,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const UseCases: React.FC = () => {
  const navigate = useNavigate();
  const scenarios = [
    {
      icon: Package,
      title: 'Porch Piracy Prevention',
      description: 'Stop package thieves with instant alerts when someone approaches your door.',
      image: '/images/detection.jpg',
      alt: 'Person detection with package on porch',
      suggestedPlan: 'Standard Plan',
      features: ['Instant door alerts', 'Package detection', 'Mobile notifications', '30-day storage']
    },
    {
      icon: TreePine,
      title: 'Backyard Animal Monitoring',
      description: 'Distinguish between pets, wildlife, and intruders in your backyard.',
      image: '/images/available_objects_labeled.webp',
      alt: 'Multiple objects detected in backyard',
      suggestedPlan: 'Standard Plan',
      features: ['Animal classification', 'Pet vs wildlife alerts', 'Quiet hours', 'Custom zones']
    },
    {
      icon: Car,
      title: 'Parking Lot Security',
      description: 'Monitor parking areas for unauthorized vehicles and suspicious activity.',
      image: '/images/detection.jpg',
      alt: 'Vehicle detection in parking lot',
      suggestedPlan: 'Gateway + Subscription',
      features: ['Vehicle detection', 'License plate recognition', 'Loitering alerts', 'Multi-camera view']
    },
    {
      icon: Store,
      title: 'Small Shop Protection',
      description: 'Secure your retail space with smart detection and instant alerts.',
      image: '/images/available_objects_labeled.webp',
      alt: 'Shop security with multiple detections',
      suggestedPlan: 'Gateway + Subscription',
      features: ['Business hours monitoring', 'Customer vs intruder', 'Event search', 'Share incident links']
    },
    {
      icon: Building,
      title: 'Warehouse Night Shift',
      description: 'Monitor large facilities during off-hours with reliable detection.',
      image: '/images/detection.jpg',
      alt: 'Warehouse security monitoring',
      suggestedPlan: 'Premium All-In',
      features: ['Large area coverage', 'Night vision support', 'Offline operation', 'Central management']
    },
    {
      icon: Hammer,
      title: 'Construction Time-lapse',
      description: 'Document construction progress with intelligent recording and time-lapse.',
      image: '/images/available_objects_labeled.webp',
      alt: 'Construction site monitoring',
      suggestedPlan: 'Premium All-In',
      features: ['Time-lapse recording', 'Progress documentation', 'Weather-resistant', 'Remote monitoring']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'Austin, TX',
      rating: 5,
      text: 'DaiSec has been a game-changer for our home security. We went from getting 20+ false alarms per week to maybe 1-2 real alerts. The AI actually works!',
      image: '/images/review.webp'
    },
    {
      name: 'Mike Chen',
      role: 'Small Business Owner',
      location: 'Seattle, WA',
      rating: 5,
      text: 'As a shop owner, I needed reliable security without the complexity. DaiSec works with my existing cameras and the alerts are spot-on. Highly recommended.',
      image: '/images/review.webp'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Property Manager',
      location: 'Miami, FL',
      rating: 5,
      text: 'Managing security for multiple properties was a nightmare before DaiSec. Now I can monitor everything from one app with intelligent alerts that actually matter.',
      image: '/images/review.webp'
    }
  ];

  const beforeAfterData = [
    { metric: 'False Alarms', before: '20+ per week', after: '1-2 per week', improvement: '95% reduction' },
    { metric: 'Response Time', before: '5-10 minutes', after: '<2 minutes', improvement: '3x faster' },
    { metric: 'Storage Usage', before: '900GB/month', after: '100GB/month', improvement: '90% savings' },
    { metric: 'Setup Time', before: '2-3 hours', after: '15 minutes', improvement: '8x faster' }
  ];

  return (
    <>
      <Helmet>
        <title>Use Cases - DaiSec</title>
        <meta name="description" content="Real-world DaiSec use cases: porch piracy prevention, backyard monitoring, parking lot security, shop protection, warehouse monitoring, and construction time-lapse." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Real World Applications
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real world <span className="text-destructive">use cases</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              See how DaiSec is protecting homes, businesses, and construction sites around the world. 
              From porch piracy prevention to warehouse monitoring, our AI adapts to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => navigate('/pricing')}>
                <CheckCircle className="w-5 h-5 mr-2" />
                Pick a Plan
              </Button>
              <Button variant="outline-cta" size="xl" onClick={() => navigate('/support#contact')}>
                <Users className="w-5 h-5 mr-2" />
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Common Use Cases"
            description="How DaiSec protects different types of properties and businesses"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={scenario.image}
                    alt={scenario.alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                      <scenario.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
                  <p className="text-muted-foreground mb-4">{scenario.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-accent mb-2">Suggested Plan:</div>
                    <div className="text-sm font-semibold">{scenario.suggestedPlan}</div>
                  </div>
                  
                  <ul className="space-y-1 mb-6">
                    {scenario.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => navigate('/pricing')}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Before vs After DaiSec"
            description="See the dramatic improvements in security effectiveness"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfterData.map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-4">{item.metric}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <TrendingDown className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-muted-foreground">Before:</span>
                  </div>
                  <div className="text-sm font-medium text-red-600">{item.before}</div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">After:</span>
                  </div>
                  <div className="text-sm font-medium text-green-600">{item.after}</div>
                  
                  <div className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {item.improvement}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Trusted by Thousands"
            description="Real metrics from our growing user base"
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">User Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What Our Users Say"
            description="Real feedback from satisfied customers"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to protect what matters?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've upgraded their security with DaiSec AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => navigate('/pricing')}>
              <CheckCircle className="w-5 h-5 mr-2" />
              Pick a Plan
            </Button>
            <Button variant="outline-cta" size="xl" onClick={() => navigate('/support#contact')}>
              <Users className="w-5 h-5 mr-2" />
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCases;