import React from "react";
import {
  Car,
  Phone,
  Mail,
  ArrowRight,
  MapPin,
  Shield,
  Star,
  Calendar,
} from "lucide-react";
import { useRouter } from "next/router";
import Head from "next/head";
import ComparisonSection from "@/components/ComparisonSection";
import FAQ from "@/components/FAQ";
import StepsSection from "@/components/StepsSection";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Monaco Express",
    description:
      "Premium car transfer services in Monaco, Nice, and the French Riviera",
    url: "https://monaco-express.com",
    logo: "https://monaco-express.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monaco",
      addressCountry: "MC",
    },
    sameAs: [
      "https://www.facebook.com/monacoexpress",
      "https://www.instagram.com/monacoexpress",
      "https://twitter.com/monacoexpress",
    ],
    offers: {
      "@type": "Offer",
      description: "Luxury car transfers in the French Riviera",
      areaServed: "French Riviera",
    },
  };

  return (
    <>
      <Head>
        <title>
          Luxury Car Transfers in Monaco & French Riviera | Monaco Express
        </title>
        <meta
          name="description"
          content="Experience premium car transfers in Monaco, Nice, and the French Riviera. Professional service for airport transfers, Grand Prix events, and luxury travel."
        />
        <meta
          name="keywords"
          content="Monaco car transfer, Nice airport transfer, French Riviera transfers, Grand Prix transfers, luxury car service Monaco"
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Luxury Car Transfers in Monaco & French Riviera | Monaco Express"
        />
        <meta
          property="og:description"
          content="Experience premium car transfers in Monaco, Nice, and the French Riviera. Professional service for airport transfers and luxury travel."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://monaco-express.com" />
        <meta
          property="og:image"
          content="https://monaco-express.com/og-image.jpg"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Luxury Car Transfers in Monaco & French Riviera | Monaco Express"
        />
        <meta
          name="twitter:description"
          content="Experience premium car transfers in Monaco, Nice, and the French Riviera."
        />
        <meta
          name="twitter:image"
          content="https://monaco-express.com/twitter-image.jpg"
        />

        {/* Additional meta tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#1a365d" />
        <link rel="canonical" href="https://monaco-express.com" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section with Video Background */}
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
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <Navigation transparent={true} />

          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-end">
            <div className="max-w-2xl text-white text-right sm:pr-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-6 drop-shadow-lg">
                Premium Car Transfers in the French Riviera
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 drop-shadow">
                Experience luxury transfers between Monaco, Nice Airport, and
                the most exclusive destinations in the French Riviera.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={() => handleNavigation("/services")}
                  className="group flex items-center justify-center gap-2 bg-black/90 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors backdrop-blur-sm"
                  aria-label="Explore our transfer services"
                >
                  <Car className="w-4 h-4" />
                  <span>Our Services</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white/80 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
                  aria-label="Contact us about transfers"
                >
                  <Mail className="w-4 h-4" />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-white" aria-label="Key features">
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
                  Convenient transfers between Monaco, Nice Airport, and all
                  major Riviera destinations.
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

        {/* Additional Sections */}
        <ComparisonSection />
        <StepsSection />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />
      </div>
    </>
  );
};

export default Home;
