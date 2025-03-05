import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Wilson",
      role: "Business Executive",
      location: "London, UK",
      content:
        "The service was exceptional. The black Mercedes S-Class was immaculate, and the chauffeur was professional and punctual. Perfect for my business meetings in Monaco.",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      role: "Luxury Travel Consultant",
      location: "Paris, France",
      content:
        "As someone who arranges luxury travel experiences, I can say Monaco Express sets the standard. Their fleet of black sedans and attention to detail is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "International Investor",
      location: "Singapore",
      content:
        "The most reliable and luxurious transfer service in Monaco. The black BMW 7 Series was perfect for my needs, and the service was consistently excellent.",
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
            Client Testimonials
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Experience luxury transfers through the eyes of our valued clients
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
