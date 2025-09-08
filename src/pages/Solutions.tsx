import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Home, 
  Building2, 
  HardHat, 
  Users,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Zap,
  Shield,
  Smartphone,
  Camera,
  Wifi
} from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Home,
      title: 'Home Security',
      description: 'Perfect for homeowners who want smart security without the complexity.',
      features: [
        '1-4 cameras typically',
        'Instant mobile alerts',
        'Event-based recording',
        'Easy mobile app setup',
        '30-day cloud storage'
      ],
      pricing: 'From $9.99/month',
      recommended: 'Standard Plan'
    },
    {
      icon: Building2,
      title: 'Retail / SMB',
      description: 'Ideal for small businesses, shops, and retail locations.',
      features: [
        '4-16 cameras',
        'Multi-camera event search',
        'Share links for incidents',
        'Business hours monitoring',
        'Priority support'
      ],
      pricing: 'From $39.99/month',
      recommended: 'Gateway + Subscription'
    },
    {
      icon: HardHat,
      title: 'Construction / Site',
      description: 'Built for remote sites with unreliable internet connections.',
      features: [
        'Gateway for offline operation',
        'Solar power options',
        'Rugged outdoor cameras',
        'Time-lapse recording',
        'Remote site monitoring'
      ],
      pricing: 'From $199/month',
      recommended: 'Premium All-In'
    },
    {
      icon: Users,
      title: 'Apartment / HOA',
      description: 'Centralized management for multi-unit properties.',
      features: [
        'Central management panel',
        'Role-based access control',
        'Tenant portal access',
        'Bulk camera management',
        'Custom reporting'
      ],
      pricing: 'Custom pricing',
      recommended: 'Enterprise'
    }
  ];

  const roiPoints = [
    {
      icon: DollarSign,
      title: 'Reuse Existing Cameras',
      description: 'No need to replace your current cameras. Save thousands on new hardware.'
    },
    {
      icon: Zap,
      title: 'Reduce Storage Costs',
      description: 'Event-based recording uses 90% less storage than continuous recording.'
    },
    {
      icon: Shield,
      title: 'Scale Efficiently',
      description: 'Add cameras as needed. Pay only for what you use with flexible plans.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - DaiSec</title>
        <meta name="description" content="DaiSec solutions for homes, retail, construction sites, and apartments. Choose the right plan for your security needs." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Tailored Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Solutions for <span className="text-destructive">homes, shops and sites</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're protecting your home, managing a retail business, or monitoring a construction site, 
              we have the right solution for your security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => window.location.href = '/pricing'}>
                <CheckCircle className="w-5 h-5 mr-2" />
                Find Your Plan
              </Button>
              <Button variant="outline-cta" size="xl" onClick={() => window.location.href = '/support'}>
                <Smartphone className="w-5 h-5 mr-2" />
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Choose Your Solution"
            description="Select the plan that best fits your security requirements"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                  <div className="text-lg font-semibold text-primary mb-2">{solution.pricing}</div>
                  <div className="text-sm text-accent font-medium">{solution.recommended}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => window.location.href = '/pricing'}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagrams */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Architecture Options"
            description="Choose between cloud-only or hybrid gateway solutions"
          />
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cloud-Only */}
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Cloud-Only</h3>
                <p className="text-muted-foreground">Direct camera to cloud connection</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-sm">IP Camera</span>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Cloud className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Cloud AI + Storage</span>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Smartphone className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Mobile App</span>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <strong>When to choose:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Reliable internet connection</li>
                  <li>• Simple setup preferred</li>
                  <li>• 1-4 cameras</li>
                  <li>• Standard security needs</li>
                </ul>
              </div>
            </Card>

            {/* Hybrid Gateway */}
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Hybrid Gateway</h3>
                <p className="text-muted-foreground">Local AI processing with cloud backup</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-sm">IP Camera</span>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Wifi className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Gateway (AI + Relay)</span>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Cloud className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Cloud/App</span>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <strong>When to choose:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Unreliable internet</li>
                  <li>• 4+ cameras</li>
                  <li>• Advanced features needed</li>
                  <li>• Local storage preferred</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI/Cost Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why DaiSec is Cost-Effective"
            description="Smart choices that save you money while improving security"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {roiPoints.map((point, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Typical Cost Savings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$2,000+</div>
                  <div className="text-muted-foreground">Saved on camera replacement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                  <div className="text-muted-foreground">Reduction in storage costs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-muted-foreground">Fewer false alarms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to find your solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a personalized recommendation based on your specific needs and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => window.location.href = '/pricing'}>
              <CheckCircle className="w-5 h-5 mr-2" />
              Find Your Plan
            </Button>
            <Button variant="outline-cta" size="xl" onClick={() => window.location.href = '/support'}>
              <Smartphone className="w-5 h-5 mr-2" />
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;