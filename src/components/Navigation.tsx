import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavigationProps {
  transparent?: boolean;
}

const Navigation = ({ transparent = false }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { text: t("navigation.home"), url: "/" },
    { text: t("navigation.services"), url: "/services" },
    { text: t("navigation.destinations"), url: "/destinations" },
    { text: t("navigation.events"), url: "/events" },
    { text: t("navigation.contact"), url: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        transparent && !isScrolled
          ? "bg-transparent"
          : "bg-black/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-['Alex_Brush'] text-white">
            Monaco Express
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className={`text-sm font-medium transition-colors ${
                  router.pathname === link.url
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.text}
              </Link>
            ))}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname === link.url
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
