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

const StepsSection = () => {
  const useCases = [
    {
      title: "Airport Transfers",
      description: "Seamless airport connections",
      details:
        "Professional meet-and-greet service at Nice Côte d'Azur Airport. Our chauffeurs track your flight and ensure timely pickups, whether you're arriving or departing.",
      icon: Plane,
      features: [
        "Real-time flight tracking for accurate pickups",
        "Meet and greet service with name board",
        "Luggage assistance and handling",
        "24/7 availability for all flights",
        "Complimentary waiting time for delays",
        "Direct communication with your chauffeur",
      ],
      benefits: [
        "No waiting in taxi queues",
        "Stress-free airport experience",
        "Professional luggage handling",
        "Comfortable journey to your destination",
      ],
    },
    {
      title: "Pre-Booked Transfers",
      description: "Reliable scheduled pickups",
      details:
        "Book your luxury sedan in advance for any occasion. Perfect for business meetings, special events, or when you simply want to avoid waiting for taxis.",
      icon: Calendar,
      features: [
        "Advance booking with instant confirmation",
        "Flexible scheduling options",
        "Regular route arrangements",
        "Corporate account management",
        "Recurring booking discounts",
        "Priority service for regular clients",
      ],
      benefits: [
        "Guaranteed availability",
        "No last-minute stress",
        "Consistent service quality",
        "Time-saving for busy professionals",
      ],
    },
    {
      title: "Special Events",
      description: "Premium event transportation",
      details:
        "Dedicated luxury transfer service for Monaco Grand Prix, Rolex Monte-Carlo Masters, and other prestigious events. Experience stress-free event transportation.",
      icon: Star,
      features: [
        "Event-specific route planning",
        "VIP access and priority parking",
        "Group transfer coordination",
        "Extended service hours",
        "Event day traffic management",
        "Special event packages",
      ],
      benefits: [
        "Stress-free event transportation",
        "Expert local knowledge",
        "Group coordination",
        "Premium service during peak times",
      ],
    },
    {
      title: "City Transfers",
      description: "Intra-city luxury travel",
      details:
        "Efficient transfers between Monaco's key locations. From the Casino to the Port, or between luxury hotels and restaurants, travel in style and comfort.",
      icon: MapPin,
      features: [
        "Local expertise and route optimization",
        "Quick response times",
        "Multiple stop arrangements",
        "Shopping assistance",
        "Hotel and restaurant recommendations",
        "Flexible waiting times",
      ],
      benefits: [
        "Efficient local travel",
        "No parking hassles",
        "Convenient shopping assistance",
        "Local insider knowledge",
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
            Our Transfer Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover our comprehensive range of luxury transfer solutions
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
                    Key Features
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
                    Benefits
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
            <span className="font-medium">Book Your Transfer</span>
            <Car className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
