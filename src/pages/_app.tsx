import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { initTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [i18n, setI18n] = useState<any>(null);

  useEffect(() => {
    const initI18n = async () => {
      const { i18n: i18nInstance } = await initTranslation(
        router.locale || "en",
        "common"
      );
      setI18n(i18nInstance);
    };
    initI18n();
  }, [router.locale]);

  if (!i18n) {
    return null;
  }

  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
