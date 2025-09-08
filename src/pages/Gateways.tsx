import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Cpu, 
  Zap, 
  Wifi, 
  HardDrive,
  CheckCircle,
  ArrowRight,
  Smartphone,
  QrCode,
  Settings,
  Play,
  Shield,
  Thermometer,
  Battery,
  WifiOff
} from 'lucide-react';

const Gateways: React.FC = () => {
  const navigate = useNavigate();
  const gatewayComparison = [
    {
      name: 'Raspberry Pi 4B + Coral USB',
      aiCapacity: '1-2 cameras @ 5fps',
      poeSupport: 'Yes (with adapter)',
      powerConsumption: '5-10W',
      offlineBehavior: 'Full local processing',
      setupEase: 'Easy',
      targetUser: 'Home users',
      price: '$140',
      features: [
        'Raspberry Pi 4B (4GB RAM)',
        'Google Coral USB Accelerator',
        '32GB microSD card',
        'Power supply',
        'Ethernet cable',
        'Setup guide'
      ]
    },
    {
      name: 'Jetson Nano / Orin Nano',
      aiCapacity: '2-4 cameras @ 3fps',
      poeSupport: 'Yes (built-in)',
      powerConsumption: '10-20W',
      offlineBehavior: 'Full local processing',
      setupEase: 'Moderate',
      targetUser: 'Small business',
      price: '$299',
      features: [
        'NVIDIA Jetson Nano/Orin',
        '8GB RAM',
        '64GB eMMC storage',
        'PoE support',
        'Multiple USB ports',
        'Advanced setup guide'
      ]
    },
    {
      name: 'Cloud-Only (No Device)',
      aiCapacity: '1-2 cameras @ 2fps',
      poeSupport: 'N/A',
      powerConsumption: '0W (camera only)',
      offlineBehavior: 'Limited (no internet = no AI)',
      setupEase: 'Very Easy',
      targetUser: 'Simple setups',
      price: '$0',
      features: [
        'No hardware required',
        'Direct camera connection',
        'Cloud AI processing',
        'Automatic updates',
        'Remote management',
        'Instant setup'
      ]
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: 'Unbox & Connect',
      description: 'Connect the gateway to your network and power it on.',
      icon: QrCode
    },
    {
      step: 2,
      title: 'Scan QR Code',
      description: 'Use the DaiSec app to scan the QR code and configure your gateway.',
      icon: Smartphone
    },
    {
      step: 3,
      title: 'Auto-Discovery',
      description: 'The gateway automatically finds and connects to your cameras.',
      icon: Wifi
    },
    {
      step: 4,
      title: 'Start Monitoring',
      description: 'AI detection begins immediately. Customize settings as needed.',
      icon: Play
    }
  ];

  const techSpecs = {
    raspberry: [
      { category: 'CPU', specs: 'Broadcom BCM2711, Quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.8GHz' },
      { category: 'GPU', specs: 'VideoCore VI' },
      { category: 'RAM', specs: '4GB LPDDR4-3200' },
      { category: 'Storage', specs: '32GB microSD (expandable)' },
      { category: 'AI Accelerator', specs: 'Google Coral USB Accelerator (Edge TPU)' },
      { category: 'Connectivity', specs: 'Gigabit Ethernet, 2.4GHz/5GHz WiFi, Bluetooth 5.0' },
      { category: 'Ports', specs: '2x USB 3.0, 2x USB 2.0, 2x micro-HDMI, 3.5mm audio' },
      { category: 'Power', specs: '5V/3A via USB-C' },
      { category: 'Operating System', specs: 'DaiSec OS (Linux-based)' }
    ],
    jetson: [
      { category: 'CPU', specs: 'Quad-core ARM Cortex-A57 @ 1.43 GHz' },
      { category: 'GPU', specs: '128-core NVIDIA Maxwell GPU' },
      { category: 'RAM', specs: '8GB LPDDR4' },
      { category: 'Storage', specs: '64GB eMMC 5.1' },
      { category: 'AI Accelerator', specs: 'NVIDIA Tensor Cores' },
      { category: 'Connectivity', specs: 'Gigabit Ethernet, WiFi, Bluetooth' },
      { category: 'Ports', specs: '4x USB 3.0, 1x USB 2.0, HDMI, GPIO' },
      { category: 'Power', specs: '5V/4A via barrel jack or PoE' },
      { category: 'Operating System', specs: 'DaiSec OS (Ubuntu-based)' }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Gateways - DaiSec</title>
        <meta name="description" content="DaiSec gateway devices: Raspberry Pi + Coral, Jetson Nano, and cloud-only options. Compare features, specs, and choose the right gateway for your needs." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Smart Gateway Devices
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart gateways for <span className="text-destructive">tough networks</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the right gateway for your needs. From simple cloud-only setups to powerful 
              local processing with offline capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => navigate('/pricing#gateways')}>
                <CheckCircle className="w-5 h-5 mr-2" />
                Choose Gateway
              </Button>
              <Button variant="outline-cta" size="xl" onClick={() => navigate('/support#contact')}>
                <Settings className="w-5 h-5 mr-2" />
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Gateway Comparison"
            description="Compare features and capabilities of our gateway options"
          />
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-4 text-left">Gateway</th>
                  <th className="border border-border p-4 text-left">AI Capacity</th>
                  <th className="border border-border p-4 text-left">PoE Support</th>
                  <th className="border border-border p-4 text-left">Power</th>
                  <th className="border border-border p-4 text-left">Offline</th>
                  <th className="border border-border p-4 text-left">Setup</th>
                  <th className="border border-border p-4 text-left">Target</th>
                  <th className="border border-border p-4 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {gatewayComparison.map((gateway, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="border border-border p-4 font-semibold">{gateway.name}</td>
                    <td className="border border-border p-4">{gateway.aiCapacity}</td>
                    <td className="border border-border p-4">{gateway.poeSupport}</td>
                    <td className="border border-border p-4">{gateway.powerConsumption}</td>
                    <td className="border border-border p-4">{gateway.offlineBehavior}</td>
                    <td className="border border-border p-4">{gateway.setupEase}</td>
                    <td className="border border-border p-4">{gateway.targetUser}</td>
                    <td className="border border-border p-4 font-bold text-primary">{gateway.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Kit Contents */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What's Included"
            description="Everything you need to get started with your gateway"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {gatewayComparison.map((gateway, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-4">{gateway.name}</h3>
                <div className="text-2xl font-bold text-primary mb-4">{gateway.price}</div>
                <ul className="space-y-2">
                  {gateway.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-6" 
                  variant="outline"
                  onClick={() => navigate('/pricing#gateways')}
                >
                  Choose This Gateway
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Simple 4-Step Setup"
            description="Get your gateway up and running in minutes"
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">Step {step.step}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Technical Specifications"
            description="Detailed hardware specifications for our gateway devices"
          />
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Raspberry Pi Specs */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                Raspberry Pi 4B + Coral
              </h3>
              <div className="space-y-3">
                {techSpecs.raspberry.map((spec, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="font-medium text-sm">{spec.category}:</span>
                    <span className="text-sm text-muted-foreground text-right max-w-xs">{spec.specs}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Jetson Specs */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Jetson Nano/Orin
              </h3>
              <div className="space-y-3">
                {techSpecs.jetson.map((spec, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="font-medium text-sm">{spec.category}:</span>
                    <span className="text-sm text-muted-foreground text-right max-w-xs">{spec.specs}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Performance Metrics"
            description="Real-world performance data for different configurations"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold mb-2">45°C</div>
              <div className="text-muted-foreground text-sm">Max Operating Temp</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Battery className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold mb-2">5-20W</div>
              <div className="text-muted-foreground text-sm">Power Consumption</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <WifiOff className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold mb-2">24h+</div>
              <div className="text-muted-foreground text-sm">Offline Operation</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold mb-2">99.9%</div>
              <div className="text-muted-foreground text-sm">Uptime</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to choose your gateway?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert recommendations based on your specific needs and network requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => navigate('/pricing#gateways')}>
              <CheckCircle className="w-5 h-5 mr-2" />
              Choose Gateway
            </Button>
            <Button variant="outline-cta" size="xl" onClick={() => navigate('/support#contact')}>
              <Settings className="w-5 h-5 mr-2" />
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gateways;