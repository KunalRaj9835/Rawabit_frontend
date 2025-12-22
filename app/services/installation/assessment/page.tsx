"use client";

import React from "react";
import {
  Search,
  ClipboardList,
  Target,
  Layers,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function AssessmentPlanningPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("assessmentHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("assessmentHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("assessmentHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("assessmentOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("assessmentOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("assessmentOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("assessmentOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
                className="w-full h-[420px] object-cover"
                alt="Assessment and Planning"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= CORE ACTIVITIES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("assessmentActivitiesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("assessmentActivitiesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProcessCard
            icon={<Search />}
            title={t("assessmentAct1Title")}
            desc={t("assessmentAct1Desc")}
          />
          <ProcessCard
            icon={<ClipboardList />}
            title={t("assessmentAct2Title")}
            desc={t("assessmentAct2Desc")}
          />
          <ProcessCard
            icon={<Target />}
            title={t("assessmentAct3Title")}
            desc={t("assessmentAct3Desc")}
          />
          <ProcessCard
            icon={<Layers />}
            title={t("assessmentAct4Title")}
            desc={t("assessmentAct4Desc")}
          />
          <ProcessCard
            icon={<Lightbulb />}
            title={t("assessmentAct5Title")}
            desc={t("assessmentAct5Desc")}
          />
          <ProcessCard
            icon={<ShieldCheck />}
            title={t("assessmentAct6Title")}
            desc={t("assessmentAct6Desc")}
          />
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("assessmentBenefitsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("assessmentBenefitsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard
            icon={<Target />}
            title={t("assessmentBenefit1Title")}
            desc={t("assessmentBenefit1Desc")}
          />
          <BenefitCard
            icon={<ShieldCheck />}
            title={t("assessmentBenefit2Title")}
            desc={t("assessmentBenefit2Desc")}
          />
          <BenefitCard
            icon={<Layers />}
            title={t("assessmentBenefit3Title")}
            desc={t("assessmentBenefit3Desc")}
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
