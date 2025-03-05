import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({
  currentPage,
  showActions = true,
  transparent,
}: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: "HOME", url: "/" },
    { text: "OUR FLEET", url: "/fleet" },
    { text: "TESTIMONIALS", url: "/testimonials" },
    { text: "CONTACT", url: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#93C5FD]/80 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-48 h-20">
              <Image
                src="/logo.png"
                alt="Riviera Yachts"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url);
                  }}
                  className="text-base font-medium text-white hover:text-white/80 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 stroke-white" />
              ) : (
                <Menu className="h-5 w-5 stroke-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#93C5FD]/95 to-[#93C5FD]/50 backdrop-blur-sm shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url);
                    setIsMenuOpen(false);
                  }}
                  className="block py-2 px-3 text-sm text-white hover:text-white/80 rounded-xl transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
