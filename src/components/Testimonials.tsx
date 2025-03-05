import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const Testimonials = () => {
  const { t } = useTranslation("common");

  const testimonials = [
    {
      name: t("testimonials.james.name"),
      role: t("testimonials.james.role"),
      location: t("testimonials.james.location"),
      content: t("testimonials.james.content"),
      rating: 5,
    },
    {
      name: t("testimonials.sophie.name"),
      role: t("testimonials.sophie.role"),
      location: t("testimonials.sophie.location"),
      content: t("testimonials.sophie.content"),
      rating: 5,
    },
    {
      name: t("testimonials.michael.name"),
      role: t("testimonials.michael.role"),
      location: t("testimonials.michael.location"),
      content: t("testimonials.michael.content"),
      rating: 5,
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-black">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg border border-black/5 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-black mb-4" />
              <p className="text-black text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <h4 className="text-black font-medium text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-black/80">{testimonial.role}</p>
                <p className="text-black/60 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
