import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-foreground font-bold">Daimia</div>
            <div className="text-xs">Smart security, made simple.</div>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <NavLink to="/features" className="hover:text-foreground">Features</NavLink>
            <NavLink to="/solutions" className="hover:text-foreground">Solutions</NavLink>
            <NavLink to="/gateways" className="hover:text-foreground">Gateways</NavLink>
            <NavLink to="/use-cases" className="hover:text-foreground">Use Cases</NavLink>
            <NavLink to="/pricing" className="hover:text-foreground">Pricing</NavLink>
            <NavLink to="/docs" className="hover:text-foreground">Docs</NavLink>
            <NavLink to="/support" className="hover:text-foreground">Support</NavLink>
            <NavLink to="/contact" className="hover:text-foreground">Contact</NavLink>
          </nav>
        </div>
        <div className="mt-6 text-center text-xs">© {new Date().getFullYear()} Daimia. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;


