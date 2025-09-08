import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-8 md:mb-12 text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
