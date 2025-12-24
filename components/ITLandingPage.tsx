"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import Toast from "./Toast";

export default function ITSolutionsHero() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
  };

  const hideToast = () => {
    setToast({ show: false, type: "success", message: "" });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      showToast("error", t("pleaseFillAllFields"));
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("error", t("invalidEmail") || "Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch("http://localhost:3001/api/quotes/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }

      const data = await response.json();

      showToast("success", t("quoteSubmitted"));
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });

    } catch (error: any) {
      // Handle different types of errors
      let errorMessage = t("submissionError");

      if (error.name === "AbortError") {
        errorMessage = t("requestTimeout") || "Request timeout. Please try again.";
      } else if (error.message === "Failed to fetch") {
        errorMessage = t("serverUnavailable") || "Unable to connect to server. Please check your connection or try again later.";
      } else if (error.message) {

        errorMessage = error.message;
      }

      
      showToast("error", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
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
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
          duration={4000}
        />
      )}

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
                { name: "name", placeholder: t("formFullName"), type: "text", required: true },
                { name: "phone", placeholder: t("formPhone"), type: "tel", required: true },
                { name: "email", placeholder: t("formEmail"), type: "email", required: true },
                { name: "service", placeholder: t("formService"), type: "text", required: true },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  disabled={isSubmitting}
                  className={`w-full px-5 py-3.5 border border-black rounded-lg outline-none font-light text-gray-900 placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("formMessage")}
                disabled={isSubmitting}
                rows={4}
                className={`w-full px-5 py-3.5 border border-black rounded-lg outline-none resize-none font-light text-gray-900 placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors ${
                  isRTL ? "text-right" : "text-left"
                }`}
              />

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-black text-white font-light tracking-wide py-4 px-6 rounded-lg uppercase text-sm hover:bg-gray-900 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t("submitting")}
                  </>
                ) : (
                  t("getFreeQuote")
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}