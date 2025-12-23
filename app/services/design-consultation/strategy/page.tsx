"use client";

import React from "react";
import {
  Map,
  Target,
  Layers,
  TrendingUp,
  ShieldCheck,
  Compass,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import ProcessCard from "@/components/ProcessCard";
import BenefitCard from "@/components/BenefitCard";


export default function StrategyPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("strategyHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("strategyHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("strategyHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900"
                className="w-full h-[420px] object-cover"
                alt="Strategy planning"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("strategyOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("strategyOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("strategyOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("strategyOverviewDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= CORE ACTIVITIES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("strategyActivitiesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("strategyActivitiesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProcessCard icon={<Map />} title={t("strategyAct1Title")} desc={t("strategyAct1Desc")} />
          <ProcessCard icon={<Target />} title={t("strategyAct2Title")} desc={t("strategyAct2Desc")} />
          <ProcessCard icon={<Layers />} title={t("strategyAct3Title")} desc={t("strategyAct3Desc")} />
          <ProcessCard icon={<TrendingUp />} title={t("strategyAct4Title")} desc={t("strategyAct4Desc")} />
          <ProcessCard icon={<ShieldCheck />} title={t("strategyAct5Title")} desc={t("strategyAct5Desc")} />
          <ProcessCard icon={<Compass />} title={t("strategyAct6Title")} desc={t("strategyAct6Desc")} />
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("strategyBenefitsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("strategyBenefitsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard
            icon={<Target />}
            title={t("strategyBenefit1Title")}
            desc={t("strategyBenefit1Desc")}
          />
          <BenefitCard
            icon={<TrendingUp />}
            title={t("strategyBenefit2Title")}
            desc={t("strategyBenefit2Desc")}
          />
          <BenefitCard
            icon={<Compass />}
            title={t("strategyBenefit3Title")}
            desc={t("strategyBenefit3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

