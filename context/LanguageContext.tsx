"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, TranslationKey } from "@/translations";

type Lang = "en" | "sa";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LangContextType | null>(null);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.dir = lang === "sa" ? "rtl" : "ltr";
    document.documentElement.lang = lang === "sa" ? "ar" : "en";
  }, [lang]);

  const t = (key: TranslationKey): string => {
    return translations[lang][key];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
