import React from 'react';
import DigitalBloomLogo from '@/components/DigitalBloomLogo';
import LogoVariations from '@/components/LogoVariations';
import BusinessMockups from '@/components/BusinessMockups';
import LogoDownloader from '@/components/LogoDownloader';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <DigitalBloomLogo variant="horizontal" size="md" />
            <nav className="hidden md:flex space-x-8">
              <a href="#variations" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Variations
              </a>
              <a href="#mockups" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Applications
              </a>
              <a href="#download" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Download
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent leading-tight">
              DigitalBloom
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Professional Logo Design for Digital Marketing Excellence
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A modern, scalable logo system designed for digital marketing and Google My Business specialists. 
              Ready for all your branding needs.
            </p>
          </div>

          {/* Featured Logo Display */}
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border">
                  <DigitalBloomLogo variant="horizontal" size="lg" />
                </div>
                <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl">
                  <DigitalBloomLogo variant="horizontal" size="lg" theme="dark" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-left space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Crafted for Growth
                  </h2>
                  <p className="text-gray-600">
                    The DigitalBloom logo combines organic growth symbolism with modern digital aesthetics. 
                    Perfect for businesses focused on helping others flourish online.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Scalable SVG design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Multiple variations included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Light and dark theme ready</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Professional color palette</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Variations Section */}
        <section id="variations" className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Logo Variations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete logo system with multiple variations for every use case. 
              From business cards to digital platforms, we've got you covered.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <LogoVariations />
          </div>
        </section>

        {/* Business Applications Section */}
        <section id="mockups" className="space-y-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <BusinessMockups />
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="space-y-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <LogoDownloader />
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl text-white p-12 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">The Story Behind DigitalBloom</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Every great business deserves to bloom in the digital landscape. The DigitalBloom logo represents 
              growth, innovation, and the flourishing success that comes from expert digital marketing. 
              The blooming flower symbolizes organic growth, while the modern gradients and clean typography 
              reflect our commitment to cutting-edge digital strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold">Growth Focused</h3>
                <p className="opacity-80">Designed to represent flourishing success and organic business growth</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold">Digital Innovation</h3>
                <p className="opacity-80">Modern gradients and effects that speak to digital expertise</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold">Professional Trust</h3>
                <p className="opacity-80">Clean, trustworthy design that instills confidence in your services</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4">
            <DigitalBloomLogo variant="horizontal" size="md" theme="dark" />
            <p className="text-gray-400">
              Professional logo design for digital marketing excellence
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 DigitalBloom</span>
              <span>•</span>
              <span>Digital Marketing & GMB Specialists</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}