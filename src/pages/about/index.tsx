import React from "react";
import Navigation from "@/components/Navigation";
import {
  Star,
  Phone,
  ArrowRight,
  Car,
  Users,
  MapPin,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import Image from "next/image";

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service",
    icon: <Star className="w-8 h-8" />,
  },
  {
    title: "Reliability",
    description: "Count on us for punctual and dependable transfers",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Professionalism",
    description: "Our team maintains the highest standards of service",
    icon: <Award className="w-8 h-8" />,
  },
];

const AboutPage = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/377678636346?text=Hello! I'd like to learn more about your services.",
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
              Our Story
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 drop-shadow">
              Providing luxury transfers in Monaco and the French Riviera since
              2010
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("about-content")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Car className="w-6 h-6" />
                <span>Learn More</span>
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

      {/* About Content */}
      <section className="py-20 bg-white" id="about-content">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">
                Your Trusted Partner in Luxury Transfers
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Monaco Express has been at the forefront of
                luxury transfer services in Monaco and the French Riviera. Our
                commitment to excellence and customer satisfaction has made us
                the preferred choice for discerning travelers and event
                organizers.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With a fleet of premium vehicles and a team of professional
                chauffeurs, we ensure that every journey is comfortable, safe,
                and punctual. Whether you&apos;re traveling for business or
                pleasure, our service is tailored to meet your specific needs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">13+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/team.webp"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide our service
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 inline-flex p-4 bg-black/5 rounded-full transition-all duration-300 group-hover:bg-black/10">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif mb-2 text-black">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Experience Luxury Travel
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

export default AboutPage;
