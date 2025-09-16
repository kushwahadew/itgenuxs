"use client";
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
           Terms & Conditions
        </h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">ITGenixs</h2>
      </div>

      {/* Introduction */}
      <div className="mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <p className="text-gray-700 leading-relaxed">
          Thank you for choosing ITGenixs! To ensure clarity in our partnership, the following Terms & Conditions outline how we will work together on your project. By starting a project with us, you agree to the following.
        </p>
      </div>

      {/* Terms Sections */}
      <div className="space-y-8">
        {/* Section 1 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
            Scope of Services
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>ITGenixs offers software development, mobile and web app development, IT consulting, support, and digital solutions.</p>
            <p>The exact scope, features, costs, and timelines will be outlined in a written Project Proposal or Agreement signed by both parties.</p>
            <p>Any work requested outside of the agreed scope will be considered "Additional Work" and may require a separate quotation and approval.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
            Responsibilities of ITGenixs
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>We will deliver the project according to the discussed and documented requirements.</p>
            <p>We will use industry-standard tools, methods, and best practices to ensure quality.</p>
            <p>We will keep you updated during development through reports, meetings, or milestones.</p>
            <p>We will handle your confidential information responsibly and securely.</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
            Responsibilities of the Client
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>Provide complete and accurate project requirements before development begins.</p>
            <p>Supply all necessary content, data, or access required to complete the project (e.g., branding assets, website logins, hosting details).</p>
            <p>Review progress regularly and give timely feedback to avoid delays.</p>
            <p>Ensure that any approvals or sign-offs are given by an authorized representative.</p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
            Project Timelines
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>We will provide a timeline for delivery at the start of the project. Meeting that timeline depends on your providing requested inputs and approvals on time.</p>
            <p>Delays from your side (feedback, materials, payments) may result in an extended delivery timeline.</p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">5</span>
            Payments
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p><span className="font-semibold">Advance Payment:</span> A 50% non-refundable advance is required before work begins.</p>
            <p><span className="font-semibold">Balance Payment:</span> The remaining 50% is payable upon project completion or as per milestone agreements.</p>
            <p><span className="font-semibold">Late Payments:</span> Overdue payments may cause project delays and attract interest charges at 1.5% per month.</p>
            <p><span className="font-semibold">Non-Refund Policy:</span> Advance payments and completed work portions are non-refundable, even if the project is terminated early by you.</p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">6</span>
            Intellectual Property & Ownership
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>After full payment has been received, the final deliverables (design, code, or documentation) will be transferred to you.</p>
            <p>ITGenixs retains ownership of proprietary tools, frameworks, or reusable code developed prior to or during your project. We may reuse such code for other projects.</p>
            <p>Third-party software, APIs, or licenses used in your project remain subject to their own terms and may require separate payments or renewals from you.</p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">7</span>
            Confidentiality & Data Security
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>We will not share or disclose your confidential data without prior permission, except where required by law.</p>
            <p>You must also respect and not disclose ITGenixs's methods, code, or internal processes.</p>
            <p>Both parties agree to adhere to good data security practices to prevent unauthorized access or data loss.</p>
          </div>
        </section>

        {/* Section 8 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">8</span>
            Warranties & Support
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>We warrant that the delivered solution will meet the requirements outlined in the final agreed scope.</p>
            <p>Minor bugs or issues identified within [30/60/90 days – choose a warranty period] will be fixed free of additional charge.</p>
            <p>Issues caused by third-party systems, hosting, or modifications outside our control are not covered under warranty but can be fixed under a separate support contract.</p>
            <p>After the warranty period, ongoing support and maintenance can be offered under a separate Service Agreement.</p>
          </div>
        </section>

        {/* Section 9 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">9</span>
            Use of Deliverables
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>Once handed over, the project is yours to use as intended.</p>
            <p>You cannot resell, redistribute, or license our proprietary code components or methods without written permission.</p>
            <p>We reserve the right to showcase the work (in portfolio, website, or marketing materials) unless you request otherwise in writing.</p>
          </div>
        </section>

        {/* Section 10 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">10</span>
            Limitation of Liability
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>ITGenixs is not liable for indirect damages, including loss of revenue, business interruption, or third-party claims.</p>
            <p>Our maximum liability is limited to the total fees paid by you in the last six months of service.</p>
          </div>
        </section>

        {/* Section 11 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">11</span>
            Termination of Project
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>Either party may terminate by written notice if the other party breaches these terms.</p>
            <p>If the client terminates the project, payments made are not refundable.</p>
            <p>If ITGenixs terminates without breach from your side, a fair refund for work not yet delivered will be considered.</p>
          </div>
        </section>

        {/* Section 12 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">12</span>
            Force Majeure (Uncontrollable Events)
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>Neither party is responsible for delays caused by events beyond reasonable control (natural disasters, strikes, cyberattacks, or government actions).</p>
          </div>
        </section>

        {/* Section 13 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">13</span>
            Dispute Resolution
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>Both parties agree to first discuss and attempt an amicable resolution if disputes arise.</p>
            <p>If unresolved, disputes will be handled under the laws of Jharkhand, India, with jurisdiction in the Courts of Ranchi.</p>
          </div>
        </section>

        {/* Section 14 */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">14</span>
            Changes to Terms
          </h3>
          <div className="ml-11 space-y-3 text-gray-700">
            <p>ITGenixs may update these Terms occasionally. Updates will be notified in advance, and continued project work will mean acceptance of the updated terms.</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-yellow-800">
            <span className="font-semibold">Important:</span> Please read these terms carefully. By proceeding with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
          </p>
        </div>
        <p className="text-sm text-gray-500">
          For questions regarding these terms, please contact ITGenixs support team.
        </p>
      </div>
    </div>
    <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TermsAndConditions;