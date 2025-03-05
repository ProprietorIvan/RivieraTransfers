import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { text: "Home", url: "/" },
        { text: "Services", url: "/services" },
        { text: "Destinations", url: "/destinations" },
        { text: "Events", url: "/events" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Airport Transfers", url: "/services/airport" },
        { text: "Grand Prix Transfers", url: "/services/grand-prix" },
        { text: "Tennis Masters", url: "/services/tennis" },
        { text: "Corporate Events", url: "/services/corporate" },
      ],
    },
    {
      title: "Contact",
      items: [
        { icon: Phone, text: "+377 6 78 63 63 46" },
        { icon: Mail, text: "info@monaco-express.com" },
        { icon: MapPin, text: "Monte Carlo, Monaco" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/monacoexpress" },
    { icon: Instagram, url: "https://instagram.com/monacoexpress" },
    { icon: Linkedin, url: "https://linkedin.com/company/monacoexpress" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-blue-900/80 to-transparent backdrop-blur-sm text-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <h2 className="text-3xl font-['Alex_Brush'] text-white tracking-wider">
              Monaco Express
            </h2>
            <p className="text-slate-700 text-lg">
              Experience premium car transfers in Monaco and the French Riviera
              with Monaco Express.
            </p>
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
              © {new Date().getFullYear()} Monaco Express. All rights reserved.
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
