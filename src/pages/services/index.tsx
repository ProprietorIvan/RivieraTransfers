import React from "react";
import Navigation from "@/components/Navigation";
import {
  Car,
  Plane,
  Trophy,
  Users,
  MapPin,
  Star,
  Calendar,
  Phone,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Airport Transfers",
    description: "Luxury transfers between Monaco and Nice Airport",
    icon: <Plane className="w-8 h-8" />,
    link: "/services/airport",
    image: "/images/cars/1.webp",
  },
  {
    title: "Grand Prix Transfers",
    description: "Specialized service for Monaco Grand Prix events",
    icon: <Trophy className="w-8 h-8" />,
    link: "/services/grand-prix",
    image: "/images/cars/2.webp",
  },
  {
    title: "Tennis Masters",
    description: "Premium transfers for Rolex Monte-Carlo Masters",
    icon: <Star className="w-8 h-8" />,
    link: "/services/tennis",
    image: "/images/cars/3.webp",
  },
  {
    title: "Corporate Events",
    description: "Professional transfers for business events",
    icon: <Users className="w-8 h-8" />,
    link: "/services/corporate",
    image: "/images/cars/4.webp",
  },
];

const ServicesPage = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/377678636346?text=Hello! I'm interested in your transfer services.",
      "_blank"
    );
  };

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
              Our Premium Services
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 drop-shadow">
              Experience luxury transfers tailored to your needs, from airport
              pickups to special events.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("services-grid")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Car className="w-6 h-6" />
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" id="services-grid">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Luxury Transfer Services
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our range of premium transfer services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="mb-4 inline-flex p-4 bg-black/5 rounded-full transition-all duration-300 group-hover:bg-black/10">
                <MapPin className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">
                Strategic Locations
              </h3>
              <p className="text-slate-600">
                Convenient transfers between Monaco, Nice Airport, and all major
                Riviera destinations.
              </p>
            </div>
            <div className="text-center group">
              <div className="mb-4 inline-flex p-4 bg-black/5 rounded-full transition-all duration-300 group-hover:bg-black/10">
                <Calendar className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">
                Special Events
              </h3>
              <p className="text-slate-600">
                Dedicated services for Monaco Grand Prix, Rolex Monte-Carlo
                Masters, and other prestigious events.
              </p>
            </div>
            <div className="text-center group sm:col-span-2 md:col-span-1">
              <div className="mb-4 inline-flex p-4 bg-black/5 rounded-full transition-all duration-300 group-hover:bg-black/10">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">
                Luxury Experience
              </h3>
              <p className="text-slate-600">
                Premium vehicles and professional chauffeurs for the ultimate
                comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your premium transfer service today
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

export default ServicesPage;
