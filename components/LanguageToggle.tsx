"use client";

import { useLang } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center border rounded-md overflow-hidden text-sm">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 transition
          ${lang === "en" ? "bg-[#0e355d] text-white" : "bg-white text-gray-600"}
        `}
      >
        EN
      </button>

      <button
        onClick={() => setLang("sa")}
        className={`px-3 py-1 transition
          ${lang === "sa" ? "bg-[#0e355d] text-white" : "bg-white text-gray-600"}
        `}
      >
        SA
      </button>
    </div>
  );
}
