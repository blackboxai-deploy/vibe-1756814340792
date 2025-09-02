"use client";

import React, { useState } from 'react';
import DigitalBloomLogo from './DigitalBloomLogo';

const LogoVariations: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');

  const variants = [
    { key: 'horizontal', name: 'Horizontal Logo', description: 'Perfect for headers and business cards' },
    { key: 'stacked', name: 'Stacked Logo', description: 'Ideal for square spaces and social media' },
    { key: 'icon', name: 'Icon Only', description: 'Great for favicons and app icons' },
    { key: 'monogram', name: 'Monogram (DB)', description: 'Minimal version for small applications' }
  ] as const;

  const sizes = [
    { key: 'sm', name: 'Small', description: '120px wide' },
    { key: 'md', name: 'Medium', description: '180px wide' },
    { key: 'lg', name: 'Large', description: '240px wide' },
    { key: 'xl', name: 'Extra Large', description: '320px wide' }
  ] as const;

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Theme:</label>
          <div className="flex rounded-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => setSelectedTheme('light')}
              className={`px-3 py-1 text-sm ${
                selectedTheme === 'light' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Light
            </button>
            <button
              onClick={() => setSelectedTheme('dark')}
              className={`px-3 py-1 text-sm ${
                selectedTheme === 'dark' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Dark
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Size:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value as any)}
            className="border border-gray-200 rounded-md px-3 py-1 text-sm bg-white"
          >
            {sizes.map(size => (
              <option key={size.key} value={size.key}>
                {size.name} ({size.description})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Logo Variations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {variants.map((variant) => (
          <div key={variant.key} className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {variant.name}
              </h3>
              <p className="text-sm text-gray-600">
                {variant.description}
              </p>
            </div>
            
            {/* Logo Preview */}
            <div className={`
              p-8 rounded-lg border-2 border-dashed border-gray-200 
              flex items-center justify-center min-h-[150px]
              ${selectedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'}
            `}>
              <DigitalBloomLogo 
                variant={variant.key as any}
                theme={selectedTheme}
                size={selectedSize}
              />
            </div>

            {/* Background Demonstrations */}
            <div className="grid grid-cols-3 gap-2">
              {/* White background */}
              <div className="bg-white p-4 rounded border flex items-center justify-center min-h-[80px]">
                <DigitalBloomLogo 
                  variant={variant.key as any}
                  theme="light"
                  size="sm"
                />
              </div>
              
              {/* Dark background */}
              <div className="bg-gray-900 p-4 rounded border flex items-center justify-center min-h-[80px]">
                <DigitalBloomLogo 
                  variant={variant.key as any}
                  theme="dark"
                  size="sm"
                />
              </div>
              
              {/* Colored background */}
              <div className="bg-gradient-to-br from-blue-100 to-green-100 p-4 rounded border flex items-center justify-center min-h-[80px]">
                <DigitalBloomLogo 
                  variant={variant.key as any}
                  theme="light"
                  size="sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoVariations;