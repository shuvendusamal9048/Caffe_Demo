import React, { useState } from 'react';
import { Coffee } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackText = 'BREW & BLOOM',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div 
        className={`bg-cream-200/80 flex flex-col items-center justify-center text-espresso-400 p-4 border border-cream-300/60 select-none ${className}`}
        role="img"
        aria-label={alt || fallbackText}
      >
        <Coffee className="w-8 h-8 mb-2 opacity-50 stroke-[1.5]" />
        <span className="text-xs uppercase tracking-wider font-medium text-espresso-500/70 text-center">
          {fallbackText}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-cream-200/50 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-cream-200 to-cream-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

