import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  Shield,
  Car,
  Check,
  MessageCircle,
  Trophy,
  Users,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Add custom calendar styles
const calendarCustomStyles = `
  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 16px;
    padding: 32px;
    background-color: #ffffff;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    font-size: 18px;
  }

  .react-calendar__tile {
    padding: 20px;
    margin: 4px;
    border-radius: 12px;
    transition: all 0.2s ease;
    font-size: 18px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile:hover {
    background-color: #000000;
    color: #ffffff;
    transform: scale(1.05);
  }

  .react-calendar__tile--active {
    background-color: #000000 !important;
    color: #ffffff !important;
    transform: scale(1.05);
  }

  .react-calendar__tile--disabled {
    opacity: 0.3;
    cursor: not-allowed;
    background-color: #f3f4f6;
  }

  .react-calendar__navigation button {
    padding: 16px 24px;
    border-radius: 12px;
    border: none;
    background-color: transparent;
    color: #000000;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__navigation button:hover {
    background-color: #f3f4f6;
  }

  .react-calendar__navigation button:disabled {
    background-color: transparent;
    opacity: 0.5;
  }

  .react-calendar__month-view__weekdays {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
    color: #6b7280;
    margin-bottom: 12px;
  }

  .react-calendar__month-view__days__day {
    font-weight: 500;
  }

  /* Override weekend date color */
  .react-calendar__month-view__days__day--weekend {
    color: #000000 !important;
  }

  @media (max-width: 768px) {
    .react-calendar {
      padding: 20px;
      font-size: 16px;
    }

    .react-calendar__tile {
      padding: 16px;
      height: 60px;
      font-size: 16px;
    }

    .react-calendar__navigation button {
      padding: 12px 20px;
      font-size: 20px;
    }

    .react-calendar__month-view__weekdays {
      font-size: 14px;
    }
  }
`;

interface FormData {
  name: string;
  phone: string;
  email: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: Date | null;
  time: string;
  passengers: number;
  notes: string;
  tournamentDay: string;
  court: string;
}

const TennisMastersPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    pickupLocation: "",
    dropoffLocation: "",
    date: null,
    time: "",
    passengers: 1,
    notes: "",
    tournamentDay: "",
    court: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prev) => ({
      ...prev,
      date,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: `${formData.pickupLocation} to ${formData.dropoffLocation}`,
          projectDetails: `Tennis Masters Transfer Details:
            Date: ${formData.date?.toLocaleDateString()}
            Time: ${formData.time}
            Passengers: ${formData.passengers}
            Tournament Day: ${formData.tournamentDay}
            Court: ${formData.court}
            Notes: ${formData.notes}`,
          facilityType: "Tennis Masters Transfer Service",
          projectSize: formData.passengers.toString(),
          urgency: "Standard",
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          pickupLocation: "",
          dropoffLocation: "",
          date: null,
          time: "",
          passengers: 1,
          notes: "",
          tournamentDay: "",
          court: "",
        });
      } else {
        throw new Error("Failed to submit booking request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/377678636346?text=Hello! I'm interested in booking a Tennis Masters transfer service.",
      "_blank"
    );
  };

  const serviceFeatures = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Tournament Expertise",
      description: "Specialized service for tennis events",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Group Transfers",
      description: "Perfect for tournament groups",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Strategic Routes",
      description: "Optimized for tournament traffic",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "VIP Experience",
      description: "Luxury service for tennis events",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>
        {calendarCustomStyles}
      </style>
      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                  Monte Carlo Rolex Masters Transfer Service
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  Luxury tennis transfers.
                  <span className="block text-white">Premium experience.</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Experience seamless transfers during the Monte Carlo Rolex
                  Masters with our specialized luxury service.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      document
                        .getElementById("booking-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300"
                  >
                    <CalendarIcon className="w-6 h-6" />
                    <span>Book Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>WhatsApp</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/images/cars/2.webp"
                    alt="Luxury Tennis Masters Transfer Service"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Premium Tennis Masters Transfer Services
            </h2>
            <p className="text-lg text-gray-600">
              Experience luxury and comfort during tournament week
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-black mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our tennis transfer service
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">
                What areas do you cover for tennis transfers?
              </h3>
              <p className="text-gray-600">
                We provide transfers throughout Monaco, including all major
                hotels, the Monte Carlo Country Club, and surrounding areas. Our
                service covers the entire French Riviera region.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">
                How far in advance should I book my tennis transfer?
              </h3>
              <p className="text-gray-600">
                We recommend booking at least 24 hours in advance, especially
                during tournament days. For peak tournament times, booking 1-2
                weeks ahead is advisable to ensure availability.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">
                Do you provide group transfers for tennis events?
              </h3>
              <p className="text-gray-600">
                Yes, we offer specialized group transfer services for tennis
                events. Our fleet includes vehicles of various sizes to
                accommodate different group sizes, from small groups to larger
                parties.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">
                What happens if my match schedule changes?
              </h3>
              <p className="text-gray-600">
                We understand that match schedules can be unpredictable. We
                offer flexible booking options and will work with you to adjust
                your transfer times if needed. Please contact us as soon as
                possible if you need to modify your booking.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">
                Do you provide VIP transfer services?
              </h3>
              <p className="text-gray-600">
                Yes, we offer premium VIP transfer services with luxury vehicles
                and professional chauffeurs. Our VIP service includes priority
                booking, dedicated support, and enhanced comfort features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-gray-50" id="booking-form">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Book Your Tennis Masters Transfer
            </h2>
            <p className="text-lg text-gray-600">
              Luxury service for Monte Carlo Rolex Masters
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Number of Passengers *
                  </label>
                  <input
                    type="number"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    min="1"
                    max="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Tournament Day *
                </label>
                <select
                  name="tournamentDay"
                  value={formData.tournamentDay}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                >
                  <option value="">Select a day</option>
                  <option value="Qualifying">Qualifying Rounds</option>
                  <option value="Round 1">Round 1</option>
                  <option value="Round 2">Round 2</option>
                  <option value="Round 3">Round 3</option>
                  <option value="Quarter Finals">Quarter Finals</option>
                  <option value="Semi Finals">Semi Finals</option>
                  <option value="Finals">Finals</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Court *
                </label>
                <select
                  name="court"
                  value={formData.court}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                >
                  <option value="">Select a court</option>
                  <option value="Rainier III">Court Rainier III</option>
                  <option value="Des Princes">Court Des Princes</option>
                  <option value="Central">Central Court</option>
                  <option value="Court 1">Court 1</option>
                  <option value="Court 2">Court 2</option>
                  <option value="Court 3">Court 3</option>
                  <option value="Court 4">Court 4</option>
                  <option value="Court 5">Court 5</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Pickup Location *
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="e.g., Hotel de Paris Monaco"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Dropoff Location *
                </label>
                <input
                  type="text"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleInputChange}
                  placeholder="e.g., Monte Carlo Country Club"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Date *
                  </label>
                  <Calendar
                    onChange={(value: any) => {
                      if (value instanceof Date) {
                        handleDateChange(value);
                      }
                    }}
                    value={formData.date}
                    className="w-full border border-gray-200 rounded-lg p-2"
                    minDate={new Date()}
                    selectRange={false}
                    tileClassName="hover:bg-black hover:text-white transition-all duration-200"
                    activeStartDate={new Date()}
                    formatDay={(locale, date) => date.getDate().toString()}
                    nextLabel="›"
                    prevLabel="‹"
                    next2Label={null}
                    prev2Label={null}
                    showNeighboringMonth={true}
                    showFixedNumberOfWeeks={true}
                    calendarType="gregory"
                    tileDisabled={({ date }) => date < new Date()}
                    tileContent={({ date }) => {
                      if (date.getTime() === formData.date?.getTime()) {
                        return (
                          <div className="absolute inset-0 flex items-center justify-center bg-black text-white rounded-lg">
                            {date.getDate()}
                          </div>
                        );
                      }
                      return null;
                    }}
                    view="month"
                    minDetail="month"
                    maxDetail="month"
                    navigationLabel={({ date }) =>
                      `${date.toLocaleString("default", {
                        month: "long",
                      })} ${date.getFullYear()}`
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Any special requests or requirements..."
                ></textarea>
              </div>

              {showSuccess ? (
                <SuccessScreen
                  email={formData.email}
                  setShowSuccess={setShowSuccess}
                />
              ) : (
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  Submit Booking Request
                </button>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Prefer WhatsApp?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Message us directly for instant booking assistance
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

const SuccessScreen = ({
  email,
  setShowSuccess,
}: {
  email: string;
  setShowSuccess: (p: false) => void;
}) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-2xl font-medium text-black">
        Booking request received
      </h3>

      <div className="space-y-2 text-center">
        <p className="text-gray-600">We&apos;ll confirm your booking shortly</p>
        <p className="text-gray-500 text-sm">
          Confirmation will be sent to your email
        </p>
      </div>

      <button
        onClick={() => {
          setShowSuccess(false);
        }}
        className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800"
      >
        Done
      </button>
    </div>
  );
};

export default TennisMastersPage;
