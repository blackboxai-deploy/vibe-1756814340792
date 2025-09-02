"use client";

import React from 'react';
import DigitalBloomLogo from './DigitalBloomLogo';

const BusinessMockups: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Logo in Action</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how the DigitalBloom logo looks across different business applications and digital platforms.
        </p>
      </div>

      {/* Business Card Mockup */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">Business Card</h3>
        <div className="flex justify-center">
          <div className="w-96 h-56 bg-white rounded-lg shadow-lg border border-gray-200 p-6 flex flex-col justify-between">
            <div>
              <DigitalBloomLogo variant="horizontal" size="sm" />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold text-gray-900">John Smith</div>
              <div className="text-xs text-gray-600">Digital Marketing Specialist</div>
              <div className="text-xs text-gray-600">john@digitalbloom.com</div>
              <div className="text-xs text-gray-600">+1 (555) 123-4567</div>
              <div className="text-xs text-gray-600">www.digitalbloom.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Website Header Mockup */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">Website Header</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <DigitalBloomLogo variant="horizontal" size="md" />
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Contact</a>
            </nav>
            <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-md text-sm font-medium">
              Get Started
            </button>
          </div>
          <div className="px-6 py-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Boost Your Google My Business Ranking
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional digital marketing services to help your business bloom online.
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Profile Mockup */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">Social Media Profile</h3>
        <div className="flex justify-center">
          <div className="w-80 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            {/* Cover Image */}
            <div className="h-24 bg-gradient-to-r from-blue-500 to-green-500"></div>
            
            {/* Profile Section */}
            <div className="p-4 -mt-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <DigitalBloomLogo variant="icon" size="sm" />
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="font-bold text-gray-900">DigitalBloom</h4>
                  <p className="text-sm text-gray-600">Digital Marketing & GMB Specialists</p>
                  <p className="text-xs text-gray-500 mt-1">🌟 Helping businesses bloom online</p>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white text-sm py-2 rounded-md font-medium">
                  Follow
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 text-sm py-2 rounded-md font-medium">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Letterhead Mockup */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">Letterhead</h3>
        <div className="flex justify-center">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="border-b border-gray-100 pb-6 mb-6">
              <DigitalBloomLogo variant="horizontal" size="md" />
              <div className="mt-4 text-xs text-gray-600 space-y-1">
                <div>123 Marketing Street, Digital City, DC 12345</div>
                <div>Phone: +1 (555) 123-4567 | Email: hello@digitalbloom.com</div>
                <div>www.digitalbloom.com</div>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-gray-700">
              <div>Dear Valued Client,</div>
              <div>
                Thank you for choosing DigitalBloom for your digital marketing needs. 
                We're excited to help your business grow and bloom in the digital landscape.
              </div>
              <div>
                Our comprehensive Google My Business optimization services will enhance 
                your online presence and drive more customers to your business.
              </div>
              <div className="pt-4">
                Best regards,<br />
                <strong>The DigitalBloom Team</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Icon Mockup */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">Mobile App Icon</h3>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
              <DigitalBloomLogo variant="icon" size="sm" />
            </div>
            <div className="text-xs text-gray-600">iOS Style</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-lg shadow-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
              <DigitalBloomLogo variant="monogram" size="sm" />
            </div>
            <div className="text-xs text-gray-600">Android Style</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessMockups;