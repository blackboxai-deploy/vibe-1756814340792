"use client";

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'stacked' | 'icon' | 'monogram';
  theme?: 'light' | 'dark';
  className?: string;
}

const DigitalBloomLogo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'horizontal', 
  theme = 'light',
  className = '' 
}) => {
  const sizes = {
    sm: { width: 120, height: 40, iconSize: 32, fontSize: 'text-lg' },
    md: { width: 180, height: 60, iconSize: 48, fontSize: 'text-2xl' },
    lg: { width: 240, height: 80, iconSize: 64, fontSize: 'text-3xl' },
    xl: { width: 320, height: 100, iconSize: 80, fontSize: 'text-4xl' }
  };

  const currentSize = sizes[size];
  const isDark = theme === 'dark';

  // Blooming flower icon with digital gradient effects
  const BloomIcon = ({ size: iconSize }: { size: number }) => (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox="0 0 64 64" 
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Digital bloom petals */}
      <g filter="url(#glow)">
        {/* Top petal */}
        <path
          d="M32 8 C28 12, 28 20, 32 24 C36 20, 36 12, 32 8 Z"
          fill="url(#petalGradient)"
          opacity="0.9"
        />
        {/* Right petal */}
        <path
          d="M56 32 C52 28, 44 28, 40 32 C44 36, 52 36, 56 32 Z"
          fill="url(#petalGradient)"
          opacity="0.8"
        />
        {/* Bottom petal */}
        <path
          d="M32 56 C36 52, 36 44, 32 40 C28 44, 28 52, 32 56 Z"
          fill="url(#petalGradient)"
          opacity="0.9"
        />
        {/* Left petal */}
        <path
          d="M8 32 C12 36, 20 36, 24 32 C20 28, 12 28, 8 32 Z"
          fill="url(#petalGradient)"
          opacity="0.8"
        />
        {/* Diagonal petals */}
        <path
          d="M45 19 C41 21, 41 27, 45 29 C47 25, 47 23, 45 19 Z"
          fill="url(#petalGradient)"
          opacity="0.7"
        />
        <path
          d="M45 45 C47 41, 47 39, 45 35 C41 37, 41 43, 45 45 Z"
          fill="url(#petalGradient)"
          opacity="0.7"
        />
        <path
          d="M19 45 C21 41, 27 41, 29 45 C25 47, 23 47, 19 45 Z"
          fill="url(#petalGradient)"
          opacity="0.7"
        />
        <path
          d="M19 19 C23 17, 25 17, 29 19 C27 23, 21 23, 19 19 Z"
          fill="url(#petalGradient)"
          opacity="0.7"
        />
      </g>
      
      {/* Center core */}
      <circle
        cx="32"
        cy="32"
        r="8"
        fill="url(#centerGradient)"
        filter="url(#glow)"
      />
      
      {/* Digital pixels effect */}
      <rect x="30" y="30" width="2" height="2" fill="#FFFFFF" opacity="0.8" />
      <rect x="34" y="32" width="1" height="1" fill="#FFFFFF" opacity="0.6" />
      <rect x="32" y="34" width="1" height="1" fill="#FFFFFF" opacity="0.7" />
    </svg>
  );

  // Monogram version (DB)
  const MonogramIcon = ({ size: iconSize }: { size: number }) => (
    <div 
      className={`flex items-center justify-center rounded-lg ${isDark ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 'bg-gradient-to-br from-blue-500 to-green-500'}`}
      style={{ width: iconSize, height: iconSize }}
    >
      <span className={`font-bold text-white ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : size === 'lg' ? 'text-3xl' : 'text-4xl'}`}>
        DB
      </span>
    </div>
  );

  const gradientText = 'bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent';

  if (variant === 'icon') {
    return (
      <div className={`inline-flex ${className}`}>
        <BloomIcon size={currentSize.iconSize} />
      </div>
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`inline-flex ${className}`}>
        <MonogramIcon size={currentSize.iconSize} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
        <BloomIcon size={currentSize.iconSize} />
        <div className="text-center">
          <div className={`font-bold ${currentSize.fontSize} ${gradientText}`}>
            DigitalBloom
          </div>
          <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'} tracking-wider uppercase mt-1`}>
            Digital Marketing
          </div>
        </div>
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <BloomIcon size={currentSize.iconSize} />
      <div className="flex flex-col">
        <div className={`font-bold ${currentSize.fontSize} ${gradientText} leading-tight`}>
          DigitalBloom
        </div>
        <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'} tracking-wider uppercase`}>
          Digital Marketing & GMB
        </div>
      </div>
    </div>
  );
};

export default DigitalBloomLogo;