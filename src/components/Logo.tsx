import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lock base */}
      <rect 
        x="8" 
        y="16" 
        width="16" 
        height="12" 
        rx="2" 
        fill="currentColor" 
        className="text-slate-700"
      />
      
      {/* Lock shackle */}
      <path 
        d="M12 16V12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12V16" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        className="text-slate-700"
        fill="none"
      />
      
      {/* Camera lens overlay */}
      <circle 
        cx="16" 
        cy="20" 
        r="3" 
        fill="currentColor" 
        className="text-red-600"
      />
      
      {/* Inner lens */}
      <circle 
        cx="16" 
        cy="20" 
        r="1.5" 
        fill="currentColor" 
        className="text-white"
      />
      
      {/* AI indicator dots */}
      <circle 
        cx="22" 
        cy="10" 
        r="1" 
        fill="currentColor" 
        className="text-red-600"
      />
      <circle 
        cx="24" 
        cy="12" 
        r="0.8" 
        fill="currentColor" 
        className="text-red-600"
      />
      <circle 
        cx="21" 
        cy="13" 
        r="0.6" 
        fill="currentColor" 
        className="text-red-600"
      />
    </svg>
  );
};

export default Logo;
