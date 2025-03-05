import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");

  const footerLinks = [
    {
      title: t("navigation.home"),
      links: [
        { text: t("navigation.home"), url: "/" },
        { text: t("navigation.services"), url: "/services" },
        { text: t("navigation.destinations"), url: "/destinations" },
        { text: t("navigation.events"), url: "/events" },
        { text: t("navigation.contact"), url: "/contact" },
      ],
    },
    {
      title: t("navigation.services"),
      links: [
        { text: t("services.airport"), url: "/services/airport" },
        { text: t("services.grandPrix"), url: "/services/grand-prix" },
        { text: t("services.tennis"), url: "/services/tennis" },
        { text: t("services.corporate"), url: "/services/corporate" },
      ],
    },
    {
      title: t("navigation.contact"),
      items: [
        { icon: Phone, text: t("contact.phone") },
        { icon: Mail, text: t("contact.email") },
        { icon: MapPin, text: t("contact.address") },
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
              © {new Date().getFullYear()} Monaco Express.{" "}
              {t("common.allRightsReserved")}
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors"
              >
                {t("common.privacyPolicy")}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors"
              >
                {t("common.termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
