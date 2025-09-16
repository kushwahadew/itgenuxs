"use client";

import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";


const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <div className="max-w-4xl mx-auto p-6 bg-white">
        {/* Header */}
        <div className="text-center mb-8 border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Privacy Policy
          </h1>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">ITGenixs</h2>
        </div>

        {/* Introduction */}
        <div className="mb-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
          <p className="text-gray-700 leading-relaxed">
            At ITGenixs, your trust is important to us. This Privacy Policy explains how we collect, use, share, and protect your information when you use our website, products, and services. By using ITGenixs.com or our services, you agree to the practices described in this Policy.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
              Information We Collect
            </h3>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>We may collect the following types of information:</p>
              <div className="space-y-3">
                <div>
                  <p><span className="font-semibold text-green-700">Personal Information:</span> Name, email address, phone number, job title, company details, billing information, and communication records shared through forms, emails, or contracts.</p>
                </div>
                <div>
                  <p><span className="font-semibold text-green-700">Technical Information:</span> IP address, browser type, device details, cookies, usage data, and analytics from our website.</p>
                </div>
                <div>
                  <p><span className="font-semibold text-green-700">Project/Business Data:</span> Any files, documents, source code, or data that clients share with us for development and support purposes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
              How We Use Your Information
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p>We use your information to:</p>
              <div className="pl-4 space-y-2">
                <p>• Deliver and manage the services you have requested.</p>
                <p>• Communicate with you about projects, invoices, updates, or support.</p>
                <p>• Improve our website, products, and services through analytics.</p>
                <p>• Ensure security, prevent fraud, and comply with applicable laws.</p>
                <p>• Send marketing or informational emails (only if you have opted in).</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
              Sharing of Information
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p>We do <span className="font-bold text-red-600">not</span> sell or rent your personal data. We may share information only in the following cases:</p>
              <div className="pl-4 space-y-2">
                <p>• With trusted third-party service providers (e.g., hosting, payment processing, analytics).</p>
                <p>• With employees, contractors, or partners who require the information to deliver the services.</p>
                <p>• If required by law, legal process, or to protect our rights and security.</p>
                <p>• In the event of a merger, sale, or business transfer, where data may be transferred as company assets.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
              Data Security
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <div className="pl-4 space-y-2">
                <p>• We use industry-standard security practices (encryption, firewalls, secure servers) to protect your data.</p>
                <p>• While we aim to protect your personal information, no system can guarantee 100% security. Clients are also responsible for safeguarding account credentials and access.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">5</span>
              Data Retention
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <div className="pl-4 space-y-2">
                <p>• We keep your personal and project-related data only as long as needed to deliver services, comply with laws, or resolve disputes.</p>
                <p>• On termination of services, we may delete or anonymize your data, unless retention is legally required.</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">6</span>
              Cookies & Tracking
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <div className="pl-4 space-y-2">
                <p>• Our website may use cookies to personalize your experience, improve navigation, and analyze traffic.</p>
                <p>• You can control or disable cookies through your browser settings, but some features may not work properly.</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">7</span>
              Your Rights
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p>As a client/user, you have the right to:</p>
              <div className="pl-4 space-y-2">
                <p>• Access the personal data we hold about you.</p>
                <p>• Request corrections to inaccurate data.</p>
                <p>• Request deletion of data (subject to legal and contractual obligations).</p>
                <p>• Opt out of receiving marketing communications.</p>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded border-l-4 border-green-400">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">Contact Us:</span> For such requests, please contact us at the email provided below.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">8</span>
              Third-Party Links
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p>Our website may contain links to third-party websites or tools. We are not responsible for their privacy practices or content. Please review their privacy policies separately.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">9</span>
              International Clients
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p>If you are accessing our services from outside India, please note that your data will be processed and stored in India and may be subject to Indian laws.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">10</span>
              Updates to this Policy
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Effective Date." Continued use of ITGenixs services after updates constitutes acceptance of the revised Policy.</p>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-green-800 mb-3">Contact Us About Privacy</h4>
            <p className="text-green-700 mb-2">
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="space-y-1 text-green-700">
              <p><span className="font-semibold">Email:</span> [Insert Contact Email]</p>
              <p><span className="font-semibold">Website:</span> ITGenixs.com</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Privacy Commitment:</span> Your privacy matters to us. We are committed to protecting your personal information and being transparent about our data practices.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Last updated: [Insert Date] | ITGenixs Privacy Policy
          </p>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PrivacyPolicy;