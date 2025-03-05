import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { text: "Home", url: "/" },
        { text: "Our Fleet", url: "/fleet" },
        { text: "Testimonials", url: "/testimonials" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Yacht Charter", url: "/services/charter" },
        { text: "Private Events", url: "/services/events" },
        { text: "Corporate Retreats", url: "/services/corporate" },
        { text: "Special Occasions", url: "/services/occasions" },
      ],
    },
    {
      title: "Contact",
      items: [
        { icon: Phone, text: "+377 93 50 12 34" },
        { icon: Mail, text: "info@rivierayachts.com" },
        { icon: MapPin, text: "Port Hercule, Monaco" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com" },
    { icon: Instagram, url: "https://instagram.com" },
    { icon: Linkedin, url: "https://linkedin.com" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-[#93C5FD]/80 to-transparent backdrop-blur-sm text-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <p className="text-slate-700 text-lg">
              Experience the epitome of luxury yachting in the Mediterranean
              with Riviera Yachts.
            </p>
            <Link href="/" className="block">
              <div className="relative w-48 h-16">
                <Image
                  src="/logo.png"
                  alt="Riviera Yachts"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-slate-900" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-slate-700 hover:text-slate-900 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
                {section.items?.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-slate-900" />
                      <span className="text-slate-700">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-700 text-sm">
              © {new Date().getFullYear()} Riviera Yachts. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
