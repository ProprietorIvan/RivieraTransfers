import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Car,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";
import CalendarComponent from "@/components/Calendar";
import { format } from "date-fns";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    dropoff: "",
    date: new Date(),
    time: "",
    passengers: "1",
    notes: "",
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsAppClick = () => {
    const message = `Hello! I'd like to book a transfer:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Pickup: ${formData.pickup}
Dropoff: ${formData.dropoff}
Date: ${format(formData.date, "PPP")}
Time: ${formData.time}
Passengers: ${formData.passengers}
Notes: ${formData.notes}`;

    window.open(
      `https://wa.me/377678636346?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const calendarCustomStyles = `
    .react-calendar {
      width: 100%;
      max-width: 400px;
      background: white;
      border: none;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      padding: 1rem;
    }

    .react-calendar__tile {
      padding: 1rem 0.5rem;
      font-size: 1rem;
      border-radius: 0.5rem;
    }

    .react-calendar__tile--active {
      background: #000000 !important;
      color: white;
    }

    .react-calendar__tile--now {
      background: #f3f4f6;
    }

    .react-calendar__month-view__days__day--weekend {
      color: #000000 !important;
    }

    .react-calendar__navigation button {
      font-size: 1.1rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      background-color: #f3f4f6;
    }

    .react-calendar__month-view__weekdays {
      font-weight: 500;
      text-transform: uppercase;
      font-size: 0.875rem;
    }
  `;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[600px] h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover filter brightness-110 contrast-110"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-6 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 drop-shadow">
              Book your luxury transfer or get in touch with our team
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Car className="w-6 h-6" />
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white" id="contact-form">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-black">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/5 rounded-full">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Phone</h3>
                    <p className="text-gray-600">+377 678 636 346</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/5 rounded-full">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Email</h3>
                    <p className="text-gray-600">info@monacoexpress.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/5 rounded-full">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">
                      Location
                    </h3>
                    <p className="text-gray-600">Monaco, French Riviera</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/5 rounded-full">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Hours</h3>
                    <p className="text-gray-600">24/7 Service Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-4xl font-bold mb-8 text-black">
                Book a Transfer
              </h2>
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">
                    Request Received!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    We&apos;ll contact you shortly to confirm your booking.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-black font-medium hover:underline"
                  >
                    Book Another Transfer
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                      value={formData.pickup}
                      onChange={(e) =>
                        setFormData({ ...formData, pickup: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dropoff Location
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                      value={formData.dropoff}
                      onChange={(e) =>
                        setFormData({ ...formData, dropoff: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer"
                        value={format(formData.date, "PPP")}
                        onClick={() => setShowCalendar(!showCalendar)}
                      />
                      {showCalendar && (
                        <div className="absolute z-10 mt-2">
                          <style>{calendarCustomStyles}</style>
                          <CalendarComponent
                            value={formData.date}
                            onChange={(date) => {
                              setFormData({ ...formData, date });
                              setShowCalendar(false);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Passengers
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                      value={formData.passengers}
                      onChange={(e) =>
                        setFormData({ ...formData, passengers: e.target.value })
                      }
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Passenger" : "Passengers"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
                  >
                    Submit Booking Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Travel in Style?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your luxury transfer service today
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
