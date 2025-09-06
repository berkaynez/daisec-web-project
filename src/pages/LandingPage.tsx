import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyDifferentSection } from "@/components/sections/WhyDifferentSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Placeholder sections for navbar scroll testing */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Features Section</h2>
          <p className="text-slate-600">This is a placeholder section for testing navbar scroll behavior.</p>
        </div>
      </section>
      
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Solutions Section</h2>
          <p className="text-slate-600">This is a placeholder section for testing navbar scroll behavior.</p>
        </div>
      </section>
      
      <section id="gateways" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Gateways Section</h2>
          <p className="text-slate-600">This is a placeholder section for testing navbar scroll behavior.</p>
        </div>
      </section>
      
      <section id="use-cases" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Use Cases Section</h2>
          <p className="text-slate-600">This is a placeholder section for testing navbar scroll behavior.</p>
        </div>
      </section>
      
      <HeroSection />
      <WhyDifferentSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      
      <section id="docs" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Docs Section</h2>
          <p className="text-slate-600">This is a placeholder section for testing navbar scroll behavior.</p>
        </div>
      </section>
      
      <section id="support" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Support Section</h2>
          <p className="text-slate-600">This is a placeholder section for testing navbar scroll behavior.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;