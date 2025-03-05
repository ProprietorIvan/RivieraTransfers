import React from "react";
import { Scale, FileText, Clock, AlertCircle, HelpCircle } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
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
                Welcome to Monaco Express. By using our luxury transfer
                services, you agree to these Terms of Service. Please read them
                carefully before making a booking.
              </p>
            </section>

            {/* Services */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold">Our Services</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Monaco Express provides luxury transfer services in the French
                  Riviera, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Airport transfers</li>
                  <li>Hotel transfers</li>
                  <li>Event transportation</li>
                  <li>Custom tours and excursions</li>
                  <li>Corporate transportation</li>
                </ul>
              </div>
            </section>

            {/* Booking Terms */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold">Booking Terms</h2>
              </div>
              <div className="space-y-4">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    All bookings must be made through our official channels
                  </li>
                  <li>Payment is required to confirm your booking</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Special requests must be made at the time of booking</li>
                  <li>We reserve the right to refuse service to anyone</li>
                </ul>
              </div>
            </section>

            {/* Cancellation Policy */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold">Cancellation Policy</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our cancellation policy is as follows:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Free cancellation up to 24 hours before the scheduled pickup
                  </li>
                  <li>50% charge for cancellations within 24 hours</li>
                  <li>100% charge for no-shows</li>
                  <li>Refunds are processed within 5-7 business days</li>
                </ul>
              </div>
            </section>

            {/* Liability */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold">Liability</h2>
              </div>
              <p className="text-gray-600">
                Monaco Express is not liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your
                use of our services. We maintain comprehensive insurance
                coverage for all our vehicles and passengers.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold">Changes to Terms</h2>
              </div>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We will
                notify users of any material changes via email or through our
                website. Continued use of our services after such changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="mt-4">
                <p className="text-gray-600">Email: legal@monacoexpress.com</p>
                <p className="text-gray-600">Phone: +377 99 99 99 99</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
