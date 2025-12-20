"use client";

import { useLang } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  const changeLang = (newLang: "en" | "sa") => {
    document.cookie = `lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    setLang(newLang);
  };

  return (
    <div className="flex border rounded-md overflow-hidden text-sm">
      <button
        onClick={() => changeLang("en")}
        className={`px-3 py-1 ${
          lang === "en" ? "bg-[#0e355d] text-white" : "bg-white text-gray-600"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => changeLang("sa")}
        className={`px-3 py-1 ${
          lang === "sa" ? "bg-[#0e355d] text-white" : "bg-white text-gray-600"
        }`}
      >
        SA
      </button>
    </div>
  );
}
