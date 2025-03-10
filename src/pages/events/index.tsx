import React from "react";
import Navigation from "@/components/Navigation";
import {
  Calendar,
  Star,
  Clock,
  Phone,
  ArrowRight,
  Car,
  Users,
  Trophy,
  Building2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Monaco Grand Prix",
    description:
      "Luxury transfers for the world's most prestigious Formula 1 race",
    image: "/images/events/grand-prix.webp",
    icon: <Trophy className="w-8 h-8" />,
    link: "/services/grand-prix",
  },
  {
    title: "Rolex Monte-Carlo Masters",
    description: "Premium transfers for the prestigious tennis tournament",
    image: "/images/events/tennis.webp",
    icon: <Star className="w-8 h-8" />,
    link: "/services/tennis",
  },
  {
    title: "Corporate Events",
    description: "Professional transfers for business conferences and meetings",
    image: "/images/events/corporate.webp",
    icon: <Building2 className="w-8 h-8" />,
    link: "/services/corporate",
  },
  {
    title: "Special Occasions",
    description: "Luxury transfers for weddings, parties, and celebrations",
    image: "/images/events/special.webp",
    icon: <Users className="w-8 h-8" />,
    link: "/services/transfer",
  },
];

const EventsPage = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/377678636346?text=Hello! I'm interested in transfers for an upcoming event.",
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
              Special Events
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 drop-shadow">
              Luxury transfers for the most prestigious events in Monaco and the
              French Riviera.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("events-grid")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-6 h-6" />
                <span>View Events</span>
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

      {/* Events Grid */}
      <section className="py-20 bg-white" id="events-grid">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Discover our specialized transfer services for major events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Link
                key={index}
                href={event.link}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      {event.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </div>
                  <p className="text-white/90">{event.description}</p>
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
                <Car className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">
                Event-Specific Service
              </h3>
              <p className="text-slate-600">
                Specialized transfers tailored to each event&apos;s
                requirements.
              </p>
            </div>
            <div className="text-center group">
              <div className="mb-4 inline-flex p-4 bg-black/5 rounded-full transition-all duration-300 group-hover:bg-black/10">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">
                Flexible Timing
              </h3>
              <p className="text-slate-600">
                Adaptable schedules to match event timings and your needs.
              </p>
            </div>
            <div className="text-center group sm:col-span-2 md:col-span-1">
              <div className="mb-4 inline-flex p-4 bg-black/5 rounded-full transition-all duration-300 group-hover:bg-black/10">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">
                Group Transfers
              </h3>
              <p className="text-slate-600">
                Comfortable vehicles for groups of any size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Planning an Event?
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

export default EventsPage;
