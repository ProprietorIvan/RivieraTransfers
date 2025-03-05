import { useRouter } from "next/router";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "it", name: "Italiano" },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const { t, i18n } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = async (newLocale: string) => {
    await i18n.changeLanguage(newLocale);
    router.push({ pathname, query }, asPath, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        aria-label={t("languageSwitcher.selectLanguage")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4" />
        <span>{languages.find((lang) => lang.code === locale)?.name}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                locale === language.code
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700"
              }`}
              aria-label={t("languageSwitcher.switchTo", {
                language: language.name,
              })}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
