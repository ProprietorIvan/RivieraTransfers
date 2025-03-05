import React, { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, User } from "lucide-react";
import Input from "./Input";

interface AskContactsForQuoteProps {
  quote: string;
  query: string;
  type: string;
  handleIsBlurred: (value: boolean) => void;
  contactForm: {
    name: string;
    phone: string;
    email: string;
    address: string;
    question?: string;
  };
  setContactForm: (form: any) => void;
  imgs: string[];
}

const AskContactsForQuote: React.FC<AskContactsForQuoteProps> = ({
  quote,
  query,
  type,
  handleIsBlurred,
  contactForm,
  setContactForm,
  imgs,
}) => {
  const head = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (head.current) {
      head.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleIsBlurred(false);
  };

  return (
    <div ref={head} className="mt-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-medium mb-2">Get Your Detailed Quote</h3>
        <p className="text-sm text-gray-600">
          Please provide your contact details to view the complete quote
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
              className="pl-10"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={contactForm.phone}
              onChange={(e) =>
                setContactForm({ ...contactForm, phone: e.target.value })
              }
              className="pl-10"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Email Address"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
              className="pl-10"
              required
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Address"
              value={contactForm.address}
              onChange={(e) =>
                setContactForm({ ...contactForm, address: e.target.value })
              }
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="relative">
          <Input
            type="text"
            placeholder="Additional Notes (Optional)"
            value={contactForm.question}
            onChange={(e) =>
              setContactForm({ ...contactForm, question: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
        >
          View Complete Quote
        </button>
      </form>
    </div>
  );
};

export default AskContactsForQuote;
