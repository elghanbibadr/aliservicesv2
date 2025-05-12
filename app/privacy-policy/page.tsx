import React from 'react';
import { Metadata } from 'next'; // Import Metadata type for SEO

// Optional: Define Metadata for the page (good for SEO)
export const metadata: Metadata = {
  title: 'Privacy Policy - Alie Services',
  description: 'Learn how Alie Services collects, uses, and protects your personal information.',
  // You might add robots meta tag if needed, e.g., robots: 'index, follow'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl"> {/* Centered container with padding */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Privacy Policy
      </h1>

      <p className="text-sm text-gray-600 mb-8 italic">
        Last updated: May 12, 2025 {/* Note: This date seems far in the future */}
      </p>

      {/* Introduction Section */}
      <section className="mb-8">
        <h3 className="">Introduction</h3>
        <p className="text-gray-700 leading-relaxed">
          This Privacy Policy describes how Alie Services (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects your personal information when you use our website and services.
        </p>
      </section>

      {/* Information We Collect Section */}
      <section className="mb-8">
        <h3 className="">Information We Collect</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          We collect information that you provide directly to us, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
          <li><strong>Name and contact information</strong> (email address, phone number)</li>
          <li>Communications you send to us through our contact form</li>
          <li>Any other information you choose to provide</li>
        </ul>
      </section>

      {/* SMS Communications Consent Section */}
      <section className="mb-8">
        <h3 className="">SMS Communications Consent</h3>
        <p className="text-gray-700 leading-relaxed">
          By providing your phone number and submitting a request on our website, you consent to receive SMS messages from Alie Services regarding your inquiry, appointments, or related business services. Message frequency may vary. Reply <strong>&apos;STOP&apos;</strong> to unsubscribe at any time.
        </p>
      </section>

      {/* How We Use Your Information Section */}
      <section className="mb-8">
        <h3 className="">How We Use Your Information</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
          <li>Respond to your inquiries and provide customer service</li>
          <li>Send you updates and marketing communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
          <li>Send SMS messages regarding your inquiries and appointments (with your consent)</li>
        </ul>
      </section>

      {/* Data Protection Section */}
      <section className="mb-8">
        <h3 className="">Data Protection</h3>
        <p className="text-gray-700 leading-relaxed">
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      {/* Your Rights Section */}
      <section className="mb-8">
        <h3 className="">Your Rights</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          You have the right to:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Opt-out of SMS communications by replying <strong>&apos;STOP&apos;</strong></li>
        </ul>
      </section>

      {/* Contact Us Section */}
      <section className="mb-8">
        <h3 className="">Contact Us</h3>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about this Privacy Policy or our data practices, please contact us through our contact form or email us at{' '}
          <a href="mailto:info@alieservices.com" className="text-blue-600 hover:text-blue-800 hover:underline">
            info@alieservices.com
          </a>.
        </p>
      </section>

      {/* Updates to This Policy Section */}
      <section className="mb-8">
        <h3 className="">Updates to This Policy</h3>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
        </p>
      </section>
    </div>
  );
}