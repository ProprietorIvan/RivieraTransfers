import React from "react";
import { ArrowRight, Car, MapPin, Clock, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const ComparisonSection = () => {
  const { t } = useTranslation("common");

  const features = [
    {
      title: t("home.features.locations.title"),
      description: t("home.features.locations.description"),
      details: t("home.features.locations.details"),
      icon: Car,
      image: "/images/cars/5.avif",
      stats: [
        { value: "24/7", label: t("home.features.availability") },
        { value: "100%", label: t("home.features.luxuryFleet") },
      ],
    },
    {
      title: t("home.features.service.title"),
      description: t("home.features.service.description"),
      details: t("home.features.service.details"),
      icon: Shield,
      image: "/images/cars/1.jpg",
      stats: [
        { value: "10+", label: t("home.features.languages") },
        { value: "15+", label: t("home.features.experience") },
      ],
    },
    {
      title: t("home.features.routes.title"),
      description: t("home.features.routes.description"),
      details: t("home.features.routes.details"),
      icon: MapPin,
      image: "/images/cars/2.webp",
      stats: [
        { value: "30+", label: t("home.features.destinations") },
        { value: "100%", label: t("home.features.onTime") },
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Monaco Express Transfer Services",
    description:
      "Premium car transfer services in Monaco and the French Riviera",
    provider: {
      "@type": "Organization",
      name: "Monaco Express",
      image: "/logo.png",
    },
    areaServed: {
      "@type": "Place",
      name: "Monaco and French Riviera",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transfer Services",
      itemListElement: features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title,
          description: feature.description,
        },
      })),
    },
  };

  return (
    <>
      <Head>
        <title>{t("home.features.seo.title")} | Monaco Express</title>
        <meta name="description" content={t("home.features.seo.description")} />
        <meta name="keywords" content={t("home.features.seo.keywords")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900">
              {t("home.features.title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t("home.features.subtitle")}
            </p>
          </motion.div>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                variants={fadeInUp}
                className="relative"
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div
                    className={`space-y-8 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="inline-flex items-center gap-3 text-black font-medium bg-slate-100 px-4 py-2 rounded-full shadow-sm">
                      <feature.icon className="w-6 h-6" />
                      <span className="text-lg tracking-wide">
                        {feature.description}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-serif text-black drop-shadow-sm">
                      {feature.title}
                    </h3>

                    <p className="text-lg text-black leading-relaxed">
                      {feature.details}
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                      {feature.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl font-serif text-black mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm tracking-wider text-black">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-black hover:text-slate-700 transition-colors group font-medium"
                    >
                      <span className="font-medium">
                        {t("contact.bookNow")}
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div
                    className={`relative h-[600px] rounded-2xl overflow-hidden group ${
                      index % 2 === 0 ? "md:order-last" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/10 z-20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="mt-24 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group shadow-lg shadow-slate-200"
            >
              <span className="font-medium">{t("common.exploreServices")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ComparisonSection;
