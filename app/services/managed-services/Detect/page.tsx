"use client";

import React from "react";
import {
  Shield,
  AlertTriangle,
  Eye,
  Bell,
  Activity,
  Brain,
  Search,
  Lock,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import ProcessCard from "@/components/ProcessCard";
import BenefitCard from "@/components/BenefitCard";


export default function DetectPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("detectHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("detectHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("detectHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("detectOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("detectOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("detectOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("detectOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900"
                className="w-full h-[420px] object-cover"
                alt="Threat Detection"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= BEHAVIOR ANALYSIS ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
                className="w-full h-[420px] object-cover"
                alt="Behavior Analysis"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("detectAnalysisLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("detectAnalysisTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("detectAnalysisDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("detectAnalysisDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= DETECTION CAPABILITIES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("detectCapabilitiesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("detectCapabilitiesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProcessCard icon={<AlertTriangle />} title={t("detectCapAnomalyTitle")} desc={t("detectCapAnomalyDesc")} />
          <ProcessCard icon={<Shield />} title={t("detectCapSecurityTitle")} desc={t("detectCapSecurityDesc")} />
          <ProcessCard icon={<Activity />} title={t("detectCapPerformanceTitle")} desc={t("detectCapPerformanceDesc")} />
          <ProcessCard icon={<Brain />} title={t("detectCapAiTitle")} desc={t("detectCapAiDesc")} />
          <ProcessCard icon={<Bell />} title={t("detectCapAlertTitle")} desc={t("detectCapAlertDesc")} />
          <ProcessCard icon={<Search />} title={t("detectCapInspectTitle")} desc={t("detectCapInspectDesc")} />
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("detectBenefitsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("detectBenefitsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard icon={<Eye />} title={t("detectBenefitVisibilityTitle")} desc={t("detectBenefitVisibilityDesc")} />
          <BenefitCard icon={<Lock />} title={t("detectBenefitRiskTitle")} desc={t("detectBenefitRiskDesc")} />
          <BenefitCard icon={<Brain />} title={t("detectBenefitAutomationTitle")} desc={t("detectBenefitAutomationDesc")} />
        </div>
      </section>

    </main>
  );
}


