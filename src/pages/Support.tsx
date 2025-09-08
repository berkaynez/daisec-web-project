import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeader } from '@/components/SectionHeader';
import { Accordion } from '@/components/Accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  CheckCircle,
  Clock,
  Users,
  AlertCircle,
  ExternalLink,
  Send
} from 'lucide-react';

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const topIssues = [
    {
      id: '1',
      question: 'How do I connect my camera to DaiSec?',
      answer: 'First, ensure your camera supports ONVIF or RTSP. Then use the DaiSec mobile app to scan for cameras on your network. Enter the camera\'s RTSP URL if auto-discovery doesn\'t work.'
    },
    {
      id: '2',
      question: 'Why am I getting false alarms?',
      answer: 'False alarms can be reduced by adjusting detection sensitivity, setting up detection zones, and configuring quiet hours. Check our troubleshooting guide for detailed steps.'
    },
    {
      id: '3',
      question: 'Can I use DaiSec without internet?',
      answer: 'Yes! With our gateway device, you can run AI detection locally and store footage on the device. Internet is only needed for remote access and cloud features.'
    },
    {
      id: '4',
      question: 'How much storage do I need?',
      answer: 'Event-based recording typically uses 100GB per camera per month. Full recording uses about 900GB per camera per month. You can choose cloud or local storage.'
    },
    {
      id: '5',
      question: 'What cameras are supported?',
      answer: 'We support 200+ camera brands including Hikvision, Dahua, Axis, Bosch, Sony, and any ONVIF/RTSP compatible camera.'
    }
  ];

  const supportChannels = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Start Chat',
      href: '#'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      href: 'tel:+1-555-DAISEC'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7 response within 24 hours',
      action: 'Send Email',
      href: 'mailto:support@daisec.com'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Support - DaiSec</title>
        <meta name="description" content="Get help with DaiSec: live chat, phone support, email support, FAQ, and troubleshooting guides." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Customer Support
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're here to <span className="text-destructive">help</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get support from our expert team. We're available via chat, phone, or email to help you with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Get Support"
            description="Choose your preferred way to get help"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
                <p className="text-muted-foreground mb-4">{channel.description}</p>
                <div className="text-sm text-muted-foreground mb-6">{channel.availability}</div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => window.open(channel.href, '_blank')}
                >
                  {channel.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Status & Uptime */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="System Status"
            description="Current status of DaiSec services"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">&lt;2s</div>
              <div className="text-muted-foreground">Response Time</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-2">0</div>
              <div className="text-muted-foreground">Active Issues</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Issues */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Quick answers to common questions"
          />
          
          <div className="max-w-3xl mx-auto">
            <Accordion items={topIssues} />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Contact Us"
            description="Send us a message and we'll get back to you within 24 hours"
          />
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              {isSubmitted ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      className="mt-1"
                      placeholder="Please describe your question or issue in detail..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Additional Resources"
            description="More ways to get help and learn about DaiSec"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Documentation</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive guides and tutorials for setup and configuration.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.location.href = '/docs'}
              >
                View Docs
              </Button>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Forum</h3>
              <p className="text-muted-foreground mb-4">
                Connect with other DaiSec users and share tips and solutions.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('#', '_blank')}
              >
                Join Forum
              </Button>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
              <p className="text-muted-foreground mb-4">
                Step-by-step video guides for common tasks and setups.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('#', '_blank')}
              >
                Watch Videos
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;