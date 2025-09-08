import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  BookOpen, 
  Camera, 
  Wifi, 
  Smartphone, 
  Database, 
  Shield, 
  Webhook, 
  Wrench,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const Docs: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: BookOpen },
    { id: 'connect-camera', title: 'Connect Your Camera', icon: Camera },
    { id: 'network-setup', title: 'Network & NAT Guide', icon: Wifi },
    { id: 'mobile-app', title: 'Mobile App', icon: Smartphone },
    { id: 'storage-options', title: 'Storage Options', icon: Database },
    { id: 'privacy-security', title: 'Privacy & Security', icon: Shield },
    { id: 'integrations', title: 'Webhooks & Integrations', icon: Webhook },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: Wrench }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Getting Started with DaiSec</h2>
            <p className="text-muted-foreground">
              Welcome to DaiSec! This guide will help you set up your AI-powered security system in minutes.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Start Checklist</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Check camera compatibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Download DaiSec mobile app</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Connect camera to network</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Add camera in app</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Configure AI detection</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Need Help?</h4>
              <p className="text-sm text-muted-foreground mb-3">
                If you run into any issues, check our troubleshooting guide or contact support.
              </p>
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/support'}>
                Contact Support
              </Button>
            </div>
          </div>
        );

      case 'connect-camera':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Connect Your Camera</h2>
            <p className="text-muted-foreground">
              Learn how to connect your existing IP cameras to DaiSec for AI-powered monitoring.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Supported Camera Types</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>ONVIF compatible cameras</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>RTSP stream cameras</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>IP cameras with web interface</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">RTSP URL Format</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div># Standard RTSP URL format</div>
                <div>rtsp://username:password@ip_address:port/stream_path</div>
                <div className="mt-2"># Example:</div>
                <div>rtsp://admin:password123@192.168.1.100:554/stream1</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Common Camera Brands</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Hikvision', 'Dahua', 'Axis', 'Bosch', 'Sony', 'Panasonic', 'Uniview', 'Vivotek'].map((brand) => (
                  <div key={brand} className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="font-medium">{brand}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'network-setup':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Network & NAT Setup</h2>
            <p className="text-muted-foreground">
              Configure your network for optimal DaiSec performance and remote access.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Port Forwarding</h3>
              <p className="text-muted-foreground">
                For remote access, you may need to forward these ports on your router:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Port 554</div>
                    <div className="text-muted-foreground">RTSP streaming</div>
                  </div>
                  <div>
                    <div className="font-semibold">Port 80/443</div>
                    <div className="text-muted-foreground">Web interface</div>
                  </div>
                  <div>
                    <div className="font-semibold">Port 1935</div>
                    <div className="text-muted-foreground">RTMP streaming</div>
                  </div>
                  <div>
                    <div className="font-semibold">Port 8080</div>
                    <div className="text-muted-foreground">Alternative web</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">P2P & WebRTC</h3>
              <p className="text-muted-foreground">
                DaiSec supports P2P connections and WebRTC for direct streaming without port forwarding.
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div># Enable P2P in camera settings</div>
                <div>P2P_ENABLED=true</div>
                <div>P2P_UID=your_camera_uid</div>
              </div>
            </div>
          </div>
        );

      case 'mobile-app':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Mobile App Guide</h2>
            <p className="text-muted-foreground">
              Learn how to use the DaiSec mobile app for monitoring and managing your cameras.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">App Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Live View</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Real-time camera feeds</li>
                    <li>• Multi-camera grid view</li>
                    <li>• PTZ controls</li>
                    <li>• Snapshot capture</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Alerts & Notifications</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Push notifications</li>
                    <li>• Alert history</li>
                    <li>• Custom alert rules</li>
                    <li>• Quiet hours</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Download Links</h3>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => window.open('#', '_blank')}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  iOS App Store
                </Button>
                <Button variant="outline" onClick={() => window.open('#', '_blank')}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        );

      case 'storage-options':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Storage Options</h2>
            <p className="text-muted-foreground">
              Choose between cloud storage, local storage, or hybrid solutions for your footage.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cloud Storage</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Access from anywhere</li>
                  <li>• Automatic backups</li>
                  <li>• Scalable storage</li>
                  <li>• No local hardware needed</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Local Storage</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Complete privacy</li>
                  <li>• No monthly fees</li>
                  <li>• Works offline</li>
                  <li>• Full control</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Storage Configuration</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div># Storage settings</div>
                <div>storage_type: "cloud" | "local" | "hybrid"</div>
                <div>retention_days: 30</div>
                <div>compression: "h264" | "h265"</div>
                <div>resolution: "1080p" | "4k"</div>
              </div>
            </div>
          </div>
        );

      case 'privacy-security':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Privacy & Security</h2>
            <p className="text-muted-foreground">
              Learn about DaiSec's security measures and privacy protections.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Data Encryption</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">In Transit</h4>
                  <ul className="text-sm space-y-1">
                    <li>• TLS 1.3 encryption</li>
                    <li>• End-to-end encryption</li>
                    <li>• Certificate pinning</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">At Rest</h4>
                  <ul className="text-sm space-y-1">
                    <li>• AES-256 encryption</li>
                    <li>• Encrypted storage</li>
                    <li>• Secure key management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Compliance</h3>
              <div className="flex gap-4">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  GDPR Compliant
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  KVKK Compliant
                </div>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  SOC 2 Type II
                </div>
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Webhooks & Integrations</h2>
            <p className="text-muted-foreground">
              Connect DaiSec with your existing smart home and business systems.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Webhook Configuration</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div># Webhook endpoint</div>
                <div>POST https://your-server.com/webhook</div>
                <div className="mt-2"># Example payload</div>
                <div>{`{`}</div>
                <div>{`  "event": "person_detected",`}</div>
                <div>{`  "camera": "front_door",`}</div>
                <div>{`  "timestamp": "2024-01-15T10:30:00Z",`}</div>
                <div>{`  "confidence": 0.95`}</div>
                <div>{`}`}</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Supported Integrations</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">IFTTT</h4>
                  <p className="text-sm text-muted-foreground">Automate actions based on detections</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Home Assistant</h4>
                  <p className="text-sm text-muted-foreground">Smart home integration</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Slack</h4>
                  <p className="text-sm text-muted-foreground">Team notifications</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'troubleshooting':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Troubleshooting</h2>
            <p className="text-muted-foreground">
              Common issues and solutions for DaiSec setup and operation.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Camera Connection Issues</h3>
              <div className="space-y-3">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Camera not found</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Check camera is on same network</li>
                    <li>• Verify RTSP URL format</li>
                    <li>• Test with VLC media player</li>
                    <li>• Check firewall settings</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Poor video quality</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Check network bandwidth</li>
                    <li>• Adjust camera resolution</li>
                    <li>• Optimize compression settings</li>
                    <li>• Use wired connection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">AI Detection Issues</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">False alarms</h4>
                <ul className="text-sm space-y-1">
                  <li>• Adjust detection sensitivity</li>
                  <li>• Set up detection zones</li>
                  <li>• Configure quiet hours</li>
                  <li>• Update AI model</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Still need help?</h4>
              <p className="text-sm text-blue-800 mb-3">
                Contact our support team for personalized assistance.
              </p>
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/support'}>
                Contact Support
              </Button>
            </div>
          </div>
        );

      default:
        return <div>Select a section to view documentation.</div>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Documentation - DaiSec</title>
        <meta name="description" content="DaiSec documentation: setup guides, camera configuration, network setup, mobile app, storage options, privacy & security, integrations, and troubleshooting." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Documentation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DaiSec <span className="text-destructive">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to set up, configure, and troubleshoot your DaiSec security system.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-8">
                <h3 className="font-semibold mb-4">Documentation</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="p-8">
                {renderContent()}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need more help?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => window.location.href = '/support'}>
              <CheckCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
            <Button variant="outline-cta" size="xl" onClick={() => window.location.href = '/pricing'}>
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Docs;