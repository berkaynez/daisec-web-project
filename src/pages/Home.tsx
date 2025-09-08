import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyDifferentSection } from '@/components/sections/WhyDifferentSection';
import { PricingSection } from '@/components/sections/PricingSection';
import MediaShowcase from '@/components/MediaShowcase';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WhyDifferentSection />
      <MediaShowcase />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;


