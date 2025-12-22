"use client";

import React from "react";
import {
  Layers,
  ShieldCheck,
  Network,
  Settings,
  Activity,
  Cpu,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function DesignPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092160607-ec6c7c44d7c5?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("designHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("designS3HeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("designHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("designOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("designOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("designOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("designOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
                className="w-full h-[420px] object-cover"
                alt="Solution design"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= CORE ACTIVITIES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("designActivitiesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("designActivitiesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProcessCard icon={<Layers />} title={t("designAct1Title")} desc={t("designAct1Desc")} />
          <ProcessCard icon={<Network />} title={t("designAct2Title")} desc={t("designAct2Desc")} />
          <ProcessCard icon={<ShieldCheck />} title={t("designAct3Title")} desc={t("designAct3Desc")} />
          <ProcessCard icon={<Settings />} title={t("designAct4Title")} desc={t("designAct4Desc")} />
          <ProcessCard icon={<Activity />} title={t("designAct5Title")} desc={t("designAct5Desc")} />
          <ProcessCard icon={<Cpu />} title={t("designAct6Title")} desc={t("designAct6Desc")} />
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("designBenefitsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("designBenefitsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard
            icon={<Layers />}
            title={t("designBenefit1Title")}
            desc={t("designBenefit1Desc")}
          />
          <BenefitCard
            icon={<ShieldCheck />}
            title={t("designBenefit2Title")}
            desc={t("designBenefit2Desc")}
          />
          <BenefitCard
            icon={<Activity />}
            title={t("designBenefit3Title")}
            desc={t("designBenefit3Desc")}
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
