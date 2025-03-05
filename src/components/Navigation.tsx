import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    { text: "SERVICES", url: "/services" },
    { text: "DESTINATIONS", url: "/destinations" },
    { text: "EVENTS", url: "/events" },
    { text: "CONTACT", url: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-900/80 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-['Alex_Brush'] text-white tracking-wider">
              Monaco Express
            </h1>
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-blue-900/95 to-blue-900/50 backdrop-blur-sm shadow-lg">
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
