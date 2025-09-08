import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import SmartLink from './SmartLink';
import Logo from './Logo';

const menuItems = [
  { label: 'Features', href: '/features' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Gateways', href: '/gateways' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Support', href: '/support' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const goTo = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <button onClick={() => goTo('/')} className="flex items-center space-x-4 focus:outline-none" aria-label="Go to home">
              <Logo className="w-12 h-12" />
              <span className="text-2xl font-bold text-slate-800">
                <span className="text-red-600">Dai</span>Sec
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {menuItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => `text-base font-medium transition-colors duration-200 hover:text-red-600 focus:outline-none focus:text-red-600 ${
                    isActive ? 'text-red-600' : isScrolled ? 'text-slate-700' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="default"
                onClick={() => goTo('/support#contact')}
                className="text-slate-700 border-slate-300 hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 mr-2" />
                Talk to Expert
              </Button>
              <Button 
                variant="default" 
                size="default"
                onClick={() => goTo('/pricing#gateways')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Choose Gateway
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-slate-700" />
              ) : (
                <Menu className="w-7 h-7 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `block w-full text-left px-4 py-3 text-lg font-medium rounded-md transition-colors duration-200 hover:bg-slate-50 focus:outline-none focus:bg-slate-50 ${
                    isActive ? 'text-red-600 bg-red-50' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-slate-200">
                <Button 
                  variant="outline" 
                  size="default"
                  onClick={() => goTo('/support#contact')}
                  className="w-full text-slate-700 border-slate-300 hover:bg-slate-50"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Talk to Expert
                </Button>
                <Button 
                  variant="default" 
                  size="default"
                  onClick={() => goTo('/pricing#gateways')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  Choose Gateway
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
