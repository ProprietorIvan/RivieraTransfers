import React from "react";
import { Shield, Lock, Eye, Server, Trash2 } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-200">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-600">
                At Monaco Express, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our luxury transfer services.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Payment information</li>
                  <li>Travel preferences and requirements</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
            </section>

            {/* Data Usage */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To process your bookings and payments</li>
                  <li>To communicate with you about your reservations</li>
                  <li>To improve our services and customer experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold">Data Protection</h2>
              </div>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            {/* Data Storage */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold">Data Storage</h2>
              </div>
              <p className="text-gray-600">
                Your information is stored on secure servers located in the
                European Union. We may transfer your data to third-party service
                providers who assist in operating our services, subject to
                appropriate security measures.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Trash2 className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold">Data Retention</h2>
              </div>
              <p className="text-gray-600">
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                including legal, accounting, or reporting requirements.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-gray-600">
                  Email: privacy@monacoexpress.com
                </p>
                <p className="text-gray-600">Phone: +377 99 99 99 99</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
