"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LanguageContext";

export default function ContactUs() {
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
    alert(t("contactSuccess"));
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
    <div className="min-h-screen bg-white pt-20" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <div
        className="relative py-20 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/contact/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
            {t("contactHeroTitle")}
          </h1>
          <p className="text-gray-300 text-lg font-light">
            {t("contactHeroSubtitle")}
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">

          {/* LEFT */}
          <div>
            <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-4">
              {t("contactLabel")}
            </p>

            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              {t("contactTitle")}
            </h2>

            <p className="text-gray-600 font-light leading-relaxed mb-12">
              {t("contactDesc")}
            </p>

            <div className="bg-white rounded-xl p-8 border border-black shadow-xl">
              <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-4">
                {t("contactOfficeLabel")}
              </p>

              <h3 className="text-2xl font-light mb-6 text-gray-900">
                {t("contactOfficeName")}
              </h3>

              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>{t("contactAddressLine1")}</p>
                <p>{t("contactAddressLine2")}</p>

                <div className="pt-6 border-t border-gray-300">
                  <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-3">
                    {t("contactCall")}
                  </p>
                  <p>+966 50 414 2951</p>
                  <p>+966 11 516 0125</p>
                </div>

                <div className="pt-6 border-t border-gray-300">
                  <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-3">
                    {t("contactEmail")}
                  </p>
                  <p>info@rawabitnetworks.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-xl p-8 lg:p-10 border border-black shadow-xl">
            <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-2">
              {t("contactFormLabel")}
            </p>

            <h2 className="text-3xl lg:text-[2.5rem] font-light text-gray-900 mb-2">
              {t("contactFormTitle")}
            </h2>

            <div className="h-1 w-16 bg-red-500 rounded-full mb-8" />

            <div className="space-y-5">
              {[
                { name: "fullName", placeholder: t("contactName"), type: "text" },
                { name: "phone", placeholder: t("contactPhone"), type: "tel" },
                { name: "email", placeholder: t("contactEmailInput"), type: "email" },
                { name: "service", placeholder: t("contactService"), type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-5 py-3.5 border border-black rounded-lg outline-none font-light"
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contactMessage")}
                className="w-full px-5 py-3.5 border border-black rounded-lg resize-none font-light"
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white font-light py-4 rounded-lg uppercase text-sm"
              >
                {t("contactSubmit")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
