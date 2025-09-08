import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Accordion } from '@/components/Accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Bell, 
  Camera, 
  Shield, 
  Cloud, 
  Smartphone,
  Zap,
  Eye,
  Lock,
  Database,
  Wifi,
  CheckCircle
} from 'lucide-react';

const Features: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('detection');

  const coreFeatures = [
    {
      icon: Brain,
      title: 'AI Person/Motion Detection',
      description: 'Advanced YOLOv8 model distinguishes between people, vehicles, packages, and animals with 95% accuracy.'
    },
    {
      icon: Bell,
      title: 'Instant Push/Email Alerts',
      description: 'Get notified immediately when threats are detected. Customizable alert rules and quiet hours.'
    },
    {
      icon: Camera,
      title: 'Event-Based Recording',
      description: 'Only records when something happens. Save 90% storage space compared to continuous recording.'
    },
    {
      icon: Shield,
      title: 'Multi-Brand Support',
      description: 'Works with 200+ camera brands via ONVIF/RTSP. No need to replace your existing cameras.'
    },
    {
      icon: Cloud,
      title: 'Cloud or Local Storage',
      description: 'Choose between secure cloud storage or local gateway storage. Your data, your choice.'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Web Access',
      description: 'Access your cameras from anywhere. iOS, Android, and web apps with live streaming.'
    }
  ];

  const performanceData = [
    { model: 'YOLOv8n', fps: '5-10', cameras: '1-2', accuracy: '95%' },
    { model: 'YOLOv8s', fps: '3-5', cameras: '2-4', accuracy: '97%' },
    { model: 'YOLOv8m', fps: '1-3', cameras: '4-8', accuracy: '98%' }
  ];

  const faqItems = [
    {
      id: '1',
      question: 'What camera brands are supported?',
      answer: 'DaiSec supports 200+ camera brands including Hikvision, Dahua, Axis, Bosch, Sony, and any ONVIF/RTSP compatible camera. Check our compatibility list for specific models.'
    },
    {
      id: '2',
      question: 'How accurate is the AI detection?',
      answer: 'Our YOLOv8 models achieve 95-98% accuracy depending on the configuration. False alarm rates are reduced by 95% compared to traditional motion detection.'
    },
    {
      id: '3',
      question: 'Can I use it without internet?',
      answer: 'Yes! With our gateway device, you can run AI detection locally and store footage on the device. Internet is only needed for remote access and cloud features.'
    },
    {
      id: '4',
      question: 'How much storage do I need?',
      answer: 'Event-based recording typically uses 100GB per camera per month. Full recording uses about 900GB per camera per month. You can choose cloud or local storage.'
    },
    {
      id: '5',
      question: 'Is my data secure?',
      answer: 'Yes. All data is encrypted in transit (TLS) and at rest (AES-256). We comply with GDPR and KVKK regulations. You can also choose local-only storage.'
    },
    {
      id: '6',
      question: 'Can I integrate with other systems?',
      answer: 'Yes! We support webhooks, IFTTT, Home Assistant, and custom API integrations. Perfect for smart home automation.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Features - DaiSec</title>
        <meta name="description" content="Discover DaiSec's AI-powered features: person detection, instant alerts, event recording, multi-brand support, and secure cloud/local storage." />
      </Helmet>
      
      {/* Hero Section */}
      <Section className="bg-gradient-hero">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
                Advanced AI Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Features that upgrade your <span className="text-destructive">old cameras</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your existing IP cameras into smart security systems with AI detection, 
                instant alerts, and intelligent recording. No replacement needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" onClick={() => navigate('/pricing')}>
                  <Zap className="w-5 h-5 mr-2" />
                  Choose Your Plan
                </Button>
                <Button variant="outline-cta" size="xl" onClick={() => navigate('/support#contact')}>
                  <Eye className="w-5 h-5 mr-2" />
                  Talk to Expert
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/available_objects_labeled.webp"
                alt="DaiSec AI detecting multiple objects on legacy camera feed"
                className="w-full rounded-xl shadow-lg ring-1 ring-black/5"
                loading="eager"
              />
              <p className="text-xs text-gray-500 mt-2">Multi-object detection on legacy cameras</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Features Grid */}
      <Section>
        <Container>
          <SectionHeader
            title="Core Features"
            subtitle="Everything you need to secure your property with AI intelligence"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Deep Dive Tabs */}
      <Section className="bg-muted/30">
        <Container>
          <SectionHeader
            title="Technical Deep Dive"
            subtitle="Learn how each feature works under the hood"
          />
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="detection">Detection</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="storage">Storage</TabsTrigger>
              <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
            </TabsList>
            
            <TabsContent value="detection" className="mt-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">AI Detection Engine</h3>
                <p className="text-muted-foreground mb-4">
                  Our detection system uses YOLOv8 models optimized for edge devices. 
                  It processes video frames in real-time to identify objects, people, and activities.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div># RTSP URL Configuration</div>
                  <div>rtsp://username:password@192.168.1.100:554/stream1</div>
                  <div className="mt-2"># Detection Classes</div>
                  <div>person, vehicle, package, animal, bicycle</div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Smart Notifications</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant alerts via push notifications, email, or webhooks. 
                  Customize rules based on time, location, and object type.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div># Webhook Example</div>
                  <div>{`POST https://your-server.com/webhook`}</div>
                  <div>{`{`}</div>
                  <div>{`  "event": "person_detected",`}</div>
                  <div>{`  "camera": "front_door",`}</div>
                  <div>{`  "timestamp": "2024-01-15T10:30:00Z"`}</div>
                  <div>{`}`}</div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="storage" className="mt-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Flexible Storage Options</h3>
                <p className="text-muted-foreground mb-4">
                  Choose between cloud storage for convenience or local storage for privacy. 
                  Event-based recording saves 90% storage compared to continuous recording.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div># Storage Configuration</div>
                  <div>storage_type: "cloud" | "local" | "hybrid"</div>
                  <div>retention_days: 30</div>
                  <div>compression: "h264" | "h265"</div>
                  <div>resolution: "1080p" | "4k"</div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy" className="mt-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Privacy & Security</h3>
                <p className="text-muted-foreground mb-4">
                  Your data is protected with end-to-end encryption. We comply with GDPR and KVKK. 
                  You can choose local-only processing for maximum privacy.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div># Security Features</div>
                  <div>encryption: "AES-256"</div>
                  <div>transport: "TLS 1.3"</div>
                  <div>compliance: ["GDPR", "KVKK"]</div>
                  <div>local_processing: true</div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>

      {/* Performance & Accuracy */}
      <Section>
        <Container>
          <SectionHeader
            title="Performance & Accuracy"
            subtitle="Real-world performance metrics for different configurations"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-4 text-left">Model</th>
                    <th className="border border-border p-4 text-left">FPS Target</th>
                    <th className="border border-border p-4 text-left">Max Cameras</th>
                    <th className="border border-border p-4 text-left">Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((row, index) => (
                    <tr key={index} className="hover:bg-muted/50">
                      <td className="border border-border p-4 font-mono">{row.model}</td>
                      <td className="border border-border p-4">{row.fps}</td>
                      <td className="border border-border p-4">{row.cameras}</td>
                      <td className="border border-border p-4 text-green-600 font-semibold">{row.accuracy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-muted-foreground">Alert Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">False Alarm Reduction</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted/30">
        <Container>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about DaiSec features"
          />
          
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-hero">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to upgrade your cameras?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who've transformed their security with AI intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => navigate('/pricing')}>
                <CheckCircle className="w-5 h-5 mr-2" />
                Choose Your Plan
              </Button>
              <Button variant="outline-cta" size="xl" onClick={() => navigate('/support#contact')}>
                <Wifi className="w-5 h-5 mr-2" />
                Talk to Expert
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Features;