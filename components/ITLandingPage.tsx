"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LanguageContext";

export default function ITSolutionsHero() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert(t("quoteSubmitted"));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-white shadow-md hover:shadow-xl transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* LEFT */}
          <div className="text-gray-900">
            <p className="text-red-500 font-light text-lg mb-4">
              {t("heroSmallTitle")}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-tight mb-8">
              {t("heroMainTitle")}
            </h1>

            {/* Office Card */}
            <div className="mt-12 bg-white rounded-xl p-8 border border-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-4">
                {t("officeLabel")}
              </p>

              <h2 className="text-2xl font-light mb-6">
                {t("headOffice")}
              </h2>

              <div className="space-y-2 text-gray-700 font-light leading-relaxed">
                <p>{t("officeAddressLine1")}</p>
                <p>{t("officeAddressLine2")}</p>

                <p className="mt-4 pt-4 border-t border-black">
                  {t("officePhone")}
                </p>
                <p>{t("officeEmail")}</p>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="bg-white rounded-xl p-8 lg:p-10 border border-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-2">
              {t("freeConsultation")}
            </p>

            <h2 className="text-3xl lg:text-[2.5rem] font-light text-gray-900 mb-2">
              {t("getFreeQuote")}
            </h2>

            <div
              className={`h-1 w-16 bg-red-500 rounded-full mb-8 ${
                isRTL ? "ml-auto" : ""
              }`}
            />

            <div className="space-y-5">
              {[
                { name: "fullName", placeholder: t("formFullName"), type: "text" },
                { name: "phone", placeholder: t("formPhone"), type: "tel" },
                { name: "email", placeholder: t("formEmail"), type: "email" },
                { name: "service", placeholder: t("formService"), type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`w-full px-5 py-3.5 border border-black rounded-lg outline-none font-light text-gray-900 placeholder:text-gray-400 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("formMessage")}
                className={`w-full px-5 py-3.5 border border-black rounded-lg outline-none resize-none font-light text-gray-900 placeholder:text-gray-400 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white font-light tracking-wide py-4 px-6 rounded-lg uppercase text-sm hover:bg-gray-900 transition"
              >
                {t("getFreeQuote")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
