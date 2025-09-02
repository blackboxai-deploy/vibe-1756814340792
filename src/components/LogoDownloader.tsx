"use client";

import React, { useRef } from 'react';
import DigitalBloomLogo from './DigitalBloomLogo';

const LogoDownloader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadLogo = async (variant: 'horizontal' | 'stacked' | 'icon' | 'monogram', size: 'sm' | 'md' | 'lg' | 'xl', theme: 'light' | 'dark', format: 'png' | 'svg') => {
    if (format === 'svg') {
      // For SVG, we'll create and download the SVG content
      downloadSVG(variant, size, theme);
    } else {
      // For PNG, we'll render to canvas and download
      await downloadPNG(variant, size, theme);
    }
  };

  const downloadSVG = (variant: string, size: string, theme: string) => {
    const sizes = {
      sm: { width: 120, height: 40 },
      md: { width: 180, height: 60 },
      lg: { width: 240, height: 80 },
      xl: { width: 320, height: 100 }
    };

    const currentSize = sizes[size as keyof typeof sizes];
    
    // Create SVG content (simplified version for download)
    const svgContent = `
      <svg width="${currentSize.width}" height="${currentSize.height}" viewBox="0 0 ${currentSize.width} ${currentSize.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3B82F6" />
            <stop offset="50%" stop-color="#1E40AF" />
            <stop offset="100%" stop-color="#10B981" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2563EB" />
            <stop offset="100%" stop-color="#10B981" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="${theme === 'dark' ? '#111827' : '#ffffff'}"/>
        
        <!-- Bloom Icon -->
        <g transform="translate(10, ${currentSize.height/2 - 20})">
          <!-- Petals -->
          <path d="M20 4 C16 8, 16 16, 20 20 C24 16, 24 8, 20 4 Z" fill="url(#petalGradient)" opacity="0.9"/>
          <path d="M36 20 C32 16, 28 16, 24 20 C28 24, 32 24, 36 20 Z" fill="url(#petalGradient)" opacity="0.8"/>
          <path d="M20 36 C24 32, 24 28, 20 24 C16 28, 16 32, 20 36 Z" fill="url(#petalGradient)" opacity="0.9"/>
          <path d="M4 20 C8 24, 12 24, 16 20 C12 16, 8 16, 4 20 Z" fill="url(#petalGradient)" opacity="0.8"/>
          <circle cx="20" cy="20" r="6" fill="#F59E0B"/>
        </g>
        
        <!-- Text -->
        ${variant !== 'icon' && variant !== 'monogram' ? `
          <text x="${variant === 'horizontal' ? 60 : currentSize.width/2}" y="${variant === 'horizontal' ? currentSize.height/2 + 2 : currentSize.height - 15}" 
                font-family="Arial, sans-serif" font-weight="bold" font-size="${size === 'xl' ? 24 : size === 'lg' ? 20 : size === 'md' ? 16 : 12}" 
                fill="url(#textGradient)" text-anchor="${variant === 'horizontal' ? 'start' : 'middle'}">DigitalBloom</text>
          <text x="${variant === 'horizontal' ? 60 : currentSize.width/2}" y="${variant === 'horizontal' ? currentSize.height/2 + 16 : currentSize.height - 2}" 
                font-family="Arial, sans-serif" font-size="${size === 'xl' ? 10 : 8}" 
                fill="${theme === 'dark' ? '#9CA3AF' : '#6B7280'}" text-anchor="${variant === 'horizontal' ? 'start' : 'middle'}">DIGITAL MARKETING & GMB</text>
        ` : ''}
      </svg>
    `;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `digitalbloom-logo-${variant}-${size}-${theme}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadPNG = async (variant: string, size: string, theme: string) => {
    // This is a simplified version - in a real app you'd render the actual component to canvas
    const sizes = {
      sm: { width: 120, height: 40 },
      md: { width: 180, height: 60 },
      lg: { width: 240, height: 80 },
      xl: { width: 320, height: 100 }
    };

    const currentSize = sizes[size as keyof typeof sizes];
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = currentSize.width;
    canvas.height = currentSize.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = theme === 'dark' ? '#111827' : '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw a simplified version
    ctx.fillStyle = '#3B82F6';
    ctx.beginPath();
    ctx.arc(25, canvas.height/2, 15, 0, Math.PI * 2);
    ctx.fill();

    // Add text
    if (variant !== 'icon') {
      ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#111827';
      ctx.font = `bold ${size === 'xl' ? 24 : size === 'lg' ? 20 : size === 'md' ? 16 : 12}px Arial`;
      ctx.fillText('DigitalBloom', 50, canvas.height/2 + 4);
    }

    // Download
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `digitalbloom-logo-${variant}-${size}-${theme}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  const downloadOptions = [
    { variant: 'horizontal', name: 'Horizontal Logo' },
    { variant: 'stacked', name: 'Stacked Logo' },
    { variant: 'icon', name: 'Icon Only' },
    { variant: 'monogram', name: 'Monogram (DB)' }
  ] as const;



  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Logos</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Download your DigitalBloom logos in various formats and sizes for different use cases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Download Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Quick Downloads</h3>
          <div className="grid grid-cols-1 gap-4">
            {downloadOptions.map((option) => (
              <div key={option.variant} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900">{option.name}</h4>
                    <div className="mt-2">
                      <DigitalBloomLogo variant={option.variant as any} size="sm" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => downloadLogo(option.variant as any, 'md', 'light', 'svg')}
                    className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                  >
                    SVG Light
                  </button>
                  <button
                    onClick={() => downloadLogo(option.variant as any, 'md', 'dark', 'svg')}
                    className="px-3 py-1 bg-gray-800 text-white text-xs rounded hover:bg-gray-900"
                  >
                    SVG Dark
                  </button>
                  <button
                    onClick={() => downloadLogo(option.variant as any, 'lg', 'light', 'png')}
                    className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                  >
                    PNG Light
                  </button>
                  <button
                    onClick={() => downloadLogo(option.variant as any, 'lg', 'dark', 'png')}
                    className="px-3 py-1 bg-green-800 text-white text-xs rounded hover:bg-green-900"
                  >
                    PNG Dark
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Guidelines */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Brand Guidelines</h3>
          <div className="space-y-4 text-sm text-gray-600">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Color Palette</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span>Primary Blue: #3B82F6</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-800 rounded"></div>
                  <span>Dark Blue: #1E40AF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span>Accent Green: #10B981</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Usage Guidelines</h4>
              <ul className="space-y-1 text-sm">
                <li>• Minimum size: 80px wide for horizontal logo</li>
                <li>• Always maintain clear space around the logo</li>
                <li>• Use horizontal version for headers and business cards</li>
                <li>• Use icon version for social media profiles</li>
                <li>• Prefer SVG format for web and print applications</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-900 mb-2">Do's and Don'ts</h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="text-green-700">✓ Use on white or dark backgrounds</div>
                <div className="text-green-700">✓ Maintain original proportions</div>
                <div className="text-red-700">✗ Don't stretch or distort the logo</div>
                <div className="text-red-700">✗ Don't use on busy backgrounds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden canvas for PNG generation */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default LogoDownloader;