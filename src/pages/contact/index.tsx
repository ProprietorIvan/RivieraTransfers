import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Users,
  Anchor,
  Clock,
  Euro,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";

const yachtCategories = [
  {
    title: "Luxury Day Yachts (30-50ft)",
    description: "Perfect for day trips and coastal adventures",
    yachts: [
      {
        name: "Sunseeker Portofino 40",
        image: "/photos/boat1/000001.jpg",
        specs: "40ft • Up to 8 guests • 2 cabins",
      },
      {
        name: "Azimut 45",
        image: "/photos/boat1/000002.jpg",
        specs: "45ft • Up to 10 guests • 2 cabins",
      },
      {
        name: "Princess V48",
        image: "/photos/boat1/000003.jpg",
        specs: "48ft • Up to 12 guests • 3 cabins",
      },
    ],
  },
  {
    title: "Premium Cruising Yachts (50-80ft)",
    description: "Ideal for extended cruising and luxury stays",
    yachts: [
      {
        name: "Ferretti 75",
        image: "/photos/boat1/000004.jpg",
        specs: "75ft • Up to 12 guests • 4 cabins",
      },
      {
        name: "Pershing 64",
        image: "/photos/boat1/000005.jpg",
        specs: "64ft • Up to 10 guests • 3 cabins",
      },
      {
        name: "Riva 68",
        image: "/photos/boat1/000006.jpg",
        specs: "68ft • Up to 12 guests • 4 cabins",
      },
    ],
  },
  {
    title: "Superyachts (80ft+)",
    description: "The ultimate in luxury and prestige",
    yachts: [
      {
        name: "Benetti Classic 120",
        image: "/photos/boat1/000007.jpg",
        specs: "120ft • Up to 12 guests • 6 cabins",
      },
      {
        name: "Heesen 164",
        image: "/photos/boat1/000008.jpg",
        specs: "164ft • Up to 12 guests • 7 cabins",
      },
      {
        name: "CRN Mega 200",
        image: "/photos/boat1/000009.jpg",
        specs: "200ft • Up to 12 guests • 8 cabins",
      },
    ],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "email", // email, phone, or whatsapp
    yachtSize: "",
    guestCount: "",
    tripDuration: "",
    startDate: "",
    endDate: "",
    destination: "",
    budget: "",
    specialRequirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I'm interested in chartering a yacht."
    );
    window.open(`https://wa.me/+37793501234?text=${message}`, "_blank");
  };

  return (
    <>
      <Head>
        <title>Charter Your Dream Yacht | Riviera Yachts</title>
        <meta
          name="description"
          content="Experience the ultimate in luxury yacht charters. Choose from our premium fleet and let us create your perfect Mediterranean adventure."
        />
      </Head>

      <div className="min-h-screen bg-slate-50">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#93C5FD]/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-serif mb-6 text-slate-900">
                Your Journey Begins Here
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Select from our curated fleet of luxury yachts and let us create
                your perfect Mediterranean experience.
              </p>
              <div className="flex justify-center gap-6">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
                <a
                  href="tel:+37793501234"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Yacht Categories */}
        {yachtCategories.map((category, index) => (
          <section key={index} className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-slate-900">
                  {category.title}
                </h2>
                <p className="text-lg text-slate-600">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {category.yachts.map((yacht, yachtIndex) => (
                  <div key={yachtIndex} className="group relative">
                    <div className="relative h-[300px] rounded-xl overflow-hidden">
                      <Image
                        src={yacht.image}
                        alt={yacht.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-medium mb-2">{yacht.name}</h3>
                      <p className="text-sm text-white/90">{yacht.specs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-slate-900">
                Request a Quote
              </h2>
              <p className="text-lg text-slate-600">
                Fill out the form below and our team will create a personalized
                charter experience for you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-8 bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Yacht Size Preference
                  </label>
                  <select
                    name="yachtSize"
                    value={formData.yachtSize}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                  >
                    <option value="">Select size range</option>
                    <option value="30-50ft">30-50ft</option>
                    <option value="50-80ft">50-80ft</option>
                    <option value="80ft+">80ft+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    min="1"
                    max="12"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g., Monaco, Saint-Tropez"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Budget Range (€)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="10000-25000">€10,000 - €25,000</option>
                    <option value="25000-50000">€25,000 - €50,000</option>
                    <option value="50000-100000">€50,000 - €100,000</option>
                    <option value="100000+">€100,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Special Requirements
                </label>
                <textarea
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about any special requests, dietary requirements, or specific amenities you're looking for."
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-colors text-lg font-medium"
                >
                  <Anchor className="w-5 h-5" />
                  <span>Request Quote</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#93C5FD]/10 mb-4">
                  <MessageSquare className="w-6 h-6 text-[#93C5FD]" />
                </div>
                <h3 className="text-lg font-medium mb-2">WhatsApp</h3>
                <p className="text-slate-600">Message us anytime</p>
                <button
                  onClick={handleWhatsApp}
                  className="mt-4 text-[#93C5FD] hover:text-[#93C5FD]/80 transition-colors"
                >
                  Start Chat
                </button>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#93C5FD]/10 mb-4">
                  <Phone className="w-6 h-6 text-[#93C5FD]" />
                </div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-slate-600">24/7 Availability</p>
                <a
                  href="tel:+37793501234"
                  className="mt-4 block text-[#93C5FD] hover:text-[#93C5FD]/80 transition-colors"
                >
                  +377 93 50 12 34
                </a>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#93C5FD]/10 mb-4">
                  <MapPin className="w-6 h-6 text-[#93C5FD]" />
                </div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-slate-600">Port Hercule, Monaco</p>
                <p className="text-slate-600">98000 Monaco</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
