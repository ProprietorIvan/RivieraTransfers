import React from "react";
import {
  Car,
  Plane,
  Clock,
  Calendar,
  MapPin,
  Star,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const StepsSection = () => {
  const { t } = useTranslation("common");

  const useCases = [
    {
      title: t("steps.airport.title"),
      description: t("steps.airport.description"),
      details: t("steps.airport.details"),
      icon: Plane,
      features: [
        t("steps.airport.features.tracking"),
        t("steps.airport.features.meetGreet"),
        t("steps.airport.features.luggage"),
        t("steps.airport.features.availability"),
        t("steps.airport.features.waiting"),
        t("steps.airport.features.communication"),
      ],
      benefits: [
        t("steps.airport.benefits.noQueue"),
        t("steps.airport.benefits.stressFree"),
        t("steps.airport.benefits.luggageHandling"),
        t("steps.airport.benefits.comfort"),
      ],
    },
    {
      title: t("steps.prebooked.title"),
      description: t("steps.prebooked.description"),
      details: t("steps.prebooked.details"),
      icon: Calendar,
      features: [
        t("steps.prebooked.features.booking"),
        t("steps.prebooked.features.scheduling"),
        t("steps.prebooked.features.routes"),
        t("steps.prebooked.features.corporate"),
        t("steps.prebooked.features.discounts"),
        t("steps.prebooked.features.priority"),
      ],
      benefits: [
        t("steps.prebooked.benefits.availability"),
        t("steps.prebooked.benefits.noStress"),
        t("steps.prebooked.benefits.quality"),
        t("steps.prebooked.benefits.timeSaving"),
      ],
    },
    {
      title: t("steps.events.title"),
      description: t("steps.events.description"),
      details: t("steps.events.details"),
      icon: Star,
      features: [
        t("steps.events.features.planning"),
        t("steps.events.features.vip"),
        t("steps.events.features.group"),
        t("steps.events.features.hours"),
        t("steps.events.features.traffic"),
        t("steps.events.features.packages"),
      ],
      benefits: [
        t("steps.events.benefits.stressFree"),
        t("steps.events.benefits.knowledge"),
        t("steps.events.benefits.coordination"),
        t("steps.events.benefits.premium"),
      ],
    },
    {
      title: t("steps.city.title"),
      description: t("steps.city.description"),
      details: t("steps.city.details"),
      icon: MapPin,
      features: [
        t("steps.city.features.expertise"),
        t("steps.city.features.response"),
        t("steps.city.features.stops"),
        t("steps.city.features.shopping"),
        t("steps.city.features.recommendations"),
        t("steps.city.features.waiting"),
      ],
      benefits: [
        t("steps.city.benefits.efficient"),
        t("steps.city.benefits.noParking"),
        t("steps.city.benefits.shopping"),
        t("steps.city.benefits.knowledge"),
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-black">
            {t("steps.title")}
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            {t("steps.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={fadeInUp}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-black/5 hover:shadow-xl transition-shadow p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-black/5 rounded-full">
                  <useCase.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-black">
                    {useCase.title}
                  </h3>
                  <p className="text-black/80">{useCase.description}</p>
                </div>
              </div>

              <p className="text-black text-lg mb-8 leading-relaxed">
                {useCase.details}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-black font-medium mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    {t("steps.keyFeatures")}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {useCase.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-black/80"
                      >
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-black font-medium mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    {t("steps.benefits")}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {useCase.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-black/80"
                      >
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
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
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group shadow-lg shadow-slate-200">
            <span className="font-medium">{t("steps.bookNow")}</span>
            <Car className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
