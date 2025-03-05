import React from "react";
import {
  Anchor,
  Phone,
  Mail,
  ArrowRight,
  Compass,
  Shield,
  Star,
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
    name: "Riviera Yachts",
    description:
      "Luxury yacht charter services in Monaco and the French Riviera",
    url: "https://rivierayachts.com",
    logo: "https://rivierayachts.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monaco",
      addressCountry: "MC",
    },
    sameAs: [
      "https://www.facebook.com/rivierayachts",
      "https://www.instagram.com/rivierayachts",
      "https://twitter.com/rivierayachts",
    ],
    offers: {
      "@type": "Offer",
      description: "Luxury yacht charters in the Mediterranean",
      areaServed: "Mediterranean Sea",
    },
  };

  return (
    <>
      <Head>
        <title>Luxury Yacht Charters in Monaco | Riviera Yachts</title>
        <meta
          name="description"
          content="Experience the ultimate in luxury yacht charters with Riviera Yachts. Discover the Mediterranean's most exclusive destinations aboard our prestigious fleet."
        />
        <meta
          name="keywords"
          content="luxury yacht charter, Monaco yacht rental, Mediterranean yacht charter, private yacht hire, luxury boat rental"
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Luxury Yacht Charters in Monaco | Riviera Yachts"
        />
        <meta
          property="og:description"
          content="Experience the ultimate in luxury yacht charters with Riviera Yachts. Discover the Mediterranean's most exclusive destinations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rivierayachts.com" />
        <meta
          property="og:image"
          content="https://rivierayachts.com/og-image.jpg"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Luxury Yacht Charters in Monaco | Riviera Yachts"
        />
        <meta
          name="twitter:description"
          content="Experience the ultimate in luxury yacht charters with Riviera Yachts."
        />
        <meta
          name="twitter:image"
          content="https://rivierayachts.com/twitter-image.jpg"
        />

        {/* Additional meta tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#95c4ef" />
        <link rel="canonical" href="https://rivierayachts.com" />

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
              <source src="/photos/homepage/background.mp4" type="video/mp4" />
            </video>
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          <Navigation transparent={true} />

          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-end">
            <div className="max-w-2xl text-white text-right sm:pr-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-6 drop-shadow-lg">
                Experience the Ultimate in Luxury Yacht Charters
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 drop-shadow">
                Discover the Mediterranean&apos;s most exclusive destinations
                aboard our prestigious fleet of luxury yachts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={() => handleNavigation("/fleet")}
                  className="group flex items-center justify-center gap-2 bg-white/90 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-white transition-colors backdrop-blur-sm"
                  aria-label="Explore our yacht fleet"
                >
                  <Anchor className="w-4 h-4" />
                  <span>Explore Our Fleet</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white/80 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
                  aria-label="Contact us about yacht charters"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Us</span>
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
                  <Compass className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-serif mb-2 text-black">
                  Exclusive Destinations
                </h3>
                <p className="text-slate-600">
                  Experience the finest ports and hidden gems of the
                  Mediterranean.
                </p>
              </div>
              <div className="text-center group">
                <div className="mb-4 inline-flex p-4 bg-black/5 rounded-full transition-all duration-300 group-hover:bg-black/10">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-serif mb-2 text-black">
                  Professional Crew
                </h3>
                <p className="text-slate-600">
                  Expert captains and attentive staff at your service.
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
                  Unparalleled comfort and service on every journey.
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
