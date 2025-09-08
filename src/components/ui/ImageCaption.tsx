import React from 'react';

interface ImageCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ImageCaption({ src, alt, caption, className = "" }: ImageCaptionProps) {
  return (
    <figure className={`space-y-2 ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full rounded-xl ring-1 ring-black/5 object-cover" 
        loading="lazy"
      />
      {caption && (
        <figcaption className="text-sm text-gray-500 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
