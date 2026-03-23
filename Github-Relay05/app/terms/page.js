"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using CampusMart, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. User Conduct</h2>
            <p className="text-gray-600 mb-4">
              Users agree to conduct themselves in a respectful manner. For more details, see our Code of Conduct.
            </p>
            {/* BUG: Broken Link */}
            <a href="#" className="text-blue-600 hover:underline">Read our Code of Conduct</a>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.
            </p>
            {/* BUG: Broken Link */}
            <a href="/privacy-policy-broken" className="text-blue-600 hover:underline">View Privacy Policy</a>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Selling Guidelines</h2>
            <p className="text-gray-600 mb-4">
              Sellers must adhere to our strict selling guidelines. prohibited items include...
            </p>
             {/* BUG: Broken Link */}
            <a href="/guidelines/selling" className="text-blue-600 hover:underline">View Selling Guidelines</a>
          </section>
        </div>
      </div>
       {/* BUG: Footer overlap candidate if content is short */}
       <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; 2024 CampusMart. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-900">Contact</a>
            <a href="#" className="hover:text-gray-900">Support</a>
          </div>
        </footer>
    </div>
  );
}
