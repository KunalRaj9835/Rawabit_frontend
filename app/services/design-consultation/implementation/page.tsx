"use client";

import React from "react";
import {
  Wrench,
  CheckCircle,
  ShieldCheck,
  GraduationCap,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function ImplementationPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092334494-1e7c1d9f31a0?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("implementationHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("implementationHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("implementationHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092918700-3c9a4f0e6c63?w=900"
                className="w-full h-[420px] object-cover"
                alt="Implementation oversight"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("implementationOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("implementationOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("implementationOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("implementationOverviewDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= CORE ACTIVITIES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("implementationActivitiesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("implementationActivitiesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProcessCard icon={<Wrench />} title={t("implementationAct1Title")} desc={t("implementationAct1Desc")} />
          <ProcessCard icon={<ClipboardCheck />} title={t("implementationAct2Title")} desc={t("implementationAct2Desc")} />
          <ProcessCard icon={<ShieldCheck />} title={t("implementationAct3Title")} desc={t("implementationAct3Desc")} />
          <ProcessCard icon={<GraduationCap />} title={t("implementationAct4Title")} desc={t("implementationAct4Desc")} />
          <ProcessCard icon={<CheckCircle />} title={t("implementationAct5Title")} desc={t("implementationAct5Desc")} />
          <ProcessCard icon={<TrendingUp />} title={t("implementationAct6Title")} desc={t("implementationAct6Desc")} />
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("implementationBenefitsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("implementationBenefitsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard
            icon={<CheckCircle />}
            title={t("implementationBenefit1Title")}
            desc={t("implementationBenefit1Desc")}
          />
          <BenefitCard
            icon={<GraduationCap />}
            title={t("implementationBenefit2Title")}
            desc={t("implementationBenefit2Desc")}
          />
          <BenefitCard
            icon={<TrendingUp />}
            title={t("implementationBenefit3Title")}
            desc={t("implementationBenefit3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function ProcessCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-3 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function BenefitCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-4 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
